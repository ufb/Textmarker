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
/******/ 	return __webpack_require__(__webpack_require__.s = "./content/page-injections/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./content/page-injections/js/_store.js":
/*!**********************************************!*\
  !*** ./content/page-injections/js/_store.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(/*! ./../../utils */ "./content/utils.js");

exports.default = new _utils._MODULE({
  events: {
    ENV: {
      'toggled:sync': 'setAreas'
    }
  },
  initialized: false,
  area_settings: 'sync',
  area_history: 'sync',
  area_entry: 'sync',

  pdf: false,
  iframe: false,
  name: undefined,
  isNew: true,
  entry: null,
  tmid: '',

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
  _get_bmicon: function _get_bmicon() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return true;
      return storage.settings.misc.bmicon;
    });
  },
  _get_noteicon: function _get_noteicon() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return true;
      return storage.settings.misc.noteicon;
    });
  },
  _get_noteonclick: function _get_noteonclick() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return true;
      return storage.settings.misc.noteonclick;
    });
  },
  _get_tmuipos: function _get_tmuipos() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return true;
      return storage.settings.misc.tmuipos;
    });
  },
  _get_autosave: function _get_autosave() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return false;
      return storage.settings.history.autosave;
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
  },
  _get_mode: function _get_mode() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings || storage.settings.addon.active) return true;
      return false;
    });
  },
  _get_naming: function _get_naming() {
    return browser.storage[this.area_settings].get().then(function (storage) {
      if (!storage || !storage.settings) return 'custom';
      return storage.settings.history.naming;
    });
  }
});

/***/ }),

/***/ "./content/page-injections/js/bootstrap.js":
/*!*************************************************!*\
  !*** ./content/page-injections/js/bootstrap.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./../../utils */ "./content/utils.js");

var _store = __webpack_require__(/*! ./_store */ "./content/page-injections/js/_store.js");

var _store2 = _interopRequireDefault(_store);

var _page = __webpack_require__(/*! ./modules/page */ "./content/page-injections/js/modules/page.js");

var _page2 = _interopRequireDefault(_page);

var _contextmenu = __webpack_require__(/*! ./modules/contextmenu */ "./content/page-injections/js/modules/contextmenu.js");

var _contextmenu2 = _interopRequireDefault(_contextmenu);

var _marker = __webpack_require__(/*! ./modules/marker */ "./content/page-injections/js/modules/marker.js");

var _marker2 = _interopRequireDefault(_marker);

var _restorer = __webpack_require__(/*! ./modules/restorer */ "./content/page-injections/js/modules/restorer.js");

var _restorer2 = _interopRequireDefault(_restorer);

var _notes = __webpack_require__(/*! ./modules/notes */ "./content/page-injections/js/modules/notes.js");

var _notes2 = _interopRequireDefault(_notes);

var _tmui = __webpack_require__(/*! ./modules/tmui */ "./content/page-injections/js/modules/tmui.js");

var _tmui2 = _interopRequireDefault(_tmui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _utils._MODULE({
  events: {
    ENV: {
      'started:app': 'autoinit',
      'toggled:addon': 'power'
    }
  },

  bootstrapped: false,

  autoinit: function autoinit() {
    var _this = this;

    browser.storage.sync.get().then(function (storage) {
      if (storage && storage.settings && storage.history && storage.settings.addon.active) {
        _this.power(true);
      }
    });
  },
  power: function power(on) {
    if (!on || this.bootstrapped) return false;

    (0, _page2.default)();
    (0, _contextmenu2.default)();
    (0, _restorer2.default)();
    (0, _marker2.default)();
    (0, _notes2.default)();
    (0, _tmui2.default)();

    this.bootstrapped = true;
  }
});

/***/ }),

/***/ "./content/page-injections/js/index.js":
/*!*********************************************!*\
  !*** ./content/page-injections/js/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./../sass/main.scss */ "./content/page-injections/sass/main.scss");

var _utils = __webpack_require__(/*! ./../../utils */ "./content/utils.js");

var _utils2 = _interopRequireDefault(_utils);

__webpack_require__(/*! ./port */ "./content/page-injections/js/port.js");

__webpack_require__(/*! ./_store */ "./content/page-injections/js/_store.js");

__webpack_require__(/*! ./bootstrap */ "./content/page-injections/js/bootstrap.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./content/page-injections/js/modules/bookmark.js":
/*!********************************************************!*\
  !*** ./content/page-injections/js/modules/bookmark.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _store = __webpack_require__(/*! ./../_store */ "./content/page-injections/js/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _BOOKMARK = function () {
    function _BOOKMARK() {
        _classCallCheck(this, _BOOKMARK);

        this.mark = null;
        this.anchor = null;
    }

    _createClass(_BOOKMARK, [{
        key: 'set',
        value: function set(mark) {
            mark = mark || this.mark;

            var wrappers = mark.wrappers,
                w = wrappers.length,
                anchor = wrappers[0];

            mark.keyData.bookmark = true;
            anchor.id = 'textmarker-bookmark-anchor';

            while (w--) {
                wrappers[w].classList.add('textmarker-bookmark');
            }this.mark = mark;
            this.anchor = anchor;

            return this;
        }
    }, {
        key: 'remove',
        value: function remove() {
            var mark = this.mark,
                anchor = this.anchor,
                wrappers = mark.wrappers,
                w = wrappers.length;

            anchor.id = '';
            mark.keyData.bookmark = false;

            while (w--) {
                wrappers[w].classList.remove('textmarker-bookmark');
            }
        }
    }, {
        key: 'scrollIntoView',
        value: function scrollIntoView(bm) {
            if (bm || (bm = window.document.getElementById('textmarker-bookmark-anchor'))) bm.scrollIntoView();
        }
    }]);

    return _BOOKMARK;
}();

exports.default = _BOOKMARK;

/***/ }),

/***/ "./content/page-injections/js/modules/contextmenu.js":
/*!***********************************************************!*\
  !*** ./content/page-injections/js/modules/contextmenu.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new _utils._DOMMODULE({
    events: {
      ENV: {
        'toggled:addon': 'activate'
      }
    },
    active: false,

    autoinit: function autoinit() {
      this.activate(true);
    },
    activate: function activate(on) {
      if (on && !this.active) {
        this.registerHandler();
        this.active = true;
      } else if (!on && this.active) {
        this.removeListeners();
        this.active = false;
      }
    },
    registerHandler: function registerHandler() {
      this.addListener('mousedown', function (e) {
        if (e.button === 2) {
          if (e.target.classList.contains('textmarker-highlight')) {
            _store2.default.tmid = e.target.getAttribute('data-tm-id');
          } else _store2.default.tmid = '';
        }
      }, window.document);
    }
  });
};

var _utils = __webpack_require__(/*! ./../../../utils */ "./content/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/page-injections/js/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./content/page-injections/js/modules/mark-item.js":
/*!*********************************************************!*\
  !*** ./content/page-injections/js/modules/mark-item.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _store = __webpack_require__(/*! ./../_store */ "./content/page-injections/js/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _MARK = function () {
		function _MARK(marker, key, preSettings) {
				_classCallCheck(this, _MARK);

				var selection = void 0,
				    defaults = void 0;

				this.marker = marker;
				selection = this.selection = marker.selection;

				defaults = {
						style: '',
						bookmark: false,
						conds: null,
						text: selection.text,
						note: ''
				};
				for (var d in defaults) {
						if (!preSettings.hasOwnProperty(d)) {
								preSettings[d] = defaults[d];
						}
				}
				preSettings.id = preSettings.id || ++marker.idcount;
				this.id = preSettings.id;
				this.simple = selection.simple;

				var range = this.range = selection.range;

				this.startOffset = range.startOffset;
				this.endOffset = range.endOffset;

				this.wrappers = null;
				this.containers = [];

				this.anchorNodePosition = null;
				this.focusNodePosition = null;

				this.keyData = {
						id: preSettings.id,
						key: key,
						style: preSettings.style,
						conds: preSettings.conds,
						text: preSettings.text,
						bookmark: preSettings.bookmark,
						note: preSettings.note
				};
		}

		_createClass(_MARK, [{
				key: 'create',
				value: function create(range) {
						range = range || this.range;
						var selection = this.selection,
						    style = this.keyData.style,
						    nodes = selection.nodes,
						    n = nodes.length,
						    wrappers = this.wrappers = this.wrappers || this.createWrappers(style, n),
						    i = 0,
						    lastIndex = n - 1,
						    node = void 0;

						for (; i < n; i++) {
								node = nodes[i];
								range.selectNodeContents(node);
								if (!i) range.setStart(node, this.startOffset);

								if (i === lastIndex) range.setEnd(node, this.endOffset);

								range.surroundContents(wrappers[i]);
								this.containers.push(wrappers[i].parentNode);

								node.parentNode.normalize();
						}

						this.definePosition(lastIndex);

						if (this.keyData.bookmark) this.marker.setBookmark(this, false);

						if (!this.keyData.conds) this.describe();

						this.registerClickListeners();

						return this;
				}
		}, {
				key: 'registerClickListeners',
				value: function registerClickListeners() {
						var _this = this;

						var wrappers = this.wrappers;
						var _iteratorNormalCompletion = true;
						var _didIteratorError = false;
						var _iteratorError = undefined;

						try {
								for (var _iterator = wrappers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
										var wrapper = _step.value;

										wrapper.addEventListener('click', function (e) {
												_store2.default.tmid = e.target.getAttribute('data-tm-id');
												_this.marker.emit('clicked:mark', {
														bookmark: !!_this.keyData.bookmark,
														note: !!_this.keyData.note
												});
										}, false);
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
		}, {
				key: 'definePosition',
				value: function definePosition(n, includingOffsets) {
						var wrappers = this.wrappers;
						n = typeof n === 'number' ? n : wrappers.length - 1;
						var firstWrapper = wrappers[0],
						    lastWrapper = wrappers[n];

						this.anchorNodePosition = this.whichChild(firstWrapper.parentNode, firstWrapper, true) - 1;
						this.focusNodePosition = this.whichChild(lastWrapper.parentNode, lastWrapper, true);

						if (!lastWrapper.previousSibling || lastWrapper.previousSibling.nodeType === 3) this.focusNodePosition -= 1;

						if (this.anchorNodePosition < 0) this.anchorNodePosition = 0;
						if (this.focusNodePosition < 0) this.focusNodePosition = 0;

						if (includingOffsets) {
								this.startOffset = firstWrapper.previousSibling && firstWrapper.previousSibling.data ? firstWrapper.previousSibling.data.length : 0;
								this.endOffset = this.simple ? this.startOffset + this.keyData.text.length : this.endOffset;
						}
						return this;
				}
		}, {
				key: 'resume',
				value: function resume() {
						this.definePosition(undefined, true).describe();

						return this;
				}
		}, {
				key: 'undo',
				value: function undo() {
						var containers = this.containers,
						    wrappers = this.wrappers,
						    w = wrappers.length,
						    container = void 0,
						    wrapper = void 0;

						while (w--) {
								container = containers[w];
								wrapper = wrappers[w];
								container.replaceChild(wrapper.firstChild, wrapper);
								container.normalize();
						}
						return this;
				}
		}, {
				key: 'redo',
				value: function redo() {
						var containers = this.containers,
						    selection = this.selection.self,
						    range = this.range;

						range.setStart(containers[0].childNodes[this.anchorNodePosition], this.startOffset);
						range.setEnd(containers[containers.length - 1].childNodes[this.focusNodePosition], this.endOffset);

						selection.removeAllRanges();
						selection.addRange(range);

						this.selection.collectNodes();
						selection.collapseToStart();

						return this.create();
				}
		}, {
				key: 'whichChild',
				value: function whichChild(parent, child, includingTextNodes) {
						if (!parent || !child) {
								return null;
						}
						var children = includingTextNodes || child.nodeType === 3 ? parent.childNodes : parent.children,
						    c = children.length,
						    i = 0;

						for (; i < c; i++) {
								if (children[i] === child) return i;
						}
				}
		}, {
				key: 'createWrappers',
				value: function createWrappers(style, number) {
						var wrappers = [],
						    hasNote = this.keyData.note,
						    i = 0,
						    wrapper = void 0;

						for (; i < number; i++) {
								wrapper = window.document.createElement('span');
								wrapper.classList.add('textmarker-highlight');
								wrapper.setAttribute('style', style);
								wrapper.setAttribute('data-tm-id', this.id + '_' + i);
								if (hasNote) wrapper.setAttribute('title', browser.i18n.getMessage('toggle_note'));
								//wrapper.setAttribute('contextmenu', 'textmarker-ctm');
								wrappers.push(wrapper);
						}
						return wrappers;
				}
		}, {
				key: 'describe',
				value: function describe() {
						if (_store2.default.pdf) return this._describe_PDF();

						this._describe();
				}
		}, {
				key: '_describe',
				value: function _describe() {
						var range = this.range,
						    selection = this.selection,
						    start = range.startContainer,
						    end = range.endContainer,
						    singleNode = this.simple,

						//parent = this.containers ? this.containers[0] : start.parentNode,
						parent = this.wrappers[0].parentNode,
						    parentIsTM = parent.hasAttribute('data-tm-id'),
						    grampa = parent.parentNode,
						    grandgrampa = grampa.parentNode || 0,
						    fTNP = this.anchorNodePosition;

						this.keyData.conds = {
								o: this.startOffset,
								n1: parentIsTM ? 'TM' : parent.nodeName,
								p1: fTNP,
								n2: grampa.nodeName,
								p2: this.whichChild(grampa, parent),
								p3: grandgrampa ? this.whichChild(grandgrampa, grampa) : undefined,
								p4: grandgrampa && grandgrampa.parentNode ? this.whichChild(grandgrampa.parentNode, grandgrampa) : undefined
						};
						return this.keyData.conds;
				}
		}, {
				key: '_describe_PDF',
				value: function _describe_PDF() {
						var M = this,
						    rg = this.range,
						    start = this.wrappers[0],
						    end = this.wrappers[this.wrappers.length - 1],
						    singleNode = this.simple,
						    extremes = singleNode ? [start] : [start, end],
						    startOffset = this.startOffset,
						    endOffset = this.endOffset,
						    nodes = [this.anchorNodePosition, this.focusNodePosition],
						    offsets = [startOffset, endOffset],
						    containers = [],
						    pages = [],
						    parent = void 0,
						    className = void 0,
						    isText = void 0;

						extremes.forEach(function (node, i) {
								parent = node.parentNode;

								if (parent.hasAttribute('data-tm-id')) containers[i] = parent.getAttribute('data-tm-id');else {
										parent = parent.parentNode;
										node = node.parentNode;
										containers[i] = M.whichChild(parent, node, 'DIV');
								}

								while (pages[i] === undefined && parent.parentNode) {
										if ((className = parent.className) && className === 'page') pages[i] = parent.getAttribute('data-page-number') * 1;else parent = parent.parentNode;
								}
								if (pages[i] === undefined) pages[i] = containers[i] = offsets[i] = i * -1;

								if (containers[i] === undefined) containers[i] = i * -1;

								pages[i] = pages[i] || 1;
						});

						this.keyData.conds = {
								pageIntersection: !singleNode && pages[0] !== pages[1],
								offsets: offsets,
								containers: containers,
								nodes: nodes,
								pages: pages
						};

						return this.keyData.conds;
				}
		}]);

		return _MARK;
}();

exports.default = _MARK;

/***/ }),

/***/ "./content/page-injections/js/modules/marker.js":
/*!******************************************************!*\
  !*** ./content/page-injections/js/modules/marker.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  // marker module
  return new _utils._MODULE({
    events: {
      ENV: {
        'set:entry': 'updateID',
        'unset:entry': 'resetID',
        'pressed:marker-key': 'onMarkerKey',
        'pressed:hotkey': 'onHotkey',
        'restored:range': 'recreate',
        'finished:restoration': 'onFinishedRestoration',
        'ctx:b': 'setBookmark',
        'ctx:-b': 'removeBookmark',
        'ctx:d': 'remove',
        'ctx:m': 'onMarkerKey',
        'ctx:n': 'addNote',
        'updated:note': 'autosave',
        'removed:note': 'autosave',
        'sidebar:highlight': 'onMarkerKey',
        'sidebar:delete-highlight': 'remove',
        'sidebar:bookmark': 'setBookmark',
        'sidebar:delete-bookmark': 'removeBookmark',
        'sidebar:note': 'addNote',
        'sidebar:save-changes': 'save',
        'sidebar:undo': 'undo',
        'sidebar:redo': 'redo',
        'sidebar:scroll-to-bookmark': 'scrollToBookmark',
        'scroll-to-bookmark': 'scrollToBookmark'
      }
    },
    selection: null,
    done: [],
    undone: [],
    bookmark: null,
    removedBookmark: null,
    idcount: 0,

    updateID: function updateID() {
      var entry = _store2.default.entry;

      if (entry.idcount) {
        this.idcount = entry.idcount;
      } else {
        var marks = (entry.marks || []).concat(entry.lost || []),
            d = marks.length,
            ids = [];
        if (d) {
          while (d--) {
            ids.push(marks[d].id);
          }
          this.idcount = Math.max.apply(null, ids);
        }
      }
    },
    resetID: function resetID() {
      this.idcount = 0;
    },
    mark: function mark(key, data) {
      this.undone.length = 0;

      return new _markItem2.default(this, key, data).create();
    },
    undo: function undo(noAutosave) {
      var done = this.done;

      if (done.length) {
        var mark = this.done.pop();
        var id = mark.id;

        this.undone.push(mark.undo());

        if (this.bookmark) this.undoBookmark();

        this.emit('removed:mark', id);
      }

      noAutosave || this.autosave();
    },
    redo: function redo(noAutosave) {
      var undone = this.undone;

      if (undone.length) {
        var mark = this.undone.pop();

        this.done.push(mark.redo());

        this.emit('restore:notes', [mark]);
      }

      noAutosave || this.autosave();
    },
    cutOut: function cutOut(i) {
      var marker = this,
          done = this.done,
          l = done.length,
          toBeRemoved = [i],
          indices = [i],
          mark = void 0,
          smallestID = void 0;

      function findIndicesOfAffectedMarks(j) {
        for (var x = j + 1; x < l; x++) {
          mark = done[x];

          if (marker.marksIntersect(done[j], mark)) {
            if (!toBeRemoved.includes(x)) toBeRemoved.push(x);
            indices.push(x);
          }
        }
        indices.sort();
        toBeRemoved.sort();
      }
      while (indices.length) {
        findIndicesOfAffectedMarks(indices.shift());
      }
      smallestID = Math.min.apply(null, toBeRemoved);

      while (toBeRemoved.length) {
        this.done.splice(toBeRemoved.pop(), 1)[0].undo();
        this.undone.pop();
      }

      return smallestID;
    },
    remove: function remove(id) {
      id = id ? id : _store2.default.tmid ? _store2.default.tmid : '';

      if (!id) return this.undo();

      var mark = this.getById(id.split('_')[0]),
          done = this.done,
          l = done.length,
          position = done.indexOf(mark),
          smallestID = void 0,
          i = void 0;

      if (position === l - 1) {
        this.undo();
        this.undone.pop();
      } else {
        if (!this.undone.length) {
          smallestID = this.cutOut(position);

          this.done.forEach(function (mark) {
            if (mark.id > smallestID) mark.resume();
          });

          this.autosave();
        } else {
          i = this.undone.length;

          while (this.undone.length) {
            this.redo(true);
          }smallestID = this.cutOut(position);

          this.done.forEach(function (mark) {
            if (mark.id > smallestID) mark.resume();
          });

          while (i--) {
            this.undo(true);
          }this.autosave();
        }
      }
      this.emit('removed:mark', id[0]);
    },
    save: function save() {
      var _this = this;

      var iframe = _store2.default.iframe;

      _store2.default.get('naming').then(function (naming) {
        if (_store2.default.isNew && naming === 'custom') {
          _this.request('name:entry?').then(function (granted) {
            if (granted) {
              var sub = iframe ? browser.i18n.getMessage('nm_message_iframe') : '';

              _store2.default.name = window.prompt(browser.i18n.getMessage('nm_message', sub));
              if (_store2.default.name) _this.retrieveEntry().then(function (entry) {
                return _this.emit('save:entry?', entry);
              });
            }
          });
        } else {
          if (_store2.default.isNew) {
            var confirmed = true;
            if (iframe) confirmed = window.confirm(browser.i18n.getMessage('nm_message_iframe'));
            if (confirmed) {
              _this.retrieveEntry().then(function (entry) {
                return _this.emit('save:entry?', entry);
              });
            }
          } else {
            _this.retrieveEntry().then(function (entry) {
              return _this.emit('update:entry?', entry);
            });
          }
        }
      });
    },
    autosave: function autosave() {
      var _this2 = this;

      _store2.default.get('autosave').then(function (autosave) {
        if (autosave) _this2.save();else _this2.emit('unsaved-changes');
      });
    },
    store: function store(mark, text, save) {
      this.done.push(mark);
      if (save !== false) this.autosave();
    },
    recreate: function recreate(selection, mark) {
      this.selection = selection;
      this.store(this.mark(mark.key, mark), selection.text, false);
    },
    onFinishedRestoration: function onFinishedRestoration() {
      this.emit('restore:notes', this.done);
      this.sortById();
      this.scrollToBookmark();
    },
    addNote: function addNote(id) {
      this.emit('add:note', this.findMark(id));
    },
    setBookmark: function setBookmark(m, save) {
      var bookmark = this.bookmark,
          mark = this.findMark(m);

      if (!mark) return false;

      if (bookmark) {
        bookmark.remove();
        this.emit('removed:bookmark');
      }

      this.bookmark = new _bookmark2.default().set(mark);

      this.emit('added:bookmark');
      if (save !== false) this.autosave();
    },
    undoBookmark: function undoBookmark() {
      this.bookmark = null;
      this.emit('removed:bookmark');
    },
    removeBookmark: function removeBookmark() {
      var bookmark = this.bookmark;

      if (!bookmark) return false;

      bookmark.remove();
      this.bookmark = null;
      this.removedBookmark = bookmark;
      this.emit('removed:bookmark');
      this.autosave();
    },
    scrollToBookmark: function scrollToBookmark() {
      var bookmark = this.bookmark;

      if (bookmark) bookmark.scrollIntoView();
    },
    getById: function getById(id, pos) {
      var done = this.done,
          d = done.length,
          mark = void 0;

      while (d--) {
        mark = done[d];

        if (mark.keyData.id == id) return pos ? { mark: mark, position: d } : mark;
      }
      return pos ? { mark: null, position: null } : false;
    },
    findMark: function findMark(x) {
      x = x ? x : _store2.default.tmid ? _store2.default.tmid : '';

      var mark = !x ? this.done[this.done.length - 1] : typeof x === 'string' ? this.getById(x.split('_')[0]) : x;
      return mark;
    },
    sortById: function sortById() {
      this.done.sort(function (mark1, mark2) {
        var id1 = mark1.id;
        var id2 = mark2.id;
        if (id1 === id2) return 0;
        return id1 < id2 ? -1 : 1;
      });
    },
    marksIntersect: function marksIntersect(mark1, mark2) {
      var wrappers1 = mark1.wrappers,
          w1 = wrappers1.length,
          id1 = mark1.id,
          wrappers2 = mark2.wrappers,
          id2 = mark2.id,
          w2 = void 0,
          tms = void 0,
          l = void 0;

      while (w1--) {
        w2 = wrappers2.length;
        while (w2--) {
          tms = wrappers1[w1].querySelectorAll('[data-tm-id]');
          l = tms.length;
          while (l--) {
            if (tms[l].getAttribute('data-tm-id')[0] == id2) return true;
          }
        }
      }
      return false;
    },
    onMarkerKey: function onMarkerKey(e, key) {
      var _this3 = this;

      var selection = this.selection = new _selection2.default();

      if (!selection.nodes) return false;

      if (e) {
        if (typeof e === 'string') key = e;else this.preventDefault(e);
      } else {
        key = key || 'm';
      }

      _store2.default.get('markers').then(function (markers) {
        _this3.store(_this3.mark(key, { style: markers[key] }));
      });
    },
    onHotkey: function onHotkey(key) {
      var self = this;
      switch (key) {
        case 'z':
          self.undo();break;
        case 'y':
          self.redo();break;
        case 's':
          self.save();break;
        case 'b':
          self.setBookmark();break;
      }
    },
    preventDefault: function preventDefault(e) {
      if (e && e.preventDefault) {
        e.preventDefault();
        e.stopPropagation();
      }
      return this;
    },
    retrieveEntry: function retrieveEntry() {
      var _this4 = this;

      var entry = _store2.default.entry || {};

      return this.collectMarks().then(function (marks) {
        entry.marks = marks;
        entry.last = new Date().getTime();
        entry.bookmarked = !!_this4.bookmark;
        //entry.url = bookmarked && _STORE.pdf ? this.bookmark.createURL() : window.document.URL;
        entry.title = window.document.title;
        entry.count = entry.marks.length;
        entry.idcount = _this4.idcount;
        if (_store2.default.isNew) {
          entry.name = _store2.default.name;
          entry.first = entry.last;
          entry.url = window.document.URL;
          entry.synced = _store2.default.area_history === 'sync';
        }
        return entry;
      });
    },
    collectMarks: function collectMarks() {
      var _this5 = this;

      return _store2.default.get('history').then(function (history) {
        var marks = [],
            ids = [],
            done = _this5.done,
            oldMarks = _store2.default.isNew ? null : history.entries[_store2.default.name] ? history.entries[_store2.default.name].marks : null,
            l = done.length,
            m = 0,
            kD = void 0;

        for (; m < l; m++) {
          kD = done[m].keyData;
          marks.push(kD);
          ids.push(kD.id);
        }
        if (_store2.default.pdf && oldMarks) {
          m = 0;
          l = oldMarks.length;

          for (; m < l; m++) {
            if (ids.indexOf(oldMarks[m].id) === -1) marks.push(oldMarks[m]);
          }
        }
        return marks;
      });
    }
  });
};

var _utils = __webpack_require__(/*! ./../../../utils */ "./content/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/page-injections/js/_store.js");

var _store2 = _interopRequireDefault(_store);

var _markItem = __webpack_require__(/*! ./mark-item */ "./content/page-injections/js/modules/mark-item.js");

var _markItem2 = _interopRequireDefault(_markItem);

var _bookmark = __webpack_require__(/*! ./bookmark */ "./content/page-injections/js/modules/bookmark.js");

var _bookmark2 = _interopRequireDefault(_bookmark);

var _selection = __webpack_require__(/*! ./selection */ "./content/page-injections/js/modules/selection.js");

var _selection2 = _interopRequireDefault(_selection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./content/page-injections/js/modules/note.js":
/*!****************************************************!*\
  !*** ./content/page-injections/js/modules/note.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (mark) {

  var BODY = window.document.body;

  return new _utils._DOMMODULE({
    events: {
      DOM: {
        click: {
          'tmnotedelete': '_delete',
          'tmnoteminimize': 'hide',
          'textarea': 'bringUpFront'
        },
        keyup: {
          'textarea': 'attemptUpdate'
        }
      }
    },
    addListenersManually: true,
    el: null,
    mark: mark,
    markClickHandler: null,
    text: '',
    visible: false,
    recentlyUpdated: false,

    autoinit: function autoinit() {
      this.createNoteElement();
      this.addListeners();
      this.addMarkListeners();
    },
    createNoteElement: function createNoteElement() {
      var _this = this;

      var note = this.el = document.createElement('tmnote');
      var del = this.del = document.createElement('tmnotedelete');
      var min = this.min = document.createElement('tmnoteminimize');
      var p = this.textElement = document.createElement('textarea');
      var text = this.mark.keyData.note || '';
      var delText = document.createTextNode(String.fromCharCode(10005));
      var minText = document.createTextNode(String.fromCharCode(0x2013));

      p.setAttribute('data-tm-note', true);
      del.appendChild(delText);
      min.appendChild(minText);
      note.appendChild(del);
      note.appendChild(min);
      note.appendChild(p);
      if (text) p.value = text;

      p.addEventListener('blur', function (e) {
        return _this.attemptUpdate(e, e.target, true);
      }, false);
    },
    _delete: function _delete() {
      this.remove();
      this.mark.keyData.note = '';
    },
    remove: function remove() {
      this.hide();
      this.removeMarkListeners();
      this.emit('removed:note', this.mark.id);
    },
    attemptUpdate: function attemptUpdate(e, el, force) {
      var _this2 = this;

      if (force) {
        this.update(el);
      } else if (!this.recentlyUpdated) {
        this.recentlyUpdated = true;
        window.setTimeout(function () {
          return _this2.update(el);
        }, 3000);
      }
    },
    update: function update(el) {
      this.mark.keyData.note = el.value;
      this.emit('updated:note');
      this.recentlyUpdated = false;
    },
    show: function show() {
      var el = this.el;
      var pos = this.getPosition();
      var innerWindowWidth = window.innerWidth;
      var left = pos.left;
      if (left + 340 > innerWindowWidth) {
        left = innerWindowWidth - 340;
      }
      BODY.appendChild(el);
      el.setAttribute('style', 'display:block;top:' + (pos.top + pos.offset) + 'px;left:' + left + 'px;');
      this.visible = true;
    },
    bringUpFront: function bringUpFront() {
      var _this3 = this;

      Array.from(BODY.getElementsByTagName('tmnote')).forEach(function (note) {
        if (note === _this3.el) note.style.zIndex = 2147483647;else note.style.zIndex = 2147483646;
      });
    },
    hide: function hide() {
      BODY.removeChild(this.el);
      this.visible = false;
    },
    addMarkListeners: function addMarkListeners() {
      var _this4 = this;

      _store2.default.get('noteonclick').then(function (noteonclick) {
        if (noteonclick) {
          var handler = _this4.markClickHandler = function () {
            return _this4.show();
          };

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = _this4.mark.wrappers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var wrapper = _step.value;

              wrapper.addEventListener('click', handler, false);
              wrapper.setAttribute('title', browser.i18n.getMessage('toggle_note'));
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
      });
    },
    removeMarkListeners: function removeMarkListeners() {
      if (!this.markClickHandler) return;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.mark.wrappers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var wrapper = _step2.value;

          wrapper.removeEventListener('click', this.markClickHandler, false);
          wrapper.removeAttribute('title');
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
    },
    getPosition: function getPosition() {
      var rect = this.mark.wrappers[this.mark.wrappers.length - 1].getBoundingClientRect();
      return {
        top: rect.top + window.pageYOffset - BODY.clientTop,
        left: rect.left + window.pageXOffset - BODY.clientLeft,
        offset: rect.height
      };
    }
  });
};

var _utils = __webpack_require__(/*! ./../../../utils */ "./content/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/page-injections/js/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./content/page-injections/js/modules/notes.js":
/*!*****************************************************!*\
  !*** ./content/page-injections/js/modules/notes.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

  var DOC = window.document;

  return new _utils._MODULE({
    events: {
      ENV: {
        'add:note': 'addAndShow',
        'removed:note': 'removeNoteStorage',
        'restore:notes': 'restore',
        'removed:mark': 'removeNote',
        'toggle:notes': 'toggleAll',
        'sidebar:toggle-notes': 'toggleAll'
      }
    },
    notes: {},
    toggle: null,
    add: function add(mark) {
      return this.notes[mark.id] = new _note2.default(mark);
    },
    restore: function restore(marks) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = marks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var mark = _step.value;

          if (mark.keyData.note) {
            this.add(mark);
            this.emit('added:note');
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
    },
    addAndShow: function addAndShow(mark) {
      this.add(mark).show();
      this.emit('added:note');
    },
    removeNoteStorage: function removeNoteStorage(id) {
      delete this.notes[id];
      if (this.isEmpty(this.notes)) this.emit('removed:last-note');
    },
    removeNote: function removeNote(id) {
      if (this.notes[id]) this.notes[id].remove();
    },
    toggleAll: function toggleAll() {
      if (!this.notes) return;
      var notes = this.notes;
      var meth = DOC.getElementsByTagName('tmnote').length ? 'hide' : 'show',
          condition = meth === 'hide' ? true : false,
          note = void 0;
      for (var n in notes) {
        note = notes[n];
        if (note.visible === condition) {
          note[meth]();
        }
      }
    },
    isEmpty: function isEmpty(obj) {
      return !Object.keys(obj).length;
    }
  });
};

var _utils = __webpack_require__(/*! ./../../../utils */ "./content/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/page-injections/js/_store.js");

var _store2 = _interopRequireDefault(_store);

var _note = __webpack_require__(/*! ./note */ "./content/page-injections/js/modules/note.js");

