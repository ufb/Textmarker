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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9fc2hhcmVkL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9fc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9oaXN0b3J5LXBhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvaGlzdG9yeS1zb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvaW1wb3J0LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL2xvZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL21vZHVsZXMvbWFya2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL25hdi5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2FkZG9uLXBhZ2UvbW9kdWxlcy9zeW5jaW5nLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvYWRkb24tcGFnZS9tb2R1bGVzL3RvZ2dsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9hZGRvbi1wYWdlL3Nhc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2RlZmF1bHQtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhL2xvZy1rZXlzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NvcHkuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZG9tbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Vycm9yLXRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2dldEFjdGl2ZVRhYi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9oYXNobGVzcy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9sMTBuLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21lZGlhdG9yLmpzIiwid2VicGFjazovLy8uL3V0aWxzL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9wb3J0LmpzIiwid2VicGFjazovLy8uL3V0aWxzL3N0b3JlLmpzIl0sIm5hbWVzIjpbIl9DT1BZIiwiX0dFVF9BQ1RJVkVfVEFCIiwiX0VYVEVORCIsIl9NT0RVTEUiLCJfRE9NTU9EVUxFIiwiX1NUT1JFIiwiX1BPUlQiLCJfTDEwTiIsIl9FUlJPUlRSQUNLRVIiLCJfSEFTSExFU1MiLCJldmVudHMiLCJFTlYiLCJlbnYiLCJfZ2V0X2Rvd25sb2FkX29wdGlvbiIsImJyb3dzZXIiLCJzdG9yYWdlIiwiYXJlYV9zZXR0aW5ncyIsImdldCIsInRoZW4iLCJzZXR0aW5ncyIsImhpc3RvcnkiLCJkb3dubG9hZCIsIl9nZXRfbWFya2VycyIsIm1hcmtlcnMiLCJfZ2V0X3Nob3J0Y3V0cyIsInNob3J0Y3V0cyIsImFsbG93ZWRIYXNoZXMiLCJib290c3RyYXBwZWQiLCJhdXRvaW5pdCIsInN0YXJ0IiwiaW5pdE1haW5OYXYiLCJ0YWIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJzcGxpdCIsImluY2x1ZGVzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImFkZCIsIl9OQVYiLCJpbm5lclRleHQiLCJydW50aW1lIiwiZ2V0TWFuaWZlc3QiLCJ2ZXJzaW9uIiwic3VibmF2cyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJuIiwibGVuZ3RoIiwidG9nZ2xlQnV0dG9ucyIsInQiLCJfVE9HR0xFUiIsInNldEFkZG9uTGlua3MiLCJzZXRMb2dMaW5rIiwiYWRkb25VUkwiLCJpMThuIiwiZ2V0TWVzc2FnZSIsImFkZG9uTGlua3MiLCJhIiwiYUwiLCJocmVmIiwiaWQiLCJsb2dMaW5rIiwibG9ncyIsImwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJsb2ciLCJEYXRlIiwidG9VVENTdHJpbmciLCJlbCIsIkRPTSIsImNsaWNrIiwibnVtYmVyUGFnZXMiLCJudW1iZXJFbnRyaWVzIiwiY3VycmVudFBhZ2UiLCJwZXJQYWdlIiwidXBkYXRlRnJvbVN0b3JhZ2UiLCJlIiwibmV3UGFnZSIsImdldEF0dHJpYnV0ZSIsImVtaXQiLCJyZW5kZXIiLCJwcmV2IiwibmV4dCIsInVwZGF0ZSIsInJlbW92ZSIsInBwIiwiT2JqZWN0Iiwia2V5cyIsImVudHJpZXMiLCJzaWxlbnQiLCJNYXRoIiwiY2VpbCIsInJlc2V0IiwidWwiLCJBcnJheSIsImZyb20iLCJmb3JFYWNoIiwibGkiLCJwIiwicGFnZXMiLCJyIiwiZnJhZyIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJpIiwibWF4IiwibWluIiwiaiIsImFwcGVuZEJ1dHRvbiIsImluc2VydEJlZm9yZSIsImIiLCJidG4iLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsImNoYW5nZUNvdW50UGVyUGFnZSIsImJ5IiwiZGF0ZSIsImNyZWF0ZWQiLCJvYmplY3QiLCJfc29ydCIsImxhc3QiLCJmaWVsZCIsInNvcnQiLCJuYW1lIiwiYXoiLCJ6YSIsInJldmVyc2UiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUNvbXBhcmUiLCJjaGFuZ2UiLCJrZXl1cCIsImluaXRpYWxpemVkIiwibmFtZXMiLCJlbnRyeVRtcGwiLCJlbnRyaWVzQ29udGFpbmVyIiwicGFnZSIsInNvcnRlZCIsInZpZXdNb2RlIiwic2VhcmNoVGVybSIsInNlYXJjaGVkIiwidGFncyIsImZpbHRlcmVkIiwiZmlsdGVyT3B0aW9uc1NldCIsImluaXQiLCJyZXN1bWUiLCJtc2ciLCJsb2NrZWQiLCJjb25maXJtZWQiLCJjb25maXJtIiwidHlwZSIsInNwZWMiLCJ1bmRlZmluZWQiLCJnZXREYXRhIiwiZGF0YSIsInRleHQiLCJsaW5rIiwiam9pbiIsImJvZHkiLCJyZW1vdmVDaGlsZCIsImJhY2t1cCIsInBvcCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b0xvY2FsZVN0cmluZyIsInJlcGxhY2UiLCJjb250YWlucyIsImdldFVSTHMiLCJ1cmxzIiwibmV3TmFtZSIsInByb21wdCIsIm9sZE5hbWUiLCJhcmVhIiwicGFyZW50Tm9kZSIsInRhZyIsImZvcmNlIiwibyIsInN5bmMiLCJsb2NhbCIsIm9yaWdFbnRyaWVzIiwic3luY2VkIiwicHVzaCIsImNoZWNrZWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWN0aW9uIiwidmFsdWUiLCJ2YWwiLCJ0ZW1wbGF0ZSIsImNvbnRhaW5lciIsInNlYXJjaFRlcm1MZW5ndGgiLCJzZWFyY2hlZEZ1bGxUZXh0IiwiY2xvbmUiLCJlbnRyeSIsIm5hbWVGaWVsZCIsImlucHV0IiwibGFiZWwiLCJpbmZvQnV0dG9uIiwiZGV0YWlscyIsInNlYXJjaFJlc3VsdHMiLCJidXR0b25zIiwiZWRpdCIsInZpZXciLCJpbW11dCIsImltbXV0RWwiLCJsb2NrZWRFbCIsInRhZ0VsIiwiZmlsdGVyIiwiY2xvbmVOb2RlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ1cmwiLCJjbGFzc05hbWUiLCJvcHRpbWl6ZURhdGVTdHJpbmciLCJmaXJzdCIsIm1hcmtzIiwiZnVsbFRleHRTZWFyY2hSZXN1bHRzIiwicmVzIiwibWFyayIsInBvcyIsIm1hcmtUZXh0IiwibWFya1RleHRFbCIsImhpZ2hsaWdodCIsInQxIiwidDIiLCJ0MyIsInN1YnN0cmluZyIsInN1YnN0ciIsIm5vRW50cmllc0hpbnQiLCJzZWFyY2giLCJhY3Rpb25zIiwiY291bnQiLCJwcFNlbGVjdCIsImNoZWNrYWxsIiwibWV0aF8wIiwibWV0aF8xIiwibWV0aF8yIiwibWV0aF8zIiwic2VsZWN0IiwicGxhY2Vob2xkZXJPcHRpb24iLCJhbGxUYWdzIiwiYWRkRmlsdGVyT3B0IiwiZGlzYWJsZWQiLCJhdHRycyIsIm9wdCIsIm5vdGFnRmlsdGVyT3B0IiwiYWxsX21hcmtzX3BsdXNfbWV0YSIsImFsbF9tYXJrc19wbHVzX2xvc3QiLCJhbGxfbWFya3NfcGx1c19tZXRhX2FuZF9ub3RlcyIsImFsbF9tYXJrc19sb3N0IiwiZGVmYXVsdE1hcmtlcnMiLCJyZWplY3QiLCJrZXkiLCJuZXdMaW5lIiwibmV3TGluZXMiLCJub3RlIiwibm90ZVRleHQiLCJsb3N0IiwibSIsInRpdGxlIiwidHJpbSIsImdldFRleHQiLCJxIiwidGVybSIsInNlYXJjaFR5cGUiLCJjb3VudFNlbGVjdCIsImNsYXNzTWV0aCIsInRvZ2dsZSIsInNldHVwU2VhcmNoIiwicmVuZGVyRW50cmllcyIsInNlYXJjaENvdW50Iiwic2VhcmNoRnVsbFRleHQiLCJzZWFyY2hCeU5hbWUiLCJmb3VuZCIsInJlc3VsdHMiLCJ0YWJsZSIsInNldFZpZXciLCJzZXRUaW1lb3V0IiwiZm9jdXMiLCJzZXR1cFNvcnQiLCJfU09SVCIsInNvcnRTZWFyY2hSZXN1bHRzIiwibm9kZU5hbWUiLCJmaXJzdENoaWxkIiwiZmlsdGVyZWRFbnRyaWVzIiwicngiLCJjIiwiUmVnRXhwIiwic2VsZWN0ZWRJbmRleCIsImluZGV4T2YiLCJkaXJlY3RseSIsImlucHV0cyIsImRlbGVnYXRlQnV0dG9uQWN0aW9uIiwicXVlcnlTZWxlY3RvciIsInNldHVwVmlldyIsInRvZ2dsZUhlYWRlckZpZWxkcyIsInNldEZpbHRlck9wdGlvbnMiLCJtb3VzZWRvd24iLCJ1cGRhdGVFeHBvcnRMaW5rcyIsInN0b3JlU3RyaW5nIiwicGFyc2VkU3RyaW5nIiwicGFyc2UiLCJkaXNwbGF5RmFpbHVyZSIsInRyaWdnZXJGaWxlSW5wdXQiLCJoYW5kbGVGaWxlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImZpbGUiLCJmaWxlcyIsInNpemUiLCJtb2QiLCJvbmxvYWQiLCJ0YXJnZXQiLCJyZXN1bHQiLCJyZWFkQXNUZXh0IiwicmVhc29uIiwibG9jYWxEYXRhTGluayIsInN5bmNlZERhdGFMaW5rIiwidXBkYXRlRXhwb3J0TmFtZSIsInRhYmxlQm9keSIsInRyIiwidGRfZGF0ZSIsInRkX21zZyIsIm5vZGVfZGF0ZSIsIm5vZGVfbXNnIiwidGltZSIsIl9MT0dfS0VZUyIsImdldEtleUJ5VmFsdWUiLCJjbGVhciIsIl9NQVJLRVIiLCJjdXN0b21CZ0NvbG9yIiwic3R5bGVzIiwic2hhZG93IiwieCIsInkiLCJibHVyIiwiY29sb3IiLCJpbmplY3QiLCJwcmV2aWV3IiwibWFya2VyIiwiZXhpc3RpbmdTdHlsZSIsInN0eWxlIiwiYXV0b25vdGUiLCJzZXRTdHlsZSIsInN0eWxlU3BsaXQiLCJ0ZXh0U2hhZG93Iiwic2hhZG93U3BsaXQiLCJiZ0lucHV0IiwiY29sb3JJbnB1dCIsImJvcmRlcklucHV0IiwiYXV0b25vdGVJbnB1dCIsImJnIiwiYm9yZGVyIiwiYXV0b25vdGVDb2xvciIsInNoYWRvd1NlbGVjdCIsInByb3AiLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJpc1ZhbGlkIiwic2V0U2hhZG93IiwidmFsaWQiLCJ0ZXN0IiwicGFnZU5hdiIsImN1cnJlbnQiLCJoYXNBdHRyaWJ1dGUiLCJvcGVuIiwiY2xvc2UiLCJ0YXJnZXRJZCIsImFsbG93ZWRLZXlzIiwiYWxsb3dlZFNob3J0Y3V0cyIsImFsbG93ZWRRdWlja2J1dHRvbk9wdHMiLCJtYXJrZXJLZXlzIiwiY3VzdG9tTWFya2VyS2V5cyIsImN1c3RvbVNlYXJjaCIsInJlbmRlck1hcmtlclNlbGVjdE9wdGlvbnMiLCJ1cGRhdGVNYXJrZXIiLCJpbmplY3RTZXR0aW5ncyIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImtleVNlbGVjdCIsImtleUljb25zIiwiYWRkS2V5U2VsZWN0IiwicmVtb3ZlS2V5U2VsZWN0IiwiZnJhZ21lbnQxIiwiZnJhZ21lbnQyIiwiZnJhZ21lbnQzIiwiZnJhZ21lbnQ0Iiwib3B0aW9uIiwiaWNvbiIsIlZhbCIsInRvVXBwZXJDYXNlIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwic2NDaGVja2JveCIsInNjU2VsZWN0IiwiY21DaGVja2JveCIsInNjIiwiaGlzdG9yeVNldHRpbmdzIiwic2F2ZU9wdHMiLCJnZXRFbGVtZW50c0J5TmFtZSIsImF1dG9zYXZlIiwibmFtaW5nIiwic2F2ZUluUHJpdiIsImRyb3BMb3NzZXMiLCJzYXZlTm90ZSIsImlnbm9yZUhhc2giLCJtaXNjU2V0dGluZ3MiLCJtaXNjIiwibWFya21ldGhvZCIsImJtaWNvbiIsIm5vdGVpY29uIiwibm90ZW9uY2xpY2siLCJub3RldHJhbnNwIiwibm90ZXBsYWludmlldyIsImZhaWx1cmVOb3RlIiwic3VjY2Vzc05vdGUiLCJwYm1Ob3RlIiwiZXJyb3JOb3RlIiwidmlwTm90ZSIsInRtdWlwb3MiLCJ0YmJwb3dlciIsImFkZG9uIiwiYXV0b2NzIiwiaWZyYW1lcyIsInNob3dDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcyIsImhpZGVDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcyIsImNoYW5nZVN0eWxlIiwidG9nZ2xlQXV0b05vdGVPcHQiLCJjaGFuZ2VBdXRvTm90ZU9wdCIsImNoYW5nZUhhc2hPcHQiLCJ0b2dnbGVJbW11dE9wdCIsInRvZ2dsZURyb3BMb3NzZXNPcHQiLCJ0b2dnbGVBdXRvY3NPcHQiLCJ0b2dnbGVJRnJhbWVPcHQiLCJhZGRNYXJrZXIiLCJiZ0NvbG9yIiwiZ2V0UmFuZG9tTGlnaHRDb2xvciIsInNlbGVjdGVkIiwicmVtb3ZlTWFya2VyIiwiY2hhbmdlTWFya01ldGhvZCIsInRvZ2dsZVNob3J0Y3V0IiwiY2hhbmdlU2hvcnRjdXQiLCJ0b2dnbGVDdG0iLCJjaGFuZ2VTYXZlT3B0IiwidG9nZ2xlUHJpdlNhdmUiLCJjaGFuZ2VOYW1pbmdPcHQiLCJ0b2dnbGVTYXZlTm90ZU9wdCIsImNoYW5nZVF1aWNrYnV0dG9uT3B0Iiwic3dpdGNoUXVpY2tidXR0b25PcHQiLCJ0b2dnbGVOb3RlcyIsInRvZ2dsZU1pc2MiLCJ0b2dnbGVUQkJQb3dlck9wdCIsImNoYW5nZVRtdWlQb3NpdGlvbk9wdCIsImNoYW5nZUN1c3RvbVNlYXJjaCIsImlucDEiLCJpbnAyIiwicGFydDEiLCJwYXJ0MiIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJhcmVhX2hpc3RvcnkiLCJhcmVhX3BhZ2Vub3RlcyIsInRvZ2dsZVN3aXRjaCIsInVuZG8iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFByb3BhZ2F0aW9uIiwiZGF0YVRhcmdldCIsInRhcmdldHMiLCJkYXRhVG9nZ2xlIiwicm9sZXMiLCJyb2xlIiwiT05FT0ZGIiwieiIsInMiLCJkIiwidyIsImFycm93dXAiLCJhcnJvd2Rvd24iLCJzYiIsImNtIiwiY29weSIsImFjdGl2ZSIsIm92ZXJ3cml0ZSIsImNoYW5nZWROb3RlIiwicHJvZ3Jlc3NiYXIiLCJ0YWJzIiwibWV0YSIsInVuZm9sZGVkIiwibm90ZXMiLCJsaW5rcyIsInRoZW1lcyIsInRoZW1lIiwicGFnZW5vdGVzIiwibm90ZV9wYm0iLCJub3RlX3Jlc3RvcmF0aW9uX2ZhaWx1cmUiLCJub3RlX3VybCIsImVycm9yX3NhdmVfc3R5bGUiLCJlcnJvcl9zYXZlX190b2dnbGVfc2MiLCJlcnJvcl9zYXZlX2NoYW5nZV9zYyIsImVycm9yX3NhdmVfY3RtIiwiZXJyb3Jfc2F2ZV9hdXRvc2F2ZSIsImVycm9yX3NhdmVfbmFtaW5nIiwiZXJyb3Jfc2F2ZV9ub3RpZnkiLCJlcnJvcl9zYXZlX2Rvd25sb2FkIiwiZXJyb3Jfc2F2ZV9ibWljb24iLCJlcnJvcl9jbGVhbl9oaXN0b3J5IiwiZXJyb3JfYWRkX21hcmtlciIsImVycm9yX3JlbW92ZV9tYXJrZXIiLCJlcnJvcl9zYXZlX2VudHJ5IiwiZXJyb3JfdXBkYXRlX2VudHJ5IiwiZXJyb3JfZGVsX2VudHJ5IiwiZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb25zdGFydCIsImVycm9yX2VtcHR5X3N5bmNlZF9zdG9yYWdlX29udXBkYXRlIiwiZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnN0YXJ0IiwiZXJyb3JfaW1wb3J0X2VtcHR5IiwiZXJyb3JfaW1wb3J0X2hpc3RvcnkiLCJlcnJvcl9pbXBvcnRfc2V0dGluZ3MiLCJlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQiLCJlcnJvcl9pbXBvcnRfaGlzdG9yeV9ub3RfZm91bmQiLCJlcnJvcl9pbXBvcnRfc2V0dGluZ3Nfbm90X2ZvdW5kIiwiZXJyb3JfbmFtaW5nIiwiZXJyb3Jfc3RvcmFnZV9taWdyYXRpb24iLCJlcnJvcl9lbXB0eV9sb2NhbF9zdG9yYWdlX29udXBkYXRlIiwiZXJyb3JfdG9nZ2xlX3N5bmMiLCJlcnJvcl9zYXZlX3ByaXYiLCJub3RlX3Jlc3RvcmF0aW9uX3dhcm5pbmdfMSIsIm5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yIiwiZXJyb3Jfc2F2ZV9jaGFuZ2VfYXV0b25vdGUiLCJlcnJvcl9zYXZlX21hcmtfbWV0aG9kIiwianNfaW5qZWN0aW9uX2ZhaWx1cmUiLCJjc3NfaW5qZWN0aW9uX2ZhaWx1cmUiLCJzcmMiLCJpc0FycmF5IiwiaGFzT3duUHJvcGVydHkiLCJvYmoiLCJfYm91bmQiLCJfZXh0cmFCb3VuZCIsImFkZExpc3RlbmVyc01hbnVhbGx5IiwiYWRkTGlzdGVuZXJzIiwiYXV0b1BhdXNlIiwic2V0QXV0b1BhdXNlIiwic3ViTWFwIiwic2VsZWN0b3IiLCJfc2VsIiwibWV0aCIsImYiLCJpc0lkIiwiaXNDbGFzcyIsImlzRG9jIiwib24iLCJyZW1vdmVMaXN0ZW5lcnMiLCJoYW5kbGVyIiwiZG9tRXZlbnRzIiwicHJveHkiLCJnZW5lcmFsSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzcGxpY2UiLCJfZXh0cmEiLCJzZXQiLCJlcnJvciIsImZpbGVuYW1lIiwibWVzc2FnZSIsInNoaWZ0IiwibGluZW5vIiwiY29sbm8iLCJnZXRUaW1lIiwib2JqMSIsIm9iajIiLCJxdWVyeSIsImN1cnJlbnRXaW5kb3ciLCJoIiwibGFzdEluZGV4T2YiLCJ0cmFuc2xhdGVEb2N1bWVudCIsImNhcHR1cmUiLCJwYXNzaXZlIiwib25jZSIsImRhdGFzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJnZXRVSUxhbmd1YWdlIiwidGV4dEVsZW1lbnRzIiwiYXR0ckVsZW1lbnRzIiwibDEwbklkIiwidGV4dENvbnRlbnQiLCJhdHRyIiwibDEwbkF0dHIiLCJ0b3BpY3MiLCJldmVudCIsImFyZ3MiLCJ0b3BpYyIsImFwcGx5Iiwic2VuZE1lc3NhZ2UiLCJldiIsIndhaXQiLCJjb250ZXh0IiwiZnVuYyIsImFyZ3MxIiwiYXJnczIiLCJjb25jYXQiLCJlbnZFdmVudHMiLCJfTUVESUFUT1IiLCJwb3J0Iiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJwYXNzTWVzc2FnZSIsImluaXRQb3J0aW5nIiwicmVnaXN0ZXJQb3J0RXZlbnRzIiwib25lT2ZmRXZlbnRzIiwiY29ubmVjdGlvbkJhc2VkRXZlbnRzIiwiQ09OTkVDVElPTiIsInBvc3RNZXNzYWdlIiwicmVxIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwibGFzdEFyZyIsImZyYW1lSWQiLCJwb3N0cG9uZUNvbm5lY3Rpb24iLCJjb25uZWN0IiwiYWRkQ29ubmVjdGlvbkxpc3RlbmVycyIsIm9uRGlzY29ubmVjdCIsImNiIiwib25Db25uZWN0IiwiaW5pdGlhbGl6aW5nIiwiX0RFRkFVTFRfU1RPUkFHRSIsInNldEFyZWFzIiwiUHJvbWlzZSIsImxvY2FsU3RvcmFnZSIsInN5bmNlZFN0b3JhZ2UiLCJfZ2V0X2hpc3RvcnkiLCJzeW5jZWRIaXN0b3J5IiwibG9jYWxIaXN0b3J5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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QixDQUFxQmxLLEdBQXJCLEdBQTJCQyxJQUEzQixDQUFnQyxVQUFBa21CLGFBQWE7QUFBQSxtQkFBSUEsYUFBYSxDQUFDdmtCLE9BQWQsSUFBeUIsRUFBN0I7QUFBQSxXQUE3QyxDQUFQO0FBQ0Q7O0FBQ0QsZUFBT3NrQixZQUFZLENBQUN0a0IsT0FBcEI7QUFDRCxPQUxNLENBQVA7QUFNRDs7OztFQXRHeUIxQyxlIiwiZmlsZSI6ImNvbnRlbnQvYWRkb24tcGFnZS9hZGRvbi1wYWdlLndwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jb250ZW50L2FkZG9uLXBhZ2UvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvY29weSdcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi8uLi91dGlscy9nZXRBY3RpdmVUYWInXHJcbmltcG9ydCBfRVhURU5EIGZyb20gJy4vLi4vLi4vdXRpbHMvZXh0ZW5kJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9tb2R1bGUnXHJcbmltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2RvbW1vZHVsZSdcclxuaW1wb3J0IHsgX1NUT1JFIH0gZnJvbSAnLi8uLi8uLi91dGlscy9zdG9yZSdcclxuaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCB7IF9IQVNITEVTUyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvaGFzaGxlc3MnXHJcbmltcG9ydCBfTDEwTiBmcm9tICcuLy4uLy4uL3V0aWxzL2wxMG4nXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfR0VUX0FDVElWRV9UQUIsIF9FWFRFTkQsIF9NT0RVTEUsIF9ET01NT0RVTEUsIF9TVE9SRSwgX1BPUlQsIF9MMTBOLCBfRVJST1JUUkFDS0VSLCBfSEFTSExFU1MgfVxyXG4iLCJpbXBvcnQgeyBfU1RPUkUgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX1NUT1JFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAndG9nZ2xlZDpzeW5jJzogJ29uVG9nZ2xlZFN5bmMnXHJcbiAgICB9XHJcbiAgfSxcclxuICBlbnY6ICdhZGRvbi1wYWdlJyxcclxuXHJcbiAgX2dldF9kb3dubG9hZF9vcHRpb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gJ3RleHQnO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LmRvd25sb2FkO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X21hcmtlcnMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MubWFya2Vycyk7XHJcbiAgfSxcclxuICBfZ2V0X3Nob3J0Y3V0cygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5zaG9ydGN1dHMpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi9fc3RvcmUnXHJcbmltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uL19zaGFyZWQvdXRpbHMnXHJcblxyXG5pbXBvcnQgX0hJU1RPUlkgZnJvbSAnLi9tb2R1bGVzL2hpc3RvcnknXHJcbmltcG9ydCBfU0VUVElOR1MgZnJvbSAnLi9tb2R1bGVzL3NldHRpbmdzJ1xyXG5pbXBvcnQgX0xPR0dJTkcgZnJvbSAnLi9tb2R1bGVzL2xvZ3MnXHJcbmltcG9ydCBfU1lOQ0lORyBmcm9tICcuL21vZHVsZXMvc3luY2luZydcclxuaW1wb3J0IF9JTVBPUlQgZnJvbSAnLi9tb2R1bGVzL2ltcG9ydCdcclxuaW1wb3J0IF9DT05UQUNUIGZyb20gJy4vbW9kdWxlcy9jb250YWN0J1xyXG5pbXBvcnQgX1BBR0lOQVRPUiBmcm9tICcuL21vZHVsZXMvaGlzdG9yeS1wYWdpbmF0aW9uJ1xyXG5cclxuaW1wb3J0IF9OQVYgZnJvbSAnLi9tb2R1bGVzL25hdidcclxuXHJcbm5ldyBfTU9EVUxFKHtcclxuICBldmVudHM6IHtcclxuICAgIEVOVjoge1xyXG4gICAgICAnc3RhcnRlZDphcHAnOiAnc3RhcnQnLFxyXG4gICAgICAndXBkYXRlZDpzZXR0aW5ncyc6ICdzdGFydCcsXHJcbiAgICAgICd1cGRhdGVkOmhpc3RvcnknOiAnc3RhcnQnXHJcbiAgICB9XHJcbiAgfSxcclxuICBhbGxvd2VkSGFzaGVzOiBbJ25ld3MnLCAnbWFudWFsJywgJ3NldHRpbmdzJywgJ2hpc3RvcnknLCAnY29udGFjdCcsICdzeW5jJywgJ2V4cG9ydCcsICdsb2dzJ10sXHJcbiAgYm9vdHN0cmFwcGVkOiBmYWxzZSxcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIF9TVE9SRS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZS5zZXR0aW5ncyAmJiBzdG9yYWdlLmhpc3RvcnkpIHRoaXMuc3RhcnQoKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgc3RhcnQoKSB7XHJcbiAgICBpZiAoIXRoaXMuYm9vdHN0cmFwcGVkKSB7XHJcbiAgICAgIHRoaXMuYm9vdHN0cmFwcGVkID0gdHJ1ZTtcclxuICAgICAgX0hJU1RPUlkoKTtcclxuICAgICAgX1NFVFRJTkdTKCk7XHJcbiAgICAgIF9MT0dHSU5HKCk7XHJcbiAgICAgIF9TWU5DSU5HKCk7XHJcbiAgICAgIF9JTVBPUlQoKTtcclxuICAgICAgX0NPTlRBQ1QoKTtcclxuICAgICAgX1BBR0lOQVRPUigpO1xyXG4gICAgICB0aGlzLmluaXRNYWluTmF2KCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBpbml0TWFpbk5hdigpIHtcclxuICAgIGNvbnN0IHRhYiA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc9JylbMV07XHJcblxyXG4gICAgaWYgKHRoaXMuYWxsb3dlZEhhc2hlcy5pbmNsdWRlcyh0YWIpKSB7XHJcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbm5hdi0nICsgdGFiKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIG5ldyBfTkFWKHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbm5hdicpKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgJy4vc2Fzcy9pbmRleC5zY3NzJ1xyXG5cclxuaW1wb3J0IF9FUlJPUlRSQUNLRVIgZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgeyBfTDEwTiB9IGZyb20gJy4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9OQVYgZnJvbSAnLi9tb2R1bGVzL25hdidcclxuaW1wb3J0IF9UT0dHTEVSIGZyb20gJy4vbW9kdWxlcy90b2dnbGVyJ1xyXG5pbXBvcnQgJy4vcG9ydCdcclxuaW1wb3J0ICcuL19zdG9yZSdcclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCdcclxuXHJcbl9MMTBOKCk7XHJcblxyXG4vKiBhdXRvLWluc2VydCBjdXJyZW50IHZlcnNpb24gbnVtYmVyICovXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2ZXJzaW9uLW51bWJlcicpLmlubmVyVGV4dCA9IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb247XHJcbi8qIGVuZDogYXV0by1pbnNlcnQgY3VycmVudCB2ZXJzaW9uIG51bWJlciAqL1xyXG5cclxuLyogY29uZmlndXJlIHN1Ym5hdnMgKi9cclxuY29uc3Qgc3VibmF2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N1Ym5hdicpO1xyXG5sZXQgbiA9IHN1Ym5hdnMubGVuZ3RoO1xyXG5cclxud2hpbGUobi0tKSBuZXcgX05BVihzdWJuYXZzW25dKTtcclxuLyogZW5kOiBjb25maWd1cmUgbmF2cyAqL1xyXG5cclxuLyogY29uZmlndXJlIHRvZ2dsZSBlbGVtZW50cyAqL1xyXG5sZXQgdG9nZ2xlQnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZ2dsZS1idXR0b24nKSxcclxuICAgIHQgPSB0b2dnbGVCdXR0b25zLmxlbmd0aDtcclxuXHJcbndoaWxlKHQtLSkgbmV3IF9UT0dHTEVSKHRvZ2dsZUJ1dHRvbnNbdF0pO1xyXG4vKiBlbmQ6IGNvbmZpZ3VyZSB0b2dnbGUgZWxlbWVudHMgKi9cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX01PRFVMRSh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3VwZGF0ZWQ6bG9ncyc6ICdzZXRMb2dMaW5rJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIHRoaXMuc2V0QWRkb25MaW5rcygpXHJcbiAgICAgICAgICAuc2V0TG9nTGluaygpO1xyXG4gICAgfSxcclxuICAgIHNldEFkZG9uTGlua3MoKSB7XHJcbiAgICAgIGxldCBhZGRvblVSTCA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd1cmxfbW96X2FkZG9uJyksXHJcbiAgICAgICAgICBhZGRvbkxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW96LWFkZG9uJyksXHJcbiAgICAgICAgICBhID0gYWRkb25MaW5rcy5sZW5ndGgsXHJcbiAgICAgICAgICBhTDtcclxuXHJcbiAgICAgIHdoaWxlIChhLS0pIHtcclxuICAgICAgICBhTCA9IGFkZG9uTGlua3NbYV07XHJcbiAgICAgICAgYUwuaHJlZiA9IGFkZG9uVVJMO1xyXG4gICAgICAgIGlmIChhTC5pZCA9PT0gJ21vei1hZGRvbi0tY29udGFjdCcpIGFMLmlubmVyVGV4dCA9IGFkZG9uVVJMO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBzZXRMb2dMaW5rKCkge1xyXG4gICAgICBjb25zdCBsb2dMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZy1tYWlsJyk7XHJcblxyXG4gICAgICBfU1RPUkUuZ2V0KCdsb2dzJykudGhlbihsb2dzID0+IHtcclxuICAgICAgICBsZXQgbCA9IGxvZ3MgPyBsb2dzLmxlbmd0aCA6IDAsXHJcbiAgICAgICAgICAgIGhyZWYgPVxyXG4gICAgICAgICAgICAgICdtYWlsdG86dW5kZmx5YmlyQGdteC5kZT9zdWJqZWN0PVRleHRtYXJrZXInICtcclxuICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoJyA6IEVycm9yIExvZ3MnKSArXHJcbiAgICAgICAgICAgICAgJyZib2R5PScrXHJcbiAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KCctICcgKyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgneW91cl9tc2cnKSArICcgLVxcblxcblxcbkxPR1M6XFxuXFxuJyksXHJcbiAgICAgICAgICAgIGxvZztcclxuXHJcbiAgICAgICAgd2hpbGUobC0tKSB7XHJcbiAgICAgICAgICBsb2cgPSBsb2dzW2xdO1xyXG4gICAgICAgICAgaHJlZiArPSBsb2dbMV0gKyAobG9nWzJdID8gJyAoJyArIGxvZ1syXSArICcpJyA6ICcnKSArICcgLSAnICsgZW5jb2RlVVJJQ29tcG9uZW50KChuZXcgRGF0ZShsb2dbMF0pLnRvVVRDU3RyaW5nKCkpICsgJ1xcbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2dMaW5rLmhyZWYgPSBocmVmO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX1RPR0dMRVIgZnJvbSAnLi90b2dnbGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnaW5hdG9yJyksXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ3NhdmVkOmVudHJ5JzogJ2FkZCcsXHJcbiAgICAgICAgJ2RlbGV0ZWQ6ZW50cmllcyc6ICd1cGRhdGVGcm9tU3RvcmFnZScsXHJcbiAgICAgICAgJ2ZpbHRlcmVkOmhpc3RvcnknOiAncmVzZXQnLFxyXG4gICAgICAgICdpbXBvcnRlZDpoaXN0b3J5JzogJ3VwZGF0ZUZyb21TdG9yYWdlJyxcclxuICAgICAgICAnY2hhbmdlZDpwZXItcGFnZS1jb3VudCc6ICdjaGFuZ2VDb3VudFBlclBhZ2UnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAnLnBhZ2UnOiAnZ290bycsXHJcbiAgICAgICAgICAnLnByZXYnOiAncHJldicsXHJcbiAgICAgICAgICAnLm5leHQnOiAnbmV4dCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBudW1iZXJQYWdlczogMSxcclxuICAgIG51bWJlckVudHJpZXM6IDAsXHJcbiAgICBjdXJyZW50UGFnZTogMSxcclxuICAgIHBlclBhZ2U6IDEwLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUZyb21TdG9yYWdlKCk7XHJcbiAgICB9LFxyXG4gICAgZ290byhlLCBlbCkge1xyXG4gICAgICBjb25zdCBuZXdQYWdlID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXBhZ2UnKSAqIDE7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlICE9PSBuZXdQYWdlKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdwYWdpbmF0ZTpoaXN0b3J5JywgbmV3UGFnZSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IG5ld1BhZ2U7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHByZXYoKSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID09PSAxKSByZXR1cm47XHJcbiAgICAgIHRoaXMuZW1pdCgncGFnaW5hdGU6aGlzdG9yeScsIC0tdGhpcy5jdXJyZW50UGFnZSk7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPT09IHRoaXMubnVtYmVyUGFnZXMpIHJldHVybjtcclxuICAgICAgdGhpcy5lbWl0KCdwYWdpbmF0ZTpoaXN0b3J5JywgKyt0aGlzLmN1cnJlbnRQYWdlKTtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH0sXHJcbiAgICBhZGQoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKCsrdGhpcy5udW1iZXJFbnRyaWVzKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKC0tdGhpcy5udW1iZXJFbnRyaWVzKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVGcm9tU3RvcmFnZSgpIHtcclxuICAgICAgX1NUT1JFLmdldCgnc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHRoaXMucGVyUGFnZSA9IHNldHRpbmdzLmhpc3RvcnkucHAgfHwgMTApXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gX1NUT1JFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB0aGlzLnVwZGF0ZShPYmplY3Qua2V5cyhoaXN0b3J5LmVudHJpZXMpLmxlbmd0aCkpKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUobCwgc2lsZW50KSB7XHJcbiAgICAgIHRoaXMubnVtYmVyRW50cmllcyA9IGw7XHJcbiAgICAgIHRoaXMubnVtYmVyUGFnZXMgPSBsID8gTWF0aC5jZWlsKGwgLyB0aGlzLnBlclBhZ2UpIDogMTtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPiB0aGlzLm51bWJlclBhZ2VzKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHRoaXMubnVtYmVyUGFnZXM7XHJcbiAgICAgICAgaWYgKCFzaWxlbnQpIHRoaXMuZW1pdCgncGFnaW5hdGU6aGlzdG9yeScsIHRoaXMuY3VycmVudFBhZ2UpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgcmVzZXQobCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcclxuICAgICAgdGhpcy51cGRhdGUobCk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdpbmF0b3ItbGlzdCcpO1xyXG4gICAgICBjb25zdCBsID0gdGhpcy5udW1iZXJFbnRyaWVzO1xyXG4gICAgICBBcnJheS5mcm9tKHVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhZ2UnKSkuZm9yRWFjaChsaSA9PiBsaS5yZW1vdmUoKSk7XHJcblxyXG4gICAgICBpZiAobCA8IHRoaXMucGVyUGFnZSArIDEpIHtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHAgPSB0aGlzLmN1cnJlbnRQYWdlO1xyXG5cclxuICAgICAgY29uc3QgcGFnZXMgPSB0aGlzLm51bWJlclBhZ2VzO1xyXG4gICAgICBjb25zdCByID0gNyAtIChwYWdlcyAtIDEgLSBwKTtcclxuICAgICAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgY29uc3QgbmV4dCA9IHVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25leHQnKVswXTtcclxuICAgICAgbGV0IGkgPSBNYXRoLm1heCgyLCBwIC0gNyk7XHJcbiAgICAgIGlmIChyID4gMCkgaSA9IE1hdGgubWF4KDIsIE1hdGgubWluKGksIGkgLSByKSk7XHJcbiAgICAgIGNvbnN0IGogPSBNYXRoLm1pbihwYWdlcywgaSArIDE0KSArIDE7XHJcblxyXG4gICAgICB0aGlzLmFwcGVuZEJ1dHRvbihmcmFnLCAxKTtcclxuICAgICAgZm9yICg7IGkgPCBqOyBpKyspIHRoaXMuYXBwZW5kQnV0dG9uKGZyYWcsIGkpO1xyXG4gICAgICBpZiAocGFnZXMgPiBqIC0gMSkgdGhpcy5hcHBlbmRCdXR0b24oZnJhZywgcGFnZXMpO1xyXG5cclxuICAgICAgdWwuaW5zZXJ0QmVmb3JlKGZyYWcsIG5leHQpO1xyXG4gICAgfSxcclxuICAgIGFwcGVuZEJ1dHRvbihmcmFnLCBiKSB7XHJcbiAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGFnZScsIGIpO1xyXG4gICAgICBidG4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYikpO1xyXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZCgncGFnZScpO1xyXG4gICAgICBpZiAoYiA9PT0gdGhpcy5jdXJyZW50UGFnZSkgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBmcmFnLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlQ291bnRQZXJQYWdlKHApIHtcclxuICAgICAgdGhpcy5wZXJQYWdlID0gcDtcclxuICAgICAgdGhpcy51cGRhdGUodGhpcy5udW1iZXJFbnRyaWVzLCB0cnVlKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgYnk6IHtcclxuICAgIGRhdGU6IHtcclxuICAgICAgY3JlYXRlZChvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc29ydChvYmplY3QsICdmaXJzdCcpO1xyXG4gICAgICB9LFxyXG4gICAgICBsYXN0KG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3J0KG9iamVjdCwgJ2xhc3QnKTtcclxuICAgICAgfSxcclxuICAgICAgX3NvcnQob2JqZWN0LCBmaWVsZCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLnNvcnQoKGEsIGIpID0+IChuZXcgRGF0ZShvYmplY3RbYl1bZmllbGRdKSkgLSAobmV3IERhdGUob2JqZWN0W2FdW2ZpZWxkXSkpKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG5hbWU6IHtcclxuICAgICAgYXoob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQob2JqZWN0KTtcclxuICAgICAgfSxcclxuICAgICAgemEob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnQob2JqZWN0KS5yZXZlcnNlKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIF9zb3J0KG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLnNvcnQoKGEsIGIpID0+IGEudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKGIudG9Mb3dlckNhc2UoKSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfVE9HR0xFUiBmcm9tICcuL3RvZ2dsZXInXHJcbmltcG9ydCBfU09SVCBmcm9tICcuL2hpc3Rvcnktc29ydCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpc3RvcnknKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnb3BlbmVkOnRhYic6ICdpbml0JyxcclxuICAgICAgICAndXBkYXRlZDpoaXN0b3J5JzogJ3JlbmRlcicsXHJcbiAgICAgICAgJ2ZhaWxlZDpzeW5jLWVudHJ5JzogJ3VuZG9TeW5jVG9nZ2xlJyxcclxuICAgICAgICAncGFnaW5hdGU6aGlzdG9yeSc6ICdwYWdpbmF0ZSdcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICcuYWN0aW9uLWJ1dHRvbic6ICdkZWxlZ2F0ZUJ1dHRvbkFjdGlvbicsXHJcbiAgICAgICAgICAnLnN3aXRjaCc6ICd0b2dnbGVTd2l0Y2gnLFxyXG4gICAgICAgICAgJy5uYW1lJzogJ29wZW4nLFxyXG4gICAgICAgICAgJy5lZGl0JzogJ2VkaXQnLFxyXG4gICAgICAgICAgJy52aWV3JzogJ3ZpZXcnLFxyXG4gICAgICAgICAgJyNzZWFyY2gtdG9nZ2xlJzogJ3RvZ2dsZVNlYXJjaCcsXHJcbiAgICAgICAgICAnI3JlbW92ZS1maWx0ZXInOiAncmVtb3ZlRmlsdGVyJyxcclxuICAgICAgICAgICcudGFnc19faXRlbSc6ICdmaWx0ZXInXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAgICcuY2hlY2ttYXJrLWFsbCc6ICdjaGVja21hcmtBbGwnLFxyXG4gICAgICAgICAgJyNzb3J0LWVudHJpZXMnOiAnc29ydCcsXHJcbiAgICAgICAgICAnI2ZpbHRlci1lbnRyaWVzJzogJ2ZpbHRlcicsXHJcbiAgICAgICAgICAnI2VudHJpZXMtcGVyLXBhZ2UnOiAnY2hhbmdlQ291bnRQZXJQYWdlJyxcclxuICAgICAgICAgICcjc2V0LXZpZXcnOiAnc2V0VmlldycsXHJcbiAgICAgICAgICAnI2FjdGlvbic6ICdvbkNoYW5nZUFjdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGtleXVwOiB7XHJcbiAgICAgICAgICAnLnNlYXJjaC1lbnRyaWVzJzogJ3NlYXJjaCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxyXG5cclxuICAgIG5hbWVzOiBbXSxcclxuICAgIGVudHJpZXM6IHt9LFxyXG4gICAgZW50cnlUbXBsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50cnktdGVtcGxhdGUnKSxcclxuICAgIGVudHJpZXNDb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyaWVzJyksXHJcbiAgICBwYWdlOiAxLFxyXG4gICAgcGVyUGFnZTogMTAsXHJcbiAgICBzb3J0ZWQ6ICdkYXRlLWxhc3QnLFxyXG4gICAgdmlld01vZGU6ICdsaXN0JyxcclxuICAgIHNlYXJjaFRlcm06ICcnLFxyXG4gICAgc2VhcmNoZWQ6IFtdLFxyXG4gICAgdGFnczogW10sXHJcbiAgICBmaWx0ZXJlZDogZmFsc2UsXHJcbiAgICBmaWx0ZXJPcHRpb25zU2V0OiBmYWxzZSxcclxuXHJcbiAgICBpbml0KHRhYikge1xyXG4gICAgICBpZiAodGFiICE9PSAnaGlzdG9yeScpIHJldHVybjtcclxuICAgICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB0aGlzLnJlbmRlcigpO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICByZXN1bWUoKSB7XHJcbiAgICAgIHRoaXMuZmlsdGVyT3B0aW9uc1NldCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnRhZ3MgPSBbXTtcclxuICAgIH0sXHJcblxyXG4gICAgWydkZWxldGUnXShuYW1lcykge1xyXG4gICAgICBsZXQgbXNnID0gJ2RlbF9jb25maXJtJztcclxuICAgICAgbGV0IGwgPSBuYW1lcy5sZW5ndGg7XHJcblxyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW50cmllc1tuYW1lc1tsXV0ubG9ja2VkKSB7XHJcbiAgICAgICAgICBtc2cgKz0gJ19sb2NrZWQnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgY29uZmlybWVkID0gd2luZG93LmNvbmZpcm0oYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobXNnKSk7XHJcbiAgICAgIGlmIChjb25maXJtZWQpIHRoaXMuZW1pdCgnZGVsZXRlOmVudHJpZXMnLCBuYW1lcyk7XHJcbiAgICB9LFxyXG4gICAgY2xlYW4obmFtZXMpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjbGVhbjplbnRyaWVzJywgbmFtZXMpO1xyXG4gICAgfSxcclxuICAgIGRvd25sb2FkKG5hbWVzLCB0eXBlLCBzcGVjKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdHlwZSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICByZXR1cm4gX1NUT1JFLmdldCgnZG93bmxvYWRfb3B0aW9uJykudGhlbihzZXR0aW5ncyA9PiB7XHJcbiAgICAgICAgICBzZXR0aW5ncyA9IHNldHRpbmdzLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgICB0eXBlID0gc2V0dGluZ3NbMF07XHJcbiAgICAgICAgICBzcGVjID0gc2V0dGluZ3MubGVuZ3RoID09PSAyID8gc2V0dGluZ3NbMV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ2pzb24nKSB0aGlzLmV4cG9ydChuYW1lcyk7XHJcbiAgICAgICAgICBlbHNlIHRoaXMuZG93bmxvYWQobmFtZXMsIHR5cGUsIHNwZWMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZ2V0RGF0YShuYW1lcywgdHlwZSwgc3BlYykudGhlbihkYXRhID0+IHtcclxuICAgICAgICBsZXQgdGV4dCA9IGVuY29kZVVSSUNvbXBvbmVudChkYXRhKSxcclxuICAgICAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHJcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgJ1RleHRtYXJrZXIgKCcgKyBuYW1lcy5qb2luKCdfJykgKyAnKS50eHQnKTtcclxuICAgICAgICBsaW5rLmhyZWYgPSAnZGF0YTp0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLTgsJyArIHRleHQ7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGV4cG9ydChuYW1lcykge1xyXG4gICAgICBsZXQgYmFja3VwID0geyBoaXN0b3J5OiB7IGVudHJpZXM6IHt9IH0gfSxcclxuICAgICAgICAgIGVudHJpZXMgPSBiYWNrdXAuaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHJcbiAgICAgIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBuYW1lO1xyXG4gICAgICAgIHdoaWxlIChuYW1lcy5sZW5ndGgpIHtcclxuICAgICAgICAgIG5hbWUgPSBuYW1lcy5wb3AoKTtcclxuICAgICAgICAgIGVudHJpZXNbbmFtZV0gPSBoaXN0b3J5LmVudHJpZXNbbmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJhY2t1cCA9IGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShiYWNrdXApKTtcclxuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLFxyXG4gICAgICAgICAgJ1RleHRtYXJrZXItYmFja3VwLScgK1xyXG4gICAgICAgICAgKG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKS5yZXBsYWNlKC9cXEQvZywgJ18nKSkgK1xyXG4gICAgICAgICAgJy5qc29uJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluay5ocmVmID0gJ2RhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsJyArIGJhY2t1cDtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc3luYyhuYW1lLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3N5bmM6ZW50cnknLCBuYW1lWzBdLCBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKTtcclxuICAgIH0sXHJcbiAgICB2aXNpdChuYW1lcykge1xyXG4gICAgICB0aGlzLmdldFVSTHMobmFtZXMpLnRoZW4odXJscyA9PiB0aGlzLmVtaXQoJ29wZW46ZW50cmllcycsIHVybHMsIG5hbWVzKSk7XHJcbiAgICB9LFxyXG4gICAgb3BlbihlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ29wZW46ZW50cmllcycsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKSwgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKSk7XHJcbiAgICB9LFxyXG4gICAgZWRpdChlLCBlbCkge1xyXG4gICAgICBjb25zdCBuZXdOYW1lID0gd2luZG93LnByb21wdChicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZV9lZGl0JykpO1xyXG4gICAgICBpZiAobmV3TmFtZSkge1xyXG4gICAgICAgIGNvbnN0IG9sZE5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xyXG4gICAgICAgIGNvbnN0IGFyZWEgPSBlbC5wYXJlbnROb2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N3aXRjaC0tc3luYycpWzBdLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgP1xyXG4gICAgICAgICAgJ3N5bmMnIDogJ2xvY2FsJztcclxuICAgICAgICB0aGlzLmVtaXQoJ3JlbmFtZTplbnRyeScsIG9sZE5hbWUsIG5ld05hbWUsIGFyZWEpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdmlldyhlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3ZpZXc6ZW50cnknLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcclxuICAgIH0sXHJcbiAgICB0YWcobmFtZXMsIHRhZywgZm9yY2UpIHtcclxuICAgICAgaWYgKCF0YWcgJiYgIWZvcmNlKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IG8gPSB7IHN5bmM6IFtdLCBsb2NhbDogW10gfTtcclxuICAgICAgbmFtZXMuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICBpZiAodGhpcy5vcmlnRW50cmllc1tuYW1lXS5zeW5jZWQpIG8uc3luYy5wdXNoKG5hbWUpO1xyXG4gICAgICAgIGVsc2Ugby5sb2NhbC5wdXNoKG5hbWUpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5lbWl0KCd0YWc6ZW50cmllcycsIG8sIHRhZyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlVGFncyhuYW1lcykge1xyXG4gICAgICB0aGlzLnRhZyhuYW1lcywgJycsIHRydWUpO1xyXG4gICAgfSxcclxuICAgIHByb2Nlc3NTZWxlY3Rpb24oKSB7XHJcbiAgICAgIGxldCBjaGVja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVudHJ5LWNiOmNoZWNrZWQnKSxcclxuICAgICAgICAgIGkgPSBjaGVja2VkLmxlbmd0aDtcclxuXHJcbiAgICAgIGlmICghaSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgbGV0IGFjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rpb24nKS52YWx1ZSxcclxuICAgICAgICAgIG5hbWVzID0gW107XHJcblxyXG4gICAgICB3aGlsZShpLS0pIG5hbWVzLnB1c2goY2hlY2tlZFtpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcclxuXHJcbiAgICAgIGlmIChhY3Rpb24gPT09ICd0YWcnKSB7XHJcbiAgICAgICAgbGV0IHZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWcnKS52YWx1ZTtcclxuICAgICAgICB0aGlzLnRhZyhuYW1lcywgdmFsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgc3BsaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BlY2lmaWNhdGlvbicpLnZhbHVlLnNwbGl0KCcgJyksXHJcbiAgICAgICAgICAgIHR5cGUgPSBzcGxpdFswXSxcclxuICAgICAgICAgICAgc3BlYyA9IHNwbGl0WzFdO1xyXG5cclxuICAgICAgICAhdGhpc1thY3Rpb25dIHx8IHRoaXNbYWN0aW9uXShuYW1lcywgdHlwZSwgc3BlYyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW5kZXJFbnRyaWVzKCkge1xyXG4gICAgICBsZXQgdGVtcGxhdGUgPSB0aGlzLmVudHJ5VG1wbCxcclxuICAgICAgICAgIGNvbnRhaW5lciA9IHRoaXMuZW50cmllc0NvbnRhaW5lcixcclxuICAgICAgICAgIGVudHJpZXMgPSB0aGlzLmVudHJpZXMsXHJcbiAgICAgICAgICBzZWFyY2hUZXJtID0gdGhpcy5zZWFyY2hUZXJtLFxyXG4gICAgICAgICAgc2VhcmNoVGVybUxlbmd0aCA9IHNlYXJjaFRlcm0gPyBzZWFyY2hUZXJtLmxlbmd0aCA6IDAsXHJcbiAgICAgICAgICBzZWFyY2hlZCA9ICEhc2VhcmNoVGVybSxcclxuICAgICAgICAgIHNlYXJjaGVkRnVsbFRleHQgPSB0aGlzLnNlYXJjaGVkRnVsbFRleHQsXHJcbiAgICAgICAgICBuYW1lcyA9IHNlYXJjaGVkID8gdGhpcy5zZWFyY2hlZCA6IHRoaXMubmFtZXMsXHJcbiAgICAgICAgICBsID0gc2VhcmNoZWQgPyBuYW1lcy5sZW5ndGggOiB0aGlzLnBhZ2UgKiB0aGlzLnBlclBhZ2UsXHJcbiAgICAgICAgICBpID0gc2VhcmNoZWQgPyAwIDogbCAtIHRoaXMucGVyUGFnZSxcclxuICAgICAgICAgIGNsb25lLCBlbnRyeSwgbmFtZSwgbmFtZUZpZWxkLCBpbnB1dCwgbGFiZWwsIGluZm9CdXR0b24sIGRldGFpbHMsIHNlYXJjaFJlc3VsdHMsXHJcbiAgICAgICAgICBidXR0b25zLCBlZGl0LCB2aWV3LCB0YWdzLCBpbW11dCwgaW1tdXRFbCwgbG9ja2VkLCBsb2NrZWRFbCwgdGFnRWwsIGIsIGo7XHJcblxyXG4gICAgICBpZiAodGhpcy5maWx0ZXJlZCkge1xyXG4gICAgICAgIG5hbWVzID0gbmFtZXMuZmlsdGVyKG4gPT4gISFlbnRyaWVzW25dKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbCA9IE1hdGgubWluKGwsIG5hbWVzLmxlbmd0aCk7XHJcblxyXG4gICAgICBjb250YWluZXIuaW5uZXJUZXh0ID0gJyc7XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2ttYXJrLWFsbCcpLmNoZWNrZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmICghbCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICgoaSwgaikgPT4ge1xyXG4gICAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgICAgZW50cnkgPSBlbnRyaWVzW25hbWVdO1xyXG4gICAgICAgICAgaWYgKGVudHJ5KSB7XHJcbiAgICAgICAgICAgIHRhZ3MgPSBlbnRyeS50YWcgPyBlbnRyeS50YWcuc3BsaXQoJyAnKSA6IG51bGw7XHJcbiAgICAgICAgICAgIGxvY2tlZCA9IGVudHJ5LmxvY2tlZDtcclxuICAgICAgICAgICAgaW1tdXQgPSBlbnRyeS5pbW11dDtcclxuICAgICAgICAgICAgY2xvbmUgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9uZSk7XHJcbiAgICAgICAgICAgIGNsb25lLmlkID0gJ2VudHJ5LScgKyBqO1xyXG4gICAgICAgICAgICBjbG9uZS5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBuYW1lKTtcclxuICAgICAgICAgICAgbmFtZUZpZWxkID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmFtZScpWzBdO1xyXG4gICAgICAgICAgICBpbnB1dCA9IGNsb25lLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzBdO1xyXG4gICAgICAgICAgICBsYWJlbCA9IGNsb25lLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsYWJlbCcpWzBdO1xyXG4gICAgICAgICAgICBkZXRhaWxzID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGV0YWlscycpWzBdO1xyXG4gICAgICAgICAgICBzZWFyY2hSZXN1bHRzID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VhcmNoLXJlc3VsdHMnKVswXTtcclxuICAgICAgICAgICAgYnV0dG9ucyA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3F1aWNrLWFjdGlvbicpO1xyXG4gICAgICAgICAgICBlZGl0ID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZWRpdCcpWzBdO1xyXG4gICAgICAgICAgICB2aWV3ID0gY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndmlldycpWzBdO1xyXG4gICAgICAgICAgICB0YWdFbCA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhZ3MnKVswXTtcclxuICAgICAgICAgICAgbG9ja2VkRWwgPSBjbG9uZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsb2NrZWQnKVswXTtcclxuICAgICAgICAgICAgaW1tdXRFbCA9IGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltbXV0JylbMF07XHJcbiAgICAgICAgICAgIGIgPSBidXR0b25zLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlKGItLSkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uc1tiXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hbWVGaWVsZC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuYW1lKSk7XHJcbiAgICAgICAgICAgIG5hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXJsJywgZW50cnkudXJsKTtcclxuICAgICAgICAgICAgbmFtZUZpZWxkLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgICAgIGlucHV0LmNsYXNzTmFtZSA9ICdlbnRyeS1jYic7XHJcbiAgICAgICAgICAgIGlucHV0LmlkID0gJ2VudHJ5LWNiLScgKyBqO1xyXG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWUpO1xyXG4gICAgICAgICAgICB2aWV3LnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZSk7XHJcbiAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2VudHJ5LWNiLScgKyBqKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsb2NrZWQpIHtcclxuICAgICAgICAgICAgICBsb2NrZWRFbC5jbGFzc0xpc3QucmVtb3ZlKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBlZGl0LmNsYXNzTGlzdC5yZW1vdmUoJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICAgICAgICAgIGVkaXQuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW1tdXQpIGltbXV0RWwuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGFncykge1xyXG4gICAgICAgICAgICAgIHRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgdGFnRWwuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gJ3RhZ3NfX2l0ZW0nO1xyXG4gICAgICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGFnKSk7XHJcbiAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3RpdGxlX2ZpbHRlcicpKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0YWdFbC5pbm5lclRleHQgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnZGV0YWlsX25vdGFnJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NyZWF0ZWQnKVswXS5pbm5lclRleHQgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5maXJzdCkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIGNsb25lLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xhc3QnKVswXS5pbm5lclRleHQgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZyhuZXcgRGF0ZShlbnRyeS5sYXN0KS50b0xvY2FsZVN0cmluZygpKTtcclxuICAgICAgICAgICAgY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY291bnQnKVswXS5pbm5lclRleHQgPSBlbnRyeS5tYXJrcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIC8vY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbG9zdCcpWzBdLmlubmVyVGV4dCA9IGVudHJ5Lmxvc3QgPyBlbnRyeS5sb3N0Lmxlbmd0aCA6IDA7XHJcblxyXG4gICAgICAgICAgICBpZiAoZW50cnkuc3luY2VkID09PSB1bmRlZmluZWQgfHwgZW50cnkuc3luY2VkKSB7XHJcbiAgICAgICAgICAgICAgY2xvbmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3dpdGNoLS1zeW5jJylbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzZWFyY2hlZEZ1bGxUZXh0KSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZnVsbFRleHRTZWFyY2hSZXN1bHRzID0gdGhpcy5mdWxsVGV4dFNlYXJjaFJlc3VsdHNbbmFtZV07XHJcblxyXG4gICAgICAgICAgICAgIGlmIChmdWxsVGV4dFNlYXJjaFJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCByID0gMCwgcmVzLCBtYXJrLCBwb3MsIG1hcmtUZXh0LCBtYXJrVGV4dEVsLCBoaWdobGlnaHQsIHQxLCB0MiwgdDM7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICg7IHIgPCBmdWxsVGV4dFNlYXJjaFJlc3VsdHMubGVuZ3RoOyByKyspIHtcclxuICAgICAgICAgICAgICAgICAgcmVzID0gZnVsbFRleHRTZWFyY2hSZXN1bHRzW3JdO1xyXG4gICAgICAgICAgICAgICAgICBtYXJrID0gZW50cnkubWFya3NbcmVzLm1hcmtdO1xyXG4gICAgICAgICAgICAgICAgICBwb3MgPSByZXMucG9zO1xyXG4gICAgICAgICAgICAgICAgICBtYXJrVGV4dCA9IG1hcmsudGV4dDtcclxuICAgICAgICAgICAgICAgICAgbWFya1RleHRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgdDEgPSBtYXJrVGV4dC5zdWJzdHJpbmcoTWF0aC5tYXgocG9zLTE2LCAwKSwgcG9zKTtcclxuICAgICAgICAgICAgICAgICAgdDIgPSBtYXJrVGV4dC5zdWJzdHIocG9zLCBzZWFyY2hUZXJtTGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgdDMgPSBtYXJrVGV4dC5zdWJzdHIocG9zK3NlYXJjaFRlcm1MZW5ndGgsIDE2KTtcclxuICAgICAgICAgICAgICAgICAgdDEgPSB0MSA/ICcuLi4gJyArIHQxIDogdDE7XHJcbiAgICAgICAgICAgICAgICAgIHQzID0gdDMgPyB0MyArICcgLi4uJyA6IHQzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgICBoaWdobGlnaHQuY2xhc3NOYW1lID0gJ2hpZ2hsaWdodCc7XHJcbiAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0MikpO1xyXG4gICAgICAgICAgICAgICAgICBtYXJrVGV4dEVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQxKSk7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmtUZXh0RWwuYXBwZW5kQ2hpbGQoaGlnaGxpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgbWFya1RleHRFbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0MykpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0cy5hcHBlbmRDaGlsZChtYXJrVGV4dEVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KShpLCBsLWktMSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlSGVhZGVyRmllbGRzKGwpIHtcclxuICAgICAgY29uc3Qgbm9FbnRyaWVzSGludCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduby1lbnRyaWVzJyk7XHJcbiAgICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcclxuICAgICAgY29uc3QgYWN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaXN0b3J5LWFjdGlvbnMnKTtcclxuICAgICAgY29uc3Qgc29ydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb3J0Jyk7XHJcbiAgICAgIGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXInKTtcclxuICAgICAgY29uc3QgY291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnQnKTtcclxuICAgICAgY29uc3QgdmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3Jyk7XHJcbiAgICAgIGNvbnN0IHBwU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudHJpZXMtcGVyLXBhZ2UnKTtcclxuICAgICAgY29uc3QgY2hlY2thbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2ttYXJrLWFsbC1jb250YWluZXInKTtcclxuICAgICAgY29uc3QgbWV0aF8wID0gIWwgPyAncmVtb3ZlJyA6ICdhZGQnO1xyXG4gICAgICBjb25zdCBtZXRoXzEgPSBsID4gMCA/ICdyZW1vdmUnIDogJ2FkZCc7XHJcbiAgICAgIGNvbnN0IG1ldGhfMiA9IGwgPiAyID8gJ3JlbW92ZScgOiAnYWRkJztcclxuICAgICAgY29uc3QgbWV0aF8zID0gbCA+IDEwID8gJ3JlbW92ZScgOiAnYWRkJztcclxuXHJcbiAgICAgIG5vRW50cmllc0hpbnQuY2xhc3NMaXN0W21ldGhfMF0oJ3UtZGlzcGxheS0tbm9uZScpO1xyXG4gICAgICBhY3Rpb25zLmNsYXNzTGlzdFttZXRoXzFdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgc2VhcmNoLmNsYXNzTGlzdFttZXRoXzJdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgc29ydC5jbGFzc0xpc3RbbWV0aF8yXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGZpbHRlci5jbGFzc0xpc3RbbWV0aF8xXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGNvdW50LmNsYXNzTGlzdFttZXRoXzNdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgdmlldy5jbGFzc0xpc3RbbWV0aF8xXSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIGNoZWNrYWxsLmNsYXNzTGlzdFttZXRoXzJdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyaWVzLWNvdW50JykuaW5uZXJUZXh0ID0gbDtcclxuXHJcbiAgICAgIHJldHVybiBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBwID0gdGhpcy5wZXJQYWdlID0gc2V0dGluZ3MuaGlzdG9yeS5wcCB8fCAxMDtcclxuICAgICAgICBwcFNlbGVjdC52YWx1ZSA9IHBwO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZXRGaWx0ZXJPcHRpb25zKCkge1xyXG4gICAgICBpZiAodGhpcy5maWx0ZXJPcHRpb25zU2V0KSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItZW50cmllcycpO1xyXG4gICAgICBjb25zdCBwbGFjZWhvbGRlck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICBjb25zdCBhbGxUYWdzID0gW107XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLm9yaWdFbnRyaWVzO1xyXG4gICAgICBsZXQgdGFncztcclxuXHJcbiAgICAgIHNlbGVjdC5pbm5lclRleHQgPSAnJztcclxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyT3B0aW9uKTtcclxuICAgICAgcGxhY2Vob2xkZXJPcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcclxuICAgICAgcGxhY2Vob2xkZXJPcHRpb24uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XHJcbiAgICAgIHBsYWNlaG9sZGVyT3B0aW9uLmlubmVyVGV4dCA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0NTEyNCcpO1xyXG5cclxuICAgICAgZm9yIChsZXQgbmFtZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgdGFncyA9IGVudHJpZXNbbmFtZV0udGFnO1xyXG4gICAgICAgIHRhZ3MgPSB0YWdzID8gdGFncy5zcGxpdCgnICcpIDogW107XHJcbiAgICAgICAgdGFncy5mb3JFYWNoKHRhZyA9PiB7XHJcbiAgICAgICAgICBpZiAoIWFsbFRhZ3MuaW5jbHVkZXModGFnKSkgYWxsVGFncy5wdXNoKHRhZyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghYWxsVGFncy5sZW5ndGggJiYgIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItb3B0LW5vdGFnJykpIHtcclxuICAgICAgICB0aGlzLmFkZEZpbHRlck9wdCgnJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2RldGFpbF9ub3RhZycpLCB7IGRpc2FibGVkOiB0cnVlLCBpZDogJ2ZpbHRlci1vcHQtbm90YWcnIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsbFRhZ3MuZm9yRWFjaCh0YWcgPT4gdGhpcy5hZGRGaWx0ZXJPcHQodGFnLCB0YWcpKTtcclxuICAgICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItb3B0LXRhZ2xlc3MnKSkge1xyXG4gICAgICAgICAgdGhpcy5hZGRGaWx0ZXJPcHQoJycsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0NTEyNScpLCB7IGlkOiAnZmlsdGVyLW9wdC10YWdsZXNzJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5maWx0ZXJPcHRpb25zU2V0ID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBhZGRGaWx0ZXJPcHQodGFnLCB0ZXh0LCBhdHRycykge1xyXG4gICAgICBpZiAodGhpcy50YWdzLmluY2x1ZGVzKHRhZykpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1lbnRyaWVzJyk7XHJcbiAgICAgIGNvbnN0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG5cclxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdCk7XHJcbiAgICAgIG9wdC52YWx1ZSA9IHRhZztcclxuICAgICAgb3B0LmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICAgIGlmIChhdHRycykge1xyXG4gICAgICAgIGZvciAobGV0IGEgaW4gYXR0cnMpIG9wdC5zZXRBdHRyaWJ1dGUoYSwgYXR0cnNbYV0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy50YWdzLmxlbmd0aCAmJiB0YWcpIHtcclxuICAgICAgICBjb25zdCBub3RhZ0ZpbHRlck9wdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItb3B0LW5vdGFnJyk7XHJcbiAgICAgICAgaWYgKG5vdGFnRmlsdGVyT3B0KSBzZWxlY3QucmVtb3ZlQ2hpbGQobm90YWdGaWx0ZXJPcHQpO1xyXG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1vcHQtdGFnbGVzcycpKSB7XHJcbiAgICAgICAgICB0aGlzLmFkZEZpbHRlck9wdCgnJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3Q1MTI1JyksIHsgaWQ6ICdmaWx0ZXItb3B0LXRhZ2xlc3MnIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGFnKSB0aGlzLnRhZ3MucHVzaCh0YWcpO1xyXG4gICAgfSxcclxuICAgIGdldFRleHQobmFtZXMsIHNwZWMpIHtcclxuICAgICAgbGV0IGFsbF9tYXJrc19wbHVzX21ldGEgPSBzcGVjID09PSAnK21ldGEnLFxyXG4gICAgICAgICAgYWxsX21hcmtzX3BsdXNfbG9zdCA9IHNwZWMgPT09ICcrbG9zdCcsXHJcbiAgICAgICAgICBhbGxfbWFya3NfcGx1c19tZXRhX2FuZF9ub3RlcyA9IHNwZWMgPT09ICcrbm90ZXMnLFxyXG4gICAgICAgICAgYWxsX21hcmtzX2xvc3QgPSBzcGVjID09PSAnbG9zdCcsXHJcbiAgICAgICAgICBkZWZhdWx0TWFya2VycyA9IFsnbScsICcyJywgJzMnLCAyLCAzXSxcclxuXHJcbiAgICAgICAgICByZWplY3QgPSBkZWZhdWx0TWFya2Vycy5pbmNsdWRlcyhzcGVjKSA/XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBrZXkgIT0gc3BlYztcclxuICAgICAgICAgICAgfSA6IHNwZWMgPT09ICdjJyA/XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0TWFya2Vycy5pbmNsdWRlcyhrZXkpO1xyXG4gICAgICAgICAgICB9IDogbnVsbCxcclxuXHJcbiAgICAgICAgICBuZXdMaW5lID0gJ1xcclxcbicsXHJcbiAgICAgICAgICBuZXdMaW5lcyA9ICdcXHJcXG5cXHJcXG4nLFxyXG4gICAgICAgICAgbm90ZSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdub3RlJyksXHJcbiAgICAgICAgICB0ZXh0ID0gJycsXHJcbiAgICAgICAgICBsID0gbmFtZXMubGVuZ3RoLFxyXG4gICAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgICBub3RlVGV4dCwgZW50cnksIG1hcmtzLCBtYXJrLCBsb3N0LCBuYW1lLCBtLCBuLCBqO1xyXG5cclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgICAgZW50cnkgPSBlbnRyaWVzW25hbWVdO1xyXG4gICAgICAgICAgbWFya3MgPSBlbnRyeS5tYXJrcztcclxuICAgICAgICAgIGxvc3QgPSBlbnRyeS5sb3N0O1xyXG4gICAgICAgICAgbSA9IG1hcmtzLmxlbmd0aDtcclxuICAgICAgICAgIG4gPSBsb3N0Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgICBpZiAoIWFsbF9tYXJrc19sb3N0KSB7XHJcbiAgICAgICAgICAgIGlmIChhbGxfbWFya3NfcGx1c19tZXRhIHx8IGFsbF9tYXJrc19wbHVzX21ldGFfYW5kX25vdGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IG5hbWUgKyBuZXdMaW5lICtcclxuICAgICAgICAgICAgICAgICdVUkw6ICcgKyBlbnRyeS51cmwgKyBuZXdMaW5lICtcclxuICAgICAgICAgICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdwYWdlX3RpdGxlJykgKyAnOiAnICsgZW50cnkudGl0bGUgKyBuZXdMaW5lICtcclxuICAgICAgICAgICAgICAgIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdjcmVhdGVkJykgKyAnOiAnICsgdGhpcy5vcHRpbWl6ZURhdGVTdHJpbmcobmV3IERhdGUoZW50cnkuZmlyc3QpLnRvTG9jYWxlU3RyaW5nKCkpICsgbmV3TGluZSArXHJcbiAgICAgICAgICAgICAgICBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbGFzdF9tb2RpZmllZCcpICsgJzogJyArIHRoaXMub3B0aW1pemVEYXRlU3RyaW5nKG5ldyBEYXRlKGVudHJ5Lmxhc3QpLnRvTG9jYWxlU3RyaW5nKCkpICtcclxuICAgICAgICAgICAgICAgIG5ld0xpbmUgKyBuZXdMaW5lcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG07IGorKykge1xyXG4gICAgICAgICAgICAgIG1hcmsgPSBtYXJrc1tqXTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHJlamVjdCAmJiByZWplY3QobWFyay5rZXkpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGFsbF9tYXJrc19wbHVzX21ldGFfYW5kX25vdGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ICs9ICctLS0nICsgbmV3TGluZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGV4dCArPSBtYXJrLnRleHQucmVwbGFjZSgvXFxuL2csICdcXHJcXG4nKSArIG5ld0xpbmVzO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoYWxsX21hcmtzX3BsdXNfbWV0YV9hbmRfbm90ZXMgJiYgbWFyay5ub3RlKSB7XHJcbiAgICAgICAgICAgICAgICBub3RlVGV4dCA9IG1hcmsubm90ZS50ZXh0IHx8IG1hcmsubm90ZTtcclxuICAgICAgICAgICAgICAgIHRleHQgKz0gJyAgJyArIG5vdGUgKyAnOicgKyBuZXdMaW5lICsgJyAgJyArIG5vdGVUZXh0LnJlcGxhY2UoL1xcbi9nLCAnXFxyXFxuICAnKSArIG5ld0xpbmVzO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGFsbF9tYXJrc19sb3N0IHx8IGFsbF9tYXJrc19wbHVzX2xvc3QpIHtcclxuICAgICAgICAgICAgdGV4dCArPSBuZXdMaW5lcyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdsb3N0X21hcmtzJykgKyAnOicgKyBuZXdMaW5lcyArIG5ld0xpbmVzO1xyXG5cclxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG47IGorKykge1xyXG4gICAgICAgICAgICAgIG1hcmsgPSBsb3N0W2pdO1xyXG5cclxuICAgICAgICAgICAgICB0ZXh0ICs9IG1hcmsudGV4dC5yZXBsYWNlKC9cXG4vZywgJ1xcclxcbicpICsgbmV3TGluZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRleHQgKz0gbmV3TGluZXMgKyBuZXdMaW5lcyArIG5ld0xpbmVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRleHQudHJpbSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBnZXREYXRhKG5hbWVzLCB0eXBlLCBzcGVjKSB7XHJcbiAgICAgIGlmICh0eXBlID09PSAndGV4dCcpIHJldHVybiB0aGlzLmdldFRleHQobmFtZXMsIHNwZWMpO1xyXG5cclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gdGhpcy5vcmlnRW50cmllcyA9IGhpc3RvcnkuZW50cmllcyxcclxuICAgICAgICAgICAgbCA9IG5hbWVzLmxlbmd0aCxcclxuICAgICAgICAgICAgZGF0YSA9ICcnLFxyXG4gICAgICAgICAgICBuZXdMaW5lcyA9ICdcXHJcXG5cXHJcXG4nLFxyXG4gICAgICAgICAgICBpID0gMDtcclxuXHJcbiAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIGRhdGEgKz0gZW50cmllc1tuYW1lc1tpXV1bdHlwZV0gKyBuZXdMaW5lcztcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGdldFVSTHMobmFtZXMpIHtcclxuICAgICAgcmV0dXJuIF9TVE9SRS5nZXQoJ2hpc3RvcnknKS50aGVuKGhpc3RvcnkgPT4ge1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgICB1cmxzID0gW10sXHJcbiAgICAgICAgICAgIGwgPSBuYW1lcy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGkgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykgdXJscy5wdXNoKGVudHJpZXNbbmFtZXNbaV1dLnVybCk7XHJcblxyXG4gICAgICAgIHJldHVybiB1cmxzO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvcHRpbWl6ZURhdGVTdHJpbmcoZGF0ZSkge1xyXG4gICAgICByZXR1cm4gKGRhdGVcclxuICAgICAgICAucmVwbGFjZSgvXihcXGR7MX0pKFxcRHsxfSkvLCAobSwgcCwgcSk9PiAnMCcgKyBwICsgcSlcclxuICAgICAgICAucmVwbGFjZSgvKFxcRHsxfSkoXFxkezF9XFxEezF9KS9nLCAobSwgcCwgcSkgPT4gcCArICcwJyArIHEpKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2VhcmNoKGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IHRlcm0gPSBlbC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBjb25zdCBzZWFyY2hUeXBlID0gZWwuZ2V0QXR0cmlidXRlID8gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSA6ICcnO1xyXG4gICAgICBjb25zdCBjb3VudFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudCcpO1xyXG4gICAgICBjb25zdCBjbGFzc01ldGggPSB0ZXJtID8gJ2FkZCcgOiAncmVtb3ZlJztcclxuICAgICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC10b2dnbGUnKTtcclxuICAgICAgdGhpcy5zZXR1cFNlYXJjaCh0ZXJtLCBzZWFyY2hUeXBlKS5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICAgIGNvdW50U2VsZWN0LmNsYXNzTGlzdFtjbGFzc01ldGhdKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgICAgdG9nZ2xlLmNsYXNzTGlzdFtjbGFzc01ldGhdKCdhY3RpdmUnKTtcclxuICAgIH0sXHJcbiAgICBzZXR1cFNlYXJjaCh0ZXJtLCBzZWFyY2hUeXBlKSB7XHJcbiAgICAgIHRlcm0gPSB0eXBlb2YgdGVybSA9PT0gJ3N0cmluZycgPyB0ZXJtIDogdGhpcy5zZWFyY2hUZXJtO1xyXG4gICAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy5lbDtcclxuICAgICAgY29uc3Qgc2VhcmNoQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWNvdW50Jyk7XHJcbiAgICAgIHRoaXMuc2VhcmNoZWQgPSBbXTtcclxuICAgICAgdGhpcy5zZWFyY2hUZXJtID0gdGVybTtcclxuICAgICAgaWYgKCF0ZXJtKSB7XHJcbiAgICAgICAgaGlzdG9yeS5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2hlZCcpO1xyXG4gICAgICAgIGhpc3RvcnkuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoZWQtLWZ1bGwtdGV4dCcpO1xyXG4gICAgICAgIHNlYXJjaENvdW50LmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoZWRGdWxsVGV4dCA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhpc3RvcnkuY2xhc3NMaXN0LmFkZCgnc2VhcmNoZWQnKTtcclxuICAgICAgICBpZiAoc2VhcmNoVHlwZSA9PT0gJ2Z1bGwtdGV4dCcpIHtcclxuICAgICAgICAgIGhpc3RvcnkuY2xhc3NMaXN0LmFkZCgnc2VhcmNoZWQtLWZ1bGwtdGV4dCcpO1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hGdWxsVGV4dCh0ZXJtKTtcclxuICAgICAgICAgIHRoaXMuc2VhcmNoZWRGdWxsVGV4dCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGhpc3RvcnkuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoZWQtLWZ1bGwtdGV4dCcpO1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hCeU5hbWUodGVybSk7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaGVkRnVsbFRleHQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VhcmNoQ291bnQuaW5uZXJUZXh0ID0gdGhpcy5zZWFyY2hlZC5sZW5ndGggfHwgJyc7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgc2VhcmNoQnlOYW1lKHRlcm0pIHtcclxuICAgICAgY29uc3QgbmFtZXMgPSB0aGlzLm5hbWVzO1xyXG4gICAgICBsZXQgbCA9IG5hbWVzLmxlbmd0aCwgaSA9IDAsIG5hbWU7XHJcblxyXG4gICAgICBmb3IoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xyXG4gICAgICAgIGlmIChuYW1lLnRvTG93ZXJDYXNlKCkuc2VhcmNoKHRlcm0pICE9PSAtMSkge1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hlZC5wdXNoKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNlYXJjaEZ1bGxUZXh0KHRleHQpIHtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMub3JpZ0VudHJpZXM7XHJcbiAgICAgIGxldCBuYW1lLCBtYXJrcywgaSwgbWFya1RleHQsIHBvcywgZm91bmQ7XHJcblxyXG4gICAgICBjb25zdCByZXN1bHRzID0gdGhpcy5mdWxsVGV4dFNlYXJjaFJlc3VsdHMgPSB7fTtcclxuXHJcbiAgICAgIGZvciAobmFtZSBpbiBlbnRyaWVzKSB7XHJcbiAgICAgICAgbWFya3MgPSBlbnRyaWVzW25hbWVdLm1hcmtzO1xyXG4gICAgICAgIGZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG1hcmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBtYXJrVGV4dCA9IG1hcmtzW2ldLnRleHQ7XHJcbiAgICAgICAgICBwb3MgPSBtYXJrVGV4dC50b0xvd2VyQ2FzZSgpLnNlYXJjaCh0ZXh0KTtcclxuICAgICAgICAgIGlmIChwb3MgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmVzdWx0c1tuYW1lXSA9IHJlc3VsdHNbbmFtZV0gfHwgW107XHJcbiAgICAgICAgICAgIHJlc3VsdHNbbmFtZV0ucHVzaCh7IG1hcms6IGksIHBvcyB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaGVkLnB1c2gobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlU2VhcmNoKGUsIGVsKSB7XHJcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1lbnRyaWVzLS1uYW1lJykudmFsdWUgPSAnJztcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtZW50cmllcy0tZnVsbC10ZXh0JykudmFsdWUgPSAnJztcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hUZXJtKSB0aGlzLnNlYXJjaChudWxsLCB7IHZhbHVlOiAnJyB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNoYW5nZUNvdW50UGVyUGFnZShlLCBlbCkge1xyXG4gICAgICBsZXQgcCA9IHRoaXMucGVyUGFnZSA9IGVsLnZhbHVlICogMTtcclxuICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOnBlci1wYWdlLWNvdW50JywgcCk7XHJcbiAgICAgIHRoaXMucmVuZGVyRW50cmllcygpO1xyXG4gICAgfSxcclxuICAgIHNldFZpZXcoZSwgZWwpIHtcclxuICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50cmllcycpO1xyXG4gICAgICBjb25zdCB2YWwgPSBlbC52YWx1ZTtcclxuICAgICAgaWYgKHZhbCA9PT0gJ2xpc3QnKSB0YWJsZS5jbGFzc0xpc3QucmVtb3ZlKCdkZXRhaWxlZC1saXN0Jyk7XHJcbiAgICAgIGVsc2UgdGFibGUuY2xhc3NMaXN0LmFkZCgnZGV0YWlsZWQtbGlzdCcpO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTp2aWV3LXNldHRpbmcnLCB2YWwpO1xyXG4gICAgfSxcclxuICAgIHNldHVwVmlldyh2aWV3KSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXQtdmlldycpLnZhbHVlID0gdmlldztcclxuICAgICAgdGhpcy5zZXRWaWV3KG51bGwsIHsgdmFsdWU6IHZpZXcgfSk7XHJcbiAgICB9LFxyXG4gICAgb25DaGFuZ2VBY3Rpb24oZSwgZWwpIHtcclxuICAgICAgaWYgKGVsLnZhbHVlID09PSAndGFnJykgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFnJykuZm9jdXMoKSwgMCk7XHJcbiAgICB9LFxyXG4gICAgc29ydChlLCBlbCkge1xyXG4gICAgICBsZXQgc29ydGVkID0gdGhpcy5zb3J0ZWQgPSBlbC52YWx1ZTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6c29ydC1zZXR0aW5nJywgc29ydGVkKTtcclxuICAgICAgdGhpcy5zZXR1cFNvcnQoc29ydGVkKS5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICB9LFxyXG4gICAgc2V0dXBTb3J0KHNvcnRlZCkge1xyXG4gICAgICBzb3J0ZWQgPSBzb3J0ZWQuc3BsaXQoJy0nKTtcclxuICAgICAgdGhpcy5uYW1lcyA9IF9TT1JULmJ5W3NvcnRlZFswXV1bc29ydGVkWzFdXSh0aGlzLm9yaWdFbnRyaWVzKTtcclxuICAgICAgdGhpcy5zb3J0U2VhcmNoUmVzdWx0cygpO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBmaWx0ZXIoZSwgZWwpIHtcclxuICAgICAgY29uc3QgZmlsdGVyID0gZWwubm9kZU5hbWUgPT09ICdTUEFOJyA/IGVsLmZpcnN0Q2hpbGQuZGF0YSA6IGVsLnZhbHVlO1xyXG4gICAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5vcmlnRW50cmllcztcclxuICAgICAgY29uc3QgZmlsdGVyZWRFbnRyaWVzID0ge307XHJcbiAgICAgIGxldCBlbnRyeSwgcngsIGMgPSAwO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIGZvciAobGV0IG5hbWUgaW4gZW50cmllcykge1xyXG4gICAgICAgIGVudHJ5ID0gZW50cmllc1tuYW1lXTtcclxuICAgICAgICByeCA9IG5ldyBSZWdFeHAoJ14nK2ZpbHRlcisnJHxeJytmaWx0ZXIrJ1xcXFxzfFxcXFxzJytmaWx0ZXIrJ1xcXFxzfFxcXFxzJytmaWx0ZXIrJyQnLCAnZycpO1xyXG4gICAgICAgIGlmICgoZmlsdGVyICYmIGVudHJ5LnRhZyAmJiBlbnRyeS50YWcuc2VhcmNoKHJ4KSAhPT0gLTEpIHx8ICghZW50cnkudGFnICYmIGZpbHRlciA9PSAnJykpIHtcclxuICAgICAgICAgIGZpbHRlcmVkRW50cmllc1tuYW1lXSA9IGVudHJ5O1xyXG4gICAgICAgICAgYysrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVudHJpZXMgPSBmaWx0ZXJlZEVudHJpZXM7XHJcbiAgICAgIHRoaXMuZmlsdGVyZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICB0aGlzLnJlbmRlckVudHJpZXMoKTtcclxuICAgICAgdGhpcy5lbWl0KCdmaWx0ZXJlZDpoaXN0b3J5JywgYyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlRmlsdGVyKGUsIGVsKSB7XHJcbiAgICAgIGVsLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItZW50cmllcycpLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICB0aGlzLmVudHJpZXMgPSB0aGlzLm9yaWdFbnRyaWVzO1xyXG4gICAgICB0aGlzLmZpbHRlcmVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgIHRoaXMucmVuZGVyRW50cmllcygpO1xyXG4gICAgICB0aGlzLmVtaXQoJ2ZpbHRlcmVkOmhpc3RvcnknLCB0aGlzLm5hbWVzLmxlbmd0aCk7XHJcbiAgICB9LFxyXG4gICAgc29ydFNlYXJjaFJlc3VsdHMoKSB7XHJcbiAgICAgIGlmICghdGhpcy5zZWFyY2hlZC5sZW5ndGgpIHJldHVybjtcclxuICAgICAgY29uc3QgbmFtZXMgPSB0aGlzLm5hbWVzO1xyXG4gICAgICB0aGlzLnNlYXJjaGVkLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBhID0gbmFtZXMuaW5kZXhPZihhKTtcclxuICAgICAgICBiID0gbmFtZXMuaW5kZXhPZihiKTtcclxuICAgICAgICBpZiAoYSA9PSBiKSByZXR1cm4gMDtcclxuICAgICAgICByZXR1cm4gYSA8IGIgPyAtMSA6IDE7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGNoZWNrbWFya0FsbChlLCBlbCkge1xyXG4gICAgICBsZXQgZGlyZWN0bHkgPSB0eXBlb2YgZWwgPT09ICdib29sZWFuJyxcclxuICAgICAgICAgIGNoZWNrZWQgPSBkaXJlY3RseSA/IGVsIDogZWwuY2hlY2tlZCxcclxuICAgICAgICAgIGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyaWVzJykuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JyksXHJcbiAgICAgICAgICBpID0gaW5wdXRzLmxlbmd0aDtcclxuXHJcbiAgICAgIHdoaWxlIChpLS0pIGlucHV0c1tpXS5jaGVja2VkID0gY2hlY2tlZDtcclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBkZWxlZ2F0ZUJ1dHRvbkFjdGlvbihlLCBlbCkge1xyXG4gICAgICBsZXQgYWN0aW9uID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpLFxyXG4gICAgICAgICAgbmFtZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XHJcblxyXG4gICAgICBuYW1lID0gbmFtZSA/IFtuYW1lXSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICF0aGlzW2FjdGlvbl0gfHwgdGhpc1thY3Rpb25dKG5hbWUsIGVsKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVTd2l0Y2goZSwgZWwpIHtcclxuICAgICAgZWwgPSBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXRjaC0tc3luYycpID8gZWwgOiBlbC5wYXJlbnROb2RlO1xyXG4gICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgdGhpcy5kZWxlZ2F0ZUJ1dHRvbkFjdGlvbihlLCBlbCk7XHJcbiAgICB9LFxyXG4gICAgdW5kb1N5bmNUb2dnbGUobmFtZSkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoLS1zeW5jW2RhdGEtbmFtZT1cIicgKyBuYW1lICsgJ1wiXScpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgfSxcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgdGhpcy5yZXN1bWUoKTtcclxuXHJcbiAgICAgIF9TVE9SRS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gdGhpcy5lbnRyaWVzID0gdGhpcy5vcmlnRW50cmllcyA9IHN0b3JhZ2UuaGlzdG9yeS5lbnRyaWVzLFxyXG4gICAgICAgICAgICBzb3J0ZWQgPSBzdG9yYWdlLnNldHRpbmdzLmhpc3Rvcnkuc29ydGVkIHx8IHRoaXMuc29ydGVkLFxyXG4gICAgICAgICAgICB2aWV3ID0gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LnZpZXcgfHwgdGhpcy52aWV3TW9kZSxcclxuICAgICAgICAgICAgbDtcclxuICAgICAgICB0aGlzLnNvcnRlZCA9IHNvcnRlZDtcclxuICAgICAgICB0aGlzLnNldHVwU29ydChzb3J0ZWQpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBWaWV3KHZpZXcpO1xyXG4gICAgICAgIGwgPSB0aGlzLm5hbWVzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR1cFNlYXJjaCgpLnRvZ2dsZUhlYWRlckZpZWxkcyhsKS50aGVuKCgpID0+IHRoaXMucmVuZGVyRW50cmllcygpLnNldEZpbHRlck9wdGlvbnMoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHBhZ2luYXRlKHBhZ2UpIHtcclxuICAgICAgdGhpcy5wYWdlID0gcGFnZTtcclxuICAgICAgdGhpcy5yZW5kZXJFbnRyaWVzKCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlRW50cnkoZW50cnkpIHtcclxuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW50cnlbZGF0YS1uYW1lPVwiJyArIGVudHJ5Lm5hbWUgKyAnXCJdJyk7XHJcblxyXG4gICAgICBlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjcmVhdGVkJylbMF0uaW5uZXJUZXh0ID0gZW50cnkuZmlyc3Q7XHJcbiAgICAgIGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xhc3QnKVswXS5pbm5lclRleHQgPSBlbnRyeS5sYXN0O1xyXG4gICAgICBlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb3VudCcpWzBdLmlubmVyVGV4dCA9IGVudHJ5Lm1hcmtzLmxlbmd0aDtcclxuICAgICAgLy9lbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsb3N0JylbMF0uaW5uZXJUZXh0ID0gZW50cnkubG9zdC5sZW5ndGg7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cG9ydCcpLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd1cGRhdGVkOnNldHRpbmdzJzogJ3VwZGF0ZUV4cG9ydExpbmtzJyxcclxuICAgICAgICAndXBkYXRlZDpoaXN0b3J5JzogJ3VwZGF0ZUV4cG9ydExpbmtzJyxcclxuICAgICAgICAndG9nZ2xlZDpzeW5jJzogJ3VwZGF0ZUV4cG9ydExpbmtzJyxcclxuICAgICAgICAnc3luY2VkOmVudHJ5JzogJ3VwZGF0ZUV4cG9ydExpbmtzJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJy5pbXBvcnQtYnV0dG9uJzogJ3RyaWdnZXJGaWxlSW5wdXQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGFuZ2U6IHtcclxuICAgICAgICAgICcuaW1wb3J0LWZpbGUnOiAnaGFuZGxlRmlsZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdXNlZG93bjoge1xyXG4gICAgICAgICAgJy5leHBvcnQtYnV0dG9uJzogJ3VwZGF0ZUV4cG9ydE5hbWUnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUV4cG9ydExpbmtzKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGltcG9ydDogZnVuY3Rpb24oc3RvcmVTdHJpbmcsIHR5cGUpIHtcclxuICAgICAgdmFyIHBhcnNlZFN0cmluZztcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcGFyc2VkU3RyaW5nID0gSlNPTi5wYXJzZShzdG9yZVN0cmluZyk7XHJcbiAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlGYWlsdXJlKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdlcnJvcl9maWxlX3BhcnNlJykpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocGFyc2VkU3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdpbXBvcnQ6c3RvcmFnZScsIHBhcnNlZFN0cmluZywgdHlwZSk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5RmFpbHVyZSgnJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdHJpZ2dlckZpbGVJbnB1dDogZnVuY3Rpb24oZSwgZWwpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydC0tJyArIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJykpLmNsaWNrKCk7XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlRmlsZShlLCBlbCkge1xyXG4gICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKSxcclxuICAgICAgICAgIGZpbGUgPSBlbC5maWxlc1swXSxcclxuICAgICAgICAgIHNpemUgPSBmaWxlLnNpemUgLyAxMDAwMDAwLFxyXG4gICAgICAgICAgdHlwZSA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJyksXHJcbiAgICAgICAgICBtb2QgPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKHNpemUgPiA1MClcclxuICAgICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlGYWlsdXJlKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdlcnJvcl9maWxlX3NpemUnKSk7XHJcblxyXG4gICAgICBpZiAodHlwZSA9PT0gJ3N5bmMnICYmIHNpemUgPiAwLjA5OSlcclxuICAgICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlGYWlsdXJlKGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdlcnJvcl9maWxlX3NpemVfc3luYycpKTtcclxuXHJcbiAgICAgIGlmIChmaWxlLm5hbWUuc3BsaXQoJy4nKS5wb3AoKSAhPT0gJ2pzb24nKVxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheUZhaWx1cmUoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ2Vycm9yX2ZpbGVfZm9ybWF0JykpO1xyXG5cclxuICAgICAgcmVhZGVyLm9ubG9hZCA9IChmdW5jdGlvbihmaWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgIG1vZC5pbXBvcnQoZS50YXJnZXQucmVzdWx0LCB0eXBlKTtcclxuICAgICAgICB9O1xyXG4gICAgICB9KShmaWxlKTtcclxuXHJcbiAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xyXG4gICAgfSxcclxuICAgIGRpc3BsYXlGYWlsdXJlKHJlYXNvbikge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0LWVycm9yJykuaW5uZXJUZXh0ID0gcmVhc29uO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVFeHBvcnRMaW5rcygpIHtcclxuICAgICAgY29uc3QgbG9jYWxEYXRhTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHBvcnQtbG9jYWwnKTtcclxuICAgICAgY29uc3Qgc3luY2VkRGF0YUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwb3J0LXN5bmNlZCcpO1xyXG5cclxuICAgICAgX1NUT1JFLmdldCgnbG9jYWxfc3RvcmFnZScpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgICAgbG9jYWxEYXRhTGluay5ocmVmID0gJ2RhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzdG9yYWdlKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IF9TVE9SRS5nZXQoJ3N5bmNlZF9zdG9yYWdlJykudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgICBzeW5jZWREYXRhTGluay5ocmVmID0gJ2RhdGE6dGV4dC9qc29uO2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzdG9yYWdlKSk7XHJcbiAgICAgIH0pKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVFeHBvcnROYW1lKGUsIGVsKSB7XHJcbiAgICAgIGVsLnBhcmVudE5vZGUuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsXHJcbiAgICAgICAgJ1RleHRtYXJrZXItZGF0YS0nICtcclxuICAgICAgICBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpICsgJy0nICtcclxuICAgICAgICAobmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLnJlcGxhY2UoL1xcRC9nLCAnXycpKSArXHJcbiAgICAgICAgJy5qc29uJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uL19zaGFyZWQvdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcbmltcG9ydCBfTE9HX0tFWVMgZnJvbSAnLi4vLi4vLi4vZGF0YS9sb2cta2V5cydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ3MnKSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAndXBkYXRlZDpsb2dzJzogJ2xvZydcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICcjY2xlYXItbG9ncyc6ICdjbGVhcidcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5sb2coKTtcclxuICAgIH0sXHJcbiAgICBsb2coKSB7XHJcbiAgICAgIF9TVE9SRS5nZXQoJ2xvZ3MnKS50aGVuKGxvZ3MgPT4ge1xyXG4gICAgICAgIGxvZ3MgPSBsb2dzIHx8IFtdO1xyXG4gICAgICAgIGxldCB0YWJsZUJvZHkgPSB0aGlzLmVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0Ym9keScpWzBdLFxyXG4gICAgICAgICAgICBsID0gbG9ncy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXHJcbiAgICAgICAgICAgIHRyLCB0ZF9kYXRlLCB0ZF9tc2csIG5vZGVfZGF0ZSwgbm9kZV9tc2csIGxvZywgdGltZSwgbXNnLCByZWFzb247XHJcblxyXG4gICAgICAgIGlmIChsKSB7XHJcbiAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ25vbG9ncycpO1xyXG4gICAgICAgICAgd2hpbGUobC0tKSB7XHJcbiAgICAgICAgICAgIGxvZyA9IGxvZ3NbbF07XHJcbiAgICAgICAgICAgIG1zZyA9IGxvZ1sxXTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdudW1iZXInKSBtc2cgPSBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZShfTE9HX0tFWVMuZ2V0S2V5QnlWYWx1ZShsb2dbMV0pKTtcclxuICAgICAgICAgICAgLy8nbnUnLHt5ZWFyOidudW1lcmljJyxtb250aDonMi1kaWdpdCcsZGF5OicyLWRpZ2l0Jyxob3VyOidudW1lcmljJyxzZWNvbmQ6J251bWVyaWMnLG1pbnV0ZTonbnVtZXJpYyd9XHJcbiAgICAgICAgICAgIHRpbWUgPSB0aGlzLm9wdGltaXplRGF0ZVN0cmluZygobmV3IERhdGUobG9nWzBdKSkudG9Mb2NhbGVTdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgICAgICAgdGRfZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICAgIHRkX21zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICAgIG5vZGVfZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpbWUpO1xyXG4gICAgICAgICAgICBub2RlX21zZyA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG1zZyk7XHJcblxyXG4gICAgICAgICAgICB0ZF9kYXRlLmFwcGVuZENoaWxkKG5vZGVfZGF0ZSk7XHJcbiAgICAgICAgICAgIHRkX21zZy5hcHBlbmRDaGlsZChub2RlX21zZyk7XHJcbiAgICAgICAgICAgIGlmIChsb2dbMl0pIHtcclxuICAgICAgICAgICAgICByZWFzb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAvL3JlYXNvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsb2dbMl0pKTtcclxuICAgICAgICAgICAgICByZWFzb24uaW5uZXJUZXh0ID0gbG9nWzJdO1xyXG4gICAgICAgICAgICAgIHRkX21zZy5hcHBlbmRDaGlsZChyZWFzb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRkX2RhdGUpO1xyXG4gICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZF9tc2cpO1xyXG4gICAgICAgICAgICBmcmFnLmFwcGVuZENoaWxkKHRyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRhYmxlQm9keS5pbm5lclRleHQgPSAnJztcclxuICAgICAgICAgIHRhYmxlQm9keS5hcHBlbmRDaGlsZChmcmFnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdub2xvZ3MnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGNsZWFyKCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NsZWFyOmxvZ3MnKTtcclxuICAgIH0sXHJcbiAgICBvcHRpbWl6ZURhdGVTdHJpbmcoZGF0ZSkge1xyXG4gICAgICByZXR1cm4gKGRhdGVcclxuICAgICAgICAucmVwbGFjZSgvXihcXGR7MX0pKFxcRHsxfSkvLCAobSwgcCwgcSk9PiAnMCcgKyBwICsgcSlcclxuICAgICAgICAucmVwbGFjZSgvKFxcRHsxfSkoXFxkezF9XFxEezF9KS9nLCAobSwgcCwgcSkgPT4gcCArICcwJyArIHEpKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX01BUktFUiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGtleSwgY3VzdG9tQmdDb2xvcikge1xyXG4gICAgdGhpcy5rZXkgPSBrZXk7XHJcblxyXG4gICAgdGhpcy5zdHlsZXMgPSB7XHJcbiAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogY3VzdG9tQmdDb2xvcixcclxuICAgICAgJ2NvbG9yJzogdW5kZWZpbmVkLFxyXG4gICAgICAnYm9yZGVyLWJvdHRvbSc6IHVuZGVmaW5lZCxcclxuICAgICAgJ2ZvbnQtc2l6ZSc6IHVuZGVmaW5lZCxcclxuICAgICAgJ2ZvbnQtZmFtaWx5JzogdW5kZWZpbmVkLFxyXG4gICAgICAnZm9udC13ZWlnaHQnOiB1bmRlZmluZWQsXHJcbiAgICAgICdmb250LXN0eWxlJzogdW5kZWZpbmVkLFxyXG4gICAgICAndGV4dC1kZWNvcmF0aW9uJzogdW5kZWZpbmVkLFxyXG4gICAgICAndGV4dC1zaGFkb3cnOiB1bmRlZmluZWRcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zaGFkb3cgPSB7XHJcbiAgICAgIHg6ICcxcHgnLFxyXG4gICAgICB5OiAnMXB4JyxcclxuICAgICAgYmx1cjogJzFweCcsXHJcbiAgICAgIGNvbG9yOiAnIzAwMDAwMCdcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB0aGlzLmluamVjdCgpLnByZXZpZXcoKSk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgcmV0dXJuIF9TVE9SRS5nZXQoJ21hcmtlcnMnKS50aGVuKG1hcmtlcnMgPT4ge1xyXG4gICAgICBjb25zdCBtYXJrZXIgPSBtYXJrZXJzW3RoaXMua2V5XTtcclxuICAgICAgY29uc3QgZXhpc3RpbmdTdHlsZSA9IG1hcmtlciA/IG1hcmtlci5zdHlsZSA6IG51bGw7XHJcblxyXG4gICAgICB0aGlzLmF1dG9ub3RlID0gbWFya2VyICYmIG1hcmtlci5hdXRvbm90ZSA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICAgIGlmICghZXhpc3RpbmdTdHlsZSkgdGhpcy5zZXRTdHlsZSgpO1xyXG4gICAgICBlbHNlIHRoaXMuc3R5bGUgPSBleGlzdGluZ1N0eWxlO1xyXG5cclxuICAgICAgbGV0IHN0eWxlcyA9IHRoaXMuc3R5bGUuc3BsaXQoJzsnKSxcclxuICAgICAgICAgIGkgPSBzdHlsZXMubGVuZ3RoLFxyXG4gICAgICAgICAgc3R5bGUsIHN0eWxlU3BsaXQsIHRleHRTaGFkb3c7XHJcblxyXG4gICAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgc3R5bGUgPSBzdHlsZXNbaV07XHJcbiAgICAgICAgaWYgKHN0eWxlKSB7XHJcbiAgICAgICAgICBzdHlsZVNwbGl0ID0gc3R5bGUuc3BsaXQoJzonKTtcclxuICAgICAgICAgIHRoaXMuc3R5bGVzW3N0eWxlU3BsaXRbMF1dID0gc3R5bGVTcGxpdFsxXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICgodGV4dFNoYWRvdyA9IHRoaXMuc3R5bGVzWyd0ZXh0LXNoYWRvdyddKSAmJiB0ZXh0U2hhZG93ICE9PSAnbm9uZScpIHtcclxuICAgICAgICBsZXQgc2hhZG93U3BsaXQgPSB0ZXh0U2hhZG93LnNwbGl0KCcgJyk7XHJcbiAgICAgICAgdGhpcy5zaGFkb3cueCA9IHNoYWRvd1NwbGl0WzBdO1xyXG4gICAgICAgIHRoaXMuc2hhZG93LnkgPSBzaGFkb3dTcGxpdFsxXTtcclxuICAgICAgICB0aGlzLnNoYWRvdy5ibHVyID0gc2hhZG93U3BsaXRbMl07XHJcbiAgICAgICAgdGhpcy5zaGFkb3cuY29sb3IgPSBzaGFkb3dTcGxpdFszXTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGluamVjdCgpIHtcclxuICAgIGxldCBtYXJrZXIgPSB0aGlzLFxyXG4gICAgICAgIHN0eWxlcyA9IHRoaXMuc3R5bGVzLFxyXG4gICAgICAgIGJnSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmctY29sb3InKSxcclxuICAgICAgICBjb2xvcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQtY29sb3InKSxcclxuICAgICAgICBib3JkZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3JkZXItY29sb3InKSxcclxuICAgICAgICBhdXRvbm90ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG9ub3RlLWNvbG9yJyksXHJcbiAgICAgICAgYmcgPSBzdHlsZXNbJ2JhY2tncm91bmQtY29sb3InXSxcclxuICAgICAgICBjb2xvciA9IHN0eWxlc1snY29sb3InXSxcclxuICAgICAgICBib3JkZXIgPSBzdHlsZXNbJ2JvcmRlci1ib3R0b20nXSxcclxuICAgICAgICBhdXRvbm90ZUNvbG9yID0gdGhpcy5hdXRvbm90ZSB8fCAnJyxcclxuICAgICAgICBzaGFkb3csIHNoYWRvd1NlbGVjdCwgaTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0by1ub3RlJykuY2hlY2tlZCA9IHRoaXMuYXV0b25vdGU7XHJcbiAgICBhdXRvbm90ZUlucHV0LnZhbHVlID0gYXV0b25vdGVDb2xvciB8fCAneWVsbG93JztcclxuICAgIGF1dG9ub3RlSW5wdXQuZGlzYWJsZWQgPSAhYXV0b25vdGVDb2xvcjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZy1jb2xvci1jaGVja2JveCcpLmNoZWNrZWQgPSAhIWJnO1xyXG4gICAgYmdJbnB1dC52YWx1ZSA9IGJnIHx8ICcjZmZmZmZmJztcclxuICAgIGJnSW5wdXQuZGlzYWJsZWQgPSAhYmc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dC1jb2xvci1jaGVja2JveCcpLmNoZWNrZWQgPSAhIWNvbG9yO1xyXG4gICAgY29sb3JJbnB1dC52YWx1ZSA9IGNvbG9yIHx8ICcjMDAwMDAwJztcclxuICAgIGNvbG9ySW5wdXQuZGlzYWJsZWQgPSAhY29sb3I7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9yZGVyLWNvbG9yLWNoZWNrYm94JykuY2hlY2tlZCA9ICEhYm9yZGVyO1xyXG4gICAgYm9yZGVySW5wdXQudmFsdWUgPSBib3JkZXIgfHwgJzFweCBzb2xpZCAjZmYwMDAwJztcclxuICAgIGJvcmRlcklucHV0LmRpc2FibGVkID0gIWJvcmRlcjtcclxuXHJcbiAgICBbJ2ZvbnQtc2l6ZScsICdmb250LWZhbWlseScsICdmb250LXdlaWdodCcsICdmb250LXN0eWxlJywgJ3RleHQtZGVjb3JhdGlvbiddLmZvckVhY2gocHJvcCA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb3ApLnZhbHVlID0gc3R5bGVzW3Byb3BdIHx8ICdkZWZhdWx0JztcclxuICAgIH0pO1xyXG5cclxuICAgIHNoYWRvd1NlbGVjdCA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dC1zaGFkb3cnKTtcclxuICAgIHNoYWRvdyA9IHN0eWxlc1sndGV4dC1zaGFkb3cnXTtcclxuICAgIGkgPSAhc2hhZG93ID8gMCA6IHNoYWRvdyA9PT0gJ25vbmUnID8gMiA6IDE7XHJcblxyXG4gICAgc2hhZG93U2VsZWN0LnNlbGVjdGVkSW5kZXggPSBpO1xyXG4gICAgc2hhZG93U2VsZWN0LmNoaWxkcmVuW2ldLmNsaWNrKCk7XHJcblxyXG4gICAgWyd4JywgJ3knLCAnYmx1cicsICdjb2xvciddLmZvckVhY2gocHJvcCA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0LXNoYWRvdy0nICsgcHJvcCkudmFsdWUgPSBtYXJrZXIuc2hhZG93W3Byb3BdLnJlcGxhY2UoJ3B4JywgJycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHByZXZpZXcoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhhbXBsZScpLnN0eWxlID0gdGhpcy5zdHlsZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgdXBkYXRlKGVsKSB7XHJcbiAgICBsZXQgY2xhc3NlcyA9IGVsLmNsYXNzTGlzdCxcclxuICAgICAgICBwcm9wID0gZWwubmFtZSxcclxuICAgICAgICB2YWw7XHJcblxyXG4gICAgaWYgKGNsYXNzZXMuY29udGFpbnMoJ2Nzcy1jb2xvcicpKSB7XHJcbiAgICAgIGlmIChlbC5jaGVja2VkKSB7XHJcbiAgICAgICAgdmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpKS52YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQocHJvcCwgdmFsKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLnN0eWxlc1twcm9wXSA9IHByb3AgPT09ICdib3JkZXItYm90dG9tJyA/ICcxcHggc29saWQgJyArIHZhbCA6IHZhbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnN0eWxlc1twcm9wXSA9IHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY2xhc3Nlcy5jb250YWlucygnc2hhZG93JykpIHtcclxuICAgICAgdmFsID0gZWwudmFsdWU7XHJcblxyXG4gICAgICBpZiAodmFsID09PSAnZGVmYXVsdCcgfHwgIXRoaXMuaXNWYWxpZChwcm9wLCB2YWwpKVxyXG4gICAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gJyc7XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGxldCBtYXJrZXIgPSB0aGlzO1xyXG5cclxuICAgICAgICBzd2l0Y2godmFsKSB7XHJcbiAgICAgICAgICBjYXNlICdub25lJzogbWFya2VyLnN0eWxlc1sndGV4dC1zaGFkb3cnXSA9ICdub25lJzsgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkZWZhdWx0JzogbWFya2VyLnN0eWxlc1sndGV4dC1zaGFkb3cnXSA9IHVuZGVmaW5lZDsgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdzaGFkb3cnOiBtYXJrZXIuc2V0U2hhZG93KCk7IGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY2xhc3Nlcy5jb250YWlucygnc2hhZG93LXZhbHVlJykpIHtcclxuICAgICAgdmFsID0gZWwudmFsdWU7XHJcblxyXG4gICAgICBpZiAoIXRoaXMuaXNWYWxpZChwcm9wLCB2YWwpKVxyXG4gICAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gJyc7XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChjbGFzc2VzLmNvbnRhaW5zKCdzaGFkb3ctcHgtdmFsdWUnKSlcclxuICAgICAgICAgIHZhbCArPSAncHgnO1xyXG5cclxuICAgICAgICB0aGlzLnNoYWRvd1twcm9wXSA9IHZhbDtcclxuICAgICAgICB0aGlzLnNldFNoYWRvdygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwcm9wID09PSAnYm9yZGVyLWJvdHRvbScpIHtcclxuICAgICAgdmFsID0gJzFweCBzb2xpZCAnICsgZWwudmFsdWU7XHJcbiAgICAgIHRoaXMuc3R5bGVzW3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHZhbCA9IGVsLnZhbHVlO1xyXG5cclxuICAgICAgaWYgKHZhbCA9PT0gJ2RlZmF1bHQnIHx8ICF0aGlzLmlzVmFsaWQocHJvcCwgdmFsKSlcclxuICAgICAgICB0aGlzLnN0eWxlc1twcm9wXSA9ICcnO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgdGhpcy5zdHlsZXNbcHJvcF0gPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuc2V0U3R5bGUoKS5wcmV2aWV3KCk7XHJcbiAgfVxyXG4gIGlzVmFsaWQocHJvcCwgdmFsKSB7XHJcbiAgICBsZXQgdmFsaWQ7XHJcblxyXG4gICAgc3dpdGNoKHByb3ApIHtcclxuICAgICAgY2FzZSAnYmFja2dyb3VuZC1jb2xvcic6IHZhbGlkID0gL14jWzAtOUEtRl17Nn0kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAnY29sb3InOiB2YWxpZCA9IC9eI1swLTlBLUZdezZ9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2JvcmRlci1ib3R0b20nOiB2YWxpZCA9IC9eI1swLTlBLUZdezZ9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2ZvbnQtc2l6ZSc6IHZhbGlkID0gL15bMC05XXsxLDJ9cHgkLy50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICdmb250LWZhbWlseSc6IHZhbGlkID0gL15bYS16LFxccy1dezUsNDB9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2ZvbnQtd2VpZ2h0JzogdmFsaWQgPSAvXlthLXpdezQsN30kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAnZm9udC1zdHlsZSc6IHZhbGlkID0gL15bYS16XXs0LDd9JC9pLnRlc3QodmFsKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RleHQtZGVjb3JhdGlvbic6IHZhbGlkID0gL15bYS16LV17NywxMn0kL2kudGVzdCh2YWwpOyBicmVhaztcclxuICAgICAgY2FzZSAndGV4dC1zaGFkb3cnOiB2YWxpZCA9IC9eW2Etel17NCw3fSQvaS50ZXN0KHZhbCk7IGJyZWFrO1xyXG4gICAgICBjYXNlICd4JzogdmFsaWQgPSAvXlxcZCQvOyBicmVhaztcclxuICAgICAgY2FzZSAneSc6IHZhbGlkID0gL15cXGQkLzsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2JsdXInOiB2YWxpZCA9IC9eXFxkJC87IGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OiB2YWxpZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWxpZDtcclxuICB9XHJcbiAgc2V0U2hhZG93KCkge1xyXG4gICAgdGhpcy5zdHlsZXNbJ3RleHQtc2hhZG93J10gPSB0aGlzLnNoYWRvdy54ICsgJyAnICsgdGhpcy5zaGFkb3cueSArICcgJyArIHRoaXMuc2hhZG93LmJsdXIgKyAnICcgKyB0aGlzLnNoYWRvdy5jb2xvcjtcclxuICB9XHJcbiAgc2V0U3R5bGUoKSB7XHJcbiAgICBsZXQgc3R5bGUgPSAnJywgdmFsO1xyXG5cclxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5zdHlsZXMpIHtcclxuICAgICAgdmFsID0gdGhpcy5zdHlsZXNbaV07XHJcbiAgICAgIGlmICh2YWwpIHN0eWxlICs9IGkgKyAnOicgKyB2YWwgKyAnOyc7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0eWxlID0gc3R5bGU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vX3NoYXJlZC91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsKSB7XHJcblxyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbCxcclxuXHRcdGV2ZW50czoge1xyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJ2xpJzogJ3RvZ2dsZSdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHRcdH0sXHJcbiAgICBwYWdlTmF2OiBudWxsLFxyXG4gICAgY3VycmVudDogbnVsbCxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5wYWdlTmF2ID0gZWwuaGFzQXR0cmlidXRlKCdkYXRhLXBhZ2UtbmF2Jyk7XHJcbiAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5jdXJyZW50ID0gZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aXZlJylbMF07XHJcbiAgICAgIHRoaXMub3BlbihjdXJyZW50KTtcclxuICAgIH0sXHJcblxyXG4gICAgdG9nZ2xlKGUsIGVsKSB7XHJcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykgfHwgdGhpcy5jdXJyZW50ID09IGVsKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBpZiAodGhpcy5jdXJyZW50KSB0aGlzLmNsb3NlKHRoaXMuY3VycmVudCk7XHJcblxyXG4gICAgICB0aGlzLm9wZW4oZWwpO1xyXG4gICAgfSxcclxuICAgIG9wZW4oZWwpIHtcclxuICAgICAgY29uc3QgdGFyZ2V0SWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCkuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICAgIHRoaXMuZW1pdCgnb3BlbmVkOnRhYicsIHRhcmdldElkKTtcclxuICAgICAgdGhpcy5jdXJyZW50ID0gZWw7XHJcbiAgICAgIGlmICh0aGlzLnBhZ2VOYXYpIHdpbmRvdy5kb2N1bWVudC50aXRsZSA9ICdUZXh0bWFya2VyIC0gJyArIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKHRhcmdldElkKTtcclxuICAgIH0sXHJcbiAgICBjbG9zZShlbCkge1xyXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpKS5jbGFzc0xpc3QuYWRkKCd1LWRpc3BsYXktLW5vbmUnKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX01BUktFUiBmcm9tICcuL21hcmtlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgX0RPTU1PRFVMRSh7XHJcbiAgICBlbDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzJyksXHJcbiAgICBldmVudHM6IHtcclxuICAgICAgRU5WOiB7XHJcbiAgICAgICAgJ2ltcG9ydGVkOnNldHRpbmdzJzogJ3VwZGF0ZScsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6YmctY29sb3Itc2V0dGluZ3MnOiAndXBkYXRlJyxcclxuICAgICAgICAndXBkYXRlZDpjdXN0b20tc2VhcmNoLXNldHRpbmdzJzogJ3Nob3dDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcycsXHJcbiAgICAgICAgJ3NldC1hcmVhcy1hZnRlci1zeW5jLWNoYW5nZSc6ICd1cGRhdGUnXHJcbiAgICAgIH0sXHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNoYW5nZToge1xyXG4gICAgICAgICAgJy5jc3MnOiAnY2hhbmdlU3R5bGUnLFxyXG4gICAgICAgICAgJyNjdXN0b21pemVkLWtleSc6ICd1cGRhdGVNYXJrZXInLFxyXG4gICAgICAgICAgJyNhZGQta2V5JzogJ2FkZE1hcmtlcicsXHJcbiAgICAgICAgICAnI3JlbW92ZS1rZXknOiAncmVtb3ZlTWFya2VyJyxcclxuICAgICAgICAgICcubWFyay1vcHQnOiAnY2hhbmdlTWFya01ldGhvZCcsXHJcbiAgICAgICAgICAnLnNjLWNiJzogJ3RvZ2dsZVNob3J0Y3V0JyxcclxuICAgICAgICAgICcuc2hvcnRjdXQtc2VsZWN0JzogJ2NoYW5nZVNob3J0Y3V0JyxcclxuICAgICAgICAgICcuc2F2ZS1vcHQnOiAnY2hhbmdlU2F2ZU9wdCcsXHJcbiAgICAgICAgICAnLm5hbWluZy1vcHQnOiAnY2hhbmdlTmFtaW5nT3B0JyxcclxuICAgICAgICAgICcjbm90ZXMtbmV3JzogJ3RvZ2dsZVNhdmVOb3RlT3B0JyxcclxuICAgICAgICAgICcuY3VzdG9taXplLXF1aWNrYnV0dG9ucyc6ICdjaGFuZ2VRdWlja2J1dHRvbk9wdCcsXHJcbiAgICAgICAgICAnLmRvd25sb2FkLXF1aWNrYnV0dG9uLW9wdCc6ICdzd2l0Y2hRdWlja2J1dHRvbk9wdCcsXHJcbiAgICAgICAgICAnLmN0bS1jYic6ICd0b2dnbGVDdG0nLFxyXG4gICAgICAgICAgJy5ub3Rlcy1jYic6ICd0b2dnbGVOb3RlcycsXHJcbiAgICAgICAgICAnLm1pc2MtY2InOiAndG9nZ2xlTWlzYycsXHJcbiAgICAgICAgICAnLnRiYnBvd2VyLW9wdCc6ICd0b2dnbGVUQkJQb3dlck9wdCcsXHJcbiAgICAgICAgICAnLnRtdWlwb3MnOiAnY2hhbmdlVG11aVBvc2l0aW9uT3B0JyxcclxuICAgICAgICAgICcjcHJpdmF0ZS1zYXZlJzogJ3RvZ2dsZVByaXZTYXZlJyxcclxuICAgICAgICAgICcjYXV0by1ub3RlJzogJ3RvZ2dsZUF1dG9Ob3RlT3B0JyxcclxuICAgICAgICAgICcjaW1tdXQnOiAndG9nZ2xlSW1tdXRPcHQnLFxyXG4gICAgICAgICAgJyNkcm9wLWxvc3Nlcyc6ICd0b2dnbGVEcm9wTG9zc2VzT3B0JyxcclxuICAgICAgICAgICcjYXV0b25vdGUtY29sb3InOiAnY2hhbmdlQXV0b05vdGVPcHQnLFxyXG4gICAgICAgICAgJyNpZ25vcmUtaGFzaCc6ICdjaGFuZ2VIYXNoT3B0JyxcclxuICAgICAgICAgICcjYWRkb24tYXV0b2NzJzogJ3RvZ2dsZUF1dG9jc09wdCcsXHJcbiAgICAgICAgICAnI2FkZG9uLWlmcmFtZXMnOiAndG9nZ2xlSUZyYW1lT3B0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICcjY3VzdG9tLXNlYXJjaCc6ICdjaGFuZ2VDdXN0b21TZWFyY2gnLFxyXG4gICAgICAgICAgJy5jdXN0b20tc2VhcmNoLWlucHV0JzogJ2hpZGVDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhbGxvd2VkS2V5czogJ2EgYiBjIGQgZSBmIGcgaCBpIGogayBsIG4gbyBwIHEgciBzIHQgdSB2IHggeSB6IDAgMSA0IDUgNiA3IDggOSBlbnRlciAtICsnLnNwbGl0KCcgJyksXHJcbiAgICBhbGxvd2VkU2hvcnRjdXRzOiBbJycsICdjdHJsS2V5JywgJ3NoaWZ0S2V5JywgJ2FsdEtleScsICdjdHJsS2V5LXNoaWZ0S2V5JywgJ2N0cmxLZXktYWx0S2V5JywgJ3NoaWZ0S2V5LWFsdEtleScsICdtZXRhS2V5JywgJ21ldGFLZXktc2hpZnRLZXknLCAnbWV0YUtleS1hbHRLZXknXSxcclxuICAgIGFsbG93ZWRRdWlja2J1dHRvbk9wdHM6IFsndGl0bGUnLCAndXJsJywgJ3RleHQnLCAndGV4dCArbWV0YScsICd0ZXh0ICtub3RlcycsICd0ZXh0ICtsb3N0JywgJ3RleHQgbScsICd0ZXh0IDInLCAndGV4dCAzJywgJ3RleHQgYycsICd0ZXh0IGxvc3QnXSxcclxuICAgIG1hcmtlcktleXM6IFsnbScsICcyJywgJzMnXSxcclxuICAgIGN1c3RvbU1hcmtlcktleXM6IFtdLFxyXG4gICAgbWFya2VyOiBudWxsLFxyXG4gICAgY3VzdG9tU2VhcmNoOiBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbG5nJykgKyAnLndpa2lwZWRpYS5vcmcvd2lraS8nLFxyXG5cclxuICAgIGF1dG9pbml0KCkge1xyXG4gICAgICB0aGlzLmluaXQoKTtcclxuICAgIH0sXHJcbiAgICBpbml0KCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIGxldCBtYXJrZXJzID0gc2V0dGluZ3MubWFya2VycyxcclxuICAgICAgICAgICAgbWFya2VyS2V5cyA9IHRoaXMubWFya2VyS2V5cyxcclxuICAgICAgICAgICAgY3VzdG9tTWFya2VyS2V5cyA9IHRoaXMuY3VzdG9tTWFya2VyS2V5cyxcclxuICAgICAgICAgICAgaSwga2V5O1xyXG5cclxuICAgICAgICBmb3IgKGtleSBpbiBtYXJrZXJzKSB7XHJcbiAgICAgICAgICBpID0ga2V5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICBpZiAoIW1hcmtlcktleXMuaW5jbHVkZXMoaSkgJiYgIWN1c3RvbU1hcmtlcktleXMuaW5jbHVkZXMoaSkpXHJcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tTWFya2VyS2V5cy5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJNYXJrZXJTZWxlY3RPcHRpb25zKClcclxuICAgICAgICAgICAgLnVwZGF0ZU1hcmtlcih0aGlzLm1hcmtlciA/IHRoaXMubWFya2VyLmtleSA6ICdtJylcclxuICAgICAgICAgICAgLmluamVjdFNldHRpbmdzKHNldHRpbmdzKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVzdW1lKCkge1xyXG4gICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjdXN0b20ta2V5JykpLmZvckVhY2goZWwgPT4gZWwucmVtb3ZlKCkpO1xyXG4gICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjdXN0b20tbWFya2VyLW9wdGlvbicpKS5mb3JFYWNoKGVsID0+IGVsLnJlbW92ZSgpKTtcclxuICAgICAgdGhpcy5jdXN0b21NYXJrZXJLZXlzID0gW107XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgdGhpcy5yZXN1bWUoKS5pbml0KCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlTWFya2VyKGUsIGVsLCBjdXN0b21CZ0NvbG9yKSB7XHJcbiAgICAgIGxldCBrZXkgPSBlbCA/IGVsLnZhbHVlIDogZSA/IGUgOiB0aGlzLm1hcmtlciA/IHRoaXMubWFya2VyLmtleSA6ICdtJztcclxuXHJcbiAgICAgIHRoaXMubWFya2VyID0gbmV3IF9NQVJLRVIoa2V5LCBjdXN0b21CZ0NvbG9yKTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHJlbmRlck1hcmtlclNlbGVjdE9wdGlvbnMoKSB7XHJcbiAgICAgIGxldCBrZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9taXplZC1rZXknKSxcclxuICAgICAgICAgIGtleUljb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1rZXlzJyksXHJcbiAgICAgICAgICBhZGRLZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWtleScpLFxyXG4gICAgICAgICAgcmVtb3ZlS2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbW92ZS1rZXknKSxcclxuXHJcbiAgICAgICAgICBhbGxvd2VkS2V5cyA9IHRoaXMuYWxsb3dlZEtleXMsXHJcbiAgICAgICAgICBjdXN0b21NYXJrZXJLZXlzID0gdGhpcy5jdXN0b21NYXJrZXJLZXlzLFxyXG5cclxuICAgICAgICAgIGEgPSBhbGxvd2VkS2V5cy5sZW5ndGgsXHJcbiAgICAgICAgICBjID0gY3VzdG9tTWFya2VyS2V5cy5sZW5ndGgsXHJcbiAgICAgICAgICBpID0gMCxcclxuXHJcbiAgICAgICAgICBmcmFnbWVudDEgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXHJcbiAgICAgICAgICBmcmFnbWVudDIgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXHJcbiAgICAgICAgICBmcmFnbWVudDMgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXHJcbiAgICAgICAgICBmcmFnbWVudDQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXHJcblxyXG4gICAgICAgICAgb3B0aW9uLCBpY29uLCB2YWwsIFZhbDtcclxuXHJcbiAgICAgIGZvciAoOyBpIDwgYzsgaSsrKSB7XHJcbiAgICAgICAgdmFsID0gY3VzdG9tTWFya2VyS2V5c1tpXTtcclxuICAgICAgICBWYWwgPSB2YWwudG9VcHBlckNhc2UoKTtcclxuICAgICAgICBWYWwgPSBWYWwgPT09ICdFTlRFUicgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4MjFCNSkgOiBWYWw7XHJcbiAgICAgICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgZnJhZ21lbnQxLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gdmFsO1xyXG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSB2YWwudG9VcHBlckNhc2UoKTtcclxuICAgICAgICBvcHRpb24uY2xhc3NOYW1lID0gJ2N1c3RvbS1tYXJrZXItb3B0aW9uIGN1c3RvbS1tYXJrZXItb3B0aW9uLScgKyB2YWw7XHJcblxyXG4gICAgICAgIGZyYWdtZW50My5hcHBlbmRDaGlsZChvcHRpb24uY2xvbmVOb2RlKHRydWUpKTtcclxuXHJcbiAgICAgICAgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGZyYWdtZW50Mi5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgICAgICBpY29uLmNsYXNzTmFtZSA9ICdrZXkgY3VzdG9tLWtleSc7XHJcbiAgICAgICAgaWNvbi5pZCA9ICdjdXN0b20ta2V5LScgKyB2YWw7XHJcbiAgICAgICAgaWNvbi5pbm5lclRleHQgPSBWYWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGtleVNlbGVjdC5hcHBlbmRDaGlsZChmcmFnbWVudDEpO1xyXG4gICAgICBrZXlJY29ucy5hcHBlbmRDaGlsZChmcmFnbWVudDIpO1xyXG4gICAgICByZW1vdmVLZXlTZWxlY3QuYXBwZW5kQ2hpbGQoZnJhZ21lbnQzKTtcclxuXHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBhOyBpKyspIHtcclxuICAgICAgICB2YWwgPSBhbGxvd2VkS2V5c1tpXS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBpZiAoY3VzdG9tTWFya2VyS2V5cy5pbmNsdWRlcyh2YWwpKVxyXG4gICAgICAgICAgICBjb250aW51ZVxyXG5cclxuICAgICAgICBWYWwgPSB2YWwudG9VcHBlckNhc2UoKTtcclxuICAgICAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBmcmFnbWVudDQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSB2YWw7XHJcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IFZhbDtcclxuICAgICAgICBvcHRpb24uY2xhc3NOYW1lID0gJ2N1c3RvbS1tYXJrZXItb3B0aW9uIGN1c3RvbS1tYXJrZXItb3B0aW9uLScgKyB2YWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFkZEtleVNlbGVjdC5hcHBlbmRDaGlsZChmcmFnbWVudDQpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgaW5qZWN0U2V0dGluZ3Moc2V0dGluZ3MpIHtcclxuICAgICAgbGV0IHNob3J0Y3V0cyA9IHNldHRpbmdzLnNob3J0Y3V0cyxcclxuICAgICAgICAgIGksIHNjQ2hlY2tib3gsIHNjU2VsZWN0LCBjbUNoZWNrYm94LCBzYztcclxuXHJcbiAgICAgIGZvciAoaSBpbiBzaG9ydGN1dHMpIHtcclxuICAgICAgICBzYyA9IHNob3J0Y3V0c1tpXTtcclxuICAgICAgICBzY0NoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjLScgKyBpKTtcclxuICAgICAgICBzY1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG9ydGN1dC1zZWxlY3QtJyArIGkpO1xyXG4gICAgICAgIGNtQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY20tJyArIGkpO1xyXG5cclxuICAgICAgICBpZiAoc2NDaGVja2JveCkgc2NDaGVja2JveC5jaGVja2VkID0gc2NbMV07XHJcbiAgICAgICAgaWYgKHNjU2VsZWN0KSBzY1NlbGVjdC52YWx1ZSA9IHNjWzBdO1xyXG4gICAgICAgIGlmIChjbUNoZWNrYm94KSBjbUNoZWNrYm94LmNoZWNrZWQgPSBzY1syXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGhpc3RvcnlTZXR0aW5ncyA9IHNldHRpbmdzLmhpc3RvcnksXHJcbiAgICAgICAgICBzYXZlT3B0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdzYXZlLW9wdCcpO1xyXG5cclxuICAgICAgaWYgKGhpc3RvcnlTZXR0aW5ncy5hdXRvc2F2ZSkgc2F2ZU9wdHNbMF0uY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIGVsc2Ugc2F2ZU9wdHNbMV0uY2hlY2tlZCA9IHRydWU7XHJcblxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZS0nICsgaGlzdG9yeVNldHRpbmdzLm5hbWluZykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcml2YXRlLXNhdmUnKS5jaGVja2VkID0gaGlzdG9yeVNldHRpbmdzLnNhdmVJblByaXY7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbW11dCcpLmNoZWNrZWQgPSBoaXN0b3J5U2V0dGluZ3MuaW1tdXQ7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wLWxvc3NlcycpLmNoZWNrZWQgPSBoaXN0b3J5U2V0dGluZ3MuZHJvcExvc3NlcztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzLW5ldycpLmNoZWNrZWQgPSBoaXN0b3J5U2V0dGluZ3Muc2F2ZU5vdGU7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZ25vcmUtaGFzaCcpLmNoZWNrZWQgPSAhaGlzdG9yeVNldHRpbmdzLmlnbm9yZUhhc2g7XHJcblxyXG4gICAgICBpZiAoaGlzdG9yeVNldHRpbmdzLmRvd25sb2FkID09PSAnanNvbicpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG93bmxvYWQtanNvbicpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb3dubG9hZC10ZXh0JykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aWNrYnV0dG9uLWRvd25sb2FkLXNlbGVjdCcpLnZhbHVlID0gaGlzdG9yeVNldHRpbmdzLmRvd25sb2FkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgbWlzY1NldHRpbmdzID0gc2V0dGluZ3MubWlzYztcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrLW1ldGhvZC0tJyArIG1pc2NTZXR0aW5ncy5tYXJrbWV0aG9kKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pc2MtYm0nKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLmJtaWNvbjtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pc2Mtbm90ZWljb24nKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLm5vdGVpY29uO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlzYy1ub3Rlb25jbGljaycpLmNoZWNrZWQgPSBtaXNjU2V0dGluZ3Mubm90ZW9uY2xpY2s7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaXNjLW5vdGV0cmFuc3AnKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLm5vdGV0cmFuc3A7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaXNjLW5vdGVwbGFpbnZpZXcnKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLm5vdGVwbGFpbnZpZXc7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlcy1yZXN0b3JhdGlvbi1mYWlsdXJlJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5mYWlsdXJlTm90ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzLXJlc3RvcmF0aW9uLXN1Y2Nlc3MnKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLnN1Y2Nlc3NOb3RlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMtcGJtJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy5wYm1Ob3RlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMtZXJyb3InKS5jaGVja2VkID0gbWlzY1NldHRpbmdzLmVycm9yTm90ZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpcC1ub3RlJykuY2hlY2tlZCA9IG1pc2NTZXR0aW5ncy52aXBOb3RlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tc3RhcnQnKS52YWx1ZSA9IG1pc2NTZXR0aW5ncy5jdXN0b21TZWFyY2ggPyBtaXNjU2V0dGluZ3MuY3VzdG9tU2VhcmNoWzBdIDogdGhpcy5jdXN0b21TZWFyY2g7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tc2VhcmNoLS1lbmQnKS52YWx1ZSA9IG1pc2NTZXR0aW5ncy5jdXN0b21TZWFyY2ggPyBtaXNjU2V0dGluZ3MuY3VzdG9tU2VhcmNoWzFdIDogJyc7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0bXVpcG9zLS1ub3RlaWNvbicpLnZhbHVlID0gbWlzY1NldHRpbmdzLnRtdWlwb3M7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0bXVpcG9zLS1ibWljb24nKS52YWx1ZSA9IG1pc2NTZXR0aW5ncy50bXVpcG9zO1xyXG5cclxuICAgICAgaWYgKG1pc2NTZXR0aW5ncy50YmJwb3dlcikge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YmJwb3dlci1vbicpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YmJwb3dlci1vZmYnKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZG9uLWF1dG9jcycpLmNoZWNrZWQgPSBzZXR0aW5ncy5hZGRvbi5hdXRvY3M7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRvbi1pZnJhbWVzJykuY2hlY2tlZCA9IHNldHRpbmdzLmFkZG9uLmlmcmFtZXM7XHJcbiAgICB9LFxyXG4gICAgc2hvd0N1c3RvbVNlYXJjaFNldHRpbmdTdWNjZXNzKCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tc3VibWl0dGVkJykuY2xhc3NMaXN0LnJlbW92ZSgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9LFxyXG4gICAgaGlkZUN1c3RvbVNlYXJjaFNldHRpbmdTdWNjZXNzKCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tc3VibWl0dGVkJykuY2xhc3NMaXN0LmFkZCgndS1kaXNwbGF5LS1ub25lJyk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlU3R5bGUoZSwgZWwpIHtcclxuICAgICAgY29uc3QgbWFya2VyID0gdGhpcy5tYXJrZXIudXBkYXRlKGVsKTtcclxuXHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOnN0eWxlLXNldHRpbmcnLCBtYXJrZXIua2V5LCBtYXJrZXIuc3R5bGUpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUF1dG9Ob3RlT3B0KGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IHZhbCA9IGVsLmNoZWNrZWQgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0b25vdGUtY29sb3InKS52YWx1ZSA6IGZhbHNlO1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTphdXRvbm90ZS1zZXR0aW5nJywgdGhpcy5tYXJrZXIua2V5LCB2YWwpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZUF1dG9Ob3RlT3B0KGUsIGVsKSB7XHJcbiAgICAgIGNvbnN0IHZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvLW5vdGUnKS5jaGVja2VkID8gZWwudmFsdWUgOiBmYWxzZTtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6YXV0b25vdGUtc2V0dGluZycsIHRoaXMubWFya2VyLmtleSwgdmFsKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VIYXNoT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmhhc2gtc2V0dGluZycsICFlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVJbW11dE9wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTppbW11dC1zZXR0aW5nJywgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlRHJvcExvc3Nlc09wdChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpkcm9wTG9zc2VzLXNldHRpbmcnLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVBdXRvY3NPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6YXV0b2NzLXNldHRpbmcnLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVJRnJhbWVPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6aWZyYW1lLXNldHRpbmcnLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICBhZGRNYXJrZXIoZSwgZWwpIHtcclxuICAgICAgbGV0IGtleSA9IGVsLnZhbHVlLFxyXG4gICAgICAgICAga2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbWl6ZWQta2V5JyksXHJcbiAgICAgICAgICBrZXlJY29ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20ta2V5cycpLFxyXG4gICAgICAgICAgcmVtb3ZlS2V5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbW92ZS1rZXknKSxcclxuICAgICAgICAgIG9wdGlvbiA9IGVsLmNoaWxkcmVuW2VsLnNlbGVjdGVkSW5kZXhdLFxyXG4gICAgICAgICAgY2xvbmUgPSBvcHRpb24uY2xvbmVOb2RlKHRydWUpLFxyXG4gICAgICAgICAgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgYmdDb2xvciA9IHRoaXMuZ2V0UmFuZG9tTGlnaHRDb2xvcigpO1xyXG5cclxuICAgICAgaWYgKCFrZXkgfHwgcmVtb3ZlS2V5U2VsZWN0LmNoaWxkcmVuLmxlbmd0aCA+PSAxMiB8fCB0aGlzLmFsbG93ZWRLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIHJlbW92ZUtleVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICByZW1vdmVLZXlTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgIGtleVNlbGVjdC5hcHBlbmRDaGlsZChjbG9uZSk7XHJcbiAgICAgIGNsb25lLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgaWNvbi5jbGFzc05hbWUgPSAna2V5IGN1c3RvbS1rZXknO1xyXG4gICAgICBpY29uLmlkID0gJ2N1c3RvbS1rZXktJyArIGtleTtcclxuICAgICAga2V5SWNvbnMuYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgICAgIGljb24uaW5uZXJUZXh0ID0ga2V5ID09PSAnZW50ZXInID8gU3RyaW5nLmZyb21DaGFyQ29kZSgweDIxQjUpIDoga2V5LnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZU1hcmtlcihrZXksIG51bGwsIGJnQ29sb3IpO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdhZGQ6Y3VzdG9tLW1hcmtlcicsIGtleSwgJ2JhY2tncm91bmQtY29sb3I6JyArIGJnQ29sb3IgKyAnOycpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZU1hcmtlcihlLCBlbCkge1xyXG4gICAgICBsZXQga2V5ID0gZWwudmFsdWUsXHJcbiAgICAgICAgICBrZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9taXplZC1rZXknKSxcclxuICAgICAgICAgIGtleUljb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1rZXlzJyksXHJcbiAgICAgICAgICBhZGRLZXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWtleScpLFxyXG4gICAgICAgICAgb3B0aW9uO1xyXG5cclxuICAgICAgaWYgKCFrZXkgfHwgdGhpcy5hbGxvd2VkS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBvcHRpb24gPSBlbC5jaGlsZHJlbltlbC5zZWxlY3RlZEluZGV4XTtcclxuICAgICAgYWRkS2V5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgIGFkZEtleVNlbGVjdC5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgZWwuc2VsZWN0ZWRJbmRleCA9IDA7XHJcblxyXG4gICAgICBrZXlTZWxlY3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY3VzdG9tLW1hcmtlci1vcHRpb24tJyArIGtleSlbMF0ucmVtb3ZlKCk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20ta2V5LScgKyBrZXkpLnJlbW92ZSgpO1xyXG4gICAgICBrZXlTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDA7XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZU1hcmtlcignbScpO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmU6Y3VzdG9tLW1hcmtlcicsIGtleSk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlTWFya01ldGhvZChlLCBlbCkge1xyXG4gICAgICBpZiAoZWwuY2hlY2tlZCkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOm1hcmstbWV0aG9kLXNldHRpbmcnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0b2dnbGVTaG9ydGN1dChlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpzaG9ydGN1dC1zZXR0aW5nJywgZWwubmFtZSwgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlU2hvcnRjdXQoZSwgZWwpIHtcclxuICAgICAgaWYgKCF0aGlzLmFsbG93ZWRTaG9ydGN1dHMuaW5jbHVkZXMoZWwudmFsdWUpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZTpzaG9ydGN1dC1zZXR0aW5nJywgZWwubmFtZSwgZWwudmFsdWUpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUN0bShlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpjdG0tc2V0dGluZycsIGVsLm5hbWUsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZVNhdmVPcHQoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6c2F2ZW9wdC1zZXR0aW5nJywgISFlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlUHJpdlNhdmUoZSwgZWwpIHtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6cHJpdi1zZXR0aW5nJywgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlTmFtaW5nT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOm5hbWluZ29wdC1zZXR0aW5nJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZVNhdmVOb3RlT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOm5vdGVvcHQtc2V0dGluZycsIGVsLmNoZWNrZWQpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZVF1aWNrYnV0dG9uT3B0KGUsIGVsKSB7XHJcbiAgICAgIGlmICghdGhpcy5hbGxvd2VkUXVpY2tidXR0b25PcHRzLmluY2x1ZGVzKGVsLnZhbHVlKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6cXVpY2tidXR0b25vcHQtc2V0dGluZycsIGVsLm5hbWUsIGVsLnZhbHVlKTtcclxuICAgIH0sXHJcbiAgICBzd2l0Y2hRdWlja2J1dHRvbk9wdChlLCBlbCkge1xyXG4gICAgICBjb25zdCB0eXBlID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICAgIGNvbnN0IHZhbCA9IHR5cGUgPT09ICdqc29uJyA/IHR5cGUgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpY2tidXR0b24tZG93bmxvYWQtc2VsZWN0JykudmFsdWU7XHJcbiAgICAgIHRoaXMuZW1pdCgnc3dpdGNoOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnLCBlbC5uYW1lLCB2YWwpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZU5vdGVzKGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgndG9nZ2xlOm5vdGlmaWNhdGlvbi1zZXR0aW5nJywgZWwubmFtZSwgZWwuY2hlY2tlZCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlTWlzYyhlLCBlbCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTptaXNjLXNldHRpbmcnLCBlbC5uYW1lLCBlbC5jaGVja2VkKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVUQkJQb3dlck9wdChlLCBlbCkge1xyXG4gICAgICBjb25zdCB2YWwgPSAhIShlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSoxKTtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6dGJicG93ZXItc2V0dGluZycsIGVsLm5hbWUsIHZhbCk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlVG11aVBvc2l0aW9uT3B0KGUsIGVsKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOm1pc2Mtc2V0dGluZycsIGVsLm5hbWUsIGVsLnZhbHVlKTtcclxuICAgICAgQXJyYXkuZnJvbSh0aGlzLmVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RtdWlwb3MnKSkuZm9yRWFjaChzZWxlY3QgPT4gc2VsZWN0LnZhbHVlID0gZWwudmFsdWUpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZUN1c3RvbVNlYXJjaChlLCBlbCkge1xyXG4gICAgICB0aGlzLmhpZGVDdXN0b21TZWFyY2hTZXR0aW5nU3VjY2VzcygpO1xyXG4gICAgICBjb25zdCBpbnAxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1zZWFyY2gtLXN0YXJ0Jyk7XHJcbiAgICAgIGNvbnN0IGlucDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLXNlYXJjaC0tZW5kJyk7XHJcbiAgICAgIGNvbnN0IHBhcnQxID0gaW5wMS52YWx1ZTtcclxuICAgICAgY29uc3QgcGFydDIgPSBpbnAyLnZhbHVlO1xyXG4gICAgICBpZiAoIXBhcnQxICYmICFwYXJ0Mikge1xyXG4gICAgICAgIGlucDEudmFsdWUgPSB0aGlzLmN1c3RvbVNlYXJjaDtcclxuICAgICAgICBpbnAyLnZhbHVlID0gJyc7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6Y3VzdG9tLXNlYXJjaC1zZXR0aW5nJywgZmFsc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOmN1c3RvbS1zZWFyY2gtc2V0dGluZycsIFtwYXJ0MSwgcGFydDJdKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldFJhbmRvbUxpZ2h0Q29sb3IoKSB7XHJcbiAgICAgIHJldHVybiAnIycgKyBNYXRoLmZsb29yKCgwLjggKyBNYXRoLnJhbmRvbSgpICogMC4xNzUpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3luYycpLFxyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICdmYWlsZWQ6dG9nZ2xlLXN5bmMnOiAndW5kbydcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICcuc3dpdGNoJzogJ3RvZ2dsZVN3aXRjaCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYXV0b2luaXQoKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeW5jLXN3aXRjaC0tc2V0dGluZ3MnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBfU1RPUkUuYXJlYV9zZXR0aW5ncyA9PT0gJ3N5bmMnKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bmMtc3dpdGNoLS1oaXN0b3J5JykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgX1NUT1JFLmFyZWFfaGlzdG9yeSA9PT0gJ3N5bmMnKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bmMtc3dpdGNoLS1wYWdlbm90ZXMnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBfU1RPUkUuYXJlYV9wYWdlbm90ZXMgPT09ICdzeW5jJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHRvZ2dsZVN3aXRjaChlLCBlbCkge1xyXG4gICAgICBlbCA9IGVsLmNsYXNzTGlzdC5jb250YWlucygnc3dpdGNoLS1zeW5jJykgPyBlbCA6IGVsLnBhcmVudE5vZGU7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICB0aGlzLmVtaXQoJ3RvZ2dsZTpzeW5jJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSwgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVuZG8oZmllbGQpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N5bmMtc3dpdGNoLS0nICsgZmllbGQpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIF9UT0dHTEVSIHtcclxuXHJcbiAgY29uc3RydWN0b3IoZWwpIHtcclxuICAgIHRoaXMuZWwgPSBlbDtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZSwgZmFsc2UpO1xyXG4gIH1cclxuICB0b2dnbGUoZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICBsZXQgZGF0YVRhcmdldCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpLFxyXG4gICAgICAgIHRhcmdldHMgPSBkYXRhVGFyZ2V0ID8gZGF0YVRhcmdldC5zcGxpdCgnICcpIDogbnVsbCxcclxuICAgICAgICBkYXRhVG9nZ2xlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJyksXHJcbiAgICAgICAgcm9sZXMgPSBkYXRhVG9nZ2xlID8gZGF0YVRvZ2dsZS5zcGxpdCgnICcpIDogbnVsbDtcclxuXHJcbiAgICBpZiAocm9sZXMpIHtcclxuICAgICAgcm9sZXMuZm9yRWFjaCgocm9sZSwgaSkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0c1tpXSkuY2xhc3NMaXN0W3JvbGVdKCdvcGVuJykpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRzWzBdKS5kaXNhYmxlZCA9ICF0aGlzLmNoZWNrZWQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi9fc2hhcmVkL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IF9QT1JUKHtcclxuICBuYW1lOiAnYWRkb24tcGFnZScsXHJcbiAgdHlwZTogJ2NvbnRlbnQnLFxyXG4gIGV2ZW50czoge1xyXG4gICAgT05FT0ZGOiBbXHJcbiAgICAgICdjaGFuZ2U6c3R5bGUtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6YXV0b25vdGUtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6bWFyay1tZXRob2Qtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6c2hvcnRjdXQtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6c2hvcnRjdXQtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6Y3RtLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnNhdmVvcHQtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6cHJpdi1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTppbW11dC1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpkcm9wTG9zc2VzLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOm5hbWluZ29wdC1zZXR0aW5nJyxcclxuICAgICAgJ2NoYW5nZTpzb3J0LXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOnZpZXctc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6aGFzaC1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTpub3Rlb3B0LXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnLFxyXG4gICAgICAnc3dpdGNoOnF1aWNrYnV0dG9ub3B0LXNldHRpbmcnLFxyXG4gICAgICAndG9nZ2xlOm5vdGlmaWNhdGlvbi1zZXR0aW5nJyxcclxuICAgICAgJ3RvZ2dsZTptaXNjLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOm1pc2Mtc2V0dGluZycsXHJcbiAgICAgICd0b2dnbGU6dGJicG93ZXItc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2U6YXV0b2NzLXNldHRpbmcnLFxyXG4gICAgICAnY2hhbmdlOmlmcmFtZS1zZXR0aW5nJyxcclxuICAgICAgJ2FkZDpjdXN0b20tbWFya2VyJyxcclxuICAgICAgJ3JlbW92ZTpjdXN0b20tbWFya2VyJyxcclxuICAgICAgJ2RlbGV0ZTplbnRyaWVzJyxcclxuICAgICAgJ2NsZWFuOmVudHJpZXMnLFxyXG4gICAgICAnb3BlbjplbnRyaWVzJyxcclxuICAgICAgJ3JlbmFtZTplbnRyeScsXHJcbiAgICAgICd2aWV3OmVudHJ5JyxcclxuICAgICAgJ3N5bmM6ZW50cnknLFxyXG4gICAgICAnc3luYzpoaXN0b3J5JyxcclxuICAgICAgJ3N5bmM6c2V0dGluZ3MnLFxyXG4gICAgICAnaW1wb3J0OnN0b3JhZ2UnLFxyXG4gICAgICAndG9nZ2xlOnN5bmMnLFxyXG4gICAgICAnY2hhbmdlOmN1c3RvbS1zZWFyY2gtc2V0dGluZycsXHJcbiAgICAgICdjaGFuZ2VkOnBlci1wYWdlLWNvdW50JyxcclxuICAgICAgJ2Vycm9yOmJyb3dzZXItY29uc29sZScsXHJcbiAgICAgICdjbGVhcjpsb2dzJyxcclxuICAgICAgJ3RhZzplbnRyaWVzJ1xyXG4gICAgXVxyXG4gIH1cclxufSlcclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgdmVyc2lvbjogYnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbixcclxuICBzZXR0aW5nczp7XHJcbiAgICBzaG9ydGN1dHM6IHtcclxuICAgICAgejogWydjdHJsS2V5LWFsdEtleScsIHRydWVdLFxyXG4gICAgICB5OiBbJ2N0cmxLZXktYWx0S2V5JywgdHJ1ZV0sXHJcbiAgICAgIHM6IFsnY3RybEtleS1hbHRLZXknLCB0cnVlXSxcclxuICAgICAgYzogWydjdHJsS2V5LWFsdEtleScsIGZhbHNlLCB0cnVlXSxcclxuICAgICAgYjogWydjdHJsS2V5LWFsdEtleScsIHRydWUsIHRydWVdLFxyXG4gICAgICBkOiBbJ3NoaWZ0S2V5JywgZmFsc2UsIHRydWVdLFxyXG4gICAgICAnLWInOiBbJycsICcnLCB0cnVlXSxcclxuICAgICAgbTogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgdzogWycnLCB0cnVlLCB0cnVlXSxcclxuICAgICAgbjogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgICcyJzogWycnLCB0cnVlXSxcclxuICAgICAgJzMnOiBbJycsIHRydWVdLFxyXG4gICAgICBhcnJvd3VwOiBbJ2FsdEtleScsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICAgIGFycm93ZG93bjogWydhbHRLZXknLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICBzYjogWycnLCAnJywgdHJ1ZV0sXHJcbiAgICAgIGNtOiBbJycsIHRydWVdXHJcbiAgICB9LFxyXG4gICAgbWFya2Vyczoge1xyXG4gICAgICAnMSc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNkZDk5ZmY7JyB9LFxyXG4gICAgICAnMic6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM2NmJiZmY7JyB9LFxyXG4gICAgICAnMyc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiM1NWZmNTU7JyB9LFxyXG4gICAgICAnNCc6IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZjY2NjY7Y29sb3I6I2ZmZmZmZjsnIH0sXHJcbiAgICAgICc1JzogeyBzdHlsZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmY2MwMDsnIH0sXHJcbiAgICAgIG06IHsgc3R5bGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmVlMDA7JyB9XHJcbiAgICB9LFxyXG4gICAgaGlzdG9yeToge1xyXG4gICAgICBhdXRvc2F2ZTogdHJ1ZSxcclxuICAgICAgc2F2ZUluUHJpdjogZmFsc2UsXHJcbiAgICAgIGRyb3BMb3NzZXM6IHRydWUsXHJcbiAgICAgIGltbXV0OiBmYWxzZSxcclxuICAgICAgbmFtaW5nOiAndGl0bGUnLFxyXG4gICAgICBkb3dubG9hZDogJ2pzb24nLFxyXG4gICAgICBjb3B5OiAndGV4dCcsXHJcbiAgICAgIHNhdmVOb3RlOiB0cnVlLFxyXG4gICAgICBzb3J0ZWQ6ICdkYXRlLWxhc3QnLFxyXG4gICAgICB2aWV3OiAnbGlzdCcsXHJcbiAgICAgIHBwOiAxMCxcclxuICAgICAgaWdub3JlSGFzaDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGFkZG9uOiB7XHJcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgICAgYXV0b2NzOiB0cnVlLFxyXG4gICAgICBpZnJhbWVzOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgbWlzYzoge1xyXG4gICAgICBibWljb246IHRydWUsXHJcbiAgICAgIG5vdGVpY29uOiB0cnVlLFxyXG4gICAgICBub3Rlb25jbGljazogdHJ1ZSxcclxuICAgICAgbm90ZXRyYW5zcDogZmFsc2UsXHJcbiAgICAgIG5vdGVwbGFpbnZpZXc6IGZhbHNlLFxyXG4gICAgICBvdmVyd3JpdGU6IGZhbHNlLFxyXG4gICAgICBmYWlsdXJlTm90ZTogdHJ1ZSxcclxuICAgICAgc3VjY2Vzc05vdGU6IHRydWUsXHJcbiAgICAgIHBibU5vdGU6IHRydWUsXHJcbiAgICAgIGNoYW5nZWROb3RlOiBmYWxzZSxcclxuICAgICAgZXJyb3JOb3RlOiB0cnVlLFxyXG4gICAgICB2aXBOb3RlOiB0cnVlLFxyXG4gICAgICBjdXN0b21TZWFyY2g6IGZhbHNlLFxyXG4gICAgICB0bXVpcG9zOiAndG9wLXJpZ2h0JyxcclxuICAgICAgbWFya21ldGhvZDogJ3BvcHVwJyxcclxuICAgICAgcHJvZ3Jlc3NiYXI6IHRydWUsXHJcbiAgICAgIHRiYnBvd2VyOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHNiOiB7XHJcbiAgICAgIHRhYnM6IHtcclxuICAgICAgICBtZXRhOiB7IHVuZm9sZGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIHRhZ3M6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbm90ZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgbWFya2VyczogeyB1bmZvbGRlZDogdHJ1ZSB9LFxyXG4gICAgICAgIGFjdGlvbnM6IHsgdW5mb2xkZWQ6IHRydWUgfSxcclxuICAgICAgICBtYXJrczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICBsaW5rczogeyB1bmZvbGRlZDogZmFsc2UgfSxcclxuICAgICAgICB0aGVtZXM6IHsgdW5mb2xkZWQ6IGZhbHNlIH1cclxuICAgICAgfSxcclxuICAgICAgdGhlbWU6ICdkZWZhdWx0J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgaGlzdG9yeToge1xyXG4gICAgZW50cmllczoge31cclxuICB9LFxyXG4gIHBhZ2Vub3Rlczoge30sXHJcbiAgc3luYzoge1xyXG4gICAgc2V0dGluZ3M6IGZhbHNlLFxyXG4gICAgaGlzdG9yeTogZmFsc2UsXHJcbiAgICBwYWdlbm90ZXM6IGZhbHNlXHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgbm90ZV9wYm06IDEsXHJcbiAgbm90ZV9yZXN0b3JhdGlvbl9mYWlsdXJlOiAyLFxyXG4gIG5vdGVfdXJsOiAzLFxyXG4gIGVycm9yX3NhdmVfc3R5bGU6IDQsXHJcbiAgZXJyb3Jfc2F2ZV9fdG9nZ2xlX3NjOiA1LFxyXG4gIGVycm9yX3NhdmVfY2hhbmdlX3NjOiA2LFxyXG4gIGVycm9yX3NhdmVfY3RtOiA3LFxyXG4gIGVycm9yX3NhdmVfYXV0b3NhdmU6IDgsXHJcbiAgZXJyb3Jfc2F2ZV9uYW1pbmc6IDksXHJcbiAgZXJyb3Jfc2F2ZV9ub3RpZnk6IDEwLFxyXG4gIGVycm9yX3NhdmVfZG93bmxvYWQ6IDExLFxyXG4gIGVycm9yX3NhdmVfYm1pY29uOiAxMixcclxuICBlcnJvcl9jbGVhbl9oaXN0b3J5OiAxMyxcclxuICBlcnJvcl9hZGRfbWFya2VyOiAxNCxcclxuICBlcnJvcl9yZW1vdmVfbWFya2VyOiAxNSxcclxuICBlcnJvcl9zYXZlX2VudHJ5OiAxNixcclxuICBlcnJvcl91cGRhdGVfZW50cnk6IDE3LFxyXG4gIGVycm9yX2RlbF9lbnRyeTogMTgsXHJcbiAgZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb25zdGFydDogMTksXHJcbiAgZXJyb3JfZW1wdHlfc3luY2VkX3N0b3JhZ2Vfb251cGRhdGU6IDIwLFxyXG4gIGVycm9yX2VtcHR5X2xvY2FsX3N0b3JhZ2Vfb25zdGFydDogMjEsXHJcbiAgZXJyb3JfaW1wb3J0X2VtcHR5OiAyMixcclxuICBlcnJvcl9pbXBvcnRfaGlzdG9yeTogMjMsXHJcbiAgZXJyb3JfaW1wb3J0X3NldHRpbmdzOiAyNCxcclxuICBlcnJvcl9pbXBvcnRfb3V0ZGF0ZWQ6IDI1LFxyXG4gIGVycm9yX2ltcG9ydF9oaXN0b3J5X25vdF9mb3VuZDogMjYsXHJcbiAgZXJyb3JfaW1wb3J0X3NldHRpbmdzX25vdF9mb3VuZDogMjcsXHJcbiAgZXJyb3JfbmFtaW5nOiAyOCxcclxuICBlcnJvcl9zdG9yYWdlX21pZ3JhdGlvbjogMjksXHJcbiAgZXJyb3JfZW1wdHlfbG9jYWxfc3RvcmFnZV9vbnVwZGF0ZTogMzAsXHJcbiAgZXJyb3JfdG9nZ2xlX3N5bmM6IDMxLFxyXG4gIGVycm9yX3NhdmVfcHJpdjogMzIsXHJcbiAgbm90ZV9yZXN0b3JhdGlvbl93YXJuaW5nXzE6IDMzLFxyXG4gIG5vdGVfcmVzdG9yYXRpb25fd2FybmluZ18yOiAzNCxcclxuICBlcnJvcl9zYXZlX2NoYW5nZV9hdXRvbm90ZTogMzUsXHJcbiAgZXJyb3Jfc2F2ZV9tYXJrX21ldGhvZDogMzYsXHJcbiAganNfaW5qZWN0aW9uX2ZhaWx1cmU6IDM3LFxyXG4gIGNzc19pbmplY3Rpb25fZmFpbHVyZTogMzgsXHJcblxyXG4gIGdldEtleUJ5VmFsdWUodmFsKSB7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcykge1xyXG4gICAgICBpZiAodGhpc1trZXldID09IHZhbCkge1xyXG4gICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcbn1cclxuIiwiY29uc3QgX0NPUFkgPSBmdW5jdGlvbihzcmMpIHtcclxuICBjb25zdCB0YXJnZXQgPSBBcnJheS5pc0FycmF5KHNyYykgPyBbXSA6IHt9O1xyXG4gIGxldCB2YWw7XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzcmMpIHtcclxuICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgdmFsID0gc3JjW3Byb3BdO1xyXG4gICAgICBpZiAodmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gX0NPUFkodmFsKTtcclxuICAgICAgfSBlbHNlXHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgeyBfQ09QWSB9XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfRE9NTU9EVUxFIGV4dGVuZHMgX01PRFVMRSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgb2JqLl9ib3VuZCA9IHt9O1xyXG4gICAgb2JqLl9leHRyYUJvdW5kID0gW107XHJcblxyXG4gICAgc3VwZXIob2JqKVxyXG5cclxuICAgIHRoaXMuYWRkTGlzdGVuZXJzTWFudWFsbHkgfHwgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICF0aGlzLmF1dG9QYXVzZSB8fCB0aGlzLnNldEF1dG9QYXVzZSgpO1xyXG4gIH1cclxuICBnZW5lcmFsSGFuZGxlcihzdWJNYXAsIHR5cGUsIGUpIHtcclxuICAgIGxldCBlbCA9IGUudGFyZ2V0LFxyXG4gICAgICAgIHNlbGVjdG9yLCBfc2VsLCBtZXRoLCBmLCBpc0lkLCBpc0NsYXNzLCBpc0RvYztcclxuXHJcbiAgICBmb3IgKHNlbGVjdG9yIGluIHN1Yk1hcCkge1xyXG4gICAgICBmID0gc2VsZWN0b3JbMF07XHJcbiAgICAgIF9zZWwgPSBzZWxlY3RvcjtcclxuICAgICAgaXNJZCA9IGYgPT09ICcjJztcclxuICAgICAgaXNDbGFzcyA9IGYgPT09ICcuJztcclxuICAgICAgaXNEb2MgPSBmID09PSAnKic7XHJcblxyXG4gICAgICBpZiAoaXNJZCB8fCBpc0NsYXNzKSBzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cigxKTtcclxuXHJcbiAgICAgIGlmIChpc0RvYyB8fFxyXG4gICAgICAgICAgaXNDbGFzcyAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoc2VsZWN0b3IpIHx8XHJcbiAgICAgICAgICBpc0lkICYmIGVsLmlkID09PSBzZWxlY3RvciB8fFxyXG4gICAgICAgICAgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gc2VsZWN0b3JcclxuICAgICAgKSB7XHJcblxyXG4gICAgICAgIG1ldGggPSBzdWJNYXBbX3NlbF07XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgbWV0aCA9PT0gJ2Z1bmN0aW9uJykgbWV0aChlLCBlbCk7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpc1ttZXRoXSkgdGhpc1ttZXRoXShlLCBlbCk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldEF1dG9QYXVzZSgpIHtcclxuICAgIHRoaXMub24oJ3RvZ2dsZWQ6YWRkb24nLCBvbiA9PiB7XHJcbiAgICAgIGlmIChvbikgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVyKHR5cGUsIG1ldGgsIGVsKSB7XHJcbiAgICBlbCA9IGVsIHx8IHRoaXMuZWw7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gdHlwZW9mIG1ldGggPT09ICdmdW5jdGlvbicgPyBtZXRoIDogdGhpc1ttZXRoXTtcclxuXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuXHJcbiAgICBpZiAoZWwgPT09IHRoaXMuZWwpIHtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2V4dHJhQm91bmQucHVzaChbZWwsIHR5cGUsIGhhbmRsZXJdKTtcclxuICAgIH1cclxuICB9XHJcbiAgYWRkTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLFxyXG4gICAgICAgIGRvbUV2ZW50cywgZWwsIHN1Yk1hcCwgdHlwZSwgaGFuZGxlcjtcclxuXHJcbiAgICBpZiAoIWV2ZW50cyB8fCAhKGRvbUV2ZW50cyA9IGV2ZW50cy5ET00pIHx8ICEoZWwgPSB0aGlzLmVsKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGZvciAodHlwZSBpbiBkb21FdmVudHMpIHtcclxuICAgICAgc3ViTWFwID0gZG9tRXZlbnRzW3R5cGVdO1xyXG4gICAgICBoYW5kbGVyID0gdGhpcy5wcm94eSh0aGlzLCB0aGlzLmdlbmVyYWxIYW5kbGVyLCBzdWJNYXAsIHR5cGUpO1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgaWYgKCF0aGlzLl9ib3VuZFt0eXBlXSkgdGhpcy5fYm91bmRbdHlwZV0gPSBbXTtcclxuICAgICAgdGhpcy5fYm91bmRbdHlwZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVtb3ZlTGlzdGVuZXJzKCkge1xyXG4gICAgbGV0IHR5cGUsIF9ib3VuZCwgbDtcclxuXHJcbiAgICBmb3IgKHR5cGUgaW4gdGhpcy5fYm91bmQpIHtcclxuICAgICAgX2JvdW5kID0gdGhpcy5fYm91bmRbdHlwZV07XHJcbiAgICAgIGwgPSBfYm91bmQubGVuZ3RoO1xyXG4gICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIF9ib3VuZFtsXSwgZmFsc2UpO1xyXG4gICAgICAgIF9ib3VuZC5zcGxpY2UobCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgX2V4dHJhID0gdGhpcy5fZXh0cmFCb3VuZCwgaSA9IDAsIHNldDtcclxuICAgIGwgPSBfZXh0cmEubGVuZ3RoO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIHNldCA9IF9leHRyYVtpXTtcclxuICAgICAgc2V0WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoc2V0WzFdLCBzZXRbMl0sIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuY29uc3QgX0VSUk9SVFJBQ0tFUiA9IG5ldyBfTU9EVUxFKHtcclxuICBhdXRvaW5pdCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yID0+IHtcclxuICAgICAgY29uc3QgZmlsZSA9IGVycm9yLmZpbGVuYW1lLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICAgIGlmIChbJ3NpZGViYXIud3AuanMnLCAndGJiLW1lbnUud3AuanMnLCAnb3B0aW9ucy53cC5qcycsICdhZGRvbi1wYWdlLndwLmpzJ10uaW5jbHVkZXMoZmlsZSkpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOmJyb3dzZXItY29uc29sZScsIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICBsb2NhdGlvbjogZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKS5zcGxpdCgnLicpLnNoaWZ0KCkgKyAnOicgKyBlcnJvci5saW5lbm8gKyAnOicgKyBlcnJvci5jb2xubyxcclxuICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfRVJST1JUUkFDS0VSO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcbiAgZm9yICh2YXIgaSBpbiBvYmoyKVxyXG4gICAgaWYgKCFvYmoxW2ldKSBvYmoxW2ldID0gb2JqMltpXTtcclxuXHJcbiAgcmV0dXJuIG9iajE7XHJcbn1cclxuIiwiY29uc3QgX0dFVF9BQ1RJVkVfVEFCID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIHJldHVybiBicm93c2VyLnRhYnMucXVlcnkoeyBjdXJyZW50V2luZG93OiB0cnVlLCBhY3RpdmU6IHRydWUgfSkudGhlbih0YWJzID0+IHRhYnNbMF0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBfR0VUX0FDVElWRV9UQUIgfVxyXG4iLCJjb25zdCBfSEFTSExFU1MgPSBmdW5jdGlvbih1cmwpIHtcclxuICBjb25zdCBoID0gdXJsLmxhc3RJbmRleE9mKCcjJyk7XHJcbiAgaWYgKGggPT09IC0xKSByZXR1cm4gdXJsO1xyXG4gIGVsc2UgcmV0dXJuIHVybC5zdWJzdHIoMCwgaCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9IQVNITEVTUyB9XHJcbiIsIi8qXHJcbiogVHJhbnNsYXRlcyBhIEhUTWwgcGFnZSBpbiB0aGUgd2ViIGwxMG4gc3R5bGUgZnJvbSB0aGUgQWRkLW9uIFNESyB3aXRoIFdlYkV4dGVuc2lvbnMgc3RyaW5ncy5cclxuKiBNb2RpZmllZCBieSB1bmRlcmZseWluZ2JpcmNoZXNcclxuKlxyXG4qIEBhdXRob3IgTWFydGluIEdpZ2VyXHJcbiogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZnJlYWt0ZWNobmlrLzRhNzJiYzA3MTFkOWJjODJjZjNiMDc1YmNjMjkyOTUzfVxyXG4qIEBsaWNlbnNlIE1QTC0yLjBcclxuKi9cclxuZnVuY3Rpb24gdHJhbnNsYXRlRG9jdW1lbnQoKSB7XHJcbiAgbGV0IGVsLCBkYXRhLCBkYXRhc2V0O1xyXG4gIC8vIFNldCB0aGUgbGFuZ3VhZ2UgYXR0cmlidXRlIG9mIHRoZSBkb2N1bWVudC5cclxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdsYW5nJywgYnJvd3Nlci5pMThuLmdldFVJTGFuZ3VhZ2UoKS5yZXBsYWNlKCdfJywgJy0nKSk7XHJcbiAgLy8gR2V0IGFsbCBlbGVtZW50cyB0aGF0IGFyZSBtYXJrZWQgYXMgYmVpbmcgdHJhbnNsYXRlYWJsZS5cclxuICBjb25zdCB0ZXh0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1pZF0nKTtcclxuICBjb25zdCBhdHRyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1hdHRyXScpO1xyXG5cclxuICBmb3IoZWwgb2YgdGV4dEVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuICAgIGNvbnN0IGwxMG5JZCA9IGRhdGFzZXQubDEwbklkO1xyXG5cclxuICAgIGlmIChsMTBuSWQpIHtcclxuICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5JZCk7XHJcblxyXG4gICAgICBpZihkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gZGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmb3IoZWwgb2YgYXR0ckVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuXHJcbiAgICBbJ1RpdGxlJywgJ1BsYWNlaG9sZGVyJ10uZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgY29uc3QgbDEwbkF0dHIgPSBkYXRhc2V0WydsMTBuJyArIGF0dHJdO1xyXG5cclxuICAgICAgaWYgKGwxMG5BdHRyKSB7XHJcbiAgICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5BdHRyKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ci50b0xvd2VyQ2FzZSgpLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHRyYW5zbGF0ZURvY3VtZW50KCksIHtcclxuICAgIGNhcHR1cmU6IGZhbHNlLFxyXG4gICAgcGFzc2l2ZTogdHJ1ZSxcclxuICAgIG9uY2U6IHRydWVcclxuICB9KTtcclxufVxyXG4iLCJsZXQgdG9waWNzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gIG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICBpZiAoIXRvcGljc1tldmVudF0pIHRvcGljc1tldmVudF0gPSBbXTtcclxuXHJcbiAgICB0b3BpY3NbZXZlbnRdLnB1c2goaGFuZGxlcik7XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnRzLCAuLi5hcmdzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBsZXQgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoLCB0b3BpYztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0b3BpYyA9IHRvcGljc1tldmVudHNbaV1dO1xyXG5cclxuICAgICAgaWYgKHRvcGljKVxyXG4gICAgICAgIHRvcGljLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXF1ZXN0KGV2ZW50LCAuLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHsgZXY6IGV2ZW50LCBhcmdzOiBhcmdzLCB3YWl0OiB0cnVlIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICB9XHJcbiAgcHJveHkoY29udGV4dCwgZnVuYywgLi4uYXJnczEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzMikge1xyXG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzMS5jb25jYXQoYXJnczIpKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBfTUVESUFUT1IgZnJvbSAnLi9tZWRpYXRvcidcclxuXHJcbmV4cG9ydCBjbGFzcyBfTU9EVUxFIGV4dGVuZHMgX01FRElBVE9SIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcigpXHJcblxyXG4gICAgZm9yIChvIGluIG9iaikgdGhpc1tvXSA9IG9ialtvXTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZW52RXZlbnRzLCBvLCBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmIChldmVudHMgJiYgKGVudkV2ZW50cyA9IGV2ZW50cy5FTlYpKSB7XHJcbiAgICAgIGZvciAoZSBpbiBlbnZFdmVudHMpIHtcclxuICAgICAgICBoYW5kbGVyID0gZW52RXZlbnRzW2VdO1xyXG4gICAgICAgIGlmICh0aGlzW2hhbmRsZXJdKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXNbaGFuZGxlcl0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgIXRoaXMuYXV0b2luaXQgfHwgdGhpcy5hdXRvaW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX1BPUlQgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdwcml2aWxlZ2VkJyB8fCB0eXBlID09PSAnYmFja2dyb3VuZCcpIHRoaXMuaW5pdFBvcnRpbmcoKTtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cygpO1xyXG4gIH1cclxuICBleHRlbmQoZXZlbnRzKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyUG9ydEV2ZW50cyhldmVudHMpO1xyXG4gIH1cclxuICByZWdpc3RlclBvcnRFdmVudHMoZXZlbnRzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMgfHwgdGhpcy5ldmVudHM7XHJcbiAgICBsZXQgb25lT2ZmRXZlbnRzLCBjb25uZWN0aW9uQmFzZWRFdmVudHM7XHJcblxyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBvbmVPZmZFdmVudHMgPSBldmVudHMuT05FT0ZGO1xyXG4gICAgICBpZiAob25lT2ZmRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiBvbmVPZmZFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5zZW5kTWVzc2FnZSwgZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbm5lY3Rpb25CYXNlZEV2ZW50cyA9IGV2ZW50cy5DT05ORUNUSU9OO1xyXG4gICAgICBpZiAoY29ubmVjdGlvbkJhc2VkRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZiBvZiBjb25uZWN0aW9uQmFzZWRFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGYsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhc3NNZXNzYWdlKHJlcSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHJlcS5hcmdzID0gcmVxLmFyZ3MgfHwgW107XHJcbiAgICBsZXQgYXJncyA9IFtdLmNvbmNhdChyZXEuZXYsIHJlcS5hcmdzKTtcclxuICAgIGlmICghc2VuZGVyIHx8ICFzZW5kZXIubmFtZSkgYXJncyA9IGFyZ3MuY29uY2F0KHNlbmRlciwgc2VuZFJlc3BvbnNlKTtcclxuICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIGlmIChyZXEud2FpdCkgcmV0dXJuIHRydWU7IC8vIHRoaXMgd2lsbCBrZWVwIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiB0byB0aGUgb3RoZXIgZW5kIHVudGlsIGBzZW5kUmVzcG9uc2VgIGlzIGNhbGxlZFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzZW5kTWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG4gICAgbGV0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0eXBlID09PSAnY29udGVudCcpIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICBjb25zdCBsYXN0QXJnID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBsZXQgdGFiO1xyXG4gICAgICBpZiAobGFzdEFyZyAhPT0gdW5kZWZpbmVkICYmICh0YWIgPSBsYXN0QXJnLnRhYikpIHtcclxuICAgICAgICBpZiAodGFiID09PSAnYWN0aXZlJykge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlIH0pLnRoZW4odGFicyA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICAgIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIG1zZywgeyBmcmFtZUlkOiBsYXN0QXJnLmZyYW1lSWQgfHwgMCB9KS5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKGxhc3RBcmcudGFiLCBtc2csIHsgZnJhbWVJZDogbGFzdEFyZy5mcmFtZUlkIHx8IDAgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcbiAgaW5pdFBvcnRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMucG9zdHBvbmVDb25uZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycyh0aGlzLnByb3h5KHRoaXMsIHRoaXMuY29ubmVjdCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25uZWN0KCkge1xyXG4gICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IHRoaXMubmFtZSB9KTtcclxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHRoaXMucG9ydCA9IG51bGwpO1xyXG4gIH1cclxuICBhZGRDb25uZWN0aW9uTGlzdGVuZXJzKGNiKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgICAgIWNiIHx8IGNiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vbW9kdWxlJ1xyXG5pbXBvcnQgX0RFRkFVTFRfU1RPUkFHRSBmcm9tICcuLi9kYXRhL2RlZmF1bHQtc3RvcmFnZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBfU1RPUkUgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmFyZWFfc2V0dGluZ3MgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuc2V0dGluZ3MgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgdGhpcy5hcmVhX2hpc3RvcnkgPSBfREVGQVVMVF9TVE9SQUdFLnN5bmMuaGlzdG9yeSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB0aGlzLmFyZWFfcGFnZW5vdGVzID0gX0RFRkFVTFRfU1RPUkFHRS5zeW5jLnBhZ2Vub3RlcyA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnN5bmMpIHtcclxuICAgICAgICB0aGlzLnNldEFyZWFzKHN0b3JhZ2Uuc3luYyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0QXJlYXMoc3luYykge1xyXG4gICAgZm9yIChsZXQgYXJlYSBpbiBzeW5jKSB7XHJcbiAgICAgIHRoaXNbJ2FyZWFfJyArIGFyZWFdID0gc3luY1thcmVhXSA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblRvZ2dsZWRTeW5jKCkge1xyXG4gICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB0aGlzLmVtaXQoJ3NldC1hcmVhcy1hZnRlci1zeW5jLWNoYW5nZScpKTtcclxuICB9XHJcblxyXG4gIGdldChmaWVsZCA9ICdzdG9yYWdlJykge1xyXG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6aW5nKSB7XHJcbiAgICAgIHJldHVybiAobmV3IFByb21pc2UociA9PiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiByKHRoaXMuZ2V0KGZpZWxkKSksIDEwKSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWV0aCA9IHRoaXNbJ19nZXRfJyArIGZpZWxkXTtcclxuICAgIGlmICghbWV0aCkgdGhyb3coJ2ZpZWxkICcgKyBmaWVsZCArICcgZG9lc25cXCd0IGV4aXN0Jyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdGhpc1snX2dldF8nICsgZmllbGRdKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpO1xyXG4gIH1cclxuXHJcbiAgX2dldF9zdG9yYWdlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIFsndmVyc2lvbicsICdsb2dzJ10uZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VbZmllbGRdID0gbG9jYWxTdG9yYWdlW2ZpZWxkXSB8fCBzeW5jZWRTdG9yYWdlW2ZpZWxkXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5hcmVhX3NldHRpbmdzID09PSAnc3luYycpIGxvY2FsU3RvcmFnZS5zZXR0aW5ncyA9IHN5bmNlZFN0b3JhZ2Uuc2V0dGluZ3M7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldF9oaXN0b3J5KCkudGhlbihoaXN0b3J5ID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5oaXN0b3J5ID0gaGlzdG9yeTtcclxuICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfbG9jYWxfc3RvcmFnZSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfc3luY2VkX3N0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCk7XHJcbiAgfVxyXG4gIF9nZXRfaGlzdG9yeSgpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN5bmNlZFN0b3JhZ2UgPT4ge1xyXG4gICAgICBjb25zdCBzeW5jZWRIaXN0b3J5ID0gc3luY2VkU3RvcmFnZS5oaXN0b3J5O1xyXG5cclxuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoKS50aGVuKGxvY2FsU3RvcmFnZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxIaXN0b3J5ID0gbG9jYWxTdG9yYWdlLmhpc3Rvcnk7XHJcbiAgICAgICAgaWYgKCFzeW5jZWRIaXN0b3J5KSByZXR1cm4gbG9jYWxIaXN0b3J5O1xyXG4gICAgICAgIGlmICghbG9jYWxIaXN0b3J5KSByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuXHJcbiAgICAgICAgLy9zeW5jZWRIaXN0b3J5Lm9yZGVyID0gc3luY2VkSGlzdG9yeS5vcmRlci5jb25jYXQobG9jYWxIaXN0b3J5Lm9yZGVyKTtcclxuICAgICAgICBmb3IgKGxldCBlIGluIGxvY2FsSGlzdG9yeS5lbnRyaWVzKSBzeW5jZWRIaXN0b3J5LmVudHJpZXNbZV0gPSBsb2NhbEhpc3RvcnkuZW50cmllc1tlXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfc2V0dGluZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MgfHwgX0RFRkFVTFRfU1RPUkFHRS5zZXR0aW5ncyk7XHJcbiAgfVxyXG4gIF9nZXRfbG9ncygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLmxvZ3MpIHJldHVybiBbXTtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5sb2dzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9nZXRfdmVyc2lvbigpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCAhbG9jYWxTdG9yYWdlLnZlcnNpb24pIHtcclxuICAgICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHN5bmNlZFN0b3JhZ2UudmVyc2lvbiB8fCAnJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS52ZXJzaW9uO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=