var _note2 = _interopRequireDefault(_note);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./content/page-injections/js/modules/page.js":
/*!****************************************************!*\
  !*** ./content/page-injections/js/modules/page.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new _utils._DOMMODULE({
    el: window.document,
    addListenersManually: true,
    events: {
      ENV: {
        'started:app': 'checkURL',
        'toggled:addon': 'power',
        'deleted:entry': 'unset',
        'saved:entry': 'update'
      },
      DOM: {
        keydown: {
          '*': 'delegate'
        },
        selectionchange: {
          '*': 'onSelectionChange'
        }
      }
    },

    url: '',
    active: true,
    set: false,
    initialized: false,

    autoinit: function autoinit() {

      //_READER = this.readerMode = this.isReaderMode();
      this.setup();
    },
    power: function power(on) {
      if (on) this.addListeners();else this.removeListeners();

      this.active = on;
      this.setup();
    },
    setup: function setup() {
      var _this = this;

      _store2.default.get('mode').then(function (active) {
        _this.active = active;

        if (_this.set || !active) return false;

        var pdf = _store2.default.pdf = _this.isPdf();

        if (!pdf && window.document.readyState !== 'complete') return _this.addListener('load', function () {
          return _this.setup();
        }, window);

        _store2.default.iframe = _this.isIFrame();

        _this.setURL();
        _this.checkURL();
        _this.removeListeners();

        if (active) _this.addListeners();

        _this.set = true;
      });
    },
    setURL: function setURL() {
      var url = window.document.URL,
          hash = window.document.location.hash,
          hashIdx = url.indexOf(hash) || url.length;

      this.url = url.substr(0, hashIdx);
    },
    isPdf: function isPdf() {
      return window.location.pathname.split('.').pop().substr(0, 3) === 'pdf';
    },
    isIFrame: function isIFrame() {
      return window !== window.parent.window;
    },

    /*isReaderMode() {
      return this.url.split('?')[0] === 'about:reader';
    },*/
    isEditable: function isEditable(el) {
      var name = el.tagName;

      return name === 'TEXTAREA' || name === 'INPUT' || el.contentEditable === 'true';
    },
    delegate: function delegate(e) {
      var _this2 = this;

      var key = e.key.toLowerCase(),
          modKey = e.metaKey || e.ctrlKey || e.altKey || e.shiftKey,
          functionKeys = ['b', 's', 'y', 'z'],
          defaultMarkers = ['m', '2', '3'];

      if (!functionKeys.includes(key) && window.getSelection().isCollapsed) return true;

      if (this.isEditable(e.target)) return true;

      _store2.default.get('settings').then(function (settings) {

        if (!settings) return true;

        if (!modKey) {
          if (key === 'w' && !settings.shortcuts.w[0] && settings.shortcuts.w[1]) _this2.lookup();else if (settings.markers[key] && (!defaultMarkers.includes(key) || !settings.shortcuts[key] || !settings.shortcuts[key][0] && settings.shortcuts[key][1])) {
            _this2.emit('pressed:marker-key', e, key);
          }
        } else {
          var setting = settings.shortcuts[key];

          if (!setting || !setting[1]) return true;

          var shortcut = setting[0].split('-'),
              s1 = void 0,
              s2 = void 0;

          s1 = shortcut[0];
          s2 = shortcut[1];

          if (!e[s1] || s2 && !e[s2]) return true;

          if (key === 'w') _this2.lookup();else if (defaultMarkers.includes(key) && settings.markers[key]) {
            _this2.emit('pressed:marker-key', e, key);
          } else _this2.emit('pressed:hotkey', key);
        }
      });
    },
    lookup: function lookup() {
      var selectedText = window.getSelection().toString();

      if (selectedText) this.emit('lookup:word', selectedText);
    },
    checkURL: function checkURL() {
      var _this3 = this;

      this.request('check:url', this.url).then(function (entry) {
        if (entry) _this3.onUrlFound(entry);
      });
    },
    unset: function unset(name) {
      if (_store2.default.name && _store2.default.name === name) {
        _store2.default.name = undefined;
        _store2.default.entry = null;
        this.emit('unset:entry');
      }
    },
    update: function update(entry, force) {
      if (force || entry.url.split('#')[0] === this.url) {
        _store2.default.name = entry.name;
        _store2.default.isNew = false;
        _store2.default.entry = entry;
        this.emit('set:entry');
      }
    },
    onHotkey: function onHotkey(key) {
      if (key === 'w') this.lookup();
    },
    onUrlFound: function onUrlFound(entry) {
      this.update(entry, true);

      if (this.active && !this.initialized && !document.querySelector('[data-tm-id]')) {
        this.initialized = true;
        /*if (_READER)
          window.setTimeout(() => this.emit('restore:marks', name), 500);*/
        //else
        this.emit('restore:marks', entry);
      }
    },
    onSelectionChange: function onSelectionChange() {
      this.emit('changed:selection', !window.getSelection().isCollapsed);
    }
  });
};

var _utils = __webpack_require__(/*! ./../../../utils */ "./content/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/page-injections/js/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./content/page-injections/js/modules/restorer.js":
/*!********************************************************!*\
  !*** ./content/page-injections/js/modules/restorer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function () {
  return [new Restorer({
    events: {
      ENV: {
        'restore:marks': 'init'
      }
    },
    queue: [],
    cache: [],
    lost: [],
    restored: [],
    area: 'sync',
    phase: 1,

    init: function init(entry) {
      if (_store2.default.pdf) return false;

      _store2.default.name = entry.name;
      _store2.default.entry = entry;

      var now = [],
          postponed = [],
          marks = entry.marks,
          l = marks.length,
          i = 0,
          mark = void 0;

      this.area = entry.synced ? 'sync' : 'local';

      for (; i < l; i++) {
        mark = marks[i];

        this.convertDescription(mark).createTempObject(mark);

        if (mark.conds.n1 === 'TM') postponed.push(mark);else now.push(mark);
      }

      this.queue.push(now);

      for (i = 0, l = postponed.length; i < l; i++) {
        this.queue.push([postponed[i]]);
      }this.restore().report();
    },
    convertDescription: function convertDescription(mark) {
      if (typeof mark.conds.o === 'undefined') {
        var conds = mark.conds,
            convertedConds = {
          o: conds.startOffset,
          n1: conds.firstNodeName,
          n2: conds.firstParentNodeName,
          p1: conds.firstTextNodePosition,
          p2: conds.firstNodePosition,
          p3: conds.firstParentNodePosition,
          p4: conds.firstGrampaNodePosition
        };
        delete mark.conds;
        mark.conds = convertedConds;
      }
      return this;
    },
    createTempObject: function createTempObject(mark) {
      var trimmedText = this.squeeze(mark.text);

      mark.temp = {
        trimmedText: trimmedText,
        trimmedTextLength: trimmedText.length,
        possiblePositions: [],
        possibleStartNodes: [],
        possibleEnds: {},
        possibleFocusOffsets: []
      };
    },
    restore: function restore() {
      if (this.phase === 2) this.sortQueueById();

      var marks = this.marks = this.queue.shift(),
          length = marks ? marks.length : 0;

      this.length = length;

      if (length) {
        this.setBodySelection(window.document.body).getTextPositions(marks, length);

        if (this.phase === 1 && length > 1) this.postponeOverlappings();

        this.findPossibleExtrema().ruleOutMultiples().recreateMarks();
      }

      this.phase++;

      if (this.queue.length) this.restore();

      return this;
    },
    sortQueueById: function sortQueueById() {
      var marks = this.queue,
          l = marks ? marks.length : 0,
          temp = [],
          res = [],
          i = 0,
          mark = void 0,
          t = void 0;

      while (l--) {
        if (!marks[l].length) continue;
        mark = marks[l][0];
        temp[mark.id] = mark;
      }
      this.queue = [];

      for (t = temp.length; i < t; i++) {
        if (temp[i]) this.queue.push([temp[i]]);
      }
      return this;
    },
    getTextPositions: function getTextPositions(marks, l) {
      var trimmedSelectionText = this.trimmedSelectionText,
          allPossibleStartPositions = this.allPossibleStartPositions = [],
          endPositions = [],
          mark = void 0,
          markTemp = void 0,
          trimmedText = void 0,
          trimmedTextLength = void 0,
          p = void 0,
          endPosition = void 0;

      while (l--) {
        p = undefined;
        mark = marks[l];
        markTemp = mark.temp;

        if (!markTemp) {
          marks.splice(l, 1);
          continue;
        }

        trimmedText = markTemp.trimmedText;
        trimmedTextLength = markTemp.trimmedTextLength;

        while (p !== -1) {
          if (p === undefined) p = -1;
          p = trimmedSelectionText.indexOf(trimmedText, p + 1);
          endPosition = p + trimmedTextLength;
          markTemp.possiblePositions.push(p);
          allPossibleStartPositions.push([p, endPosition, mark]);
          endPositions.push(endPosition);
        }

        markTemp.possiblePositions.pop();
        allPossibleStartPositions.pop();
        endPositions.pop();

        if (!markTemp.possiblePositions.length) this.lost.push(mark);
      }
      this.sortPossibleStartPositions(allPossibleStartPositions);
      this.maxPosition = Math.max.apply(null, endPositions);

      return this;
    },
    sortPossibleStartPositions: function sortPossibleStartPositions(positions) {
      var l = positions.length,
          temp = [],
          i = 0,
          pos = void 0,
          start = void 0,
          t = void 0;

      while (l--) {
        pos = positions[l];
        start = pos[0];

        if (temp[start]) temp.splice(start + 1, 0, pos);else temp[start] = pos;
      }
      t = temp.length;
      this.allPossibleStartPositions = [];

      for (; i < t; i++) {
        if (temp[i]) this.allPossibleStartPositions.push(temp[i]);
      }
    },
    postponeOverlappings: function postponeOverlappings() {
      var positions = this.allPossibleStartPositions,
          p = positions.length,
          postponed = [],
          pos1 = void 0,
          pos2 = void 0,
          i = void 0,
          m1 = void 0,
          m2 = void 0,
          id = void 0;

      if (p > 1) {
        while (p-- > 1) {
          pos1 = positions[p - 1];
          pos2 = positions[p];

          if (pos1[1] > pos2[0] && pos1[0] < pos2[1]) {
            m1 = pos1[2];
            m2 = pos2[2];

            if (m1.id < m2.id) {
              id = m2.id;

              if (!postponed.includes(id)) {
                this.postpone(m2);
                postponed.push(id);
              }
            } else {
              id = m1.id;

              if (!postponed.includes(id)) {
                this.postpone(m1);
                postponed.push(id);
              }
            }
          }
        }
        p = postponed.length;

        for (i = 0; i < p; i++) {
          this.cutOutFor(postponed[i]);
        }
      }
      return this;
    },
    cutOutFor: function cutOutFor(id) {
      var positions = this.allPossibleStartPositions,
          p = positions.length;

      while (p--) {
        if (positions[p][2].id === id) this.allPossibleStartPositions.splice(p, 1);
      }
    },
    postpone: function postpone(mark) {
      var queue = this.queue,
          l = queue.length,
          alreadyIncluded = false;

      while (l--) {
        if (queue[l][0] === mark) {
          alreadyIncluded = true;
          break;
        }
      }
      if (!alreadyIncluded) this.queue.push([mark]);
    },
    findPossibleExtrema: function findPossibleExtrema() {
      var selection = this.selection,
          range = this.range,
          nodes = this.bodyTextNodes,
          n = nodes.length,
          indices = this.allPossibleStartPositions,
          phase = this.phase,
          cache = this.cache = [],
          satisfied = [],
          i = 0,
          chars = 0,
          nextStartFound = void 0,
          endingsInThisNode = void 0,
          node = void 0,
          nodesText = void 0,
          nodesTextLength = void 0,
          mark = void 0,
          diff = void 0,
          l = void 0,
          startPosition = void 0,
          endPosition = void 0,
          e = void 0,
          f = void 0,
          id = void 0,
          p = void 0,
          q = void 0,
          x = void 0,
          m = void 0,
          possibleFocusOffset = void 0,
          startFoundFor = void 0,
          postponed = void 0,
          hasEndingsInThisNode = void 0;

      for (; i < n; i++) {
        node = nodes[i];
        nodesText = this.squeeze(node.data);
        nodesTextLength = nodesText.length;
        chars += nodesTextLength;
        l = indices.length;
        startFoundFor = [];
        postponed = [];
        hasEndingsInThisNode = null;

        while (l--) {
          startPosition = indices[l][0];
          endPosition = indices[l][1];
          mark = indices[l][2];
          id = mark.id;

          mark.temp.startFoundFor = mark.temp.startFoundFor || [];
          mark.temp.endFoundFor = mark.temp.endFoundFor || [];

          if (!mark.temp.startFoundFor.includes(startPosition) && chars > startPosition && mark.temp.possibleStartNodes.length < mark.temp.possiblePositions.length) {
            if (hasEndingsInThisNode && hasEndingsInThisNode.id < mark.id) {
              if (phase === 1) {
                this.postpone(mark);
                postponed.push(id);
              }
              indices.splice(l, 1);

              continue;
            } else {
              if (!this.satisfiesDescription(mark, node)) {
                if (phase === 1 && id !== 1) {
                  this.postpone(mark);
                  postponed.push(id);
                }
                indices.splice(l, 1);

                continue;
              } else {
                mark.temp.possibleStartNodes.push(node);
                mark.temp.startFoundFor.push(startPosition);
                startFoundFor.push(id);
              }
            }
          }
          if (mark.temp.startFoundFor.includes(startPosition) && !mark.temp.endFoundFor.includes(endPosition) && chars - endPosition >= 0) {
            if (Math.min.apply(null, startFoundFor) < id) {
              if (phase === 1) {
                this.postpone(mark);
                postponed.push(id);
              }
              indices.splice(l, 1);
            } else {
              possibleFocusOffset = this.findFocusOffset(mark, node, endPosition - (chars - nodesTextLength));
              mark.temp.possibleFocusOffsets.push(possibleFocusOffset);
              mark.temp.endFoundFor.push(endPosition);
              mark.temp.possibleEnds[startPosition] = {
                node: node,
                offset: possibleFocusOffset
              };
              if (!satisfied.includes(id)) {
                cache.push(mark);
                satisfied.push(id);
              }

              hasEndingsInThisNode = mark;
              indices.splice(l, 1);
            }
          }
        }
        p = postponed.length;

        if (p) for (x = 0; x < p; x++) {
          this.cutOutFor(postponed[x]);
        }if (chars > this.maxPosition) break;
      }
      if (phase !== 1) {
        for (m in this.marks) {
          if (!satisfied.includes(this.marks[m].id)) this.lost.push(mark);
        }
      }
      return this;
    },
    ruleOutMultiples: function ruleOutMultiples() {
      var cache = this.cache,
          i = cache.length,
          mark = void 0,
          possibleStartNodes = void 0,
          p = void 0,
          parent = void 0,
          grampa = void 0,
          grandgrampa = void 0,
          matches = void 0,
          failed = void 0,
          q = void 0;

      while (i--) {
        mark = cache[i];
        matches = [];
        failed = false;
        possibleStartNodes = mark.temp.possibleStartNodes;
        p = possibleStartNodes.length;

        if (p > 1) {
          while (p--) {
            parent = possibleStartNodes[p].parentNode.parentNode;
            grampa = parent.parentNode || 0;

            if (!grampa || mark.conds.p3 === this.whichChild(grampa, parent)) matches.push(p);
          }
          if (!matches.length) p = 0;else {
            if (matches.length === 1) p = matches[0];else {
              p = undefined;

              while (matches.length) {
                q = matches.pop();
                parent = possibleStartNodes[q].parentNode;
                grampa = parent.parentNode || 0;
                grandgrampa = grampa && grampa.parentNode ? grampa.parentNode : 0;

                if (!grandgrampa || mark.conds.p4 === this.whichChild(grandgrampa, grampa)) {
                  p = q;
                  break;
                }
              }
              if (!p) p = 0;
            }
          }
        } else p = 0;

        p = p || 0;

        mark.temp.startNode = mark.temp.possibleStartNodes[p];

        this.setMatchingEnd(mark, p);
      }
      return this;
    },
    setMatchingEnd: function setMatchingEnd(mark, p) {
      var startPosition = mark.temp.startFoundFor[p],
          end = mark.temp.possibleEnds[startPosition];

      mark.temp.endNode = end.node;
      mark.temp.focusOffset = end.offset;
    },
    satisfiesDescription: function satisfiesDescription(mark, node) {
      var description = mark.conds,
          parentNode = node.parentNode,
          grampa = parentNode.parentNode,
          grandgrampa = grampa && grampa.parentNode ? grampa.parentNode : 0,
          startOffset = description.o,
          relevantNodeText = node.data.substring(startOffset).trim(),
          l = relevantNodeText.length,
          markText = mark.text.trim(),
          m = markText.length,
          textsMatch = void 0;

      if (m <= l) textsMatch = this.squeeze(relevantNodeText).indexOf(this.squeeze(markText)) === 0;else textsMatch = this.squeeze(markText).indexOf(this.squeeze(relevantNodeText)) === 0;

      return textsMatch && (parentNode.nodeName === description.n1 || description.n1 === 'TM' && parentNode.hasAttribute('data-tm-id')) && (!grampa || grampa.nodeName === description.n2) && this.whichChild(parentNode, node) === description.p1;
    },
    findFocusOffset: function findFocusOffset(mark, node, n) {
      var nodeText = node.data,
          l = nodeText.length,
          i = 0,
          counter = 0;

      for (; i < l; i++) {
        if (this.squeeze(nodeText[i])) counter++;

        if (counter === n) return (/\s$/.test(mark.text) ? i + 2 : i + 1
        );
      }
    },
    recreateMarks: function recreateMarks() {
      var range = this.range,
          selection = this.selection,
          marks = this.cache,
          i = marks.length,
          mark = void 0,
          markTemp = void 0,
          start = void 0,
          end = void 0,
          focusOffset = void 0;

      while (i--) {
        mark = marks[i];
        markTemp = mark.temp;
        start = markTemp.startNode;
        end = markTemp.endNode;
        focusOffset = markTemp.focusOffset;

        if (!start || !end || !(typeof focusOffset === 'number')) this.lost.push(mark);else {
          try {
            range.setStart(start, mark.conds.o);
            range.setEnd(end, focusOffset);
            selection.resume(range);
            this.emit('restored:range', selection, mark);
            this.restored.push(mark);
          } catch (e) {
            this.lost.push(mark);
          }
          delete mark.temp;
        }
      }
    }
  }), new Restorer({
    events: {
      ENV: {
        'restore:marks': 'init'
      }
    },
    sel: null,
    trimmedText: '',
    lost: [],
    restored: [],

    init: function init(entry) {
      if (!_store2.default.pdf) return false;

      _store2.default.name = entry.name;
      _store2.default.entry = entry;

      this.area = entry.synced ? 'sync' : 'local';

      this.restore(entry.marks, entry.count);
    },
    restore: function restore(marks, idCount) {
      //Mark.prototype.count = idCount;
      var m = marks.length,
          R = this,
          selection = this.selection,
          pageContainers = window.document.getElementsByClassName('page'),
          pages = {},
          markedPages = [],
          currPage = void 0,
          currContainer = void 0,
          mark = void 0,
          conds = void 0,
          startPage = void 0,
          endPage = void 0,
          p = void 0,
          i = void 0;

      for (i = 0; i < m; i++) {
        mark = marks[i];
        conds = mark.conds;
        startPage = conds.pages[0];
        markedPages.push(startPage);
        pages[startPage] = pages[startPage] || [];
        pages[startPage].push(mark);

        if (conds.pageIntersection) {
          endPage = conds.pages[1];

          do {
            pages[endPage] = pages[endPage] || [];
            pages[endPage].push(mark);
            markedPages.push(endPage);
          } while (--endPage > startPage);
        }
      }
      markedPages = unique(markedPages.sort(function (a, b) {
        return a - b;
      }));

      function unique(arr) {
        var len = arr.length,
            res = [],
            i = 0;

        for (; i < len; i++) {
          if (i === len - 1 || arr[i] !== arr[i + 1]) res.push(arr[i]);
        }return res;
      }

      function process(mark) {
        var text = mark.text,

        //currContainer = window.document.getElementById('pageContainer' + currPage),
        selection = void 0,
            range = void 0;

        R.setBodySelection(currContainer);
        selection = R.selection;
        range = R.range;

        if (!R.textExistsOnPage(currContainer, text)) {
          delete mark.conds;
          R.lost.push(mark);

          return true;
        }
        var conds = mark.conds,
            start = conds.containers[0],
            end = conds.containers[1],
            extremes = end === undefined ? [start, start] : [start, end],
            offsets = conds.offsets,
            divsOnPage = void 0,
            d = void 0,
            last = void 0;

        if (conds.pageIntersection) {
          if (conds.pages[0] === currPage) {
            extremes[1] = -1;
            offsets[1] = -1;
          } else {
            extremes[0] = 0;
            offsets[0] = 0;
          }
        }
        extremes.forEach(function (pos, i) {
          if (typeof pos === 'string') {
            extremes[i] = currContainer.querySelector('span[data-tm-id="' + pos + '"]');
          } else {
            divsOnPage = divsOnPage || currContainer.getElementsByClassName('textLayer')[0].querySelectorAll('div');
            d = d || divsOnPage.length;

            if (pos < 0) {
              last = extremes[1] = divsOnPage[d - 1];
              offsets[1] = last.lastChild.data.length;
            } else {
              extremes[i] = divsOnPage[pos];
            }
          }
        });

        extremes[1] = extremes[1] || extremes[0];

        try {
          range.setStart(extremes[0].childNodes[conds.nodes[0]], offsets[0]);
          range.setEnd(extremes[1].childNodes[conds.nodes[1]], offsets[1]);

          selection.resume(range);

          R.emit('restored:range', selection, mark);

          R.restored.push(mark);
        } catch (e) {
          delete mark.conds;
          R.lost.push(mark);
        }

        return true;
      }

      var monitorLoadingProcess = window.setInterval(function () {
        var l = markedPages.length,
            idx = void 0,
            k = void 0,
            box = void 0,
            textBoxes = void 0,
            t = void 0;

        pageContainers = window.document.getElementsByClassName('page');

        if (!l) {
          window.clearInterval(monitorLoadingProcess);
          return false;
        }

        while (l--) {
          k = markedPages[l] - 1;

          if ((box = pageContainers[k]) && box.hasAttribute('data-loaded') && (textBoxes = box.querySelectorAll('.textLayer div')) && (t = textBoxes.length) && textBoxes[t - 2].firstChild && textBoxes[t - 2].firstChild.data.length) {
            currPage = markedPages.splice(l, 1)[0];
            currContainer = box;

            R.processPeuAPeu(pages[currPage], process, R.proxy(R, R.report));
          }
        }
      }, 100);
    },
    textExistsOnPage: function textExistsOnPage(page, text) {
      var pageText = this.trimmedSelectionText;

      text = this.trimmedText = this.squeeze(text);

      return pageText.indexOf(text) !== -1;
    }
  })];
};

var _utils = __webpack_require__(/*! ./../../../utils */ "./content/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/page-injections/js/_store.js");

var _store2 = _interopRequireDefault(_store);

var _selection = __webpack_require__(/*! ./selection */ "./content/page-injections/js/modules/selection.js");

var _selection2 = _interopRequireDefault(_selection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Restorer = function (_MODULE2) {
  _inherits(Restorer, _MODULE2);

  function Restorer(obj) {
    _classCallCheck(this, Restorer);

    return _possibleConstructorReturn(this, (Restorer.__proto__ || Object.getPrototypeOf(Restorer)).call(this, obj));
  }

  _createClass(Restorer, [{
    key: 'processPeuAPeu',
    value: function processPeuAPeu(data, func, cb) {
      var d = Array.prototype.slice.call(data),
          done = void 0,
          time0 = void 0;

      (function rec() {
        var max = +new Date() + 500;
        do {
          done = func(d[0]);
          if (done) d.shift();
        } while (d.length > 0 && max > +new Date());

        if (d.length > 0) window.setTimeout(function () {
          return rec();
        }, 25);else cb();
      })();
    }
  }, {
    key: 'setBodySelection',
    value: function setBodySelection(el) {
      var selection = this.selection = new _selection2.default(el);

      this.trimmedSelectionText = this.squeeze(selection.text);

      this.bodyTextNodes = selection.nodes;
      this.range = selection.range;

      return this;
    }
  }, {
    key: 'squeeze',
    value: function squeeze(text) {
      return text.replace(/\t|\s|\n|\r/g, '');
    }
  }, {
    key: 'whichChild',
    value: function whichChild(parent, child, context) {
      if (!parent || !child) return null;

      var children = child.nodeType === 3 ? parent.childNodes : parent.children,
          c = children.length,
          pos = 0,
          i = 0,
          currentChild = void 0;

      for (; i < c; i++) {
        currentChild = children[i];

        if (currentChild === child) return pos;

        if (context) {
          if (currentChild.nodeName === context) pos++;
        } else {
          if (!(currentChild.nodeType === 3 && !currentChild.data)) pos++;
        }
      }
    }
  }, {
    key: 'report',
    value: function report() {
      var ll = this.lost.length;
      if (ll) {
        while (ll--) {
          delete this.lost[ll].temp;
        }
        this.emit('failed:restoration');
      } else {
        this.emit('succeeded:restoration');
      }
      this.emit('finished:restoration', _store2.default.name, this.restored, this.lost, this.area);
    }
  }]);

  return Restorer;
}(_utils._MODULE);

/***/ }),

/***/ "./content/page-injections/js/modules/selection.js":
/*!*********************************************************!*\
  !*** ./content/page-injections/js/modules/selection.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _store = __webpack_require__(/*! ./../_store */ "./content/page-injections/js/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _SELECTION = function () {
  function _SELECTION(node) {
    _classCallCheck(this, _SELECTION);

    var selection = this.self = window.getSelection();

    if (selection.rangeCount) this.range = selection.getRangeAt(0);

    if (node || !selection.isCollapsed) {
      if (node) {
        this.defined = node;

        this.create(node).reduceToOneRange().update().collectNodes(true).retrieveText();
      } else {
        if (_store2.default.pdf) this.adjust_PDF();

        this.collectNodes().reduceToOneRange().update().adjust().update().retrieveText();
      }
      selection.collapseToStart();
    }
  }

  _createClass(_SELECTION, [{
    key: 'create',
    value: function create(node) {
      this.self.selectAllChildren(node);

      return this;
    }
  }, {
    key: 'resume',
    value: function resume(range) {
      var selection = this.self;

      selection.removeAllRanges();
      selection.addRange(range);
      this.reduceToOneRange().update().collectNodes().retrieveText();
      selection.collapseToStart();
    }
  }, {
    key: 'update',
    value: function update(selection) {
      if (selection) this.self = selection;else selection = this.self;

      var props = ['focusNode', 'anchorNode', 'focusOffset', 'anchorOffset'],
          i = props.length;

      while (i--) {
        this[props[i]] = selection[props[i]];
      }this.range = selection.getRangeAt(0);
      this.simple = this.isSimple();

      return this;
    }
  }, {
    key: 'adjust',
    value: function adjust() {
      var selection = this.self,
          anchor = this.anchorNode,
          focus = this.focusNode;

      if (this.isBackwards(anchor, focus)) this.reverse(anchor, focus);else this.normalize(anchor, focus);

      return this;
    }
  }, {
    key: 'adjust_PDF',
    value: function adjust_PDF() {
      var selection = this.self,
          range = this.range,
          anchor = range.startContainer;

      while (anchor = anchor.parentNode) {
        if (anchor.id && anchor.id === 'viewer') return this;
      }

      try {
        anchor = window.document.getElementsByClassName('textLayer')[0].children[0].children[0];
      } finally {
        try {
          anchor = window.document.getElementsByClassName('textLayer')[0].children[0];
        } finally {
          anchor = window.document.getElementsByClassName('textLayer')[0];
        }
      }

      selection.getRangeAt(0).setStart(anchor, 0);

      return this;
    }
  }, {
    key: 'normalize',
    value: function normalize(anchor, focus) {
      var selection = this.self,
          range = this.range,
          firstTextNode = this.nodes[0],
          lastTextNode = this.nodes[this.nodes.length - 1];

      if (firstTextNode !== anchor) range.setStart(firstTextNode, firstTextNode.data.length - firstTextNode.data.trimLeft().length);

      if (lastTextNode !== focus) range.setEnd(lastTextNode, lastTextNode.data.length - (lastTextNode.data.length - lastTextNode.data.trimRight().length));
    }
  }, {
    key: 'collectNodes',
    value: function collectNodes(wholeDocument) {
      var self = this,
          selection = this.self,
          range = this.range,
          container = wholeDocument ? window.document.body : this.getCommonAncestorContainer(),
          iterator = window.document.createNodeIterator(container, NodeFilter.SHOW_TEXT, {
        acceptNode: function acceptNode(node) {
          var parent = node.parentNode;
          return selection.containsNode(node) && !self.isBlank(node) && self.hasNormalParent(parent);
        }
      }, false),
          tempRange = document.createRange(),
          nodes = [],
          parentNodes = [],
          textNode,
          parent,
          firstNode,
          lastNode;

      while (textNode = iterator.nextNode()) {
        nodes.push(textNode);
      }
      this.nodes = this.getReducedNodeCollection(nodes);
      this.parentNodes = this.collectParentNodes(this.nodes);

      return this;
    }
  }, {
    key: 'getReducedNodeCollection',
    value: function getReducedNodeCollection(nodes) {
      var selection = this.self;
      var firstNode = void 0,
          lastNode = void 0;

      if (nodes.length > 1) {
        firstNode = nodes[0];
        if (selection.anchorNode === firstNode && firstNode.data.trimRight().length <= selection.anchorOffset) {
          nodes.shift();
        }
        lastNode = nodes[nodes.length - 1];
        if (selection.focusNode === lastNode && this.isBlank(lastNode.data.substr(0, selection.focusOffset))) {
          nodes.pop();
        }
      }
      return nodes;
    }
  }, {
    key: 'collectParentNodes',
    value: function collectParentNodes(nodes) {
      var l = nodes.length,
          parents = [],
          i = 0;

      for (; i < l; i++) {
        parents.push(nodes[i].parentNode);
      }return parents;
    }
  }, {
    key: 'retrieveText',
    value: function retrieveText() {
      var range = this.range,
          nodes = this.nodes,
          l = nodes.length,
          i = 0,
          nodeTexts = [],
          text = void 0;

      for (; i < l; i++) {
        nodeTexts.push(nodes[i].data);
      }l -= 1;

      if (nodeTexts.length) {
        if (this.simple) {
          //nodeTexts[0] = nodeTexts[0].substring(selection.anchorOffset, selection.focusOffset);
          nodeTexts[0] = nodeTexts[0].substring(range.startOffset, range.endOffset);
        } else {
          //nodeTexts[0] = nodeTexts[0].substring(selection.anchorOffset);
          //nodeTexts[l] = nodeTexts[l].substring(0, this.defined ? undefined : selection.focusOffset);
          nodeTexts[0] = nodeTexts[0].substring(range.startOffset);
          nodeTexts[l] = nodeTexts[l].substring(0, this.defined ? undefined : range.endOffset);
        }
        text = this.text = nodeTexts.join('');
      }
      return this;
    }
  }, {
    key: 'getCommonAncestorContainer',
    value: function getCommonAncestorContainer() {
      var selection = this.self,
          node1 = selection.anchorNode,
          node2 = selection.focusNode;

      while (node1 = node1.parentNode) {
        if ((node1.compareDocumentPosition(node2) & 0x10) === 0x10) return node1;
      }
      return window.document.body;
    }
  }, {
    key: 'reverse',
    value: function reverse(anchor, focus) {
      var range = window.document.createRange(),
          selection = this.self;

      range.setStart(focus, selection.focusOffset);
      range.setEnd(anchor, selection.anchorOffset);

      selection.removeAllRanges();
      selection.addRange(range);

      this.update(selection).adjust(selection.anchorNode, selection.focusNode);
    }
  }, {
    key: 'reduceToOneRange',
    value: function reduceToOneRange() {
      var selection = this.self,
          rangeCount = selection.rangeCount,
          range0 = this.range,
          lastRange = void 0;

      if (rangeCount < 2) return this;

      lastRange = selection.getRangeAt(rangeCount - 1);

      range0.setStart(range0.startContainer, range0.startOffset);
      range0.setEnd(lastRange.endContainer, lastRange.endOffset);

      selection.removeAllRanges();
      selection.addRange(range0);

      return this;
    }
  }, {
    key: 'hasNormalParent',
    value: function hasNormalParent(node) {
      var tag = node.tagName.toUpperCase();

      return tag !== 'SCRIPT' && tag !== 'STYLE' && tag !== 'LINK' && tag !== 'META' && tag !== 'BASE' && tag !== 'TITLE' && tag !== 'NOSCRIPT' && tag !== 'IMG' && tag !== 'IFRAME' && tag !== 'EMBED' && tag !== 'PARAM' && tag !== 'VIDEO' && tag !== 'AUDIO' && tag !== 'SOURCE' && tag !== 'TRACK' && tag !== 'CANVAS' && tag !== 'MAP' && tag !== 'AREA' && tag !== 'MATH' && tag !== 'OBJECT' && !this.isInsideSVG(node);
    }
  }, {
    key: 'isInsideSVG',
    value: function isInsideSVG(node) {
      while (node) {
        if (node.nodeName === 'svg') return true;
        node = node.parentNode;
      }
      return false;
    }
  }, {
    key: 'isBlank',
    value: function isBlank(node) {
      var text = void 0;
      if (typeof node === 'string') text = node;else {
        if (node && typeof node.data === 'string') text = node.data;else text = this.text;
      }
      return text.search(/[^\s\n\r\t]/g) === -1;
    }
  }, {
    key: 'isBackwards',
    value: function isBackwards(anchor, focus) {
      var selection = this.self,
          position = anchor.compareDocumentPosition(focus);

      return position === 2 || position === 10 || !position && selection.anchorOffset > selection.focusOffset;
    }
  }, {
    key: 'isSimple',
    value: function isSimple() {
      var selection = this.self,
          anchorNode = selection.anchorNode,
          focusNode = selection.focusNode;

      return anchorNode === focusNode && anchorNode.nodeType === 3 && (!anchorNode.nextSibling || anchorNode.nextSibling.compareDocumentPosition(focusNode) !== 4);
    }
  }]);

  return _SELECTION;
}();

exports.default = _SELECTION;

/***/ }),

/***/ "./content/page-injections/js/modules/tmui.js":
/*!****************************************************!*\
  !*** ./content/page-injections/js/modules/tmui.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (mark) {

  var DOC = window.document;

  return new _utils._DOMMODULE({
    events: {
      ENV: {
        'updated:misc-settings': 'updatePosition',
        'added:note': 'onNoteAdded',
        'added:bookmark': 'onBookmarkAdded',
        'removed:last-note': 'onLastNoteRemoved',
        'removed:bookmark': 'onBookmarkRemoved'
      },
      DOM: {
        click: {
          'tmnotestoggle': 'toggleNotes',
          'tmbm': 'scrollToBookmark'
        }
      }
    },
    addListenersManually: true,
    el: null,
    notesBtn: null,
    bmBtn: null,
    notesBtnActive: false,
    bmBtnActive: false,
    bookmark: false,
    notes: false,

    autoinit: function autoinit() {
      this.createEl();
      this.createBtns();
      this.addListeners();
    },
    createEl: function createEl() {
      var el = this.el = DOC.createElement('tmui');
      DOC.body.appendChild(el);
      this.updatePosition();
    },
    createBtns: function createBtns() {
      var notesBtn = this.notesBtn = DOC.createElement('tmnotestoggle');
      var bmBtn = this.bmBtn = DOC.createElement('tmbm');
      notesBtn.title = browser.i18n.getMessage('toggle_notes');
      bmBtn.title = browser.i18n.getMessage('bm_scroll');
      if (_store2.default.pdf) bm.className = 'textmarker-bookmark-control';
    },
    addBtn: function addBtn(btn) {
      this.el.appendChild(btn);
      this.el.classList.add('active');
    },
    removeBtn: function removeBtn(btn) {
      this.el.removeChild(btn);
      if (!this.el.children.length) {
        this.el.classList.remove('active');
      }
    },
    updatePosition: function updatePosition() {
      var _this = this;

      _store2.default.get('tmuipos').then(function (pos) {
        return _this.el.setAttribute('style', pos.split('-').map(function (p) {
          return p + ':1px;';
        }).join(' '));
      });
    },
    onNoteAdded: function onNoteAdded() {
      var _this2 = this;

      this.notes = true;
      if (!this.notesBtnActive) {
        _store2.default.get('noteicon').then(function (noteicon) {
          if (noteicon) {
            _this2.addBtn(_this2.notesBtn);
            _this2.notesBtnActive = true;
          }
        });
      }
    },
    onLastNoteRemoved: function onLastNoteRemoved() {
      this.notes = false;
      if (this.notesBtnActive) {
        this.removeBtn(this.notesBtn);
        this.notesBtnActive = false;
      }
    },
    onBookmarkAdded: function onBookmarkAdded() {
      var _this3 = this;

      this.bookmark = true;
      if (!this.bmBtnActive) {
        _store2.default.get('bmicon').then(function (bmicon) {
          if (bmicon) {
            _this3.addBtn(_this3.bmBtn);
            _this3.bmBtnActive = true;
          }
        });
      }
    },
    onBookmarkRemoved: function onBookmarkRemoved() {
      this.bookmark = false;
      if (this.bmBtnActive) {
        this.removeBtn(this.bmBtn);
        this.bmBtnActive = false;
      }
    },
    toggleNotes: function toggleNotes() {
      this.emit('toggle:notes');
    },
    scrollToBookmark: function scrollToBookmark() {
      this.emit('scroll-to-bookmark');
    }
  });
};

var _utils = __webpack_require__(/*! ./../../../utils */ "./content/utils.js");

var _store = __webpack_require__(/*! ./../_store */ "./content/page-injections/js/_store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./content/page-injections/js/port.js":
/*!********************************************!*\
  !*** ./content/page-injections/js/port.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(/*! ./../../utils */ "./content/utils.js");

exports.default = new _utils._PORT({
  name: 'injection',
  type: 'content',
  events: {
    ONEOFF: ['finished:restoration', 'failed:restoration', 'succeeded:restoration', 'copy:marks', 'save:entry?', 'update:entry?', 'lookup:word', 'error:browser-console', 'changed:selection', 'unsaved-changes', 'clicked:mark', 'added:bookmark', 'removed:bookmark', 'added:note', 'removed:last-note']
  }
});

/***/ }),

/***/ "./content/page-injections/sass/main.scss":
/*!************************************************!*\
  !*** ./content/page-injections/sass/main.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./content/utils.js":
/*!**************************!*\
  !*** ./content/utils.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._ERRORTRACKER = exports._L10N = exports._PORT = exports._DOMMODULE = exports._MODULE = exports._EXTEND = exports._GET_ACTIVE_TAB = exports._COPY = undefined;

var _copy = __webpack_require__(/*! ./../utils/copy */ "./utils/copy.js");

var _getActiveTab = __webpack_require__(/*! ./../utils/getActiveTab */ "./utils/getActiveTab.js");

var _extend = __webpack_require__(/*! ./../utils/extend */ "./utils/extend.js");

var _extend2 = _interopRequireDefault(_extend);

var _module = __webpack_require__(/*! ./../utils/module */ "./utils/module.js");

var _dommodule = __webpack_require__(/*! ./../utils/dommodule */ "./utils/dommodule.js");

var _port = __webpack_require__(/*! ./../utils/port */ "./utils/port.js");

var _l10n = __webpack_require__(/*! ./../utils/l10n */ "./utils/l10n.js");

var _l10n2 = _interopRequireDefault(_l10n);

var _errorTracker = __webpack_require__(/*! ./../utils/error-tracker */ "./utils/error-tracker.js");

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(/*! ./module */ "./utils/module.js");

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

exports.default = _ERRORTRACKER;

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

exports.default = function (obj1, obj2) {
  for (var i in obj2) {
    if (!obj1[i]) obj1[i] = obj2[i];
  }return obj1;
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

  return browser.tabs.query({ currentWindow: true, active: true }).then(function (tabs) {
    return tabs[0];
  });
};

exports._GET_ACTIVE_TAB = _GET_ACTIVE_TAB;

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(/*! ./module */ "./utils/module.js");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvanMvX3N0b3JlLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2pzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9qcy9tb2R1bGVzL2Jvb2ttYXJrLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2pzL21vZHVsZXMvY29udGV4dG1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvanMvbW9kdWxlcy9tYXJrLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvanMvbW9kdWxlcy9tYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvanMvbW9kdWxlcy9ub3RlLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2pzL21vZHVsZXMvbm90ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvanMvbW9kdWxlcy9wYWdlLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2pzL21vZHVsZXMvcmVzdG9yZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvanMvbW9kdWxlcy9zZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvanMvbW9kdWxlcy90bXVpLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2pzL3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wYWdlLWluamVjdGlvbnMvc2Fzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb3B5LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2RvbW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9lcnJvci10cmFja2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZXRBY3RpdmVUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbDEwbi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcG9ydC5qcyJdLCJuYW1lcyI6WyJldmVudHMiLCJFTlYiLCJpbml0aWFsaXplZCIsImFyZWFfc2V0dGluZ3MiLCJhcmVhX2hpc3RvcnkiLCJhcmVhX2VudHJ5IiwicGRmIiwiaWZyYW1lIiwibmFtZSIsInVuZGVmaW5lZCIsImlzTmV3IiwiZW50cnkiLCJ0bWlkIiwic2V0QXJlYXMiLCJicm93c2VyIiwic3RvcmFnZSIsInN5bmMiLCJnZXQiLCJ0aGVuIiwic2V0dGluZ3MiLCJoaXN0b3J5IiwiZmllbGQiLCJtZXRoIiwiX2dldF9oaXN0b3J5Iiwic3luY2VkSGlzdG9yeSIsInN5bmNlZFN0b3JhZ2UiLCJsb2NhbCIsImxvY2FsSGlzdG9yeSIsImxvY2FsU3RvcmFnZSIsIm9yZGVyIiwiY29uY2F0IiwiZSIsImVudHJpZXMiLCJfZ2V0X3NldHRpbmdzIiwiX2dldF9ibWljb24iLCJtaXNjIiwiYm1pY29uIiwiX2dldF9ub3RlaWNvbiIsIm5vdGVpY29uIiwiX2dldF9ub3Rlb25jbGljayIsIm5vdGVvbmNsaWNrIiwiX2dldF90bXVpcG9zIiwidG11aXBvcyIsIl9nZXRfYXV0b3NhdmUiLCJhdXRvc2F2ZSIsIl9nZXRfbWFya2VycyIsIm1hcmtlcnMiLCJfZ2V0X3Nob3J0Y3V0cyIsInNob3J0Y3V0cyIsIl9nZXRfbW9kZSIsImFkZG9uIiwiYWN0aXZlIiwiX2dldF9uYW1pbmciLCJuYW1pbmciLCJib290c3RyYXBwZWQiLCJhdXRvaW5pdCIsInBvd2VyIiwib24iLCJfQk9PS01BUksiLCJtYXJrIiwiYW5jaG9yIiwid3JhcHBlcnMiLCJ3IiwibGVuZ3RoIiwia2V5RGF0YSIsImJvb2ttYXJrIiwiaWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJibSIsIndpbmRvdyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsImFjdGl2YXRlIiwicmVnaXN0ZXJIYW5kbGVyIiwicmVtb3ZlTGlzdGVuZXJzIiwiYWRkTGlzdGVuZXIiLCJidXR0b24iLCJ0YXJnZXQiLCJjb250YWlucyIsImdldEF0dHJpYnV0ZSIsIl9NQVJLIiwibWFya2VyIiwia2V5IiwicHJlU2V0dGluZ3MiLCJzZWxlY3Rpb24iLCJkZWZhdWx0cyIsInN0eWxlIiwiY29uZHMiLCJ0ZXh0Iiwibm90ZSIsImQiLCJoYXNPd25Qcm9wZXJ0eSIsImlkY291bnQiLCJzaW1wbGUiLCJyYW5nZSIsInN0YXJ0T2Zmc2V0IiwiZW5kT2Zmc2V0IiwiY29udGFpbmVycyIsImFuY2hvck5vZGVQb3NpdGlvbiIsImZvY3VzTm9kZVBvc2l0aW9uIiwibm9kZXMiLCJuIiwiY3JlYXRlV3JhcHBlcnMiLCJpIiwibGFzdEluZGV4Iiwibm9kZSIsInNlbGVjdE5vZGVDb250ZW50cyIsInNldFN0YXJ0Iiwic2V0RW5kIiwic3Vycm91bmRDb250ZW50cyIsInB1c2giLCJwYXJlbnROb2RlIiwibm9ybWFsaXplIiwiZGVmaW5lUG9zaXRpb24iLCJzZXRCb29rbWFyayIsImRlc2NyaWJlIiwicmVnaXN0ZXJDbGlja0xpc3RlbmVycyIsIndyYXBwZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZW1pdCIsImluY2x1ZGluZ09mZnNldHMiLCJmaXJzdFdyYXBwZXIiLCJsYXN0V3JhcHBlciIsIndoaWNoQ2hpbGQiLCJwcmV2aW91c1NpYmxpbmciLCJub2RlVHlwZSIsImRhdGEiLCJjb250YWluZXIiLCJyZXBsYWNlQ2hpbGQiLCJmaXJzdENoaWxkIiwic2VsZiIsImNoaWxkTm9kZXMiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImNvbGxlY3ROb2RlcyIsImNvbGxhcHNlVG9TdGFydCIsImNyZWF0ZSIsInBhcmVudCIsImNoaWxkIiwiaW5jbHVkaW5nVGV4dE5vZGVzIiwiY2hpbGRyZW4iLCJjIiwibnVtYmVyIiwiaGFzTm90ZSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpMThuIiwiZ2V0TWVzc2FnZSIsIl9kZXNjcmliZV9QREYiLCJfZGVzY3JpYmUiLCJzdGFydCIsInN0YXJ0Q29udGFpbmVyIiwiZW5kIiwiZW5kQ29udGFpbmVyIiwic2luZ2xlTm9kZSIsInBhcmVudElzVE0iLCJoYXNBdHRyaWJ1dGUiLCJncmFtcGEiLCJncmFuZGdyYW1wYSIsImZUTlAiLCJvIiwibjEiLCJub2RlTmFtZSIsInAxIiwibjIiLCJwMiIsInAzIiwicDQiLCJNIiwicmciLCJleHRyZW1lcyIsIm9mZnNldHMiLCJwYWdlcyIsImNsYXNzTmFtZSIsImlzVGV4dCIsImZvckVhY2giLCJwYWdlSW50ZXJzZWN0aW9uIiwiZG9uZSIsInVuZG9uZSIsInJlbW92ZWRCb29rbWFyayIsInVwZGF0ZUlEIiwibWFya3MiLCJsb3N0IiwiaWRzIiwiTWF0aCIsIm1heCIsImFwcGx5IiwicmVzZXRJRCIsInVuZG8iLCJub0F1dG9zYXZlIiwicG9wIiwidW5kb0Jvb2ttYXJrIiwicmVkbyIsImN1dE91dCIsImwiLCJ0b0JlUmVtb3ZlZCIsImluZGljZXMiLCJzbWFsbGVzdElEIiwiZmluZEluZGljZXNPZkFmZmVjdGVkTWFya3MiLCJqIiwieCIsIm1hcmtzSW50ZXJzZWN0IiwiaW5jbHVkZXMiLCJzb3J0Iiwic2hpZnQiLCJtaW4iLCJzcGxpY2UiLCJnZXRCeUlkIiwic3BsaXQiLCJwb3NpdGlvbiIsImluZGV4T2YiLCJyZXN1bWUiLCJzYXZlIiwicmVxdWVzdCIsImdyYW50ZWQiLCJzdWIiLCJwcm9tcHQiLCJyZXRyaWV2ZUVudHJ5IiwiY29uZmlybWVkIiwiY29uZmlybSIsInN0b3JlIiwicmVjcmVhdGUiLCJvbkZpbmlzaGVkUmVzdG9yYXRpb24iLCJzb3J0QnlJZCIsInNjcm9sbFRvQm9va21hcmsiLCJhZGROb3RlIiwiZmluZE1hcmsiLCJtIiwic2V0IiwicmVtb3ZlQm9va21hcmsiLCJwb3MiLCJtYXJrMSIsIm1hcmsyIiwiaWQxIiwiaWQyIiwid3JhcHBlcnMxIiwidzEiLCJ3cmFwcGVyczIiLCJ3MiIsInRtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvbk1hcmtlcktleSIsInByZXZlbnREZWZhdWx0Iiwib25Ib3RrZXkiLCJzdG9wUHJvcGFnYXRpb24iLCJjb2xsZWN0TWFya3MiLCJsYXN0IiwiRGF0ZSIsImdldFRpbWUiLCJib29rbWFya2VkIiwidGl0bGUiLCJjb3VudCIsImZpcnN0IiwidXJsIiwiVVJMIiwic3luY2VkIiwib2xkTWFya3MiLCJrRCIsIkJPRFkiLCJib2R5IiwiRE9NIiwiY2xpY2siLCJrZXl1cCIsImFkZExpc3RlbmVyc01hbnVhbGx5IiwiZWwiLCJtYXJrQ2xpY2tIYW5kbGVyIiwidmlzaWJsZSIsInJlY2VudGx5VXBkYXRlZCIsImNyZWF0ZU5vdGVFbGVtZW50IiwiYWRkTGlzdGVuZXJzIiwiYWRkTWFya0xpc3RlbmVycyIsImRlbCIsInAiLCJ0ZXh0RWxlbWVudCIsImRlbFRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm1pblRleHQiLCJhcHBlbmRDaGlsZCIsInZhbHVlIiwiYXR0ZW1wdFVwZGF0ZSIsIl9kZWxldGUiLCJoaWRlIiwicmVtb3ZlTWFya0xpc3RlbmVycyIsImZvcmNlIiwidXBkYXRlIiwic2V0VGltZW91dCIsInNob3ciLCJnZXRQb3NpdGlvbiIsImlubmVyV2luZG93V2lkdGgiLCJpbm5lcldpZHRoIiwibGVmdCIsInRvcCIsIm9mZnNldCIsImJyaW5nVXBGcm9udCIsIkFycmF5IiwiZnJvbSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiekluZGV4IiwicmVtb3ZlQ2hpbGQiLCJoYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUF0dHJpYnV0ZSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYWdlWU9mZnNldCIsImNsaWVudFRvcCIsInBhZ2VYT2Zmc2V0IiwiY2xpZW50TGVmdCIsImhlaWdodCIsIkRPQyIsIm5vdGVzIiwidG9nZ2xlIiwicmVzdG9yZSIsImFkZEFuZFNob3ciLCJyZW1vdmVOb3RlU3RvcmFnZSIsImlzRW1wdHkiLCJyZW1vdmVOb3RlIiwidG9nZ2xlQWxsIiwiY29uZGl0aW9uIiwib2JqIiwiT2JqZWN0Iiwia2V5cyIsImtleWRvd24iLCJzZWxlY3Rpb25jaGFuZ2UiLCJzZXR1cCIsImlzUGRmIiwicmVhZHlTdGF0ZSIsImlzSUZyYW1lIiwic2V0VVJMIiwiY2hlY2tVUkwiLCJoYXNoIiwibG9jYXRpb24iLCJoYXNoSWR4Iiwic3Vic3RyIiwicGF0aG5hbWUiLCJpc0VkaXRhYmxlIiwidGFnTmFtZSIsImNvbnRlbnRFZGl0YWJsZSIsImRlbGVnYXRlIiwidG9Mb3dlckNhc2UiLCJtb2RLZXkiLCJtZXRhS2V5IiwiY3RybEtleSIsImFsdEtleSIsInNoaWZ0S2V5IiwiZnVuY3Rpb25LZXlzIiwiZGVmYXVsdE1hcmtlcnMiLCJnZXRTZWxlY3Rpb24iLCJpc0NvbGxhcHNlZCIsImxvb2t1cCIsInNldHRpbmciLCJzaG9ydGN1dCIsInMxIiwiczIiLCJzZWxlY3RlZFRleHQiLCJ0b1N0cmluZyIsIm9uVXJsRm91bmQiLCJ1bnNldCIsInF1ZXJ5U2VsZWN0b3IiLCJvblNlbGVjdGlvbkNoYW5nZSIsIlJlc3RvcmVyIiwicXVldWUiLCJjYWNoZSIsInJlc3RvcmVkIiwiYXJlYSIsInBoYXNlIiwiaW5pdCIsIm5vdyIsInBvc3Rwb25lZCIsImNvbnZlcnREZXNjcmlwdGlvbiIsImNyZWF0ZVRlbXBPYmplY3QiLCJyZXBvcnQiLCJjb252ZXJ0ZWRDb25kcyIsImZpcnN0Tm9kZU5hbWUiLCJmaXJzdFBhcmVudE5vZGVOYW1lIiwiZmlyc3RUZXh0Tm9kZVBvc2l0aW9uIiwiZmlyc3ROb2RlUG9zaXRpb24iLCJmaXJzdFBhcmVudE5vZGVQb3NpdGlvbiIsImZpcnN0R3JhbXBhTm9kZVBvc2l0aW9uIiwidHJpbW1lZFRleHQiLCJzcXVlZXplIiwidGVtcCIsInRyaW1tZWRUZXh0TGVuZ3RoIiwicG9zc2libGVQb3NpdGlvbnMiLCJwb3NzaWJsZVN0YXJ0Tm9kZXMiLCJwb3NzaWJsZUVuZHMiLCJwb3NzaWJsZUZvY3VzT2Zmc2V0cyIsInNvcnRRdWV1ZUJ5SWQiLCJzZXRCb2R5U2VsZWN0aW9uIiwiZ2V0VGV4dFBvc2l0aW9ucyIsInBvc3Rwb25lT3ZlcmxhcHBpbmdzIiwiZmluZFBvc3NpYmxlRXh0cmVtYSIsInJ1bGVPdXRNdWx0aXBsZXMiLCJyZWNyZWF0ZU1hcmtzIiwicmVzIiwidCIsInRyaW1tZWRTZWxlY3Rpb25UZXh0IiwiYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyIsImVuZFBvc2l0aW9ucyIsIm1hcmtUZW1wIiwiZW5kUG9zaXRpb24iLCJzb3J0UG9zc2libGVTdGFydFBvc2l0aW9ucyIsIm1heFBvc2l0aW9uIiwicG9zaXRpb25zIiwicG9zMSIsInBvczIiLCJtMSIsIm0yIiwicG9zdHBvbmUiLCJjdXRPdXRGb3IiLCJhbHJlYWR5SW5jbHVkZWQiLCJib2R5VGV4dE5vZGVzIiwic2F0aXNmaWVkIiwiY2hhcnMiLCJuZXh0U3RhcnRGb3VuZCIsImVuZGluZ3NJblRoaXNOb2RlIiwibm9kZXNUZXh0Iiwibm9kZXNUZXh0TGVuZ3RoIiwiZGlmZiIsInN0YXJ0UG9zaXRpb24iLCJmIiwicSIsInBvc3NpYmxlRm9jdXNPZmZzZXQiLCJzdGFydEZvdW5kRm9yIiwiaGFzRW5kaW5nc0luVGhpc05vZGUiLCJlbmRGb3VuZEZvciIsInNhdGlzZmllc0Rlc2NyaXB0aW9uIiwiZmluZEZvY3VzT2Zmc2V0IiwibWF0Y2hlcyIsImZhaWxlZCIsInN0YXJ0Tm9kZSIsInNldE1hdGNoaW5nRW5kIiwiZW5kTm9kZSIsImZvY3VzT2Zmc2V0IiwiZGVzY3JpcHRpb24iLCJyZWxldmFudE5vZGVUZXh0Iiwic3Vic3RyaW5nIiwidHJpbSIsIm1hcmtUZXh0IiwidGV4dHNNYXRjaCIsIm5vZGVUZXh0IiwiY291bnRlciIsInRlc3QiLCJzZWwiLCJpZENvdW50IiwiUiIsInBhZ2VDb250YWluZXJzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm1hcmtlZFBhZ2VzIiwiY3VyclBhZ2UiLCJjdXJyQ29udGFpbmVyIiwic3RhcnRQYWdlIiwiZW5kUGFnZSIsInVuaXF1ZSIsImEiLCJiIiwiYXJyIiwibGVuIiwicHJvY2VzcyIsInRleHRFeGlzdHNPblBhZ2UiLCJkaXZzT25QYWdlIiwibGFzdENoaWxkIiwibW9uaXRvckxvYWRpbmdQcm9jZXNzIiwic2V0SW50ZXJ2YWwiLCJpZHgiLCJrIiwiYm94IiwidGV4dEJveGVzIiwiY2xlYXJJbnRlcnZhbCIsInByb2Nlc3NQZXVBUGV1IiwicHJveHkiLCJwYWdlIiwicGFnZVRleHQiLCJmdW5jIiwiY2IiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJ0aW1lMCIsInJlYyIsInJlcGxhY2UiLCJjb250ZXh0IiwiY3VycmVudENoaWxkIiwibGwiLCJfU0VMRUNUSU9OIiwicmFuZ2VDb3VudCIsImdldFJhbmdlQXQiLCJkZWZpbmVkIiwicmVkdWNlVG9PbmVSYW5nZSIsInJldHJpZXZlVGV4dCIsImFkanVzdF9QREYiLCJhZGp1c3QiLCJzZWxlY3RBbGxDaGlsZHJlbiIsInByb3BzIiwiaXNTaW1wbGUiLCJhbmNob3JOb2RlIiwiZm9jdXMiLCJmb2N1c05vZGUiLCJpc0JhY2t3YXJkcyIsInJldmVyc2UiLCJmaXJzdFRleHROb2RlIiwibGFzdFRleHROb2RlIiwidHJpbUxlZnQiLCJ0cmltUmlnaHQiLCJ3aG9sZURvY3VtZW50IiwiZ2V0Q29tbW9uQW5jZXN0b3JDb250YWluZXIiLCJpdGVyYXRvciIsImNyZWF0ZU5vZGVJdGVyYXRvciIsIk5vZGVGaWx0ZXIiLCJTSE9XX1RFWFQiLCJhY2NlcHROb2RlIiwiY29udGFpbnNOb2RlIiwiaXNCbGFuayIsImhhc05vcm1hbFBhcmVudCIsInRlbXBSYW5nZSIsImNyZWF0ZVJhbmdlIiwicGFyZW50Tm9kZXMiLCJ0ZXh0Tm9kZSIsImZpcnN0Tm9kZSIsImxhc3ROb2RlIiwibmV4dE5vZGUiLCJnZXRSZWR1Y2VkTm9kZUNvbGxlY3Rpb24iLCJjb2xsZWN0UGFyZW50Tm9kZXMiLCJhbmNob3JPZmZzZXQiLCJwYXJlbnRzIiwibm9kZVRleHRzIiwiam9pbiIsIm5vZGUxIiwibm9kZTIiLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsInJhbmdlMCIsImxhc3RSYW5nZSIsInRhZyIsInRvVXBwZXJDYXNlIiwiaXNJbnNpZGVTVkciLCJzZWFyY2giLCJuZXh0U2libGluZyIsIm5vdGVzQnRuIiwiYm1CdG4iLCJub3Rlc0J0bkFjdGl2ZSIsImJtQnRuQWN0aXZlIiwiY3JlYXRlRWwiLCJjcmVhdGVCdG5zIiwidXBkYXRlUG9zaXRpb24iLCJhZGRCdG4iLCJidG4iLCJyZW1vdmVCdG4iLCJtYXAiLCJvbk5vdGVBZGRlZCIsIm9uTGFzdE5vdGVSZW1vdmVkIiwib25Cb29rbWFya0FkZGVkIiwib25Cb29rbWFya1JlbW92ZWQiLCJ0b2dnbGVOb3RlcyIsInR5cGUiLCJPTkVPRkYiLCJfQ09QWSIsIl9HRVRfQUNUSVZFX1RBQiIsIl9FWFRFTkQiLCJfTU9EVUxFIiwiX0RPTU1PRFVMRSIsIl9QT1JUIiwiX0wxME4iLCJfRVJST1JUUkFDS0VSIiwib3JpZ2luYWwiLCJjbG9uZSIsImlzQXJyYXkiLCJfYm91bmQiLCJfZXh0cmFCb3VuZCIsInN1Yk1hcCIsInNlbGVjdG9yIiwiX3NlbCIsImlzSWQiLCJpc0NsYXNzIiwiaXNEb2MiLCJkb21FdmVudHMiLCJnZW5lcmFsSGFuZGxlciIsIl9leHRyYSIsImZpbGUiLCJlcnJvciIsImZpbGVuYW1lIiwibWVzc2FnZSIsImxpbmVubyIsImNvbG5vIiwidGltZSIsIm9iajEiLCJvYmoyIiwidGFicyIsInF1ZXJ5IiwiY3VycmVudFdpbmRvdyIsInRyYW5zbGF0ZURvY3VtZW50IiwiY2FwdHVyZSIsInBhc3NpdmUiLCJvbmNlIiwiZGF0YXNldCIsImRvY3VtZW50RWxlbWVudCIsImdldFVJTGFuZ3VhZ2UiLCJ0ZXh0RWxlbWVudHMiLCJhdHRyRWxlbWVudHMiLCJsMTBuSWQiLCJ0ZXh0Q29udGVudCIsImwxMG5BdHRyIiwiYXR0ciIsInRvcGljcyIsImV2ZW50IiwiYXJncyIsInRvcGljIiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwiZXYiLCJ3YWl0IiwiY2F0Y2giLCJhcmdzMSIsImFyZ3MyIiwiZW52RXZlbnRzIiwicG9ydCIsIm9uTWVzc2FnZSIsInBhc3NNZXNzYWdlIiwiaW5pdFBvcnRpbmciLCJvbmVPZmZFdmVudHMiLCJjb25uZWN0aW9uQmFzZWRFdmVudHMiLCJDT05ORUNUSU9OIiwicG9zdE1lc3NhZ2UiLCJyZXEiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJtc2ciLCJsYXN0QXJnIiwidGFiIiwicG9zdHBvbmVDb25uZWN0aW9uIiwiY29ubmVjdCIsImFkZENvbm5lY3Rpb25MaXN0ZW5lcnMiLCJvbkRpc2Nvbm5lY3QiLCJvbkNvbm5lY3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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S0FBS0EsSUFBTCxDQUFVTyxXQUFWLENBQXNCSSxHQUF0QjtBQUNoQjs7O2tDQUNhO0FBQ1osVUFBSSxDQUFDLEtBQUtHLGtCQUFWLEVBQThCO0FBQzVCLGFBQUtDLE9BQUw7QUFDQSxhQUFLQyxzQkFBTDtBQUNELE9BSEQsTUFHTztBQUNMLGFBQUtBLHNCQUFMLENBQTRCLEtBQUtoSyxLQUFMLENBQVcsSUFBWCxFQUFpQixLQUFLK0osT0FBdEIsQ0FBNUI7QUFDRDtBQUNGOzs7OEJBQ1M7QUFBQTs7QUFDUixVQUFNZixPQUFPLEtBQUtBLElBQUwsR0FBWSxLQUFLQSxJQUFMLElBQWE3bEIsUUFBUXFsQixPQUFSLENBQWdCdUIsT0FBaEIsQ0FBd0IsRUFBRWxuQixNQUFNLEtBQUtBLElBQWIsRUFBeEIsQ0FBdEM7QUFDQW1tQixXQUFLaUIsWUFBTCxDQUFrQjlpQixXQUFsQixDQUE4QjtBQUFBLGVBQU0sT0FBSzZoQixJQUFMLEdBQVksSUFBbEI7QUFBQSxPQUE5QjtBQUNEOzs7MkNBQ3NCNUksRSxFQUFJO0FBQUE7O0FBQ3pCamQsY0FBUXFsQixPQUFSLENBQWdCMEIsU0FBaEIsQ0FBMEIvaUIsV0FBMUIsQ0FBc0MsZ0JBQVE7QUFDNUM2aEIsYUFBS0MsU0FBTCxDQUFlOWhCLFdBQWYsQ0FBMkIsT0FBSzZZLEtBQUwsU0FBaUIsT0FBS2tKLFdBQXRCLENBQTNCO0FBQ0EsU0FBQzlJLEVBQUQsSUFBT0EsSUFBUDtBQUNELE9BSEQ7QUFJRCIsImZpbGUiOiJjb250ZW50L3BhZ2UtaW5qZWN0aW9ucy9pbmplY3Rpb24ud3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NvbnRlbnQvcGFnZS1pbmplY3Rpb25zL2pzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3RvZ2dsZWQ6c3luYyc6ICdzZXRBcmVhcydcclxuICAgIH1cclxuICB9LFxyXG4gIGluaXRpYWxpemVkOiBmYWxzZSxcclxuICBhcmVhX3NldHRpbmdzOiAnc3luYycsXHJcbiAgYXJlYV9oaXN0b3J5OiAnc3luYycsXHJcbiAgYXJlYV9lbnRyeTogJ3N5bmMnLFxyXG5cclxuICBwZGY6IGZhbHNlLFxyXG4gIGlmcmFtZTogZmFsc2UsXHJcbiAgbmFtZTogdW5kZWZpbmVkLFxyXG4gIGlzTmV3OiB0cnVlLFxyXG4gIGVudHJ5OiBudWxsLFxyXG4gIHRtaWQ6ICcnLFxyXG5cclxuICBzZXRBcmVhcygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnN5bmMpIHtcclxuICAgICAgICB0aGlzLmFyZWFfc2V0dGluZ3MgPSBzdG9yYWdlLnN5bmMuc2V0dGluZ3MgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgICAgIHRoaXMuYXJlYV9oaXN0b3J5ID0gc3RvcmFnZS5zeW5jLmhpc3RvcnkgPyAnc3luYycgOiAnbG9jYWwnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBnZXQoZmllbGQgPSAnc3RvcmFnZScpIHtcclxuICAgIGNvbnN0IG1ldGggPSB0aGlzWydfZ2V0XycgKyBmaWVsZF07XHJcbiAgICBpZiAoIW1ldGgpIHRocm93KCdmaWVsZCAnICsgZmllbGQgKyAnIGRvZXNuXFwndCBleGlzdCcpO1xyXG5cclxuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHRoaXMuc2V0QXJlYXMoKS50aGVuKCgpID0+IHRoaXNbJ19nZXRfJyArIGZpZWxkXSgpKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzWydfZ2V0XycgKyBmaWVsZF0oKTtcclxuICB9LFxyXG5cclxuICBfZ2V0X2hpc3RvcnkoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLnN5bmMuZ2V0KCkudGhlbihzeW5jZWRTdG9yYWdlID0+IHtcclxuICAgICAgY29uc3Qgc3luY2VkSGlzdG9yeSA9IHN5bmNlZFN0b3JhZ2UuaGlzdG9yeTtcclxuXHJcbiAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCkudGhlbihsb2NhbFN0b3JhZ2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsSGlzdG9yeSA9IGxvY2FsU3RvcmFnZS5oaXN0b3J5O1xyXG4gICAgICAgIGlmICghc3luY2VkSGlzdG9yeSkgcmV0dXJuIGxvY2FsSGlzdG9yeTtcclxuICAgICAgICBpZiAoIWxvY2FsSGlzdG9yeSkgcmV0dXJuIHN5bmNlZEhpc3Rvcnk7XHJcblxyXG4gICAgICAgIHN5bmNlZEhpc3Rvcnkub3JkZXIgPSBzeW5jZWRIaXN0b3J5Lm9yZGVyLmNvbmNhdChsb2NhbEhpc3Rvcnkub3JkZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGUgaW4gbG9jYWxIaXN0b3J5LmVudHJpZXMpIHN5bmNlZEhpc3RvcnkuZW50cmllc1tlXSA9IGxvY2FsSGlzdG9yeS5lbnRyaWVzW2VdO1xyXG5cclxuICAgICAgICByZXR1cm4gc3luY2VkSGlzdG9yeTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfc2V0dGluZ3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MpO1xyXG4gIH0sXHJcbiAgX2dldF9ibWljb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy5ibWljb247XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIF9nZXRfbm90ZWljb24oKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy5ub3RlaWNvbjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9ub3Rlb25jbGljaygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2Uuc2V0dGluZ3MpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5taXNjLm5vdGVvbmNsaWNrO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X3RtdWlwb3MoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0dGluZ3MubWlzYy50bXVpcG9zO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X2F1dG9zYXZlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICByZXR1cm4gc3RvcmFnZS5zZXR0aW5ncy5oaXN0b3J5LmF1dG9zYXZlO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBfZ2V0X21hcmtlcnMoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHN0b3JhZ2Uuc2V0dGluZ3MubWFya2Vycyk7XHJcbiAgfSxcclxuICBfZ2V0X3Nob3J0Y3V0cygpIHtcclxuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2VbdGhpcy5hcmVhX3NldHRpbmdzXS5nZXQoKS50aGVuKHN0b3JhZ2UgPT4gc3RvcmFnZS5zZXR0aW5ncy5zaG9ydGN1dHMpO1xyXG4gIH0sXHJcbiAgX2dldF9tb2RlKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZVt0aGlzLmFyZWFfc2V0dGluZ3NdLmdldCgpLnRoZW4oc3RvcmFnZSA9PiB7XHJcbiAgICAgIGlmICghc3RvcmFnZSB8fCAhc3RvcmFnZS5zZXR0aW5ncyB8fCBzdG9yYWdlLnNldHRpbmdzLmFkZG9uLmFjdGl2ZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgX2dldF9uYW1pbmcoKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlW3RoaXMuYXJlYV9zZXR0aW5nc10uZ2V0KCkudGhlbihzdG9yYWdlID0+IHtcclxuICAgICAgaWYgKCFzdG9yYWdlIHx8ICFzdG9yYWdlLnNldHRpbmdzKSByZXR1cm4gJ2N1c3RvbSc7XHJcbiAgICAgIHJldHVybiBzdG9yYWdlLnNldHRpbmdzLmhpc3RvcnkubmFtaW5nO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgX01PRFVMRSB9IGZyb20gJy4vLi4vLi4vdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi9fc3RvcmUnXHJcblxyXG5pbXBvcnQgX1BBR0UgZnJvbSAnLi9tb2R1bGVzL3BhZ2UnXHJcbmltcG9ydCBfQ1RNIGZyb20gJy4vbW9kdWxlcy9jb250ZXh0bWVudSdcclxuaW1wb3J0IF9NQVJLRVIgZnJvbSAnLi9tb2R1bGVzL21hcmtlcidcclxuaW1wb3J0IF9SRVNUT1JFUiBmcm9tICcuL21vZHVsZXMvcmVzdG9yZXInXHJcbmltcG9ydCBfTk9URVMgZnJvbSAnLi9tb2R1bGVzL25vdGVzJ1xyXG5pbXBvcnQgX1RNVUkgZnJvbSAnLi9tb2R1bGVzL3RtdWknXHJcblxyXG5uZXcgX01PRFVMRSh7XHJcbiAgZXZlbnRzOiB7XHJcbiAgICBFTlY6IHtcclxuICAgICAgJ3N0YXJ0ZWQ6YXBwJzogJ2F1dG9pbml0JyxcclxuICAgICAgJ3RvZ2dsZWQ6YWRkb24nOiAncG93ZXInXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYm9vdHN0cmFwcGVkOiBmYWxzZSxcclxuXHJcbiAgYXV0b2luaXQoKSB7XHJcbiAgICBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoKS50aGVuKHN0b3JhZ2UgPT4ge1xyXG4gICAgICBpZiAoc3RvcmFnZSAmJiBzdG9yYWdlLnNldHRpbmdzICYmIHN0b3JhZ2UuaGlzdG9yeSAmJiBzdG9yYWdlLnNldHRpbmdzLmFkZG9uLmFjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMucG93ZXIodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgcG93ZXIob24pIHtcclxuICAgIGlmICghb24gfHwgdGhpcy5ib290c3RyYXBwZWQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBfUEFHRSgpO1xyXG4gICAgX0NUTSgpO1xyXG4gICAgX1JFU1RPUkVSKCk7XHJcbiAgICBfTUFSS0VSKCk7XHJcbiAgICBfTk9URVMoKTtcclxuICAgIF9UTVVJKCk7XHJcblxyXG4gICAgdGhpcy5ib290c3RyYXBwZWQgPSB0cnVlO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCAnLi8uLi9zYXNzL21haW4uc2NzcydcclxuXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vLi4vdXRpbHMnXHJcbmltcG9ydCAnLi9wb3J0J1xyXG5pbXBvcnQgJy4vX3N0b3JlJ1xyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJ1xyXG4iLCJpbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX0JPT0tNQVJLIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm1hcmsgPSBudWxsO1xyXG4gICAgdGhpcy5hbmNob3IgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgc2V0KG1hcmspIHtcclxuICAgIG1hcmsgPSBtYXJrIHx8IHRoaXMubWFyaztcclxuXHJcbiAgICBsZXQgd3JhcHBlcnMgPSBtYXJrLndyYXBwZXJzLFxyXG4gICAgICAgIHcgPSB3cmFwcGVycy5sZW5ndGgsXHJcbiAgICAgICAgYW5jaG9yID0gd3JhcHBlcnNbMF07XHJcblxyXG4gICAgbWFyay5rZXlEYXRhLmJvb2ttYXJrID0gdHJ1ZTtcclxuICAgIGFuY2hvci5pZCA9ICd0ZXh0bWFya2VyLWJvb2ttYXJrLWFuY2hvcic7XHJcblxyXG4gICAgd2hpbGUgKHctLSlcclxuICAgICAgd3JhcHBlcnNbd10uY2xhc3NMaXN0LmFkZCgndGV4dG1hcmtlci1ib29rbWFyaycpO1xyXG5cclxuICAgIHRoaXMubWFyayA9IG1hcms7XHJcbiAgICB0aGlzLmFuY2hvciA9IGFuY2hvcjtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgbGV0IG1hcmsgPSB0aGlzLm1hcmssXHJcbiAgICAgICAgYW5jaG9yID0gdGhpcy5hbmNob3IsXHJcbiAgICAgICAgd3JhcHBlcnMgPSBtYXJrLndyYXBwZXJzLFxyXG4gICAgICAgIHcgPSB3cmFwcGVycy5sZW5ndGg7XHJcblxyXG4gICAgYW5jaG9yLmlkID0gJyc7XHJcbiAgICBtYXJrLmtleURhdGEuYm9va21hcmsgPSBmYWxzZTtcclxuXHJcbiAgICB3aGlsZSAody0tKVxyXG4gICAgICB3cmFwcGVyc1t3XS5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0bWFya2VyLWJvb2ttYXJrJyk7XHJcbiAgfVxyXG4gIHNjcm9sbEludG9WaWV3KGJtKSB7XHJcbiAgICBpZiAoYm0gfHwgKGJtID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0bWFya2VyLWJvb2ttYXJrLWFuY2hvcicpKSlcclxuICAgICAgYm0uc2Nyb2xsSW50b1ZpZXcoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgX0RPTU1PRFVMRSB9IGZyb20gJy4vLi4vLi4vLi4vdXRpbHMnXHJcbmltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd0b2dnbGVkOmFkZG9uJzogJ2FjdGl2YXRlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZSh0cnVlKTtcclxuICAgIH0sXHJcblxyXG4gICAgYWN0aXZhdGUob24pIHtcclxuICAgICAgaWYgKG9uICYmICF0aGlzLmFjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJIYW5kbGVyKCk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCFvbiAmJiB0aGlzLmFjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlZ2lzdGVySGFuZGxlcigpIHtcclxuICAgICAgdGhpcy5hZGRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XHJcbiAgICAgICAgaWYgKGUuYnV0dG9uID09PSAyKSB7XHJcbiAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0ZXh0bWFya2VyLWhpZ2hsaWdodCcpKSB7XHJcbiAgICAgICAgICAgIF9TVE9SRS50bWlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIF9TVE9SRS50bWlkID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB3aW5kb3cuZG9jdW1lbnQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfTUFSSyB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG1hcmtlciwga2V5LCBwcmVTZXR0aW5ncykge1xyXG4gICAgbGV0IHNlbGVjdGlvbiwgZGVmYXVsdHM7XHJcblxyXG5cdFx0dGhpcy5tYXJrZXIgPSBtYXJrZXI7XHJcblx0XHRzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbiA9IG1hcmtlci5zZWxlY3Rpb247XHJcblxyXG4gICAgZGVmYXVsdHMgPSB7XHJcbiAgICAgIHN0eWxlOiAnJyxcclxuICAgICAgYm9va21hcms6IGZhbHNlLFxyXG4gICAgICBjb25kczogbnVsbCxcclxuICAgICAgdGV4dDogc2VsZWN0aW9uLnRleHQsXHJcbiAgICAgIG5vdGU6ICcnXHJcbiAgICB9O1xyXG4gICAgZm9yIChsZXQgZCBpbiBkZWZhdWx0cykge1xyXG4gICAgICBpZiAoIXByZVNldHRpbmdzLmhhc093blByb3BlcnR5KGQpKSB7XHJcbiAgICAgICAgcHJlU2V0dGluZ3NbZF0gPSBkZWZhdWx0c1tkXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJlU2V0dGluZ3MuaWQgPSBwcmVTZXR0aW5ncy5pZCB8fCArK21hcmtlci5pZGNvdW50O1xyXG5cdFx0dGhpcy5pZCA9IHByZVNldHRpbmdzLmlkO1xyXG5cdFx0dGhpcy5zaW1wbGUgPSBzZWxlY3Rpb24uc2ltcGxlO1xyXG5cclxuXHRcdGxldCByYW5nZSA9IHRoaXMucmFuZ2UgPSBzZWxlY3Rpb24ucmFuZ2U7XHJcblxyXG5cdFx0dGhpcy5zdGFydE9mZnNldCA9IHJhbmdlLnN0YXJ0T2Zmc2V0O1xyXG5cdFx0dGhpcy5lbmRPZmZzZXQgPSByYW5nZS5lbmRPZmZzZXQ7XHJcblxyXG5cdFx0dGhpcy53cmFwcGVycyA9IG51bGw7XHJcbiAgICB0aGlzLmNvbnRhaW5lcnMgPSBbXTtcclxuXHJcblx0XHR0aGlzLmFuY2hvck5vZGVQb3NpdGlvbiA9IG51bGw7XHJcblx0XHR0aGlzLmZvY3VzTm9kZVBvc2l0aW9uID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLmtleURhdGEgPSB7XHJcblx0XHRcdGlkOiBwcmVTZXR0aW5ncy5pZCxcclxuXHRcdFx0a2V5OiBrZXksXHJcblx0XHRcdHN0eWxlOiBwcmVTZXR0aW5ncy5zdHlsZSxcclxuXHRcdFx0Y29uZHM6IHByZVNldHRpbmdzLmNvbmRzLFxyXG5cdFx0XHR0ZXh0OiBwcmVTZXR0aW5ncy50ZXh0LFxyXG5cdFx0XHRib29rbWFyazogcHJlU2V0dGluZ3MuYm9va21hcmssXHJcbiAgICAgIG5vdGU6IHByZVNldHRpbmdzLm5vdGVcclxuXHRcdH07XHJcbiAgfVxyXG5cclxuXHRjcmVhdGUocmFuZ2UpIHtcclxuICAgIHJhbmdlID0gcmFuZ2UgfHwgdGhpcy5yYW5nZTtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbixcclxuICAgICAgICBzdHlsZSA9IHRoaXMua2V5RGF0YS5zdHlsZSxcclxuICAgICAgICBub2RlcyA9IHNlbGVjdGlvbi5ub2RlcyxcclxuICAgICAgICBuID0gbm9kZXMubGVuZ3RoLFxyXG4gICAgICAgIHdyYXBwZXJzID0gdGhpcy53cmFwcGVycyA9IHRoaXMud3JhcHBlcnMgfHwgdGhpcy5jcmVhdGVXcmFwcGVycyhzdHlsZSwgbiksXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgbGFzdEluZGV4ID0gbiAtIDEsXHJcbiAgICAgICAgbm9kZTtcclxuXHJcbiAgICBmb3IgKDsgaSA8IG47IGkrKykge1xyXG4gICAgICBub2RlID0gbm9kZXNbaV07XHJcbiAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhub2RlKTtcclxuICAgICAgaWYgKCFpKSByYW5nZS5zZXRTdGFydChub2RlLCB0aGlzLnN0YXJ0T2Zmc2V0KTtcclxuXHJcbiAgICAgIGlmIChpID09PSBsYXN0SW5kZXgpXHJcbiAgICAgICAgcmFuZ2Uuc2V0RW5kKG5vZGUsIHRoaXMuZW5kT2Zmc2V0KTtcclxuXHJcbiAgICAgIHJhbmdlLnN1cnJvdW5kQ29udGVudHMod3JhcHBlcnNbaV0pO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lcnMucHVzaCh3cmFwcGVyc1tpXS5wYXJlbnROb2RlKTtcclxuXHJcbiAgICAgIG5vZGUucGFyZW50Tm9kZS5ub3JtYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRlZmluZVBvc2l0aW9uKGxhc3RJbmRleCk7XHJcblxyXG4gICAgaWYgKHRoaXMua2V5RGF0YS5ib29rbWFyaykgdGhpcy5tYXJrZXIuc2V0Qm9va21hcmsodGhpcywgZmFsc2UpO1xyXG5cclxuICAgIGlmICghdGhpcy5rZXlEYXRhLmNvbmRzKSB0aGlzLmRlc2NyaWJlKCk7XHJcblxyXG5cdFx0dGhpcy5yZWdpc3RlckNsaWNrTGlzdGVuZXJzKCk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG4gIHJlZ2lzdGVyQ2xpY2tMaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCB3cmFwcGVycyA9IHRoaXMud3JhcHBlcnM7XHJcbiAgICBmb3IgKGxldCB3cmFwcGVyIG9mIHdyYXBwZXJzKSB7XHJcbiAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBfU1RPUkUudG1pZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpO1xyXG4gICAgICAgIHRoaXMubWFya2VyLmVtaXQoJ2NsaWNrZWQ6bWFyaycsIHtcclxuICAgICAgICAgIGJvb2ttYXJrOiAhIXRoaXMua2V5RGF0YS5ib29rbWFyayxcclxuICAgICAgICAgIG5vdGU6ICEhdGhpcy5rZXlEYXRhLm5vdGVcclxuICAgICAgICB9KTtcclxuICAgICAgfSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBkZWZpbmVQb3NpdGlvbihuLCBpbmNsdWRpbmdPZmZzZXRzKSB7XHJcbiAgICBsZXQgd3JhcHBlcnMgPSB0aGlzLndyYXBwZXJzO1xyXG4gICAgbiA9IHR5cGVvZiBuID09PSAnbnVtYmVyJyA/IG4gOiB3cmFwcGVycy5sZW5ndGggLSAxO1xyXG4gICAgbGV0IGZpcnN0V3JhcHBlciA9IHdyYXBwZXJzWzBdLFxyXG4gICAgICAgIGxhc3RXcmFwcGVyID0gd3JhcHBlcnNbbl07XHJcblxyXG4gICAgdGhpcy5hbmNob3JOb2RlUG9zaXRpb24gPSB0aGlzLndoaWNoQ2hpbGQoZmlyc3RXcmFwcGVyLnBhcmVudE5vZGUsIGZpcnN0V3JhcHBlciwgdHJ1ZSkgLSAxO1xyXG4gICAgdGhpcy5mb2N1c05vZGVQb3NpdGlvbiA9IHRoaXMud2hpY2hDaGlsZChsYXN0V3JhcHBlci5wYXJlbnROb2RlLCBsYXN0V3JhcHBlciwgdHJ1ZSk7XHJcblxyXG4gICAgaWYgKCFsYXN0V3JhcHBlci5wcmV2aW91c1NpYmxpbmcgfHwgbGFzdFdyYXBwZXIucHJldmlvdXNTaWJsaW5nLm5vZGVUeXBlID09PSAzKSB0aGlzLmZvY3VzTm9kZVBvc2l0aW9uIC09IDE7XHJcblxyXG4gICAgaWYgKHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uIDwgMCkgdGhpcy5hbmNob3JOb2RlUG9zaXRpb24gPSAwO1xyXG4gICAgaWYgKHRoaXMuZm9jdXNOb2RlUG9zaXRpb24gPCAwKSB0aGlzLmZvY3VzTm9kZVBvc2l0aW9uID0gMDtcclxuXHJcbiAgICBpZiAoaW5jbHVkaW5nT2Zmc2V0cykge1xyXG4gICAgICB0aGlzLnN0YXJ0T2Zmc2V0ID0gZmlyc3RXcmFwcGVyLnByZXZpb3VzU2libGluZyAmJiBmaXJzdFdyYXBwZXIucHJldmlvdXNTaWJsaW5nLmRhdGEgPyBmaXJzdFdyYXBwZXIucHJldmlvdXNTaWJsaW5nLmRhdGEubGVuZ3RoIDogMDtcclxuICAgICAgdGhpcy5lbmRPZmZzZXQgPSB0aGlzLnNpbXBsZSA/IHRoaXMuc3RhcnRPZmZzZXQgKyB0aGlzLmtleURhdGEudGV4dC5sZW5ndGggOiB0aGlzLmVuZE9mZnNldDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICByZXN1bWUoKSB7XHJcbiAgICB0aGlzLmRlZmluZVBvc2l0aW9uKHVuZGVmaW5lZCwgdHJ1ZSlcclxuICAgICAgICAuZGVzY3JpYmUoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblx0dW5kbygpIHtcclxuXHRcdGxldCBjb250YWluZXJzID0gdGhpcy5jb250YWluZXJzLFxyXG5cdFx0XHRcdHdyYXBwZXJzID0gdGhpcy53cmFwcGVycyxcclxuXHRcdFx0XHR3ID0gd3JhcHBlcnMubGVuZ3RoLFxyXG5cdFx0XHRcdGNvbnRhaW5lciwgd3JhcHBlcjtcclxuXHJcblx0XHR3aGlsZSAody0tKSB7XHJcblx0XHRcdGNvbnRhaW5lciA9IGNvbnRhaW5lcnNbd107XHJcblx0XHRcdHdyYXBwZXIgPSB3cmFwcGVyc1t3XTtcclxuXHRcdFx0Y29udGFpbmVyLnJlcGxhY2VDaGlsZCh3cmFwcGVyLmZpcnN0Q2hpbGQsIHdyYXBwZXIpO1xyXG5cdFx0XHRjb250YWluZXIubm9ybWFsaXplKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblx0cmVkbygpIHtcclxuICAgIGxldCBjb250YWluZXJzID0gdGhpcy5jb250YWluZXJzLFxyXG4gICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLnNlbGYsXHJcbiAgICAgICAgcmFuZ2UgPSB0aGlzLnJhbmdlO1xyXG5cclxuICAgIHJhbmdlLnNldFN0YXJ0KGNvbnRhaW5lcnNbMF0uY2hpbGROb2Rlc1t0aGlzLmFuY2hvck5vZGVQb3NpdGlvbl0sIHRoaXMuc3RhcnRPZmZzZXQpO1xyXG4gICAgcmFuZ2Uuc2V0RW5kKGNvbnRhaW5lcnNbY29udGFpbmVycy5sZW5ndGggLSAxXS5jaGlsZE5vZGVzW3RoaXMuZm9jdXNOb2RlUG9zaXRpb25dLCB0aGlzLmVuZE9mZnNldCk7XHJcblxyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGlvbi5jb2xsZWN0Tm9kZXMoKTtcclxuICAgIHNlbGVjdGlvbi5jb2xsYXBzZVRvU3RhcnQoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUoKTtcclxuXHR9XHJcblx0d2hpY2hDaGlsZChwYXJlbnQsIGNoaWxkLCBpbmNsdWRpbmdUZXh0Tm9kZXMpIHtcclxuXHRcdGlmICghcGFyZW50IHx8ICFjaGlsZCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cdFx0bGV0IGNoaWxkcmVuID0gaW5jbHVkaW5nVGV4dE5vZGVzIHx8IGNoaWxkLm5vZGVUeXBlID09PSAzID8gcGFyZW50LmNoaWxkTm9kZXMgOiBwYXJlbnQuY2hpbGRyZW4sXHJcblx0XHRcdFx0YyA9IGNoaWxkcmVuLmxlbmd0aCxcclxuXHRcdFx0XHRpID0gMDtcclxuXHJcbiAgICBmb3IgKCA7IGkgPCBjOyBpKyspXHJcbiAgICAgIGlmIChjaGlsZHJlbltpXSA9PT0gY2hpbGQpIHJldHVybiBpO1xyXG5cdH1cclxuXHRjcmVhdGVXcmFwcGVycyhzdHlsZSwgbnVtYmVyKSB7XHJcblx0XHRsZXQgd3JhcHBlcnMgPSBbXSxcclxuICAgICAgICBoYXNOb3RlID0gdGhpcy5rZXlEYXRhLm5vdGUsXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgd3JhcHBlcjtcclxuXHJcblx0XHRmb3IgKCA7IGkgPCBudW1iZXI7IGkrKykge1xyXG5cdFx0XHR3cmFwcGVyID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCd0ZXh0bWFya2VyLWhpZ2hsaWdodCcpO1xyXG5cdFx0XHR3cmFwcGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzdHlsZSk7XHJcblx0XHRcdHdyYXBwZXIuc2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJywgdGhpcy5pZCArICdfJyArIGkpO1xyXG4gICAgICBpZiAoaGFzTm90ZSkgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3RvZ2dsZV9ub3RlJykpO1xyXG4gICAgICAvL3dyYXBwZXIuc2V0QXR0cmlidXRlKCdjb250ZXh0bWVudScsICd0ZXh0bWFya2VyLWN0bScpO1xyXG5cdFx0XHR3cmFwcGVycy5wdXNoKHdyYXBwZXIpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHdyYXBwZXJzO1xyXG5cdH1cclxuICBkZXNjcmliZSgpIHtcclxuICAgIGlmIChfU1RPUkUucGRmKSByZXR1cm4gdGhpcy5fZGVzY3JpYmVfUERGKCk7XHJcblxyXG4gICAgdGhpcy5fZGVzY3JpYmUoKTtcclxuICB9XHJcbiAgX2Rlc2NyaWJlKCkge1xyXG5cdFx0bGV0IHJhbmdlID0gdGhpcy5yYW5nZSxcclxuICAgICAgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24sXHJcblx0XHRcdHN0YXJ0ID0gcmFuZ2Uuc3RhcnRDb250YWluZXIsXHJcblx0XHRcdGVuZCA9IHJhbmdlLmVuZENvbnRhaW5lcixcclxuXHRcdFx0c2luZ2xlTm9kZSA9IHRoaXMuc2ltcGxlLFxyXG5cdFx0XHQvL3BhcmVudCA9IHRoaXMuY29udGFpbmVycyA/IHRoaXMuY29udGFpbmVyc1swXSA6IHN0YXJ0LnBhcmVudE5vZGUsXHJcbiAgICAgIHBhcmVudCA9IHRoaXMud3JhcHBlcnNbMF0ucGFyZW50Tm9kZSxcclxuICAgICAgcGFyZW50SXNUTSA9IHBhcmVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKSxcclxuXHRcdFx0Z3JhbXBhID0gcGFyZW50LnBhcmVudE5vZGUsXHJcbiAgICAgIGdyYW5kZ3JhbXBhID0gZ3JhbXBhLnBhcmVudE5vZGUgfHwgMCxcclxuXHRcdFx0ZlROUCA9IHRoaXMuYW5jaG9yTm9kZVBvc2l0aW9uO1xyXG5cclxuXHRcdHRoaXMua2V5RGF0YS5jb25kcyA9IHtcclxuXHRcdFx0bzogdGhpcy5zdGFydE9mZnNldCxcclxuXHRcdFx0bjE6IHBhcmVudElzVE0gPyAnVE0nIDogcGFyZW50Lm5vZGVOYW1lLFxyXG5cdFx0XHRwMTogZlROUCxcclxuXHRcdFx0bjI6IGdyYW1wYS5ub2RlTmFtZSxcclxuXHRcdFx0cDI6IHRoaXMud2hpY2hDaGlsZChncmFtcGEsIHBhcmVudCksXHJcblx0XHRcdHAzOiBncmFuZGdyYW1wYSA/IHRoaXMud2hpY2hDaGlsZChncmFuZGdyYW1wYSwgZ3JhbXBhKSA6IHVuZGVmaW5lZCxcclxuXHRcdFx0cDQ6IGdyYW5kZ3JhbXBhICYmIGdyYW5kZ3JhbXBhLnBhcmVudE5vZGUgPyB0aGlzLndoaWNoQ2hpbGQoZ3JhbmRncmFtcGEucGFyZW50Tm9kZSwgZ3JhbmRncmFtcGEpIDogdW5kZWZpbmVkXHJcblx0XHR9O1xyXG4gICAgcmV0dXJuIHRoaXMua2V5RGF0YS5jb25kcztcclxuXHR9XHJcblx0X2Rlc2NyaWJlX1BERigpIHtcclxuXHRcdGxldCBNID0gdGhpcyxcclxuICAgICAgICByZyA9IHRoaXMucmFuZ2UsXHJcblx0XHRcdFx0c3RhcnQgPSB0aGlzLndyYXBwZXJzWzBdLFxyXG5cdFx0XHRcdGVuZCA9IHRoaXMud3JhcHBlcnNbdGhpcy53cmFwcGVycy5sZW5ndGggLSAxXSxcclxuXHRcdFx0XHRzaW5nbGVOb2RlID0gdGhpcy5zaW1wbGUsXHJcblx0XHRcdFx0ZXh0cmVtZXMgPSBzaW5nbGVOb2RlID8gW3N0YXJ0XSA6IFtzdGFydCwgZW5kXSxcclxuICAgICAgICBzdGFydE9mZnNldCA9IHRoaXMuc3RhcnRPZmZzZXQsXHJcblx0XHRcdFx0ZW5kT2Zmc2V0ID0gdGhpcy5lbmRPZmZzZXQsXHJcblx0XHRcdFx0bm9kZXMgPSBbdGhpcy5hbmNob3JOb2RlUG9zaXRpb24sIHRoaXMuZm9jdXNOb2RlUG9zaXRpb25dLFxyXG5cdFx0XHRcdG9mZnNldHMgPSBbc3RhcnRPZmZzZXQsIGVuZE9mZnNldF0sXHJcblx0XHRcdFx0Y29udGFpbmVycyA9IFtdLFxyXG5cdFx0XHRcdHBhZ2VzID0gW10sXHJcblx0XHRcdFx0cGFyZW50LCBjbGFzc05hbWUsIGlzVGV4dDtcclxuXHJcblx0XHRleHRyZW1lcy5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUsIGkpIHtcclxuXHRcdFx0cGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xyXG5cclxuXHRcdFx0aWYgKHBhcmVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtdG0taWQnKSlcclxuXHRcdFx0XHRjb250YWluZXJzW2ldID0gcGFyZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10bS1pZCcpO1xyXG5cdFx0XHRlbHNlIHtcclxuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcclxuICBcdFx0XHRub2RlID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgIGNvbnRhaW5lcnNbaV0gPSBNLndoaWNoQ2hpbGQocGFyZW50LCBub2RlLCAnRElWJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHdoaWxlIChwYWdlc1tpXSA9PT0gdW5kZWZpbmVkICYmIHBhcmVudC5wYXJlbnROb2RlKSB7XHJcblx0XHRcdFx0aWYgKChjbGFzc05hbWUgPSBwYXJlbnQuY2xhc3NOYW1lKSAmJiBjbGFzc05hbWUgPT09ICdwYWdlJylcclxuXHRcdFx0XHRcdHBhZ2VzW2ldID0gcGFyZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wYWdlLW51bWJlcicpICogMTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocGFnZXNbaV0gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRwYWdlc1tpXSA9IGNvbnRhaW5lcnNbaV0gPSBvZmZzZXRzW2ldID0gaSAqIC0xO1xyXG5cclxuXHRcdFx0aWYgKGNvbnRhaW5lcnNbaV0gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRjb250YWluZXJzW2ldID0gaSAqIC0xO1xyXG5cclxuXHRcdFx0cGFnZXNbaV0gPSBwYWdlc1tpXSB8fCAxO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5rZXlEYXRhLmNvbmRzID0ge1xyXG5cdFx0XHRwYWdlSW50ZXJzZWN0aW9uOiAhc2luZ2xlTm9kZSAmJiBwYWdlc1swXSAhPT0gcGFnZXNbMV0sXHJcblx0XHRcdG9mZnNldHM6IG9mZnNldHMsXHJcblx0XHRcdGNvbnRhaW5lcnM6IGNvbnRhaW5lcnMsXHJcblx0XHRcdG5vZGVzOiBub2RlcyxcclxuXHRcdFx0cGFnZXM6IHBhZ2VzXHJcblx0XHR9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLmtleURhdGEuY29uZHM7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uLy4uL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX01BUksgZnJvbSAnLi9tYXJrLWl0ZW0nXHJcbmltcG9ydCBfQk9PS01BUksgZnJvbSAnLi9ib29rbWFyaydcclxuaW1wb3J0IF9TRUxFQ1RJT04gZnJvbSAnLi9zZWxlY3Rpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICAvLyBtYXJrZXIgbW9kdWxlXHJcblx0cmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuXHRcdGV2ZW50czoge1xyXG5cdFx0XHRFTlY6IHtcclxuXHRcdFx0XHQnc2V0OmVudHJ5JzogJ3VwZGF0ZUlEJyxcclxuICAgICAgICAndW5zZXQ6ZW50cnknOiAncmVzZXRJRCcsXHJcblx0XHRcdFx0J3ByZXNzZWQ6bWFya2VyLWtleSc6ICdvbk1hcmtlcktleScsXHJcbiAgICAgICAgJ3ByZXNzZWQ6aG90a2V5JzogJ29uSG90a2V5JyxcclxuICAgICAgICAncmVzdG9yZWQ6cmFuZ2UnOiAncmVjcmVhdGUnLFxyXG4gICAgICAgICdmaW5pc2hlZDpyZXN0b3JhdGlvbic6ICdvbkZpbmlzaGVkUmVzdG9yYXRpb24nLFxyXG4gICAgICAgICdjdHg6Yic6ICdzZXRCb29rbWFyaycsXHJcbiAgICAgICAgJ2N0eDotYic6ICdyZW1vdmVCb29rbWFyaycsXHJcbiAgICAgICAgJ2N0eDpkJzogJ3JlbW92ZScsXHJcbiAgICAgICAgJ2N0eDptJzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgICAnY3R4Om4nOiAnYWRkTm90ZScsXHJcbiAgICAgICAgJ3VwZGF0ZWQ6bm90ZSc6ICdhdXRvc2F2ZScsXHJcbiAgICAgICAgJ3JlbW92ZWQ6bm90ZSc6ICdhdXRvc2F2ZScsXHJcblx0XHRcdFx0J3NpZGViYXI6aGlnaGxpZ2h0JzogJ29uTWFya2VyS2V5JyxcclxuICAgICAgICAnc2lkZWJhcjpkZWxldGUtaGlnaGxpZ2h0JzogJ3JlbW92ZScsXHJcbiAgICAgICAgJ3NpZGViYXI6Ym9va21hcmsnOiAnc2V0Qm9va21hcmsnLFxyXG4gICAgICAgICdzaWRlYmFyOmRlbGV0ZS1ib29rbWFyayc6ICdyZW1vdmVCb29rbWFyaycsXHJcbiAgICAgICAgJ3NpZGViYXI6bm90ZSc6ICdhZGROb3RlJyxcclxuICAgICAgICAnc2lkZWJhcjpzYXZlLWNoYW5nZXMnOiAnc2F2ZScsXHJcbiAgICAgICAgJ3NpZGViYXI6dW5kbyc6ICd1bmRvJyxcclxuICAgICAgICAnc2lkZWJhcjpyZWRvJzogJ3JlZG8nLFxyXG4gICAgICAgICdzaWRlYmFyOnNjcm9sbC10by1ib29rbWFyayc6ICdzY3JvbGxUb0Jvb2ttYXJrJyxcclxuICAgICAgICAnc2Nyb2xsLXRvLWJvb2ttYXJrJzogJ3Njcm9sbFRvQm9va21hcmsnXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRzZWxlY3Rpb246IG51bGwsXHJcblx0XHRkb25lOiBbXSxcclxuXHRcdHVuZG9uZTogW10sXHJcbiAgICBib29rbWFyazogbnVsbCxcclxuICAgIHJlbW92ZWRCb29rbWFyazogbnVsbCxcclxuXHRcdGlkY291bnQ6IDAsXHJcblxyXG4gICAgdXBkYXRlSUQ6IGZ1bmN0aW9uIHVwZGF0ZUlEKCkge1xyXG4gICAgICBjb25zdCBlbnRyeSA9IF9TVE9SRS5lbnRyeTtcclxuXHJcbiAgICAgIGlmIChlbnRyeS5pZGNvdW50KSB7XHJcbiAgICAgICAgdGhpcy5pZGNvdW50ID0gZW50cnkuaWRjb3VudDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgbWFya3MgPSAoZW50cnkubWFya3MgfHwgW10pLmNvbmNhdChlbnRyeS5sb3N0IHx8IFtdKSxcclxuICAgICAgICAgICAgZCA9IG1hcmtzLmxlbmd0aCxcclxuICAgICAgICAgICAgaWRzID0gW107XHJcbiAgICAgICAgaWYgKGQpIHtcclxuICAgICAgICAgIHdoaWxlIChkLS0pIHtcclxuICAgICAgICAgICAgaWRzLnB1c2gobWFya3NbZF0uaWQpO1xyXG4gICAgICAgICAgfVxyXG5cdFx0XHRcdFx0dGhpcy5pZGNvdW50ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaWRzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZXNldElEOiBmdW5jdGlvbiByZXNldElEKCkge1xyXG4gICAgICB0aGlzLmlkY291bnQgPSAwO1xyXG4gICAgfSxcclxuXHRcdG1hcmsoa2V5LCBkYXRhKSB7XHJcblx0XHRcdHRoaXMudW5kb25lLmxlbmd0aCA9IDA7XHJcblxyXG5cdFx0XHRyZXR1cm4gbmV3IF9NQVJLKHRoaXMsIGtleSwgZGF0YSkuY3JlYXRlKCk7XHJcblx0XHR9LFxyXG5cdFx0dW5kbyhub0F1dG9zYXZlKSB7XHJcblx0XHRcdGxldCBkb25lID0gdGhpcy5kb25lO1xyXG5cclxuXHRcdFx0aWYgKGRvbmUubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgbWFyayA9IHRoaXMuZG9uZS5wb3AoKTtcclxuICAgICAgICBjb25zdCBpZCA9IG1hcmsuaWQ7XHJcblxyXG4gICAgICAgIHRoaXMudW5kb25lLnB1c2gobWFyay51bmRvKCkpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ib29rbWFyaykgdGhpcy51bmRvQm9va21hcmsoKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOm1hcmsnLCBpZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5vQXV0b3NhdmUgfHwgdGhpcy5hdXRvc2F2ZSgpO1xyXG5cdFx0fSxcclxuXHRcdHJlZG8obm9BdXRvc2F2ZSkge1xyXG4gICAgICBsZXQgdW5kb25lID0gdGhpcy51bmRvbmU7XHJcblxyXG5cdFx0XHRpZiAodW5kb25lLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IG1hcmsgPSB0aGlzLnVuZG9uZS5wb3AoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kb25lLnB1c2gobWFyay5yZWRvKCkpO1xyXG5cclxuICAgICAgICB0aGlzLmVtaXQoJ3Jlc3RvcmU6bm90ZXMnLCBbbWFya10pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBub0F1dG9zYXZlIHx8IHRoaXMuYXV0b3NhdmUoKTtcclxuXHRcdH0sXHJcbiAgICBjdXRPdXQoaSkge1xyXG4gICAgICBsZXQgbWFya2VyID0gdGhpcyxcclxuICAgICAgICAgIGRvbmUgPSB0aGlzLmRvbmUsXHJcbiAgICAgICAgICBsID0gZG9uZS5sZW5ndGgsXHJcbiAgICAgICAgICB0b0JlUmVtb3ZlZCA9IFtpXSxcclxuICAgICAgICAgIGluZGljZXMgPSBbaV0sXHJcbiAgICAgICAgICBtYXJrLCBzbWFsbGVzdElEO1xyXG5cclxuICAgICAgZnVuY3Rpb24gZmluZEluZGljZXNPZkFmZmVjdGVkTWFya3Moaikge1xyXG4gICAgICAgIGZvciAodmFyIHggPSBqICsgMTsgeCA8IGw7IHgrKykge1xyXG4gICAgICAgICAgbWFyayA9IGRvbmVbeF07XHJcblxyXG4gICAgICAgICAgaWYgKG1hcmtlci5tYXJrc0ludGVyc2VjdChkb25lW2pdLCBtYXJrKSkge1xyXG4gICAgICAgICAgICBpZiAoIXRvQmVSZW1vdmVkLmluY2x1ZGVzKHgpKSB0b0JlUmVtb3ZlZC5wdXNoKHgpO1xyXG4gICAgICAgICAgICBpbmRpY2VzLnB1c2goeCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluZGljZXMuc29ydCgpO1xyXG4gICAgICAgIHRvQmVSZW1vdmVkLnNvcnQoKTtcclxuICAgICAgfVxyXG4gICAgICB3aGlsZSAoaW5kaWNlcy5sZW5ndGgpIHtcclxuICAgICAgICBmaW5kSW5kaWNlc09mQWZmZWN0ZWRNYXJrcyhpbmRpY2VzLnNoaWZ0KCkpO1xyXG4gICAgICB9XHJcbiAgICAgIHNtYWxsZXN0SUQgPSBNYXRoLm1pbi5hcHBseShudWxsLCB0b0JlUmVtb3ZlZCk7XHJcblxyXG4gICAgICB3aGlsZSAodG9CZVJlbW92ZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5kb25lLnNwbGljZSh0b0JlUmVtb3ZlZC5wb3AoKSwgMSlbMF0udW5kbygpO1xyXG4gICAgICAgIHRoaXMudW5kb25lLnBvcCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gc21hbGxlc3RJRDtcclxuICAgIH0sXHJcbiAgICByZW1vdmUoaWQpIHtcclxuICAgICAgaWQgPSBpZCA/IGlkIDogX1NUT1JFLnRtaWQgPyBfU1RPUkUudG1pZCA6ICcnO1xyXG5cclxuICAgICAgaWYgKCFpZCkgcmV0dXJuIHRoaXMudW5kbygpO1xyXG5cclxuICAgICAgbGV0IG1hcmsgPSB0aGlzLmdldEJ5SWQoaWQuc3BsaXQoJ18nKVswXSksXHJcbiAgICAgICAgICBkb25lID0gdGhpcy5kb25lLFxyXG4gICAgICAgICAgbCA9IGRvbmUubGVuZ3RoLFxyXG4gICAgICAgICAgcG9zaXRpb24gPSBkb25lLmluZGV4T2YobWFyayksXHJcbiAgICAgICAgICBzbWFsbGVzdElELCBpO1xyXG5cclxuICAgICAgaWYgKHBvc2l0aW9uID09PSBsIC0gMSkge1xyXG4gICAgICAgIHRoaXMudW5kbygpO1xyXG4gICAgICAgIHRoaXMudW5kb25lLnBvcCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBpZiAoIXRoaXMudW5kb25lLmxlbmd0aCkge1xyXG4gICAgICAgICAgc21hbGxlc3RJRCA9IHRoaXMuY3V0T3V0KHBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICB0aGlzLmRvbmUuZm9yRWFjaChmdW5jdGlvbihtYXJrKSB7XHJcbiAgICAgICAgICAgIGlmIChtYXJrLmlkID4gc21hbGxlc3RJRCkgbWFyay5yZXN1bWUoKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHRoaXMuYXV0b3NhdmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaSA9IHRoaXMudW5kb25lLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICB3aGlsZSAodGhpcy51bmRvbmUubGVuZ3RoKSB0aGlzLnJlZG8odHJ1ZSk7XHJcblxyXG4gICAgICAgICAgc21hbGxlc3RJRCA9IHRoaXMuY3V0T3V0KHBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICB0aGlzLmRvbmUuZm9yRWFjaChmdW5jdGlvbihtYXJrKSB7XHJcbiAgICAgICAgICAgIGlmIChtYXJrLmlkID4gc21hbGxlc3RJRCkgbWFyay5yZXN1bWUoKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHdoaWxlIChpLS0pIHRoaXMudW5kbyh0cnVlKTtcclxuXHJcbiAgICAgICAgICB0aGlzLmF1dG9zYXZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlZDptYXJrJywgaWRbMF0pO1xyXG4gICAgfSxcclxuICAgIHNhdmUoKSB7XHJcbiAgICAgIGNvbnN0IGlmcmFtZSA9IF9TVE9SRS5pZnJhbWU7XHJcblxyXG4gICAgICBfU1RPUkUuZ2V0KCduYW1pbmcnKS50aGVuKG5hbWluZyA9PiB7XHJcbiAgICAgICAgaWYgKF9TVE9SRS5pc05ldyAmJiBuYW1pbmcgPT09ICdjdXN0b20nKSB7XHJcbiAgICAgICAgICB0aGlzLnJlcXVlc3QoJ25hbWU6ZW50cnk/JykudGhlbihncmFudGVkID0+IHtcclxuICAgICAgICAgICAgaWYgKGdyYW50ZWQpIHtcclxuICAgICAgICAgICAgICBjb25zdCBzdWIgPSBpZnJhbWUgPyBicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZV9pZnJhbWUnKSA6ICcnO1xyXG5cclxuICAgICAgICAgICAgICBfU1RPUkUubmFtZSA9IHdpbmRvdy5wcm9tcHQoYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ25tX21lc3NhZ2UnLCBzdWIpKTtcclxuICAgICAgICAgICAgICBpZiAoX1NUT1JFLm5hbWUpIHRoaXMucmV0cmlldmVFbnRyeSgpLnRoZW4oZW50cnkgPT4gdGhpcy5lbWl0KCdzYXZlOmVudHJ5PycsIGVudHJ5KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAoX1NUT1JFLmlzTmV3KSB7XHJcblx0XHRcdFx0XHRcdGxldCBjb25maXJtZWQgPSB0cnVlO1xyXG5cdCAgICAgICAgICBpZiAoaWZyYW1lKSBjb25maXJtZWQgPSB3aW5kb3cuY29uZmlybShicm93c2VyLmkxOG4uZ2V0TWVzc2FnZSgnbm1fbWVzc2FnZV9pZnJhbWUnKSk7XHJcblx0ICAgICAgICAgIGlmIChjb25maXJtZWQpIHtcclxuXHQgICAgICAgICAgICB0aGlzLnJldHJpZXZlRW50cnkoKS50aGVuKGVudHJ5ID0+IHRoaXMuZW1pdCgnc2F2ZTplbnRyeT8nLCBlbnRyeSkpO1xyXG5cdCAgICAgICAgICB9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnJldHJpZXZlRW50cnkoKS50aGVuKGVudHJ5ID0+IHRoaXMuZW1pdCgndXBkYXRlOmVudHJ5PycsIGVudHJ5KSk7XHJcblx0XHRcdFx0XHR9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHRcdH0sXHJcbiAgICBhdXRvc2F2ZSgpIHtcclxuICAgICAgX1NUT1JFLmdldCgnYXV0b3NhdmUnKS50aGVuKGF1dG9zYXZlID0+IHtcclxuICAgICAgICBpZiAoYXV0b3NhdmUpIHRoaXMuc2F2ZSgpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5lbWl0KCd1bnNhdmVkLWNoYW5nZXMnKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cdFx0c3RvcmUobWFyaywgdGV4dCwgc2F2ZSkge1xyXG5cdFx0XHR0aGlzLmRvbmUucHVzaChtYXJrKTtcclxuICAgICAgaWYgKHNhdmUgIT09IGZhbHNlKSB0aGlzLmF1dG9zYXZlKCk7XHJcblx0XHR9LFxyXG4gICAgcmVjcmVhdGUoc2VsZWN0aW9uLCBtYXJrKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uID0gc2VsZWN0aW9uO1xyXG4gICAgICB0aGlzLnN0b3JlKHRoaXMubWFyayhtYXJrLmtleSwgbWFyayksIHNlbGVjdGlvbi50ZXh0LCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgb25GaW5pc2hlZFJlc3RvcmF0aW9uKCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3Jlc3RvcmU6bm90ZXMnLCB0aGlzLmRvbmUpO1xyXG4gICAgICB0aGlzLnNvcnRCeUlkKCk7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG9Cb29rbWFyaygpO1xyXG4gICAgfSxcclxuICAgIGFkZE5vdGUoaWQpIHtcclxuICAgICAgdGhpcy5lbWl0KCdhZGQ6bm90ZScsIHRoaXMuZmluZE1hcmsoaWQpKTtcclxuICAgIH0sXHJcbiAgICBzZXRCb29rbWFyayhtLCBzYXZlKSB7XHJcbiAgICAgIGxldCBib29rbWFyayA9IHRoaXMuYm9va21hcmssXHJcbiAgICAgICAgICBtYXJrID0gdGhpcy5maW5kTWFyayhtKTtcclxuXHJcbiAgICAgIGlmICghbWFyaykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgaWYgKGJvb2ttYXJrKSB7XHJcbiAgICAgICAgYm9va21hcmsucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOmJvb2ttYXJrJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYm9va21hcmsgPSBuZXcgX0JPT0tNQVJLKCkuc2V0KG1hcmspO1xyXG5cclxuICAgICAgdGhpcy5lbWl0KCdhZGRlZDpib29rbWFyaycpO1xyXG4gICAgICBpZiAoc2F2ZSAhPT0gZmFsc2UpIHRoaXMuYXV0b3NhdmUoKTtcclxuICAgIH0sXHJcbiAgICB1bmRvQm9va21hcmsoKSB7XHJcbiAgICAgIHRoaXMuYm9va21hcmsgPSBudWxsO1xyXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6Ym9va21hcmsnKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVCb29rbWFyaygpIHtcclxuICAgICAgbGV0IGJvb2ttYXJrID0gdGhpcy5ib29rbWFyaztcclxuXHJcbiAgICAgIGlmICghYm9va21hcmspIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIGJvb2ttYXJrLnJlbW92ZSgpO1xyXG4gICAgICB0aGlzLmJvb2ttYXJrID0gbnVsbDtcclxuICAgICAgdGhpcy5yZW1vdmVkQm9va21hcmsgPSBib29rbWFyaztcclxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVkOmJvb2ttYXJrJyk7XHJcbiAgICAgIHRoaXMuYXV0b3NhdmUoKTtcclxuICAgIH0sXHJcbiAgICBzY3JvbGxUb0Jvb2ttYXJrKCkge1xyXG4gICAgICBsZXQgYm9va21hcmsgPSB0aGlzLmJvb2ttYXJrO1xyXG5cclxuICAgICAgaWYgKGJvb2ttYXJrKSBib29rbWFyay5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgfSxcclxuICAgIGdldEJ5SWQoaWQsIHBvcykge1xyXG5cdFx0XHRsZXQgZG9uZSA9IHRoaXMuZG9uZSxcclxuXHRcdFx0XHQgIGQgPSBkb25lLmxlbmd0aCxcclxuXHRcdFx0XHQgIG1hcms7XHJcblxyXG5cdFx0XHR3aGlsZSAoZC0tKSB7XHJcblx0XHRcdFx0bWFyayA9IGRvbmVbZF07XHJcblxyXG5cdFx0XHRcdGlmIChtYXJrLmtleURhdGEuaWQgPT0gaWQpXHJcblx0XHRcdFx0XHRyZXR1cm4gcG9zID8geyBtYXJrOiBtYXJrLCBwb3NpdGlvbjogZCB9IDogbWFyaztcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcG9zID8geyBtYXJrOiBudWxsLCBwb3NpdGlvbjogbnVsbCB9IDogZmFsc2U7XHJcblx0XHR9LFxyXG5cdFx0ZmluZE1hcmsoeCkge1xyXG5cdFx0XHR4ID0geCA/IHggOiBfU1RPUkUudG1pZCA/IF9TVE9SRS50bWlkIDogJyc7XHJcblxyXG5cdFx0XHRsZXQgbWFyayA9ICF4ID9cclxuXHRcdFx0XHR0aGlzLmRvbmVbdGhpcy5kb25lLmxlbmd0aCAtIDFdIDpcclxuXHRcdFx0XHRcdHR5cGVvZiB4ID09PSAnc3RyaW5nJyA/XHJcblx0XHRcdFx0dGhpcy5nZXRCeUlkKHguc3BsaXQoJ18nKVswXSkgOlxyXG5cdFx0XHRcdHg7XHJcblx0XHRcdHJldHVybiBtYXJrO1xyXG5cdFx0fSxcclxuICAgIHNvcnRCeUlkKCkge1xyXG4gICAgICB0aGlzLmRvbmUuc29ydCgobWFyazEsIG1hcmsyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaWQxID0gbWFyazEuaWQ7XHJcbiAgICAgICAgY29uc3QgaWQyID0gbWFyazIuaWQ7XHJcbiAgICAgICAgaWYgKGlkMSA9PT0gaWQyKSByZXR1cm4gMDtcclxuICAgICAgICByZXR1cm4gaWQxIDwgaWQyID8gLTEgOiAxO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBtYXJrc0ludGVyc2VjdChtYXJrMSwgbWFyazIpIHtcclxuXHRcdFx0bGV0IHdyYXBwZXJzMSA9IG1hcmsxLndyYXBwZXJzLFxyXG4gICAgICAgICAgdzEgPSB3cmFwcGVyczEubGVuZ3RoLFxyXG4gICAgICAgICAgaWQxID0gbWFyazEuaWQsXHJcbiAgICAgICAgICB3cmFwcGVyczIgPSBtYXJrMi53cmFwcGVycyxcclxuICAgICAgICAgIGlkMiA9IG1hcmsyLmlkLFxyXG4gICAgICAgICAgdzIsIHRtcywgbDtcclxuXHJcbiAgICAgIHdoaWxlICh3MS0tKSB7XHJcbiAgICAgICAgdzIgPSB3cmFwcGVyczIubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlICh3Mi0tKSB7XHJcbiAgICAgICAgICB0bXMgPSB3cmFwcGVyczFbdzFdLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRtLWlkXScpO1xyXG4gICAgICAgICAgbCA9IHRtcy5sZW5ndGg7XHJcbiAgICAgICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgICAgIGlmICh0bXNbbF0uZ2V0QXR0cmlidXRlKCdkYXRhLXRtLWlkJylbMF0gPT0gaWQyKVxyXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcblx0XHR9LFxyXG4gICAgb25NYXJrZXJLZXkoZSwga2V5KSB7XHJcblx0XHRcdGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbiA9IG5ldyBfU0VMRUNUSU9OKCk7XHJcblxyXG5cdFx0XHRpZiAoIXNlbGVjdGlvbi5ub2RlcykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgaWYgKGUpIHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIGUgPT09ICdzdHJpbmcnKSBrZXkgPSBlO1xyXG5cdFx0XHRcdGVsc2UgdGhpcy5wcmV2ZW50RGVmYXVsdChlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRrZXkgPSBrZXkgfHwgJ20nO1xyXG5cdFx0XHR9XHJcblxyXG4gICAgICBfU1RPUkUuZ2V0KCdtYXJrZXJzJykudGhlbihtYXJrZXJzID0+IHtcclxuICAgICAgICB0aGlzLnN0b3JlKHRoaXMubWFyayhrZXksIHsgc3R5bGU6IG1hcmtlcnNba2V5XSB9KSk7XHJcbiAgICAgIH0pO1xyXG5cdFx0fSxcclxuICAgIG9uSG90a2V5KGtleSkge1xyXG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgIHN3aXRjaChrZXkpIHtcclxuICAgICAgICBjYXNlICd6Jzogc2VsZi51bmRvKCk7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3knOiBzZWxmLnJlZG8oKTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncyc6IHNlbGYuc2F2ZSgpOyBicmVhaztcclxuICAgICAgICBjYXNlICdiJzogc2VsZi5zZXRCb29rbWFyaygpOyBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHByZXZlbnREZWZhdWx0KGUpIHtcclxuXHRcdFx0aWYgKGUgJiYgZS5wcmV2ZW50RGVmYXVsdCkge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHRcdHJldHJpZXZlRW50cnkoKSB7XHJcbiAgICAgIGxldCBlbnRyeSA9IF9TVE9SRS5lbnRyeSB8fCB7fTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmNvbGxlY3RNYXJrcygpLnRoZW4obWFya3MgPT4ge1xyXG4gICAgICAgIGVudHJ5Lm1hcmtzID0gbWFya3M7XHJcbiAgXHRcdFx0ZW50cnkubGFzdCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGVudHJ5LmJvb2ttYXJrZWQgPSAhIXRoaXMuYm9va21hcms7XHJcbiAgICAgICAgLy9lbnRyeS51cmwgPSBib29rbWFya2VkICYmIF9TVE9SRS5wZGYgPyB0aGlzLmJvb2ttYXJrLmNyZWF0ZVVSTCgpIDogd2luZG93LmRvY3VtZW50LlVSTDtcclxuICBcdFx0XHRlbnRyeS50aXRsZSA9IHdpbmRvdy5kb2N1bWVudC50aXRsZTtcclxuICBcdFx0XHRlbnRyeS5jb3VudCA9IGVudHJ5Lm1hcmtzLmxlbmd0aDtcclxuXHRcdFx0XHRlbnRyeS5pZGNvdW50ID0gdGhpcy5pZGNvdW50O1xyXG4gICAgICAgIGlmIChfU1RPUkUuaXNOZXcpIHtcclxuICAgICAgICAgIGVudHJ5Lm5hbWUgPSBfU1RPUkUubmFtZTtcclxuICAgICAgICAgIGVudHJ5LmZpcnN0ID0gZW50cnkubGFzdDtcclxuICAgICAgICAgIGVudHJ5LnVybCA9IHdpbmRvdy5kb2N1bWVudC5VUkw7XHJcbiAgICAgICAgICBlbnRyeS5zeW5jZWQgPSBfU1RPUkUuYXJlYV9oaXN0b3J5ID09PSAnc3luYyc7XHJcbiAgICAgICAgfVxyXG4gIFx0XHRcdHJldHVybiBlbnRyeTtcclxuICAgICAgfSk7XHJcblx0XHR9LFxyXG4gICAgY29sbGVjdE1hcmtzKCkge1xyXG4gICAgICByZXR1cm4gX1NUT1JFLmdldCgnaGlzdG9yeScpLnRoZW4oaGlzdG9yeSA9PiB7XHJcbiAgICAgICAgbGV0IG1hcmtzID0gW10sXHJcbiAgICAgICAgICAgIGlkcyA9IFtdLFxyXG4gICAgICAgICAgICBkb25lID0gdGhpcy5kb25lLFxyXG4gICAgICAgICAgICBvbGRNYXJrcyA9IF9TVE9SRS5pc05ldyA/IG51bGwgOiBoaXN0b3J5LmVudHJpZXNbX1NUT1JFLm5hbWVdID8gaGlzdG9yeS5lbnRyaWVzW19TVE9SRS5uYW1lXS5tYXJrcyA6IG51bGwsXHJcbiAgICAgICAgICAgIGwgPSBkb25lLmxlbmd0aCxcclxuICAgICAgICAgICAgbSA9IDAsXHJcbiAgICAgICAgICAgIGtEO1xyXG5cclxuICAgICAgICBmb3IgKDsgbSA8IGw7IG0rKykge1xyXG4gIFx0XHRcdFx0a0QgPSBkb25lW21dLmtleURhdGE7XHJcbiAgXHRcdFx0XHRtYXJrcy5wdXNoKGtEKTtcclxuICBcdFx0XHRcdGlkcy5wdXNoKGtELmlkKTtcclxuICBcdFx0XHR9XHJcbiAgXHRcdFx0aWYgKF9TVE9SRS5wZGYgJiYgb2xkTWFya3MpIHtcclxuICBcdFx0XHRcdG0gPSAwO1xyXG4gIFx0XHRcdFx0bCA9IG9sZE1hcmtzLmxlbmd0aDtcclxuXHJcbiAgXHRcdFx0XHRmb3IgKDsgbSA8IGw7IG0rKykge1xyXG4gIFx0XHRcdFx0XHRpZiAoaWRzLmluZGV4T2Yob2xkTWFya3NbbV0uaWQpID09PSAtMSlcclxuICBcdFx0XHRcdFx0XHRtYXJrcy5wdXNoKG9sZE1hcmtzW21dKTtcclxuICBcdFx0XHRcdH1cclxuICBcdFx0XHR9XHJcbiAgICAgICAgcmV0dXJuIG1hcmtzO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHR9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi8uLi91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hcmspIHtcclxuXHJcbiAgY29uc3QgQk9EWSA9IHdpbmRvdy5kb2N1bWVudC5ib2R5O1xyXG5cclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG5cdFx0ZXZlbnRzOiB7XHJcbiAgICAgIERPTToge1xyXG4gICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAndG1ub3RlZGVsZXRlJzogJ19kZWxldGUnLFxyXG4gICAgICAgICAgJ3Rtbm90ZW1pbmltaXplJzogJ2hpZGUnLFxyXG4gICAgICAgICAgJ3RleHRhcmVhJzogJ2JyaW5nVXBGcm9udCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGtleXVwOiB7XHJcbiAgICAgICAgICAndGV4dGFyZWEnOiAnYXR0ZW1wdFVwZGF0ZSdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHRcdH0sXHJcbiAgICBhZGRMaXN0ZW5lcnNNYW51YWxseTogdHJ1ZSxcclxuICAgIGVsOiBudWxsLFxyXG4gICAgbWFyazogbWFyayxcclxuICAgIG1hcmtDbGlja0hhbmRsZXI6IG51bGwsXHJcbiAgICB0ZXh0OiAnJyxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgcmVjZW50bHlVcGRhdGVkOiBmYWxzZSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5jcmVhdGVOb3RlRWxlbWVudCgpO1xyXG4gICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgICB0aGlzLmFkZE1hcmtMaXN0ZW5lcnMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlTm90ZUVsZW1lbnQoKSB7XHJcbiAgICAgIGNvbnN0IG5vdGUgPSB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlJyk7XHJcbiAgICAgIGNvbnN0IGRlbCA9IHRoaXMuZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlZGVsZXRlJyk7XHJcbiAgICAgIGNvbnN0IG1pbiA9IHRoaXMubWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndG1ub3RlbWluaW1pemUnKTtcclxuICAgICAgY29uc3QgcCA9IHRoaXMudGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgICBjb25zdCB0ZXh0ID0gdGhpcy5tYXJrLmtleURhdGEubm90ZSB8fCAnJztcclxuICAgICAgY29uc3QgZGVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZy5mcm9tQ2hhckNvZGUoMTAwMDUpKTtcclxuICAgICAgY29uc3QgbWluVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyMDEzKSk7XHJcblxyXG4gICAgICBwLnNldEF0dHJpYnV0ZSgnZGF0YS10bS1ub3RlJywgdHJ1ZSk7XHJcbiAgICAgIGRlbC5hcHBlbmRDaGlsZChkZWxUZXh0KTtcclxuICAgICAgbWluLmFwcGVuZENoaWxkKG1pblRleHQpO1xyXG4gICAgICBub3RlLmFwcGVuZENoaWxkKGRlbCk7XHJcbiAgICAgIG5vdGUuYXBwZW5kQ2hpbGQobWluKTtcclxuICAgICAgbm90ZS5hcHBlbmRDaGlsZChwKTtcclxuICAgICAgaWYgKHRleHQpIHAudmFsdWUgPSB0ZXh0O1xyXG5cclxuICAgICAgcC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZSA9PiB0aGlzLmF0dGVtcHRVcGRhdGUoZSwgZS50YXJnZXQsIHRydWUpLCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgX2RlbGV0ZSgpIHtcclxuICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgdGhpcy5tYXJrLmtleURhdGEubm90ZSA9ICcnO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgIHRoaXMucmVtb3ZlTWFya0xpc3RlbmVycygpO1xyXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQ6bm90ZScsIHRoaXMubWFyay5pZCk7XHJcbiAgICB9LFxyXG4gICAgYXR0ZW1wdFVwZGF0ZShlLCBlbCwgZm9yY2UpIHtcclxuICAgICAgaWYgKGZvcmNlKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoZWwpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCF0aGlzLnJlY2VudGx5VXBkYXRlZCkge1xyXG4gICAgICAgIHRoaXMucmVjZW50bHlVcGRhdGVkID0gdHJ1ZTtcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZShlbCksIDMwMDApO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGVsKSB7XHJcbiAgICAgIHRoaXMubWFyay5rZXlEYXRhLm5vdGUgPSBlbC52YWx1ZTtcclxuICAgICAgdGhpcy5lbWl0KCd1cGRhdGVkOm5vdGUnKTtcclxuICAgICAgdGhpcy5yZWNlbnRseVVwZGF0ZWQgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBzaG93KCkge1xyXG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWw7XHJcbiAgICAgIGNvbnN0IHBvcyA9IHRoaXMuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgY29uc3QgaW5uZXJXaW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICBsZXQgbGVmdCA9IHBvcy5sZWZ0O1xyXG4gICAgICBpZiAobGVmdCArIDM0MCA+IGlubmVyV2luZG93V2lkdGgpIHtcclxuICAgICAgICBsZWZ0ID0gaW5uZXJXaW5kb3dXaWR0aCAtIDM0MDtcclxuICAgICAgfVxyXG4gICAgICBCT0RZLmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmJsb2NrO3RvcDonICsgKHBvcy50b3AgKyBwb3Mub2Zmc2V0KSArICdweDtsZWZ0OicgKyBsZWZ0ICsgJ3B4OycpO1xyXG4gICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIGJyaW5nVXBGcm9udCgpIHtcclxuICAgICAgQXJyYXkuZnJvbShCT0RZLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0bW5vdGUnKSkuZm9yRWFjaChub3RlID0+IHtcclxuICAgICAgICBpZiAobm90ZSA9PT0gdGhpcy5lbCkgbm90ZS5zdHlsZS56SW5kZXggPSAyMTQ3NDgzNjQ3O1xyXG4gICAgICAgIGVsc2Ugbm90ZS5zdHlsZS56SW5kZXggPSAyMTQ3NDgzNjQ2O1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICBCT0RZLnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xyXG4gICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBhZGRNYXJrTGlzdGVuZXJzKCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCdub3Rlb25jbGljaycpLnRoZW4obm90ZW9uY2xpY2sgPT4ge1xyXG4gICAgICAgIGlmIChub3Rlb25jbGljaykge1xyXG4gICAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMubWFya0NsaWNrSGFuZGxlciA9ICgpID0+IHRoaXMuc2hvdygpO1xyXG5cclxuICAgICAgICAgIGZvciAobGV0IHdyYXBwZXIgb2YgdGhpcy5tYXJrLndyYXBwZXJzKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCd0aXRsZScsIGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCd0b2dnbGVfbm90ZScpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZU1hcmtMaXN0ZW5lcnMoKSB7XHJcbiAgICAgIGlmICghdGhpcy5tYXJrQ2xpY2tIYW5kbGVyKSByZXR1cm47XHJcbiAgICAgIGZvciAobGV0IHdyYXBwZXIgb2YgdGhpcy5tYXJrLndyYXBwZXJzKSB7XHJcbiAgICAgICAgd3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFya0NsaWNrSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgIHdyYXBwZXIucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0UG9zaXRpb24oKSB7XHJcbiAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLm1hcmsud3JhcHBlcnNbdGhpcy5tYXJrLndyYXBwZXJzLmxlbmd0aCAtIDFdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvcDogcmVjdC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSBCT0RZLmNsaWVudFRvcCxcclxuICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQgLSBCT0RZLmNsaWVudExlZnQsXHJcbiAgICAgICAgb2Zmc2V0OiByZWN0LmhlaWdodFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cdH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uLy4uL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX05PVEUgZnJvbSAnLi9ub3RlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcblxyXG4gIGNvbnN0IERPQyA9IHdpbmRvdy5kb2N1bWVudDtcclxuXHJcbiAgcmV0dXJuIG5ldyBfTU9EVUxFKHtcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnYWRkOm5vdGUnOiAnYWRkQW5kU2hvdycsXHJcbiAgICAgICAgJ3JlbW92ZWQ6bm90ZSc6ICdyZW1vdmVOb3RlU3RvcmFnZScsXHJcbiAgICAgICAgJ3Jlc3RvcmU6bm90ZXMnOiAncmVzdG9yZScsXHJcbiAgICAgICAgJ3JlbW92ZWQ6bWFyayc6ICdyZW1vdmVOb3RlJyxcclxuICAgICAgICAndG9nZ2xlOm5vdGVzJzogJ3RvZ2dsZUFsbCcsXHJcbiAgICAgICAgJ3NpZGViYXI6dG9nZ2xlLW5vdGVzJzogJ3RvZ2dsZUFsbCdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG5vdGVzOiB7fSxcclxuICAgIHRvZ2dsZTogbnVsbCxcclxuICAgIGFkZChtYXJrKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5vdGVzW21hcmsuaWRdID0gbmV3IF9OT1RFKG1hcmspO1xyXG4gICAgfSxcclxuICAgIHJlc3RvcmUobWFya3MpIHtcclxuICAgICAgZm9yIChsZXQgbWFyayBvZiBtYXJrcykge1xyXG4gICAgICAgIGlmIChtYXJrLmtleURhdGEubm90ZSkge1xyXG4gICAgICAgICAgdGhpcy5hZGQobWFyayk7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ2FkZGVkOm5vdGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhZGRBbmRTaG93KG1hcmspIHtcclxuICAgICAgdGhpcy5hZGQobWFyaykuc2hvdygpO1xyXG4gICAgICB0aGlzLmVtaXQoJ2FkZGVkOm5vdGUnKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVOb3RlU3RvcmFnZShpZCkge1xyXG4gICAgICBkZWxldGUgdGhpcy5ub3Rlc1tpZF07XHJcbiAgICAgIGlmICh0aGlzLmlzRW1wdHkodGhpcy5ub3RlcykpIHRoaXMuZW1pdCgncmVtb3ZlZDpsYXN0LW5vdGUnKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVOb3RlKGlkKSB7XHJcbiAgICAgIGlmICh0aGlzLm5vdGVzW2lkXSkgdGhpcy5ub3Rlc1tpZF0ucmVtb3ZlKCk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlQWxsKCkge1xyXG4gICAgICBpZiAoIXRoaXMubm90ZXMpIHJldHVybjtcclxuICAgICAgY29uc3Qgbm90ZXMgPSB0aGlzLm5vdGVzO1xyXG4gICAgICBsZXQgbWV0aCA9IERPQy5nZXRFbGVtZW50c0J5VGFnTmFtZSgndG1ub3RlJykubGVuZ3RoID8gJ2hpZGUnIDogJ3Nob3cnLFxyXG4gICAgICAgICAgY29uZGl0aW9uID0gbWV0aCA9PT0gJ2hpZGUnID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgbm90ZTtcclxuICAgICAgZm9yIChsZXQgbiBpbiBub3Rlcykge1xyXG4gICAgICAgIG5vdGUgPSBub3Rlc1tuXTtcclxuICAgICAgICBpZiAobm90ZS52aXNpYmxlID09PSBjb25kaXRpb24pIHtcclxuICAgICAgICAgIG5vdGVbbWV0aF0oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBpc0VtcHR5KG9iaikge1xyXG4gICAgICByZXR1cm4gIU9iamVjdC5rZXlzKG9iaikubGVuZ3RoO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uLy4uLy4uL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBfRE9NTU9EVUxFKHtcclxuICAgIGVsOiB3aW5kb3cuZG9jdW1lbnQsXHJcbiAgICBhZGRMaXN0ZW5lcnNNYW51YWxseTogdHJ1ZSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICBFTlY6IHtcclxuICAgICAgICAnc3RhcnRlZDphcHAnOiAnY2hlY2tVUkwnLFxyXG4gICAgICAgICd0b2dnbGVkOmFkZG9uJzogJ3Bvd2VyJyxcclxuICAgICAgICAnZGVsZXRlZDplbnRyeSc6ICd1bnNldCcsXHJcbiAgICAgICAgJ3NhdmVkOmVudHJ5JzogJ3VwZGF0ZSdcclxuICAgICAgfSxcclxuICAgICAgRE9NOiB7XHJcbiAgICAgICAga2V5ZG93bjoge1xyXG4gICAgICAgICAgJyonOiAnZGVsZWdhdGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWxlY3Rpb25jaGFuZ2U6IHtcclxuICAgICAgICAgICcqJzogJ29uU2VsZWN0aW9uQ2hhbmdlJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICB1cmw6ICcnLFxyXG4gICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgc2V0OiBmYWxzZSxcclxuICAgIGluaXRpYWxpemVkOiBmYWxzZSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuXHJcbiAgICAgIC8vX1JFQURFUiA9IHRoaXMucmVhZGVyTW9kZSA9IHRoaXMuaXNSZWFkZXJNb2RlKCk7XHJcbiAgICAgIHRoaXMuc2V0dXAoKTtcclxuICAgIH0sXHJcblxyXG4gICAgcG93ZXIob24pIHtcclxuICAgICAgaWYgKG9uKSB0aGlzLmFkZExpc3RlbmVycygpO1xyXG5cclxuICAgICAgZWxzZSB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xyXG5cclxuICAgICAgdGhpcy5hY3RpdmUgPSBvbjtcclxuICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgfSxcclxuICAgIHNldHVwKCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCdtb2RlJykudGhlbihhY3RpdmUgPT4ge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zZXQgfHwgIWFjdGl2ZSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQgcGRmID0gX1NUT1JFLnBkZiA9IHRoaXMuaXNQZGYoKTtcclxuXHJcbiAgICAgICAgaWYgKCFwZGYgJiYgd2luZG93LmRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdjb21wbGV0ZScpXHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5hZGRMaXN0ZW5lcignbG9hZCcsICgpID0+IHRoaXMuc2V0dXAoKSwgd2luZG93KTtcclxuXHJcbiAgICAgICAgX1NUT1JFLmlmcmFtZSA9IHRoaXMuaXNJRnJhbWUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRVUkwoKTtcclxuICAgICAgICB0aGlzLmNoZWNrVVJMKCk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICAgICAgaWYgKGFjdGl2ZSkgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXQgPSB0cnVlO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZXRVUkwoKSB7XHJcbiAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5kb2N1bWVudC5VUkwsXHJcbiAgICAgICAgICAgIGhhc2ggPSB3aW5kb3cuZG9jdW1lbnQubG9jYXRpb24uaGFzaCxcclxuICAgICAgICAgICAgaGFzaElkeCA9IHVybC5pbmRleE9mKGhhc2gpIHx8IHVybC5sZW5ndGg7XHJcblxyXG4gICAgICB0aGlzLnVybCA9IHVybC5zdWJzdHIoMCwgaGFzaElkeCk7XHJcbiAgICB9LFxyXG4gICAgaXNQZGYoKSB7XHJcbiAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy4nKS5wb3AoKS5zdWJzdHIoMCwgMykgPT09ICdwZGYnO1xyXG4gICAgfSxcclxuICAgIGlzSUZyYW1lKCkge1xyXG4gICAgICByZXR1cm4gd2luZG93ICE9PSB3aW5kb3cucGFyZW50LndpbmRvdztcclxuICAgIH0sXHJcbiAgICAvKmlzUmVhZGVyTW9kZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudXJsLnNwbGl0KCc/JylbMF0gPT09ICdhYm91dDpyZWFkZXInO1xyXG4gICAgfSwqL1xyXG4gICAgaXNFZGl0YWJsZShlbCkge1xyXG4gICAgICBjb25zdCBuYW1lID0gZWwudGFnTmFtZTtcclxuXHJcbiAgICAgIHJldHVybiAobmFtZSA9PT0gJ1RFWFRBUkVBJyB8fCBuYW1lID09PSAnSU5QVVQnIHx8IGVsLmNvbnRlbnRFZGl0YWJsZSA9PT0gJ3RydWUnKTtcclxuICAgIH0sXHJcbiAgICBkZWxlZ2F0ZShlKSB7XHJcbiAgICAgIGNvbnN0IGtleSA9IGUua2V5LnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICBtb2RLZXkgPSAoZS5tZXRhS2V5IHx8IGUuY3RybEtleSB8fCBlLmFsdEtleSB8fCBlLnNoaWZ0S2V5KSxcclxuICAgICAgICAgIGZ1bmN0aW9uS2V5cyA9IFsnYicsICdzJywgJ3knLCAneiddLFxyXG4gICAgICAgICAgZGVmYXVsdE1hcmtlcnMgPSBbJ20nLCAnMicsICczJ107XHJcblxyXG4gICAgICBpZiAoIWZ1bmN0aW9uS2V5cy5pbmNsdWRlcyhrZXkpICYmIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5pc0NvbGxhcHNlZCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICBpZiAodGhpcy5pc0VkaXRhYmxlKGUudGFyZ2V0KSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICBfU1RPUkUuZ2V0KCdzZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG5cclxuICAgICAgICBpZiAoIXNldHRpbmdzKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKCFtb2RLZXkpIHtcclxuICAgICAgICAgIGlmIChrZXkgPT09ICd3JyAmJiAhc2V0dGluZ3Muc2hvcnRjdXRzLndbMF0gJiYgc2V0dGluZ3Muc2hvcnRjdXRzLndbMV0pIHRoaXMubG9va3VwKCk7XHJcbiAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgc2V0dGluZ3MubWFya2Vyc1trZXldICYmXHJcbiAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAhZGVmYXVsdE1hcmtlcnMuaW5jbHVkZXMoa2V5KSB8fFxyXG4gICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICFzZXR0aW5ncy5zaG9ydGN1dHNba2V5XSB8fFxyXG4gICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAhc2V0dGluZ3Muc2hvcnRjdXRzW2tleV1bMF0gJiZcclxuICAgICAgICAgICAgICAgICAgc2V0dGluZ3Muc2hvcnRjdXRzW2tleV1bMV1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3ByZXNzZWQ6bWFya2VyLWtleScsIGUsIGtleSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxldCBzZXR0aW5nID0gc2V0dGluZ3Muc2hvcnRjdXRzW2tleV07XHJcblxyXG4gICAgICAgICAgaWYgKCFzZXR0aW5nIHx8ICFzZXR0aW5nWzFdKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgICBsZXQgc2hvcnRjdXQgPSBzZXR0aW5nWzBdLnNwbGl0KCctJyksXHJcbiAgICAgICAgICAgICAgczEsIHMyO1xyXG5cclxuICAgICAgICAgIHMxID0gc2hvcnRjdXRbMF07XHJcbiAgICAgICAgICBzMiA9IHNob3J0Y3V0WzFdO1xyXG5cclxuICAgICAgICAgIGlmICghZVtzMV0gfHwgKHMyICYmICFlW3MyXSkpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICAgIGlmIChrZXkgPT09ICd3JykgdGhpcy5sb29rdXAoKTtcclxuXHJcbiAgICAgICAgICBlbHNlIGlmIChkZWZhdWx0TWFya2Vycy5pbmNsdWRlcyhrZXkpICYmIHNldHRpbmdzLm1hcmtlcnNba2V5XSkge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3ByZXNzZWQ6bWFya2VyLWtleScsIGUsIGtleSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHRoaXMuZW1pdCgncHJlc3NlZDpob3RrZXknLCBrZXkpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBsb29rdXAoKSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkVGV4dCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpO1xyXG5cclxuICAgICAgaWYgKHNlbGVjdGVkVGV4dCkgdGhpcy5lbWl0KCdsb29rdXA6d29yZCcsIHNlbGVjdGVkVGV4dCk7XHJcbiAgICB9LFxyXG4gICAgY2hlY2tVUkwoKSB7XHJcbiAgICAgIHRoaXMucmVxdWVzdCgnY2hlY2s6dXJsJywgdGhpcy51cmwpXHJcbiAgICAgICAgLnRoZW4oZW50cnkgPT4geyBpZiAoZW50cnkpIHRoaXMub25VcmxGb3VuZChlbnRyeSk7IH0pO1xyXG4gICAgfSxcclxuICAgIHVuc2V0KG5hbWUpIHtcclxuICAgICAgaWYgKF9TVE9SRS5uYW1lICYmIF9TVE9SRS5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgICAgX1NUT1JFLm5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgX1NUT1JFLmVudHJ5ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmVtaXQoJ3Vuc2V0OmVudHJ5Jyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1cGRhdGUoZW50cnksIGZvcmNlKSB7XHJcbiAgICAgIGlmIChmb3JjZSB8fCBlbnRyeS51cmwuc3BsaXQoJyMnKVswXSA9PT0gdGhpcy51cmwpIHtcclxuICAgICAgICBfU1RPUkUubmFtZSA9IGVudHJ5Lm5hbWU7XHJcbiAgICAgICAgX1NUT1JFLmlzTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgX1NUT1JFLmVudHJ5ID0gZW50cnk7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdzZXQ6ZW50cnknKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uSG90a2V5KGtleSkge1xyXG4gICAgICBpZiAoa2V5ID09PSAndycpIHRoaXMubG9va3VwKCk7XHJcbiAgICB9LFxyXG4gICAgb25VcmxGb3VuZChlbnRyeSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZShlbnRyeSwgdHJ1ZSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5hY3RpdmUgJiYgIXRoaXMuaW5pdGlhbGl6ZWQgJiYgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRtLWlkXScpKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgICAgLyppZiAoX1JFQURFUilcclxuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMuZW1pdCgncmVzdG9yZTptYXJrcycsIG5hbWUpLCA1MDApOyovXHJcbiAgICAgICAgLy9lbHNlXHJcbiAgICAgICAgICB0aGlzLmVtaXQoJ3Jlc3RvcmU6bWFya3MnLCBlbnRyeSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvblNlbGVjdGlvbkNoYW5nZSgpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2VkOnNlbGVjdGlvbicsICF3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuaXNDb2xsYXBzZWQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9NT0RVTEUgfSBmcm9tICcuLy4uLy4uLy4uL3V0aWxzJ1xyXG5pbXBvcnQgX1NUT1JFIGZyb20gJy4vLi4vX3N0b3JlJ1xyXG5pbXBvcnQgX1NFTEVDVElPTiBmcm9tICcuL3NlbGVjdGlvbidcclxuXHJcbmNsYXNzIFJlc3RvcmVyIGV4dGVuZHMgX01PRFVMRSB7XHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcbiAgfVxyXG5cclxuICBwcm9jZXNzUGV1QVBldShkYXRhLCBmdW5jLCBjYikge1xyXG5cdFx0bGV0IGQgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkYXRhKSxcclxuXHRcdFx0ICBkb25lLCB0aW1lMDtcclxuXHJcblx0XHQoZnVuY3Rpb24gcmVjKCkge1xyXG5cdFx0XHRsZXQgbWF4ID0gK25ldyBEYXRlKCkgKyA1MDA7XHJcblx0XHRcdGRvIHtcclxuXHRcdFx0XHRkb25lID0gZnVuYyhkWzBdKTtcclxuXHRcdFx0XHRpZiAoZG9uZSkgZC5zaGlmdCgpO1xyXG5cclxuXHRcdFx0fSB3aGlsZSAoZC5sZW5ndGggPiAwICYmIG1heCA+ICtuZXcgRGF0ZSgpKTtcclxuXHJcblx0XHRcdGlmIChkLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoKCkgPT4gcmVjKCksIDI1KTtcclxuXHRcdFx0ZWxzZSBjYigpO1xyXG5cdFx0fSkoKTtcclxuXHR9XHJcbiAgc2V0Qm9keVNlbGVjdGlvbihlbCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uID0gbmV3IF9TRUxFQ1RJT04oZWwpO1xyXG5cclxuICAgIHRoaXMudHJpbW1lZFNlbGVjdGlvblRleHQgPSB0aGlzLnNxdWVlemUoc2VsZWN0aW9uLnRleHQpO1xyXG5cclxuICAgIHRoaXMuYm9keVRleHROb2RlcyA9IHNlbGVjdGlvbi5ub2RlcztcclxuICAgIHRoaXMucmFuZ2UgPSBzZWxlY3Rpb24ucmFuZ2U7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHNxdWVlemUodGV4dCkge1xyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvXFx0fFxcc3xcXG58XFxyL2csICcnKTtcclxuICB9XHJcbiAgd2hpY2hDaGlsZChwYXJlbnQsIGNoaWxkLCBjb250ZXh0KSB7XHJcblx0XHRpZiAoIXBhcmVudCB8fCAhY2hpbGQpIHJldHVybiBudWxsO1xyXG5cclxuXHRcdGxldCBjaGlsZHJlbiA9IGNoaWxkLm5vZGVUeXBlID09PSAzID8gcGFyZW50LmNoaWxkTm9kZXMgOiBwYXJlbnQuY2hpbGRyZW4sXHJcblx0XHQgICAgYyA9IGNoaWxkcmVuLmxlbmd0aCxcclxuXHRcdCAgICBwb3MgPSAwLCBpID0gMCwgY3VycmVudENoaWxkO1xyXG5cclxuICAgIGZvciAoIDsgaSA8IGM7IGkrKykge1xyXG4gICAgICBjdXJyZW50Q2hpbGQgPSBjaGlsZHJlbltpXTtcclxuXHJcblx0XHRcdGlmIChjdXJyZW50Q2hpbGQgPT09IGNoaWxkKSByZXR1cm4gcG9zO1xyXG5cclxuXHRcdFx0aWYgKGNvbnRleHQpIHtcclxuXHRcdFx0XHRpZiAoY3VycmVudENoaWxkLm5vZGVOYW1lID09PSBjb250ZXh0KSBwb3MrKztcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCEoY3VycmVudENoaWxkLm5vZGVUeXBlID09PSAzICYmICFjdXJyZW50Q2hpbGQuZGF0YSkpIHBvcysrO1xyXG4gICAgICB9XHJcblx0XHR9XHJcblx0fVxyXG4gIHJlcG9ydCgpIHtcclxuICAgIGxldCBsbCA9IHRoaXMubG9zdC5sZW5ndGg7XHJcbiAgICBpZiAobGwpIHtcclxuICAgICAgd2hpbGUobGwtLSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmxvc3RbbGxdLnRlbXA7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lbWl0KCdmYWlsZWQ6cmVzdG9yYXRpb24nKTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgdGhpcy5lbWl0KCdzdWNjZWVkZWQ6cmVzdG9yYXRpb24nKTtcclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgnZmluaXNoZWQ6cmVzdG9yYXRpb24nLCBfU1RPUkUubmFtZSwgdGhpcy5yZXN0b3JlZCwgdGhpcy5sb3N0LCB0aGlzLmFyZWEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIG5ldyBSZXN0b3Jlcih7XHJcbiAgICAgIGV2ZW50czoge1xyXG4gICAgICAgIEVOVjoge1xyXG4gICAgICAgICAgJ3Jlc3RvcmU6bWFya3MnOiAnaW5pdCdcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHF1ZXVlOiBbXSxcclxuICAgICAgY2FjaGU6IFtdLFxyXG4gICAgICBsb3N0OiBbXSxcclxuICAgICAgcmVzdG9yZWQ6IFtdLFxyXG4gICAgICBhcmVhOiAnc3luYycsXHJcbiAgICAgIHBoYXNlOiAxLFxyXG5cclxuICAgICAgaW5pdChlbnRyeSkge1xyXG4gICAgICAgIGlmIChfU1RPUkUucGRmKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIF9TVE9SRS5uYW1lID0gZW50cnkubmFtZTtcclxuICAgICAgICBfU1RPUkUuZW50cnkgPSBlbnRyeTtcclxuXHJcbiAgICAgICAgbGV0IG5vdyA9IFtdLCBwb3N0cG9uZWQgPSBbXSxcclxuICAgICAgICAgICAgbWFya3MgPSBlbnRyeS5tYXJrcyxcclxuICAgICAgICAgICAgbCA9IG1hcmtzLmxlbmd0aCxcclxuICAgICAgICAgICAgaSA9IDAsIG1hcms7XHJcblxyXG4gICAgICAgIHRoaXMuYXJlYSA9IGVudHJ5LnN5bmNlZCA/ICdzeW5jJyA6ICdsb2NhbCc7XHJcblxyXG4gICAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICBtYXJrID0gbWFya3NbaV07XHJcblxyXG4gICAgICAgICAgdGhpcy5jb252ZXJ0RGVzY3JpcHRpb24obWFyaykuY3JlYXRlVGVtcE9iamVjdChtYXJrKTtcclxuXHJcbiAgICAgICAgICBpZiAobWFyay5jb25kcy5uMSA9PT0gJ1RNJykgcG9zdHBvbmVkLnB1c2gobWFyayk7XHJcbiAgICAgICAgICBlbHNlIG5vdy5wdXNoKG1hcmspO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5xdWV1ZS5wdXNoKG5vdyk7XHJcblxyXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBwb3N0cG9uZWQubGVuZ3RoOyBpIDwgbDsgaSsrKVxyXG4gICAgICAgICAgdGhpcy5xdWV1ZS5wdXNoKFtwb3N0cG9uZWRbaV1dKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZXN0b3JlKCkucmVwb3J0KCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnZlcnREZXNjcmlwdGlvbihtYXJrKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtYXJrLmNvbmRzLm8gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICBsZXQgY29uZHMgPSBtYXJrLmNvbmRzLFxyXG4gICAgICAgICAgICAgIGNvbnZlcnRlZENvbmRzID0ge1xyXG4gICAgICAgICAgICAgICAgbzogY29uZHMuc3RhcnRPZmZzZXQsXHJcbiAgICAgICAgICAgICAgICBuMTogY29uZHMuZmlyc3ROb2RlTmFtZSxcclxuICAgICAgICAgICAgICAgIG4yOiBjb25kcy5maXJzdFBhcmVudE5vZGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgcDE6IGNvbmRzLmZpcnN0VGV4dE5vZGVQb3NpdGlvbixcclxuICAgICAgICAgICAgICAgIHAyOiBjb25kcy5maXJzdE5vZGVQb3NpdGlvbixcclxuICAgICAgICAgICAgICAgIHAzOiBjb25kcy5maXJzdFBhcmVudE5vZGVQb3NpdGlvbixcclxuICAgICAgICAgICAgICAgIHA0OiBjb25kcy5maXJzdEdyYW1wYU5vZGVQb3NpdGlvblxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICBkZWxldGUgbWFyay5jb25kcztcclxuICAgICAgICAgIG1hcmsuY29uZHMgPSBjb252ZXJ0ZWRDb25kcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNyZWF0ZVRlbXBPYmplY3QobWFyaykge1xyXG4gICAgICAgIGxldCB0cmltbWVkVGV4dCA9IHRoaXMuc3F1ZWV6ZShtYXJrLnRleHQpO1xyXG5cclxuICAgICAgICBtYXJrLnRlbXAgPSB7XHJcbiAgICAgICAgICB0cmltbWVkVGV4dDogdHJpbW1lZFRleHQsXHJcbiAgICAgICAgICB0cmltbWVkVGV4dExlbmd0aDogdHJpbW1lZFRleHQubGVuZ3RoLFxyXG4gICAgICAgICAgcG9zc2libGVQb3NpdGlvbnM6IFtdLFxyXG4gICAgICAgICAgcG9zc2libGVTdGFydE5vZGVzOiBbXSxcclxuICAgICAgICAgIHBvc3NpYmxlRW5kczoge30sXHJcbiAgICAgICAgICBwb3NzaWJsZUZvY3VzT2Zmc2V0czogW11cclxuICAgICAgICB9O1xyXG4gICAgICB9LFxyXG4gICAgICByZXN0b3JlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBoYXNlID09PSAyKSB0aGlzLnNvcnRRdWV1ZUJ5SWQoKTtcclxuXHJcbiAgICAgICAgbGV0IG1hcmtzID0gdGhpcy5tYXJrcyA9IHRoaXMucXVldWUuc2hpZnQoKSxcclxuICAgICAgICAgICAgbGVuZ3RoID0gbWFya3MgPyBtYXJrcy5sZW5ndGggOiAwO1xyXG5cclxuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKGxlbmd0aCkge1xyXG4gICAgICAgICAgdGhpcy5zZXRCb2R5U2VsZWN0aW9uKHdpbmRvdy5kb2N1bWVudC5ib2R5KVxyXG4gICAgICAgICAgICAgIC5nZXRUZXh0UG9zaXRpb25zKG1hcmtzLCBsZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGlmICh0aGlzLnBoYXNlID09PSAxICYmIGxlbmd0aCA+IDEpXHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZU92ZXJsYXBwaW5ncygpO1xyXG5cclxuICAgICAgICAgIHRoaXMuZmluZFBvc3NpYmxlRXh0cmVtYSgpXHJcbiAgICAgICAgICAgICAgLnJ1bGVPdXRNdWx0aXBsZXMoKVxyXG4gICAgICAgICAgICAgIC5yZWNyZWF0ZU1hcmtzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBoYXNlKys7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnF1ZXVlLmxlbmd0aCkgdGhpcy5yZXN0b3JlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9LFxyXG4gICAgICBzb3J0UXVldWVCeUlkKCkge1xyXG4gICAgICAgIGxldCBtYXJrcyA9IHRoaXMucXVldWUsXHJcbiAgICAgICAgICAgIGwgPSBtYXJrcyA/IG1hcmtzLmxlbmd0aCA6IDAsXHJcbiAgICAgICAgICAgIHRlbXAgPSBbXSxcclxuICAgICAgICAgICAgcmVzID0gW10sXHJcbiAgICAgICAgICAgIGkgPSAwLFxyXG4gICAgICAgICAgICBtYXJrLCB0O1xyXG5cclxuICAgICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgICBpZiAoIW1hcmtzW2xdLmxlbmd0aCkgY29udGludWU7XHJcbiAgICAgICAgICBtYXJrID0gbWFya3NbbF1bMF07XHJcbiAgICAgICAgICB0ZW1wW21hcmsuaWRdID0gbWFyaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKHQgPSB0ZW1wLmxlbmd0aDsgaSA8IHQ7IGkrKykge1xyXG4gICAgICAgICAgaWYgKHRlbXBbaV0pIHRoaXMucXVldWUucHVzaChbdGVtcFtpXV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfSxcclxuICAgICAgZ2V0VGV4dFBvc2l0aW9ucyhtYXJrcywgbCkge1xyXG4gICAgICAgIGxldCB0cmltbWVkU2VsZWN0aW9uVGV4dCA9IHRoaXMudHJpbW1lZFNlbGVjdGlvblRleHQsXHJcbiAgICAgICAgICAgIGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMgPSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMgPSBbXSxcclxuICAgICAgICAgICAgZW5kUG9zaXRpb25zID0gW10sXHJcbiAgICAgICAgICAgIG1hcmssIG1hcmtUZW1wLCB0cmltbWVkVGV4dCwgdHJpbW1lZFRleHRMZW5ndGgsIHAsIGVuZFBvc2l0aW9uO1xyXG5cclxuICAgICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgICBwID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgbWFyayA9IG1hcmtzW2xdO1xyXG4gICAgICAgICAgbWFya1RlbXAgPSBtYXJrLnRlbXA7XHJcblxyXG4gICAgICAgICAgaWYgKCFtYXJrVGVtcCkge1xyXG4gICAgICAgICAgICBtYXJrcy5zcGxpY2UobCwgMSk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRyaW1tZWRUZXh0ID0gbWFya1RlbXAudHJpbW1lZFRleHQ7XHJcbiAgICAgICAgICB0cmltbWVkVGV4dExlbmd0aCA9IG1hcmtUZW1wLnRyaW1tZWRUZXh0TGVuZ3RoO1xyXG5cclxuICAgICAgICAgIHdoaWxlIChwICE9PSAtMSkge1xyXG4gICAgICAgICAgICBpZiAocCA9PT0gdW5kZWZpbmVkKSBwID0gLTE7XHJcbiAgICAgICAgICAgIHAgPSB0cmltbWVkU2VsZWN0aW9uVGV4dC5pbmRleE9mKHRyaW1tZWRUZXh0LCBwICsgMSk7XHJcbiAgICAgICAgICAgIGVuZFBvc2l0aW9uID0gcCArIHRyaW1tZWRUZXh0TGVuZ3RoO1xyXG4gICAgICAgICAgICBtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5wdXNoKHApO1xyXG4gICAgICAgICAgICBhbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLnB1c2goW3AsIGVuZFBvc2l0aW9uLCBtYXJrXSk7XHJcbiAgICAgICAgICAgIGVuZFBvc2l0aW9ucy5wdXNoKGVuZFBvc2l0aW9uKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5wb3AoKTtcclxuICAgICAgICAgIGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMucG9wKCk7XHJcbiAgICAgICAgICBlbmRQb3NpdGlvbnMucG9wKCk7XHJcblxyXG4gICAgICAgICAgaWYgKCFtYXJrVGVtcC5wb3NzaWJsZVBvc2l0aW9ucy5sZW5ndGgpXHJcbiAgICAgICAgICAgIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNvcnRQb3NzaWJsZVN0YXJ0UG9zaXRpb25zKGFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMpO1xyXG4gICAgICAgIHRoaXMubWF4UG9zaXRpb24gPSBNYXRoLm1heC5hcHBseShudWxsLCBlbmRQb3NpdGlvbnMpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfSxcclxuICAgICAgc29ydFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMocG9zaXRpb25zKSB7XHJcbiAgICAgICAgbGV0IGwgPSBwb3NpdGlvbnMubGVuZ3RoLFxyXG4gICAgICAgICAgICB0ZW1wID0gW10sXHJcbiAgICAgICAgICAgIGkgPSAwLFxyXG4gICAgICAgICAgICBwb3MsIHN0YXJ0LCB0O1xyXG5cclxuICAgICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgICBwb3MgPSBwb3NpdGlvbnNbbF07XHJcbiAgICAgICAgICBzdGFydCA9IHBvc1swXTtcclxuXHJcbiAgICAgICAgICBpZiAodGVtcFtzdGFydF0pIHRlbXAuc3BsaWNlKHN0YXJ0ICsgMSwgMCwgcG9zKTtcclxuICAgICAgICAgIGVsc2UgdGVtcFtzdGFydF0gPSBwb3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHQgPSB0ZW1wLmxlbmd0aDtcclxuICAgICAgICB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yICg7IGkgPCB0OyBpKyspXHJcbiAgICAgICAgICBpZiAodGVtcFtpXSkgdGhpcy5hbGxQb3NzaWJsZVN0YXJ0UG9zaXRpb25zLnB1c2godGVtcFtpXSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHBvc3Rwb25lT3ZlcmxhcHBpbmdzKCkge1xyXG4gICAgICAgIGxldCBwb3NpdGlvbnMgPSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMsXHJcbiAgICAgICAgICAgIHAgPSBwb3NpdGlvbnMubGVuZ3RoLFxyXG4gICAgICAgICAgICBwb3N0cG9uZWQgPSBbXSxcclxuICAgICAgICAgICAgcG9zMSwgcG9zMiwgaSwgbTEsIG0yLCBpZDtcclxuXHJcbiAgICAgICAgaWYgKHAgPiAxKSB7XHJcbiAgICAgICAgICB3aGlsZSAocC0tID4gMSkge1xyXG4gICAgICAgICAgICBwb3MxID0gcG9zaXRpb25zW3AgLSAxXTtcclxuICAgICAgICAgICAgcG9zMiA9IHBvc2l0aW9uc1twXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwb3MxWzFdID4gcG9zMlswXSAmJiBwb3MxWzBdIDwgcG9zMlsxXSkge1xyXG4gICAgICAgICAgICAgIG0xID0gcG9zMVsyXTtcclxuICAgICAgICAgICAgICBtMiA9IHBvczJbMl07XHJcblxyXG4gICAgICAgICAgICAgIGlmIChtMS5pZCA8IG0yLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBpZCA9IG0yLmlkO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghcG9zdHBvbmVkLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG0yKTtcclxuICAgICAgICAgICAgICAgICAgcG9zdHBvbmVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlkID0gbTEuaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFwb3N0cG9uZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucG9zdHBvbmUobTEpO1xyXG4gICAgICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwID0gcG9zdHBvbmVkLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcDsgaSsrKVxyXG4gICAgICAgICAgICB0aGlzLmN1dE91dEZvcihwb3N0cG9uZWRbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfSxcclxuICAgICAgY3V0T3V0Rm9yKGlkKSB7XHJcbiAgICAgICAgbGV0IHBvc2l0aW9ucyA9IHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucyxcclxuICAgICAgICAgICAgcCA9IHBvc2l0aW9ucy5sZW5ndGg7XHJcblxyXG4gICAgICAgIHdoaWxlKHAtLSkge1xyXG4gICAgICAgICAgaWYgKHBvc2l0aW9uc1twXVsyXS5pZCA9PT0gaWQpXHJcbiAgICAgICAgICAgIHRoaXMuYWxsUG9zc2libGVTdGFydFBvc2l0aW9ucy5zcGxpY2UocCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBwb3N0cG9uZShtYXJrKSB7XHJcbiAgICAgICAgbGV0IHF1ZXVlID0gdGhpcy5xdWV1ZSxcclxuICAgICAgICAgICAgbCA9IHF1ZXVlLmxlbmd0aCxcclxuICAgICAgICAgICAgYWxyZWFkeUluY2x1ZGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAgIGlmIChxdWV1ZVtsXVswXSA9PT0gbWFyaykge1xyXG4gICAgICAgICAgICBhbHJlYWR5SW5jbHVkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFhbHJlYWR5SW5jbHVkZWQpXHJcbiAgICAgICAgICB0aGlzLnF1ZXVlLnB1c2goW21hcmtdKTtcclxuICAgICAgfSxcclxuICAgICAgZmluZFBvc3NpYmxlRXh0cmVtYSgpIHtcclxuICAgICAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24sXHJcbiAgICAgICAgICAgIHJhbmdlID0gdGhpcy5yYW5nZSxcclxuICAgICAgICAgICAgbm9kZXMgPSB0aGlzLmJvZHlUZXh0Tm9kZXMsXHJcbiAgICAgICAgICAgIG4gPSBub2Rlcy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGluZGljZXMgPSB0aGlzLmFsbFBvc3NpYmxlU3RhcnRQb3NpdGlvbnMsXHJcbiAgICAgICAgICAgIHBoYXNlID0gdGhpcy5waGFzZSxcclxuICAgICAgICAgICAgY2FjaGUgPSB0aGlzLmNhY2hlID0gW10sXHJcbiAgICAgICAgICAgIHNhdGlzZmllZCA9IFtdLFxyXG4gICAgICAgICAgICBpID0gMCwgY2hhcnMgPSAwLFxyXG4gICAgICAgICAgICBuZXh0U3RhcnRGb3VuZCwgZW5kaW5nc0luVGhpc05vZGUsXHJcbiAgICAgICAgICAgIG5vZGUsIG5vZGVzVGV4dCwgbm9kZXNUZXh0TGVuZ3RoLFxyXG4gICAgICAgICAgICBtYXJrLCBkaWZmLCBsLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgZSwgZiwgaWQsIHAsIHEsIHgsIG0sXHJcbiAgICAgICAgICAgIHBvc3NpYmxlRm9jdXNPZmZzZXQsIHN0YXJ0Rm91bmRGb3IsIHBvc3Rwb25lZCwgaGFzRW5kaW5nc0luVGhpc05vZGU7XHJcblxyXG4gICAgICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICBub2RlID0gbm9kZXNbaV07XHJcbiAgICAgICAgICBub2Rlc1RleHQgPSB0aGlzLnNxdWVlemUobm9kZS5kYXRhKTtcclxuICAgICAgICAgIG5vZGVzVGV4dExlbmd0aCA9IG5vZGVzVGV4dC5sZW5ndGg7XHJcbiAgICAgICAgICBjaGFycyArPSBub2Rlc1RleHRMZW5ndGg7XHJcbiAgICAgICAgICBsID0gaW5kaWNlcy5sZW5ndGg7XHJcbiAgICAgICAgICBzdGFydEZvdW5kRm9yID0gW107XHJcbiAgICAgICAgICBwb3N0cG9uZWQgPSBbXTtcclxuICAgICAgICAgIGhhc0VuZGluZ3NJblRoaXNOb2RlID0gbnVsbDtcclxuXHJcbiAgICAgICAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0UG9zaXRpb24gPSBpbmRpY2VzW2xdWzBdO1xyXG4gICAgICAgICAgICBlbmRQb3NpdGlvbiA9IGluZGljZXNbbF1bMV07XHJcbiAgICAgICAgICAgIG1hcmsgPSBpbmRpY2VzW2xdWzJdO1xyXG4gICAgICAgICAgICBpZCA9IG1hcmsuaWQ7XHJcblxyXG4gICAgICAgICAgICBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvciA9IG1hcmsudGVtcC5zdGFydEZvdW5kRm9yIHx8IFtdO1xyXG4gICAgICAgICAgICBtYXJrLnRlbXAuZW5kRm91bmRGb3IgPSBtYXJrLnRlbXAuZW5kRm91bmRGb3IgfHwgW107XHJcblxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgIW1hcmsudGVtcC5zdGFydEZvdW5kRm9yLmluY2x1ZGVzKHN0YXJ0UG9zaXRpb24pICYmXHJcbiAgICAgICAgICAgICAgY2hhcnMgPiBzdGFydFBvc2l0aW9uICYmXHJcbiAgICAgICAgICAgICAgbWFyay50ZW1wLnBvc3NpYmxlU3RhcnROb2Rlcy5sZW5ndGggPCBtYXJrLnRlbXAucG9zc2libGVQb3NpdGlvbnMubGVuZ3RoXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIGlmIChoYXNFbmRpbmdzSW5UaGlzTm9kZSAmJiBoYXNFbmRpbmdzSW5UaGlzTm9kZS5pZCA8IG1hcmsuaWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwaGFzZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnBvc3Rwb25lKG1hcmspO1xyXG4gICAgICAgICAgICAgICAgICBwb3N0cG9uZWQucHVzaChpZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbmRpY2VzLnNwbGljZShsLCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNhdGlzZmllc0Rlc2NyaXB0aW9uKG1hcmssIG5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChwaGFzZSA9PT0gMSAmJiBpZCAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdHBvbmUobWFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdHBvbmVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGluZGljZXMuc3BsaWNlKGwsIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgbWFyay50ZW1wLnBvc3NpYmxlU3RhcnROb2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICBtYXJrLnRlbXAuc3RhcnRGb3VuZEZvci5wdXNoKHN0YXJ0UG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICBzdGFydEZvdW5kRm9yLnB1c2goaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3IuaW5jbHVkZXMoc3RhcnRQb3NpdGlvbikgJiZcclxuICAgICAgICAgICAgICAhbWFyay50ZW1wLmVuZEZvdW5kRm9yLmluY2x1ZGVzKGVuZFBvc2l0aW9uKSAmJlxyXG4gICAgICAgICAgICAgIChjaGFycyAtIGVuZFBvc2l0aW9uKSA+PSAwXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIGlmIChNYXRoLm1pbi5hcHBseShudWxsLCBzdGFydEZvdW5kRm9yKSA8IGlkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGhhc2UgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0cG9uZShtYXJrKTtcclxuICAgICAgICAgICAgICAgICAgcG9zdHBvbmVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW5kaWNlcy5zcGxpY2UobCwgMSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBvc3NpYmxlRm9jdXNPZmZzZXQgPSB0aGlzLmZpbmRGb2N1c09mZnNldChtYXJrLCBub2RlLCBlbmRQb3NpdGlvbiAtIChjaGFycyAtIG5vZGVzVGV4dExlbmd0aCkpO1xyXG4gICAgICAgICAgICAgICAgbWFyay50ZW1wLnBvc3NpYmxlRm9jdXNPZmZzZXRzLnB1c2gocG9zc2libGVGb2N1c09mZnNldCk7XHJcbiAgICAgICAgICAgICAgICBtYXJrLnRlbXAuZW5kRm91bmRGb3IucHVzaChlbmRQb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBtYXJrLnRlbXAucG9zc2libGVFbmRzW3N0YXJ0UG9zaXRpb25dID0ge1xyXG4gICAgICAgICAgICAgICAgICBub2RlOiBub2RlLFxyXG4gICAgICAgICAgICAgICAgICBvZmZzZXQ6IHBvc3NpYmxlRm9jdXNPZmZzZXRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNhdGlzZmllZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgICAgICAgY2FjaGUucHVzaChtYXJrKTtcclxuICAgICAgICAgICAgICAgICAgc2F0aXNmaWVkLnB1c2goaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGhhc0VuZGluZ3NJblRoaXNOb2RlID0gbWFyaztcclxuICAgICAgICAgICAgICAgIGluZGljZXMuc3BsaWNlKGwsIDEpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcCA9IHBvc3Rwb25lZC5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgaWYgKHApIGZvciAoeCA9IDA7IHggPCBwOyB4KyspIHRoaXMuY3V0T3V0Rm9yKHBvc3Rwb25lZFt4XSk7XHJcblxyXG4gICAgICAgICAgaWYgKGNoYXJzID4gdGhpcy5tYXhQb3NpdGlvbikgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwaGFzZSAhPT0gMSkge1xyXG4gICAgICAgICAgZm9yIChtIGluIHRoaXMubWFya3MpIHtcclxuICAgICAgICAgICAgaWYgKCFzYXRpc2ZpZWQuaW5jbHVkZXModGhpcy5tYXJrc1ttXS5pZCkpIHRoaXMubG9zdC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfSxcclxuICAgICAgcnVsZU91dE11bHRpcGxlcygpIHtcclxuICAgICAgICBsZXQgY2FjaGUgPSB0aGlzLmNhY2hlLFxyXG4gICAgICAgICAgICBpID0gY2FjaGUubGVuZ3RoLFxyXG4gICAgICAgICAgICBtYXJrLCBwb3NzaWJsZVN0YXJ0Tm9kZXMsIHAsIHBhcmVudCwgZ3JhbXBhLCBncmFuZGdyYW1wYSwgbWF0Y2hlcywgZmFpbGVkLCBxO1xyXG5cclxuICAgICAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgICBtYXJrID0gY2FjaGVbaV07XHJcbiAgICAgICAgICBtYXRjaGVzID0gW107XHJcbiAgICAgICAgICBmYWlsZWQgPSBmYWxzZTtcclxuICAgICAgICAgIHBvc3NpYmxlU3RhcnROb2RlcyA9IG1hcmsudGVtcC5wb3NzaWJsZVN0YXJ0Tm9kZXM7XHJcbiAgICAgICAgICBwID0gcG9zc2libGVTdGFydE5vZGVzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICBpZiAocCA+IDEpIHtcclxuICAgICAgICAgICAgd2hpbGUgKHAtLSkge1xyXG4gICAgICAgICAgICAgIHBhcmVudCA9IHBvc3NpYmxlU3RhcnROb2Rlc1twXS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgZ3JhbXBhID0gcGFyZW50LnBhcmVudE5vZGUgfHwgMDtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKCFncmFtcGEgfHwgbWFyay5jb25kcy5wMyA9PT0gdGhpcy53aGljaENoaWxkKGdyYW1wYSwgcGFyZW50KSlcclxuICAgICAgICAgICAgICAgIG1hdGNoZXMucHVzaChwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIW1hdGNoZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgIHAgPSAwO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPT09IDEpIHAgPSBtYXRjaGVzWzBdO1xyXG4gICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobWF0Y2hlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgcSA9IG1hdGNoZXMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgIHBhcmVudCA9IHBvc3NpYmxlU3RhcnROb2Rlc1txXS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICAgICAgICBncmFtcGEgPSBwYXJlbnQucGFyZW50Tm9kZSB8fCAwO1xyXG4gICAgICAgICAgICAgICAgICBncmFuZGdyYW1wYSA9IGdyYW1wYSAmJiBncmFtcGEucGFyZW50Tm9kZSA/IGdyYW1wYS5wYXJlbnROb2RlIDogMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGlmICghZ3JhbmRncmFtcGEgfHwgbWFyay5jb25kcy5wNCA9PT0gdGhpcy53aGljaENoaWxkKGdyYW5kZ3JhbXBhLCBncmFtcGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcCA9IHE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghcCkgcCA9IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgcCA9IDA7XHJcblxyXG4gICAgICAgICAgcCA9IHAgfHwgMDtcclxuXHJcbiAgICAgICAgICBtYXJrLnRlbXAuc3RhcnROb2RlID0gbWFyay50ZW1wLnBvc3NpYmxlU3RhcnROb2Rlc1twXTtcclxuXHJcbiAgXHRcdFx0XHR0aGlzLnNldE1hdGNoaW5nRW5kKG1hcmssIHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfSxcclxuICBcdFx0c2V0TWF0Y2hpbmdFbmQobWFyaywgcCkge1xyXG4gIFx0XHRcdGxldCBzdGFydFBvc2l0aW9uID0gbWFyay50ZW1wLnN0YXJ0Rm91bmRGb3JbcF0sXHJcbiAgICAgICAgICAgIGVuZCA9IG1hcmsudGVtcC5wb3NzaWJsZUVuZHNbc3RhcnRQb3NpdGlvbl07XHJcblxyXG4gIFx0XHRcdG1hcmsudGVtcC5lbmROb2RlID0gZW5kLm5vZGU7XHJcbiAgXHQgICAgbWFyay50ZW1wLmZvY3VzT2Zmc2V0ID0gZW5kLm9mZnNldDtcclxuICBcdFx0fSxcclxuICAgICAgc2F0aXNmaWVzRGVzY3JpcHRpb24obWFyaywgbm9kZSkge1xyXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IG1hcmsuY29uZHMsXHJcbiAgICAgICAgICAgIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGUsXHJcbiAgICAgICAgICAgIGdyYW1wYSA9IHBhcmVudE5vZGUucGFyZW50Tm9kZSxcclxuICAgICAgICAgICAgZ3JhbmRncmFtcGEgPSBncmFtcGEgJiYgZ3JhbXBhLnBhcmVudE5vZGUgPyBncmFtcGEucGFyZW50Tm9kZSA6IDAsXHJcbiAgICAgICAgICAgIHN0YXJ0T2Zmc2V0ID0gZGVzY3JpcHRpb24ubyxcclxuICAgICAgICAgICAgcmVsZXZhbnROb2RlVGV4dCA9IG5vZGUuZGF0YS5zdWJzdHJpbmcoc3RhcnRPZmZzZXQpLnRyaW0oKSxcclxuICAgICAgICAgICAgbCA9IHJlbGV2YW50Tm9kZVRleHQubGVuZ3RoLFxyXG4gICAgICAgICAgICBtYXJrVGV4dCA9IG1hcmsudGV4dC50cmltKCksXHJcbiAgICAgICAgICAgIG0gPSBtYXJrVGV4dC5sZW5ndGgsXHJcbiAgICAgICAgICAgIHRleHRzTWF0Y2g7XHJcblxyXG4gICAgICAgIGlmIChtIDw9IGwpXHJcbiAgICAgICAgICB0ZXh0c01hdGNoID0gdGhpcy5zcXVlZXplKHJlbGV2YW50Tm9kZVRleHQpLmluZGV4T2YodGhpcy5zcXVlZXplKG1hcmtUZXh0KSkgPT09IDA7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgdGV4dHNNYXRjaCA9IHRoaXMuc3F1ZWV6ZShtYXJrVGV4dCkuaW5kZXhPZih0aGlzLnNxdWVlemUocmVsZXZhbnROb2RlVGV4dCkpID09PSAwO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgdGV4dHNNYXRjaCAmJlxyXG4gICAgICAgICAgKHBhcmVudE5vZGUubm9kZU5hbWUgPT09IGRlc2NyaXB0aW9uLm4xIHx8IChkZXNjcmlwdGlvbi5uMSA9PT0gJ1RNJyAmJiBwYXJlbnROb2RlLmhhc0F0dHJpYnV0ZSgnZGF0YS10bS1pZCcpKSkgJiZcclxuICAgICAgICAgICghZ3JhbXBhIHx8IGdyYW1wYS5ub2RlTmFtZSA9PT0gZGVzY3JpcHRpb24ubjIpICYmXHJcbiAgICAgICAgICB0aGlzLndoaWNoQ2hpbGQocGFyZW50Tm9kZSwgbm9kZSkgPT09IGRlc2NyaXB0aW9uLnAxXHJcbiAgICAgICAgKTtcclxuICAgICAgfSxcclxuICAgICAgZmluZEZvY3VzT2Zmc2V0KG1hcmssIG5vZGUsIG4pIHtcclxuICAgICAgICBsZXQgbm9kZVRleHQgPSBub2RlLmRhdGEsXHJcbiAgICAgICAgICAgIGwgPSBub2RlVGV4dC5sZW5ndGgsXHJcbiAgICAgICAgICAgIGkgPSAwLCBjb3VudGVyID0gMDtcclxuXHJcbiAgXHRcdFx0Zm9yICg7IGkgPCBsOyBpKyspIHtcclxuICBcdFx0XHRcdGlmICh0aGlzLnNxdWVlemUobm9kZVRleHRbaV0pKSBjb3VudGVyKys7XHJcblxyXG4gIFx0XHRcdFx0aWYgKGNvdW50ZXIgPT09IG4pIHJldHVybiAoL1xccyQvLnRlc3QobWFyay50ZXh0KSA/IGkgKyAyIDogaSArIDEpO1xyXG4gIFx0XHRcdH1cclxuICAgICAgfSxcclxuICAgICAgcmVjcmVhdGVNYXJrcygpIHtcclxuICAgICAgICBsZXQgcmFuZ2UgPSB0aGlzLnJhbmdlLFxyXG4gICAgICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbixcclxuICAgICAgICAgICAgbWFya3MgPSB0aGlzLmNhY2hlLFxyXG4gICAgICAgICAgICBpID0gbWFya3MubGVuZ3RoLFxyXG4gICAgICAgICAgICBtYXJrLCBtYXJrVGVtcCwgc3RhcnQsIGVuZCwgZm9jdXNPZmZzZXQ7XHJcblxyXG4gICAgICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgICAgIG1hcmsgPSBtYXJrc1tpXTtcclxuICAgICAgICAgIG1hcmtUZW1wID0gbWFyay50ZW1wO1xyXG4gICAgICAgICAgc3RhcnQgPSBtYXJrVGVtcC5zdGFydE5vZGU7XHJcbiAgICAgICAgICBlbmQgPSBtYXJrVGVtcC5lbmROb2RlO1xyXG4gICAgICAgICAgZm9jdXNPZmZzZXQgPSBtYXJrVGVtcC5mb2N1c09mZnNldDtcclxuXHJcbiAgICAgICAgICBpZiAoIXN0YXJ0IHx8ICFlbmQgfHwgISh0eXBlb2YgZm9jdXNPZmZzZXQgPT09ICdudW1iZXInKSlcclxuICAgICAgICAgICAgdGhpcy5sb3N0LnB1c2gobWFyayk7XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICByYW5nZS5zZXRTdGFydChzdGFydCwgbWFyay5jb25kcy5vKTtcclxuICAgICAgICAgICAgICByYW5nZS5zZXRFbmQoZW5kLCBmb2N1c09mZnNldCk7XHJcbiAgICAgIFx0XHRcdCAgc2VsZWN0aW9uLnJlc3VtZShyYW5nZSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5lbWl0KCdyZXN0b3JlZDpyYW5nZScsIHNlbGVjdGlvbiwgbWFyayk7XHJcbiAgICAgICAgICAgICAgdGhpcy5yZXN0b3JlZC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgICB0aGlzLmxvc3QucHVzaChtYXJrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWxldGUgbWFyay50ZW1wO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSksXHJcblxyXG4gICAgbmV3IFJlc3RvcmVyKHtcclxuICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgRU5WOiB7XHJcbiAgICAgICAgICAncmVzdG9yZTptYXJrcyc6ICdpbml0J1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgc2VsOiBudWxsLFxyXG4gICAgICB0cmltbWVkVGV4dDogJycsXHJcbiAgICAgIGxvc3Q6IFtdLFxyXG4gICAgICByZXN0b3JlZDogW10sXHJcblxyXG4gICAgICBpbml0KGVudHJ5KSB7XHJcbiAgICAgICAgaWYgKCFfU1RPUkUucGRmKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIF9TVE9SRS5uYW1lID0gZW50cnkubmFtZTtcclxuICAgICAgICBfU1RPUkUuZW50cnkgPSBlbnRyeTtcclxuXHJcbiAgICAgICAgdGhpcy5hcmVhID0gZW50cnkuc3luY2VkID8gJ3N5bmMnIDogJ2xvY2FsJztcclxuXHJcbiAgICAgICAgdGhpcy5yZXN0b3JlKGVudHJ5Lm1hcmtzLCBlbnRyeS5jb3VudCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHJlc3RvcmUobWFya3MsIGlkQ291bnQpIHtcclxuICAgICAgICAvL01hcmsucHJvdG90eXBlLmNvdW50ID0gaWRDb3VudDtcclxuICAgICAgICBsZXQgbSA9IG1hcmtzLmxlbmd0aCxcclxuICAgICAgICAgICAgUiA9IHRoaXMsXHJcbiAgICAgICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLFxyXG4gICAgICAgICAgICBwYWdlQ29udGFpbmVycyA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWdlJyksXHJcbiAgICAgICAgICAgIHBhZ2VzID0ge30sXHJcbiAgICAgICAgICAgIG1hcmtlZFBhZ2VzID0gW10sXHJcbiAgICAgICAgICAgIGN1cnJQYWdlLCBjdXJyQ29udGFpbmVyLFxyXG4gICAgICAgICAgICBtYXJrLCBjb25kcywgc3RhcnRQYWdlLCBlbmRQYWdlLCBwLCBpO1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbTsgaSsrKSB7XHJcbiAgICAgICAgICBtYXJrID0gbWFya3NbaV07XHJcbiAgICAgICAgICBjb25kcyA9IG1hcmsuY29uZHM7XHJcbiAgICAgICAgICBzdGFydFBhZ2UgPSBjb25kcy5wYWdlc1swXTtcclxuICAgICAgICAgIG1hcmtlZFBhZ2VzLnB1c2goc3RhcnRQYWdlKTtcclxuICAgICAgICAgIHBhZ2VzW3N0YXJ0UGFnZV0gPSBwYWdlc1tzdGFydFBhZ2VdIHx8IFtdO1xyXG4gICAgICAgICAgcGFnZXNbc3RhcnRQYWdlXS5wdXNoKG1hcmspO1xyXG5cclxuICAgICAgICAgIGlmIChjb25kcy5wYWdlSW50ZXJzZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGVuZFBhZ2UgPSBjb25kcy5wYWdlc1sxXTtcclxuXHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICBwYWdlc1tlbmRQYWdlXSA9IHBhZ2VzW2VuZFBhZ2VdIHx8IFtdO1xyXG4gICAgICAgICAgICAgIHBhZ2VzW2VuZFBhZ2VdLnB1c2gobWFyayk7XHJcbiAgICAgICAgICAgICAgbWFya2VkUGFnZXMucHVzaChlbmRQYWdlKTtcclxuXHJcbiAgICAgICAgICAgIH0gd2hpbGUgKC0tZW5kUGFnZSA+IHN0YXJ0UGFnZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hcmtlZFBhZ2VzID0gdW5pcXVlKG1hcmtlZFBhZ2VzLnNvcnQoKGEsIGIpID0+IGEgLSBiKSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHVuaXF1ZShhcnIpIHtcclxuICAgICAgICAgIGxldCBsZW4gPSBhcnIubGVuZ3RoLFxyXG4gICAgICAgICAgICAgIHJlcyA9IFtdLFxyXG4gICAgICAgICAgICAgIGkgPSAwO1xyXG5cclxuICAgICAgICAgIGZvciAoIDtpIDwgbGVuOyBpKyspXHJcbiAgICAgICAgICAgIGlmIChpID09PSAobGVuIC0gMSkgfHwgYXJyW2ldICE9PSBhcnJbaSArIDFdKSByZXMucHVzaChhcnJbaV0pO1xyXG5cclxuICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBwcm9jZXNzKG1hcmspIHtcclxuICAgICAgICAgIGxldCB0ZXh0ID0gbWFyay50ZXh0LFxyXG4gICAgICAgICAgICAgIC8vY3VyckNvbnRhaW5lciA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZUNvbnRhaW5lcicgKyBjdXJyUGFnZSksXHJcbiAgICAgICAgICAgICAgc2VsZWN0aW9uLCByYW5nZTtcclxuXHJcbiAgICAgICAgICBSLnNldEJvZHlTZWxlY3Rpb24oY3VyckNvbnRhaW5lcik7XHJcbiAgICAgICAgICBzZWxlY3Rpb24gPSBSLnNlbGVjdGlvbjtcclxuICAgICAgICAgIHJhbmdlID0gUi5yYW5nZTtcclxuXHJcbiAgICAgICAgICBpZiAoIVIudGV4dEV4aXN0c09uUGFnZShjdXJyQ29udGFpbmVyLCB0ZXh0KSkge1xyXG4gICAgICAgICAgICBkZWxldGUgbWFyay5jb25kcztcclxuICAgICAgICAgICAgUi5sb3N0LnB1c2gobWFyayk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCBjb25kcyA9IG1hcmsuY29uZHMsXHJcbiAgICAgICAgICAgICAgc3RhcnQgPSBjb25kcy5jb250YWluZXJzWzBdLFxyXG4gICAgICAgICAgICAgIGVuZCA9IGNvbmRzLmNvbnRhaW5lcnNbMV0sXHJcbiAgICAgICAgICAgICAgZXh0cmVtZXMgPSBlbmQgPT09IHVuZGVmaW5lZCA/IFtzdGFydCwgc3RhcnRdIDogW3N0YXJ0LCBlbmRdLFxyXG4gICAgICAgICAgICAgIG9mZnNldHMgPSBjb25kcy5vZmZzZXRzLFxyXG4gICAgICAgICAgICAgIGRpdnNPblBhZ2UsIGQsIGxhc3Q7XHJcblxyXG4gICAgICAgICAgaWYgKGNvbmRzLnBhZ2VJbnRlcnNlY3Rpb24pIHtcclxuICAgICAgICAgICAgaWYgKGNvbmRzLnBhZ2VzWzBdID09PSBjdXJyUGFnZSkge1xyXG4gICAgICAgICAgICAgIGV4dHJlbWVzWzFdID0gLSAxO1xyXG4gICAgICAgICAgICAgIG9mZnNldHNbMV0gPSAtMTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBleHRyZW1lc1swXSA9IDA7XHJcbiAgICAgICAgICAgICAgb2Zmc2V0c1swXSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGV4dHJlbWVzLmZvckVhY2goKHBvcywgaSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHBvcyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICBleHRyZW1lc1tpXSA9IGN1cnJDb250YWluZXIucXVlcnlTZWxlY3Rvcignc3BhbltkYXRhLXRtLWlkPVwiJyArIHBvcyArICdcIl0nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBkaXZzT25QYWdlID0gZGl2c09uUGFnZSB8fCBjdXJyQ29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RleHRMYXllcicpWzBdLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpO1xyXG4gICAgICAgICAgICAgIGQgPSBkIHx8IGRpdnNPblBhZ2UubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICBpZiAocG9zIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgbGFzdCA9IGV4dHJlbWVzWzFdID0gZGl2c09uUGFnZVtkIC0gMV07XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRzWzFdID0gbGFzdC5sYXN0Q2hpbGQuZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGV4dHJlbWVzW2ldID0gZGl2c09uUGFnZVtwb3NdO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgZXh0cmVtZXNbMV0gPSBleHRyZW1lc1sxXSB8fCBleHRyZW1lc1swXTtcclxuXHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByYW5nZS5zZXRTdGFydChleHRyZW1lc1swXS5jaGlsZE5vZGVzW2NvbmRzLm5vZGVzWzBdXSwgb2Zmc2V0c1swXSk7XHJcbiAgICAgICAgICAgIHJhbmdlLnNldEVuZChleHRyZW1lc1sxXS5jaGlsZE5vZGVzW2NvbmRzLm5vZGVzWzFdXSwgb2Zmc2V0c1sxXSk7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3Rpb24ucmVzdW1lKHJhbmdlKTtcclxuXHJcbiAgICAgICAgICAgIFIuZW1pdCgncmVzdG9yZWQ6cmFuZ2UnLCBzZWxlY3Rpb24sIG1hcmspO1xyXG5cclxuICAgICAgICAgICAgUi5yZXN0b3JlZC5wdXNoKG1hcmspO1xyXG4gICAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBtYXJrLmNvbmRzO1xyXG4gICAgICAgICAgICBSLmxvc3QucHVzaChtYXJrKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtb25pdG9yTG9hZGluZ1Byb2Nlc3MgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBsID0gbWFya2VkUGFnZXMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICBpZHgsIGssIGJveCwgdGV4dEJveGVzLCB0O1xyXG5cclxuICAgICAgICAgICAgICBwYWdlQ29udGFpbmVycyA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWdlJyk7XHJcblxyXG4gICAgICAgICAgICAgIGlmICghbCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwobW9uaXRvckxvYWRpbmdQcm9jZXNzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICAgICAgICAgIGsgPSBtYXJrZWRQYWdlc1tsXSAtIDE7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAoYm94ID0gcGFnZUNvbnRhaW5lcnNba10pXHJcbiAgICAgICAgICAgICAgICAgJiYgYm94Lmhhc0F0dHJpYnV0ZSgnZGF0YS1sb2FkZWQnKVxyXG4gICAgICAgICAgICAgICAgICYmICh0ZXh0Qm94ZXMgPSBib3gucXVlcnlTZWxlY3RvckFsbCgnLnRleHRMYXllciBkaXYnKSlcclxuICAgICAgICAgICAgICAgICAmJiAodCA9IHRleHRCb3hlcy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgJiYgdGV4dEJveGVzW3QgLSAyXS5maXJzdENoaWxkXHJcbiAgICAgICAgICAgICAgICAgJiYgdGV4dEJveGVzW3QgLSAyXS5maXJzdENoaWxkLmRhdGEubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgY3VyclBhZ2UgPSBtYXJrZWRQYWdlcy5zcGxpY2UobCwgMSlbMF07XHJcbiAgXHRcdFx0XHRcdFx0XHRcdGN1cnJDb250YWluZXIgPSBib3g7XHJcblxyXG4gICAgICAgICAgICAgICAgICBSLnByb2Nlc3NQZXVBUGV1KHBhZ2VzW2N1cnJQYWdlXSwgcHJvY2VzcywgUi5wcm94eShSLCBSLnJlcG9ydCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgfSxcclxuICAgICAgdGV4dEV4aXN0c09uUGFnZShwYWdlLCB0ZXh0KSB7XHJcbiAgICAgICAgbGV0IHBhZ2VUZXh0ID0gdGhpcy50cmltbWVkU2VsZWN0aW9uVGV4dDtcclxuXHJcbiAgICAgICAgdGV4dCA9IHRoaXMudHJpbW1lZFRleHQgPSB0aGlzLnNxdWVlemUodGV4dCk7XHJcblxyXG4gICAgICAgIHJldHVybiBwYWdlVGV4dC5pbmRleE9mKHRleHQpICE9PSAtMTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICBdO1xyXG59XHJcbiIsImltcG9ydCBfU1RPUkUgZnJvbSAnLi8uLi9fc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfU0VMRUNUSU9OIHtcclxuXHJcbiAgY29uc3RydWN0b3Iobm9kZSkge1xyXG5cclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcblxyXG4gICAgaWYgKHNlbGVjdGlvbi5yYW5nZUNvdW50KSB0aGlzLnJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XHJcblxyXG4gICAgaWYgKG5vZGUgfHwgIXNlbGVjdGlvbi5pc0NvbGxhcHNlZCkge1xyXG4gICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgIHRoaXMuZGVmaW5lZCA9IG5vZGU7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlKG5vZGUpXHJcbiAgICAgICAgICAgIC5yZWR1Y2VUb09uZVJhbmdlKClcclxuICAgICAgICAgICAgLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0Tm9kZXModHJ1ZSlcclxuICAgICAgICAgICAgLnJldHJpZXZlVGV4dCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChfU1RPUkUucGRmKSB0aGlzLmFkanVzdF9QREYoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb2xsZWN0Tm9kZXMoKVxyXG4gICAgICAgICAgICAucmVkdWNlVG9PbmVSYW5nZSgpXHJcbiAgICAgICAgICAgIC51cGRhdGUoKVxyXG4gICAgICAgICAgICAuYWRqdXN0KClcclxuICAgICAgICAgICAgLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgIC5yZXRyaWV2ZVRleHQoKTtcclxuICAgICAgfVxyXG4gICAgICBzZWxlY3Rpb24uY29sbGFwc2VUb1N0YXJ0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGUobm9kZSkge1xyXG4gICAgdGhpcy5zZWxmLnNlbGVjdEFsbENoaWxkcmVuKG5vZGUpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICByZXN1bWUocmFuZ2UpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGY7XHJcblxyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuICAgIHRoaXMucmVkdWNlVG9PbmVSYW5nZSgpLnVwZGF0ZSgpLmNvbGxlY3ROb2RlcygpLnJldHJpZXZlVGV4dCgpO1xyXG5cdFx0c2VsZWN0aW9uLmNvbGxhcHNlVG9TdGFydCgpO1xyXG4gIH1cclxuICB1cGRhdGUoc2VsZWN0aW9uKSB7XHJcbiAgICBpZiAoc2VsZWN0aW9uKSB0aGlzLnNlbGYgPSBzZWxlY3Rpb247XHJcbiAgICBlbHNlIHNlbGVjdGlvbiA9IHRoaXMuc2VsZjtcclxuXHJcbiAgICBsZXQgcHJvcHMgPSBbJ2ZvY3VzTm9kZScsICdhbmNob3JOb2RlJywgJ2ZvY3VzT2Zmc2V0JywgJ2FuY2hvck9mZnNldCddLFxyXG4gICAgICAgIGkgPSBwcm9wcy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUgKGktLSkgdGhpc1twcm9wc1tpXV0gPSBzZWxlY3Rpb25bcHJvcHNbaV1dO1xyXG5cclxuICAgIHRoaXMucmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcclxuICAgIHRoaXMuc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBhZGp1c3QoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIGFuY2hvciA9IHRoaXMuYW5jaG9yTm9kZSxcclxuICAgICAgICBmb2N1cyA9IHRoaXMuZm9jdXNOb2RlO1xyXG5cclxuICAgIGlmICh0aGlzLmlzQmFja3dhcmRzKGFuY2hvciwgZm9jdXMpKSB0aGlzLnJldmVyc2UoYW5jaG9yLCBmb2N1cyk7XHJcbiAgICBlbHNlIHRoaXMubm9ybWFsaXplKGFuY2hvciwgZm9jdXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBhZGp1c3RfUERGKCkge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICByYW5nZSA9IHRoaXMucmFuZ2UsXHJcbiAgICAgICAgYW5jaG9yID0gcmFuZ2Uuc3RhcnRDb250YWluZXI7XHJcblxyXG4gICAgd2hpbGUoKGFuY2hvciA9IGFuY2hvci5wYXJlbnROb2RlKSkge1xyXG4gICAgICBpZiAoYW5jaG9yLmlkICYmIGFuY2hvci5pZCA9PT0gJ3ZpZXdlcicpIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7IGFuY2hvciA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZXh0TGF5ZXInKVswXS5jaGlsZHJlblswXS5jaGlsZHJlblswXTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgIHRyeSB7IGFuY2hvciA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZXh0TGF5ZXInKVswXS5jaGlsZHJlblswXTsgfVxyXG4gICAgICBmaW5hbGx5IHtcclxuICAgICAgICBhbmNob3IgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGV4dExheWVyJylbMF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKS5zZXRTdGFydChhbmNob3IsIDApO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBub3JtYWxpemUoYW5jaG9yLCBmb2N1cykge1xyXG4gICAgbGV0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICByYW5nZSA9IHRoaXMucmFuZ2UsXHJcblxyXG4gICAgICAgIGZpcnN0VGV4dE5vZGUgPSB0aGlzLm5vZGVzWzBdLFxyXG4gICAgICAgIGxhc3RUZXh0Tm9kZSA9IHRoaXMubm9kZXNbdGhpcy5ub2Rlcy5sZW5ndGggLSAxXTtcclxuXHJcbiAgICBpZiAoZmlyc3RUZXh0Tm9kZSAhPT0gYW5jaG9yKVxyXG4gICAgICByYW5nZS5zZXRTdGFydChmaXJzdFRleHROb2RlLCBmaXJzdFRleHROb2RlLmRhdGEubGVuZ3RoIC0gZmlyc3RUZXh0Tm9kZS5kYXRhLnRyaW1MZWZ0KCkubGVuZ3RoKTtcclxuXHJcbiAgICBpZiAobGFzdFRleHROb2RlICE9PSBmb2N1cylcclxuICAgICAgcmFuZ2Uuc2V0RW5kKGxhc3RUZXh0Tm9kZSwgbGFzdFRleHROb2RlLmRhdGEubGVuZ3RoIC0gKGxhc3RUZXh0Tm9kZS5kYXRhLmxlbmd0aCAtIGxhc3RUZXh0Tm9kZS5kYXRhLnRyaW1SaWdodCgpLmxlbmd0aCkpO1xyXG4gIH1cclxuICBjb2xsZWN0Tm9kZXMod2hvbGVEb2N1bWVudCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuc2VsZixcclxuICAgICAgICByYW5nZSA9IHRoaXMucmFuZ2UsXHJcbiAgICAgICAgY29udGFpbmVyID0gd2hvbGVEb2N1bWVudCA/IHdpbmRvdy5kb2N1bWVudC5ib2R5IDogdGhpcy5nZXRDb21tb25BbmNlc3RvckNvbnRhaW5lcigpLFxyXG5cclxuICAgICAgICBpdGVyYXRvciA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVOb2RlSXRlcmF0b3IoY29udGFpbmVyLCBOb2RlRmlsdGVyLlNIT1dfVEVYVCwge1xyXG4gICAgICAgICAgYWNjZXB0Tm9kZShub2RlKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgc2VsZWN0aW9uLmNvbnRhaW5zTm9kZShub2RlKSAmJlxyXG4gICAgICAgICAgICAgICFzZWxmLmlzQmxhbmsobm9kZSkgJiZcclxuICAgICAgICAgICAgICBzZWxmLmhhc05vcm1hbFBhcmVudChwYXJlbnQpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZmFsc2UpLFxyXG5cclxuICAgICAgICB0ZW1wUmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLFxyXG4gICAgICAgIG5vZGVzID0gW10sIHBhcmVudE5vZGVzID0gW10sXHJcbiAgICAgICAgdGV4dE5vZGUsIHBhcmVudCwgZmlyc3ROb2RlLCBsYXN0Tm9kZTtcclxuXHJcbiAgICB3aGlsZSh0ZXh0Tm9kZSA9IGl0ZXJhdG9yLm5leHROb2RlKCkpIHtcclxuICAgICAgbm9kZXMucHVzaCh0ZXh0Tm9kZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm5vZGVzID0gdGhpcy5nZXRSZWR1Y2VkTm9kZUNvbGxlY3Rpb24obm9kZXMpO1xyXG4gICAgdGhpcy5wYXJlbnROb2RlcyA9IHRoaXMuY29sbGVjdFBhcmVudE5vZGVzKHRoaXMubm9kZXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBnZXRSZWR1Y2VkTm9kZUNvbGxlY3Rpb24obm9kZXMpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZjtcclxuICAgIGxldCBmaXJzdE5vZGUsIGxhc3ROb2RlO1xyXG5cclxuICAgIGlmIChub2Rlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGZpcnN0Tm9kZSA9IG5vZGVzWzBdO1xyXG4gICAgICBpZiAoc2VsZWN0aW9uLmFuY2hvck5vZGUgPT09IGZpcnN0Tm9kZSAmJiBmaXJzdE5vZGUuZGF0YS50cmltUmlnaHQoKS5sZW5ndGggPD0gc2VsZWN0aW9uLmFuY2hvck9mZnNldCkge1xyXG4gICAgICAgIG5vZGVzLnNoaWZ0KCk7XHJcbiAgICAgIH1cclxuICAgICAgbGFzdE5vZGUgPSBub2Rlc1tub2Rlcy5sZW5ndGggLSAxXTtcclxuICAgICAgaWYgKHNlbGVjdGlvbi5mb2N1c05vZGUgPT09IGxhc3ROb2RlICYmIHRoaXMuaXNCbGFuayhsYXN0Tm9kZS5kYXRhLnN1YnN0cigwLCBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpKSkge1xyXG4gICAgICAgIG5vZGVzLnBvcCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbm9kZXM7XHJcbiAgfVxyXG4gIGNvbGxlY3RQYXJlbnROb2Rlcyhub2Rlcykge1xyXG4gICAgbGV0IGwgPSBub2Rlcy5sZW5ndGgsXHJcbiAgICAgICAgcGFyZW50cyA9IFtdLCBpID0gMDtcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykgcGFyZW50cy5wdXNoKG5vZGVzW2ldLnBhcmVudE5vZGUpO1xyXG5cclxuICAgIHJldHVybiBwYXJlbnRzO1xyXG4gIH1cclxuICByZXRyaWV2ZVRleHQoKSB7XHJcbiAgICBsZXQgcmFuZ2UgPSB0aGlzLnJhbmdlLFxyXG4gICAgICAgIG5vZGVzID0gdGhpcy5ub2RlcyxcclxuICAgICAgICBsID0gbm9kZXMubGVuZ3RoLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIG5vZGVUZXh0cyA9IFtdLFxyXG4gICAgICAgIHRleHQ7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIG5vZGVUZXh0cy5wdXNoKG5vZGVzW2ldLmRhdGEpO1xyXG5cclxuICAgIGwgLT0gMTtcclxuXHJcbiAgICBpZiAobm9kZVRleHRzLmxlbmd0aCkge1xyXG4gICAgICBpZiAodGhpcy5zaW1wbGUpIHtcclxuICAgICAgICAvL25vZGVUZXh0c1swXSA9IG5vZGVUZXh0c1swXS5zdWJzdHJpbmcoc2VsZWN0aW9uLmFuY2hvck9mZnNldCwgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KTtcclxuICAgICAgICBub2RlVGV4dHNbMF0gPSBub2RlVGV4dHNbMF0uc3Vic3RyaW5nKHJhbmdlLnN0YXJ0T2Zmc2V0LCByYW5nZS5lbmRPZmZzZXQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vbm9kZVRleHRzWzBdID0gbm9kZVRleHRzWzBdLnN1YnN0cmluZyhzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0KTtcclxuICAgICAgICAvL25vZGVUZXh0c1tsXSA9IG5vZGVUZXh0c1tsXS5zdWJzdHJpbmcoMCwgdGhpcy5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KTtcclxuICAgICAgICBub2RlVGV4dHNbMF0gPSBub2RlVGV4dHNbMF0uc3Vic3RyaW5nKHJhbmdlLnN0YXJ0T2Zmc2V0KTtcclxuICAgICAgICBub2RlVGV4dHNbbF0gPSBub2RlVGV4dHNbbF0uc3Vic3RyaW5nKDAsIHRoaXMuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJhbmdlLmVuZE9mZnNldCk7XHJcbiAgICAgIH1cclxuICAgICAgdGV4dCA9IHRoaXMudGV4dCA9IG5vZGVUZXh0cy5qb2luKCcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBnZXRDb21tb25BbmNlc3RvckNvbnRhaW5lcigpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgbm9kZTEgPSBzZWxlY3Rpb24uYW5jaG9yTm9kZSxcclxuICAgICAgICBub2RlMiA9IHNlbGVjdGlvbi5mb2N1c05vZGU7XHJcblxyXG4gICAgd2hpbGUgKG5vZGUxID0gbm9kZTEucGFyZW50Tm9kZSkge1xyXG4gICAgICAgIGlmICgobm9kZTEuY29tcGFyZURvY3VtZW50UG9zaXRpb24obm9kZTIpICYgMHgxMCkgPT09IDB4MTApXHJcbiAgICAgICAgICByZXR1cm4gbm9kZTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gd2luZG93LmRvY3VtZW50LmJvZHk7XHJcbiAgfVxyXG4gIHJldmVyc2UoYW5jaG9yLCBmb2N1cykge1xyXG4gICAgbGV0IHJhbmdlID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXHJcbiAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5zZWxmO1xyXG5cclxuICAgIHJhbmdlLnNldFN0YXJ0KGZvY3VzLCBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpO1xyXG4gICAgcmFuZ2Uuc2V0RW5kKGFuY2hvciwgc2VsZWN0aW9uLmFuY2hvck9mZnNldCk7XHJcblxyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZShzZWxlY3Rpb24pLmFkanVzdChzZWxlY3Rpb24uYW5jaG9yTm9kZSwgc2VsZWN0aW9uLmZvY3VzTm9kZSk7XHJcbiAgfVxyXG4gIHJlZHVjZVRvT25lUmFuZ2UoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIHJhbmdlQ291bnQgPSBzZWxlY3Rpb24ucmFuZ2VDb3VudCxcclxuICAgICAgICByYW5nZTAgPSB0aGlzLnJhbmdlLFxyXG4gICAgICAgIGxhc3RSYW5nZTtcclxuXHJcbiAgICBpZiAocmFuZ2VDb3VudCA8IDIpIHJldHVybiB0aGlzO1xyXG5cclxuICAgIGxhc3RSYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KHJhbmdlQ291bnQgLSAxKTtcclxuXHJcbiAgICByYW5nZTAuc2V0U3RhcnQocmFuZ2UwLnN0YXJ0Q29udGFpbmVyLCByYW5nZTAuc3RhcnRPZmZzZXQpO1xyXG4gICAgcmFuZ2UwLnNldEVuZChsYXN0UmFuZ2UuZW5kQ29udGFpbmVyLCBsYXN0UmFuZ2UuZW5kT2Zmc2V0KTtcclxuXHJcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UwKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgaGFzTm9ybWFsUGFyZW50KG5vZGUpIHtcclxuICAgIGNvbnN0IHRhZyA9IG5vZGUudGFnTmFtZS50b1VwcGVyQ2FzZSgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRhZyAhPT0gJ1NDUklQVCcgJiYgdGFnICE9PSAnU1RZTEUnICYmIHRhZyAhPT0gJ0xJTksnICYmIHRhZyAhPT0gJ01FVEEnICYmXHJcbiAgICAgIHRhZyAhPT0gJ0JBU0UnICYmIHRhZyAhPT0gJ1RJVExFJyAmJiB0YWcgIT09ICdOT1NDUklQVCcgJiZcclxuICAgICAgdGFnICE9PSAnSU1HJyAmJiB0YWcgIT09ICdJRlJBTUUnICYmIHRhZyAhPT0gJ0VNQkVEJyAmJiB0YWcgIT09ICdQQVJBTScgJiZcclxuICAgICAgdGFnICE9PSAnVklERU8nICYmIHRhZyAhPT0gJ0FVRElPJyAmJiB0YWcgIT09ICdTT1VSQ0UnICYmIHRhZyAhPT0gJ1RSQUNLJyAmJlxyXG4gICAgICB0YWcgIT09ICdDQU5WQVMnICYmIHRhZyAhPT0gJ01BUCcgJiYgdGFnICE9PSAnQVJFQScgJiZcclxuICAgICAgdGFnICE9PSAnTUFUSCcgJiYgdGFnICE9PSAnT0JKRUNUJyAmJlxyXG4gICAgICAhdGhpcy5pc0luc2lkZVNWRyhub2RlKVxyXG4gICAgKTtcclxuICB9XHJcbiAgaXNJbnNpZGVTVkcobm9kZSkge1xyXG4gICAgd2hpbGUgKG5vZGUpIHtcclxuICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09ICdzdmcnKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaXNCbGFuayhub2RlKSB7XHJcbiAgICBsZXQgdGV4dDtcclxuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycpIHRleHQgPSBub2RlO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmIChub2RlICYmIHR5cGVvZiBub2RlLmRhdGEgPT09ICdzdHJpbmcnKSB0ZXh0ID0gbm9kZS5kYXRhO1xyXG4gICAgICBlbHNlIHRleHQgPSB0aGlzLnRleHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGV4dC5zZWFyY2goL1teXFxzXFxuXFxyXFx0XS9nKSA9PT0gLTE7XHJcbiAgfVxyXG4gIGlzQmFja3dhcmRzKGFuY2hvciwgZm9jdXMpIHtcclxuICAgIGxldCBzZWxlY3Rpb24gPSB0aGlzLnNlbGYsXHJcbiAgICAgICAgcG9zaXRpb24gPSBhbmNob3IuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZm9jdXMpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIHBvc2l0aW9uID09PSAyIHx8XHJcbiAgICAgIHBvc2l0aW9uID09PSAxMCB8fFxyXG4gICAgICAoIXBvc2l0aW9uICYmIHNlbGVjdGlvbi5hbmNob3JPZmZzZXQgPiBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpKTtcclxuICB9XHJcbiAgaXNTaW1wbGUoKSB7XHJcbiAgICBsZXQgc2VsZWN0aW9uID0gdGhpcy5zZWxmLFxyXG4gICAgICAgIGFuY2hvck5vZGUgPSBzZWxlY3Rpb24uYW5jaG9yTm9kZSxcclxuICAgICAgICBmb2N1c05vZGUgPSBzZWxlY3Rpb24uZm9jdXNOb2RlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIGFuY2hvck5vZGUgPT09IGZvY3VzTm9kZSAmJlxyXG4gICAgICBhbmNob3JOb2RlLm5vZGVUeXBlID09PSAzICYmXHJcbiAgICAgICghYW5jaG9yTm9kZS5uZXh0U2libGluZyB8fCAoYW5jaG9yTm9kZS5uZXh0U2libGluZy5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihmb2N1c05vZGUpICE9PSA0KSkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfRE9NTU9EVUxFIH0gZnJvbSAnLi8uLi8uLi8uLi91dGlscydcclxuaW1wb3J0IF9TVE9SRSBmcm9tICcuLy4uL19zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hcmspIHtcclxuXHJcbiAgY29uc3QgRE9DID0gd2luZG93LmRvY3VtZW50O1xyXG5cclxuICByZXR1cm4gbmV3IF9ET01NT0RVTEUoe1xyXG5cdFx0ZXZlbnRzOiB7XHJcbiAgICAgIEVOVjoge1xyXG4gICAgICAgICd1cGRhdGVkOm1pc2Mtc2V0dGluZ3MnOiAndXBkYXRlUG9zaXRpb24nLFxyXG4gICAgICAgICdhZGRlZDpub3RlJzogJ29uTm90ZUFkZGVkJyxcclxuICAgICAgICAnYWRkZWQ6Ym9va21hcmsnOiAnb25Cb29rbWFya0FkZGVkJyxcclxuICAgICAgICAncmVtb3ZlZDpsYXN0LW5vdGUnOiAnb25MYXN0Tm90ZVJlbW92ZWQnLFxyXG4gICAgICAgICdyZW1vdmVkOmJvb2ttYXJrJzogJ29uQm9va21hcmtSZW1vdmVkJ1xyXG4gICAgICB9LFxyXG4gICAgICBET006IHtcclxuICAgICAgICBjbGljazoge1xyXG4gICAgICAgICAgJ3Rtbm90ZXN0b2dnbGUnOiAndG9nZ2xlTm90ZXMnLFxyXG4gICAgICAgICAgJ3RtYm0nOiAnc2Nyb2xsVG9Cb29rbWFyaydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHRcdH0sXHJcbiAgICBhZGRMaXN0ZW5lcnNNYW51YWxseTogdHJ1ZSxcclxuICAgIGVsOiBudWxsLFxyXG4gICAgbm90ZXNCdG46IG51bGwsXHJcbiAgICBibUJ0bjogbnVsbCxcclxuICAgIG5vdGVzQnRuQWN0aXZlOiBmYWxzZSxcclxuICAgIGJtQnRuQWN0aXZlOiBmYWxzZSxcclxuICAgIGJvb2ttYXJrOiBmYWxzZSxcclxuICAgIG5vdGVzOiBmYWxzZSxcclxuXHJcbiAgICBhdXRvaW5pdCgpIHtcclxuICAgICAgdGhpcy5jcmVhdGVFbCgpO1xyXG4gICAgICB0aGlzLmNyZWF0ZUJ0bnMoKTtcclxuICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlRWwoKSB7XHJcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5lbCA9IERPQy5jcmVhdGVFbGVtZW50KCd0bXVpJyk7XHJcbiAgICAgIERPQy5ib2R5LmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZUJ0bnMoKSB7XHJcbiAgICAgIGNvbnN0IG5vdGVzQnRuID0gdGhpcy5ub3Rlc0J0biA9IERPQy5jcmVhdGVFbGVtZW50KCd0bW5vdGVzdG9nZ2xlJyk7XHJcbiAgICAgIGNvbnN0IGJtQnRuID0gdGhpcy5ibUJ0biA9IERPQy5jcmVhdGVFbGVtZW50KCd0bWJtJyk7XHJcbiAgICAgIG5vdGVzQnRuLnRpdGxlID0gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UoJ3RvZ2dsZV9ub3RlcycpO1xyXG4gICAgICBibUJ0bi50aXRsZSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKCdibV9zY3JvbGwnKTtcclxuICAgICAgaWYgKF9TVE9SRS5wZGYpIGJtLmNsYXNzTmFtZSA9ICd0ZXh0bWFya2VyLWJvb2ttYXJrLWNvbnRyb2wnO1xyXG4gICAgfSxcclxuICAgIGFkZEJ0bihidG4pIHtcclxuICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZUJ0bihidG4pIHtcclxuICAgICAgdGhpcy5lbC5yZW1vdmVDaGlsZChidG4pO1xyXG4gICAgICBpZiAoIXRoaXMuZWwuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZVBvc2l0aW9uKCkge1xyXG4gICAgICBfU1RPUkUuZ2V0KCd0bXVpcG9zJykudGhlbihwb3MgPT4gdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgcG9zLnNwbGl0KCctJykubWFwKHAgPT4gcCArICc6MXB4OycpLmpvaW4oJyAnKSkpO1xyXG4gICAgfSxcclxuICAgIG9uTm90ZUFkZGVkKCkge1xyXG4gICAgICB0aGlzLm5vdGVzID0gdHJ1ZTtcclxuICAgICAgaWYgKCF0aGlzLm5vdGVzQnRuQWN0aXZlKSB7XHJcbiAgICAgICAgX1NUT1JFLmdldCgnbm90ZWljb24nKS50aGVuKG5vdGVpY29uID0+IHtcclxuICAgICAgICAgIGlmIChub3RlaWNvbikge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEJ0bih0aGlzLm5vdGVzQnRuKTtcclxuICAgICAgICAgICAgdGhpcy5ub3Rlc0J0bkFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkxhc3ROb3RlUmVtb3ZlZCgpIHtcclxuICAgICAgdGhpcy5ub3RlcyA9IGZhbHNlO1xyXG4gICAgICBpZiAodGhpcy5ub3Rlc0J0bkFjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQnRuKHRoaXMubm90ZXNCdG4pO1xyXG4gICAgICAgIHRoaXMubm90ZXNCdG5BY3RpdmUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uQm9va21hcmtBZGRlZCgpIHtcclxuICAgICAgdGhpcy5ib29rbWFyayA9IHRydWU7XHJcbiAgICAgIGlmICghdGhpcy5ibUJ0bkFjdGl2ZSkge1xyXG4gICAgICAgIF9TVE9SRS5nZXQoJ2JtaWNvbicpLnRoZW4oYm1pY29uID0+IHtcclxuICAgICAgICAgIGlmIChibWljb24pIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRCdG4odGhpcy5ibUJ0bik7XHJcbiAgICAgICAgICAgIHRoaXMuYm1CdG5BY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25Cb29rbWFya1JlbW92ZWQoKSB7XHJcbiAgICAgIHRoaXMuYm9va21hcmsgPSBmYWxzZTtcclxuICAgICAgaWYgKHRoaXMuYm1CdG5BY3RpdmUpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUJ0bih0aGlzLmJtQnRuKTtcclxuICAgICAgICB0aGlzLmJtQnRuQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0b2dnbGVOb3RlcygpIHtcclxuICAgICAgdGhpcy5lbWl0KCd0b2dnbGU6bm90ZXMnKTtcclxuICAgIH0sXHJcbiAgICBzY3JvbGxUb0Jvb2ttYXJrKCkge1xyXG4gICAgICB0aGlzLmVtaXQoJ3Njcm9sbC10by1ib29rbWFyaycpO1xyXG4gICAgfVxyXG5cdH0pO1xyXG59XHJcbiIsImltcG9ydCB7IF9QT1JUIH0gZnJvbSAnLi8uLi8uLi91dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBfUE9SVCh7XHJcbiAgbmFtZTogJ2luamVjdGlvbicsXHJcbiAgdHlwZTogJ2NvbnRlbnQnLFxyXG4gIGV2ZW50czoge1xyXG4gICAgT05FT0ZGOiBbXHJcbiAgICAgICdmaW5pc2hlZDpyZXN0b3JhdGlvbicsXHJcblx0XHRcdCdmYWlsZWQ6cmVzdG9yYXRpb24nLFxyXG4gICAgICAnc3VjY2VlZGVkOnJlc3RvcmF0aW9uJyxcclxuICAgICAgJ2NvcHk6bWFya3MnLFxyXG4gICAgICAnc2F2ZTplbnRyeT8nLFxyXG4gICAgICAndXBkYXRlOmVudHJ5PycsXHJcbiAgICAgICdsb29rdXA6d29yZCcsXHJcbiAgICAgICdlcnJvcjpicm93c2VyLWNvbnNvbGUnLFxyXG4gICAgICAnY2hhbmdlZDpzZWxlY3Rpb24nLFxyXG4gICAgICAndW5zYXZlZC1jaGFuZ2VzJyxcclxuICAgICAgJ2NsaWNrZWQ6bWFyaycsXHJcbiAgICAgICdhZGRlZDpib29rbWFyaycsXHJcbiAgICAgICdyZW1vdmVkOmJvb2ttYXJrJyxcclxuICAgICAgJ2FkZGVkOm5vdGUnLFxyXG4gICAgICAncmVtb3ZlZDpsYXN0LW5vdGUnXHJcbiAgICBdXHJcbiAgfVxyXG59KTtcclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgeyBfQ09QWSB9IGZyb20gJy4vLi4vdXRpbHMvY29weSdcclxuaW1wb3J0IHsgX0dFVF9BQ1RJVkVfVEFCIH0gZnJvbSAnLi8uLi91dGlscy9nZXRBY3RpdmVUYWInXHJcbmltcG9ydCBfRVhURU5EIGZyb20gJy4vLi4vdXRpbHMvZXh0ZW5kJ1xyXG5pbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi8uLi91dGlscy9tb2R1bGUnXHJcbmltcG9ydCB7IF9ET01NT0RVTEUgfSBmcm9tICcuLy4uL3V0aWxzL2RvbW1vZHVsZSdcclxuaW1wb3J0IHsgX1BPUlQgfSBmcm9tICcuLy4uL3V0aWxzL3BvcnQnXHJcbmltcG9ydCBfTDEwTiBmcm9tICcuLy4uL3V0aWxzL2wxMG4nXHJcbmltcG9ydCBfRVJST1JUUkFDS0VSIGZyb20gJy4vLi4vdXRpbHMvZXJyb3ItdHJhY2tlcidcclxuXHJcbmV4cG9ydCB7IF9DT1BZLCBfR0VUX0FDVElWRV9UQUIsIF9FWFRFTkQsIF9NT0RVTEUsIF9ET01NT0RVTEUsIF9QT1JULCBfTDEwTiwgX0VSUk9SVFJBQ0tFUiB9XHJcbiIsImNvbnN0IF9DT1BZID0gZnVuY3Rpb24ob3JpZ2luYWwsIGNsb25lKSB7XHJcbiAgY2xvbmUgPSBjbG9uZSB8fCB7fTtcclxuXHJcbiAgZm9yIChsZXQgaSBpbiBvcmlnaW5hbCkge1xyXG4gICAgaWYgKG9yaWdpbmFsLmhhc093blByb3BlcnR5KGkpKSB7XHJcbiAgICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxbaV0gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgY2xvbmVbaV0gPSBBcnJheS5pc0FycmF5KG9yaWdpbmFsW2ldKSA/IFtdIDoge307XHJcbiAgICAgICAgX0NPUFkob3JpZ2luYWxbaV0sIGNsb25lW2ldKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjbG9uZVtpXSA9IG9yaWdpbmFsW2ldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBjbG9uZTtcclxufVxyXG5cclxuZXhwb3J0IHsgX0NPUFkgfVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX0RPTU1PRFVMRSBleHRlbmRzIF9NT0RVTEUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIG9iai5fYm91bmQgPSB7fTtcclxuICAgIG9iai5fZXh0cmFCb3VuZCA9IFtdO1xyXG5cclxuICAgIHN1cGVyKG9iailcclxuXHJcbiAgICB0aGlzLmFkZExpc3RlbmVyc01hbnVhbGx5IHx8IHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG4gIGdlbmVyYWxIYW5kbGVyKHN1Yk1hcCwgdHlwZSwgZSkge1xyXG4gICAgbGV0IGVsID0gZS50YXJnZXQsXHJcbiAgICAgICAgc2VsZWN0b3IsIF9zZWwsIG1ldGgsIGYsIGlzSWQsIGlzQ2xhc3MsIGlzRG9jO1xyXG5cclxuICAgIGZvciAoc2VsZWN0b3IgaW4gc3ViTWFwKSB7XHJcbiAgICAgIGYgPSBzZWxlY3RvclswXTtcclxuICAgICAgX3NlbCA9IHNlbGVjdG9yO1xyXG4gICAgICBpc0lkID0gZiA9PT0gJyMnO1xyXG4gICAgICBpc0NsYXNzID0gZiA9PT0gJy4nO1xyXG4gICAgICBpc0RvYyA9IGYgPT09ICcqJztcclxuXHJcbiAgICAgIGlmIChpc0lkIHx8IGlzQ2xhc3MpIHNlbGVjdG9yID0gc2VsZWN0b3Iuc3Vic3RyKDEpO1xyXG5cclxuICAgICAgaWYgKGlzRG9jIHx8XHJcbiAgICAgICAgICBpc0NsYXNzICYmIGVsLmNsYXNzTGlzdC5jb250YWlucyhzZWxlY3RvcikgfHxcclxuICAgICAgICAgIGlzSWQgJiYgZWwuaWQgPT09IHNlbGVjdG9yIHx8XHJcbiAgICAgICAgICBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBzZWxlY3RvclxyXG4gICAgICApIHtcclxuXHJcbiAgICAgICAgbWV0aCA9IHN1Yk1hcFtfc2VsXTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBtZXRoID09PSAnZnVuY3Rpb24nKSBtZXRoKGUsIGVsKTtcclxuICAgICAgICBlbHNlIGlmICh0aGlzW21ldGhdKSB0aGlzW21ldGhdKGUsIGVsKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgYWRkTGlzdGVuZXIodHlwZSwgbWV0aCwgZWwpIHtcclxuICAgIGVsID0gZWwgfHwgdGhpcy5lbDtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSB0eXBlb2YgbWV0aCA9PT0gJ2Z1bmN0aW9uJyA/IG1ldGggOiB0aGlzW21ldGhdO1xyXG5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpO1xyXG5cclxuICAgIGlmIChlbCA9PT0gdGhpcy5lbCkge1xyXG4gICAgICBpZiAoIXRoaXMuX2JvdW5kW3R5cGVdKSB0aGlzLl9ib3VuZFt0eXBlXSA9IFtdO1xyXG4gICAgICB0aGlzLl9ib3VuZFt0eXBlXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZXh0cmFCb3VuZC5wdXNoKFtlbCwgdHlwZSwgaGFuZGxlcl0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBhZGRMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZG9tRXZlbnRzLCBlbCwgc3ViTWFwLCB0eXBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmICghZXZlbnRzIHx8ICEoZG9tRXZlbnRzID0gZXZlbnRzLkRPTSkgfHwgIShlbCA9IHRoaXMuZWwpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgZm9yICh0eXBlIGluIGRvbUV2ZW50cykge1xyXG4gICAgICBzdWJNYXAgPSBkb21FdmVudHNbdHlwZV07XHJcbiAgICAgIGhhbmRsZXIgPSB0aGlzLnByb3h5KHRoaXMsIHRoaXMuZ2VuZXJhbEhhbmRsZXIsIHN1Yk1hcCwgdHlwZSk7XHJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICBpZiAoIXRoaXMuX2JvdW5kW3R5cGVdKSB0aGlzLl9ib3VuZFt0eXBlXSA9IFtdO1xyXG4gICAgICB0aGlzLl9ib3VuZFt0eXBlXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZW1vdmVMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgdHlwZSwgX2JvdW5kLCBsO1xyXG5cclxuICAgIGZvciAodHlwZSBpbiB0aGlzLl9ib3VuZCkge1xyXG4gICAgICBfYm91bmQgPSB0aGlzLl9ib3VuZFt0eXBlXTtcclxuICAgICAgbCA9IF9ib3VuZC5sZW5ndGg7XHJcbiAgICAgIHdoaWxlIChsLS0pIHtcclxuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgX2JvdW5kW2xdLCBmYWxzZSk7XHJcbiAgICAgICAgX2JvdW5kLnNwbGljZShsLCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBfZXh0cmEgPSB0aGlzLl9leHRyYUJvdW5kLCBpID0gMCwgc2V0O1xyXG4gICAgbCA9IF9leHRyYS5sZW5ndGg7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgc2V0ID0gX2V4dHJhW2ldO1xyXG4gICAgICBzZXRbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihzZXRbMV0sIHNldFsyXSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5jb25zdCBfRVJST1JUUkFDS0VSID0gbmV3IF9NT0RVTEUoe1xyXG4gIGF1dG9pbml0KCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IgPT4ge1xyXG4gICAgICBjb25zdCBmaWxlID0gZXJyb3IuZmlsZW5hbWUuc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgICAgaWYgKFsnc2lkZWJhci53cC5qcycsICd0YmItbWVudS53cC5qcycsICdvcHRpb25zLndwLmpzJywgJ2FkZG9uLXBhZ2Uud3AuanMnXS5pbmNsdWRlcyhmaWxlKSkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnZXJyb3I6YnJvd3Nlci1jb25zb2xlJywge1xyXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIGxvY2F0aW9uOiBlcnJvci5maWxlbmFtZS5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJykuc2hpZnQoKSArICc6JyArIGVycm9yLmxpbmVubyArICc6JyArIGVycm9yLmNvbG5vLFxyXG4gICAgICAgICAgdGltZTogKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LCBmYWxzZSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9FUlJPUlRSQUNLRVI7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcclxuICBmb3IgKHZhciBpIGluIG9iajIpXHJcbiAgICBpZiAoIW9iajFbaV0pIG9iajFbaV0gPSBvYmoyW2ldO1xyXG5cclxuICByZXR1cm4gb2JqMTtcclxufVxyXG4iLCJjb25zdCBfR0VUX0FDVElWRV9UQUIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgcmV0dXJuIGJyb3dzZXIudGFicy5xdWVyeSh7IGN1cnJlbnRXaW5kb3c6IHRydWUsIGFjdGl2ZTogdHJ1ZSB9KS50aGVuKHRhYnMgPT4gdGFic1swXSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IF9HRVRfQUNUSVZFX1RBQiB9XHJcbiIsIi8qXHJcbiogVHJhbnNsYXRlcyBhIEhUTWwgcGFnZSBpbiB0aGUgd2ViIGwxMG4gc3R5bGUgZnJvbSB0aGUgQWRkLW9uIFNESyB3aXRoIFdlYkV4dGVuc2lvbnMgc3RyaW5ncy5cclxuKiBNb2RpZmllZCBieSB1bmRlcmZseWluZ2JpcmNoZXNcclxuKlxyXG4qIEBhdXRob3IgTWFydGluIEdpZ2VyXHJcbiogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZnJlYWt0ZWNobmlrLzRhNzJiYzA3MTFkOWJjODJjZjNiMDc1YmNjMjkyOTUzfVxyXG4qIEBsaWNlbnNlIE1QTC0yLjBcclxuKi9cclxuZnVuY3Rpb24gdHJhbnNsYXRlRG9jdW1lbnQoKSB7XHJcbiAgbGV0IGVsLCBkYXRhLCBkYXRhc2V0O1xyXG4gIC8vIFNldCB0aGUgbGFuZ3VhZ2UgYXR0cmlidXRlIG9mIHRoZSBkb2N1bWVudC5cclxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdsYW5nJywgYnJvd3Nlci5pMThuLmdldFVJTGFuZ3VhZ2UoKS5yZXBsYWNlKCdfJywgJy0nKSk7XHJcbiAgLy8gR2V0IGFsbCBlbGVtZW50cyB0aGF0IGFyZSBtYXJrZWQgYXMgYmVpbmcgdHJhbnNsYXRlYWJsZS5cclxuICBjb25zdCB0ZXh0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1pZF0nKTtcclxuICBjb25zdCBhdHRyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtbDEwbi1hdHRyXScpO1xyXG5cclxuICBmb3IoZWwgb2YgdGV4dEVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuICAgIGNvbnN0IGwxMG5JZCA9IGRhdGFzZXQubDEwbklkO1xyXG5cclxuICAgIGlmIChsMTBuSWQpIHtcclxuICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5JZCk7XHJcblxyXG4gICAgICBpZihkYXRhICYmIGRhdGEgIT0gJz8/Jykge1xyXG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gZGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmb3IoZWwgb2YgYXR0ckVsZW1lbnRzKSB7XHJcbiAgICBkYXRhc2V0ID0gZWwuZGF0YXNldDtcclxuXHJcbiAgICBbJ1RpdGxlJywgJ1BsYWNlaG9sZGVyJ10uZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgY29uc3QgbDEwbkF0dHIgPSBkYXRhc2V0WydsMTBuJyArIGF0dHJdO1xyXG5cclxuICAgICAgaWYgKGwxMG5BdHRyKSB7XHJcbiAgICAgICAgZGF0YSA9IGJyb3dzZXIuaTE4bi5nZXRNZXNzYWdlKGwxMG5BdHRyKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YSAhPSAnPz8nKSB7XHJcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ci50b0xvd2VyQ2FzZSgpLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHRyYW5zbGF0ZURvY3VtZW50KCksIHtcclxuICAgIGNhcHR1cmU6IGZhbHNlLFxyXG4gICAgcGFzc2l2ZTogdHJ1ZSxcclxuICAgIG9uY2U6IHRydWVcclxuICB9KTtcclxufVxyXG4iLCJsZXQgdG9waWNzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gIG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICBpZiAoIXRvcGljc1tldmVudF0pIHRvcGljc1tldmVudF0gPSBbXTtcclxuXHJcbiAgICB0b3BpY3NbZXZlbnRdLnB1c2goaGFuZGxlcik7XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnRzLCAuLi5hcmdzKSB7XHJcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoJyAnKTtcclxuXHJcbiAgICBsZXQgaSA9IDAsIGwgPSBldmVudHMubGVuZ3RoLCB0b3BpYztcclxuXHJcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0b3BpYyA9IHRvcGljc1tldmVudHNbaV1dO1xyXG5cclxuICAgICAgaWYgKHRvcGljKVxyXG4gICAgICAgIHRvcGljLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3MpKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXF1ZXN0KGV2ZW50LCAuLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHsgZXY6IGV2ZW50LCBhcmdzOiBhcmdzLCB3YWl0OiB0cnVlIH0pLmNhdGNoKCgpID0+IHt9KTtcclxuICB9XHJcbiAgcHJveHkoY29udGV4dCwgZnVuYywgLi4uYXJnczEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzMikge1xyXG4gICAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzMS5jb25jYXQoYXJnczIpKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBfTUVESUFUT1IgZnJvbSAnLi9tZWRpYXRvcidcclxuXHJcbmV4cG9ydCBjbGFzcyBfTU9EVUxFIGV4dGVuZHMgX01FRElBVE9SIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcigpXHJcblxyXG4gICAgZm9yIChvIGluIG9iaikgdGhpc1tvXSA9IG9ialtvXTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgZW52RXZlbnRzLCBvLCBlLCBoYW5kbGVyO1xyXG5cclxuICAgIGlmIChldmVudHMgJiYgKGVudkV2ZW50cyA9IGV2ZW50cy5FTlYpKSB7XHJcbiAgICAgIGZvciAoZSBpbiBlbnZFdmVudHMpIHtcclxuICAgICAgICBoYW5kbGVyID0gZW52RXZlbnRzW2VdO1xyXG4gICAgICAgIGlmICh0aGlzW2hhbmRsZXJdKVxyXG4gICAgICAgICAgdGhpcy5vbihlLCB0aGlzLnByb3h5KHRoaXMsIHRoaXNbaGFuZGxlcl0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgIXRoaXMuYXV0b2luaXQgfHwgdGhpcy5hdXRvaW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfTU9EVUxFIH0gZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgX1BPUlQgZXh0ZW5kcyBfTU9EVUxFIHtcclxuXHJcbiAgY29uc3RydWN0b3Iob2JqKSB7XHJcbiAgICBzdXBlcihvYmopXHJcblxyXG4gICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG5cclxuICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5wcm94eSh0aGlzLCB0aGlzLnBhc3NNZXNzYWdlKSk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdwcml2aWxlZ2VkJyB8fCB0eXBlID09PSAnYmFja2dyb3VuZCcpIHRoaXMuaW5pdFBvcnRpbmcoKTtcclxuXHJcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgICAgb25lT2ZmRXZlbnRzLCBjb25uZWN0aW9uQmFzZWRFdmVudHM7XHJcblxyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBvbmVPZmZFdmVudHMgPSBldmVudHMuT05FT0ZGO1xyXG4gICAgICBpZiAob25lT2ZmRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiBvbmVPZmZFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGUsIHRoaXMucHJveHkodGhpcywgdGhpcy5zZW5kTWVzc2FnZSwgZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbm5lY3Rpb25CYXNlZEV2ZW50cyA9IGV2ZW50cy5DT05ORUNUSU9OO1xyXG4gICAgICBpZiAoY29ubmVjdGlvbkJhc2VkRXZlbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZiBvZiBjb25uZWN0aW9uQmFzZWRFdmVudHMpXHJcbiAgICAgICAgICB0aGlzLm9uKGYsIHRoaXMucHJveHkodGhpcywgdGhpcy5wb3N0TWVzc2FnZSwgZikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhc3NNZXNzYWdlKHJlcSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIHJlcS5hcmdzID0gcmVxLmFyZ3MgfHwgW107XHJcbiAgICBsZXQgYXJncyA9IFtdLmNvbmNhdChyZXEuZXYsIHJlcS5hcmdzKTtcclxuICAgIGlmICghc2VuZGVyIHx8ICFzZW5kZXIubmFtZSkgYXJncyA9IGFyZ3MuY29uY2F0KHNlbmRlciwgc2VuZFJlc3BvbnNlKTtcclxuICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIGlmIChyZXEud2FpdCkgcmV0dXJuIHRydWU7IC8vIHRoaXMgd2lsbCBrZWVwIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiB0byB0aGUgb3RoZXIgZW5kIHVudGlsIGBzZW5kUmVzcG9uc2VgIGlzIGNhbGxlZFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzZW5kTWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlO1xyXG4gICAgbGV0IG1zZyA9IHsgZXY6IGUsIGFyZ3M6IGFyZ3MgfTtcclxuICAgIGlmICh0eXBlID09PSAnY29udGVudCcpIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICBjb25zdCBsYXN0QXJnID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBpZiAobGFzdEFyZyAhPT0gdW5kZWZpbmVkICYmIGxhc3RBcmcudGFiKSB7XHJcbiAgICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKGxhc3RBcmcudGFiLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBicm93c2VyLnRhYnMucXVlcnkoey8qIGN1cnJlbnRXaW5kb3c6IGZhbHNlLCBhY3RpdmU6IGZhbHNlICovfSkudGhlbih0YWJzID0+IHtcclxuICAgICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKVxyXG4gICAgICAgICAgICBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwb3N0TWVzc2FnZShlLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBtc2cgPSB7IGV2OiBlLCBhcmdzOiBhcmdzIH07XHJcbiAgICBpZiAodGhpcy5wb3J0KSB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobXNnKTtcclxuICB9XHJcbiAgaW5pdFBvcnRpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMucG9zdHBvbmVDb25uZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmFkZENvbm5lY3Rpb25MaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkQ29ubmVjdGlvbkxpc3RlbmVycyh0aGlzLnByb3h5KHRoaXMsIHRoaXMuY29ubmVjdCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25uZWN0KCkge1xyXG4gICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydCA9IHRoaXMucG9ydCB8fCBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IHRoaXMubmFtZSB9KTtcclxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHRoaXMucG9ydCA9IG51bGwpO1xyXG4gIH1cclxuICBhZGRDb25uZWN0aW9uTGlzdGVuZXJzKGNiKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHBvcnQgPT4ge1xyXG4gICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnByb3h5KHRoaXMsIHRoaXMucGFzc01lc3NhZ2UpKTtcclxuICAgICAgIWNiIHx8IGNiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==