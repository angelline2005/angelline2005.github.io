/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 3749:
/*!*************************************!*\
  !*** ./src/comp/js/device/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "device": function() { return /* binding */ device; }
/* harmony export */ });
var SPECS = {
  MOBILE: {
    w: 0
  },
  TABLET: {
    w: 834
  },
  DESKTOP: {
    w: 1500
  }
};
var device = {
  isMobile: false,
  isTablet: false,
  isDesktop: false
};
var innerW = window.innerWidth;
if (innerW >= SPECS.DESKTOP.w) device.isDesktop = true;else if (innerW >= SPECS.TABLET.w) device.isTablet = true;else if (innerW >= SPECS.MOBILE.w) device.isMobile = true;

/***/ }),

/***/ 7806:
/*!***********************************!*\
  !*** ./src/comp/js/i18n/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__T": function() { return /* binding */ __T; }
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ 5666);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ 8309);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ 4747);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ 9826);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ 1249);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ 4916);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ 3123);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ 5306);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ 7941);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ 4603);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ 9714);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ 1539);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.promise.js */ 8674);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ 6992);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ 8783);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ 3948);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ 2526);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ 7327);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ 5003);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ 9337);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ 7042);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ 1038);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ 1817);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ 2165);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _lang_supported_languages__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./lang/supported-languages */ 9188);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import { myConsoleLog } from "../../../globals.js";

var name = "i18n"; // The locale our app first shows

var defaultLocale = "en"; // The active locale

var locale; // Gets filled with active locale translations

var translations = {};

var setLocale = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(newLocale) {
    var newTranslations;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(name, setLocale.name, newLocale);

            if (!(newLocale === locale)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            locale = newLocale;
            _context.next = 6;
            return fetchTranslationsFor(newLocale);

          case 6:
            newTranslations = _context.sent;
            translations = newTranslations;
            translatePage();

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function setLocale(_x) {
    return _ref.apply(this, arguments);
  };
}(); // Retrieve translations JSON object for the given
// locale over the network


function fetchTranslationsFor(_x2) {
  return _fetchTranslationsFor.apply(this, arguments);
} // Replace the inner text of each element that has a
// data-i18n-key attribute with the translation corresponding
// to its data-i18n-key


function _fetchTranslationsFor() {
  _fetchTranslationsFor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(newLocale) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", __webpack_require__(9379)("./".concat(locale, ".json")));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _fetchTranslationsFor.apply(this, arguments);
}

function translatePage() {
  console.log(name, translatePage.name);
  document.querySelectorAll("[data-i18n-key]").forEach(translateElement);
} // Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's data-i18n-key


function translateElement(element) {
  // console.log(name, translateElement.name, element)  
  var key = element.getAttribute("data-i18n-key");
  var option = element.getAttribute("data-i18n-option"); // console.log(name, translateElement.name, "option", option)

  __T(key, _objectSpread(_objectSpread({}, JSON.parse(option)), {}, {
    element: element
  }));
}

function isSupported(locale) {
  return _lang_supported_languages__WEBPACK_IMPORTED_MODULE_24__.supportedLanguages.indexOf(locale) > -1;
}

function supportedOrDefault(locales) {
  return locales.find(isSupported) || defaultLocale;
}

function browserLocales() {
  var languageCodeOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return navigator.languages.map(function (locale) {
    return languageCodeOnly ? locale.split("-")[0] : locale;
  });
}

var init = function init() {
  console.log(name, init.name);
  var initialLocale = supportedOrDefault(browserLocales(true));
  setLocale(initialLocale);
};

var __T = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(key) {
    var option,
        result,
        subIdArr,
        _iterator,
        _step,
        subId,
        subIdResult,
        interpolations,
        element,
        _args2 = arguments;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            option = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {
              subIdArr: null,
              interpolations: null,
              element: null
            };
            _context2.next = 3;
            return fetchTranslationsFor(locale);

          case 3:
            result = "";

            if (translations[key]) {
              _context2.next = 7;
              break;
            }

            console.log(name, __T.name, key, translations[key]);
            return _context2.abrupt("return");

          case 7:
            result = translations[key];
            subIdArr = option.subIdArr; // subId

            if (!subIdArr) {
              _context2.next = 30;
              break;
            }

            _iterator = _createForOfIteratorHelper(subIdArr);
            _context2.prev = 11;

            _iterator.s();

          case 13:
            if ((_step = _iterator.n()).done) {
              _context2.next = 22;
              break;
            }

            subId = _step.value;
            subIdResult = "";
            _context2.next = 18;
            return __T(subId);

          case 18:
            subIdResult = _context2.sent;
            // console.log(name, "subIdResult", subIdResult)
            result = result.replace(subId, subIdResult);

          case 20:
            _context2.next = 13;
            break;

          case 22:
            _context2.next = 27;
            break;

          case 24:
            _context2.prev = 24;
            _context2.t0 = _context2["catch"](11);

            _iterator.e(_context2.t0);

          case 27:
            _context2.prev = 27;

            _iterator.f();

            return _context2.finish(27);

          case 30:
            // interpolations
            interpolations = option.interpolations;

            if (interpolations) {
              result = Object.keys(interpolations).reduce(function (interpolated, key) {
                return interpolated.replace(new RegExp("{s*".concat(key, "s*}"), "g"), interpolations[key]);
              }, result);
            } // console.log(name, "result", result, option);


            element = option.element;

            if (element) {
              element.innerHTML = result;
              element.setAttribute("data-i18n-key", key);
              element.setAttribute("data-i18n-option", JSON.stringify(_objectSpread(_objectSpread({}, option), {}, {
                element: null
              })));
            }

            return _context2.abrupt("return", result);

          case 35:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[11, 24, 27, 30]]);
  }));

  return function __T(_x3) {
    return _ref2.apply(this, arguments);
  };
}();
init(); // test

window.__setLocate = function (value) {
  setLocale(value);
}; // un-rem to test
// __T('STR_TUTORIAL_1').then(text => console.log(name, text))
// __T('testSubId_subStr').then(text => console.log(name, text))
// __T('testSubId_subStr', { interpolations: { '0': 0, '1': 11, '2': 22 }}).then(text => console.log(name, text))
// __T('testSubId_subStr', { subIdArr: ['testId', 'test-id'], interpolations: { '0': 0, '1': 11, '2': 22 }}).then(text => console.log(name, text))

/***/ }),

/***/ 9188:
/*!******************************************************!*\
  !*** ./src/comp/js/i18n/lang/supported-languages.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "supportedLanguages": function() { return /* binding */ supportedLanguages; }
/* harmony export */ });
//// This file is auto generate by CCStringExporter tools, Do not direct modify
var supportedLanguages = ['en', 'bg', 'cs', 'de', 'el', 'es', 'fr', 'hu', 'it', 'pl', 'pt', 'ro', 'sk', 'uk', 'sr', 'tr'];

/***/ }),

/***/ 2974:
/*!****************************************!*\
  !*** ./src/comp/js/localhost/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localhost": function() { return /* binding */ localhost; }
/* harmony export */ });
var name = "js-localhost";

var is = function is() {
  var result = false;

  if (window.location.hostname == 'localhost') {
    result = true;
  }

  return result;
};

var localhost = {
  is: is(),
  apiUrl: "https://play.ludigames.com/huawei/sbt/trunk/action.php"
};

/***/ }),

/***/ 9357:
/*!***************************************!*\
  !*** ./src/comp/js/products/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchEventsLeaderboard": function() { return /* binding */ fetchEventsLeaderboard; },
/* harmony export */   "fetchProducts": function() { return /* binding */ fetchProducts; },
/* harmony export */   "fetchRankLeaderBoard": function() { return /* binding */ fetchRankLeaderBoard; },
/* harmony export */   "getGameNameFromPId": function() { return /* binding */ getGameNameFromPId; },
/* harmony export */   "getGameUrlFromPId": function() { return /* binding */ getGameUrlFromPId; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ 9254);
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ 8309);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ 6992);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ 1539);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ 8783);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ 3948);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ 1637);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../globals */ 3542);








var name = "products";
window.userInfo = null;
window.products = null;
var getGameUrlFromPId = function getGameUrlFromPId(pId) {
  var result = "";
  var products = window.products;
  products.every(function (product) {
    var pID = product.pID;

    if (parseInt(pID) == pId) {
      result = product.link;
      return false; // break
    }

    return true;
  });
  return result;
};
var getGameNameFromPId = function getGameNameFromPId(pId) {
  var result = "";
  var products = window.products;
  products.every(function (product) {
    var pID = product.pID;

    if (parseInt(pID) == pId) {
      result = product.name;
      return false; // break
    }

    return true;
  });
  return result;
};
var fetchRankLeaderBoard = function fetchRankLeaderBoard() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    lb_id: lb_id
  };
  var onload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var apiUrl = (0,_globals__WEBPACK_IMPORTED_MODULE_7__.originPath)() + "action.php";
  var apiParams = "?action=get_leaderboard&debug=true";

  if (_globals__WEBPACK_IMPORTED_MODULE_7__.localhost.is) {
    apiUrl = _globals__WEBPACK_IMPORTED_MODULE_7__.localhost.apiUrl;
  }

  var options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(params)
  };
  (0,_globals__WEBPACK_IMPORTED_MODULE_7__.fetchAwait)(apiUrl + apiParams, function (resJ) {
    (0,_globals__WEBPACK_IMPORTED_MODULE_7__.myConsoleLog)(name, fetchRankLeaderBoard.name, resJ);
    if (onload) onload(resJ);
  }, options);
};
var fetchEventsLeaderboard = function fetchEventsLeaderboard() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    tour_id: tour_id
  };
  var onload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var apiUrl = (0,_globals__WEBPACK_IMPORTED_MODULE_7__.originPath)() + "action.php";
  var apiParams = "?action=get_leaderboard_tour&debug=true";

  if (_globals__WEBPACK_IMPORTED_MODULE_7__.localhost.is) {
    apiUrl = _globals__WEBPACK_IMPORTED_MODULE_7__.localhost.apiUrl;
  }

  var options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(params)
  };
  (0,_globals__WEBPACK_IMPORTED_MODULE_7__.fetchAwait)(apiUrl + apiParams, function (resJ) {
    (0,_globals__WEBPACK_IMPORTED_MODULE_7__.myConsoleLog)(name, fetchEventsLeaderboard.name, resJ);
    if (onload) onload(resJ);
  }, options);
};
var fetchProducts = function fetchProducts() {
  var onload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  // already fetched
  if (window.products != null) {
    (0,_globals__WEBPACK_IMPORTED_MODULE_7__.myConsoleLog)(name, fetchProducts.name, "already fetched");
    return;
  }

  var apiUrl = (0,_globals__WEBPACK_IMPORTED_MODULE_7__.originPath)() + "action.php";
  var apiParams = "?action=get_game_list&debug=true";

  if (_globals__WEBPACK_IMPORTED_MODULE_7__.localhost.is) {
    apiUrl = _globals__WEBPACK_IMPORTED_MODULE_7__.localhost.apiUrl;
  }

  (0,_globals__WEBPACK_IMPORTED_MODULE_7__.fetchAwait)(apiUrl + apiParams, function (resJ) {
    (0,_globals__WEBPACK_IMPORTED_MODULE_7__.myConsoleLog)(name, fetchProducts.name, resJ);
    var products = resJ.products;
    window.products = products;
    if (onload) onload(resJ);
  });
};

/***/ }),

/***/ 6355:
/*!************************************!*\
  !*** ./src/comp/js/store/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store_ACTION_TYPE": function() { return /* binding */ store_ACTION_TYPE; },
/* harmony export */   "store_dispatch": function() { return /* binding */ store_dispatch; },
/* harmony export */   "store_subcribe": function() { return /* binding */ store_subcribe; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ 8309);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ 4747);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ 7941);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ 2526);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ 7327);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ 5003);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ 9337);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../globals */ 3542);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var name = "store";

var store = {};
var store_ACTION_TYPE = {
  USER_playGame_saveDatabase: "USER_playGame_saveDatabase",
  USER_playGame_gameScore: "USER_playGame_gameScore",
  USER_inventoryFetched: "USER_inventoryFetched",
  USER_rankLeaderboardFetched: "USER_rankLeaderboardFetched",
  USER_eventsLeaderboardFetched: "USER_eventsLeaderboardFetched",
  USER_logWillNotChange: "USER_logWillNotChange",
  INDEX_productFetched: "INDEX_productFetched"
};
var store_subcribe = function store_subcribe(msg, handler) {
  (0,_globals__WEBPACK_IMPORTED_MODULE_7__.myConsoleLog)(name, store_subcribe.name, msg);

  if (!store[msg]) {
    store[msg] = [handler];
  } else {
    store[msg].push(handler);
  } // relay


  if (store[msg + "-relay"]) {
    var temp = store[msg + "-relay"];
    var timeMs = temp.timeMs,
        params = temp.params;

    if (Date.now() > timeMs) {
      handler(params);
    }
  }
};
var store_dispatch = function store_dispatch(msg) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  (0,_globals__WEBPACK_IMPORTED_MODULE_7__.myConsoleLog)(name, store_dispatch.name, msg, params);

  if (!!store[msg]) {
    store[msg].forEach(function (element) {
      element(params);
    });
  } // relay


  var relay = params.relay;

  if (relay) {
    var temp = store[msg + "-relay"] = {};
    temp.timeMs = Date.now();
    temp.params = _objectSpread({}, params);
  }
};

/***/ }),

/***/ 5225:
/*!*****************************************!*\
  !*** ./src/comp/js/url-params/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlParams": function() { return /* binding */ urlParams; },
/* harmony export */   "urlQueryString": function() { return /* binding */ urlQueryString; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ 4916);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ 5306);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ 9601);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ 4765);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ 6992);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ 1539);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ 8783);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ 3948);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ 1637);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ 9720);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.number.parse-int.js */ 9494);
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ 9653);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.number.is-nan.js */ 4048);
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ 7941);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ 2526);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ 7327);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ 5003);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ 4747);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ 9337);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ 1817);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ 2165);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ 7042);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ 8309);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ 1038);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_23__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























// not import
var originPath = function originPath() {
  var result = "";

  if (!window.cdn_path) {
    result = window.location.origin + window.location.pathname.replace(/\/[\w\-]*\.\w*/gi, "\/"); // remove xxx.html
  } else {
    result = window.cdn_path;
  }

  return result;
};

var loadLS = function loadLS(from, to) {
  // save to a variable
  var loadedObj = JSON.parse(localStorage.getItem(from) || JSON.stringify(""));

  var tempObj = _objectSpread(_objectSpread({}, to), loadedObj);

  Object.assign(to, tempObj);
};

var saveLS = function saveLS(overrideObj, from, to) {
  // save to a variable, then save to LocalStorage
  var tempObj = _objectSpread(_objectSpread({}, from), overrideObj);

  Object.assign(from, tempObj);
  localStorage.setItem(to, JSON.stringify(from));
};

var urlQueryString = window.location.search;
var urlParams = new URLSearchParams(urlQueryString);
var LS_URL_PARAMS = originPath() + "LS_URL_PARAMS";
var paramsList = ['debug', 'alert', 'test-game', 'adsv2'];
var ls_up = {};

var up_loadLS = function up_loadLS() {
  var tmp = {};
  loadLS(LS_URL_PARAMS, tmp);
  {
    ls_up = _objectSpread({}, tmp); // console.log(up_loadLS.name, ls_up);
  }
};

var up_saveLS = function up_saveLS() {
  var overrideObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // console.log(up_saveLS.name, overrideObj);
  saveLS(overrideObj, ls_up, LS_URL_PARAMS);
};

var init = function init() {
  up_loadLS();
  var tmpParams = new URLSearchParams(urlQueryString); // update tmpParams from LS

  var ls_up_arr = Object.entries(ls_up);

  for (var _i = 0, _ls_up_arr = ls_up_arr; _i < _ls_up_arr.length; _i++) {
    var _ls_up_arr$_i = _slicedToArray(_ls_up_arr[_i], 2),
        key = _ls_up_arr$_i[0],
        value = _ls_up_arr$_i[1];

    if (!urlParams.has(key)) {
      tmpParams.append(key, value);
    }
  } // update LS from urlParams


  paramsList.forEach(function (param) {
    if (urlParams.has(param)) {
      var _value = urlParams.get(param); // bool check


      if (_value === 'true' || _value === 'false' || _value === '') {
        _value = _value === 'true';
      } // int check


      var parsed = Number.parseInt(_value, 10);

      if (!Number.isNaN(parsed)) {
        _value = parsed;
      }

      up_saveLS(_defineProperty({}, param, _value));
    }
  }); // update urlParams from tmpParams

  urlParams = tmpParams; // log 
  // console.log(init.name, "urlParams", urlParams.toString());
};

init();

/***/ }),

/***/ 9081:
/*!***********************************!*\
  !*** ./src/comp/js/user/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOG_STATUS": function() { return /* binding */ LOG_STATUS; },
/* harmony export */   "as_connect": function() { return /* binding */ as_connect; },
/* harmony export */   "as_disconnect": function() { return /* binding */ as_disconnect; },
/* harmony export */   "as_register": function() { return /* binding */ as_register; },
/* harmony export */   "defaultParams": function() { return /* binding */ defaultParams; },
/* harmony export */   "fetchAccessToken": function() { return /* binding */ fetchAccessToken; },
/* harmony export */   "fetchCancelAccessToken": function() { return /* binding */ fetchCancelAccessToken; },
/* harmony export */   "fetchUserTpInfo": function() { return /* binding */ fetchUserTpInfo; },
/* harmony export */   "gameLeaderboard_valid": function() { return /* binding */ gameLeaderboard_valid; },
/* harmony export */   "log": function() { return /* binding */ log; },
/* harmony export */   "logOut": function() { return /* binding */ logOut; },
/* harmony export */   "ls_user": function() { return /* binding */ ls_user; },
/* harmony export */   "registerUser": function() { return /* binding */ registerUser; },
/* harmony export */   "updateLogStatus": function() { return /* binding */ updateLogStatus; },
/* harmony export */   "user_loadLS": function() { return /* binding */ user_loadLS; },
/* harmony export */   "user_playGame": function() { return /* binding */ user_playGame; },
/* harmony export */   "user_saveLS": function() { return /* binding */ user_saveLS; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ 8309);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ 9254);
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ 6992);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ 1539);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ 8783);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ 3948);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ 1637);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.number.is-nan.js */ 4048);
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ 9653);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ 7941);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ 2526);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ 7327);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ 5003);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ 4747);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ 9337);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../globals.js */ 3542);
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var _require = __webpack_require__(/*! ../../../environments/environment.development.js */ 3094),
    env = _require.environment;

var name = "user";
var LS_USER = (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.originPath)() + "LS_USER";
var default_gameLeaderboard = {
  lb_id: null,
  score: 0,
  score_date: null,
  key: null,
  start_time: null,
  end_time: null,
  rank: null,
  list: null,
  screen_shoot: null,
  gameNeedReset: false
};
var default_ls_user = {
  version: 221102,
  uiduser_encrypt: "ludilbtest",
  // no need in storage
  game_id: 4049,
  // no need in storage
  partner_id: 1,
  // no need in storage
  tour_id: 2,
  // no need in storage
  user_id: null,
  base64image: null,
  gameLeaderboard: _objectSpread({}, default_gameLeaderboard),
  account_kit: {
    access_token: null,
    expires_in: null,
    scope: null,
    id_token: null,
    refresh_token: null,
    // extra
    expires_at: null,
    expires_at_str: null
  },
  tp_user_info: {
    displayName: "",
    openID: "",
    email: ""
  },
  playGame: {
    action: null,
    base64image: null,
    score: null,
    score_date: null
  }
};
var ls_user = _objectSpread({}, default_ls_user);
var defaultParams = {
  client_id: env.client_id,
  client_secret: env.client_secret,
  redirect_uri: env.redirect_uri,
  scope: env.scope
};
var isFakeFetch = false;
var LOG_STATUS = {
  NOT_INIT: -1,
  LOGGING: 0,
  LOGGED: 1,
  NOT_LOGGED: 2
};
var log = {
  name: "user-log",
  _status: LOG_STATUS.NOT_INIT,

  get status() {
    return this._status;
  },

  set status(value) {
    if (this._status != value) {
      this._status = value;

      if (value == LOG_STATUS.LOGGED || value == LOG_STATUS.NOT_LOGGED) {
        (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.store_dispatch)(_globals_js__WEBPACK_IMPORTED_MODULE_15__.store_ACTION_TYPE.USER_logWillNotChange, {
          relay: true,
          status: value
        });
      }
    }
  },

  get is() {
    return this._status == LOG_STATUS.LOGGED;
  }

};
var completionQuest = {};
var user_playGame = function user_playGame(event) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    pID: -1,
    name: "",
    link: ""
  };
  var currentTarget = event.currentTarget;
  var game_id = params.pID,
      game_name = params.name,
      link = params.link;
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.myConsoleLog)(name, user_playGame.name, link);
  event.preventDefault();
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.redirect_to)(link);
};

var user_playGame_saveDatabase = function user_playGame_saveDatabase() {
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.myConsoleLog)(name, user_playGame_saveDatabase.name);
};

var user_playGame_gameScore = function user_playGame_gameScore(params) {
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.myConsoleLog)(name, user_playGame_gameScore.name);
  var base64image = params.base64image,
      score = params.score,
      time = params.time;
  var _ls_user = ls_user,
      ls_score = _ls_user.gameLeaderboard.score;

  if (ls_score < score) {
    var date = new Date().getTime();
    user_saveLS({
      playGame: {
        base64image: base64image,
        score: score,
        score_date: date,
        time: time
      }
    });

    if (gameLeaderboard_valid()) {
      user_submitScore({}, scoreSubmittedHandler);
    } else {
      var _ls_user2 = ls_user,
          _ls_user2$tp_user_inf = _ls_user2.tp_user_info,
          _tp_id = _ls_user2$tp_user_inf.openID,
          _displayName = _ls_user2$tp_user_inf.displayName,
          _uiduser_encrypt = _ls_user2.uiduser_encrypt,
          _game_id = _ls_user2.game_id,
          _partner_id = _ls_user2.partner_id,
          _tour_id = _ls_user2.tour_id;
      var _params = {
        tp_id: _tp_id,
        displayName: _displayName,
        uiduser_encrypt: _uiduser_encrypt,
        game_id: _game_id,
        partner_id: _partner_id,
        tour_id: _tour_id
      };
      registerUser(_params, function (regResJ) {
        registerHandler(regResJ);
        user_submitScore({}, scoreSubmittedHandler);
      });
    }
  }
};

var scoreSubmittedHandler = function scoreSubmittedHandler(resJ) {
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.myConsoleLog)(name, scoreSubmittedHandler.name, resJ);
  var code = resJ.code;

  if (code == _globals_js__WEBPACK_IMPORTED_MODULE_15__.AR_RESPONSE_CODE.SUCCESSFUL) {
    var rank = resJ.rank,
        screen_shot = resJ.screen_shot;
    var _ls_user3 = ls_user,
        score = _ls_user3.playGame.score;
    var _ls_user4 = ls_user,
        gameLeaderboard = _ls_user4.gameLeaderboard;
    gameLeaderboard = _objectSpread(_objectSpread({}, gameLeaderboard), {}, {
      rank: rank,
      score: score
    });
    user_saveLS({
      gameLeaderboard: gameLeaderboard
    });
  }
};

var user_submitScore = function user_submitScore() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var onsuccess = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.myConsoleLog)(name, user_submitScore.name);
  var apiUrl = (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.originPath)() + "action.php";
  var apiParams = "?action=submit_score&debug=true";

  if (_globals_js__WEBPACK_IMPORTED_MODULE_15__.localhost.is) {
    apiUrl = _globals_js__WEBPACK_IMPORTED_MODULE_15__.localhost.apiUrl;
  }

  var _ls_user5 = ls_user,
      tp_id = _ls_user5.tp_user_info.openID,
      uiduser_encrypt = _ls_user5.uiduser_encrypt,
      game_id = _ls_user5.game_id,
      partner_id = _ls_user5.partner_id,
      tour_id = _ls_user5.tour_id,
      user_id = _ls_user5.user_id,
      _ls_user5$gameLeaderb = _ls_user5.gameLeaderboard,
      lb_id = _ls_user5$gameLeaderb.lb_id,
      key = _ls_user5$gameLeaderb.key,
      _ls_user5$playGame = _ls_user5.playGame,
      score = _ls_user5$playGame.score,
      base64image = _ls_user5$playGame.base64image,
      time = _ls_user5$playGame.time;
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      tp_id: tp_id,
      uiduser_encrypt: uiduser_encrypt,
      game_id: game_id,
      partner_id: partner_id,
      tour_id: tour_id,
      user_id: user_id,
      lb_id: lb_id,
      key: key,
      score: score,
      time: time,
      screenshot: base64image
    })
  };
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.fetchAwait)(apiUrl + apiParams, function (resJ) {
    if (onsuccess) onsuccess(resJ);
  }, options);
};

var as_register = function as_register(backUrl) {
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.myConsoleLog)(name, as_register.name, backUrl);
};
var as_connect = function as_connect(backUrl) {
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.myConsoleLog)(name, as_connect.name, backUrl);
};
var as_disconnect = function as_disconnect(backUrl) {};
var user_loadLS = function user_loadLS() {
  var tmp = {};
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.loadLS)(LS_USER, tmp);

  if (tmp.version == undefined || tmp.version < default_ls_user.version) {
    // has new version
    (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.myConsoleLog)(name, user_loadLS.name, "has new version");
    user_saveLS(default_ls_user);
  } else {
    ls_user = _objectSpread({}, tmp);
    (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.myConsoleLog)(name, user_loadLS.name, "no new version");
  }
};
var user_saveLS = function user_saveLS() {
  var overrideObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.myConsoleLog)(name, user_saveLS.name, overrideObj);
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.saveLS)(overrideObj, ls_user, LS_USER);
};
var updateLogStatus = function updateLogStatus() {
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.myConsoleLog)(name, updateLogStatus.name);
  var _ls_user6 = ls_user,
      _ls_user6$tp_user_inf = _ls_user6.tp_user_info,
      tp_id = _ls_user6$tp_user_inf.openID,
      displayName = _ls_user6$tp_user_inf.displayName,
      uiduser_encrypt = _ls_user6.uiduser_encrypt,
      game_id = _ls_user6.game_id,
      partner_id = _ls_user6.partner_id,
      tour_id = _ls_user6.tour_id;

  if (_globals_js__WEBPACK_IMPORTED_MODULE_15__.urlParams.has("tp-id")) {
    tp_id = _globals_js__WEBPACK_IMPORTED_MODULE_15__.urlParams.get("tp-id"); // user_saveLS( { tp_user_info: { openID: tp_id } })
  }

  if (_globals_js__WEBPACK_IMPORTED_MODULE_15__.urlParams.has("uiduser_encrypt")) {
    uiduser_encrypt = _globals_js__WEBPACK_IMPORTED_MODULE_15__.urlParams.get("uiduser_encrypt");
    user_saveLS({
      uiduser_encrypt: uiduser_encrypt
    });
  }

  if (tp_id && uiduser_encrypt) {
    var params = {
      tp_id: tp_id,
      displayName: displayName,
      uiduser_encrypt: uiduser_encrypt,
      game_id: game_id,
      partner_id: partner_id,
      tour_id: tour_id
    };
    log.status = LOG_STATUS.LOGGING;
    registerUser(params, registerHandler);
  } else {
    log.status = LOG_STATUS.NOT_LOGGED;
  }
};

var registerHandler = function registerHandler(resJ) {
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.myConsoleLog)(name, registerHandler.name, resJ);
  var code = resJ.code;

  if (code == _globals_js__WEBPACK_IMPORTED_MODULE_15__.AR_RESPONSE_CODE.SUCCESSFUL) {
    var user_id = resJ.user_id,
        res_lb_id = resJ.lb_id,
        score = resJ.score,
        key = resJ.key,
        avatar = resJ.avatar;
    var _ls_user7 = ls_user,
        gameLeaderboard = _ls_user7.gameLeaderboard;
    var _gameLeaderboard = gameLeaderboard,
        lb_id = _gameLeaderboard.lb_id;
    var gameNeedReset = +lb_id != +res_lb_id;
    gameLeaderboard = _objectSpread(_objectSpread({}, gameLeaderboard), {}, {
      lb_id: res_lb_id,
      score: score,
      key: key,
      avatar: avatar,
      gameNeedReset: gameNeedReset
    });
    user_saveLS({
      gameLeaderboard: gameLeaderboard,
      user_id: user_id
    });
    log.status = LOG_STATUS.LOGGED;
    (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.fetchRankLeaderBoard)({
      lb_id: res_lb_id
    }, rankLeaderboardHandler);
  }
};

var registerUser = function registerUser() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    tp_id: tp_id,
    displayName: displayName,
    uiduser_encrypt: uiduser_encrypt,
    game_id: game_id,
    partner_id: partner_id,
    tour_id: tour_id
  };
  var onsuccess = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.myConsoleLog)(name, registerUser.name);
  var apiUrl = (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.originPath)() + "action.php";
  var apiParams = "?action=register_user&debug=true";

  if (_globals_js__WEBPACK_IMPORTED_MODULE_15__.localhost.is) {
    apiUrl = _globals_js__WEBPACK_IMPORTED_MODULE_15__.localhost.apiUrl;
  }

  var options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(params)
  };
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.fetchAwait)(apiUrl + apiParams, function (resJ) {
    if (onsuccess) onsuccess(resJ);
  }, options);
};

var rankLeaderboardHandler = function rankLeaderboardHandler(resJ) {
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.myConsoleLog)(name, rankLeaderboardHandler.name);
  var _ls_user8 = ls_user,
      gameLeaderboard = _ls_user8.gameLeaderboard;
  var start_time = resJ.start_time,
      end_time = resJ.end_time;
  start_time = +start_time;
  end_time = +end_time;
  var start_time_str = "";
  var end_time_str = "";

  if (!Number.isNaN(start_time)) {
    start_time_str = new Date(start_time).toISOString();
  }

  if (!Number.isNaN(end_time)) {
    end_time_str = new Date(end_time).toISOString();
  }

  gameLeaderboard = _objectSpread(_objectSpread(_objectSpread({}, gameLeaderboard), resJ), {}, {
    start_time_str: start_time_str,
    end_time_str: end_time_str
  });
  user_saveLS({
    gameLeaderboard: gameLeaderboard
  });
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.store_dispatch)(_globals_js__WEBPACK_IMPORTED_MODULE_15__.store_ACTION_TYPE.USER_rankLeaderboardFetched, _objectSpread({
    relay: true
  }, resJ));
};

var fetchUserTpInfo = function fetchUserTpInfo() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    access_token: access_token
  };
  var onsuccess = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.myConsoleLog)(name, fetchUserTpInfo.name);
  var apiUrl = "https://account.cloud.huawei.com/rest.php?nsp_svc=GOpen.User.getInfo";
  var apiParams = "";
  var options = {
    method: 'POST',
    // mode: 'no-cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(params)
  };

  if (isFakeFetch) {
    setTimeout(function () {
      var resJ = {
        "displayName": "182******74",
        "openID": "MDFAMTAxMDA1MTg1QGFlMzM0OWIyOGY0MzNiaNjI1MDRiaNTI5ODAxYTA3MDhkQDU1MDA4ZTZmNTA2ZTE4ZTg0Yzc2YTlmNGVmN2E1ZjY1OTg4NWRiaN2QxMzQyMDUzNGMzNTU0YWQ3",
        "headPictureURL": "https://upfile-drcn.platform.hicloud.com/FileServer/image/b.0150086000130905592.20180407082531.08157939582468778294625163020035.1000.9C3EE92B95EFEF4CAC263604A15953F32C7BC9E8A47D52B774511F75EF34C0D4.jpg"
      };
      if (onsuccess) onsuccess(resJ);
    }, 1000);
  } else {
    (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.fetchAwait)(apiUrl + apiParams, function (resJ) {
      if (onsuccess) onsuccess(resJ);
    }, options);
  }
};

var userTpInfoHandler = function userTpInfoHandler(resJ) {
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.myConsoleLog)(name, userTpInfoHandler.name, resJ);
  var error = resJ.error;

  if (error) {
    if (_globals_js__WEBPACK_IMPORTED_MODULE_15__.urlParams.has("code")) {
      var _code = _globals_js__WEBPACK_IMPORTED_MODULE_15__.urlParams.get("code");

      fetchAccessToken({
        code: _code
      }, accessTokenHandler);
    } else {
      // not log
      log.status = LOG_STATUS.NOT_LOGGED;
    }
  } else {
    user_saveLS({
      tp_user_info: resJ
    });
    updateLogStatus();
  }
};

var refreshTokenHandler = function refreshTokenHandler(resJ) {
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.myConsoleLog)(name, refreshTokenHandler.name, resJ);
  var error = resJ.error;

  if (error) {
    if (_globals_js__WEBPACK_IMPORTED_MODULE_15__.urlParams.has("code")) {
      var _code2 = _globals_js__WEBPACK_IMPORTED_MODULE_15__.urlParams.get("code");

      fetchAccessToken({
        code: _code2
      }, accessTokenHandler);
    } else {
      // not log
      log.status = LOG_STATUS.NOT_LOGGED;
    }
  } else {
    accessTokenHandler(resJ);
  }
};

var accessTokenHandler = function accessTokenHandler(resJ) {
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.myConsoleLog)(name, accessTokenHandler.name, resJ);
  var error = resJ.error;

  if (error) {
    log.status = LOG_STATUS.NOT_LOGGED;
  } else {
    var _access_token = resJ.access_token,
        expires_in = resJ.expires_in;

    var temp = _objectSpread({}, resJ);

    temp.expires_at = new Date().getTime() + expires_in * 1000;
    temp.expires_at_str = new Date(temp.expires_at).toISOString();
    user_saveLS({
      account_kit: temp
    }); // TODO: check if need to refetch UserInfo

    fetchUserTpInfo({
      access_token: _access_token
    }, userTpInfoHandler);
  }
};

var updateAccessToken = function updateAccessToken() {
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.myConsoleLog)(name, updateAccessToken.name);
  var _ls_user9 = ls_user,
      _ls_user9$account_kit = _ls_user9.account_kit,
      access_token = _ls_user9$account_kit.access_token,
      refresh_token = _ls_user9$account_kit.refresh_token,
      expires_at = _ls_user9$account_kit.expires_at;
  var now = new Date().getTime();

  if (access_token && refresh_token) {
    if (now >= expires_at) {
      fetchAccessToken({
        refresh_token: refresh_token
      }, refreshTokenHandler);
    } else {
      fetchUserTpInfo({
        access_token: access_token
      }, userTpInfoHandler);
    }
  } else if (_globals_js__WEBPACK_IMPORTED_MODULE_15__.urlParams.has("code")) {
    var _code3 = _globals_js__WEBPACK_IMPORTED_MODULE_15__.urlParams.get("code");

    _globals_js__WEBPACK_IMPORTED_MODULE_15__.urlParams["delete"]("code");
    fetchAccessToken({
      code: _code3
    }, accessTokenHandler);
  } else {
    // not log
    log.status = LOG_STATUS.NOT_LOGGED;
  }
};

var fetchAccessToken = function fetchAccessToken() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    grant_type: grant_type,
    code: code,
    refresh_token: refresh_token
  };
  var onsuccess = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return function () {
    (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.myConsoleLog)(name, fetchAccessToken.name, params);
    var apiUrl = (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.originPath)() + "action.php";
    var apiParams = "?action=token&debug=true";

    if (_globals_js__WEBPACK_IMPORTED_MODULE_15__.localhost.is) {
      apiUrl = _globals_js__WEBPACK_IMPORTED_MODULE_15__.localhost.apiUrl;
    }

    var client_id = defaultParams.client_id,
        client_secret = defaultParams.client_secret,
        redirect_uri = defaultParams.redirect_uri;
    var _params2 = params,
        code = _params2.code,
        refresh_token = _params2.refresh_token;

    if (code) {
      params.grant_type = "authorization_code";
    } else if (refresh_token) {
      params.grant_type = "refresh_token";
    }

    params = _objectSpread({
      client_id: client_id,
      client_secret: client_secret,
      redirect_uri: redirect_uri
    }, params);
    var options = {
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(params)
    };

    if (isFakeFetch) {
      setTimeout(function () {
        var resJ = {
          "access_token": "CFyJ21sNODl16eV9y2vu3CwQk9DBr32BkOcxxgAd7MZUR5th1giyTk5\/kA+QDAyxou+\/5U2zzBRcf3qgLkkFdtbbC+mM3zFV7xj7CCEMHc5Tw92al0Y=",
          "refresh_token": "CF13G0sRaGybtYt7SIyeUILNORtTFwMgz4ao5C7j7vtgLPt6ogmXKjdI8RS\/YlyS71z4DyP6kEMnOrRlmNK0KhdOUNWd+qVLLRsEEHkqRIKpuAkPvL8=",
          "expires_in": 3600,
          "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjExOGRmMjU0YjgzNzE4OWQxYmMyYmU5NjUwYTgyMTEyYzAwZGY1YTQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI3ODI0NTY2Njc4OTgtc2M0MzE3Y2l0NGEwMjB0NzdrbGdsbWo1ZjA4YWtnMWIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI3ODI0NTY2Njc4OTgtN2NkNGJpYWRkaGVwNGc4cnZic2VlOGtwcDA5Zm1hNzIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDE3MTIxMzkwMzgwNDE2MDc0MTQiLCJlbWFpbCI6Inh1ZXpoZW5odWF0anVAc2luYS5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGljdHVyZSI6Imh0dHBzOi8vbGg1Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tMm9lTTllT09zNTAvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQkkvMVpOSC0xdmxxc3cvczk2LWMvcGhvdG8uanBnIiwiaWF0IjoxNTYxNDUxMTUyLCJleHAiOjE1NjE0NTQ3NTJ9.Eo9IHMkid596jvt1YYzNsRtDq9c9K9dbougkU41Noh7TXNiko86_RuWwHID6k1kDg398AwC3wwH-t2hLcUjgrXPNd9XYU96Jp4-UxdDszP6ywEJgvvBCyTHzsi2auvKt_MnfSrs3qOKfh7noJvXq8AY-Hi3vqSUks5kGqbZKVzCHhBDO3RD9Fs9YHsB6w0XVKZojPOBDaAT_TiijoChn-Q-e8NbSGUx52OgeH-Nw5lOj6JVb_7fb6ucWRzlhiQuzFjklevLVw2pjw1MxKbl1vfRp0X699uZBVjgl9hj1L7LSDObuPzLiXF7ojji5JKYC6zIwAtZQUZ_VUmSk01GDLQ",
          "scope": "openid profile email",
          "token_type": "Bearer"
        };
        if (onsuccess) onsuccess(resJ);
      }, 1000);
    } else {
      (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.fetchAwait)(apiUrl + apiParams, function (resJ) {
        if (onsuccess) onsuccess(resJ);
      }, options);
    }
  }();
};

var cancelAccessTokenHandler = function cancelAccessTokenHandler(resJ) {
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.myConsoleLog)(name, cancelAccessTokenHandler.name, resJ);
  var error = resJ.error;

  if (error) {// assume the request is ok
    // reset ls_user
    // user_saveLS(default_ls_user)
    // redirect_to(originPath() + "index.html");
  } else {
    // reset ls_user
    user_saveLS(default_ls_user);
    (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.redirect_to)((0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.originPath)() + "index.html");
  }
};

var logOut = function logOut() {
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.myConsoleLog)(name, logOut.name);
  var _ls_user10 = ls_user,
      access_token = _ls_user10.account_kit.access_token;
  fetchCancelAccessToken({
    token: access_token
  }, cancelAccessTokenHandler);
};
var fetchCancelAccessToken = function fetchCancelAccessToken() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    token: token
  };
  var onsuccess = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return function () {
    (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.myConsoleLog)(name, fetchCancelAccessToken.name, params);
    var apiUrl = (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.originPath)() + "action.php";
    var apiParams = "?action=revoke&debug=true";

    if (_globals_js__WEBPACK_IMPORTED_MODULE_15__.localhost.is) {
      apiUrl = _globals_js__WEBPACK_IMPORTED_MODULE_15__.localhost.apiUrl;
    }

    var _ls_user11 = ls_user,
        access_token = _ls_user11.account_kit.access_token;
    var token = params.token;

    if (!token) {
      access_token, _readOnlyError("token");
    }

    var options = {
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(params)
    };

    if (isFakeFetch) {
      setTimeout(function () {
        var resJ = {};
        if (onsuccess) onsuccess(resJ);
      }, 1000);
    } else {
      (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.fetchAwait)(apiUrl + apiParams, function (resJ) {
        if (onsuccess) onsuccess(resJ);
      }, options);
    }
  }();
};

var eventsLeaderboardHandler = function eventsLeaderboardHandler(resJ) {
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.myConsoleLog)(name, eventsLeaderboardHandler.name, resJ);
  var code = resJ.code;

  if (code == _globals_js__WEBPACK_IMPORTED_MODULE_15__.AR_RESPONSE_CODE.SUCCESSFUL) {
    var _ls_user12 = ls_user,
        gameLeaderboard = _ls_user12.gameLeaderboard;
    var start_time = resJ.start_time,
        end_time = resJ.end_time;
    start_time = +start_time;
    end_time = +end_time;
    var start_time_str = "";
    var end_time_str = "";

    if (!Number.isNaN(start_time)) {
      start_time_str = new Date(start_time).toISOString();
    }

    if (!Number.isNaN(end_time)) {
      end_time_str = new Date(end_time).toISOString();
    }

    gameLeaderboard = _objectSpread(_objectSpread(_objectSpread({}, gameLeaderboard), resJ), {}, {
      start_time_str: start_time_str,
      end_time_str: end_time_str
    });
    user_saveLS({
      gameLeaderboard: gameLeaderboard
    });
    (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.store_dispatch)(_globals_js__WEBPACK_IMPORTED_MODULE_15__.store_ACTION_TYPE.USER_eventsLeaderboardFetched, _objectSpread({
      relay: true
    }, resJ));
  }
};

var init = function init() {
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.myConsoleLog)(name, init.name);

  if (_globals_js__WEBPACK_IMPORTED_MODULE_15__.urlParams.has("fake-fetch")) {
    isFakeFetch = true;
  }

  user_loadLS();
  var _ls_user13 = ls_user,
      tour_id = _ls_user13.tour_id;
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.fetchEventsLeaderboard)({
    tour_id: tour_id
  }, eventsLeaderboardHandler);
  updateAccessToken();
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.store_subcribe)(_globals_js__WEBPACK_IMPORTED_MODULE_15__.store_ACTION_TYPE.USER_playGame_saveDatabase, user_playGame_saveDatabase);
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.store_subcribe)(_globals_js__WEBPACK_IMPORTED_MODULE_15__.store_ACTION_TYPE.USER_playGame_gameScore, user_playGame_gameScore);
};

var gameLeaderboard_valid = function gameLeaderboard_valid() {
  var result = true;
  var _ls_user14 = ls_user,
      _ls_user14$gameLeader = _ls_user14.gameLeaderboard,
      lb_id = _ls_user14$gameLeader.lb_id,
      end_time = _ls_user14$gameLeader.end_time;
  var now = new Date().getTime();

  if (now >= +end_time) {
    result = false;
  }

  if (!lb_id) {
    result = false;
  }

  (0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.myConsoleLog)(name, gameLeaderboard_valid.name, result);
  return result;
};
init();
(0,_globals_js__WEBPACK_IMPORTED_MODULE_15__.myConsoleLog)(name, "loaded");

/***/ }),

/***/ 6281:
/*!***********************************!*\
  !*** ./src/comp/js/webp/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "webpIsSupported": function() { return /* binding */ webpIsSupported; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ 1539);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ 8674);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);



var gl = __webpack_require__(/*! ../../../globals.js */ 3542); // functions


var WebpIsSupported = function WebpIsSupported(callback) {
  // If the browser doesn't has the method createImageBitmap, you can't display webp format
  if (!window.createImageBitmap) {
    callback(false);
    return;
  } // Base64 representation of a white point image


  var webpdata = "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA="; // Retrieve the Image in Blob Format

  fetch(webpdata).then(function (response) {
    return response.blob();
  }).then(function (blob) {
    // If the createImageBitmap method succeeds, return true, otherwise false
    createImageBitmap(blob).then(function () {
      callback(true);
    }, function () {
      callback(false);
    });
  });
}; // check_webp_feature:
//   'feature' can be one of 'lossy', 'lossless', 'alpha' or 'animation'.
//   'callback(feature, result)' will be passed back the detection result (in an asynchronous way!)


var check_webp_feature = function check_webp_feature(feature, callback) {
  var kTestImages = {
    "lossy": "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
    "lossless": "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
    "alpha": "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
    "animation": "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
  };
  var img = new Image();

  img.onload = function () {
    var result = img.width > 0 && img.height > 0;
    callback(feature, result);
  };

  img.onerror = function () {
    callback(feature, false);
  };

  img.src = "data:image/webp;base64," + kTestImages[feature];
}; // functions end


var webpIsSupported = false;
/* check_webp_feature("lossy", function (feature, result) {
  console.log(feature + "=" + result);
  webpIsSupported = result;
}); */

gl.myConsoleLog("webp loaded");

/***/ }),

/***/ 5242:
/*!*************************************************!*\
  !*** ./src/comp/ui/common/back-to-top/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ 783);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../globals */ 3542);


var name = "c-back-to-top";
var back_to_top = document.querySelector(".back-to-top");

if (!!back_to_top) {
  back_to_top.onclick = function (event) {
    (0,_globals__WEBPACK_IMPORTED_MODULE_1__.myConsoleLog)(name, (0,_globals__WEBPACK_IMPORTED_MODULE_1__.varToString)({
      back_to_top: back_to_top
    }), "onclick", event);
    event.preventDefault();
    var currentTarget = event.currentTarget;
    window.scroll(0, 0);
  };
}

(0,_globals__WEBPACK_IMPORTED_MODULE_1__.myConsoleLog)(name, "loaded");

/***/ }),

/***/ 5986:
/*!********************************************!*\
  !*** ./src/comp/ui/common/footer/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ 8309);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ 1365);
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../globals.js */ 3542);



var name = "footer";
var footer = document.querySelector(".cf.footer");

var addListener = function addListener() {
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_2__.myConsoleLog)(name, addListener.name);
};

var init = function init() {
  (0,_globals_js__WEBPACK_IMPORTED_MODULE_2__.myConsoleLog)(name, init.name);
  addListener();
};

init();
(0,_globals_js__WEBPACK_IMPORTED_MODULE_2__.myConsoleLog)(name, "loaded");

/***/ }),

/***/ 5272:
/*!********************************************!*\
  !*** ./src/comp/ui/common/header/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ 8309);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ 6699);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ 2023);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.scss */ 7369);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ 4381);
/* harmony import */ var _fontawesome_free_6_1_1_web_css_fontawesome_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fontawesome-free-6.1.1-web/css/fontawesome.css */ 8711);
/* harmony import */ var _fontawesome_free_6_1_1_web_css_solid_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fontawesome-free-6.1.1-web/css/solid.css */ 4696);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../globals */ 3542);
/* harmony import */ var _pop_up_header_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pop-up-header/index */ 6922);
/* harmony import */ var _js_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../js/user */ 9081);








 // import { cli_show } from "../log-in";


var name = "ch-header";
var body = document.querySelector("body");
var header = body.querySelector(".ch.header");
var icon = header.querySelector(".icon");
var buttonsEl = header.querySelector(".buttons");
var btn_leaderboard = buttonsEl.querySelector(".leaderboard");
var btn_profile = buttonsEl.querySelector(".profile");
var btn_menu = buttonsEl.querySelector(".menu");
var menu_bars = btn_menu.querySelector(".fa-bars");
var menu_xmark = btn_menu.querySelector(".fa-xmark");

var addListener = function addListener() {
  (0,_globals__WEBPACK_IMPORTED_MODULE_7__.myConsoleLog)(name, addListener.name);

  btn_leaderboard.onclick = function (event) {
    (0,_globals__WEBPACK_IMPORTED_MODULE_7__.myConsoleLog)(name, (0,_globals__WEBPACK_IMPORTED_MODULE_7__.varToString)({
      btn_leaderboard: btn_leaderboard
    }), "click");
    dataLayer.push({
      "event": "ga_event",
      "ga_category": "Huawei tournament",
      "ga_action": "Click on menu",
      "ga_label": "Leaderboard icon",
      "ga_noninteraction": false
    });
    (0,_globals__WEBPACK_IMPORTED_MODULE_7__.redirect_to)((0,_globals__WEBPACK_IMPORTED_MODULE_7__.originPath)() + "leaderboard.html");
  };

  btn_profile.onclick = function (event) {
    (0,_globals__WEBPACK_IMPORTED_MODULE_7__.myConsoleLog)(name, (0,_globals__WEBPACK_IMPORTED_MODULE_7__.varToString)({
      btn_profile: btn_profile
    }), "click");
    dataLayer.push({
      "event": "ga_event",
      "ga_category": "Huawei tournament",
      "ga_action": "Click on menu",
      "ga_label": "Profile  icon",
      "ga_noninteraction": false
    });

    if (_js_user__WEBPACK_IMPORTED_MODULE_9__.log.is) {
      (0,_globals__WEBPACK_IMPORTED_MODULE_7__.redirect_to)((0,_globals__WEBPACK_IMPORTED_MODULE_7__.originPath)() + "profile.html");
    } else {// cli_show();
    }
  };

  btn_menu.onclick = function (event) {
    (0,_globals__WEBPACK_IMPORTED_MODULE_7__.myConsoleLog)(name, (0,_globals__WEBPACK_IMPORTED_MODULE_7__.varToString)({
      btn_menu: btn_menu
    }), "click");
    dataLayer.push({
      "event": "ga_event",
      "ga_category": "Huawei tournament",
      "ga_action": "Click on menu",
      "ga_label": "Burger Menu  icon",
      "ga_noninteraction": false
    });
    var menu_class = btn_menu.classList;

    if (menu_class.contains("active")) {
      resetButtons();
      (0,_pop_up_header_index__WEBPACK_IMPORTED_MODULE_8__.cph_hideAll)();
    } else {
      menu_class.add("active");
      (0,_globals__WEBPACK_IMPORTED_MODULE_7__.elShow)(menu_xmark);
      (0,_globals__WEBPACK_IMPORTED_MODULE_7__.elHide)(menu_bars);
      (0,_pop_up_header_index__WEBPACK_IMPORTED_MODULE_8__.cph_show)(_pop_up_header_index__WEBPACK_IMPORTED_MODULE_8__.cph_STATE.MENU);
    }
  };

  icon.onclick = function (event) {
    (0,_globals__WEBPACK_IMPORTED_MODULE_7__.myConsoleLog)(name, (0,_globals__WEBPACK_IMPORTED_MODULE_7__.varToString)({
      icon: icon
    }), "click");
    (0,_globals__WEBPACK_IMPORTED_MODULE_7__.redirect_to)((0,_globals__WEBPACK_IMPORTED_MODULE_7__.originPath)() + "index.html");
  };
};

var resetButtons = function resetButtons() {
  (0,_globals__WEBPACK_IMPORTED_MODULE_7__.myConsoleLog)(name, resetButtons.name);
  if (window.location.href.includes("leaderboard")) btn_leaderboard.classList.add("active");
  if (window.location.href.includes("profile")) btn_profile.classList.add("active");
  btn_menu.classList.remove("active");
  (0,_globals__WEBPACK_IMPORTED_MODULE_7__.elShow)(menu_bars);
  (0,_globals__WEBPACK_IMPORTED_MODULE_7__.elHide)(menu_xmark);
};

var init = function init() {
  (0,_globals__WEBPACK_IMPORTED_MODULE_7__.myConsoleLog)(name, init.name);
  resetButtons();
  addListener();
  body.style.visibility = "visible";
};

init();
(0,_globals__WEBPACK_IMPORTED_MODULE_7__.myConsoleLog)(name, "loaded");

/***/ }),

/***/ 3050:
/*!**************************************************!*\
  !*** ./src/comp/ui/common/pop-up-header/data.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "faqsGeneralQuestionsData": function() { return /* binding */ faqsGeneralQuestionsData; },
/* harmony export */   "faqsPhysicalQuestionsData": function() { return /* binding */ faqsPhysicalQuestionsData; },
/* harmony export */   "prizesData": function() { return /* binding */ prizesData; }
/* harmony export */ });
/* harmony import */ var _img_prizes_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/prizes-1.png */ 486);
/* harmony import */ var _img_prizes_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/prizes-2.png */ 6568);
/* harmony import */ var _img_prizes_3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/prizes-3.png */ 3701);



var faqsGeneralQuestionsData = [{
  question: "str_general_question_01",
  answer: "str_general_answer_01"
}, {
  question: "str_general_question_02",
  answer: "str_general_answer_02"
}, {
  question: "str_general_question_03",
  answer: "str_general_answer_03"
}, {
  question: "str_general_question_04",
  answer: "str_general_answer_04"
}, {
  question: "str_general_question_05",
  answer: "str_general_answer_05"
}, {
  question: "str_general_question_06",
  answer: "str_general_answer_06"
}, {
  question: "str_general_question_07",
  answer: "str_general_answer_07"
}, {
  question: "str_general_question_08",
  answer: "str_general_answer_08"
}, {
  question: "str_general_question_09",
  answer: "str_general_answer_09"
}, {
  question: "str_general_question_10",
  answer: "str_general_answer_10"
}];
var faqsPhysicalQuestionsData = [{
  question: "str_physical_question_01",
  answer: "str_physical_answer_01"
}, {
  question: "str_physical_question_02",
  answer: "str_physical_answer_02"
}, {
  question: "str_physical_question_03",
  answer: "str_physical_answer_03"
}, {
  question: "str_physical_question_04",
  answer: "str_physical_answer_04"
}, {
  question: "str_physical_question_05",
  answer: "str_physical_answer_05"
}, {
  question: "str_physical_question_06",
  answer: "str_physical_answer_06"
}];
var prizesData = [{
  ordinal: "str_first_prize",
  name: "Huawei Nova 9",
  image: _img_prizes_1_png__WEBPACK_IMPORTED_MODULE_0__,
  content: "str_prizes_nova_9",
  btnContent: "str_prizes_detail",
  btnLink: "https://consumer.huawei.com/en/phones/nova9/"
}, {
  ordinal: "str_second_prize",
  name: "HUAWEI Matepad Pro",
  image: _img_prizes_2_png__WEBPACK_IMPORTED_MODULE_1__,
  content: "str_prizes_matepad_pro",
  btnContent: "str_prizes_2nd_detail",
  btnLink: "https://consumer.huawei.com/uk/tablets/matepad-pro/"
}, {
  ordinal: "str_third_prize",
  name: "HUAWEI Watch 3 Pro Elite",
  image: _img_prizes_3_png__WEBPACK_IMPORTED_MODULE_2__,
  content: "str_prizes_watch_3_pro_elite",
  btnContent: "str_prizes_3rd_detail",
  btnLink: "https://consumer.huawei.com/en/wearables/watch-3-pro/"
}];

/***/ }),

/***/ 6922:
/*!***************************************************!*\
  !*** ./src/comp/ui/common/pop-up-header/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cph_STATE": function() { return /* binding */ cph_STATE; },
/* harmony export */   "cph_hide": function() { return /* binding */ cph_hide; },
/* harmony export */   "cph_hideAll": function() { return /* binding */ cph_hideAll; },
/* harmony export */   "cph_show": function() { return /* binding */ cph_show; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ 8309);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ 4747);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ 1249);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ 7941);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ 2526);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ 7327);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ 5003);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ 9337);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _header_common_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../header/common.scss */ 7369);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.scss */ 7746);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../globals */ 3542);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data */ 3050);
/* harmony import */ var _js_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../js/user */ 9081);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













 // import { cli_show } from "../log-in";

var backUrl = (0,_globals__WEBPACK_IMPORTED_MODULE_10__.originPath)() + "index.html"; //test param

var adsv2Path = "";
var debugParam = "";
if (_globals__WEBPACK_IMPORTED_MODULE_10__.urlParams.get("adsv2") === 'true') adsv2Path = "/test_root_2";
if (_globals__WEBPACK_IMPORTED_MODULE_10__.urlParams.get("debug") === 'true') debugParam = "&debug=true";
var linkPortal = "https://play.ludigames.com".concat(adsv2Path, "?h-sbt=") + encodeURIComponent(backUrl) + debugParam;
var name = "cph-pop-up-header";
var body = document.querySelector("body");
var popUpHeader = body.querySelector(".pop-up-header"); // menu

var menu = popUpHeader.querySelector(".menu-popup"); // menu button

var btnHome = menu.querySelector(".menu-home");
var btnLeaderBoard = menu.querySelector(".menu-leaderboard");
var btnFaqs = menu.querySelector(".menu-faqs");
var btnInfo = menu.querySelector(".menu-contest-info");
var btnTc = menu.querySelector(".menu-terms-conditions");
var btnFrizes = menu.querySelector(".menu-prizes");
var info = popUpHeader.querySelector(".info-popup");
var faqs = popUpHeader.querySelector(".faqs-popup");
var tc = popUpHeader.querySelector(".tc-popup");
var prizes = popUpHeader.querySelector(".prizes-popup");
var prizesContent = prizes.querySelector(".prizes-popup-content");
var prizesContentTpl = prizesContent.querySelector("template");
var faqsPopupMh = popUpHeader.querySelector(".faqs-popup-mh");
var faqsQuestions = popUpHeader.querySelector(".faqs-popup-questions");
var faqsQuestionsTemp = faqsQuestions.querySelector("template");
var faqsQuestionsPhysical = popUpHeader.querySelector(".faqs-popup-questions-physical");
var faqsQuestionsTempPhysical = faqsQuestionsPhysical.querySelector("template");
var viewOnlineGame = menu.querySelector(".view-more-btn");
var closes = popUpHeader.querySelectorAll(".close");
var playGameBtns = popUpHeader.querySelectorAll(".play-game");
var dataPush = {
  "event": "ga_event",
  "ga_category": "Huawei tournament",
  "ga_action": "Play games",
  "ga_noninteraction": false
};
var cph_STATE = {
  // value MUST match with children id
  MENU: 0,
  INFO: 1,
  TC: 2,
  PRIZES: 3,
  FAQS: 4
};
var state = [];
var children = [menu, info, tc, prizes, faqs];
var z_index = 0;
var cph_show = function cph_show() {
  var nextState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -111;
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
  (0,_globals__WEBPACK_IMPORTED_MODULE_10__.myConsoleLog)(name, cph_show.name, nextState, params, state[state.length - 1]);
  if (state[state.length - 1] == nextState) return;
  state.push(nextState);
  (0,_globals__WEBPACK_IMPORTED_MODULE_10__.elShow)(popUpHeader);
  (0,_globals__WEBPACK_IMPORTED_MODULE_10__.elShow)(children[nextState]);
  children[nextState].style.zIndex = z_index++;
};
var cph_hide = function cph_hide() {
  (0,_globals__WEBPACK_IMPORTED_MODULE_10__.myConsoleLog)(name, cph_hide.name);
  if (state.length == 0) return;
  var current_state = state.pop();
  (0,_globals__WEBPACK_IMPORTED_MODULE_10__.elHide)(children[current_state]);
  if (state.length == 0) (0,_globals__WEBPACK_IMPORTED_MODULE_10__.elHide)(popUpHeader);
};
var cph_hideAll = function cph_hideAll() {
  (0,_globals__WEBPACK_IMPORTED_MODULE_10__.myConsoleLog)(name, cph_hideAll.name);
  (0,_globals__WEBPACK_IMPORTED_MODULE_10__.elHide)(popUpHeader);
  children.forEach(function (child) {
    (0,_globals__WEBPACK_IMPORTED_MODULE_10__.elHide)(child);
  });
  state = [];
};

var showData = function showData() {
  _data__WEBPACK_IMPORTED_MODULE_11__.faqsGeneralQuestionsData.map(function (item) {
    var faqsQuestionsItem = faqsQuestionsTemp.content.lastElementChild.cloneNode(true);
    var faqsQuest = faqsQuestionsItem.querySelector(".question");
    var faqsQuestText = faqsQuestionsItem.querySelector(".question .text");
    var faqsAnswer = faqsQuestionsItem.querySelector(".answer");
    var faqsIcon = faqsQuestionsItem.querySelector(".icon i");

    (0,_globals__WEBPACK_IMPORTED_MODULE_10__.__T)(item.question, {
      element: faqsQuestText
    });

    (0,_globals__WEBPACK_IMPORTED_MODULE_10__.__T)(item.answer, {
      element: faqsAnswer
    });

    if (typeof faqsQuest !== "undefined" && !!faqsQuest) {
      faqsQuest.onclick = function (event) {
        if (faqsQuest.classList.contains("active")) {
          faqsQuest.classList.remove("active");
          faqsIcon.style.transform = "rotate(0deg)";
          (0,_globals__WEBPACK_IMPORTED_MODULE_10__.elHide)(faqsAnswer);
        } else {
          checkActive();
          faqsQuest.classList.add("active");
          faqsIcon.style.transform = "rotate(180deg)";
          (0,_globals__WEBPACK_IMPORTED_MODULE_10__.elShow)(faqsAnswer);
        }
      };
    }

    faqsQuestions.appendChild(faqsQuestionsItem);
  });
  _data__WEBPACK_IMPORTED_MODULE_11__.faqsPhysicalQuestionsData.map(function (item) {
    var faqsQuestionsItemPhysical = faqsQuestionsTempPhysical.content.lastElementChild.cloneNode(true);
    var faqsQuest = faqsQuestionsItemPhysical.querySelector(".question");
    var faqsQuestText = faqsQuestionsItemPhysical.querySelector(".question .text");
    var faqsAnswer = faqsQuestionsItemPhysical.querySelector(".answer");
    var faqsIcon = faqsQuestionsItemPhysical.querySelector(".icon i");

    (0,_globals__WEBPACK_IMPORTED_MODULE_10__.__T)(item.question, {
      element: faqsQuestText
    });

    (0,_globals__WEBPACK_IMPORTED_MODULE_10__.__T)(item.answer, {
      element: faqsAnswer
    });

    if (typeof faqsQuest !== "undefined" && !!faqsQuest) {
      faqsQuest.onclick = function (event) {
        if (faqsQuest.classList.contains("active")) {
          faqsQuest.classList.remove("active");
          faqsIcon.style.transform = "rotate(0deg)";
          (0,_globals__WEBPACK_IMPORTED_MODULE_10__.elHide)(faqsAnswer);
        } else {
          checkActive();
          faqsQuest.classList.add("active");
          faqsIcon.style.transform = "rotate(180deg)";
          (0,_globals__WEBPACK_IMPORTED_MODULE_10__.elShow)(faqsAnswer);
        }
      };
    }

    faqsQuestionsPhysical.appendChild(faqsQuestionsItemPhysical);
  });

  var checkActive = function checkActive() {
    var faqsQuestionsCheckActive = faqsPopupMh.querySelectorAll(".question");

    if (faqsQuestionsCheckActive.length > 0) {
      faqsQuestionsCheckActive.forEach(function (btn) {
        var faqsAnswerSel = btn.parentElement.querySelector(".answer");
        var faqsIcon = btn.querySelector(".icon i");

        if (btn.classList.contains("active")) {
          btn.classList.remove("active");
          faqsIcon.style.transform = "rotate(0deg)";
          (0,_globals__WEBPACK_IMPORTED_MODULE_10__.elHide)(faqsAnswerSel);
        }
      });
    }
  };

  _data__WEBPACK_IMPORTED_MODULE_11__.prizesData.forEach(function (item) {
    var prizesItem = prizesContentTpl.content.lastElementChild.cloneNode(true);
    var prizesItemImg = prizesItem.querySelector(".img img");
    var prizesItemOrdinal = prizesItem.querySelector(".ordinal");
    var prizesItemName = prizesItem.querySelector(".name");
    var prizesItemContent = prizesItem.querySelector(".content");
    var prizesItemAboutsHuawei = prizesItem.querySelector(".abouts-huawei a");
    var prizesItemAboutsHuaweiIcon = prizesItem.querySelector(".abouts-huawei i");
    prizesItemImg.src = item.image;

    (0,_globals__WEBPACK_IMPORTED_MODULE_10__.__T)(item.ordinal, {
      element: prizesItemOrdinal
    });

    prizesItemName.innerHTML = item.name;

    (0,_globals__WEBPACK_IMPORTED_MODULE_10__.__T)(item.content, {
      element: prizesItemContent
    });

    (0,_globals__WEBPACK_IMPORTED_MODULE_10__.__T)(item.btnContent, {
      element: prizesItemAboutsHuawei
    });

    prizesItemAboutsHuawei.setAttribute("href", item.btnLink);

    prizesItemAboutsHuaweiIcon.onclick = function (event) {
      window.location.href = item.btnLink;
    };

    prizesContent.appendChild(prizesItem);
  });
};

var addListener = function addListener() {
  (0,_globals__WEBPACK_IMPORTED_MODULE_10__.myConsoleLog)(name, addListener.name);

  popUpHeader.onclick = function (event) {
    (0,_globals__WEBPACK_IMPORTED_MODULE_10__.myConsoleLog)(name, (0,_globals__WEBPACK_IMPORTED_MODULE_10__.varToString)({
      popUpHeader: popUpHeader
    }), "onclick");
    cph_hide();
  };

  children.forEach(function (child) {
    child.onclick = function (event) {
      (0,_globals__WEBPACK_IMPORTED_MODULE_10__.myConsoleLog)(name, (0,_globals__WEBPACK_IMPORTED_MODULE_10__.varToString)({
        child: child
      }), "onclick", child, event);
      (0,_globals__WEBPACK_IMPORTED_MODULE_10__.stopPropagation)(event);
    };
  });
  closes.forEach(function (close) {
    close.onclick = function (event) {
      (0,_globals__WEBPACK_IMPORTED_MODULE_10__.myConsoleLog)(name, (0,_globals__WEBPACK_IMPORTED_MODULE_10__.varToString)({
        close: close
      }), "onclick");
      cph_hide();
      console.log("close onclick");
    };
  });

  if (typeof playGameBtns !== "undefined" && !!playGameBtns) {
    var gameLeaderboard = _js_user__WEBPACK_IMPORTED_MODULE_12__.ls_user.gameLeaderboard;
    playGameBtns.forEach(function (playGame) {
      playGame.onclick = function (event) {
        switch (playGame.parentNode.classList[0]) {
          case "info-popup-button":
            dataLayer.push(_objectSpread(_objectSpread({}, dataPush), {}, {
              "ga_label": "Info section"
            }));
            break;

          case "tc-popup-button":
            dataLayer.push(_objectSpread(_objectSpread({}, dataPush), {}, {
              "ga_label": "Terms section"
            }));
            break;

          case "prizes-popup-button":
            dataLayer.push(_objectSpread(_objectSpread({}, dataPush), {}, {
              "ga_label": "Prizes section"
            }));
            break;

          case "faqs-popup-button":
            dataLayer.push(_objectSpread(_objectSpread({}, dataPush), {}, {
              "ga_label": "FAQs"
            }));
            break;

          case "menu-popup-button":
            dataLayer.push(_objectSpread(_objectSpread({}, dataPush), {}, {
              "ga_action": "Connect to play",
              "ga_label": "Menu"
            }));
            break;
        }

        (0,_globals__WEBPACK_IMPORTED_MODULE_10__.myConsoleLog)(name, (0,_globals__WEBPACK_IMPORTED_MODULE_10__.varToString)({
          playGame: playGame
        }), "onclick");

        if (_js_user__WEBPACK_IMPORTED_MODULE_12__.log.is) {
          (0,_globals__WEBPACK_IMPORTED_MODULE_10__.redirect_to)((0,_globals__WEBPACK_IMPORTED_MODULE_10__.originPath)() + "game.html");
        } else {// cli_show();
        }

        cph_hide();
      };

      if (_js_user__WEBPACK_IMPORTED_MODULE_12__.log.is && (gameLeaderboard === null || gameLeaderboard === void 0 ? void 0 : gameLeaderboard.score) > 0) {
        (0,_globals__WEBPACK_IMPORTED_MODULE_10__.__T)('str_try_again', {
          element: playGame
        });
      } // logged and don't have image score
      else if (_js_user__WEBPACK_IMPORTED_MODULE_12__.log.is && (gameLeaderboard === null || gameLeaderboard === void 0 ? void 0 : gameLeaderboard.score) <= 0) {
        (0,_globals__WEBPACK_IMPORTED_MODULE_10__.__T)('btn_play_game', {
          element: playGame
        });
      } // no logged

    });
  }

  if (typeof viewOnlineGame !== "undefined" && !!viewOnlineGame) {
    viewOnlineGame.onclick = function () {
      dataLayer.push(_objectSpread(_objectSpread({}, dataPush), {}, {
        "ga_action": "View all games",
        "ga_label": "Menu"
      }));
      (0,_globals__WEBPACK_IMPORTED_MODULE_10__.redirect_to)(linkPortal);
    };
  }

  if (typeof btnHome !== "undefined" && !!btnHome) {
    btnHome.onclick = function () {
      (0,_globals__WEBPACK_IMPORTED_MODULE_10__.redirect_to)((0,_globals__WEBPACK_IMPORTED_MODULE_10__.originPath)() + "index.html");
    };
  }

  if (typeof btnLeaderBoard !== "undefined" && !!btnLeaderBoard) {
    btnLeaderBoard.onclick = function () {
      (0,_globals__WEBPACK_IMPORTED_MODULE_10__.redirect_to)((0,_globals__WEBPACK_IMPORTED_MODULE_10__.originPath)() + "leaderboard.html");
    };
  }

  if (typeof btnFaqs !== "undefined" && !!btnFaqs) {
    btnFaqs.onclick = function (event) {
      (0,_globals__WEBPACK_IMPORTED_MODULE_10__.myConsoleLog)(name, (0,_globals__WEBPACK_IMPORTED_MODULE_10__.varToString)({
        btnFaqs: btnFaqs
      }), "onclick");
      cph_show(cph_STATE.FAQS);
    };
  }

  if (typeof btnInfo !== "undefined" && !!btnInfo) {
    btnInfo.onclick = function (event) {
      (0,_globals__WEBPACK_IMPORTED_MODULE_10__.myConsoleLog)(name, (0,_globals__WEBPACK_IMPORTED_MODULE_10__.varToString)({
        btnInfo: btnInfo
      }), "onclick");
      cph_show(cph_STATE.INFO);
    };
  }

  if (typeof btnTc !== "undefined" && !!btnTc) {
    btnTc.onclick = function (event) {
      (0,_globals__WEBPACK_IMPORTED_MODULE_10__.myConsoleLog)(name, (0,_globals__WEBPACK_IMPORTED_MODULE_10__.varToString)({
        btnTc: btnTc
      }), "onclick");
      cph_show(cph_STATE.TC);
    };
  }

  if (typeof btnFrizes !== "undefined" && !!btnFrizes) {
    btnFrizes.onclick = function (event) {
      (0,_globals__WEBPACK_IMPORTED_MODULE_10__.myConsoleLog)(name, (0,_globals__WEBPACK_IMPORTED_MODULE_10__.varToString)({
        btnFrizes: btnFrizes
      }), "onclick");
      cph_show(cph_STATE.PRIZES);
    };
  }
};

var init = function init() {
  (0,_globals__WEBPACK_IMPORTED_MODULE_10__.myConsoleLog)(name, init.name);
  showData();
  (0,_globals__WEBPACK_IMPORTED_MODULE_10__.store_subcribe)(_globals__WEBPACK_IMPORTED_MODULE_10__.store_ACTION_TYPE.USER_logWillNotChange, function () {
    addListener();
  });
};

init();
(0,_globals__WEBPACK_IMPORTED_MODULE_10__.myConsoleLog)(name, "loaded");

/***/ }),

/***/ 2696:
/*!****************************************!*\
  !*** ./src/comp/ui/game/game/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ 8309);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ 7941);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ 2526);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ 7327);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ 5003);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ 4747);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ 9337);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ 9091);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../globals */ 3542);
/* harmony import */ var _js_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../js/user */ 9081);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var name = "g-game";
var gg = document.querySelector(".gg.game");
var g_game_frame = document.getElementById("game-frame");
window.g_window = g_game_frame.contentWindow;

var addListener = function addListener() {
  (0,_globals__WEBPACK_IMPORTED_MODULE_8__.myConsoleLog)(name, addListener.name);
};

var updateIFrameSrc = function updateIFrameSrc() {
  (0,_globals__WEBPACK_IMPORTED_MODULE_8__.myConsoleLog)(name, updateIFrameSrc.name);
  var cdn_server = "//cdn.ludigames.com/";
  var link = "h5-partner/huawei/sbt/skyBridgeFree/";

  if (_globals__WEBPACK_IMPORTED_MODULE_8__.localhost.is || _globals__WEBPACK_IMPORTED_MODULE_8__.urlParams.has("test-game") && _globals__WEBPACK_IMPORTED_MODULE_8__.urlParams.get("test-game") === 'true') {
    link = "h5-partner/huawei/sbt/test18/skyBridgeFree/?debug=true";
  }

  var final_link = cdn_server + link;
  g_game_frame.src = final_link; // check valid

  var gameLeaderboard = _js_user__WEBPACK_IMPORTED_MODULE_9__.ls_user.gameLeaderboard;
  var _gameLeaderboard = gameLeaderboard,
      gameNeedReset = _gameLeaderboard.gameNeedReset;

  if (gameNeedReset) {
    g_game_frame.onload = function () {
      (0,_globals__WEBPACK_IMPORTED_MODULE_8__.myConsoleLog)(name, "g_game_frame.onload");
      g_window.postMessage({
        action: "portal-new-leaderboard-id"
      }, '*');
    }; // last, save LS


    gameLeaderboard = _objectSpread(_objectSpread({}, gameLeaderboard), {}, {
      gameNeedReset: false
    });
    (0,_js_user__WEBPACK_IMPORTED_MODULE_9__.user_saveLS)({
      gameLeaderboard: gameLeaderboard
    });
  }
};

var initIFrame = function initIFrame() {
  (0,_globals__WEBPACK_IMPORTED_MODULE_8__.myConsoleLog)(name, initIFrame.name);
  updateIFrameSrc();
};

var init = function init() {
  (0,_globals__WEBPACK_IMPORTED_MODULE_8__.myConsoleLog)(name, init.name);
  initIFrame();
  addListener(); // store_subcribe(store_ACTION_TYPE.USER_playGame_saveDatabase, takeshot);
};

init();
(0,_globals__WEBPACK_IMPORTED_MODULE_8__.myConsoleLog)(name, "loaded");

/***/ }),

/***/ 3094:
/*!*****************************************************!*\
  !*** ./src/environments/environment.development.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
var environment = {
  production: false,
  client_id: 107205845,
  client_secret: "f4372a907a7ec1776b215bbce87e965c6ced5d9257c7f12b1864193c648abba0",
  redirect_uri: "https://play.ludigames.com/huawei/sbt/trunk/dist",
  // need to sycn with HuaweiID
  scope: "openid+profile+email"
};

/***/ }),

/***/ 9654:
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ 6992);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ 1539);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ 8674);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ 8783);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ 3948);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! whatwg-fetch */ 7147);
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./globals.js */ 3542);
/* harmony import */ var _comp_js_user_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comp/js/user/index.js */ 9081);






// polyfill
(__webpack_require__(/*! es6-promise */ 2702).polyfill)(); // in header.js


 // head
// require("./comp/ui/common/gpt/index.js");

__webpack_require__(/*! ./comp/js/webp/index.js */ 6281);

__webpack_require__(/*! ./comp/ui/common/header/index.js */ 5272); // body





__webpack_require__(/*! ./comp/ui/game/game/index.js */ 2696);

__webpack_require__(/*! ./comp/ui/common/pop-up-header/index.js */ 6922); // footer


__webpack_require__(/*! ./comp/ui/common/footer/index.js */ 5986);

__webpack_require__(/*! ./comp/ui/common/back-to-top/index.js */ 5242);

var name = "game";

if (_globals_js__WEBPACK_IMPORTED_MODULE_6__.device.isMobile) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
      Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./comp/ui/common/back-to-top/index */ 5242)).then(function (_ref) {
        var btt = _ref.default;
      }).catch(function (error) {
        return "An error occurred while loading the component";
      });
    }
  });
}

(0,_globals_js__WEBPACK_IMPORTED_MODULE_6__.myConsoleLog)(name, "originPath", (0,_globals_js__WEBPACK_IMPORTED_MODULE_6__.originPath)());
(0,_globals_js__WEBPACK_IMPORTED_MODULE_6__.myConsoleLog)(name, "loaded");

/***/ }),

/***/ 3542:
/*!************************!*\
  !*** ./src/globals.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AR_RESPONSE_CODE": function() { return /* binding */ AR_RESPONSE_CODE; },
/* harmony export */   "__T": function() { return /* reexport safe */ _comp_js_i18n_index__WEBPACK_IMPORTED_MODULE_26__.__T; },
/* harmony export */   "checkObjectEmpty": function() { return /* binding */ checkObjectEmpty; },
/* harmony export */   "device": function() { return /* reexport safe */ _comp_js_device_index__WEBPACK_IMPORTED_MODULE_22__.device; },
/* harmony export */   "elHide": function() { return /* binding */ elHide; },
/* harmony export */   "elHideChildren": function() { return /* binding */ elHideChildren; },
/* harmony export */   "elShow": function() { return /* binding */ elShow; },
/* harmony export */   "elShowing": function() { return /* binding */ elShowing; },
/* harmony export */   "fetchAwait": function() { return /* binding */ fetchAwait; },
/* harmony export */   "fetchEventsLeaderboard": function() { return /* reexport safe */ _comp_js_products__WEBPACK_IMPORTED_MODULE_25__.fetchEventsLeaderboard; },
/* harmony export */   "fetchProducts": function() { return /* reexport safe */ _comp_js_products__WEBPACK_IMPORTED_MODULE_25__.fetchProducts; },
/* harmony export */   "fetchRankLeaderBoard": function() { return /* reexport safe */ _comp_js_products__WEBPACK_IMPORTED_MODULE_25__.fetchRankLeaderBoard; },
/* harmony export */   "getAndroidVersion": function() { return /* binding */ getAndroidVersion; },
/* harmony export */   "getChromeVersion": function() { return /* binding */ getChromeVersion; },
/* harmony export */   "getCookie": function() { return /* binding */ getCookie; },
/* harmony export */   "getGameNameFromPId": function() { return /* reexport safe */ _comp_js_products__WEBPACK_IMPORTED_MODULE_25__.getGameNameFromPId; },
/* harmony export */   "getGameUrlFromPId": function() { return /* reexport safe */ _comp_js_products__WEBPACK_IMPORTED_MODULE_25__.getGameUrlFromPId; },
/* harmony export */   "getSamsungBrowserVersion": function() { return /* binding */ getSamsungBrowserVersion; },
/* harmony export */   "handleFetchError": function() { return /* binding */ handleFetchError; },
/* harmony export */   "isAndroid": function() { return /* binding */ isAndroid; },
/* harmony export */   "isAndroidWebview": function() { return /* binding */ isAndroidWebview; },
/* harmony export */   "loadLS": function() { return /* binding */ loadLS; },
/* harmony export */   "loadOrderScript": function() { return /* binding */ loadOrderScript; },
/* harmony export */   "localhost": function() { return /* reexport safe */ _comp_js_localhost_index__WEBPACK_IMPORTED_MODULE_21__.localhost; },
/* harmony export */   "myAlert": function() { return /* binding */ myAlert; },
/* harmony export */   "myAlertAsync": function() { return /* binding */ myAlertAsync; },
/* harmony export */   "myConsoleLog": function() { return /* binding */ myConsoleLog; },
/* harmony export */   "originPath": function() { return /* binding */ originPath; },
/* harmony export */   "redirect_to": function() { return /* binding */ redirect_to; },
/* harmony export */   "remToPx": function() { return /* binding */ remToPx; },
/* harmony export */   "saveLS": function() { return /* binding */ saveLS; },
/* harmony export */   "stopPropagation": function() { return /* binding */ stopPropagation; },
/* harmony export */   "store_ACTION_TYPE": function() { return /* reexport safe */ _comp_js_store_index__WEBPACK_IMPORTED_MODULE_23__.store_ACTION_TYPE; },
/* harmony export */   "store_dispatch": function() { return /* reexport safe */ _comp_js_store_index__WEBPACK_IMPORTED_MODULE_23__.store_dispatch; },
/* harmony export */   "store_subcribe": function() { return /* reexport safe */ _comp_js_store_index__WEBPACK_IMPORTED_MODULE_23__.store_subcribe; },
/* harmony export */   "urlParams": function() { return /* reexport safe */ _comp_js_url_params_index__WEBPACK_IMPORTED_MODULE_24__.urlParams; },
/* harmony export */   "urlQueryString": function() { return /* reexport safe */ _comp_js_url_params_index__WEBPACK_IMPORTED_MODULE_24__.urlQueryString; },
/* harmony export */   "varToString": function() { return /* binding */ varToString; },
/* harmony export */   "webpReloadImage": function() { return /* binding */ webpReloadImage; }
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ 5666);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ 9601);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ 9600);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ 1539);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise.js */ 8674);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ 4916);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ 5306);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ 4723);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ 4603);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ 9714);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ 6699);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ 2023);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ 7941);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ 3371);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ 8309);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ 489);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ 2526);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ 7327);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ 5003);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ 4747);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ 9337);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _comp_js_localhost_index__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./comp/js/localhost/index */ 2974);
/* harmony import */ var _comp_js_device_index__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./comp/js/device/index */ 3749);
/* harmony import */ var _comp_js_store_index__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./comp/js/store/index */ 6355);
/* harmony import */ var _comp_js_url_params_index__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./comp/js/url-params/index */ 5225);
/* harmony import */ var _comp_js_products__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./comp/js/products */ 9357);
/* harmony import */ var _comp_js_i18n_index__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./comp/js/i18n/index */ 7806);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var name = "globals";
window.enableADS = false; // not use ima3 ads

var _window = window,
    localStorage = _window.localStorage;
/* functions */

var loadLS = function loadLS(from, to) {
  // save to a variable
  var loadedObj = JSON.parse(localStorage.getItem(from) || JSON.stringify(""));

  var tempObj = _objectSpread(_objectSpread({}, to), loadedObj);

  Object.assign(to, tempObj);
};
var saveLS = function saveLS(overrideObj, from, to) {
  // save to a variable, then save to LocalStorage
  var tempObj = _objectSpread(_objectSpread({}, from), overrideObj);

  Object.assign(from, tempObj);
  localStorage.setItem(to, JSON.stringify(from));
};
var myConsoleLog = function myConsoleLog() {
  var isDebug = _comp_js_url_params_index__WEBPACK_IMPORTED_MODULE_24__.urlParams.get("debug") === 'true';

  if (isDebug) {
    var _console;

    (_console = console).log.apply(_console, arguments);
  }
};
var myAlert = function myAlert() {
  var isAlert = _comp_js_url_params_index__WEBPACK_IMPORTED_MODULE_24__.urlParams.get("alert") === 'true';

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (isAlert) {
    alert(args.join(" "));
  }

  myConsoleLog.apply(void 0, args);
};
var myAlertAsync = function myAlertAsync() {
  var isDebug = _comp_js_url_params_index__WEBPACK_IMPORTED_MODULE_24__.urlParams.get("debug") === 'true';

  if (isDebug) {
    myAlert.apply(void 0, arguments);
    return new Promise(function (resolve) {
      return setTimeout(resolve, 500);
    });
  }
};
var loadOrderScript = function loadOrderScript(url1, url2, url3) {
  var script1 = document.createElement("script");
  script1.setAttribute("src", url1);

  script1.onload = function () {
    if (typeof url2 != "undefined") {
      var script2 = document.createElement("script");
      script2.setAttribute("src", url2);

      script2.onload = function () {
        if (typeof url3 != "undefined") {
          var script3 = document.createElement("script");
          script3.setAttribute("src", url3);
          document.body.appendChild(script3);
        }
      };

      document.body.appendChild(script2);
    }
  };

  document.body.appendChild(script1);
};
var webpReloadImage = function webpReloadImage(_this) {
  _this.src = _this.dataset.src.replace(/.jppg/gi, ".jpg").replace(/.pnng/gi, ".png");

  _this.removeEventListener("error", function () {});
};
var getCookie = function getCookie(name) {
  var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};
var elShow = function elShow(element) {
  var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "block";
  element.style.display = display;
};
var elHide = function elHide(element) {
  element.style.display = "none";
};
var elHideChildren = function elHideChildren(parent) {
  for (var i = 0; i < parent.children.length; i++) {
    var element = parent.children.item(i);
    element.style.display = "none";
  }
};
var elShowing = function elShowing(element) {
  return element.style.display !== "none";
};
var isAndroid = function isAndroid() {
  return navigator.userAgent.toLowerCase().includes("android");
};
var isAndroidWebview = function isAndroidWebview() {
  var result = false;
  var user_agent = navigator.userAgent.toLowerCase();

  if (isAndroid()) {
    result = user_agent.includes("version/4.0") || user_agent.includes("wv)");
  }

  myConsoleLog("isAndroidWebview: " + result);
  return result;
};
var getChromeVersion = function getChromeVersion() {
  var result = -1;
  var user_agent = navigator.userAgent;
  var re = /Chrome\/(..)/i;
  var found = user_agent.match(re);
  if (found && found.length > 1) result = parseInt(found[1]); // get from url

  if (_comp_js_url_params_index__WEBPACK_IMPORTED_MODULE_24__.urlParams.has("cv")) {
    result = _comp_js_url_params_index__WEBPACK_IMPORTED_MODULE_24__.urlParams.get("cv");
  }

  myConsoleLog("getChromeVersion: " + result);
  return result;
};
var getAndroidVersion = function getAndroidVersion() {
  var result = -1;
  var user_agent = navigator.userAgent;
  var re = /Android (.*);/i;
  var found = user_agent.match(re);
  if (found && found.length > 1) result = parseFloat(found[1]); // get from url

  if (_comp_js_url_params_index__WEBPACK_IMPORTED_MODULE_24__.urlParams.has("av")) {
    result = _comp_js_url_params_index__WEBPACK_IMPORTED_MODULE_24__.urlParams.get("av");
  }

  myConsoleLog("getAndroidVersion: " + result);
  return result;
};
var getSamsungBrowserVersion = function getSamsungBrowserVersion() {
  myConsoleLog("getSamsungBrowserVersion: " + navigator.userAgent);
  var result = -1;
  var user_agent = navigator.userAgent;
  var re = /SamsungBrowser\/(...)/i;
  var found = user_agent.match(re);
  if (found && found.length > 1) result = parseInt(found[1]); // get from url

  if (_comp_js_url_params_index__WEBPACK_IMPORTED_MODULE_24__.urlParams.has("sbv")) {
    result = _comp_js_url_params_index__WEBPACK_IMPORTED_MODULE_24__.urlParams.get("sbv");
  }

  myConsoleLog("getSamsungBrowserVersion: " + result);
  return result;
};
var redirect_to = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    var params,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {
              target: ""
            };
            _context.next = 3;
            return myAlertAsync("redirect_to ", url);

          case 3:
            if (params.target.toLowerCase() === "_blank") {
              window.open(url, params.target);
            } else {
              window.location.href = url;
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function redirect_to(_x) {
    return _ref.apply(this, arguments);
  };
}();
var varToString = function varToString(varObj) {
  return Object.keys(varObj)[0];
};
var ar_response_code_def = 1;
var response_code_def_lb = 1001;
var AR_RESPONSE_CODE = Object.freeze({
  SUCCESSFUL: ar_response_code_def++,
  EMAIL_REQUIRED: ar_response_code_def++,
  EMAIL_INVALID_FORMAT: ar_response_code_def++,
  DATA_BASE_ERROR: ar_response_code_def++,
  USER_EXITS: ar_response_code_def++,
  //5
  USER_NOT_FOUND: ar_response_code_def++,
  PASS_INCORRECT: ar_response_code_def++,
  TOKEN_REQUIRED: ar_response_code_def++,
  TOKEN_INVALID: ar_response_code_def++,
  TOKEN_FAKE: ar_response_code_def++,
  //10
  USER_ID_REQUIRED: ar_response_code_def++,
  THIRD_PARTY_REGISTRATION: ar_response_code_def++,
  LOGIN_REQUIRED: ar_response_code_def++,
  GAME_ID_REQUIRED: ar_response_code_def++,
  PARAM_TYPE_INCORRECT: ar_response_code_def++,
  //15
  USER_NOT_RECOGNIZED: ar_response_code_def++,
  MISSING_PARAM: ar_response_code_def++,
  ITEM_NOT_AVAILABLE: ar_response_code_def++,
  ITEM_ALREADY_PURCHASED: ar_response_code_def++,
  NOT_ENOUGH_COIN: ar_response_code_def++,
  //20
  PASS_REQUIRED: ar_response_code_def++,
  PASS_INVALID_FORMAT: ar_response_code_def++,
  YEAR_OF_BIRTH_REQUIRED: ar_response_code_def++,
  AGE_RESTRICTION: ar_response_code_def++,
  BAD_WORD: ar_response_code_def++,
  //25
  ITEM_ALREADY_CLAIMED: ar_response_code_def++,
  ITEM_INPROGRESS: ar_response_code_def++,
  // LB_RESPONSE_CODE
  TOUR_NOT_EXITS: response_code_def_lb++,
  // ...1
  TOUR_NOT_ACTIVE: response_code_def_lb++,
  TOUR_ENDED: response_code_def_lb++,
  KEY_NOT_MATCH: response_code_def_lb++,
  EVENT_NOT_START: response_code_def_lb++,
  // ...5
  EVENT_ENDED_NO_NEW_EVENT: response_code_def_lb++,
  EVENT_ENDED_HAVE_NEW_EVENT: response_code_def_lb++,
  NOT_HIGH_SCORE: response_code_def_lb++,
  IMAGE_SIZE_OVER_LIMIT: response_code_def_lb++,
  // ...10
  SCORE_NOT_VALID: response_code_def_lb++
});
var originPath = function originPath() {
  var result = "";

  if (!window.cdn_path) {
    result = window.location.origin + window.location.pathname.replace(/\/[\w\-]*\.\w*/gi, "\/"); // remove xxx.html
  } else {
    result = window.cdn_path;
  }

  return result;
};
var stopPropagation = function stopPropagation(event) {
  myConsoleLog(name, stopPropagation.name); // event.preventDefault(); // prevent a href.

  event.stopPropagation();
};
var remToPx = function remToPx(value) {
  var result = 0;
  var vw = window.innerWidth / 100;
  var live_rem = 26.6667 * vw; // get from header css

  result = parseFloat(value) * live_rem;
  return result;
};
var checkObjectEmpty = function checkObjectEmpty(obj) {
  return obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype;
};
var handleFetchError = function handleFetchError(err) {
  console.warn(err);
  return new Response(JSON.stringify({
    code: 400,
    message: err.message,
    error: 400
  }));
};
var fetchAwait = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var url,
        onsuccess,
        options,
        res,
        resJ,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : "abc.com/api.php?debug=true";
            onsuccess = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : null;
            options = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {
              method: "POST",
              headers: {},
              body: ""
            };
            _context2.next = 5;
            return fetch(url, options).catch(handleFetchError);

          case 5:
            res = _context2.sent;

            if (!res.ok) {
              _context2.next = 14;
              break;
            }

            _context2.next = 9;
            return res.json();

          case 9:
            resJ = _context2.sent;

            if (onsuccess != null) {
              onsuccess(resJ);
            }

            return _context2.abrupt("return", resJ);

          case 14:
            handleFetchError("!res.ok");

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function fetchAwait() {
    return _ref2.apply(this, arguments);
  };
}();

var messageHandler = function messageHandler(event) {
  var action = event.data.action;

  if (action == 'ga-action-Start') {
    myConsoleLog(name, messageHandler.name, event);
    (0,_comp_js_store_index__WEBPACK_IMPORTED_MODULE_23__.store_dispatch)(_comp_js_store_index__WEBPACK_IMPORTED_MODULE_23__.store_ACTION_TYPE.USER_playGame_saveDatabase);
  }

  if (action == 'action-GameScore') {
    var _event$data = event.data,
        base64image = _event$data.base64image,
        score = _event$data.score,
        time = _event$data.time;
    myConsoleLog(name, messageHandler.name, event);
    (0,_comp_js_store_index__WEBPACK_IMPORTED_MODULE_23__.store_dispatch)(_comp_js_store_index__WEBPACK_IMPORTED_MODULE_23__.store_ACTION_TYPE.USER_playGame_gameScore, {
      action: action,
      base64image: base64image,
      score: score,
      time: time
    });
  }
};
/* functions end */


window.addEventListener("message", messageHandler, false); // debug

if (_comp_js_url_params_index__WEBPACK_IMPORTED_MODULE_24__.urlParams.has("iw")) myAlert("innerWidth: " + window.innerWidth);
if (_comp_js_url_params_index__WEBPACK_IMPORTED_MODULE_24__.urlParams.has("ih")) myAlert("innerHeight: " + window.innerHeight);
myConsoleLog(name, "loaded");

/***/ }),

/***/ 3362:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/comp/ui/common/back-to-top/style.scss ***!
  \********************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ccbt {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 0;\n  border-top: 1px solid #223d5a;\n}\n.ccbt .back-to-top {\n  display: flex;\n  cursor: pointer;\n}\n.ccbt .back-to-top .content {\n  margin-left: 10px;\n  font-weight: bold;\n  font-size: 16px;\n  font-family: \"Roboto\";\n  color: white;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}", "",{"version":3,"sources":["webpack://./src/comp/ui/common/back-to-top/style.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EAEA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,6BAAA;AAAF;AACE;EACE,aAAA;EACA,eAAA;AACJ;AAAI;EACE,iBAAA;EACA,iBAAA;EACA,eAAA;EACA,qBAAA;EACA,YAAA;AAEN;;AAGA;EACE,uBAAA;AAAF","sourcesContent":[".ccbt {\r\n  display: none;\r\n  // display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 32px 0;\r\n  border-top: 1px solid #223d5a;\r\n  .back-to-top {\r\n    display: flex;\r\n    cursor: pointer;\r\n    .content {\r\n      margin-left: 10px;\r\n      font-weight: bold;\r\n      font-size: 16px;\r\n      font-family: \"Roboto\";\r\n      color: white;\r\n    }\r\n  }\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5521:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/comp/ui/common/footer/style.scss ***!
  \***************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cf.footer {\n  padding: 32px 0;\n  font-size: 12px;\n  line-height: 16px;\n  color: #FFFFFF;\n  background: #191919;\n}\n.cf .footer-lines {\n  width: 100%;\n  text-align: center;\n}\n.cf .fl-title {\n  margin-bottom: 16px;\n}\n.cf .fl-copy-right {\n  margin-bottom: 16px;\n  color: #DFDFDF;\n  opacity: 0.5;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 20px;\n}\n.cf .fl-policy {\n  margin-bottom: 16px;\n  font-size: 16px;\n}\n.cf .fl-policy span {\n  margin: 0 2px;\n}\n.cf .fl-policy a {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  color: #FFFFFF;\n  text-decoration: none;\n  cursor: pointer;\n}\n.cf .fl-warning {\n  color: #DFDFDF;\n  opacity: 0.5;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 20px;\n}", "",{"version":3,"sources":["webpack://./src/comp/ui/common/footer/style.scss"],"names":[],"mappings":"AACE;EACE,eAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;EACA,mBAAA;AAAJ;AAGE;EACE,WAAA;EACA,kBAAA;AADJ;AAIE;EACE,mBAAA;AAFJ;AAKE;EACE,mBAAA;EACA,cAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;AAHJ;AAME;EACE,mBAAA;EACA,eAAA;AAJJ;AAMI;EACE,aAAA;AAJN;AAOI;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;EACA,qBAAA;EACA,eAAA;AALN;AASE;EACE,cAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;AAPJ","sourcesContent":[".cf {\r\n  &.footer {\r\n    padding: 32px 0;\r\n    font-size: 12px;\r\n    line-height: 16px;\r\n    color: #FFFFFF;\r\n    background: #191919;\r\n  }\r\n\r\n  .footer-lines {\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n\r\n  .fl-title {\r\n    margin-bottom: 16px;\r\n  }\r\n\r\n  .fl-copy-right {\r\n    margin-bottom: 16px;\r\n    color: #DFDFDF;\r\n    opacity: 0.5;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    line-height: 20px;\r\n  }\r\n\r\n  .fl-policy {\r\n    margin-bottom: 16px;\r\n    font-size: 16px;\r\n\r\n    span {\r\n      margin: 0 2px;\r\n    }\r\n\r\n    a {\r\n      font-weight: 600;\r\n      font-size: 16px;\r\n      line-height: 24px;\r\n      color: #FFFFFF;\r\n      text-decoration: none;\r\n      cursor: pointer;\r\n    }\r\n  }\r\n\r\n  .fl-warning {\r\n    color: #DFDFDF;\r\n    opacity: 0.5;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n    line-height: 20px;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8146:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/comp/ui/common/header/common.scss ***!
  \****************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes intro-y {\n  0% {\n    opacity: 0.2;\n    transform: translateY(-200px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes intro-y-bot {\n  0% {\n    opacity: 0.2;\n    transform: translateY(calc(100vh + 200px)) scale(0.6);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes zoomIn {\n  0% {\n    opacity: 0.2;\n    transform: translate(-50%, -50%) scale(0.5);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n@keyframes headerFixedIndex {\n  0% {\n    top: 74px;\n  }\n  100% {\n    top: 37px;\n  }\n}\n/* Load font */\nhtml {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  position: relative;\n  margin: 0;\n  background-color: #F8F8F8;\n  color: #666666;\n  margin-left: auto;\n  margin-right: auto;\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n\na {\n  text-decoration: none;\n}\n\nimg {\n  width: 100%;\n  height: auto;\n}\n\n.ellipsis-nh {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.ellipsis-nh::after {\n  content: \"\";\n  padding: 0.01rem;\n}\n\n.ellipsis-h2 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.ellipsis-h2::after {\n  content: \"\";\n  padding: 0.01rem;\n}\n\n.ellipsis-h3 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\n.ellipsis-h3::after {\n  content: \"\";\n  padding: 0.01rem;\n}\n\n.df-jcc-aic {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.hidden {\n  display: none;\n}\n\n.hc-tdn:hover {\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.wsd::-webkit-scrollbar {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/comp/ui/common/header/common-var.scss","webpack://./src/comp/ui/common/header/common.scss"],"names":[],"mappings":"AA4HA;EACE;IACE,YAAA;IACA,6BAAA;EC1HF;ED6HA;IACE,UAAA;IACA,wBAAA;EC3HF;AACF;AD8HA;EACE;IACE,YAAA;IACA,qDAAA;EC5HF;ED+HA;IACE,UAAA;IACA,iCAAA;EC7HF;AACF;AD+HA;EACE;IACE,YAAA;IACA,2CAAA;EC7HF;ED+HA;IACE,UAAA;IACA,yCAAA;EC7HF;AACF;ADgIA;EACE;IACE,SAAA;EC9HF;EDgIA;IACE,SAAA;EC9HF;AACF;AArCA,cAAA;AAGA;EACE,iCAAA;EAEA,kBAAA;EACA,mBAAA;EACA,SAAA;EACA,UAAA;AAoCF;;AAjCA;EACE,kBAAA;EACA,SAAA;EACA,yBDRuB;ECSvB,cAAA;EACA,iBAAA;EACA,kBAAA;EACA,wBAAA,EAAA,gBAAA;EACA,qBAAA,EAAA,YAAA;AAoCF;;AAlCA;EACE,qBAAA;AAqCF;;AAnCA;EACE,WAAA;EACA,YAAA;AAsCF;;AApCA;EACE,mBAAA;EACA,gBAAA;EACA,uBAAA;AAuCF;;AArCA;EACE,WAAA;EACA,gBAAA;AAwCF;;AAtCA;EACE,gBAAA;EACA,uBAAA;EAEA,oBAAA;EACA,qBAAA;EACA,4BAAA;AAwCF;;AAtCA;EACE,WAAA;EACA,gBAAA;AAyCF;;AAvCA;EACE,gBAAA;EACA,uBAAA;EAEA,oBAAA;EACA,qBAAA;EACA,4BAAA;AAyCF;;AAvCA;EACE,WAAA;EACA,gBAAA;AA0CF;;AAxCA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;AA2CF;;AAzCA;EACE,aAAA;AA4CF;;AA1CA;EACE,eAAA;EACA,qBAAA;AA6CF;;AA3CA;EACE,aAAA;AA8CF","sourcesContent":["$test-color: red;\r\n\r\n// responsive\r\n$mobile-w: 360;\r\n$tablet-w: 834;\r\n$desktop-w: 1500;\r\n\r\n// color\r\n$background-color-white: #F8F8F8;\r\n// components\r\n@mixin title-big {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 32px;\r\n  line-height: 40px;\r\n}\r\n@mixin sora-800-xl {\r\n  font-family: 'Lexend';\r\n  font-style: normal;\r\n  font-weight: 800;\r\n  font-size: 32px;\r\n  line-height: 40px;\r\n}\r\n@mixin sora-800-lg {\r\n  font-family: 'Lexend';\r\n  font-style: normal;\r\n  font-weight: 800;\r\n  font-size: 20px;\r\n  line-height: 28px;\r\n}\r\n@mixin sora-800-md {\r\n  font-family: 'Lexend';\r\n  font-style: normal;\r\n  font-weight: 800;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n}\r\n@mixin sora-800-sm {\r\n  font-family: 'Lexend';\r\n  font-style: normal;\r\n  font-weight: 800;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n}\r\n@mixin sora-700-md {\r\n  font-family: 'Lexend';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 24px;\r\n  line-height: 32px;\r\n}\r\n@mixin sora-700-sm {\r\n  font-family: 'Lexend';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n}\r\n@mixin sora-600-sm {\r\n  font-family: 'Lexend';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n}\r\n@mixin sora-400-lg {\r\n  font-family: 'Lexend';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 20px;\r\n  line-height: 24px;\r\n}\r\n@mixin roboto-600-lg {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n}\r\n@mixin roboto-600-md {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n}\r\n@mixin roboto-600-sm {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n}\r\n@mixin roboto-500-xs {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 12px;\r\n  line-height: 16px;\r\n}\r\n@mixin roboto-400-md {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n}\r\n@mixin roboto-400-sm {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n}\r\n@mixin roboto-400-sm-i {\r\n  font-family: 'Roboto';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n}\r\n\r\n// keyframes\r\n@keyframes intro-y {\r\n  0% {\r\n    opacity: 0.2;\r\n    transform: translateY(-200px);\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes intro-y-bot {\r\n  0% {\r\n    opacity: 0.2;\r\n    transform: translateY(calc(100vh + 200px)) scale(0.6);\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateY(0) scale(1);\r\n  }\r\n}\r\n@keyframes zoomIn {\r\n  0% {\r\n    opacity: 0.2;\r\n    transform: translate(-50%, -50%) scale(.5);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translate(-50%, -50%) scale(1);\r\n\r\n  }\r\n}\r\n@keyframes headerFixedIndex {\r\n  0% {\r\n    top: 74px;\r\n  }\r\n  100% {\r\n    top: 37px ;\r\n  }\r\n}\r\n\r\n\r\n// z-index\r\n$zi-infor-button: 500;\r\n$zi-pop-up-header: 1000;\r\n$zi-pop-up-my-score: 2500;\r\n$zi-header: 2000;\r\n$zi-log-in: 3000;","@import \"./common-var.scss\";\r\n/* Load font */\r\n@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap');\r\n$body-color: red;\r\nhtml {\r\n  font-family: 'Roboto', sans-serif;\r\n  // font-size: 27.7778vw; /* = 100*100/360 */\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  position: relative;\r\n  margin: 0;\r\n  background-color: $background-color-white;\r\n  color: #666666;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  -ms-overflow-style: none; /* IE and Edge */\r\n  scrollbar-width: none; /* Firefox */  \r\n}\r\na {\r\n  text-decoration: none;\r\n}\r\nimg {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n.ellipsis-nh {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n.ellipsis-nh::after {\r\n  content: \"\";\r\n  padding: 0.01rem;\r\n}\r\n.ellipsis-h2 {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 2;\r\n  -webkit-box-orient: vertical;\r\n}\r\n.ellipsis-h2::after {\r\n  content: '';\r\n  padding: .01rem;\r\n}\r\n.ellipsis-h3 {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 3;\r\n  -webkit-box-orient: vertical;\r\n}\r\n.ellipsis-h3::after {\r\n  content: '';\r\n  padding: .01rem;\r\n}\r\n.df-jcc-aic {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.hidden {\r\n  display: none;\r\n}\r\n.hc-tdn:hover {\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n}\r\n.wsd::-webkit-scrollbar{\r\n  display:none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7892:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/comp/ui/common/header/style.scss ***!
  \***************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ 1667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo.png */ 8486), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes intro-y {\n  0% {\n    opacity: 0.2;\n    transform: translateY(-200px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes intro-y-bot {\n  0% {\n    opacity: 0.2;\n    transform: translateY(calc(100vh + 200px)) scale(0.6);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes zoomIn {\n  0% {\n    opacity: 0.2;\n    transform: translate(-50%, -50%) scale(0.5);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n@keyframes headerFixedIndex {\n  0% {\n    top: 74px;\n  }\n  100% {\n    top: 37px;\n  }\n}\n.ch.header {\n  position: sticky;\n  z-index: 2000;\n  top: 0px;\n  width: var(mobile-w);\n  height: 40px;\n  padding: 8px 16px;\n  justify-content: space-between;\n  color: red;\n  background: linear-gradient(153.43deg, #1890FF 16.67%, #0061BA 100%);\n}\n.ch.header .icon {\n  width: 118px;\n  height: 40px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: relative;\n}\n.ch.header .buttons div {\n  width: 39px;\n  height: 38px;\n  position: relative;\n  background: #FFFFFF;\n  border: 1.5px solid #004586;\n  box-shadow: 0px 2px 0px #004586;\n  border-radius: 100px;\n}\n.ch.header .buttons div i {\n  color: #004483;\n}\n.ch.header .buttons div.active {\n  background: #EE2E8E;\n  border-color: #FFFFFF;\n}\n.ch.header .buttons div.active i {\n  color: #FFFFFF;\n}\n.ch.header .buttons div:nth-child(1n+2) {\n  margin-left: 12px;\n}\n\n.ch.header-adapter {\n  margin-bottom: 36px;\n}", "",{"version":3,"sources":["webpack://./src/comp/ui/common/header/common-var.scss","webpack://./src/comp/ui/common/header/style.scss"],"names":[],"mappings":"AA4HA;EACE;IACE,YAAA;IACA,6BAAA;EC3HF;ED8HA;IACE,UAAA;IACA,wBAAA;EC5HF;AACF;AD+HA;EACE;IACE,YAAA;IACA,qDAAA;EC7HF;EDgIA;IACE,UAAA;IACA,iCAAA;EC9HF;AACF;ADgIA;EACE;IACE,YAAA;IACA,2CAAA;EC9HF;EDgIA;IACE,UAAA;IACA,yCAAA;EC9HF;AACF;ADiIA;EACE;IACE,SAAA;EC/HF;EDiIA;IACE,SAAA;EC/HF;AACF;AA5BA;EAEE,gBAAA;EACA,aDgKU;EC/JV,QAAA;EACA,oBAAA;EACA,YAAA;EACA,iBAAA;EACA,8BAAA;EACA,UDlBW;ECmBX,oEAAA;AA6BF;AA5BE;EACE,YAAA;EACA,YAAA;EACA,yDAAA;EACA,4BAAA;EACA,wBAAA;EACA,kBAAA;AA8BJ;AA3BI;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBA7BqB;EA8BrB,2BAAA;EACA,+BAAA;EACA,oBAAA;AA6BN;AA5BM;EACE,cAnCa;AAiErB;AA5BM;EACE,mBAlC0B;EAmC1B,qBArCsB;AAmE9B;AA7BQ;EACE,cAtCkB;AAqE5B;AA5BM;EACE,iBAAA;AA8BR;;AAzBA;EACE,mBAAA;AA4BF","sourcesContent":["$test-color: red;\r\n\r\n// responsive\r\n$mobile-w: 360;\r\n$tablet-w: 834;\r\n$desktop-w: 1500;\r\n\r\n// color\r\n$background-color-white: #F8F8F8;\r\n// components\r\n@mixin title-big {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 32px;\r\n  line-height: 40px;\r\n}\r\n@mixin sora-800-xl {\r\n  font-family: 'Lexend';\r\n  font-style: normal;\r\n  font-weight: 800;\r\n  font-size: 32px;\r\n  line-height: 40px;\r\n}\r\n@mixin sora-800-lg {\r\n  font-family: 'Lexend';\r\n  font-style: normal;\r\n  font-weight: 800;\r\n  font-size: 20px;\r\n  line-height: 28px;\r\n}\r\n@mixin sora-800-md {\r\n  font-family: 'Lexend';\r\n  font-style: normal;\r\n  font-weight: 800;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n}\r\n@mixin sora-800-sm {\r\n  font-family: 'Lexend';\r\n  font-style: normal;\r\n  font-weight: 800;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n}\r\n@mixin sora-700-md {\r\n  font-family: 'Lexend';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 24px;\r\n  line-height: 32px;\r\n}\r\n@mixin sora-700-sm {\r\n  font-family: 'Lexend';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n}\r\n@mixin sora-600-sm {\r\n  font-family: 'Lexend';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n}\r\n@mixin sora-400-lg {\r\n  font-family: 'Lexend';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 20px;\r\n  line-height: 24px;\r\n}\r\n@mixin roboto-600-lg {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n}\r\n@mixin roboto-600-md {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n}\r\n@mixin roboto-600-sm {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n}\r\n@mixin roboto-500-xs {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 12px;\r\n  line-height: 16px;\r\n}\r\n@mixin roboto-400-md {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n}\r\n@mixin roboto-400-sm {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n}\r\n@mixin roboto-400-sm-i {\r\n  font-family: 'Roboto';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n}\r\n\r\n// keyframes\r\n@keyframes intro-y {\r\n  0% {\r\n    opacity: 0.2;\r\n    transform: translateY(-200px);\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes intro-y-bot {\r\n  0% {\r\n    opacity: 0.2;\r\n    transform: translateY(calc(100vh + 200px)) scale(0.6);\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateY(0) scale(1);\r\n  }\r\n}\r\n@keyframes zoomIn {\r\n  0% {\r\n    opacity: 0.2;\r\n    transform: translate(-50%, -50%) scale(.5);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translate(-50%, -50%) scale(1);\r\n\r\n  }\r\n}\r\n@keyframes headerFixedIndex {\r\n  0% {\r\n    top: 74px;\r\n  }\r\n  100% {\r\n    top: 37px ;\r\n  }\r\n}\r\n\r\n\r\n// z-index\r\n$zi-infor-button: 500;\r\n$zi-pop-up-header: 1000;\r\n$zi-pop-up-my-score: 2500;\r\n$zi-header: 2000;\r\n$zi-log-in: 3000;","@import \"./common-var.scss\";\r\n\r\n$button-color--border: #004586;\r\n$button-color--icon: #004483;\r\n$button-color--background: #FFFFFF;\r\n$button-color-active--border: #FFFFFF;\r\n$button-color-active--icon: #FFFFFF;\r\n$button-color-active--background: #EE2E8E;\r\n\r\n.ch.header {\r\n  // display: none;\r\n  position: sticky;\r\n  z-index: $zi-header;\r\n  top: 0px;\r\n  width: var(mobile-w);\r\n  height: 40px;\r\n  padding: 8px 16px;\r\n  justify-content: space-between;\r\n  color: $test-color;\r\n  background: linear-gradient(153.43deg, #1890FF 16.67%, #0061BA 100%);\r\n  .icon{\r\n    width: 118px;\r\n    height: 40px;\r\n    background-image: url(./img/logo.png);\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    position: relative;\r\n  }\r\n  .buttons {\r\n    div {\r\n      width: 39px;\r\n      height: 38px;\r\n      position: relative;\r\n      background: $button-color--background;\r\n      border: 1.5px solid $button-color--border;\r\n      box-shadow: 0px 2px 0px $button-color--border;\r\n      border-radius: 100px;\r\n      i {\r\n        color: $button-color--icon;\r\n      }\r\n      &.active {\r\n        background: $button-color-active--background;\r\n        border-color: $button-color-active--border;\r\n        i {\r\n          color: $button-color-active--icon;\r\n        }\r\n      }\r\n      &:nth-child(1n + 2) {\r\n        margin-left: 12px;\r\n      }\r\n    }\r\n  }\r\n}\r\n.ch.header-adapter {\r\n  margin-bottom: 36px;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2779:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/comp/ui/common/pop-up-header/style.scss ***!
  \**********************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes intro-y {\n  0% {\n    opacity: 0.2;\n    transform: translateY(-200px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes intro-y-bot {\n  0% {\n    opacity: 0.2;\n    transform: translateY(calc(100vh + 200px)) scale(0.6);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes zoomIn {\n  0% {\n    opacity: 0.2;\n    transform: translate(-50%, -50%) scale(0.5);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n@keyframes headerFixedIndex {\n  0% {\n    top: 74px;\n  }\n  100% {\n    top: 37px;\n  }\n}\n.cph.pop-up-header {\n  position: fixed;\n  width: 100vw;\n  max-height: 100vh;\n  overflow-y: auto;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  padding-top: 80px;\n  padding-bottom: 20px;\n  z-index: 1000;\n  display: none;\n}\n.cph.pop-up-header .menu-popup {\n  display: none;\n  background-color: #F8F8F8;\n  position: fixed;\n  width: 100vw;\n  max-height: 100vh;\n  overflow-y: auto;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  padding-top: 80px;\n  padding-bottom: 20px;\n  animation: intro-y 0.5s;\n}\n.cph.pop-up-header .menu-popup-list {\n  padding: 10px 16px;\n  margin-bottom: 10px;\n  justify-content: center;\n  display: flex;\n  flex-flow: column;\n}\n.cph.pop-up-header .menu-popup-list button {\n  padding: 20px 0;\n  font-family: \"Lexend\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 24px;\n  color: #1a1818;\n  background: transparent;\n  border: 0;\n  text-transform: uppercase;\n}\n.cph.pop-up-header .menu-popup-button {\n  margin-bottom: 45px;\n  display: flex;\n  justify-content: center;\n}\n.cph.pop-up-header .menu-popup-view-more {\n  padding: 10px 20px;\n  background: rgba(255, 255, 255, 0.3);\n  backdrop-filter: blur(10px);\n  border-radius: 16px;\n  justify-content: center;\n  display: flex;\n  flex-flow: column;\n  margin: 0 16px;\n  text-align: center;\n}\n.cph.pop-up-header .menu-popup-view-more .title {\n  font-family: \"Lexend\";\n  font-style: normal;\n  font-weight: 800;\n  font-size: 14px;\n  line-height: 20px;\n  color: #004483;\n  margin-bottom: 8px;\n}\n.cph.pop-up-header .menu-popup-view-more .descrpition {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  color: #000000;\n  margin-bottom: 20px;\n}\n.cph.pop-up-header .menu-popup-view-more .view-more-btn {\n  font-family: \"Lexend\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 20px;\n  padding: 8px 16px;\n  border: 2px solid #04223f;\n  border-radius: 100px;\n  color: #04223f;\n  text-transform: uppercase;\n}\n.cph.pop-up-header .info-popup,\n.cph.pop-up-header .tc-popup,\n.cph.pop-up-header .prizes-popup,\n.cph.pop-up-header .faqs-popup {\n  display: none;\n  background: white;\n  position: fixed;\n  max-height: 70vh;\n  overflow-y: auto;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 16px 16px 0px 0px;\n  padding: 20px;\n  animation: intro-y-bot 0.5s;\n}\n.cph.pop-up-header .info-popup-top,\n.cph.pop-up-header .tc-popup-top,\n.cph.pop-up-header .prizes-popup-top,\n.cph.pop-up-header .faqs-popup-top {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.cph.pop-up-header .info-popup-top .icon,\n.cph.pop-up-header .tc-popup-top .icon,\n.cph.pop-up-header .prizes-popup-top .icon,\n.cph.pop-up-header .faqs-popup-top .icon {\n  width: 20px;\n  height: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1.5px solid #004483;\n  box-shadow: 0px 2px 0px #004586;\n  border-radius: 100px;\n  margin-right: 8px;\n}\n.cph.pop-up-header .info-popup-top .icon i,\n.cph.pop-up-header .tc-popup-top .icon i,\n.cph.pop-up-header .prizes-popup-top .icon i,\n.cph.pop-up-header .faqs-popup-top .icon i {\n  font-size: 14px;\n  color: #004483;\n}\n.cph.pop-up-header .info-popup-top .title,\n.cph.pop-up-header .tc-popup-top .title,\n.cph.pop-up-header .prizes-popup-top .title,\n.cph.pop-up-header .faqs-popup-top .title {\n  font-family: \"Lexend\";\n  font-style: normal;\n  font-weight: 800;\n  font-size: 20px;\n  line-height: 28px;\n  color: #000000;\n}\n.cph.pop-up-header .info-popup-top .close,\n.cph.pop-up-header .tc-popup-top .close,\n.cph.pop-up-header .prizes-popup-top .close,\n.cph.pop-up-header .faqs-popup-top .close {\n  margin-left: auto;\n  z-index: 1000;\n}\n.cph.pop-up-header .info-popup-top .close i,\n.cph.pop-up-header .tc-popup-top .close i,\n.cph.pop-up-header .prizes-popup-top .close i,\n.cph.pop-up-header .faqs-popup-top .close i {\n  color: #000000;\n  font-size: 20px;\n}\n.cph.pop-up-header .info-popup-content,\n.cph.pop-up-header .tc-popup-content,\n.cph.pop-up-header .prizes-popup-content,\n.cph.pop-up-header .faqs-popup-content {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  color: #1a1818;\n  margin-bottom: 20px;\n}\n.cph.pop-up-header .info-popup-button,\n.cph.pop-up-header .tc-popup-button,\n.cph.pop-up-header .prizes-popup-button,\n.cph.pop-up-header .faqs-popup-button {\n  display: flex;\n  justify-content: center;\n}\n.cph.pop-up-header .info-popup-mh,\n.cph.pop-up-header .tc-popup-mh,\n.cph.pop-up-header .prizes-popup-mh,\n.cph.pop-up-header .faqs-popup-mh {\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.cph.pop-up-header .info-popup .tc-popup-content,\n.cph.pop-up-header .tc-popup .tc-popup-content,\n.cph.pop-up-header .prizes-popup .tc-popup-content,\n.cph.pop-up-header .faqs-popup .tc-popup-content {\n  max-height: 50vh;\n  overflow-y: auto;\n  padding-right: 5px;\n}\n.cph.pop-up-header .info-popup .tc-popup-content::-webkit-scrollbar,\n.cph.pop-up-header .tc-popup .tc-popup-content::-webkit-scrollbar,\n.cph.pop-up-header .prizes-popup .tc-popup-content::-webkit-scrollbar,\n.cph.pop-up-header .faqs-popup .tc-popup-content::-webkit-scrollbar {\n  width: 6px;\n}\n.cph.pop-up-header .info-popup .tc-popup-content::-webkit-scrollbar-track,\n.cph.pop-up-header .tc-popup .tc-popup-content::-webkit-scrollbar-track,\n.cph.pop-up-header .prizes-popup .tc-popup-content::-webkit-scrollbar-track,\n.cph.pop-up-header .faqs-popup .tc-popup-content::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 100px;\n}\n.cph.pop-up-header .info-popup .tc-popup-content::-webkit-scrollbar-thumb,\n.cph.pop-up-header .tc-popup .tc-popup-content::-webkit-scrollbar-thumb,\n.cph.pop-up-header .prizes-popup .tc-popup-content::-webkit-scrollbar-thumb,\n.cph.pop-up-header .faqs-popup .tc-popup-content::-webkit-scrollbar-thumb {\n  background: #ff0053;\n  border-radius: 10px;\n}\n.cph.pop-up-header .info-popup .prizes-popup-img,\n.cph.pop-up-header .tc-popup .prizes-popup-img,\n.cph.pop-up-header .prizes-popup .prizes-popup-img,\n.cph.pop-up-header .faqs-popup .prizes-popup-img {\n  margin-bottom: 20px;\n}\n.cph.pop-up-header .info-popup .prizes-popup-img img,\n.cph.pop-up-header .tc-popup .prizes-popup-img img,\n.cph.pop-up-header .prizes-popup .prizes-popup-img img,\n.cph.pop-up-header .faqs-popup .prizes-popup-img img {\n  max-width: 375px;\n}\n.cph.pop-up-header .info-popup .prizes-popup-title,\n.cph.pop-up-header .tc-popup .prizes-popup-title,\n.cph.pop-up-header .prizes-popup .prizes-popup-title,\n.cph.pop-up-header .faqs-popup .prizes-popup-title {\n  font-family: \"Lexend\";\n  font-style: normal;\n  font-weight: 800;\n  font-size: 16px;\n  line-height: 24px;\n  color: #1a1818;\n  margin-bottom: 10px;\n}\n.cph.pop-up-header .info-popup .prizes-popup-mh,\n.cph.pop-up-header .tc-popup .prizes-popup-mh,\n.cph.pop-up-header .prizes-popup .prizes-popup-mh,\n.cph.pop-up-header .faqs-popup .prizes-popup-mh {\n  max-height: 50vh;\n  overflow-y: auto;\n  padding-right: 5px;\n  margin-bottom: 5px;\n}\n.cph.pop-up-header .info-popup .prizes-popup-mh::-webkit-scrollbar,\n.cph.pop-up-header .tc-popup .prizes-popup-mh::-webkit-scrollbar,\n.cph.pop-up-header .prizes-popup .prizes-popup-mh::-webkit-scrollbar,\n.cph.pop-up-header .faqs-popup .prizes-popup-mh::-webkit-scrollbar {\n  width: 6px;\n}\n.cph.pop-up-header .info-popup .prizes-popup-mh::-webkit-scrollbar-track,\n.cph.pop-up-header .tc-popup .prizes-popup-mh::-webkit-scrollbar-track,\n.cph.pop-up-header .prizes-popup .prizes-popup-mh::-webkit-scrollbar-track,\n.cph.pop-up-header .faqs-popup .prizes-popup-mh::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 100px;\n}\n.cph.pop-up-header .info-popup .prizes-popup-mh::-webkit-scrollbar-thumb,\n.cph.pop-up-header .tc-popup .prizes-popup-mh::-webkit-scrollbar-thumb,\n.cph.pop-up-header .prizes-popup .prizes-popup-mh::-webkit-scrollbar-thumb,\n.cph.pop-up-header .faqs-popup .prizes-popup-mh::-webkit-scrollbar-thumb {\n  background: #ff0053;\n  border-radius: 10px;\n}\n.cph.pop-up-header .info-popup .prizes-popup-content .prizes-popup-items,\n.cph.pop-up-header .tc-popup .prizes-popup-content .prizes-popup-items,\n.cph.pop-up-header .prizes-popup .prizes-popup-content .prizes-popup-items,\n.cph.pop-up-header .faqs-popup .prizes-popup-content .prizes-popup-items {\n  margin-bottom: 20px;\n}\n.cph.pop-up-header .info-popup .prizes-popup-content .prizes-popup-items .infor,\n.cph.pop-up-header .tc-popup .prizes-popup-content .prizes-popup-items .infor,\n.cph.pop-up-header .prizes-popup .prizes-popup-content .prizes-popup-items .infor,\n.cph.pop-up-header .faqs-popup .prizes-popup-content .prizes-popup-items .infor {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.cph.pop-up-header .info-popup .prizes-popup-content .prizes-popup-items .infor .img,\n.cph.pop-up-header .tc-popup .prizes-popup-content .prizes-popup-items .infor .img,\n.cph.pop-up-header .prizes-popup .prizes-popup-content .prizes-popup-items .infor .img,\n.cph.pop-up-header .faqs-popup .prizes-popup-content .prizes-popup-items .infor .img {\n  height: 80px;\n  width: auto;\n}\n.cph.pop-up-header .info-popup .prizes-popup-content .prizes-popup-items .infor .title .ordinal,\n.cph.pop-up-header .tc-popup .prizes-popup-content .prizes-popup-items .infor .title .ordinal,\n.cph.pop-up-header .prizes-popup .prizes-popup-content .prizes-popup-items .infor .title .ordinal,\n.cph.pop-up-header .faqs-popup .prizes-popup-content .prizes-popup-items .infor .title .ordinal {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n  color: #04223f;\n  margin-bottom: 2px;\n}\n.cph.pop-up-header .info-popup .prizes-popup-content .prizes-popup-items .infor .title .name,\n.cph.pop-up-header .tc-popup .prizes-popup-content .prizes-popup-items .infor .title .name,\n.cph.pop-up-header .prizes-popup .prizes-popup-content .prizes-popup-items .infor .title .name,\n.cph.pop-up-header .faqs-popup .prizes-popup-content .prizes-popup-items .infor .title .name {\n  font-family: \"Lexend\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 20px;\n  color: #1a1818;\n}\n.cph.pop-up-header .info-popup .prizes-popup-content .prizes-popup-items .content,\n.cph.pop-up-header .tc-popup .prizes-popup-content .prizes-popup-items .content,\n.cph.pop-up-header .prizes-popup .prizes-popup-content .prizes-popup-items .content,\n.cph.pop-up-header .faqs-popup .prizes-popup-content .prizes-popup-items .content {\n  margin-bottom: 10px;\n}\n.cph.pop-up-header .info-popup .prizes-popup-content .prizes-popup-items .abouts-huawei,\n.cph.pop-up-header .tc-popup .prizes-popup-content .prizes-popup-items .abouts-huawei,\n.cph.pop-up-header .prizes-popup .prizes-popup-content .prizes-popup-items .abouts-huawei,\n.cph.pop-up-header .faqs-popup .prizes-popup-content .prizes-popup-items .abouts-huawei {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.cph.pop-up-header .info-popup .prizes-popup-content .prizes-popup-items .abouts-huawei a,\n.cph.pop-up-header .tc-popup .prizes-popup-content .prizes-popup-items .abouts-huawei a,\n.cph.pop-up-header .prizes-popup .prizes-popup-content .prizes-popup-items .abouts-huawei a,\n.cph.pop-up-header .faqs-popup .prizes-popup-content .prizes-popup-items .abouts-huawei a {\n  font-family: Roboto;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n  color: #ff0053;\n  text-decoration: revert;\n}\n.cph.pop-up-header .info-popup .prizes-popup-content .prizes-popup-items .abouts-huawei i,\n.cph.pop-up-header .tc-popup .prizes-popup-content .prizes-popup-items .abouts-huawei i,\n.cph.pop-up-header .prizes-popup .prizes-popup-content .prizes-popup-items .abouts-huawei i,\n.cph.pop-up-header .faqs-popup .prizes-popup-content .prizes-popup-items .abouts-huawei i {\n  font-size: 16px;\n  color: #ff0053;\n}\n.cph.pop-up-header .info-popup .faqs-popup-type,\n.cph.pop-up-header .tc-popup .faqs-popup-type,\n.cph.pop-up-header .prizes-popup .faqs-popup-type,\n.cph.pop-up-header .faqs-popup .faqs-popup-type {\n  font-family: \"Lexend\";\n  font-style: normal;\n  font-weight: 800;\n  font-size: 16px;\n  line-height: 24px;\n  color: #FF0053;\n  text-align: center;\n  padding-top: 16px;\n  padding-bottom: 10px;\n}\n.cph.pop-up-header .info-popup .faqs-popup-mh,\n.cph.pop-up-header .tc-popup .faqs-popup-mh,\n.cph.pop-up-header .prizes-popup .faqs-popup-mh,\n.cph.pop-up-header .faqs-popup .faqs-popup-mh {\n  max-height: 50vh;\n  overflow-y: auto;\n  padding-right: 5px;\n  margin-bottom: 5px;\n}\n.cph.pop-up-header .info-popup .faqs-popup-mh::-webkit-scrollbar,\n.cph.pop-up-header .tc-popup .faqs-popup-mh::-webkit-scrollbar,\n.cph.pop-up-header .prizes-popup .faqs-popup-mh::-webkit-scrollbar,\n.cph.pop-up-header .faqs-popup .faqs-popup-mh::-webkit-scrollbar {\n  width: 6px;\n}\n.cph.pop-up-header .info-popup .faqs-popup-mh::-webkit-scrollbar-track,\n.cph.pop-up-header .tc-popup .faqs-popup-mh::-webkit-scrollbar-track,\n.cph.pop-up-header .prizes-popup .faqs-popup-mh::-webkit-scrollbar-track,\n.cph.pop-up-header .faqs-popup .faqs-popup-mh::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 100px;\n}\n.cph.pop-up-header .info-popup .faqs-popup-mh::-webkit-scrollbar-thumb,\n.cph.pop-up-header .tc-popup .faqs-popup-mh::-webkit-scrollbar-thumb,\n.cph.pop-up-header .prizes-popup .faqs-popup-mh::-webkit-scrollbar-thumb,\n.cph.pop-up-header .faqs-popup .faqs-popup-mh::-webkit-scrollbar-thumb {\n  background: #ff0053;\n  border-radius: 10px;\n}\n.cph.pop-up-header .info-popup .faqs-popup-questions, .cph.pop-up-header .info-popup .faqs-popup-questions-physical,\n.cph.pop-up-header .tc-popup .faqs-popup-questions,\n.cph.pop-up-header .tc-popup .faqs-popup-questions-physical,\n.cph.pop-up-header .prizes-popup .faqs-popup-questions,\n.cph.pop-up-header .prizes-popup .faqs-popup-questions-physical,\n.cph.pop-up-header .faqs-popup .faqs-popup-questions,\n.cph.pop-up-header .faqs-popup .faqs-popup-questions-physical {\n  margin-bottom: 20px;\n}\n.cph.pop-up-header .info-popup .faqs-popup-questions-items .question, .cph.pop-up-header .info-popup .faqs-popup-questions-physical-items .question,\n.cph.pop-up-header .tc-popup .faqs-popup-questions-items .question,\n.cph.pop-up-header .tc-popup .faqs-popup-questions-physical-items .question,\n.cph.pop-up-header .prizes-popup .faqs-popup-questions-items .question,\n.cph.pop-up-header .prizes-popup .faqs-popup-questions-physical-items .question,\n.cph.pop-up-header .faqs-popup .faqs-popup-questions-items .question,\n.cph.pop-up-header .faqs-popup .faqs-popup-questions-physical-items .question {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 18px;\n  background: white;\n  margin-bottom: 10px;\n  box-shadow: 0px 2px 25px rgba(50, 50, 71, 0.1);\n  border-radius: 6px;\n}\n.cph.pop-up-header .info-popup .faqs-popup-questions-items .question.active, .cph.pop-up-header .info-popup .faqs-popup-questions-physical-items .question.active,\n.cph.pop-up-header .tc-popup .faqs-popup-questions-items .question.active,\n.cph.pop-up-header .tc-popup .faqs-popup-questions-physical-items .question.active,\n.cph.pop-up-header .prizes-popup .faqs-popup-questions-items .question.active,\n.cph.pop-up-header .prizes-popup .faqs-popup-questions-physical-items .question.active,\n.cph.pop-up-header .faqs-popup .faqs-popup-questions-items .question.active,\n.cph.pop-up-header .faqs-popup .faqs-popup-questions-physical-items .question.active {\n  box-shadow: 0px 0px 0px 2px rgba(255, 0, 84, 0.2);\n  border: 1px solid #ff0053;\n}\n.cph.pop-up-header .info-popup .faqs-popup-questions-items .question .text, .cph.pop-up-header .info-popup .faqs-popup-questions-physical-items .question .text,\n.cph.pop-up-header .tc-popup .faqs-popup-questions-items .question .text,\n.cph.pop-up-header .tc-popup .faqs-popup-questions-physical-items .question .text,\n.cph.pop-up-header .prizes-popup .faqs-popup-questions-items .question .text,\n.cph.pop-up-header .prizes-popup .faqs-popup-questions-physical-items .question .text,\n.cph.pop-up-header .faqs-popup .faqs-popup-questions-items .question .text,\n.cph.pop-up-header .faqs-popup .faqs-popup-questions-physical-items .question .text {\n  font-family: \"Lexend\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  color: #000000;\n  width: 95%;\n  padding-right: 10px;\n}\n.cph.pop-up-header .info-popup .faqs-popup-questions-items .question .icon, .cph.pop-up-header .info-popup .faqs-popup-questions-physical-items .question .icon,\n.cph.pop-up-header .tc-popup .faqs-popup-questions-items .question .icon,\n.cph.pop-up-header .tc-popup .faqs-popup-questions-physical-items .question .icon,\n.cph.pop-up-header .prizes-popup .faqs-popup-questions-items .question .icon,\n.cph.pop-up-header .prizes-popup .faqs-popup-questions-physical-items .question .icon,\n.cph.pop-up-header .faqs-popup .faqs-popup-questions-items .question .icon,\n.cph.pop-up-header .faqs-popup .faqs-popup-questions-physical-items .question .icon {\n  width: 5%;\n}\n.cph.pop-up-header .info-popup .faqs-popup-questions-items .question .icon i, .cph.pop-up-header .info-popup .faqs-popup-questions-physical-items .question .icon i,\n.cph.pop-up-header .tc-popup .faqs-popup-questions-items .question .icon i,\n.cph.pop-up-header .tc-popup .faqs-popup-questions-physical-items .question .icon i,\n.cph.pop-up-header .prizes-popup .faqs-popup-questions-items .question .icon i,\n.cph.pop-up-header .prizes-popup .faqs-popup-questions-physical-items .question .icon i,\n.cph.pop-up-header .faqs-popup .faqs-popup-questions-items .question .icon i,\n.cph.pop-up-header .faqs-popup .faqs-popup-questions-physical-items .question .icon i {\n  font-size: 16px;\n  color: #ff0053;\n  transition: 0.2s all ease-in-out;\n}\n.cph.pop-up-header .info-popup .faqs-popup-questions-items .answer, .cph.pop-up-header .info-popup .faqs-popup-questions-physical-items .answer,\n.cph.pop-up-header .tc-popup .faqs-popup-questions-items .answer,\n.cph.pop-up-header .tc-popup .faqs-popup-questions-physical-items .answer,\n.cph.pop-up-header .prizes-popup .faqs-popup-questions-items .answer,\n.cph.pop-up-header .prizes-popup .faqs-popup-questions-physical-items .answer,\n.cph.pop-up-header .faqs-popup .faqs-popup-questions-items .answer,\n.cph.pop-up-header .faqs-popup .faqs-popup-questions-physical-items .answer {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  color: #1a1818;\n  margin-bottom: 20px;\n  display: none;\n  transition: 0.5s all ease-in-out;\n}\n.cph.pop-up-header .info-popup .faqs-popup-questions-items .answer ul, .cph.pop-up-header .info-popup .faqs-popup-questions-physical-items .answer ul,\n.cph.pop-up-header .tc-popup .faqs-popup-questions-items .answer ul,\n.cph.pop-up-header .tc-popup .faqs-popup-questions-physical-items .answer ul,\n.cph.pop-up-header .prizes-popup .faqs-popup-questions-items .answer ul,\n.cph.pop-up-header .prizes-popup .faqs-popup-questions-physical-items .answer ul,\n.cph.pop-up-header .faqs-popup .faqs-popup-questions-items .answer ul,\n.cph.pop-up-header .faqs-popup .faqs-popup-questions-physical-items .answer ul {\n  padding-inline-start: 20px;\n}\n.cph.pop-up-header .play-game {\n  background: #fee600;\n  color: #04223f;\n  font-family: \"Lexend\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 32px;\n  box-shadow: 0px 5px 0px #c6b304;\n  border-radius: 100px;\n  padding: 10px 20px;\n  border: 0;\n  margin-bottom: 5px;\n}", "",{"version":3,"sources":["webpack://./src/comp/ui/common/header/common-var.scss","webpack://./src/comp/ui/common/pop-up-header/style.scss"],"names":[],"mappings":"AA4HA;EACE;IACE,YAAA;IACA,6BAAA;EC3HF;ED8HA;IACE,UAAA;IACA,wBAAA;EC5HF;AACF;AD+HA;EACE;IACE,YAAA;IACA,qDAAA;EC7HF;EDgIA;IACE,UAAA;IACA,iCAAA;EC9HF;AACF;ADgIA;EACE;IACE,YAAA;IACA,2CAAA;EC9HF;EDgIA;IACE,UAAA;IACA,yCAAA;EC9HF;AACF;ADiIA;EACE;IACE,SAAA;EC/HF;EDiIA;IACE,SAAA;EC/HF;AACF;AA5BA;EACE,eAAA;EACA,YAAA;EACA,iBAAA;EACA,gBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,iBAAA;EACA,oBAAA;EACA,aDsJiB;ECrJjB,aAAA;AA8BF;AA5BE;EACE,aAAA;EACA,yBDjBqB;ECkBrB,eAAA;EACA,YAAA;EACA,iBAAA;EACA,gBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,iBAAA;EACA,oBAAA;EACA,uBAAA;AA8BJ;AA5BI;EACE,kBAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;EACA,iBAAA;AA8BN;AA5BM;EACE,eAAA;EDqBN,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;ECvBM,cAAA;EACA,uBAAA;EACA,SAAA;EACA,yBAAA;AAkCR;AA9BI;EACE,mBAAA;EACA,aAAA;EACA,uBAAA;AAgCN;AA7BI;EACE,kBAAA;EACA,oCAAA;EACA,2BAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;EACA,iBAAA;EACA,cAAA;EACA,kBAAA;AA+BN;AA7BM;EDjCJ,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EC+BM,cAAA;EACA,kBAAA;AAmCR;AAhCM;ED+BJ,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;ECjCM,cAAA;EACA,mBAAA;AAsCR;AAnCM;ED/BJ,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EC6BM,iBAAA;EACA,yBAAA;EACA,oBAAA;EACA,cAAA;EACA,yBAAA;AAyCR;AApCE;;;;EAIE,aAAA;EACA,iBAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,aAAA;EACA,2BAAA;AAsCJ;AApCI;;;;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;AAyCN;AAvCM;;;;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,2BAAA;EACA,+BAAA;EACA,oBAAA;EACA,iBAAA;AA4CR;AA1CQ;;;;EACE,eAAA;EACA,cAAA;AA+CV;AA3CM;;;;ED7GJ,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EC2GM,cAAA;AAoDR;AAjDM;;;;EACE,iBAAA;EACA,aD6BW;ACyBnB;AApDQ;;;;EACE,cAAA;EACA,eAAA;AAyDV;AApDI;;;;EDzCF,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;ECuCI,cAAA;EACA,mBAAA;AA6DN;AA1DI;;;;EACE,aAAA;EACA,uBAAA;AA+DN;AA5DI;;;;EACE,gBAAA;EACA,gBAAA;AAiEN;AA9DI;;;;EACE,gBAAA;EACA,gBAAA;EACA,kBAAA;AAmEN;AAjEM;;;;EACE,UAAA;AAsER;AAnEM;;;;EACE,mBAAA;EACA,oBAAA;AAwER;AArEM;;;;EACE,mBAAA;EACA,mBAAA;AA0ER;AAtEM;;;;EACE,mBAAA;AA2ER;AA1EQ;;;;EACE,gBAAA;AA+EV;AA5EM;;;;EDhKJ,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EC8JM,cAAA;EACA,mBAAA;AAqFR;AAnFM;;;;EACE,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;AAwFR;AAtFQ;;;;EACE,UAAA;AA2FV;AAxFQ;;;;EACE,mBAAA;EACA,oBAAA;AA6FV;AA1FQ;;;;EACE,mBAAA;EACA,mBAAA;AA+FV;AA3FQ;;;;EACE,mBAAA;AAgGV;AA/FU;;;;EACE,aAAA;EACA,2BAAA;EACA,mBAAA;AAoGZ;AAnGY;;;;EACE,YAAA;EACA,WAAA;AAwGd;AArGc;;;;EDtIZ,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;ECoIc,cAAA;EACA,kBAAA;AA8GhB;AA5Gc;;;;EDrLZ,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;ECmLc,cAAA;AAqHhB;AAjHU;;;;EACE,mBAAA;AAsHZ;AApHU;;;;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;AAyHZ;AAxHY;;;;EACE,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;EACA,uBAAA;AA6Hd;AA3HY;;;;EACE,eAAA;EACA,cAAA;AAgId;AAzHM;;;;EDxOJ,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;ECsOM,cAAA;EACA,kBAAA;EACA,iBAAA;EACA,oBAAA;AAkIR;AAhIM;;;;EACE,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;AAqIR;AAnIQ;;;;EACE,UAAA;AAwIV;AArIQ;;;;EACE,mBAAA;EACA,oBAAA;AA0IV;AAvIQ;;;;EACE,mBAAA;EACA,mBAAA;AA4IV;AAzIM;;;;;;;EACE,mBAAA;AAiJR;AA/IU;;;;;;;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,aAAA;EACA,iBAAA;EACA,mBAAA;EACA,8CAAA;EACA,kBAAA;AAuJZ;AAtJY;;;;;;;EACE,iDAAA;EACA,yBAAA;AA8Jd;AA5JY;;;;;;;EDvPV,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;ECqPY,cAAA;EACA,UAAA;EACA,mBAAA;AAwKd;AAtKY;;;;;;;EACE,SAAA;AA8Kd;AA7Kc;;;;;;;EACE,eAAA;EACA,cAAA;EACA,gCAAA;AAqLhB;AAjLU;;;;;;;EDrNR,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;ECmNU,cAAA;EACA,mBAAA;EACA,aAAA;EACA,gCAAA;AA6LZ;AA5LY;;;;;;;EACE,0BAAA;AAoMd;AA5LE;EACE,mBAAA;EACA,cAAA;EDrSF,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;ECmSE,+BAAA;EACA,oBAAA;EACA,kBAAA;EACA,SAAA;EACA,kBAAA;AAkMJ","sourcesContent":["$test-color: red;\r\n\r\n// responsive\r\n$mobile-w: 360;\r\n$tablet-w: 834;\r\n$desktop-w: 1500;\r\n\r\n// color\r\n$background-color-white: #F8F8F8;\r\n// components\r\n@mixin title-big {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 32px;\r\n  line-height: 40px;\r\n}\r\n@mixin sora-800-xl {\r\n  font-family: 'Lexend';\r\n  font-style: normal;\r\n  font-weight: 800;\r\n  font-size: 32px;\r\n  line-height: 40px;\r\n}\r\n@mixin sora-800-lg {\r\n  font-family: 'Lexend';\r\n  font-style: normal;\r\n  font-weight: 800;\r\n  font-size: 20px;\r\n  line-height: 28px;\r\n}\r\n@mixin sora-800-md {\r\n  font-family: 'Lexend';\r\n  font-style: normal;\r\n  font-weight: 800;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n}\r\n@mixin sora-800-sm {\r\n  font-family: 'Lexend';\r\n  font-style: normal;\r\n  font-weight: 800;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n}\r\n@mixin sora-700-md {\r\n  font-family: 'Lexend';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 24px;\r\n  line-height: 32px;\r\n}\r\n@mixin sora-700-sm {\r\n  font-family: 'Lexend';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n}\r\n@mixin sora-600-sm {\r\n  font-family: 'Lexend';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n}\r\n@mixin sora-400-lg {\r\n  font-family: 'Lexend';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 20px;\r\n  line-height: 24px;\r\n}\r\n@mixin roboto-600-lg {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n}\r\n@mixin roboto-600-md {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n}\r\n@mixin roboto-600-sm {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n}\r\n@mixin roboto-500-xs {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 12px;\r\n  line-height: 16px;\r\n}\r\n@mixin roboto-400-md {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n}\r\n@mixin roboto-400-sm {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n}\r\n@mixin roboto-400-sm-i {\r\n  font-family: 'Roboto';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n}\r\n\r\n// keyframes\r\n@keyframes intro-y {\r\n  0% {\r\n    opacity: 0.2;\r\n    transform: translateY(-200px);\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes intro-y-bot {\r\n  0% {\r\n    opacity: 0.2;\r\n    transform: translateY(calc(100vh + 200px)) scale(0.6);\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateY(0) scale(1);\r\n  }\r\n}\r\n@keyframes zoomIn {\r\n  0% {\r\n    opacity: 0.2;\r\n    transform: translate(-50%, -50%) scale(.5);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translate(-50%, -50%) scale(1);\r\n\r\n  }\r\n}\r\n@keyframes headerFixedIndex {\r\n  0% {\r\n    top: 74px;\r\n  }\r\n  100% {\r\n    top: 37px ;\r\n  }\r\n}\r\n\r\n\r\n// z-index\r\n$zi-infor-button: 500;\r\n$zi-pop-up-header: 1000;\r\n$zi-pop-up-my-score: 2500;\r\n$zi-header: 2000;\r\n$zi-log-in: 3000;","@import \"./../header/common-var.scss\";\r\n\r\n$button-color--border: #004586;\r\n$button-color--icon: #004483;\r\n$button-color--background: #ffffff;\r\n$button-color-active--border: #ffffff;\r\n$button-color-active--icon: #ffffff;\r\n$button-color-active--background: #ee2e8e;\r\n\r\n.cph.pop-up-header {\r\n  position: fixed;\r\n  width: 100vw;\r\n  max-height: 100vh;\r\n  overflow-y: auto;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  padding-top: 80px;\r\n  padding-bottom: 20px;\r\n  z-index: $zi-pop-up-header;\r\n  display: none;\r\n\r\n  .menu-popup {\r\n    display: none;\r\n    background-color: $background-color-white;\r\n    position: fixed;\r\n    width: 100vw;\r\n    max-height: 100vh;\r\n    overflow-y: auto;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    padding-top: 80px;\r\n    padding-bottom: 20px;\r\n    animation: intro-y 0.5s;\r\n\r\n    &-list {\r\n      padding: 10px 16px;\r\n      margin-bottom: 10px;\r\n      justify-content: center;\r\n      display: flex;\r\n      flex-flow: column;\r\n\r\n      button {\r\n        padding: 20px 0;\r\n        @include sora-400-lg;\r\n        color: #1a1818;\r\n        background: transparent;\r\n        border: 0;\r\n        text-transform: uppercase;\r\n      }\r\n    }\r\n\r\n    &-button {\r\n      margin-bottom: 45px;\r\n      display: flex;\r\n      justify-content: center;\r\n    }\r\n\r\n    &-view-more {\r\n      padding: 10px 20px;\r\n      background: rgba(255, 255, 255, 0.3);\r\n      backdrop-filter: blur(10px);\r\n      border-radius: 16px;\r\n      justify-content: center;\r\n      display: flex;\r\n      flex-flow: column;\r\n      margin: 0 16px;\r\n      text-align: center;\r\n\r\n      .title {\r\n        @include sora-800-sm;\r\n        color: #004483;\r\n        margin-bottom: 8px;\r\n      }\r\n\r\n      .descrpition {\r\n        @include roboto-400-sm;\r\n        color: #000000;\r\n        margin-bottom: 20px;\r\n      }\r\n\r\n      .view-more-btn {\r\n        @include sora-700-sm;\r\n        padding: 8px 16px;\r\n        border: 2px solid #04223f;\r\n        border-radius: 100px;\r\n        color: #04223f;\r\n        text-transform: uppercase;\r\n      }\r\n    }\r\n  }\r\n\r\n  .info-popup,\r\n  .tc-popup,\r\n  .prizes-popup,\r\n  .faqs-popup {\r\n    display: none;\r\n    background: white;\r\n    position: fixed;\r\n    max-height: 70vh;\r\n    overflow-y: auto;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    border-radius: 16px 16px 0px 0px;\r\n    padding: 20px;\r\n    animation: intro-y-bot 0.5s;\r\n\r\n    &-top {\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      margin-bottom: 20px;\r\n\r\n      .icon {\r\n        width: 20px;\r\n        height: 20px;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        border: 1.5px solid #004483;\r\n        box-shadow: 0px 2px 0px #004586;\r\n        border-radius: 100px;\r\n        margin-right: 8px;\r\n\r\n        i {\r\n          font-size: 14px;\r\n          color: #004483;\r\n        }\r\n      }\r\n\r\n      .title {\r\n        @include sora-800-lg;\r\n        color: #000000;\r\n      }\r\n\r\n      .close {\r\n        margin-left: auto;\r\n        z-index: $zi-pop-up-header;\r\n        \r\n        i {\r\n          color: #000000;\r\n          font-size: 20px;\r\n        }\r\n      }\r\n    }\r\n\r\n    &-content {\r\n      @include roboto-400-sm;\r\n      color: #1a1818;\r\n      margin-bottom: 20px;\r\n    }\r\n\r\n    &-button {\r\n      display: flex;\r\n      justify-content: center;\r\n      \r\n    }\r\n    &-mh {\r\n      max-height: 60vh;\r\n      overflow-y: auto;\r\n    }\r\n\r\n    .tc-popup-content {\r\n      max-height: 50vh;\r\n      overflow-y: auto;\r\n      padding-right: 5px;\r\n\r\n      &::-webkit-scrollbar {\r\n        width: 6px;\r\n      }\r\n\r\n      &::-webkit-scrollbar-track {\r\n        background: #f1f1f1;\r\n        border-radius: 100px;\r\n      }\r\n\r\n      &::-webkit-scrollbar-thumb {\r\n        background: #ff0053;\r\n        border-radius: 10px;\r\n      }\r\n    }\r\n    .prizes-popup {\r\n      &-img {\r\n        margin-bottom: 20px;\r\n        img {\r\n          max-width: 375px;\r\n        }\r\n      }\r\n      &-title {\r\n        @include sora-800-md;\r\n        color: #1a1818;\r\n        margin-bottom: 10px;\r\n      }\r\n      &-mh {\r\n        max-height: 50vh;\r\n        overflow-y: auto;\r\n        padding-right: 5px;\r\n        margin-bottom: 5px;\r\n\r\n        &::-webkit-scrollbar {\r\n          width: 6px;\r\n        }\r\n\r\n        &::-webkit-scrollbar-track {\r\n          background: #f1f1f1;\r\n          border-radius: 100px;\r\n        }\r\n\r\n        &::-webkit-scrollbar-thumb {\r\n          background: #ff0053;\r\n          border-radius: 10px;\r\n        }\r\n      }\r\n      &-content {\r\n        .prizes-popup-items {\r\n          margin-bottom: 20px;\r\n          .infor {\r\n            display: flex;\r\n            justify-content: flex-start;\r\n            align-items: center;\r\n            .img {\r\n              height: 80px;\r\n              width: auto;\r\n            }\r\n            .title {\r\n              .ordinal {\r\n                @include roboto-500-xs;\r\n                color: #04223f;\r\n                margin-bottom: 2px;\r\n              }\r\n              .name {\r\n                @include sora-700-sm;\r\n                color: #1a1818;\r\n              }\r\n            }\r\n          }\r\n          .content {\r\n            margin-bottom: 10px;\r\n          }\r\n          .abouts-huawei {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n            a {\r\n              font-family: Roboto;\r\n              font-weight: 500;\r\n              font-size: 12px;\r\n              line-height: 16px;\r\n              color: #ff0053;\r\n              text-decoration: revert;\r\n            }\r\n            i {\r\n              font-size: 16px;\r\n              color: #ff0053;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n    .faqs-popup {\r\n      &-type{\r\n        @include sora-800-md;\r\n        color: #FF0053;\r\n        text-align: center;\r\n        padding-top: 16px;\r\n        padding-bottom: 10px;\r\n      }\r\n      &-mh {\r\n        max-height: 50vh;\r\n        overflow-y: auto;\r\n        padding-right: 5px;\r\n        margin-bottom: 5px;\r\n\r\n        &::-webkit-scrollbar {\r\n          width: 6px;\r\n        }\r\n\r\n        &::-webkit-scrollbar-track {\r\n          background: #f1f1f1;\r\n          border-radius: 100px;\r\n        }\r\n\r\n        &::-webkit-scrollbar-thumb {\r\n          background: #ff0053;\r\n          border-radius: 10px;\r\n        }\r\n      }\r\n      &-questions, &-questions-physical {\r\n        margin-bottom: 20px;\r\n        &-items {\r\n          .question {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n            padding: 18px;\r\n            background: white;\r\n            margin-bottom: 10px;\r\n            box-shadow: 0px 2px 25px rgba(50, 50, 71, 0.1);\r\n            border-radius: 6px;\r\n            &.active {\r\n              box-shadow: 0px 0px 0px 2px rgba(255, 0, 84, 0.2);\r\n              border: 1px solid #ff0053;\r\n            }\r\n            .text {\r\n              @include sora-600-sm;\r\n              color: #000000;\r\n              width: 95%;\r\n              padding-right: 10px;\r\n            }\r\n            .icon {\r\n              width: 5%;\r\n              i {\r\n                font-size: 16px;\r\n                color: #ff0053;\r\n                transition: 0.2s all ease-in-out;\r\n              }\r\n            }\r\n          }\r\n          .answer {\r\n            @include roboto-400-sm;\r\n            color: #1a1818;\r\n            margin-bottom: 20px;\r\n            display: none;\r\n            transition: 0.5s all ease-in-out;\r\n            ul{\r\n              padding-inline-start: 20px;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .play-game {\r\n    background: #fee600;\r\n    color: #04223f;\r\n    @include sora-700-md;\r\n    box-shadow: 0px 5px 0px #c6b304;\r\n    border-radius: 100px;\r\n    padding: 10px 20px;\r\n    border: 0;\r\n    margin-bottom: 5px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 0:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/comp/ui/game/game/style.scss ***!
  \***********************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".gg.game {\n  position: relative;\n  width: 100vw;\n  box-sizing: border-box;\n  color: #000;\n  margin: 0 auto;\n  height: calc(100vh - 80px);\n}\n.gg.game #game-frame {\n  width: 100%;\n  height: 100%;\n  display: block;\n  overflow: hidden;\n}", "",{"version":3,"sources":["webpack://./src/comp/ui/game/game/style.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,WAAA;EACA,cAAA;EACA,0BAAA;AACF;AAAE;EACE,WAAA;EACA,YAAA;EACA,cAAA;EACA,gBAAA;AAEJ","sourcesContent":[".gg.game {\r\n  position: relative;\r\n  width: 100vw;\r\n  box-sizing: border-box;\r\n  color: #000;\r\n  margin: 0 auto;\r\n  height: calc(100vh - 80px);\r\n  #game-frame {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: block;\r\n    overflow: hidden;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 9943:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/comp/ui/common/header/fontawesome-free-6.1.1-web/css/fontawesome.css ***!
  \************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\r\n * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com\r\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\r\n * Copyright 2022 Fonticons, Inc.\r\n */\r\n.fa {\r\n  font-family: var(--fa-style-family, \"Font Awesome 6 Free\");\r\n  font-weight: var(--fa-style, 900); }\r\n\r\n.fa,\r\n.fas,\r\n.fa-solid,\r\n.far,\r\n.fa-regular,\r\n.fal,\r\n.fa-light,\r\n.fat,\r\n.fa-thin,\r\n.fad,\r\n.fa-duotone,\r\n.fab,\r\n.fa-brands {\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  display: var(--fa-display, inline-block);\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  line-height: 1;\r\n  text-rendering: auto; }\r\n\r\n.fa-1x {\r\n  font-size: 1em; }\r\n\r\n.fa-2x {\r\n  font-size: 2em; }\r\n\r\n.fa-3x {\r\n  font-size: 3em; }\r\n\r\n.fa-4x {\r\n  font-size: 4em; }\r\n\r\n.fa-5x {\r\n  font-size: 5em; }\r\n\r\n.fa-6x {\r\n  font-size: 6em; }\r\n\r\n.fa-7x {\r\n  font-size: 7em; }\r\n\r\n.fa-8x {\r\n  font-size: 8em; }\r\n\r\n.fa-9x {\r\n  font-size: 9em; }\r\n\r\n.fa-10x {\r\n  font-size: 10em; }\r\n\r\n.fa-2xs {\r\n  font-size: 0.625em;\r\n  line-height: 0.1em;\r\n  vertical-align: 0.225em; }\r\n\r\n.fa-xs {\r\n  font-size: 0.75em;\r\n  line-height: 0.08333em;\r\n  vertical-align: 0.125em; }\r\n\r\n.fa-sm {\r\n  font-size: 0.875em;\r\n  line-height: 0.07143em;\r\n  vertical-align: 0.05357em; }\r\n\r\n.fa-lg {\r\n  font-size: 1.25em;\r\n  line-height: 0.05em;\r\n  vertical-align: -0.075em; }\r\n\r\n.fa-xl {\r\n  font-size: 1.5em;\r\n  line-height: 0.04167em;\r\n  vertical-align: -0.125em; }\r\n\r\n.fa-2xl {\r\n  font-size: 2em;\r\n  line-height: 0.03125em;\r\n  vertical-align: -0.1875em; }\r\n\r\n.fa-fw {\r\n  text-align: center;\r\n  width: 1.25em; }\r\n\r\n.fa-ul {\r\n  list-style-type: none;\r\n  margin-left: var(--fa-li-margin, 2.5em);\r\n  padding-left: 0; }\r\n  .fa-ul > li {\r\n    position: relative; }\r\n\r\n.fa-li {\r\n  left: calc(var(--fa-li-width, 2em) * -1);\r\n  position: absolute;\r\n  text-align: center;\r\n  width: var(--fa-li-width, 2em);\r\n  line-height: inherit; }\r\n\r\n.fa-border {\r\n  border-color: var(--fa-border-color, #eee);\r\n  border-radius: var(--fa-border-radius, 0.1em);\r\n  border-style: var(--fa-border-style, solid);\r\n  border-width: var(--fa-border-width, 0.08em);\r\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em); }\r\n\r\n.fa-pull-left {\r\n  float: left;\r\n  margin-right: var(--fa-pull-margin, 0.3em); }\r\n\r\n.fa-pull-right {\r\n  float: right;\r\n  margin-left: var(--fa-pull-margin, 0.3em); }\r\n\r\n.fa-beat {\r\n  -webkit-animation-name: fa-beat;\r\n          animation-name: fa-beat;\r\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\r\n          animation-delay: var(--fa-animation-delay, 0);\r\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\r\n          animation-direction: var(--fa-animation-direction, normal);\r\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\r\n          animation-duration: var(--fa-animation-duration, 1s);\r\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\r\n          animation-timing-function: var(--fa-animation-timing, ease-in-out); }\r\n\r\n.fa-bounce {\r\n  -webkit-animation-name: fa-bounce;\r\n          animation-name: fa-bounce;\r\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\r\n          animation-delay: var(--fa-animation-delay, 0);\r\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\r\n          animation-direction: var(--fa-animation-direction, normal);\r\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\r\n          animation-duration: var(--fa-animation-duration, 1s);\r\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\r\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1)); }\r\n\r\n.fa-fade {\r\n  -webkit-animation-name: fa-fade;\r\n          animation-name: fa-fade;\r\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\r\n          animation-delay: var(--fa-animation-delay, 0);\r\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\r\n          animation-direction: var(--fa-animation-direction, normal);\r\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\r\n          animation-duration: var(--fa-animation-duration, 1s);\r\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\r\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1)); }\r\n\r\n.fa-beat-fade {\r\n  -webkit-animation-name: fa-beat-fade;\r\n          animation-name: fa-beat-fade;\r\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\r\n          animation-delay: var(--fa-animation-delay, 0);\r\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\r\n          animation-direction: var(--fa-animation-direction, normal);\r\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\r\n          animation-duration: var(--fa-animation-duration, 1s);\r\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\r\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1)); }\r\n\r\n.fa-flip {\r\n  -webkit-animation-name: fa-flip;\r\n          animation-name: fa-flip;\r\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\r\n          animation-delay: var(--fa-animation-delay, 0);\r\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\r\n          animation-direction: var(--fa-animation-direction, normal);\r\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\r\n          animation-duration: var(--fa-animation-duration, 1s);\r\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\r\n          animation-timing-function: var(--fa-animation-timing, ease-in-out); }\r\n\r\n.fa-shake {\r\n  -webkit-animation-name: fa-shake;\r\n          animation-name: fa-shake;\r\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\r\n          animation-delay: var(--fa-animation-delay, 0);\r\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\r\n          animation-direction: var(--fa-animation-direction, normal);\r\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\r\n          animation-duration: var(--fa-animation-duration, 1s);\r\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\r\n          animation-timing-function: var(--fa-animation-timing, linear); }\r\n\r\n.fa-spin {\r\n  -webkit-animation-name: fa-spin;\r\n          animation-name: fa-spin;\r\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\r\n          animation-delay: var(--fa-animation-delay, 0);\r\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\r\n          animation-direction: var(--fa-animation-direction, normal);\r\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\r\n          animation-duration: var(--fa-animation-duration, 2s);\r\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\r\n          animation-timing-function: var(--fa-animation-timing, linear); }\r\n\r\n.fa-spin-reverse {\r\n  --fa-animation-direction: reverse; }\r\n\r\n.fa-pulse,\r\n.fa-spin-pulse {\r\n  -webkit-animation-name: fa-spin;\r\n          animation-name: fa-spin;\r\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\r\n          animation-direction: var(--fa-animation-direction, normal);\r\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\r\n          animation-duration: var(--fa-animation-duration, 1s);\r\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\r\n          animation-timing-function: var(--fa-animation-timing, steps(8)); }\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n  .fa-beat,\r\n  .fa-bounce,\r\n  .fa-fade,\r\n  .fa-beat-fade,\r\n  .fa-flip,\r\n  .fa-pulse,\r\n  .fa-shake,\r\n  .fa-spin,\r\n  .fa-spin-pulse {\r\n    -webkit-animation-delay: -1ms;\r\n            animation-delay: -1ms;\r\n    -webkit-animation-duration: 1ms;\r\n            animation-duration: 1ms;\r\n    -webkit-animation-iteration-count: 1;\r\n            animation-iteration-count: 1;\r\n    transition-delay: 0s;\r\n    transition-duration: 0s; } }\r\n\r\n@-webkit-keyframes fa-beat {\r\n  0%, 90% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1); }\r\n  45% {\r\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\r\n            transform: scale(var(--fa-beat-scale, 1.25)); } }\r\n\r\n@keyframes fa-beat {\r\n  0%, 90% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1); }\r\n  45% {\r\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\r\n            transform: scale(var(--fa-beat-scale, 1.25)); } }\r\n\r\n@-webkit-keyframes fa-bounce {\r\n  0% {\r\n    -webkit-transform: scale(1, 1) translateY(0);\r\n            transform: scale(1, 1) translateY(0); }\r\n  10% {\r\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\r\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0); }\r\n  30% {\r\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\r\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em)); }\r\n  50% {\r\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\r\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0); }\r\n  57% {\r\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\r\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em)); }\r\n  64% {\r\n    -webkit-transform: scale(1, 1) translateY(0);\r\n            transform: scale(1, 1) translateY(0); }\r\n  100% {\r\n    -webkit-transform: scale(1, 1) translateY(0);\r\n            transform: scale(1, 1) translateY(0); } }\r\n\r\n@keyframes fa-bounce {\r\n  0% {\r\n    -webkit-transform: scale(1, 1) translateY(0);\r\n            transform: scale(1, 1) translateY(0); }\r\n  10% {\r\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\r\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0); }\r\n  30% {\r\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\r\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em)); }\r\n  50% {\r\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\r\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0); }\r\n  57% {\r\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\r\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em)); }\r\n  64% {\r\n    -webkit-transform: scale(1, 1) translateY(0);\r\n            transform: scale(1, 1) translateY(0); }\r\n  100% {\r\n    -webkit-transform: scale(1, 1) translateY(0);\r\n            transform: scale(1, 1) translateY(0); } }\r\n\r\n@-webkit-keyframes fa-fade {\r\n  50% {\r\n    opacity: var(--fa-fade-opacity, 0.4); } }\r\n\r\n@keyframes fa-fade {\r\n  50% {\r\n    opacity: var(--fa-fade-opacity, 0.4); } }\r\n\r\n@-webkit-keyframes fa-beat-fade {\r\n  0%, 100% {\r\n    opacity: var(--fa-beat-fade-opacity, 0.4);\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1); }\r\n  50% {\r\n    opacity: 1;\r\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\r\n            transform: scale(var(--fa-beat-fade-scale, 1.125)); } }\r\n\r\n@keyframes fa-beat-fade {\r\n  0%, 100% {\r\n    opacity: var(--fa-beat-fade-opacity, 0.4);\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1); }\r\n  50% {\r\n    opacity: 1;\r\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\r\n            transform: scale(var(--fa-beat-fade-scale, 1.125)); } }\r\n\r\n@-webkit-keyframes fa-flip {\r\n  50% {\r\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\r\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg)); } }\r\n\r\n@keyframes fa-flip {\r\n  50% {\r\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\r\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg)); } }\r\n\r\n@-webkit-keyframes fa-shake {\r\n  0% {\r\n    -webkit-transform: rotate(-15deg);\r\n            transform: rotate(-15deg); }\r\n  4% {\r\n    -webkit-transform: rotate(15deg);\r\n            transform: rotate(15deg); }\r\n  8%, 24% {\r\n    -webkit-transform: rotate(-18deg);\r\n            transform: rotate(-18deg); }\r\n  12%, 28% {\r\n    -webkit-transform: rotate(18deg);\r\n            transform: rotate(18deg); }\r\n  16% {\r\n    -webkit-transform: rotate(-22deg);\r\n            transform: rotate(-22deg); }\r\n  20% {\r\n    -webkit-transform: rotate(22deg);\r\n            transform: rotate(22deg); }\r\n  32% {\r\n    -webkit-transform: rotate(-12deg);\r\n            transform: rotate(-12deg); }\r\n  36% {\r\n    -webkit-transform: rotate(12deg);\r\n            transform: rotate(12deg); }\r\n  40%, 100% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg); } }\r\n\r\n@keyframes fa-shake {\r\n  0% {\r\n    -webkit-transform: rotate(-15deg);\r\n            transform: rotate(-15deg); }\r\n  4% {\r\n    -webkit-transform: rotate(15deg);\r\n            transform: rotate(15deg); }\r\n  8%, 24% {\r\n    -webkit-transform: rotate(-18deg);\r\n            transform: rotate(-18deg); }\r\n  12%, 28% {\r\n    -webkit-transform: rotate(18deg);\r\n            transform: rotate(18deg); }\r\n  16% {\r\n    -webkit-transform: rotate(-22deg);\r\n            transform: rotate(-22deg); }\r\n  20% {\r\n    -webkit-transform: rotate(22deg);\r\n            transform: rotate(22deg); }\r\n  32% {\r\n    -webkit-transform: rotate(-12deg);\r\n            transform: rotate(-12deg); }\r\n  36% {\r\n    -webkit-transform: rotate(12deg);\r\n            transform: rotate(12deg); }\r\n  40%, 100% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg); } }\r\n\r\n@-webkit-keyframes fa-spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg); }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg); } }\r\n\r\n@keyframes fa-spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg); }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg); } }\r\n\r\n.fa-rotate-90 {\r\n  -webkit-transform: rotate(90deg);\r\n          transform: rotate(90deg); }\r\n\r\n.fa-rotate-180 {\r\n  -webkit-transform: rotate(180deg);\r\n          transform: rotate(180deg); }\r\n\r\n.fa-rotate-270 {\r\n  -webkit-transform: rotate(270deg);\r\n          transform: rotate(270deg); }\r\n\r\n.fa-flip-horizontal {\r\n  -webkit-transform: scale(-1, 1);\r\n          transform: scale(-1, 1); }\r\n\r\n.fa-flip-vertical {\r\n  -webkit-transform: scale(1, -1);\r\n          transform: scale(1, -1); }\r\n\r\n.fa-flip-both,\r\n.fa-flip-horizontal.fa-flip-vertical {\r\n  -webkit-transform: scale(-1, -1);\r\n          transform: scale(-1, -1); }\r\n\r\n.fa-rotate-by {\r\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\r\n          transform: rotate(var(--fa-rotate-angle, none)); }\r\n\r\n.fa-stack {\r\n  display: inline-block;\r\n  height: 2em;\r\n  line-height: 2em;\r\n  position: relative;\r\n  vertical-align: middle;\r\n  width: 2.5em; }\r\n\r\n.fa-stack-1x,\r\n.fa-stack-2x {\r\n  left: 0;\r\n  position: absolute;\r\n  text-align: center;\r\n  width: 100%;\r\n  z-index: var(--fa-stack-z-index, auto); }\r\n\r\n.fa-stack-1x {\r\n  line-height: inherit; }\r\n\r\n.fa-stack-2x {\r\n  font-size: 2em; }\r\n\r\n.fa-inverse {\r\n  color: var(--fa-inverse, #fff); }\r\n\r\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\r\nreaders do not read off random characters that represent icons */\r\n.fa-0::before {\r\n  content: \"\\30\"; }\r\n\r\n.fa-1::before {\r\n  content: \"\\31\"; }\r\n\r\n.fa-2::before {\r\n  content: \"\\32\"; }\r\n\r\n.fa-3::before {\r\n  content: \"\\33\"; }\r\n\r\n.fa-4::before {\r\n  content: \"\\34\"; }\r\n\r\n.fa-5::before {\r\n  content: \"\\35\"; }\r\n\r\n.fa-6::before {\r\n  content: \"\\36\"; }\r\n\r\n.fa-7::before {\r\n  content: \"\\37\"; }\r\n\r\n.fa-8::before {\r\n  content: \"\\38\"; }\r\n\r\n.fa-9::before {\r\n  content: \"\\39\"; }\r\n\r\n.fa-a::before {\r\n  content: \"\\41\"; }\r\n\r\n.fa-address-book::before {\r\n  content: \"\\f2b9\"; }\r\n\r\n.fa-contact-book::before {\r\n  content: \"\\f2b9\"; }\r\n\r\n.fa-address-card::before {\r\n  content: \"\\f2bb\"; }\r\n\r\n.fa-contact-card::before {\r\n  content: \"\\f2bb\"; }\r\n\r\n.fa-vcard::before {\r\n  content: \"\\f2bb\"; }\r\n\r\n.fa-align-center::before {\r\n  content: \"\\f037\"; }\r\n\r\n.fa-align-justify::before {\r\n  content: \"\\f039\"; }\r\n\r\n.fa-align-left::before {\r\n  content: \"\\f036\"; }\r\n\r\n.fa-align-right::before {\r\n  content: \"\\f038\"; }\r\n\r\n.fa-anchor::before {\r\n  content: \"\\f13d\"; }\r\n\r\n.fa-anchor-circle-check::before {\r\n  content: \"\\e4aa\"; }\r\n\r\n.fa-anchor-circle-exclamation::before {\r\n  content: \"\\e4ab\"; }\r\n\r\n.fa-anchor-circle-xmark::before {\r\n  content: \"\\e4ac\"; }\r\n\r\n.fa-anchor-lock::before {\r\n  content: \"\\e4ad\"; }\r\n\r\n.fa-angle-down::before {\r\n  content: \"\\f107\"; }\r\n\r\n.fa-angle-left::before {\r\n  content: \"\\f104\"; }\r\n\r\n.fa-angle-right::before {\r\n  content: \"\\f105\"; }\r\n\r\n.fa-angle-up::before {\r\n  content: \"\\f106\"; }\r\n\r\n.fa-angles-down::before {\r\n  content: \"\\f103\"; }\r\n\r\n.fa-angle-double-down::before {\r\n  content: \"\\f103\"; }\r\n\r\n.fa-angles-left::before {\r\n  content: \"\\f100\"; }\r\n\r\n.fa-angle-double-left::before {\r\n  content: \"\\f100\"; }\r\n\r\n.fa-angles-right::before {\r\n  content: \"\\f101\"; }\r\n\r\n.fa-angle-double-right::before {\r\n  content: \"\\f101\"; }\r\n\r\n.fa-angles-up::before {\r\n  content: \"\\f102\"; }\r\n\r\n.fa-angle-double-up::before {\r\n  content: \"\\f102\"; }\r\n\r\n.fa-ankh::before {\r\n  content: \"\\f644\"; }\r\n\r\n.fa-apple-whole::before {\r\n  content: \"\\f5d1\"; }\r\n\r\n.fa-apple-alt::before {\r\n  content: \"\\f5d1\"; }\r\n\r\n.fa-archway::before {\r\n  content: \"\\f557\"; }\r\n\r\n.fa-arrow-down::before {\r\n  content: \"\\f063\"; }\r\n\r\n.fa-arrow-down-1-9::before {\r\n  content: \"\\f162\"; }\r\n\r\n.fa-sort-numeric-asc::before {\r\n  content: \"\\f162\"; }\r\n\r\n.fa-sort-numeric-down::before {\r\n  content: \"\\f162\"; }\r\n\r\n.fa-arrow-down-9-1::before {\r\n  content: \"\\f886\"; }\r\n\r\n.fa-sort-numeric-desc::before {\r\n  content: \"\\f886\"; }\r\n\r\n.fa-sort-numeric-down-alt::before {\r\n  content: \"\\f886\"; }\r\n\r\n.fa-arrow-down-a-z::before {\r\n  content: \"\\f15d\"; }\r\n\r\n.fa-sort-alpha-asc::before {\r\n  content: \"\\f15d\"; }\r\n\r\n.fa-sort-alpha-down::before {\r\n  content: \"\\f15d\"; }\r\n\r\n.fa-arrow-down-long::before {\r\n  content: \"\\f175\"; }\r\n\r\n.fa-long-arrow-down::before {\r\n  content: \"\\f175\"; }\r\n\r\n.fa-arrow-down-short-wide::before {\r\n  content: \"\\f884\"; }\r\n\r\n.fa-sort-amount-desc::before {\r\n  content: \"\\f884\"; }\r\n\r\n.fa-sort-amount-down-alt::before {\r\n  content: \"\\f884\"; }\r\n\r\n.fa-arrow-down-up-across-line::before {\r\n  content: \"\\e4af\"; }\r\n\r\n.fa-arrow-down-up-lock::before {\r\n  content: \"\\e4b0\"; }\r\n\r\n.fa-arrow-down-wide-short::before {\r\n  content: \"\\f160\"; }\r\n\r\n.fa-sort-amount-asc::before {\r\n  content: \"\\f160\"; }\r\n\r\n.fa-sort-amount-down::before {\r\n  content: \"\\f160\"; }\r\n\r\n.fa-arrow-down-z-a::before {\r\n  content: \"\\f881\"; }\r\n\r\n.fa-sort-alpha-desc::before {\r\n  content: \"\\f881\"; }\r\n\r\n.fa-sort-alpha-down-alt::before {\r\n  content: \"\\f881\"; }\r\n\r\n.fa-arrow-left::before {\r\n  content: \"\\f060\"; }\r\n\r\n.fa-arrow-left-long::before {\r\n  content: \"\\f177\"; }\r\n\r\n.fa-long-arrow-left::before {\r\n  content: \"\\f177\"; }\r\n\r\n.fa-arrow-pointer::before {\r\n  content: \"\\f245\"; }\r\n\r\n.fa-mouse-pointer::before {\r\n  content: \"\\f245\"; }\r\n\r\n.fa-arrow-right::before {\r\n  content: \"\\f061\"; }\r\n\r\n.fa-arrow-right-arrow-left::before {\r\n  content: \"\\f0ec\"; }\r\n\r\n.fa-exchange::before {\r\n  content: \"\\f0ec\"; }\r\n\r\n.fa-arrow-right-from-bracket::before {\r\n  content: \"\\f08b\"; }\r\n\r\n.fa-sign-out::before {\r\n  content: \"\\f08b\"; }\r\n\r\n.fa-arrow-right-long::before {\r\n  content: \"\\f178\"; }\r\n\r\n.fa-long-arrow-right::before {\r\n  content: \"\\f178\"; }\r\n\r\n.fa-arrow-right-to-bracket::before {\r\n  content: \"\\f090\"; }\r\n\r\n.fa-sign-in::before {\r\n  content: \"\\f090\"; }\r\n\r\n.fa-arrow-right-to-city::before {\r\n  content: \"\\e4b3\"; }\r\n\r\n.fa-arrow-rotate-left::before {\r\n  content: \"\\f0e2\"; }\r\n\r\n.fa-arrow-left-rotate::before {\r\n  content: \"\\f0e2\"; }\r\n\r\n.fa-arrow-rotate-back::before {\r\n  content: \"\\f0e2\"; }\r\n\r\n.fa-arrow-rotate-backward::before {\r\n  content: \"\\f0e2\"; }\r\n\r\n.fa-undo::before {\r\n  content: \"\\f0e2\"; }\r\n\r\n.fa-arrow-rotate-right::before {\r\n  content: \"\\f01e\"; }\r\n\r\n.fa-arrow-right-rotate::before {\r\n  content: \"\\f01e\"; }\r\n\r\n.fa-arrow-rotate-forward::before {\r\n  content: \"\\f01e\"; }\r\n\r\n.fa-redo::before {\r\n  content: \"\\f01e\"; }\r\n\r\n.fa-arrow-trend-down::before {\r\n  content: \"\\e097\"; }\r\n\r\n.fa-arrow-trend-up::before {\r\n  content: \"\\e098\"; }\r\n\r\n.fa-arrow-turn-down::before {\r\n  content: \"\\f149\"; }\r\n\r\n.fa-level-down::before {\r\n  content: \"\\f149\"; }\r\n\r\n.fa-arrow-turn-up::before {\r\n  content: \"\\f148\"; }\r\n\r\n.fa-level-up::before {\r\n  content: \"\\f148\"; }\r\n\r\n.fa-arrow-up::before {\r\n  content: \"\\f062\"; }\r\n\r\n.fa-arrow-up-1-9::before {\r\n  content: \"\\f163\"; }\r\n\r\n.fa-sort-numeric-up::before {\r\n  content: \"\\f163\"; }\r\n\r\n.fa-arrow-up-9-1::before {\r\n  content: \"\\f887\"; }\r\n\r\n.fa-sort-numeric-up-alt::before {\r\n  content: \"\\f887\"; }\r\n\r\n.fa-arrow-up-a-z::before {\r\n  content: \"\\f15e\"; }\r\n\r\n.fa-sort-alpha-up::before {\r\n  content: \"\\f15e\"; }\r\n\r\n.fa-arrow-up-from-bracket::before {\r\n  content: \"\\e09a\"; }\r\n\r\n.fa-arrow-up-from-ground-water::before {\r\n  content: \"\\e4b5\"; }\r\n\r\n.fa-arrow-up-from-water-pump::before {\r\n  content: \"\\e4b6\"; }\r\n\r\n.fa-arrow-up-long::before {\r\n  content: \"\\f176\"; }\r\n\r\n.fa-long-arrow-up::before {\r\n  content: \"\\f176\"; }\r\n\r\n.fa-arrow-up-right-dots::before {\r\n  content: \"\\e4b7\"; }\r\n\r\n.fa-arrow-up-right-from-square::before {\r\n  content: \"\\f08e\"; }\r\n\r\n.fa-external-link::before {\r\n  content: \"\\f08e\"; }\r\n\r\n.fa-arrow-up-short-wide::before {\r\n  content: \"\\f885\"; }\r\n\r\n.fa-sort-amount-up-alt::before {\r\n  content: \"\\f885\"; }\r\n\r\n.fa-arrow-up-wide-short::before {\r\n  content: \"\\f161\"; }\r\n\r\n.fa-sort-amount-up::before {\r\n  content: \"\\f161\"; }\r\n\r\n.fa-arrow-up-z-a::before {\r\n  content: \"\\f882\"; }\r\n\r\n.fa-sort-alpha-up-alt::before {\r\n  content: \"\\f882\"; }\r\n\r\n.fa-arrows-down-to-line::before {\r\n  content: \"\\e4b8\"; }\r\n\r\n.fa-arrows-down-to-people::before {\r\n  content: \"\\e4b9\"; }\r\n\r\n.fa-arrows-left-right::before {\r\n  content: \"\\f07e\"; }\r\n\r\n.fa-arrows-h::before {\r\n  content: \"\\f07e\"; }\r\n\r\n.fa-arrows-left-right-to-line::before {\r\n  content: \"\\e4ba\"; }\r\n\r\n.fa-arrows-rotate::before {\r\n  content: \"\\f021\"; }\r\n\r\n.fa-refresh::before {\r\n  content: \"\\f021\"; }\r\n\r\n.fa-sync::before {\r\n  content: \"\\f021\"; }\r\n\r\n.fa-arrows-spin::before {\r\n  content: \"\\e4bb\"; }\r\n\r\n.fa-arrows-split-up-and-left::before {\r\n  content: \"\\e4bc\"; }\r\n\r\n.fa-arrows-to-circle::before {\r\n  content: \"\\e4bd\"; }\r\n\r\n.fa-arrows-to-dot::before {\r\n  content: \"\\e4be\"; }\r\n\r\n.fa-arrows-to-eye::before {\r\n  content: \"\\e4bf\"; }\r\n\r\n.fa-arrows-turn-right::before {\r\n  content: \"\\e4c0\"; }\r\n\r\n.fa-arrows-turn-to-dots::before {\r\n  content: \"\\e4c1\"; }\r\n\r\n.fa-arrows-up-down::before {\r\n  content: \"\\f07d\"; }\r\n\r\n.fa-arrows-v::before {\r\n  content: \"\\f07d\"; }\r\n\r\n.fa-arrows-up-down-left-right::before {\r\n  content: \"\\f047\"; }\r\n\r\n.fa-arrows::before {\r\n  content: \"\\f047\"; }\r\n\r\n.fa-arrows-up-to-line::before {\r\n  content: \"\\e4c2\"; }\r\n\r\n.fa-asterisk::before {\r\n  content: \"\\2a\"; }\r\n\r\n.fa-at::before {\r\n  content: \"\\40\"; }\r\n\r\n.fa-atom::before {\r\n  content: \"\\f5d2\"; }\r\n\r\n.fa-audio-description::before {\r\n  content: \"\\f29e\"; }\r\n\r\n.fa-austral-sign::before {\r\n  content: \"\\e0a9\"; }\r\n\r\n.fa-award::before {\r\n  content: \"\\f559\"; }\r\n\r\n.fa-b::before {\r\n  content: \"\\42\"; }\r\n\r\n.fa-baby::before {\r\n  content: \"\\f77c\"; }\r\n\r\n.fa-baby-carriage::before {\r\n  content: \"\\f77d\"; }\r\n\r\n.fa-carriage-baby::before {\r\n  content: \"\\f77d\"; }\r\n\r\n.fa-backward::before {\r\n  content: \"\\f04a\"; }\r\n\r\n.fa-backward-fast::before {\r\n  content: \"\\f049\"; }\r\n\r\n.fa-fast-backward::before {\r\n  content: \"\\f049\"; }\r\n\r\n.fa-backward-step::before {\r\n  content: \"\\f048\"; }\r\n\r\n.fa-step-backward::before {\r\n  content: \"\\f048\"; }\r\n\r\n.fa-bacon::before {\r\n  content: \"\\f7e5\"; }\r\n\r\n.fa-bacteria::before {\r\n  content: \"\\e059\"; }\r\n\r\n.fa-bacterium::before {\r\n  content: \"\\e05a\"; }\r\n\r\n.fa-bag-shopping::before {\r\n  content: \"\\f290\"; }\r\n\r\n.fa-shopping-bag::before {\r\n  content: \"\\f290\"; }\r\n\r\n.fa-bahai::before {\r\n  content: \"\\f666\"; }\r\n\r\n.fa-baht-sign::before {\r\n  content: \"\\e0ac\"; }\r\n\r\n.fa-ban::before {\r\n  content: \"\\f05e\"; }\r\n\r\n.fa-cancel::before {\r\n  content: \"\\f05e\"; }\r\n\r\n.fa-ban-smoking::before {\r\n  content: \"\\f54d\"; }\r\n\r\n.fa-smoking-ban::before {\r\n  content: \"\\f54d\"; }\r\n\r\n.fa-bandage::before {\r\n  content: \"\\f462\"; }\r\n\r\n.fa-band-aid::before {\r\n  content: \"\\f462\"; }\r\n\r\n.fa-barcode::before {\r\n  content: \"\\f02a\"; }\r\n\r\n.fa-bars::before {\r\n  content: \"\\f0c9\"; }\r\n\r\n.fa-navicon::before {\r\n  content: \"\\f0c9\"; }\r\n\r\n.fa-bars-progress::before {\r\n  content: \"\\f828\"; }\r\n\r\n.fa-tasks-alt::before {\r\n  content: \"\\f828\"; }\r\n\r\n.fa-bars-staggered::before {\r\n  content: \"\\f550\"; }\r\n\r\n.fa-reorder::before {\r\n  content: \"\\f550\"; }\r\n\r\n.fa-stream::before {\r\n  content: \"\\f550\"; }\r\n\r\n.fa-baseball::before {\r\n  content: \"\\f433\"; }\r\n\r\n.fa-baseball-ball::before {\r\n  content: \"\\f433\"; }\r\n\r\n.fa-baseball-bat-ball::before {\r\n  content: \"\\f432\"; }\r\n\r\n.fa-basket-shopping::before {\r\n  content: \"\\f291\"; }\r\n\r\n.fa-shopping-basket::before {\r\n  content: \"\\f291\"; }\r\n\r\n.fa-basketball::before {\r\n  content: \"\\f434\"; }\r\n\r\n.fa-basketball-ball::before {\r\n  content: \"\\f434\"; }\r\n\r\n.fa-bath::before {\r\n  content: \"\\f2cd\"; }\r\n\r\n.fa-bathtub::before {\r\n  content: \"\\f2cd\"; }\r\n\r\n.fa-battery-empty::before {\r\n  content: \"\\f244\"; }\r\n\r\n.fa-battery-0::before {\r\n  content: \"\\f244\"; }\r\n\r\n.fa-battery-full::before {\r\n  content: \"\\f240\"; }\r\n\r\n.fa-battery::before {\r\n  content: \"\\f240\"; }\r\n\r\n.fa-battery-5::before {\r\n  content: \"\\f240\"; }\r\n\r\n.fa-battery-half::before {\r\n  content: \"\\f242\"; }\r\n\r\n.fa-battery-3::before {\r\n  content: \"\\f242\"; }\r\n\r\n.fa-battery-quarter::before {\r\n  content: \"\\f243\"; }\r\n\r\n.fa-battery-2::before {\r\n  content: \"\\f243\"; }\r\n\r\n.fa-battery-three-quarters::before {\r\n  content: \"\\f241\"; }\r\n\r\n.fa-battery-4::before {\r\n  content: \"\\f241\"; }\r\n\r\n.fa-bed::before {\r\n  content: \"\\f236\"; }\r\n\r\n.fa-bed-pulse::before {\r\n  content: \"\\f487\"; }\r\n\r\n.fa-procedures::before {\r\n  content: \"\\f487\"; }\r\n\r\n.fa-beer-mug-empty::before {\r\n  content: \"\\f0fc\"; }\r\n\r\n.fa-beer::before {\r\n  content: \"\\f0fc\"; }\r\n\r\n.fa-bell::before {\r\n  content: \"\\f0f3\"; }\r\n\r\n.fa-bell-concierge::before {\r\n  content: \"\\f562\"; }\r\n\r\n.fa-concierge-bell::before {\r\n  content: \"\\f562\"; }\r\n\r\n.fa-bell-slash::before {\r\n  content: \"\\f1f6\"; }\r\n\r\n.fa-bezier-curve::before {\r\n  content: \"\\f55b\"; }\r\n\r\n.fa-bicycle::before {\r\n  content: \"\\f206\"; }\r\n\r\n.fa-binoculars::before {\r\n  content: \"\\f1e5\"; }\r\n\r\n.fa-biohazard::before {\r\n  content: \"\\f780\"; }\r\n\r\n.fa-bitcoin-sign::before {\r\n  content: \"\\e0b4\"; }\r\n\r\n.fa-blender::before {\r\n  content: \"\\f517\"; }\r\n\r\n.fa-blender-phone::before {\r\n  content: \"\\f6b6\"; }\r\n\r\n.fa-blog::before {\r\n  content: \"\\f781\"; }\r\n\r\n.fa-bold::before {\r\n  content: \"\\f032\"; }\r\n\r\n.fa-bolt::before {\r\n  content: \"\\f0e7\"; }\r\n\r\n.fa-zap::before {\r\n  content: \"\\f0e7\"; }\r\n\r\n.fa-bolt-lightning::before {\r\n  content: \"\\e0b7\"; }\r\n\r\n.fa-bomb::before {\r\n  content: \"\\f1e2\"; }\r\n\r\n.fa-bone::before {\r\n  content: \"\\f5d7\"; }\r\n\r\n.fa-bong::before {\r\n  content: \"\\f55c\"; }\r\n\r\n.fa-book::before {\r\n  content: \"\\f02d\"; }\r\n\r\n.fa-book-atlas::before {\r\n  content: \"\\f558\"; }\r\n\r\n.fa-atlas::before {\r\n  content: \"\\f558\"; }\r\n\r\n.fa-book-bible::before {\r\n  content: \"\\f647\"; }\r\n\r\n.fa-bible::before {\r\n  content: \"\\f647\"; }\r\n\r\n.fa-book-bookmark::before {\r\n  content: \"\\e0bb\"; }\r\n\r\n.fa-book-journal-whills::before {\r\n  content: \"\\f66a\"; }\r\n\r\n.fa-journal-whills::before {\r\n  content: \"\\f66a\"; }\r\n\r\n.fa-book-medical::before {\r\n  content: \"\\f7e6\"; }\r\n\r\n.fa-book-open::before {\r\n  content: \"\\f518\"; }\r\n\r\n.fa-book-open-reader::before {\r\n  content: \"\\f5da\"; }\r\n\r\n.fa-book-reader::before {\r\n  content: \"\\f5da\"; }\r\n\r\n.fa-book-quran::before {\r\n  content: \"\\f687\"; }\r\n\r\n.fa-quran::before {\r\n  content: \"\\f687\"; }\r\n\r\n.fa-book-skull::before {\r\n  content: \"\\f6b7\"; }\r\n\r\n.fa-book-dead::before {\r\n  content: \"\\f6b7\"; }\r\n\r\n.fa-bookmark::before {\r\n  content: \"\\f02e\"; }\r\n\r\n.fa-border-all::before {\r\n  content: \"\\f84c\"; }\r\n\r\n.fa-border-none::before {\r\n  content: \"\\f850\"; }\r\n\r\n.fa-border-top-left::before {\r\n  content: \"\\f853\"; }\r\n\r\n.fa-border-style::before {\r\n  content: \"\\f853\"; }\r\n\r\n.fa-bore-hole::before {\r\n  content: \"\\e4c3\"; }\r\n\r\n.fa-bottle-droplet::before {\r\n  content: \"\\e4c4\"; }\r\n\r\n.fa-bottle-water::before {\r\n  content: \"\\e4c5\"; }\r\n\r\n.fa-bowl-food::before {\r\n  content: \"\\e4c6\"; }\r\n\r\n.fa-bowl-rice::before {\r\n  content: \"\\e2eb\"; }\r\n\r\n.fa-bowling-ball::before {\r\n  content: \"\\f436\"; }\r\n\r\n.fa-box::before {\r\n  content: \"\\f466\"; }\r\n\r\n.fa-box-archive::before {\r\n  content: \"\\f187\"; }\r\n\r\n.fa-archive::before {\r\n  content: \"\\f187\"; }\r\n\r\n.fa-box-open::before {\r\n  content: \"\\f49e\"; }\r\n\r\n.fa-box-tissue::before {\r\n  content: \"\\e05b\"; }\r\n\r\n.fa-boxes-packing::before {\r\n  content: \"\\e4c7\"; }\r\n\r\n.fa-boxes-stacked::before {\r\n  content: \"\\f468\"; }\r\n\r\n.fa-boxes::before {\r\n  content: \"\\f468\"; }\r\n\r\n.fa-boxes-alt::before {\r\n  content: \"\\f468\"; }\r\n\r\n.fa-braille::before {\r\n  content: \"\\f2a1\"; }\r\n\r\n.fa-brain::before {\r\n  content: \"\\f5dc\"; }\r\n\r\n.fa-brazilian-real-sign::before {\r\n  content: \"\\e46c\"; }\r\n\r\n.fa-bread-slice::before {\r\n  content: \"\\f7ec\"; }\r\n\r\n.fa-bridge::before {\r\n  content: \"\\e4c8\"; }\r\n\r\n.fa-bridge-circle-check::before {\r\n  content: \"\\e4c9\"; }\r\n\r\n.fa-bridge-circle-exclamation::before {\r\n  content: \"\\e4ca\"; }\r\n\r\n.fa-bridge-circle-xmark::before {\r\n  content: \"\\e4cb\"; }\r\n\r\n.fa-bridge-lock::before {\r\n  content: \"\\e4cc\"; }\r\n\r\n.fa-bridge-water::before {\r\n  content: \"\\e4ce\"; }\r\n\r\n.fa-briefcase::before {\r\n  content: \"\\f0b1\"; }\r\n\r\n.fa-briefcase-medical::before {\r\n  content: \"\\f469\"; }\r\n\r\n.fa-broom::before {\r\n  content: \"\\f51a\"; }\r\n\r\n.fa-broom-ball::before {\r\n  content: \"\\f458\"; }\r\n\r\n.fa-quidditch::before {\r\n  content: \"\\f458\"; }\r\n\r\n.fa-quidditch-broom-ball::before {\r\n  content: \"\\f458\"; }\r\n\r\n.fa-brush::before {\r\n  content: \"\\f55d\"; }\r\n\r\n.fa-bucket::before {\r\n  content: \"\\e4cf\"; }\r\n\r\n.fa-bug::before {\r\n  content: \"\\f188\"; }\r\n\r\n.fa-bug-slash::before {\r\n  content: \"\\e490\"; }\r\n\r\n.fa-bugs::before {\r\n  content: \"\\e4d0\"; }\r\n\r\n.fa-building::before {\r\n  content: \"\\f1ad\"; }\r\n\r\n.fa-building-circle-arrow-right::before {\r\n  content: \"\\e4d1\"; }\r\n\r\n.fa-building-circle-check::before {\r\n  content: \"\\e4d2\"; }\r\n\r\n.fa-building-circle-exclamation::before {\r\n  content: \"\\e4d3\"; }\r\n\r\n.fa-building-circle-xmark::before {\r\n  content: \"\\e4d4\"; }\r\n\r\n.fa-building-columns::before {\r\n  content: \"\\f19c\"; }\r\n\r\n.fa-bank::before {\r\n  content: \"\\f19c\"; }\r\n\r\n.fa-institution::before {\r\n  content: \"\\f19c\"; }\r\n\r\n.fa-museum::before {\r\n  content: \"\\f19c\"; }\r\n\r\n.fa-university::before {\r\n  content: \"\\f19c\"; }\r\n\r\n.fa-building-flag::before {\r\n  content: \"\\e4d5\"; }\r\n\r\n.fa-building-lock::before {\r\n  content: \"\\e4d6\"; }\r\n\r\n.fa-building-ngo::before {\r\n  content: \"\\e4d7\"; }\r\n\r\n.fa-building-shield::before {\r\n  content: \"\\e4d8\"; }\r\n\r\n.fa-building-un::before {\r\n  content: \"\\e4d9\"; }\r\n\r\n.fa-building-user::before {\r\n  content: \"\\e4da\"; }\r\n\r\n.fa-building-wheat::before {\r\n  content: \"\\e4db\"; }\r\n\r\n.fa-bullhorn::before {\r\n  content: \"\\f0a1\"; }\r\n\r\n.fa-bullseye::before {\r\n  content: \"\\f140\"; }\r\n\r\n.fa-burger::before {\r\n  content: \"\\f805\"; }\r\n\r\n.fa-hamburger::before {\r\n  content: \"\\f805\"; }\r\n\r\n.fa-burst::before {\r\n  content: \"\\e4dc\"; }\r\n\r\n.fa-bus::before {\r\n  content: \"\\f207\"; }\r\n\r\n.fa-bus-simple::before {\r\n  content: \"\\f55e\"; }\r\n\r\n.fa-bus-alt::before {\r\n  content: \"\\f55e\"; }\r\n\r\n.fa-business-time::before {\r\n  content: \"\\f64a\"; }\r\n\r\n.fa-briefcase-clock::before {\r\n  content: \"\\f64a\"; }\r\n\r\n.fa-c::before {\r\n  content: \"\\43\"; }\r\n\r\n.fa-cake-candles::before {\r\n  content: \"\\f1fd\"; }\r\n\r\n.fa-birthday-cake::before {\r\n  content: \"\\f1fd\"; }\r\n\r\n.fa-cake::before {\r\n  content: \"\\f1fd\"; }\r\n\r\n.fa-calculator::before {\r\n  content: \"\\f1ec\"; }\r\n\r\n.fa-calendar::before {\r\n  content: \"\\f133\"; }\r\n\r\n.fa-calendar-check::before {\r\n  content: \"\\f274\"; }\r\n\r\n.fa-calendar-day::before {\r\n  content: \"\\f783\"; }\r\n\r\n.fa-calendar-days::before {\r\n  content: \"\\f073\"; }\r\n\r\n.fa-calendar-alt::before {\r\n  content: \"\\f073\"; }\r\n\r\n.fa-calendar-minus::before {\r\n  content: \"\\f272\"; }\r\n\r\n.fa-calendar-plus::before {\r\n  content: \"\\f271\"; }\r\n\r\n.fa-calendar-week::before {\r\n  content: \"\\f784\"; }\r\n\r\n.fa-calendar-xmark::before {\r\n  content: \"\\f273\"; }\r\n\r\n.fa-calendar-times::before {\r\n  content: \"\\f273\"; }\r\n\r\n.fa-camera::before {\r\n  content: \"\\f030\"; }\r\n\r\n.fa-camera-alt::before {\r\n  content: \"\\f030\"; }\r\n\r\n.fa-camera-retro::before {\r\n  content: \"\\f083\"; }\r\n\r\n.fa-camera-rotate::before {\r\n  content: \"\\e0d8\"; }\r\n\r\n.fa-campground::before {\r\n  content: \"\\f6bb\"; }\r\n\r\n.fa-candy-cane::before {\r\n  content: \"\\f786\"; }\r\n\r\n.fa-cannabis::before {\r\n  content: \"\\f55f\"; }\r\n\r\n.fa-capsules::before {\r\n  content: \"\\f46b\"; }\r\n\r\n.fa-car::before {\r\n  content: \"\\f1b9\"; }\r\n\r\n.fa-automobile::before {\r\n  content: \"\\f1b9\"; }\r\n\r\n.fa-car-battery::before {\r\n  content: \"\\f5df\"; }\r\n\r\n.fa-battery-car::before {\r\n  content: \"\\f5df\"; }\r\n\r\n.fa-car-burst::before {\r\n  content: \"\\f5e1\"; }\r\n\r\n.fa-car-crash::before {\r\n  content: \"\\f5e1\"; }\r\n\r\n.fa-car-on::before {\r\n  content: \"\\e4dd\"; }\r\n\r\n.fa-car-rear::before {\r\n  content: \"\\f5de\"; }\r\n\r\n.fa-car-alt::before {\r\n  content: \"\\f5de\"; }\r\n\r\n.fa-car-side::before {\r\n  content: \"\\f5e4\"; }\r\n\r\n.fa-car-tunnel::before {\r\n  content: \"\\e4de\"; }\r\n\r\n.fa-caravan::before {\r\n  content: \"\\f8ff\"; }\r\n\r\n.fa-caret-down::before {\r\n  content: \"\\f0d7\"; }\r\n\r\n.fa-caret-left::before {\r\n  content: \"\\f0d9\"; }\r\n\r\n.fa-caret-right::before {\r\n  content: \"\\f0da\"; }\r\n\r\n.fa-caret-up::before {\r\n  content: \"\\f0d8\"; }\r\n\r\n.fa-carrot::before {\r\n  content: \"\\f787\"; }\r\n\r\n.fa-cart-arrow-down::before {\r\n  content: \"\\f218\"; }\r\n\r\n.fa-cart-flatbed::before {\r\n  content: \"\\f474\"; }\r\n\r\n.fa-dolly-flatbed::before {\r\n  content: \"\\f474\"; }\r\n\r\n.fa-cart-flatbed-suitcase::before {\r\n  content: \"\\f59d\"; }\r\n\r\n.fa-luggage-cart::before {\r\n  content: \"\\f59d\"; }\r\n\r\n.fa-cart-plus::before {\r\n  content: \"\\f217\"; }\r\n\r\n.fa-cart-shopping::before {\r\n  content: \"\\f07a\"; }\r\n\r\n.fa-shopping-cart::before {\r\n  content: \"\\f07a\"; }\r\n\r\n.fa-cash-register::before {\r\n  content: \"\\f788\"; }\r\n\r\n.fa-cat::before {\r\n  content: \"\\f6be\"; }\r\n\r\n.fa-cedi-sign::before {\r\n  content: \"\\e0df\"; }\r\n\r\n.fa-cent-sign::before {\r\n  content: \"\\e3f5\"; }\r\n\r\n.fa-certificate::before {\r\n  content: \"\\f0a3\"; }\r\n\r\n.fa-chair::before {\r\n  content: \"\\f6c0\"; }\r\n\r\n.fa-chalkboard::before {\r\n  content: \"\\f51b\"; }\r\n\r\n.fa-blackboard::before {\r\n  content: \"\\f51b\"; }\r\n\r\n.fa-chalkboard-user::before {\r\n  content: \"\\f51c\"; }\r\n\r\n.fa-chalkboard-teacher::before {\r\n  content: \"\\f51c\"; }\r\n\r\n.fa-champagne-glasses::before {\r\n  content: \"\\f79f\"; }\r\n\r\n.fa-glass-cheers::before {\r\n  content: \"\\f79f\"; }\r\n\r\n.fa-charging-station::before {\r\n  content: \"\\f5e7\"; }\r\n\r\n.fa-chart-area::before {\r\n  content: \"\\f1fe\"; }\r\n\r\n.fa-area-chart::before {\r\n  content: \"\\f1fe\"; }\r\n\r\n.fa-chart-bar::before {\r\n  content: \"\\f080\"; }\r\n\r\n.fa-bar-chart::before {\r\n  content: \"\\f080\"; }\r\n\r\n.fa-chart-column::before {\r\n  content: \"\\e0e3\"; }\r\n\r\n.fa-chart-gantt::before {\r\n  content: \"\\e0e4\"; }\r\n\r\n.fa-chart-line::before {\r\n  content: \"\\f201\"; }\r\n\r\n.fa-line-chart::before {\r\n  content: \"\\f201\"; }\r\n\r\n.fa-chart-pie::before {\r\n  content: \"\\f200\"; }\r\n\r\n.fa-pie-chart::before {\r\n  content: \"\\f200\"; }\r\n\r\n.fa-chart-simple::before {\r\n  content: \"\\e473\"; }\r\n\r\n.fa-check::before {\r\n  content: \"\\f00c\"; }\r\n\r\n.fa-check-double::before {\r\n  content: \"\\f560\"; }\r\n\r\n.fa-check-to-slot::before {\r\n  content: \"\\f772\"; }\r\n\r\n.fa-vote-yea::before {\r\n  content: \"\\f772\"; }\r\n\r\n.fa-cheese::before {\r\n  content: \"\\f7ef\"; }\r\n\r\n.fa-chess::before {\r\n  content: \"\\f439\"; }\r\n\r\n.fa-chess-bishop::before {\r\n  content: \"\\f43a\"; }\r\n\r\n.fa-chess-board::before {\r\n  content: \"\\f43c\"; }\r\n\r\n.fa-chess-king::before {\r\n  content: \"\\f43f\"; }\r\n\r\n.fa-chess-knight::before {\r\n  content: \"\\f441\"; }\r\n\r\n.fa-chess-pawn::before {\r\n  content: \"\\f443\"; }\r\n\r\n.fa-chess-queen::before {\r\n  content: \"\\f445\"; }\r\n\r\n.fa-chess-rook::before {\r\n  content: \"\\f447\"; }\r\n\r\n.fa-chevron-down::before {\r\n  content: \"\\f078\"; }\r\n\r\n.fa-chevron-left::before {\r\n  content: \"\\f053\"; }\r\n\r\n.fa-chevron-right::before {\r\n  content: \"\\f054\"; }\r\n\r\n.fa-chevron-up::before {\r\n  content: \"\\f077\"; }\r\n\r\n.fa-child::before {\r\n  content: \"\\f1ae\"; }\r\n\r\n.fa-child-dress::before {\r\n  content: \"\\e59c\"; }\r\n\r\n.fa-child-reaching::before {\r\n  content: \"\\e59d\"; }\r\n\r\n.fa-child-rifle::before {\r\n  content: \"\\e4e0\"; }\r\n\r\n.fa-children::before {\r\n  content: \"\\e4e1\"; }\r\n\r\n.fa-church::before {\r\n  content: \"\\f51d\"; }\r\n\r\n.fa-circle::before {\r\n  content: \"\\f111\"; }\r\n\r\n.fa-circle-arrow-down::before {\r\n  content: \"\\f0ab\"; }\r\n\r\n.fa-arrow-circle-down::before {\r\n  content: \"\\f0ab\"; }\r\n\r\n.fa-circle-arrow-left::before {\r\n  content: \"\\f0a8\"; }\r\n\r\n.fa-arrow-circle-left::before {\r\n  content: \"\\f0a8\"; }\r\n\r\n.fa-circle-arrow-right::before {\r\n  content: \"\\f0a9\"; }\r\n\r\n.fa-arrow-circle-right::before {\r\n  content: \"\\f0a9\"; }\r\n\r\n.fa-circle-arrow-up::before {\r\n  content: \"\\f0aa\"; }\r\n\r\n.fa-arrow-circle-up::before {\r\n  content: \"\\f0aa\"; }\r\n\r\n.fa-circle-check::before {\r\n  content: \"\\f058\"; }\r\n\r\n.fa-check-circle::before {\r\n  content: \"\\f058\"; }\r\n\r\n.fa-circle-chevron-down::before {\r\n  content: \"\\f13a\"; }\r\n\r\n.fa-chevron-circle-down::before {\r\n  content: \"\\f13a\"; }\r\n\r\n.fa-circle-chevron-left::before {\r\n  content: \"\\f137\"; }\r\n\r\n.fa-chevron-circle-left::before {\r\n  content: \"\\f137\"; }\r\n\r\n.fa-circle-chevron-right::before {\r\n  content: \"\\f138\"; }\r\n\r\n.fa-chevron-circle-right::before {\r\n  content: \"\\f138\"; }\r\n\r\n.fa-circle-chevron-up::before {\r\n  content: \"\\f139\"; }\r\n\r\n.fa-chevron-circle-up::before {\r\n  content: \"\\f139\"; }\r\n\r\n.fa-circle-dollar-to-slot::before {\r\n  content: \"\\f4b9\"; }\r\n\r\n.fa-donate::before {\r\n  content: \"\\f4b9\"; }\r\n\r\n.fa-circle-dot::before {\r\n  content: \"\\f192\"; }\r\n\r\n.fa-dot-circle::before {\r\n  content: \"\\f192\"; }\r\n\r\n.fa-circle-down::before {\r\n  content: \"\\f358\"; }\r\n\r\n.fa-arrow-alt-circle-down::before {\r\n  content: \"\\f358\"; }\r\n\r\n.fa-circle-exclamation::before {\r\n  content: \"\\f06a\"; }\r\n\r\n.fa-exclamation-circle::before {\r\n  content: \"\\f06a\"; }\r\n\r\n.fa-circle-h::before {\r\n  content: \"\\f47e\"; }\r\n\r\n.fa-hospital-symbol::before {\r\n  content: \"\\f47e\"; }\r\n\r\n.fa-circle-half-stroke::before {\r\n  content: \"\\f042\"; }\r\n\r\n.fa-adjust::before {\r\n  content: \"\\f042\"; }\r\n\r\n.fa-circle-info::before {\r\n  content: \"\\f05a\"; }\r\n\r\n.fa-info-circle::before {\r\n  content: \"\\f05a\"; }\r\n\r\n.fa-circle-left::before {\r\n  content: \"\\f359\"; }\r\n\r\n.fa-arrow-alt-circle-left::before {\r\n  content: \"\\f359\"; }\r\n\r\n.fa-circle-minus::before {\r\n  content: \"\\f056\"; }\r\n\r\n.fa-minus-circle::before {\r\n  content: \"\\f056\"; }\r\n\r\n.fa-circle-nodes::before {\r\n  content: \"\\e4e2\"; }\r\n\r\n.fa-circle-notch::before {\r\n  content: \"\\f1ce\"; }\r\n\r\n.fa-circle-pause::before {\r\n  content: \"\\f28b\"; }\r\n\r\n.fa-pause-circle::before {\r\n  content: \"\\f28b\"; }\r\n\r\n.fa-circle-play::before {\r\n  content: \"\\f144\"; }\r\n\r\n.fa-play-circle::before {\r\n  content: \"\\f144\"; }\r\n\r\n.fa-circle-plus::before {\r\n  content: \"\\f055\"; }\r\n\r\n.fa-plus-circle::before {\r\n  content: \"\\f055\"; }\r\n\r\n.fa-circle-question::before {\r\n  content: \"\\f059\"; }\r\n\r\n.fa-question-circle::before {\r\n  content: \"\\f059\"; }\r\n\r\n.fa-circle-radiation::before {\r\n  content: \"\\f7ba\"; }\r\n\r\n.fa-radiation-alt::before {\r\n  content: \"\\f7ba\"; }\r\n\r\n.fa-circle-right::before {\r\n  content: \"\\f35a\"; }\r\n\r\n.fa-arrow-alt-circle-right::before {\r\n  content: \"\\f35a\"; }\r\n\r\n.fa-circle-stop::before {\r\n  content: \"\\f28d\"; }\r\n\r\n.fa-stop-circle::before {\r\n  content: \"\\f28d\"; }\r\n\r\n.fa-circle-up::before {\r\n  content: \"\\f35b\"; }\r\n\r\n.fa-arrow-alt-circle-up::before {\r\n  content: \"\\f35b\"; }\r\n\r\n.fa-circle-user::before {\r\n  content: \"\\f2bd\"; }\r\n\r\n.fa-user-circle::before {\r\n  content: \"\\f2bd\"; }\r\n\r\n.fa-circle-xmark::before {\r\n  content: \"\\f057\"; }\r\n\r\n.fa-times-circle::before {\r\n  content: \"\\f057\"; }\r\n\r\n.fa-xmark-circle::before {\r\n  content: \"\\f057\"; }\r\n\r\n.fa-city::before {\r\n  content: \"\\f64f\"; }\r\n\r\n.fa-clapperboard::before {\r\n  content: \"\\e131\"; }\r\n\r\n.fa-clipboard::before {\r\n  content: \"\\f328\"; }\r\n\r\n.fa-clipboard-check::before {\r\n  content: \"\\f46c\"; }\r\n\r\n.fa-clipboard-list::before {\r\n  content: \"\\f46d\"; }\r\n\r\n.fa-clipboard-question::before {\r\n  content: \"\\e4e3\"; }\r\n\r\n.fa-clipboard-user::before {\r\n  content: \"\\f7f3\"; }\r\n\r\n.fa-clock::before {\r\n  content: \"\\f017\"; }\r\n\r\n.fa-clock-four::before {\r\n  content: \"\\f017\"; }\r\n\r\n.fa-clock-rotate-left::before {\r\n  content: \"\\f1da\"; }\r\n\r\n.fa-history::before {\r\n  content: \"\\f1da\"; }\r\n\r\n.fa-clone::before {\r\n  content: \"\\f24d\"; }\r\n\r\n.fa-closed-captioning::before {\r\n  content: \"\\f20a\"; }\r\n\r\n.fa-cloud::before {\r\n  content: \"\\f0c2\"; }\r\n\r\n.fa-cloud-arrow-down::before {\r\n  content: \"\\f0ed\"; }\r\n\r\n.fa-cloud-download::before {\r\n  content: \"\\f0ed\"; }\r\n\r\n.fa-cloud-download-alt::before {\r\n  content: \"\\f0ed\"; }\r\n\r\n.fa-cloud-arrow-up::before {\r\n  content: \"\\f0ee\"; }\r\n\r\n.fa-cloud-upload::before {\r\n  content: \"\\f0ee\"; }\r\n\r\n.fa-cloud-upload-alt::before {\r\n  content: \"\\f0ee\"; }\r\n\r\n.fa-cloud-bolt::before {\r\n  content: \"\\f76c\"; }\r\n\r\n.fa-thunderstorm::before {\r\n  content: \"\\f76c\"; }\r\n\r\n.fa-cloud-meatball::before {\r\n  content: \"\\f73b\"; }\r\n\r\n.fa-cloud-moon::before {\r\n  content: \"\\f6c3\"; }\r\n\r\n.fa-cloud-moon-rain::before {\r\n  content: \"\\f73c\"; }\r\n\r\n.fa-cloud-rain::before {\r\n  content: \"\\f73d\"; }\r\n\r\n.fa-cloud-showers-heavy::before {\r\n  content: \"\\f740\"; }\r\n\r\n.fa-cloud-showers-water::before {\r\n  content: \"\\e4e4\"; }\r\n\r\n.fa-cloud-sun::before {\r\n  content: \"\\f6c4\"; }\r\n\r\n.fa-cloud-sun-rain::before {\r\n  content: \"\\f743\"; }\r\n\r\n.fa-clover::before {\r\n  content: \"\\e139\"; }\r\n\r\n.fa-code::before {\r\n  content: \"\\f121\"; }\r\n\r\n.fa-code-branch::before {\r\n  content: \"\\f126\"; }\r\n\r\n.fa-code-commit::before {\r\n  content: \"\\f386\"; }\r\n\r\n.fa-code-compare::before {\r\n  content: \"\\e13a\"; }\r\n\r\n.fa-code-fork::before {\r\n  content: \"\\e13b\"; }\r\n\r\n.fa-code-merge::before {\r\n  content: \"\\f387\"; }\r\n\r\n.fa-code-pull-request::before {\r\n  content: \"\\e13c\"; }\r\n\r\n.fa-coins::before {\r\n  content: \"\\f51e\"; }\r\n\r\n.fa-colon-sign::before {\r\n  content: \"\\e140\"; }\r\n\r\n.fa-comment::before {\r\n  content: \"\\f075\"; }\r\n\r\n.fa-comment-dollar::before {\r\n  content: \"\\f651\"; }\r\n\r\n.fa-comment-dots::before {\r\n  content: \"\\f4ad\"; }\r\n\r\n.fa-commenting::before {\r\n  content: \"\\f4ad\"; }\r\n\r\n.fa-comment-medical::before {\r\n  content: \"\\f7f5\"; }\r\n\r\n.fa-comment-slash::before {\r\n  content: \"\\f4b3\"; }\r\n\r\n.fa-comment-sms::before {\r\n  content: \"\\f7cd\"; }\r\n\r\n.fa-sms::before {\r\n  content: \"\\f7cd\"; }\r\n\r\n.fa-comments::before {\r\n  content: \"\\f086\"; }\r\n\r\n.fa-comments-dollar::before {\r\n  content: \"\\f653\"; }\r\n\r\n.fa-compact-disc::before {\r\n  content: \"\\f51f\"; }\r\n\r\n.fa-compass::before {\r\n  content: \"\\f14e\"; }\r\n\r\n.fa-compass-drafting::before {\r\n  content: \"\\f568\"; }\r\n\r\n.fa-drafting-compass::before {\r\n  content: \"\\f568\"; }\r\n\r\n.fa-compress::before {\r\n  content: \"\\f066\"; }\r\n\r\n.fa-computer::before {\r\n  content: \"\\e4e5\"; }\r\n\r\n.fa-computer-mouse::before {\r\n  content: \"\\f8cc\"; }\r\n\r\n.fa-mouse::before {\r\n  content: \"\\f8cc\"; }\r\n\r\n.fa-cookie::before {\r\n  content: \"\\f563\"; }\r\n\r\n.fa-cookie-bite::before {\r\n  content: \"\\f564\"; }\r\n\r\n.fa-copy::before {\r\n  content: \"\\f0c5\"; }\r\n\r\n.fa-copyright::before {\r\n  content: \"\\f1f9\"; }\r\n\r\n.fa-couch::before {\r\n  content: \"\\f4b8\"; }\r\n\r\n.fa-cow::before {\r\n  content: \"\\f6c8\"; }\r\n\r\n.fa-credit-card::before {\r\n  content: \"\\f09d\"; }\r\n\r\n.fa-credit-card-alt::before {\r\n  content: \"\\f09d\"; }\r\n\r\n.fa-crop::before {\r\n  content: \"\\f125\"; }\r\n\r\n.fa-crop-simple::before {\r\n  content: \"\\f565\"; }\r\n\r\n.fa-crop-alt::before {\r\n  content: \"\\f565\"; }\r\n\r\n.fa-cross::before {\r\n  content: \"\\f654\"; }\r\n\r\n.fa-crosshairs::before {\r\n  content: \"\\f05b\"; }\r\n\r\n.fa-crow::before {\r\n  content: \"\\f520\"; }\r\n\r\n.fa-crown::before {\r\n  content: \"\\f521\"; }\r\n\r\n.fa-crutch::before {\r\n  content: \"\\f7f7\"; }\r\n\r\n.fa-cruzeiro-sign::before {\r\n  content: \"\\e152\"; }\r\n\r\n.fa-cube::before {\r\n  content: \"\\f1b2\"; }\r\n\r\n.fa-cubes::before {\r\n  content: \"\\f1b3\"; }\r\n\r\n.fa-cubes-stacked::before {\r\n  content: \"\\e4e6\"; }\r\n\r\n.fa-d::before {\r\n  content: \"\\44\"; }\r\n\r\n.fa-database::before {\r\n  content: \"\\f1c0\"; }\r\n\r\n.fa-delete-left::before {\r\n  content: \"\\f55a\"; }\r\n\r\n.fa-backspace::before {\r\n  content: \"\\f55a\"; }\r\n\r\n.fa-democrat::before {\r\n  content: \"\\f747\"; }\r\n\r\n.fa-desktop::before {\r\n  content: \"\\f390\"; }\r\n\r\n.fa-desktop-alt::before {\r\n  content: \"\\f390\"; }\r\n\r\n.fa-dharmachakra::before {\r\n  content: \"\\f655\"; }\r\n\r\n.fa-diagram-next::before {\r\n  content: \"\\e476\"; }\r\n\r\n.fa-diagram-predecessor::before {\r\n  content: \"\\e477\"; }\r\n\r\n.fa-diagram-project::before {\r\n  content: \"\\f542\"; }\r\n\r\n.fa-project-diagram::before {\r\n  content: \"\\f542\"; }\r\n\r\n.fa-diagram-successor::before {\r\n  content: \"\\e47a\"; }\r\n\r\n.fa-diamond::before {\r\n  content: \"\\f219\"; }\r\n\r\n.fa-diamond-turn-right::before {\r\n  content: \"\\f5eb\"; }\r\n\r\n.fa-directions::before {\r\n  content: \"\\f5eb\"; }\r\n\r\n.fa-dice::before {\r\n  content: \"\\f522\"; }\r\n\r\n.fa-dice-d20::before {\r\n  content: \"\\f6cf\"; }\r\n\r\n.fa-dice-d6::before {\r\n  content: \"\\f6d1\"; }\r\n\r\n.fa-dice-five::before {\r\n  content: \"\\f523\"; }\r\n\r\n.fa-dice-four::before {\r\n  content: \"\\f524\"; }\r\n\r\n.fa-dice-one::before {\r\n  content: \"\\f525\"; }\r\n\r\n.fa-dice-six::before {\r\n  content: \"\\f526\"; }\r\n\r\n.fa-dice-three::before {\r\n  content: \"\\f527\"; }\r\n\r\n.fa-dice-two::before {\r\n  content: \"\\f528\"; }\r\n\r\n.fa-disease::before {\r\n  content: \"\\f7fa\"; }\r\n\r\n.fa-display::before {\r\n  content: \"\\e163\"; }\r\n\r\n.fa-divide::before {\r\n  content: \"\\f529\"; }\r\n\r\n.fa-dna::before {\r\n  content: \"\\f471\"; }\r\n\r\n.fa-dog::before {\r\n  content: \"\\f6d3\"; }\r\n\r\n.fa-dollar-sign::before {\r\n  content: \"\\24\"; }\r\n\r\n.fa-dollar::before {\r\n  content: \"\\24\"; }\r\n\r\n.fa-usd::before {\r\n  content: \"\\24\"; }\r\n\r\n.fa-dolly::before {\r\n  content: \"\\f472\"; }\r\n\r\n.fa-dolly-box::before {\r\n  content: \"\\f472\"; }\r\n\r\n.fa-dong-sign::before {\r\n  content: \"\\e169\"; }\r\n\r\n.fa-door-closed::before {\r\n  content: \"\\f52a\"; }\r\n\r\n.fa-door-open::before {\r\n  content: \"\\f52b\"; }\r\n\r\n.fa-dove::before {\r\n  content: \"\\f4ba\"; }\r\n\r\n.fa-down-left-and-up-right-to-center::before {\r\n  content: \"\\f422\"; }\r\n\r\n.fa-compress-alt::before {\r\n  content: \"\\f422\"; }\r\n\r\n.fa-down-long::before {\r\n  content: \"\\f309\"; }\r\n\r\n.fa-long-arrow-alt-down::before {\r\n  content: \"\\f309\"; }\r\n\r\n.fa-download::before {\r\n  content: \"\\f019\"; }\r\n\r\n.fa-dragon::before {\r\n  content: \"\\f6d5\"; }\r\n\r\n.fa-draw-polygon::before {\r\n  content: \"\\f5ee\"; }\r\n\r\n.fa-droplet::before {\r\n  content: \"\\f043\"; }\r\n\r\n.fa-tint::before {\r\n  content: \"\\f043\"; }\r\n\r\n.fa-droplet-slash::before {\r\n  content: \"\\f5c7\"; }\r\n\r\n.fa-tint-slash::before {\r\n  content: \"\\f5c7\"; }\r\n\r\n.fa-drum::before {\r\n  content: \"\\f569\"; }\r\n\r\n.fa-drum-steelpan::before {\r\n  content: \"\\f56a\"; }\r\n\r\n.fa-drumstick-bite::before {\r\n  content: \"\\f6d7\"; }\r\n\r\n.fa-dumbbell::before {\r\n  content: \"\\f44b\"; }\r\n\r\n.fa-dumpster::before {\r\n  content: \"\\f793\"; }\r\n\r\n.fa-dumpster-fire::before {\r\n  content: \"\\f794\"; }\r\n\r\n.fa-dungeon::before {\r\n  content: \"\\f6d9\"; }\r\n\r\n.fa-e::before {\r\n  content: \"\\45\"; }\r\n\r\n.fa-ear-deaf::before {\r\n  content: \"\\f2a4\"; }\r\n\r\n.fa-deaf::before {\r\n  content: \"\\f2a4\"; }\r\n\r\n.fa-deafness::before {\r\n  content: \"\\f2a4\"; }\r\n\r\n.fa-hard-of-hearing::before {\r\n  content: \"\\f2a4\"; }\r\n\r\n.fa-ear-listen::before {\r\n  content: \"\\f2a2\"; }\r\n\r\n.fa-assistive-listening-systems::before {\r\n  content: \"\\f2a2\"; }\r\n\r\n.fa-earth-africa::before {\r\n  content: \"\\f57c\"; }\r\n\r\n.fa-globe-africa::before {\r\n  content: \"\\f57c\"; }\r\n\r\n.fa-earth-americas::before {\r\n  content: \"\\f57d\"; }\r\n\r\n.fa-earth::before {\r\n  content: \"\\f57d\"; }\r\n\r\n.fa-earth-america::before {\r\n  content: \"\\f57d\"; }\r\n\r\n.fa-globe-americas::before {\r\n  content: \"\\f57d\"; }\r\n\r\n.fa-earth-asia::before {\r\n  content: \"\\f57e\"; }\r\n\r\n.fa-globe-asia::before {\r\n  content: \"\\f57e\"; }\r\n\r\n.fa-earth-europe::before {\r\n  content: \"\\f7a2\"; }\r\n\r\n.fa-globe-europe::before {\r\n  content: \"\\f7a2\"; }\r\n\r\n.fa-earth-oceania::before {\r\n  content: \"\\e47b\"; }\r\n\r\n.fa-globe-oceania::before {\r\n  content: \"\\e47b\"; }\r\n\r\n.fa-egg::before {\r\n  content: \"\\f7fb\"; }\r\n\r\n.fa-eject::before {\r\n  content: \"\\f052\"; }\r\n\r\n.fa-elevator::before {\r\n  content: \"\\e16d\"; }\r\n\r\n.fa-ellipsis::before {\r\n  content: \"\\f141\"; }\r\n\r\n.fa-ellipsis-h::before {\r\n  content: \"\\f141\"; }\r\n\r\n.fa-ellipsis-vertical::before {\r\n  content: \"\\f142\"; }\r\n\r\n.fa-ellipsis-v::before {\r\n  content: \"\\f142\"; }\r\n\r\n.fa-envelope::before {\r\n  content: \"\\f0e0\"; }\r\n\r\n.fa-envelope-circle-check::before {\r\n  content: \"\\e4e8\"; }\r\n\r\n.fa-envelope-open::before {\r\n  content: \"\\f2b6\"; }\r\n\r\n.fa-envelope-open-text::before {\r\n  content: \"\\f658\"; }\r\n\r\n.fa-envelopes-bulk::before {\r\n  content: \"\\f674\"; }\r\n\r\n.fa-mail-bulk::before {\r\n  content: \"\\f674\"; }\r\n\r\n.fa-equals::before {\r\n  content: \"\\3d\"; }\r\n\r\n.fa-eraser::before {\r\n  content: \"\\f12d\"; }\r\n\r\n.fa-ethernet::before {\r\n  content: \"\\f796\"; }\r\n\r\n.fa-euro-sign::before {\r\n  content: \"\\f153\"; }\r\n\r\n.fa-eur::before {\r\n  content: \"\\f153\"; }\r\n\r\n.fa-euro::before {\r\n  content: \"\\f153\"; }\r\n\r\n.fa-exclamation::before {\r\n  content: \"\\21\"; }\r\n\r\n.fa-expand::before {\r\n  content: \"\\f065\"; }\r\n\r\n.fa-explosion::before {\r\n  content: \"\\e4e9\"; }\r\n\r\n.fa-eye::before {\r\n  content: \"\\f06e\"; }\r\n\r\n.fa-eye-dropper::before {\r\n  content: \"\\f1fb\"; }\r\n\r\n.fa-eye-dropper-empty::before {\r\n  content: \"\\f1fb\"; }\r\n\r\n.fa-eyedropper::before {\r\n  content: \"\\f1fb\"; }\r\n\r\n.fa-eye-low-vision::before {\r\n  content: \"\\f2a8\"; }\r\n\r\n.fa-low-vision::before {\r\n  content: \"\\f2a8\"; }\r\n\r\n.fa-eye-slash::before {\r\n  content: \"\\f070\"; }\r\n\r\n.fa-f::before {\r\n  content: \"\\46\"; }\r\n\r\n.fa-face-angry::before {\r\n  content: \"\\f556\"; }\r\n\r\n.fa-angry::before {\r\n  content: \"\\f556\"; }\r\n\r\n.fa-face-dizzy::before {\r\n  content: \"\\f567\"; }\r\n\r\n.fa-dizzy::before {\r\n  content: \"\\f567\"; }\r\n\r\n.fa-face-flushed::before {\r\n  content: \"\\f579\"; }\r\n\r\n.fa-flushed::before {\r\n  content: \"\\f579\"; }\r\n\r\n.fa-face-frown::before {\r\n  content: \"\\f119\"; }\r\n\r\n.fa-frown::before {\r\n  content: \"\\f119\"; }\r\n\r\n.fa-face-frown-open::before {\r\n  content: \"\\f57a\"; }\r\n\r\n.fa-frown-open::before {\r\n  content: \"\\f57a\"; }\r\n\r\n.fa-face-grimace::before {\r\n  content: \"\\f57f\"; }\r\n\r\n.fa-grimace::before {\r\n  content: \"\\f57f\"; }\r\n\r\n.fa-face-grin::before {\r\n  content: \"\\f580\"; }\r\n\r\n.fa-grin::before {\r\n  content: \"\\f580\"; }\r\n\r\n.fa-face-grin-beam::before {\r\n  content: \"\\f582\"; }\r\n\r\n.fa-grin-beam::before {\r\n  content: \"\\f582\"; }\r\n\r\n.fa-face-grin-beam-sweat::before {\r\n  content: \"\\f583\"; }\r\n\r\n.fa-grin-beam-sweat::before {\r\n  content: \"\\f583\"; }\r\n\r\n.fa-face-grin-hearts::before {\r\n  content: \"\\f584\"; }\r\n\r\n.fa-grin-hearts::before {\r\n  content: \"\\f584\"; }\r\n\r\n.fa-face-grin-squint::before {\r\n  content: \"\\f585\"; }\r\n\r\n.fa-grin-squint::before {\r\n  content: \"\\f585\"; }\r\n\r\n.fa-face-grin-squint-tears::before {\r\n  content: \"\\f586\"; }\r\n\r\n.fa-grin-squint-tears::before {\r\n  content: \"\\f586\"; }\r\n\r\n.fa-face-grin-stars::before {\r\n  content: \"\\f587\"; }\r\n\r\n.fa-grin-stars::before {\r\n  content: \"\\f587\"; }\r\n\r\n.fa-face-grin-tears::before {\r\n  content: \"\\f588\"; }\r\n\r\n.fa-grin-tears::before {\r\n  content: \"\\f588\"; }\r\n\r\n.fa-face-grin-tongue::before {\r\n  content: \"\\f589\"; }\r\n\r\n.fa-grin-tongue::before {\r\n  content: \"\\f589\"; }\r\n\r\n.fa-face-grin-tongue-squint::before {\r\n  content: \"\\f58a\"; }\r\n\r\n.fa-grin-tongue-squint::before {\r\n  content: \"\\f58a\"; }\r\n\r\n.fa-face-grin-tongue-wink::before {\r\n  content: \"\\f58b\"; }\r\n\r\n.fa-grin-tongue-wink::before {\r\n  content: \"\\f58b\"; }\r\n\r\n.fa-face-grin-wide::before {\r\n  content: \"\\f581\"; }\r\n\r\n.fa-grin-alt::before {\r\n  content: \"\\f581\"; }\r\n\r\n.fa-face-grin-wink::before {\r\n  content: \"\\f58c\"; }\r\n\r\n.fa-grin-wink::before {\r\n  content: \"\\f58c\"; }\r\n\r\n.fa-face-kiss::before {\r\n  content: \"\\f596\"; }\r\n\r\n.fa-kiss::before {\r\n  content: \"\\f596\"; }\r\n\r\n.fa-face-kiss-beam::before {\r\n  content: \"\\f597\"; }\r\n\r\n.fa-kiss-beam::before {\r\n  content: \"\\f597\"; }\r\n\r\n.fa-face-kiss-wink-heart::before {\r\n  content: \"\\f598\"; }\r\n\r\n.fa-kiss-wink-heart::before {\r\n  content: \"\\f598\"; }\r\n\r\n.fa-face-laugh::before {\r\n  content: \"\\f599\"; }\r\n\r\n.fa-laugh::before {\r\n  content: \"\\f599\"; }\r\n\r\n.fa-face-laugh-beam::before {\r\n  content: \"\\f59a\"; }\r\n\r\n.fa-laugh-beam::before {\r\n  content: \"\\f59a\"; }\r\n\r\n.fa-face-laugh-squint::before {\r\n  content: \"\\f59b\"; }\r\n\r\n.fa-laugh-squint::before {\r\n  content: \"\\f59b\"; }\r\n\r\n.fa-face-laugh-wink::before {\r\n  content: \"\\f59c\"; }\r\n\r\n.fa-laugh-wink::before {\r\n  content: \"\\f59c\"; }\r\n\r\n.fa-face-meh::before {\r\n  content: \"\\f11a\"; }\r\n\r\n.fa-meh::before {\r\n  content: \"\\f11a\"; }\r\n\r\n.fa-face-meh-blank::before {\r\n  content: \"\\f5a4\"; }\r\n\r\n.fa-meh-blank::before {\r\n  content: \"\\f5a4\"; }\r\n\r\n.fa-face-rolling-eyes::before {\r\n  content: \"\\f5a5\"; }\r\n\r\n.fa-meh-rolling-eyes::before {\r\n  content: \"\\f5a5\"; }\r\n\r\n.fa-face-sad-cry::before {\r\n  content: \"\\f5b3\"; }\r\n\r\n.fa-sad-cry::before {\r\n  content: \"\\f5b3\"; }\r\n\r\n.fa-face-sad-tear::before {\r\n  content: \"\\f5b4\"; }\r\n\r\n.fa-sad-tear::before {\r\n  content: \"\\f5b4\"; }\r\n\r\n.fa-face-smile::before {\r\n  content: \"\\f118\"; }\r\n\r\n.fa-smile::before {\r\n  content: \"\\f118\"; }\r\n\r\n.fa-face-smile-beam::before {\r\n  content: \"\\f5b8\"; }\r\n\r\n.fa-smile-beam::before {\r\n  content: \"\\f5b8\"; }\r\n\r\n.fa-face-smile-wink::before {\r\n  content: \"\\f4da\"; }\r\n\r\n.fa-smile-wink::before {\r\n  content: \"\\f4da\"; }\r\n\r\n.fa-face-surprise::before {\r\n  content: \"\\f5c2\"; }\r\n\r\n.fa-surprise::before {\r\n  content: \"\\f5c2\"; }\r\n\r\n.fa-face-tired::before {\r\n  content: \"\\f5c8\"; }\r\n\r\n.fa-tired::before {\r\n  content: \"\\f5c8\"; }\r\n\r\n.fa-fan::before {\r\n  content: \"\\f863\"; }\r\n\r\n.fa-faucet::before {\r\n  content: \"\\e005\"; }\r\n\r\n.fa-faucet-drip::before {\r\n  content: \"\\e006\"; }\r\n\r\n.fa-fax::before {\r\n  content: \"\\f1ac\"; }\r\n\r\n.fa-feather::before {\r\n  content: \"\\f52d\"; }\r\n\r\n.fa-feather-pointed::before {\r\n  content: \"\\f56b\"; }\r\n\r\n.fa-feather-alt::before {\r\n  content: \"\\f56b\"; }\r\n\r\n.fa-ferry::before {\r\n  content: \"\\e4ea\"; }\r\n\r\n.fa-file::before {\r\n  content: \"\\f15b\"; }\r\n\r\n.fa-file-arrow-down::before {\r\n  content: \"\\f56d\"; }\r\n\r\n.fa-file-download::before {\r\n  content: \"\\f56d\"; }\r\n\r\n.fa-file-arrow-up::before {\r\n  content: \"\\f574\"; }\r\n\r\n.fa-file-upload::before {\r\n  content: \"\\f574\"; }\r\n\r\n.fa-file-audio::before {\r\n  content: \"\\f1c7\"; }\r\n\r\n.fa-file-circle-check::before {\r\n  content: \"\\e493\"; }\r\n\r\n.fa-file-circle-exclamation::before {\r\n  content: \"\\e4eb\"; }\r\n\r\n.fa-file-circle-minus::before {\r\n  content: \"\\e4ed\"; }\r\n\r\n.fa-file-circle-plus::before {\r\n  content: \"\\e4ee\"; }\r\n\r\n.fa-file-circle-question::before {\r\n  content: \"\\e4ef\"; }\r\n\r\n.fa-file-circle-xmark::before {\r\n  content: \"\\e494\"; }\r\n\r\n.fa-file-code::before {\r\n  content: \"\\f1c9\"; }\r\n\r\n.fa-file-contract::before {\r\n  content: \"\\f56c\"; }\r\n\r\n.fa-file-csv::before {\r\n  content: \"\\f6dd\"; }\r\n\r\n.fa-file-excel::before {\r\n  content: \"\\f1c3\"; }\r\n\r\n.fa-file-export::before {\r\n  content: \"\\f56e\"; }\r\n\r\n.fa-arrow-right-from-file::before {\r\n  content: \"\\f56e\"; }\r\n\r\n.fa-file-image::before {\r\n  content: \"\\f1c5\"; }\r\n\r\n.fa-file-import::before {\r\n  content: \"\\f56f\"; }\r\n\r\n.fa-arrow-right-to-file::before {\r\n  content: \"\\f56f\"; }\r\n\r\n.fa-file-invoice::before {\r\n  content: \"\\f570\"; }\r\n\r\n.fa-file-invoice-dollar::before {\r\n  content: \"\\f571\"; }\r\n\r\n.fa-file-lines::before {\r\n  content: \"\\f15c\"; }\r\n\r\n.fa-file-alt::before {\r\n  content: \"\\f15c\"; }\r\n\r\n.fa-file-text::before {\r\n  content: \"\\f15c\"; }\r\n\r\n.fa-file-medical::before {\r\n  content: \"\\f477\"; }\r\n\r\n.fa-file-pdf::before {\r\n  content: \"\\f1c1\"; }\r\n\r\n.fa-file-pen::before {\r\n  content: \"\\f31c\"; }\r\n\r\n.fa-file-edit::before {\r\n  content: \"\\f31c\"; }\r\n\r\n.fa-file-powerpoint::before {\r\n  content: \"\\f1c4\"; }\r\n\r\n.fa-file-prescription::before {\r\n  content: \"\\f572\"; }\r\n\r\n.fa-file-shield::before {\r\n  content: \"\\e4f0\"; }\r\n\r\n.fa-file-signature::before {\r\n  content: \"\\f573\"; }\r\n\r\n.fa-file-video::before {\r\n  content: \"\\f1c8\"; }\r\n\r\n.fa-file-waveform::before {\r\n  content: \"\\f478\"; }\r\n\r\n.fa-file-medical-alt::before {\r\n  content: \"\\f478\"; }\r\n\r\n.fa-file-word::before {\r\n  content: \"\\f1c2\"; }\r\n\r\n.fa-file-zipper::before {\r\n  content: \"\\f1c6\"; }\r\n\r\n.fa-file-archive::before {\r\n  content: \"\\f1c6\"; }\r\n\r\n.fa-fill::before {\r\n  content: \"\\f575\"; }\r\n\r\n.fa-fill-drip::before {\r\n  content: \"\\f576\"; }\r\n\r\n.fa-film::before {\r\n  content: \"\\f008\"; }\r\n\r\n.fa-filter::before {\r\n  content: \"\\f0b0\"; }\r\n\r\n.fa-filter-circle-dollar::before {\r\n  content: \"\\f662\"; }\r\n\r\n.fa-funnel-dollar::before {\r\n  content: \"\\f662\"; }\r\n\r\n.fa-filter-circle-xmark::before {\r\n  content: \"\\e17b\"; }\r\n\r\n.fa-fingerprint::before {\r\n  content: \"\\f577\"; }\r\n\r\n.fa-fire::before {\r\n  content: \"\\f06d\"; }\r\n\r\n.fa-fire-burner::before {\r\n  content: \"\\e4f1\"; }\r\n\r\n.fa-fire-extinguisher::before {\r\n  content: \"\\f134\"; }\r\n\r\n.fa-fire-flame-curved::before {\r\n  content: \"\\f7e4\"; }\r\n\r\n.fa-fire-alt::before {\r\n  content: \"\\f7e4\"; }\r\n\r\n.fa-fire-flame-simple::before {\r\n  content: \"\\f46a\"; }\r\n\r\n.fa-burn::before {\r\n  content: \"\\f46a\"; }\r\n\r\n.fa-fish::before {\r\n  content: \"\\f578\"; }\r\n\r\n.fa-fish-fins::before {\r\n  content: \"\\e4f2\"; }\r\n\r\n.fa-flag::before {\r\n  content: \"\\f024\"; }\r\n\r\n.fa-flag-checkered::before {\r\n  content: \"\\f11e\"; }\r\n\r\n.fa-flag-usa::before {\r\n  content: \"\\f74d\"; }\r\n\r\n.fa-flask::before {\r\n  content: \"\\f0c3\"; }\r\n\r\n.fa-flask-vial::before {\r\n  content: \"\\e4f3\"; }\r\n\r\n.fa-floppy-disk::before {\r\n  content: \"\\f0c7\"; }\r\n\r\n.fa-save::before {\r\n  content: \"\\f0c7\"; }\r\n\r\n.fa-florin-sign::before {\r\n  content: \"\\e184\"; }\r\n\r\n.fa-folder::before {\r\n  content: \"\\f07b\"; }\r\n\r\n.fa-folder-blank::before {\r\n  content: \"\\f07b\"; }\r\n\r\n.fa-folder-closed::before {\r\n  content: \"\\e185\"; }\r\n\r\n.fa-folder-minus::before {\r\n  content: \"\\f65d\"; }\r\n\r\n.fa-folder-open::before {\r\n  content: \"\\f07c\"; }\r\n\r\n.fa-folder-plus::before {\r\n  content: \"\\f65e\"; }\r\n\r\n.fa-folder-tree::before {\r\n  content: \"\\f802\"; }\r\n\r\n.fa-font::before {\r\n  content: \"\\f031\"; }\r\n\r\n.fa-football::before {\r\n  content: \"\\f44e\"; }\r\n\r\n.fa-football-ball::before {\r\n  content: \"\\f44e\"; }\r\n\r\n.fa-forward::before {\r\n  content: \"\\f04e\"; }\r\n\r\n.fa-forward-fast::before {\r\n  content: \"\\f050\"; }\r\n\r\n.fa-fast-forward::before {\r\n  content: \"\\f050\"; }\r\n\r\n.fa-forward-step::before {\r\n  content: \"\\f051\"; }\r\n\r\n.fa-step-forward::before {\r\n  content: \"\\f051\"; }\r\n\r\n.fa-franc-sign::before {\r\n  content: \"\\e18f\"; }\r\n\r\n.fa-frog::before {\r\n  content: \"\\f52e\"; }\r\n\r\n.fa-futbol::before {\r\n  content: \"\\f1e3\"; }\r\n\r\n.fa-futbol-ball::before {\r\n  content: \"\\f1e3\"; }\r\n\r\n.fa-soccer-ball::before {\r\n  content: \"\\f1e3\"; }\r\n\r\n.fa-g::before {\r\n  content: \"\\47\"; }\r\n\r\n.fa-gamepad::before {\r\n  content: \"\\f11b\"; }\r\n\r\n.fa-gas-pump::before {\r\n  content: \"\\f52f\"; }\r\n\r\n.fa-gauge::before {\r\n  content: \"\\f624\"; }\r\n\r\n.fa-dashboard::before {\r\n  content: \"\\f624\"; }\r\n\r\n.fa-gauge-med::before {\r\n  content: \"\\f624\"; }\r\n\r\n.fa-tachometer-alt-average::before {\r\n  content: \"\\f624\"; }\r\n\r\n.fa-gauge-high::before {\r\n  content: \"\\f625\"; }\r\n\r\n.fa-tachometer-alt::before {\r\n  content: \"\\f625\"; }\r\n\r\n.fa-tachometer-alt-fast::before {\r\n  content: \"\\f625\"; }\r\n\r\n.fa-gauge-simple::before {\r\n  content: \"\\f629\"; }\r\n\r\n.fa-gauge-simple-med::before {\r\n  content: \"\\f629\"; }\r\n\r\n.fa-tachometer-average::before {\r\n  content: \"\\f629\"; }\r\n\r\n.fa-gauge-simple-high::before {\r\n  content: \"\\f62a\"; }\r\n\r\n.fa-tachometer::before {\r\n  content: \"\\f62a\"; }\r\n\r\n.fa-tachometer-fast::before {\r\n  content: \"\\f62a\"; }\r\n\r\n.fa-gavel::before {\r\n  content: \"\\f0e3\"; }\r\n\r\n.fa-legal::before {\r\n  content: \"\\f0e3\"; }\r\n\r\n.fa-gear::before {\r\n  content: \"\\f013\"; }\r\n\r\n.fa-cog::before {\r\n  content: \"\\f013\"; }\r\n\r\n.fa-gears::before {\r\n  content: \"\\f085\"; }\r\n\r\n.fa-cogs::before {\r\n  content: \"\\f085\"; }\r\n\r\n.fa-gem::before {\r\n  content: \"\\f3a5\"; }\r\n\r\n.fa-genderless::before {\r\n  content: \"\\f22d\"; }\r\n\r\n.fa-ghost::before {\r\n  content: \"\\f6e2\"; }\r\n\r\n.fa-gift::before {\r\n  content: \"\\f06b\"; }\r\n\r\n.fa-gifts::before {\r\n  content: \"\\f79c\"; }\r\n\r\n.fa-glass-water::before {\r\n  content: \"\\e4f4\"; }\r\n\r\n.fa-glass-water-droplet::before {\r\n  content: \"\\e4f5\"; }\r\n\r\n.fa-glasses::before {\r\n  content: \"\\f530\"; }\r\n\r\n.fa-globe::before {\r\n  content: \"\\f0ac\"; }\r\n\r\n.fa-golf-ball-tee::before {\r\n  content: \"\\f450\"; }\r\n\r\n.fa-golf-ball::before {\r\n  content: \"\\f450\"; }\r\n\r\n.fa-gopuram::before {\r\n  content: \"\\f664\"; }\r\n\r\n.fa-graduation-cap::before {\r\n  content: \"\\f19d\"; }\r\n\r\n.fa-mortar-board::before {\r\n  content: \"\\f19d\"; }\r\n\r\n.fa-greater-than::before {\r\n  content: \"\\3e\"; }\r\n\r\n.fa-greater-than-equal::before {\r\n  content: \"\\f532\"; }\r\n\r\n.fa-grip::before {\r\n  content: \"\\f58d\"; }\r\n\r\n.fa-grip-horizontal::before {\r\n  content: \"\\f58d\"; }\r\n\r\n.fa-grip-lines::before {\r\n  content: \"\\f7a4\"; }\r\n\r\n.fa-grip-lines-vertical::before {\r\n  content: \"\\f7a5\"; }\r\n\r\n.fa-grip-vertical::before {\r\n  content: \"\\f58e\"; }\r\n\r\n.fa-group-arrows-rotate::before {\r\n  content: \"\\e4f6\"; }\r\n\r\n.fa-guarani-sign::before {\r\n  content: \"\\e19a\"; }\r\n\r\n.fa-guitar::before {\r\n  content: \"\\f7a6\"; }\r\n\r\n.fa-gun::before {\r\n  content: \"\\e19b\"; }\r\n\r\n.fa-h::before {\r\n  content: \"\\48\"; }\r\n\r\n.fa-hammer::before {\r\n  content: \"\\f6e3\"; }\r\n\r\n.fa-hamsa::before {\r\n  content: \"\\f665\"; }\r\n\r\n.fa-hand::before {\r\n  content: \"\\f256\"; }\r\n\r\n.fa-hand-paper::before {\r\n  content: \"\\f256\"; }\r\n\r\n.fa-hand-back-fist::before {\r\n  content: \"\\f255\"; }\r\n\r\n.fa-hand-rock::before {\r\n  content: \"\\f255\"; }\r\n\r\n.fa-hand-dots::before {\r\n  content: \"\\f461\"; }\r\n\r\n.fa-allergies::before {\r\n  content: \"\\f461\"; }\r\n\r\n.fa-hand-fist::before {\r\n  content: \"\\f6de\"; }\r\n\r\n.fa-fist-raised::before {\r\n  content: \"\\f6de\"; }\r\n\r\n.fa-hand-holding::before {\r\n  content: \"\\f4bd\"; }\r\n\r\n.fa-hand-holding-dollar::before {\r\n  content: \"\\f4c0\"; }\r\n\r\n.fa-hand-holding-usd::before {\r\n  content: \"\\f4c0\"; }\r\n\r\n.fa-hand-holding-droplet::before {\r\n  content: \"\\f4c1\"; }\r\n\r\n.fa-hand-holding-water::before {\r\n  content: \"\\f4c1\"; }\r\n\r\n.fa-hand-holding-hand::before {\r\n  content: \"\\e4f7\"; }\r\n\r\n.fa-hand-holding-heart::before {\r\n  content: \"\\f4be\"; }\r\n\r\n.fa-hand-holding-medical::before {\r\n  content: \"\\e05c\"; }\r\n\r\n.fa-hand-lizard::before {\r\n  content: \"\\f258\"; }\r\n\r\n.fa-hand-middle-finger::before {\r\n  content: \"\\f806\"; }\r\n\r\n.fa-hand-peace::before {\r\n  content: \"\\f25b\"; }\r\n\r\n.fa-hand-point-down::before {\r\n  content: \"\\f0a7\"; }\r\n\r\n.fa-hand-point-left::before {\r\n  content: \"\\f0a5\"; }\r\n\r\n.fa-hand-point-right::before {\r\n  content: \"\\f0a4\"; }\r\n\r\n.fa-hand-point-up::before {\r\n  content: \"\\f0a6\"; }\r\n\r\n.fa-hand-pointer::before {\r\n  content: \"\\f25a\"; }\r\n\r\n.fa-hand-scissors::before {\r\n  content: \"\\f257\"; }\r\n\r\n.fa-hand-sparkles::before {\r\n  content: \"\\e05d\"; }\r\n\r\n.fa-hand-spock::before {\r\n  content: \"\\f259\"; }\r\n\r\n.fa-handcuffs::before {\r\n  content: \"\\e4f8\"; }\r\n\r\n.fa-hands::before {\r\n  content: \"\\f2a7\"; }\r\n\r\n.fa-sign-language::before {\r\n  content: \"\\f2a7\"; }\r\n\r\n.fa-signing::before {\r\n  content: \"\\f2a7\"; }\r\n\r\n.fa-hands-asl-interpreting::before {\r\n  content: \"\\f2a3\"; }\r\n\r\n.fa-american-sign-language-interpreting::before {\r\n  content: \"\\f2a3\"; }\r\n\r\n.fa-asl-interpreting::before {\r\n  content: \"\\f2a3\"; }\r\n\r\n.fa-hands-american-sign-language-interpreting::before {\r\n  content: \"\\f2a3\"; }\r\n\r\n.fa-hands-bound::before {\r\n  content: \"\\e4f9\"; }\r\n\r\n.fa-hands-bubbles::before {\r\n  content: \"\\e05e\"; }\r\n\r\n.fa-hands-wash::before {\r\n  content: \"\\e05e\"; }\r\n\r\n.fa-hands-clapping::before {\r\n  content: \"\\e1a8\"; }\r\n\r\n.fa-hands-holding::before {\r\n  content: \"\\f4c2\"; }\r\n\r\n.fa-hands-holding-child::before {\r\n  content: \"\\e4fa\"; }\r\n\r\n.fa-hands-holding-circle::before {\r\n  content: \"\\e4fb\"; }\r\n\r\n.fa-hands-praying::before {\r\n  content: \"\\f684\"; }\r\n\r\n.fa-praying-hands::before {\r\n  content: \"\\f684\"; }\r\n\r\n.fa-handshake::before {\r\n  content: \"\\f2b5\"; }\r\n\r\n.fa-handshake-angle::before {\r\n  content: \"\\f4c4\"; }\r\n\r\n.fa-hands-helping::before {\r\n  content: \"\\f4c4\"; }\r\n\r\n.fa-handshake-simple::before {\r\n  content: \"\\f4c6\"; }\r\n\r\n.fa-handshake-alt::before {\r\n  content: \"\\f4c6\"; }\r\n\r\n.fa-handshake-simple-slash::before {\r\n  content: \"\\e05f\"; }\r\n\r\n.fa-handshake-alt-slash::before {\r\n  content: \"\\e05f\"; }\r\n\r\n.fa-handshake-slash::before {\r\n  content: \"\\e060\"; }\r\n\r\n.fa-hanukiah::before {\r\n  content: \"\\f6e6\"; }\r\n\r\n.fa-hard-drive::before {\r\n  content: \"\\f0a0\"; }\r\n\r\n.fa-hdd::before {\r\n  content: \"\\f0a0\"; }\r\n\r\n.fa-hashtag::before {\r\n  content: \"\\23\"; }\r\n\r\n.fa-hat-cowboy::before {\r\n  content: \"\\f8c0\"; }\r\n\r\n.fa-hat-cowboy-side::before {\r\n  content: \"\\f8c1\"; }\r\n\r\n.fa-hat-wizard::before {\r\n  content: \"\\f6e8\"; }\r\n\r\n.fa-head-side-cough::before {\r\n  content: \"\\e061\"; }\r\n\r\n.fa-head-side-cough-slash::before {\r\n  content: \"\\e062\"; }\r\n\r\n.fa-head-side-mask::before {\r\n  content: \"\\e063\"; }\r\n\r\n.fa-head-side-virus::before {\r\n  content: \"\\e064\"; }\r\n\r\n.fa-heading::before {\r\n  content: \"\\f1dc\"; }\r\n\r\n.fa-header::before {\r\n  content: \"\\f1dc\"; }\r\n\r\n.fa-headphones::before {\r\n  content: \"\\f025\"; }\r\n\r\n.fa-headphones-simple::before {\r\n  content: \"\\f58f\"; }\r\n\r\n.fa-headphones-alt::before {\r\n  content: \"\\f58f\"; }\r\n\r\n.fa-headset::before {\r\n  content: \"\\f590\"; }\r\n\r\n.fa-heart::before {\r\n  content: \"\\f004\"; }\r\n\r\n.fa-heart-circle-bolt::before {\r\n  content: \"\\e4fc\"; }\r\n\r\n.fa-heart-circle-check::before {\r\n  content: \"\\e4fd\"; }\r\n\r\n.fa-heart-circle-exclamation::before {\r\n  content: \"\\e4fe\"; }\r\n\r\n.fa-heart-circle-minus::before {\r\n  content: \"\\e4ff\"; }\r\n\r\n.fa-heart-circle-plus::before {\r\n  content: \"\\e500\"; }\r\n\r\n.fa-heart-circle-xmark::before {\r\n  content: \"\\e501\"; }\r\n\r\n.fa-heart-crack::before {\r\n  content: \"\\f7a9\"; }\r\n\r\n.fa-heart-broken::before {\r\n  content: \"\\f7a9\"; }\r\n\r\n.fa-heart-pulse::before {\r\n  content: \"\\f21e\"; }\r\n\r\n.fa-heartbeat::before {\r\n  content: \"\\f21e\"; }\r\n\r\n.fa-helicopter::before {\r\n  content: \"\\f533\"; }\r\n\r\n.fa-helicopter-symbol::before {\r\n  content: \"\\e502\"; }\r\n\r\n.fa-helmet-safety::before {\r\n  content: \"\\f807\"; }\r\n\r\n.fa-hard-hat::before {\r\n  content: \"\\f807\"; }\r\n\r\n.fa-hat-hard::before {\r\n  content: \"\\f807\"; }\r\n\r\n.fa-helmet-un::before {\r\n  content: \"\\e503\"; }\r\n\r\n.fa-highlighter::before {\r\n  content: \"\\f591\"; }\r\n\r\n.fa-hill-avalanche::before {\r\n  content: \"\\e507\"; }\r\n\r\n.fa-hill-rockslide::before {\r\n  content: \"\\e508\"; }\r\n\r\n.fa-hippo::before {\r\n  content: \"\\f6ed\"; }\r\n\r\n.fa-hockey-puck::before {\r\n  content: \"\\f453\"; }\r\n\r\n.fa-holly-berry::before {\r\n  content: \"\\f7aa\"; }\r\n\r\n.fa-horse::before {\r\n  content: \"\\f6f0\"; }\r\n\r\n.fa-horse-head::before {\r\n  content: \"\\f7ab\"; }\r\n\r\n.fa-hospital::before {\r\n  content: \"\\f0f8\"; }\r\n\r\n.fa-hospital-alt::before {\r\n  content: \"\\f0f8\"; }\r\n\r\n.fa-hospital-wide::before {\r\n  content: \"\\f0f8\"; }\r\n\r\n.fa-hospital-user::before {\r\n  content: \"\\f80d\"; }\r\n\r\n.fa-hot-tub-person::before {\r\n  content: \"\\f593\"; }\r\n\r\n.fa-hot-tub::before {\r\n  content: \"\\f593\"; }\r\n\r\n.fa-hotdog::before {\r\n  content: \"\\f80f\"; }\r\n\r\n.fa-hotel::before {\r\n  content: \"\\f594\"; }\r\n\r\n.fa-hourglass::before {\r\n  content: \"\\f254\"; }\r\n\r\n.fa-hourglass-2::before {\r\n  content: \"\\f254\"; }\r\n\r\n.fa-hourglass-half::before {\r\n  content: \"\\f254\"; }\r\n\r\n.fa-hourglass-empty::before {\r\n  content: \"\\f252\"; }\r\n\r\n.fa-hourglass-end::before {\r\n  content: \"\\f253\"; }\r\n\r\n.fa-hourglass-3::before {\r\n  content: \"\\f253\"; }\r\n\r\n.fa-hourglass-start::before {\r\n  content: \"\\f251\"; }\r\n\r\n.fa-hourglass-1::before {\r\n  content: \"\\f251\"; }\r\n\r\n.fa-house::before {\r\n  content: \"\\f015\"; }\r\n\r\n.fa-home::before {\r\n  content: \"\\f015\"; }\r\n\r\n.fa-home-alt::before {\r\n  content: \"\\f015\"; }\r\n\r\n.fa-home-lg-alt::before {\r\n  content: \"\\f015\"; }\r\n\r\n.fa-house-chimney::before {\r\n  content: \"\\e3af\"; }\r\n\r\n.fa-home-lg::before {\r\n  content: \"\\e3af\"; }\r\n\r\n.fa-house-chimney-crack::before {\r\n  content: \"\\f6f1\"; }\r\n\r\n.fa-house-damage::before {\r\n  content: \"\\f6f1\"; }\r\n\r\n.fa-house-chimney-medical::before {\r\n  content: \"\\f7f2\"; }\r\n\r\n.fa-clinic-medical::before {\r\n  content: \"\\f7f2\"; }\r\n\r\n.fa-house-chimney-user::before {\r\n  content: \"\\e065\"; }\r\n\r\n.fa-house-chimney-window::before {\r\n  content: \"\\e00d\"; }\r\n\r\n.fa-house-circle-check::before {\r\n  content: \"\\e509\"; }\r\n\r\n.fa-house-circle-exclamation::before {\r\n  content: \"\\e50a\"; }\r\n\r\n.fa-house-circle-xmark::before {\r\n  content: \"\\e50b\"; }\r\n\r\n.fa-house-crack::before {\r\n  content: \"\\e3b1\"; }\r\n\r\n.fa-house-fire::before {\r\n  content: \"\\e50c\"; }\r\n\r\n.fa-house-flag::before {\r\n  content: \"\\e50d\"; }\r\n\r\n.fa-house-flood-water::before {\r\n  content: \"\\e50e\"; }\r\n\r\n.fa-house-flood-water-circle-arrow-right::before {\r\n  content: \"\\e50f\"; }\r\n\r\n.fa-house-laptop::before {\r\n  content: \"\\e066\"; }\r\n\r\n.fa-laptop-house::before {\r\n  content: \"\\e066\"; }\r\n\r\n.fa-house-lock::before {\r\n  content: \"\\e510\"; }\r\n\r\n.fa-house-medical::before {\r\n  content: \"\\e3b2\"; }\r\n\r\n.fa-house-medical-circle-check::before {\r\n  content: \"\\e511\"; }\r\n\r\n.fa-house-medical-circle-exclamation::before {\r\n  content: \"\\e512\"; }\r\n\r\n.fa-house-medical-circle-xmark::before {\r\n  content: \"\\e513\"; }\r\n\r\n.fa-house-medical-flag::before {\r\n  content: \"\\e514\"; }\r\n\r\n.fa-house-signal::before {\r\n  content: \"\\e012\"; }\r\n\r\n.fa-house-tsunami::before {\r\n  content: \"\\e515\"; }\r\n\r\n.fa-house-user::before {\r\n  content: \"\\e1b0\"; }\r\n\r\n.fa-home-user::before {\r\n  content: \"\\e1b0\"; }\r\n\r\n.fa-hryvnia-sign::before {\r\n  content: \"\\f6f2\"; }\r\n\r\n.fa-hryvnia::before {\r\n  content: \"\\f6f2\"; }\r\n\r\n.fa-hurricane::before {\r\n  content: \"\\f751\"; }\r\n\r\n.fa-i::before {\r\n  content: \"\\49\"; }\r\n\r\n.fa-i-cursor::before {\r\n  content: \"\\f246\"; }\r\n\r\n.fa-ice-cream::before {\r\n  content: \"\\f810\"; }\r\n\r\n.fa-icicles::before {\r\n  content: \"\\f7ad\"; }\r\n\r\n.fa-icons::before {\r\n  content: \"\\f86d\"; }\r\n\r\n.fa-heart-music-camera-bolt::before {\r\n  content: \"\\f86d\"; }\r\n\r\n.fa-id-badge::before {\r\n  content: \"\\f2c1\"; }\r\n\r\n.fa-id-card::before {\r\n  content: \"\\f2c2\"; }\r\n\r\n.fa-drivers-license::before {\r\n  content: \"\\f2c2\"; }\r\n\r\n.fa-id-card-clip::before {\r\n  content: \"\\f47f\"; }\r\n\r\n.fa-id-card-alt::before {\r\n  content: \"\\f47f\"; }\r\n\r\n.fa-igloo::before {\r\n  content: \"\\f7ae\"; }\r\n\r\n.fa-image::before {\r\n  content: \"\\f03e\"; }\r\n\r\n.fa-image-portrait::before {\r\n  content: \"\\f3e0\"; }\r\n\r\n.fa-portrait::before {\r\n  content: \"\\f3e0\"; }\r\n\r\n.fa-images::before {\r\n  content: \"\\f302\"; }\r\n\r\n.fa-inbox::before {\r\n  content: \"\\f01c\"; }\r\n\r\n.fa-indent::before {\r\n  content: \"\\f03c\"; }\r\n\r\n.fa-indian-rupee-sign::before {\r\n  content: \"\\e1bc\"; }\r\n\r\n.fa-indian-rupee::before {\r\n  content: \"\\e1bc\"; }\r\n\r\n.fa-inr::before {\r\n  content: \"\\e1bc\"; }\r\n\r\n.fa-industry::before {\r\n  content: \"\\f275\"; }\r\n\r\n.fa-infinity::before {\r\n  content: \"\\f534\"; }\r\n\r\n.fa-info::before {\r\n  content: \"\\f129\"; }\r\n\r\n.fa-italic::before {\r\n  content: \"\\f033\"; }\r\n\r\n.fa-j::before {\r\n  content: \"\\4a\"; }\r\n\r\n.fa-jar::before {\r\n  content: \"\\e516\"; }\r\n\r\n.fa-jar-wheat::before {\r\n  content: \"\\e517\"; }\r\n\r\n.fa-jedi::before {\r\n  content: \"\\f669\"; }\r\n\r\n.fa-jet-fighter::before {\r\n  content: \"\\f0fb\"; }\r\n\r\n.fa-fighter-jet::before {\r\n  content: \"\\f0fb\"; }\r\n\r\n.fa-jet-fighter-up::before {\r\n  content: \"\\e518\"; }\r\n\r\n.fa-joint::before {\r\n  content: \"\\f595\"; }\r\n\r\n.fa-jug-detergent::before {\r\n  content: \"\\e519\"; }\r\n\r\n.fa-k::before {\r\n  content: \"\\4b\"; }\r\n\r\n.fa-kaaba::before {\r\n  content: \"\\f66b\"; }\r\n\r\n.fa-key::before {\r\n  content: \"\\f084\"; }\r\n\r\n.fa-keyboard::before {\r\n  content: \"\\f11c\"; }\r\n\r\n.fa-khanda::before {\r\n  content: \"\\f66d\"; }\r\n\r\n.fa-kip-sign::before {\r\n  content: \"\\e1c4\"; }\r\n\r\n.fa-kit-medical::before {\r\n  content: \"\\f479\"; }\r\n\r\n.fa-first-aid::before {\r\n  content: \"\\f479\"; }\r\n\r\n.fa-kitchen-set::before {\r\n  content: \"\\e51a\"; }\r\n\r\n.fa-kiwi-bird::before {\r\n  content: \"\\f535\"; }\r\n\r\n.fa-l::before {\r\n  content: \"\\4c\"; }\r\n\r\n.fa-land-mine-on::before {\r\n  content: \"\\e51b\"; }\r\n\r\n.fa-landmark::before {\r\n  content: \"\\f66f\"; }\r\n\r\n.fa-landmark-dome::before {\r\n  content: \"\\f752\"; }\r\n\r\n.fa-landmark-alt::before {\r\n  content: \"\\f752\"; }\r\n\r\n.fa-landmark-flag::before {\r\n  content: \"\\e51c\"; }\r\n\r\n.fa-language::before {\r\n  content: \"\\f1ab\"; }\r\n\r\n.fa-laptop::before {\r\n  content: \"\\f109\"; }\r\n\r\n.fa-laptop-code::before {\r\n  content: \"\\f5fc\"; }\r\n\r\n.fa-laptop-file::before {\r\n  content: \"\\e51d\"; }\r\n\r\n.fa-laptop-medical::before {\r\n  content: \"\\f812\"; }\r\n\r\n.fa-lari-sign::before {\r\n  content: \"\\e1c8\"; }\r\n\r\n.fa-layer-group::before {\r\n  content: \"\\f5fd\"; }\r\n\r\n.fa-leaf::before {\r\n  content: \"\\f06c\"; }\r\n\r\n.fa-left-long::before {\r\n  content: \"\\f30a\"; }\r\n\r\n.fa-long-arrow-alt-left::before {\r\n  content: \"\\f30a\"; }\r\n\r\n.fa-left-right::before {\r\n  content: \"\\f337\"; }\r\n\r\n.fa-arrows-alt-h::before {\r\n  content: \"\\f337\"; }\r\n\r\n.fa-lemon::before {\r\n  content: \"\\f094\"; }\r\n\r\n.fa-less-than::before {\r\n  content: \"\\3c\"; }\r\n\r\n.fa-less-than-equal::before {\r\n  content: \"\\f537\"; }\r\n\r\n.fa-life-ring::before {\r\n  content: \"\\f1cd\"; }\r\n\r\n.fa-lightbulb::before {\r\n  content: \"\\f0eb\"; }\r\n\r\n.fa-lines-leaning::before {\r\n  content: \"\\e51e\"; }\r\n\r\n.fa-link::before {\r\n  content: \"\\f0c1\"; }\r\n\r\n.fa-chain::before {\r\n  content: \"\\f0c1\"; }\r\n\r\n.fa-link-slash::before {\r\n  content: \"\\f127\"; }\r\n\r\n.fa-chain-broken::before {\r\n  content: \"\\f127\"; }\r\n\r\n.fa-chain-slash::before {\r\n  content: \"\\f127\"; }\r\n\r\n.fa-unlink::before {\r\n  content: \"\\f127\"; }\r\n\r\n.fa-lira-sign::before {\r\n  content: \"\\f195\"; }\r\n\r\n.fa-list::before {\r\n  content: \"\\f03a\"; }\r\n\r\n.fa-list-squares::before {\r\n  content: \"\\f03a\"; }\r\n\r\n.fa-list-check::before {\r\n  content: \"\\f0ae\"; }\r\n\r\n.fa-tasks::before {\r\n  content: \"\\f0ae\"; }\r\n\r\n.fa-list-ol::before {\r\n  content: \"\\f0cb\"; }\r\n\r\n.fa-list-1-2::before {\r\n  content: \"\\f0cb\"; }\r\n\r\n.fa-list-numeric::before {\r\n  content: \"\\f0cb\"; }\r\n\r\n.fa-list-ul::before {\r\n  content: \"\\f0ca\"; }\r\n\r\n.fa-list-dots::before {\r\n  content: \"\\f0ca\"; }\r\n\r\n.fa-litecoin-sign::before {\r\n  content: \"\\e1d3\"; }\r\n\r\n.fa-location-arrow::before {\r\n  content: \"\\f124\"; }\r\n\r\n.fa-location-crosshairs::before {\r\n  content: \"\\f601\"; }\r\n\r\n.fa-location::before {\r\n  content: \"\\f601\"; }\r\n\r\n.fa-location-dot::before {\r\n  content: \"\\f3c5\"; }\r\n\r\n.fa-map-marker-alt::before {\r\n  content: \"\\f3c5\"; }\r\n\r\n.fa-location-pin::before {\r\n  content: \"\\f041\"; }\r\n\r\n.fa-map-marker::before {\r\n  content: \"\\f041\"; }\r\n\r\n.fa-location-pin-lock::before {\r\n  content: \"\\e51f\"; }\r\n\r\n.fa-lock::before {\r\n  content: \"\\f023\"; }\r\n\r\n.fa-lock-open::before {\r\n  content: \"\\f3c1\"; }\r\n\r\n.fa-locust::before {\r\n  content: \"\\e520\"; }\r\n\r\n.fa-lungs::before {\r\n  content: \"\\f604\"; }\r\n\r\n.fa-lungs-virus::before {\r\n  content: \"\\e067\"; }\r\n\r\n.fa-m::before {\r\n  content: \"\\4d\"; }\r\n\r\n.fa-magnet::before {\r\n  content: \"\\f076\"; }\r\n\r\n.fa-magnifying-glass::before {\r\n  content: \"\\f002\"; }\r\n\r\n.fa-search::before {\r\n  content: \"\\f002\"; }\r\n\r\n.fa-magnifying-glass-arrow-right::before {\r\n  content: \"\\e521\"; }\r\n\r\n.fa-magnifying-glass-chart::before {\r\n  content: \"\\e522\"; }\r\n\r\n.fa-magnifying-glass-dollar::before {\r\n  content: \"\\f688\"; }\r\n\r\n.fa-search-dollar::before {\r\n  content: \"\\f688\"; }\r\n\r\n.fa-magnifying-glass-location::before {\r\n  content: \"\\f689\"; }\r\n\r\n.fa-search-location::before {\r\n  content: \"\\f689\"; }\r\n\r\n.fa-magnifying-glass-minus::before {\r\n  content: \"\\f010\"; }\r\n\r\n.fa-search-minus::before {\r\n  content: \"\\f010\"; }\r\n\r\n.fa-magnifying-glass-plus::before {\r\n  content: \"\\f00e\"; }\r\n\r\n.fa-search-plus::before {\r\n  content: \"\\f00e\"; }\r\n\r\n.fa-manat-sign::before {\r\n  content: \"\\e1d5\"; }\r\n\r\n.fa-map::before {\r\n  content: \"\\f279\"; }\r\n\r\n.fa-map-location::before {\r\n  content: \"\\f59f\"; }\r\n\r\n.fa-map-marked::before {\r\n  content: \"\\f59f\"; }\r\n\r\n.fa-map-location-dot::before {\r\n  content: \"\\f5a0\"; }\r\n\r\n.fa-map-marked-alt::before {\r\n  content: \"\\f5a0\"; }\r\n\r\n.fa-map-pin::before {\r\n  content: \"\\f276\"; }\r\n\r\n.fa-marker::before {\r\n  content: \"\\f5a1\"; }\r\n\r\n.fa-mars::before {\r\n  content: \"\\f222\"; }\r\n\r\n.fa-mars-and-venus::before {\r\n  content: \"\\f224\"; }\r\n\r\n.fa-mars-and-venus-burst::before {\r\n  content: \"\\e523\"; }\r\n\r\n.fa-mars-double::before {\r\n  content: \"\\f227\"; }\r\n\r\n.fa-mars-stroke::before {\r\n  content: \"\\f229\"; }\r\n\r\n.fa-mars-stroke-right::before {\r\n  content: \"\\f22b\"; }\r\n\r\n.fa-mars-stroke-h::before {\r\n  content: \"\\f22b\"; }\r\n\r\n.fa-mars-stroke-up::before {\r\n  content: \"\\f22a\"; }\r\n\r\n.fa-mars-stroke-v::before {\r\n  content: \"\\f22a\"; }\r\n\r\n.fa-martini-glass::before {\r\n  content: \"\\f57b\"; }\r\n\r\n.fa-glass-martini-alt::before {\r\n  content: \"\\f57b\"; }\r\n\r\n.fa-martini-glass-citrus::before {\r\n  content: \"\\f561\"; }\r\n\r\n.fa-cocktail::before {\r\n  content: \"\\f561\"; }\r\n\r\n.fa-martini-glass-empty::before {\r\n  content: \"\\f000\"; }\r\n\r\n.fa-glass-martini::before {\r\n  content: \"\\f000\"; }\r\n\r\n.fa-mask::before {\r\n  content: \"\\f6fa\"; }\r\n\r\n.fa-mask-face::before {\r\n  content: \"\\e1d7\"; }\r\n\r\n.fa-mask-ventilator::before {\r\n  content: \"\\e524\"; }\r\n\r\n.fa-masks-theater::before {\r\n  content: \"\\f630\"; }\r\n\r\n.fa-theater-masks::before {\r\n  content: \"\\f630\"; }\r\n\r\n.fa-mattress-pillow::before {\r\n  content: \"\\e525\"; }\r\n\r\n.fa-maximize::before {\r\n  content: \"\\f31e\"; }\r\n\r\n.fa-expand-arrows-alt::before {\r\n  content: \"\\f31e\"; }\r\n\r\n.fa-medal::before {\r\n  content: \"\\f5a2\"; }\r\n\r\n.fa-memory::before {\r\n  content: \"\\f538\"; }\r\n\r\n.fa-menorah::before {\r\n  content: \"\\f676\"; }\r\n\r\n.fa-mercury::before {\r\n  content: \"\\f223\"; }\r\n\r\n.fa-message::before {\r\n  content: \"\\f27a\"; }\r\n\r\n.fa-comment-alt::before {\r\n  content: \"\\f27a\"; }\r\n\r\n.fa-meteor::before {\r\n  content: \"\\f753\"; }\r\n\r\n.fa-microchip::before {\r\n  content: \"\\f2db\"; }\r\n\r\n.fa-microphone::before {\r\n  content: \"\\f130\"; }\r\n\r\n.fa-microphone-lines::before {\r\n  content: \"\\f3c9\"; }\r\n\r\n.fa-microphone-alt::before {\r\n  content: \"\\f3c9\"; }\r\n\r\n.fa-microphone-lines-slash::before {\r\n  content: \"\\f539\"; }\r\n\r\n.fa-microphone-alt-slash::before {\r\n  content: \"\\f539\"; }\r\n\r\n.fa-microphone-slash::before {\r\n  content: \"\\f131\"; }\r\n\r\n.fa-microscope::before {\r\n  content: \"\\f610\"; }\r\n\r\n.fa-mill-sign::before {\r\n  content: \"\\e1ed\"; }\r\n\r\n.fa-minimize::before {\r\n  content: \"\\f78c\"; }\r\n\r\n.fa-compress-arrows-alt::before {\r\n  content: \"\\f78c\"; }\r\n\r\n.fa-minus::before {\r\n  content: \"\\f068\"; }\r\n\r\n.fa-subtract::before {\r\n  content: \"\\f068\"; }\r\n\r\n.fa-mitten::before {\r\n  content: \"\\f7b5\"; }\r\n\r\n.fa-mobile::before {\r\n  content: \"\\f3ce\"; }\r\n\r\n.fa-mobile-android::before {\r\n  content: \"\\f3ce\"; }\r\n\r\n.fa-mobile-phone::before {\r\n  content: \"\\f3ce\"; }\r\n\r\n.fa-mobile-button::before {\r\n  content: \"\\f10b\"; }\r\n\r\n.fa-mobile-retro::before {\r\n  content: \"\\e527\"; }\r\n\r\n.fa-mobile-screen::before {\r\n  content: \"\\f3cf\"; }\r\n\r\n.fa-mobile-android-alt::before {\r\n  content: \"\\f3cf\"; }\r\n\r\n.fa-mobile-screen-button::before {\r\n  content: \"\\f3cd\"; }\r\n\r\n.fa-mobile-alt::before {\r\n  content: \"\\f3cd\"; }\r\n\r\n.fa-money-bill::before {\r\n  content: \"\\f0d6\"; }\r\n\r\n.fa-money-bill-1::before {\r\n  content: \"\\f3d1\"; }\r\n\r\n.fa-money-bill-alt::before {\r\n  content: \"\\f3d1\"; }\r\n\r\n.fa-money-bill-1-wave::before {\r\n  content: \"\\f53b\"; }\r\n\r\n.fa-money-bill-wave-alt::before {\r\n  content: \"\\f53b\"; }\r\n\r\n.fa-money-bill-transfer::before {\r\n  content: \"\\e528\"; }\r\n\r\n.fa-money-bill-trend-up::before {\r\n  content: \"\\e529\"; }\r\n\r\n.fa-money-bill-wave::before {\r\n  content: \"\\f53a\"; }\r\n\r\n.fa-money-bill-wheat::before {\r\n  content: \"\\e52a\"; }\r\n\r\n.fa-money-bills::before {\r\n  content: \"\\e1f3\"; }\r\n\r\n.fa-money-check::before {\r\n  content: \"\\f53c\"; }\r\n\r\n.fa-money-check-dollar::before {\r\n  content: \"\\f53d\"; }\r\n\r\n.fa-money-check-alt::before {\r\n  content: \"\\f53d\"; }\r\n\r\n.fa-monument::before {\r\n  content: \"\\f5a6\"; }\r\n\r\n.fa-moon::before {\r\n  content: \"\\f186\"; }\r\n\r\n.fa-mortar-pestle::before {\r\n  content: \"\\f5a7\"; }\r\n\r\n.fa-mosque::before {\r\n  content: \"\\f678\"; }\r\n\r\n.fa-mosquito::before {\r\n  content: \"\\e52b\"; }\r\n\r\n.fa-mosquito-net::before {\r\n  content: \"\\e52c\"; }\r\n\r\n.fa-motorcycle::before {\r\n  content: \"\\f21c\"; }\r\n\r\n.fa-mound::before {\r\n  content: \"\\e52d\"; }\r\n\r\n.fa-mountain::before {\r\n  content: \"\\f6fc\"; }\r\n\r\n.fa-mountain-city::before {\r\n  content: \"\\e52e\"; }\r\n\r\n.fa-mountain-sun::before {\r\n  content: \"\\e52f\"; }\r\n\r\n.fa-mug-hot::before {\r\n  content: \"\\f7b6\"; }\r\n\r\n.fa-mug-saucer::before {\r\n  content: \"\\f0f4\"; }\r\n\r\n.fa-coffee::before {\r\n  content: \"\\f0f4\"; }\r\n\r\n.fa-music::before {\r\n  content: \"\\f001\"; }\r\n\r\n.fa-n::before {\r\n  content: \"\\4e\"; }\r\n\r\n.fa-naira-sign::before {\r\n  content: \"\\e1f6\"; }\r\n\r\n.fa-network-wired::before {\r\n  content: \"\\f6ff\"; }\r\n\r\n.fa-neuter::before {\r\n  content: \"\\f22c\"; }\r\n\r\n.fa-newspaper::before {\r\n  content: \"\\f1ea\"; }\r\n\r\n.fa-not-equal::before {\r\n  content: \"\\f53e\"; }\r\n\r\n.fa-note-sticky::before {\r\n  content: \"\\f249\"; }\r\n\r\n.fa-sticky-note::before {\r\n  content: \"\\f249\"; }\r\n\r\n.fa-notes-medical::before {\r\n  content: \"\\f481\"; }\r\n\r\n.fa-o::before {\r\n  content: \"\\4f\"; }\r\n\r\n.fa-object-group::before {\r\n  content: \"\\f247\"; }\r\n\r\n.fa-object-ungroup::before {\r\n  content: \"\\f248\"; }\r\n\r\n.fa-oil-can::before {\r\n  content: \"\\f613\"; }\r\n\r\n.fa-oil-well::before {\r\n  content: \"\\e532\"; }\r\n\r\n.fa-om::before {\r\n  content: \"\\f679\"; }\r\n\r\n.fa-otter::before {\r\n  content: \"\\f700\"; }\r\n\r\n.fa-outdent::before {\r\n  content: \"\\f03b\"; }\r\n\r\n.fa-dedent::before {\r\n  content: \"\\f03b\"; }\r\n\r\n.fa-p::before {\r\n  content: \"\\50\"; }\r\n\r\n.fa-pager::before {\r\n  content: \"\\f815\"; }\r\n\r\n.fa-paint-roller::before {\r\n  content: \"\\f5aa\"; }\r\n\r\n.fa-paintbrush::before {\r\n  content: \"\\f1fc\"; }\r\n\r\n.fa-paint-brush::before {\r\n  content: \"\\f1fc\"; }\r\n\r\n.fa-palette::before {\r\n  content: \"\\f53f\"; }\r\n\r\n.fa-pallet::before {\r\n  content: \"\\f482\"; }\r\n\r\n.fa-panorama::before {\r\n  content: \"\\e209\"; }\r\n\r\n.fa-paper-plane::before {\r\n  content: \"\\f1d8\"; }\r\n\r\n.fa-paperclip::before {\r\n  content: \"\\f0c6\"; }\r\n\r\n.fa-parachute-box::before {\r\n  content: \"\\f4cd\"; }\r\n\r\n.fa-paragraph::before {\r\n  content: \"\\f1dd\"; }\r\n\r\n.fa-passport::before {\r\n  content: \"\\f5ab\"; }\r\n\r\n.fa-paste::before {\r\n  content: \"\\f0ea\"; }\r\n\r\n.fa-file-clipboard::before {\r\n  content: \"\\f0ea\"; }\r\n\r\n.fa-pause::before {\r\n  content: \"\\f04c\"; }\r\n\r\n.fa-paw::before {\r\n  content: \"\\f1b0\"; }\r\n\r\n.fa-peace::before {\r\n  content: \"\\f67c\"; }\r\n\r\n.fa-pen::before {\r\n  content: \"\\f304\"; }\r\n\r\n.fa-pen-clip::before {\r\n  content: \"\\f305\"; }\r\n\r\n.fa-pen-alt::before {\r\n  content: \"\\f305\"; }\r\n\r\n.fa-pen-fancy::before {\r\n  content: \"\\f5ac\"; }\r\n\r\n.fa-pen-nib::before {\r\n  content: \"\\f5ad\"; }\r\n\r\n.fa-pen-ruler::before {\r\n  content: \"\\f5ae\"; }\r\n\r\n.fa-pencil-ruler::before {\r\n  content: \"\\f5ae\"; }\r\n\r\n.fa-pen-to-square::before {\r\n  content: \"\\f044\"; }\r\n\r\n.fa-edit::before {\r\n  content: \"\\f044\"; }\r\n\r\n.fa-pencil::before {\r\n  content: \"\\f303\"; }\r\n\r\n.fa-pencil-alt::before {\r\n  content: \"\\f303\"; }\r\n\r\n.fa-people-arrows-left-right::before {\r\n  content: \"\\e068\"; }\r\n\r\n.fa-people-arrows::before {\r\n  content: \"\\e068\"; }\r\n\r\n.fa-people-carry-box::before {\r\n  content: \"\\f4ce\"; }\r\n\r\n.fa-people-carry::before {\r\n  content: \"\\f4ce\"; }\r\n\r\n.fa-people-group::before {\r\n  content: \"\\e533\"; }\r\n\r\n.fa-people-line::before {\r\n  content: \"\\e534\"; }\r\n\r\n.fa-people-pulling::before {\r\n  content: \"\\e535\"; }\r\n\r\n.fa-people-robbery::before {\r\n  content: \"\\e536\"; }\r\n\r\n.fa-people-roof::before {\r\n  content: \"\\e537\"; }\r\n\r\n.fa-pepper-hot::before {\r\n  content: \"\\f816\"; }\r\n\r\n.fa-percent::before {\r\n  content: \"\\25\"; }\r\n\r\n.fa-percentage::before {\r\n  content: \"\\25\"; }\r\n\r\n.fa-person::before {\r\n  content: \"\\f183\"; }\r\n\r\n.fa-male::before {\r\n  content: \"\\f183\"; }\r\n\r\n.fa-person-arrow-down-to-line::before {\r\n  content: \"\\e538\"; }\r\n\r\n.fa-person-arrow-up-from-line::before {\r\n  content: \"\\e539\"; }\r\n\r\n.fa-person-biking::before {\r\n  content: \"\\f84a\"; }\r\n\r\n.fa-biking::before {\r\n  content: \"\\f84a\"; }\r\n\r\n.fa-person-booth::before {\r\n  content: \"\\f756\"; }\r\n\r\n.fa-person-breastfeeding::before {\r\n  content: \"\\e53a\"; }\r\n\r\n.fa-person-burst::before {\r\n  content: \"\\e53b\"; }\r\n\r\n.fa-person-cane::before {\r\n  content: \"\\e53c\"; }\r\n\r\n.fa-person-chalkboard::before {\r\n  content: \"\\e53d\"; }\r\n\r\n.fa-person-circle-check::before {\r\n  content: \"\\e53e\"; }\r\n\r\n.fa-person-circle-exclamation::before {\r\n  content: \"\\e53f\"; }\r\n\r\n.fa-person-circle-minus::before {\r\n  content: \"\\e540\"; }\r\n\r\n.fa-person-circle-plus::before {\r\n  content: \"\\e541\"; }\r\n\r\n.fa-person-circle-question::before {\r\n  content: \"\\e542\"; }\r\n\r\n.fa-person-circle-xmark::before {\r\n  content: \"\\e543\"; }\r\n\r\n.fa-person-digging::before {\r\n  content: \"\\f85e\"; }\r\n\r\n.fa-digging::before {\r\n  content: \"\\f85e\"; }\r\n\r\n.fa-person-dots-from-line::before {\r\n  content: \"\\f470\"; }\r\n\r\n.fa-diagnoses::before {\r\n  content: \"\\f470\"; }\r\n\r\n.fa-person-dress::before {\r\n  content: \"\\f182\"; }\r\n\r\n.fa-female::before {\r\n  content: \"\\f182\"; }\r\n\r\n.fa-person-dress-burst::before {\r\n  content: \"\\e544\"; }\r\n\r\n.fa-person-drowning::before {\r\n  content: \"\\e545\"; }\r\n\r\n.fa-person-falling::before {\r\n  content: \"\\e546\"; }\r\n\r\n.fa-person-falling-burst::before {\r\n  content: \"\\e547\"; }\r\n\r\n.fa-person-half-dress::before {\r\n  content: \"\\e548\"; }\r\n\r\n.fa-person-harassing::before {\r\n  content: \"\\e549\"; }\r\n\r\n.fa-person-hiking::before {\r\n  content: \"\\f6ec\"; }\r\n\r\n.fa-hiking::before {\r\n  content: \"\\f6ec\"; }\r\n\r\n.fa-person-military-pointing::before {\r\n  content: \"\\e54a\"; }\r\n\r\n.fa-person-military-rifle::before {\r\n  content: \"\\e54b\"; }\r\n\r\n.fa-person-military-to-person::before {\r\n  content: \"\\e54c\"; }\r\n\r\n.fa-person-praying::before {\r\n  content: \"\\f683\"; }\r\n\r\n.fa-pray::before {\r\n  content: \"\\f683\"; }\r\n\r\n.fa-person-pregnant::before {\r\n  content: \"\\e31e\"; }\r\n\r\n.fa-person-rays::before {\r\n  content: \"\\e54d\"; }\r\n\r\n.fa-person-rifle::before {\r\n  content: \"\\e54e\"; }\r\n\r\n.fa-person-running::before {\r\n  content: \"\\f70c\"; }\r\n\r\n.fa-running::before {\r\n  content: \"\\f70c\"; }\r\n\r\n.fa-person-shelter::before {\r\n  content: \"\\e54f\"; }\r\n\r\n.fa-person-skating::before {\r\n  content: \"\\f7c5\"; }\r\n\r\n.fa-skating::before {\r\n  content: \"\\f7c5\"; }\r\n\r\n.fa-person-skiing::before {\r\n  content: \"\\f7c9\"; }\r\n\r\n.fa-skiing::before {\r\n  content: \"\\f7c9\"; }\r\n\r\n.fa-person-skiing-nordic::before {\r\n  content: \"\\f7ca\"; }\r\n\r\n.fa-skiing-nordic::before {\r\n  content: \"\\f7ca\"; }\r\n\r\n.fa-person-snowboarding::before {\r\n  content: \"\\f7ce\"; }\r\n\r\n.fa-snowboarding::before {\r\n  content: \"\\f7ce\"; }\r\n\r\n.fa-person-swimming::before {\r\n  content: \"\\f5c4\"; }\r\n\r\n.fa-swimmer::before {\r\n  content: \"\\f5c4\"; }\r\n\r\n.fa-person-through-window::before {\r\n  content: \"\\e433\"; }\r\n\r\n.fa-person-walking::before {\r\n  content: \"\\f554\"; }\r\n\r\n.fa-walking::before {\r\n  content: \"\\f554\"; }\r\n\r\n.fa-person-walking-arrow-loop-left::before {\r\n  content: \"\\e551\"; }\r\n\r\n.fa-person-walking-arrow-right::before {\r\n  content: \"\\e552\"; }\r\n\r\n.fa-person-walking-dashed-line-arrow-right::before {\r\n  content: \"\\e553\"; }\r\n\r\n.fa-person-walking-luggage::before {\r\n  content: \"\\e554\"; }\r\n\r\n.fa-person-walking-with-cane::before {\r\n  content: \"\\f29d\"; }\r\n\r\n.fa-blind::before {\r\n  content: \"\\f29d\"; }\r\n\r\n.fa-peseta-sign::before {\r\n  content: \"\\e221\"; }\r\n\r\n.fa-peso-sign::before {\r\n  content: \"\\e222\"; }\r\n\r\n.fa-phone::before {\r\n  content: \"\\f095\"; }\r\n\r\n.fa-phone-flip::before {\r\n  content: \"\\f879\"; }\r\n\r\n.fa-phone-alt::before {\r\n  content: \"\\f879\"; }\r\n\r\n.fa-phone-slash::before {\r\n  content: \"\\f3dd\"; }\r\n\r\n.fa-phone-volume::before {\r\n  content: \"\\f2a0\"; }\r\n\r\n.fa-volume-control-phone::before {\r\n  content: \"\\f2a0\"; }\r\n\r\n.fa-photo-film::before {\r\n  content: \"\\f87c\"; }\r\n\r\n.fa-photo-video::before {\r\n  content: \"\\f87c\"; }\r\n\r\n.fa-piggy-bank::before {\r\n  content: \"\\f4d3\"; }\r\n\r\n.fa-pills::before {\r\n  content: \"\\f484\"; }\r\n\r\n.fa-pizza-slice::before {\r\n  content: \"\\f818\"; }\r\n\r\n.fa-place-of-worship::before {\r\n  content: \"\\f67f\"; }\r\n\r\n.fa-plane::before {\r\n  content: \"\\f072\"; }\r\n\r\n.fa-plane-arrival::before {\r\n  content: \"\\f5af\"; }\r\n\r\n.fa-plane-circle-check::before {\r\n  content: \"\\e555\"; }\r\n\r\n.fa-plane-circle-exclamation::before {\r\n  content: \"\\e556\"; }\r\n\r\n.fa-plane-circle-xmark::before {\r\n  content: \"\\e557\"; }\r\n\r\n.fa-plane-departure::before {\r\n  content: \"\\f5b0\"; }\r\n\r\n.fa-plane-lock::before {\r\n  content: \"\\e558\"; }\r\n\r\n.fa-plane-slash::before {\r\n  content: \"\\e069\"; }\r\n\r\n.fa-plane-up::before {\r\n  content: \"\\e22d\"; }\r\n\r\n.fa-plant-wilt::before {\r\n  content: \"\\e43b\"; }\r\n\r\n.fa-plate-wheat::before {\r\n  content: \"\\e55a\"; }\r\n\r\n.fa-play::before {\r\n  content: \"\\f04b\"; }\r\n\r\n.fa-plug::before {\r\n  content: \"\\f1e6\"; }\r\n\r\n.fa-plug-circle-bolt::before {\r\n  content: \"\\e55b\"; }\r\n\r\n.fa-plug-circle-check::before {\r\n  content: \"\\e55c\"; }\r\n\r\n.fa-plug-circle-exclamation::before {\r\n  content: \"\\e55d\"; }\r\n\r\n.fa-plug-circle-minus::before {\r\n  content: \"\\e55e\"; }\r\n\r\n.fa-plug-circle-plus::before {\r\n  content: \"\\e55f\"; }\r\n\r\n.fa-plug-circle-xmark::before {\r\n  content: \"\\e560\"; }\r\n\r\n.fa-plus::before {\r\n  content: \"\\2b\"; }\r\n\r\n.fa-add::before {\r\n  content: \"\\2b\"; }\r\n\r\n.fa-plus-minus::before {\r\n  content: \"\\e43c\"; }\r\n\r\n.fa-podcast::before {\r\n  content: \"\\f2ce\"; }\r\n\r\n.fa-poo::before {\r\n  content: \"\\f2fe\"; }\r\n\r\n.fa-poo-storm::before {\r\n  content: \"\\f75a\"; }\r\n\r\n.fa-poo-bolt::before {\r\n  content: \"\\f75a\"; }\r\n\r\n.fa-poop::before {\r\n  content: \"\\f619\"; }\r\n\r\n.fa-power-off::before {\r\n  content: \"\\f011\"; }\r\n\r\n.fa-prescription::before {\r\n  content: \"\\f5b1\"; }\r\n\r\n.fa-prescription-bottle::before {\r\n  content: \"\\f485\"; }\r\n\r\n.fa-prescription-bottle-medical::before {\r\n  content: \"\\f486\"; }\r\n\r\n.fa-prescription-bottle-alt::before {\r\n  content: \"\\f486\"; }\r\n\r\n.fa-print::before {\r\n  content: \"\\f02f\"; }\r\n\r\n.fa-pump-medical::before {\r\n  content: \"\\e06a\"; }\r\n\r\n.fa-pump-soap::before {\r\n  content: \"\\e06b\"; }\r\n\r\n.fa-puzzle-piece::before {\r\n  content: \"\\f12e\"; }\r\n\r\n.fa-q::before {\r\n  content: \"\\51\"; }\r\n\r\n.fa-qrcode::before {\r\n  content: \"\\f029\"; }\r\n\r\n.fa-question::before {\r\n  content: \"\\3f\"; }\r\n\r\n.fa-quote-left::before {\r\n  content: \"\\f10d\"; }\r\n\r\n.fa-quote-left-alt::before {\r\n  content: \"\\f10d\"; }\r\n\r\n.fa-quote-right::before {\r\n  content: \"\\f10e\"; }\r\n\r\n.fa-quote-right-alt::before {\r\n  content: \"\\f10e\"; }\r\n\r\n.fa-r::before {\r\n  content: \"\\52\"; }\r\n\r\n.fa-radiation::before {\r\n  content: \"\\f7b9\"; }\r\n\r\n.fa-radio::before {\r\n  content: \"\\f8d7\"; }\r\n\r\n.fa-rainbow::before {\r\n  content: \"\\f75b\"; }\r\n\r\n.fa-ranking-star::before {\r\n  content: \"\\e561\"; }\r\n\r\n.fa-receipt::before {\r\n  content: \"\\f543\"; }\r\n\r\n.fa-record-vinyl::before {\r\n  content: \"\\f8d9\"; }\r\n\r\n.fa-rectangle-ad::before {\r\n  content: \"\\f641\"; }\r\n\r\n.fa-ad::before {\r\n  content: \"\\f641\"; }\r\n\r\n.fa-rectangle-list::before {\r\n  content: \"\\f022\"; }\r\n\r\n.fa-list-alt::before {\r\n  content: \"\\f022\"; }\r\n\r\n.fa-rectangle-xmark::before {\r\n  content: \"\\f410\"; }\r\n\r\n.fa-rectangle-times::before {\r\n  content: \"\\f410\"; }\r\n\r\n.fa-times-rectangle::before {\r\n  content: \"\\f410\"; }\r\n\r\n.fa-window-close::before {\r\n  content: \"\\f410\"; }\r\n\r\n.fa-recycle::before {\r\n  content: \"\\f1b8\"; }\r\n\r\n.fa-registered::before {\r\n  content: \"\\f25d\"; }\r\n\r\n.fa-repeat::before {\r\n  content: \"\\f363\"; }\r\n\r\n.fa-reply::before {\r\n  content: \"\\f3e5\"; }\r\n\r\n.fa-mail-reply::before {\r\n  content: \"\\f3e5\"; }\r\n\r\n.fa-reply-all::before {\r\n  content: \"\\f122\"; }\r\n\r\n.fa-mail-reply-all::before {\r\n  content: \"\\f122\"; }\r\n\r\n.fa-republican::before {\r\n  content: \"\\f75e\"; }\r\n\r\n.fa-restroom::before {\r\n  content: \"\\f7bd\"; }\r\n\r\n.fa-retweet::before {\r\n  content: \"\\f079\"; }\r\n\r\n.fa-ribbon::before {\r\n  content: \"\\f4d6\"; }\r\n\r\n.fa-right-from-bracket::before {\r\n  content: \"\\f2f5\"; }\r\n\r\n.fa-sign-out-alt::before {\r\n  content: \"\\f2f5\"; }\r\n\r\n.fa-right-left::before {\r\n  content: \"\\f362\"; }\r\n\r\n.fa-exchange-alt::before {\r\n  content: \"\\f362\"; }\r\n\r\n.fa-right-long::before {\r\n  content: \"\\f30b\"; }\r\n\r\n.fa-long-arrow-alt-right::before {\r\n  content: \"\\f30b\"; }\r\n\r\n.fa-right-to-bracket::before {\r\n  content: \"\\f2f6\"; }\r\n\r\n.fa-sign-in-alt::before {\r\n  content: \"\\f2f6\"; }\r\n\r\n.fa-ring::before {\r\n  content: \"\\f70b\"; }\r\n\r\n.fa-road::before {\r\n  content: \"\\f018\"; }\r\n\r\n.fa-road-barrier::before {\r\n  content: \"\\e562\"; }\r\n\r\n.fa-road-bridge::before {\r\n  content: \"\\e563\"; }\r\n\r\n.fa-road-circle-check::before {\r\n  content: \"\\e564\"; }\r\n\r\n.fa-road-circle-exclamation::before {\r\n  content: \"\\e565\"; }\r\n\r\n.fa-road-circle-xmark::before {\r\n  content: \"\\e566\"; }\r\n\r\n.fa-road-lock::before {\r\n  content: \"\\e567\"; }\r\n\r\n.fa-road-spikes::before {\r\n  content: \"\\e568\"; }\r\n\r\n.fa-robot::before {\r\n  content: \"\\f544\"; }\r\n\r\n.fa-rocket::before {\r\n  content: \"\\f135\"; }\r\n\r\n.fa-rotate::before {\r\n  content: \"\\f2f1\"; }\r\n\r\n.fa-sync-alt::before {\r\n  content: \"\\f2f1\"; }\r\n\r\n.fa-rotate-left::before {\r\n  content: \"\\f2ea\"; }\r\n\r\n.fa-rotate-back::before {\r\n  content: \"\\f2ea\"; }\r\n\r\n.fa-rotate-backward::before {\r\n  content: \"\\f2ea\"; }\r\n\r\n.fa-undo-alt::before {\r\n  content: \"\\f2ea\"; }\r\n\r\n.fa-rotate-right::before {\r\n  content: \"\\f2f9\"; }\r\n\r\n.fa-redo-alt::before {\r\n  content: \"\\f2f9\"; }\r\n\r\n.fa-rotate-forward::before {\r\n  content: \"\\f2f9\"; }\r\n\r\n.fa-route::before {\r\n  content: \"\\f4d7\"; }\r\n\r\n.fa-rss::before {\r\n  content: \"\\f09e\"; }\r\n\r\n.fa-feed::before {\r\n  content: \"\\f09e\"; }\r\n\r\n.fa-ruble-sign::before {\r\n  content: \"\\f158\"; }\r\n\r\n.fa-rouble::before {\r\n  content: \"\\f158\"; }\r\n\r\n.fa-rub::before {\r\n  content: \"\\f158\"; }\r\n\r\n.fa-ruble::before {\r\n  content: \"\\f158\"; }\r\n\r\n.fa-rug::before {\r\n  content: \"\\e569\"; }\r\n\r\n.fa-ruler::before {\r\n  content: \"\\f545\"; }\r\n\r\n.fa-ruler-combined::before {\r\n  content: \"\\f546\"; }\r\n\r\n.fa-ruler-horizontal::before {\r\n  content: \"\\f547\"; }\r\n\r\n.fa-ruler-vertical::before {\r\n  content: \"\\f548\"; }\r\n\r\n.fa-rupee-sign::before {\r\n  content: \"\\f156\"; }\r\n\r\n.fa-rupee::before {\r\n  content: \"\\f156\"; }\r\n\r\n.fa-rupiah-sign::before {\r\n  content: \"\\e23d\"; }\r\n\r\n.fa-s::before {\r\n  content: \"\\53\"; }\r\n\r\n.fa-sack-dollar::before {\r\n  content: \"\\f81d\"; }\r\n\r\n.fa-sack-xmark::before {\r\n  content: \"\\e56a\"; }\r\n\r\n.fa-sailboat::before {\r\n  content: \"\\e445\"; }\r\n\r\n.fa-satellite::before {\r\n  content: \"\\f7bf\"; }\r\n\r\n.fa-satellite-dish::before {\r\n  content: \"\\f7c0\"; }\r\n\r\n.fa-scale-balanced::before {\r\n  content: \"\\f24e\"; }\r\n\r\n.fa-balance-scale::before {\r\n  content: \"\\f24e\"; }\r\n\r\n.fa-scale-unbalanced::before {\r\n  content: \"\\f515\"; }\r\n\r\n.fa-balance-scale-left::before {\r\n  content: \"\\f515\"; }\r\n\r\n.fa-scale-unbalanced-flip::before {\r\n  content: \"\\f516\"; }\r\n\r\n.fa-balance-scale-right::before {\r\n  content: \"\\f516\"; }\r\n\r\n.fa-school::before {\r\n  content: \"\\f549\"; }\r\n\r\n.fa-school-circle-check::before {\r\n  content: \"\\e56b\"; }\r\n\r\n.fa-school-circle-exclamation::before {\r\n  content: \"\\e56c\"; }\r\n\r\n.fa-school-circle-xmark::before {\r\n  content: \"\\e56d\"; }\r\n\r\n.fa-school-flag::before {\r\n  content: \"\\e56e\"; }\r\n\r\n.fa-school-lock::before {\r\n  content: \"\\e56f\"; }\r\n\r\n.fa-scissors::before {\r\n  content: \"\\f0c4\"; }\r\n\r\n.fa-cut::before {\r\n  content: \"\\f0c4\"; }\r\n\r\n.fa-screwdriver::before {\r\n  content: \"\\f54a\"; }\r\n\r\n.fa-screwdriver-wrench::before {\r\n  content: \"\\f7d9\"; }\r\n\r\n.fa-tools::before {\r\n  content: \"\\f7d9\"; }\r\n\r\n.fa-scroll::before {\r\n  content: \"\\f70e\"; }\r\n\r\n.fa-scroll-torah::before {\r\n  content: \"\\f6a0\"; }\r\n\r\n.fa-torah::before {\r\n  content: \"\\f6a0\"; }\r\n\r\n.fa-sd-card::before {\r\n  content: \"\\f7c2\"; }\r\n\r\n.fa-section::before {\r\n  content: \"\\e447\"; }\r\n\r\n.fa-seedling::before {\r\n  content: \"\\f4d8\"; }\r\n\r\n.fa-sprout::before {\r\n  content: \"\\f4d8\"; }\r\n\r\n.fa-server::before {\r\n  content: \"\\f233\"; }\r\n\r\n.fa-shapes::before {\r\n  content: \"\\f61f\"; }\r\n\r\n.fa-triangle-circle-square::before {\r\n  content: \"\\f61f\"; }\r\n\r\n.fa-share::before {\r\n  content: \"\\f064\"; }\r\n\r\n.fa-arrow-turn-right::before {\r\n  content: \"\\f064\"; }\r\n\r\n.fa-mail-forward::before {\r\n  content: \"\\f064\"; }\r\n\r\n.fa-share-from-square::before {\r\n  content: \"\\f14d\"; }\r\n\r\n.fa-share-square::before {\r\n  content: \"\\f14d\"; }\r\n\r\n.fa-share-nodes::before {\r\n  content: \"\\f1e0\"; }\r\n\r\n.fa-share-alt::before {\r\n  content: \"\\f1e0\"; }\r\n\r\n.fa-sheet-plastic::before {\r\n  content: \"\\e571\"; }\r\n\r\n.fa-shekel-sign::before {\r\n  content: \"\\f20b\"; }\r\n\r\n.fa-ils::before {\r\n  content: \"\\f20b\"; }\r\n\r\n.fa-shekel::before {\r\n  content: \"\\f20b\"; }\r\n\r\n.fa-sheqel::before {\r\n  content: \"\\f20b\"; }\r\n\r\n.fa-sheqel-sign::before {\r\n  content: \"\\f20b\"; }\r\n\r\n.fa-shield::before {\r\n  content: \"\\f132\"; }\r\n\r\n.fa-shield-blank::before {\r\n  content: \"\\f132\"; }\r\n\r\n.fa-shield-cat::before {\r\n  content: \"\\e572\"; }\r\n\r\n.fa-shield-dog::before {\r\n  content: \"\\e573\"; }\r\n\r\n.fa-shield-halved::before {\r\n  content: \"\\f3ed\"; }\r\n\r\n.fa-shield-alt::before {\r\n  content: \"\\f3ed\"; }\r\n\r\n.fa-shield-heart::before {\r\n  content: \"\\e574\"; }\r\n\r\n.fa-shield-virus::before {\r\n  content: \"\\e06c\"; }\r\n\r\n.fa-ship::before {\r\n  content: \"\\f21a\"; }\r\n\r\n.fa-shirt::before {\r\n  content: \"\\f553\"; }\r\n\r\n.fa-t-shirt::before {\r\n  content: \"\\f553\"; }\r\n\r\n.fa-tshirt::before {\r\n  content: \"\\f553\"; }\r\n\r\n.fa-shoe-prints::before {\r\n  content: \"\\f54b\"; }\r\n\r\n.fa-shop::before {\r\n  content: \"\\f54f\"; }\r\n\r\n.fa-store-alt::before {\r\n  content: \"\\f54f\"; }\r\n\r\n.fa-shop-lock::before {\r\n  content: \"\\e4a5\"; }\r\n\r\n.fa-shop-slash::before {\r\n  content: \"\\e070\"; }\r\n\r\n.fa-store-alt-slash::before {\r\n  content: \"\\e070\"; }\r\n\r\n.fa-shower::before {\r\n  content: \"\\f2cc\"; }\r\n\r\n.fa-shrimp::before {\r\n  content: \"\\e448\"; }\r\n\r\n.fa-shuffle::before {\r\n  content: \"\\f074\"; }\r\n\r\n.fa-random::before {\r\n  content: \"\\f074\"; }\r\n\r\n.fa-shuttle-space::before {\r\n  content: \"\\f197\"; }\r\n\r\n.fa-space-shuttle::before {\r\n  content: \"\\f197\"; }\r\n\r\n.fa-sign-hanging::before {\r\n  content: \"\\f4d9\"; }\r\n\r\n.fa-sign::before {\r\n  content: \"\\f4d9\"; }\r\n\r\n.fa-signal::before {\r\n  content: \"\\f012\"; }\r\n\r\n.fa-signal-5::before {\r\n  content: \"\\f012\"; }\r\n\r\n.fa-signal-perfect::before {\r\n  content: \"\\f012\"; }\r\n\r\n.fa-signature::before {\r\n  content: \"\\f5b7\"; }\r\n\r\n.fa-signs-post::before {\r\n  content: \"\\f277\"; }\r\n\r\n.fa-map-signs::before {\r\n  content: \"\\f277\"; }\r\n\r\n.fa-sim-card::before {\r\n  content: \"\\f7c4\"; }\r\n\r\n.fa-sink::before {\r\n  content: \"\\e06d\"; }\r\n\r\n.fa-sitemap::before {\r\n  content: \"\\f0e8\"; }\r\n\r\n.fa-skull::before {\r\n  content: \"\\f54c\"; }\r\n\r\n.fa-skull-crossbones::before {\r\n  content: \"\\f714\"; }\r\n\r\n.fa-slash::before {\r\n  content: \"\\f715\"; }\r\n\r\n.fa-sleigh::before {\r\n  content: \"\\f7cc\"; }\r\n\r\n.fa-sliders::before {\r\n  content: \"\\f1de\"; }\r\n\r\n.fa-sliders-h::before {\r\n  content: \"\\f1de\"; }\r\n\r\n.fa-smog::before {\r\n  content: \"\\f75f\"; }\r\n\r\n.fa-smoking::before {\r\n  content: \"\\f48d\"; }\r\n\r\n.fa-snowflake::before {\r\n  content: \"\\f2dc\"; }\r\n\r\n.fa-snowman::before {\r\n  content: \"\\f7d0\"; }\r\n\r\n.fa-snowplow::before {\r\n  content: \"\\f7d2\"; }\r\n\r\n.fa-soap::before {\r\n  content: \"\\e06e\"; }\r\n\r\n.fa-socks::before {\r\n  content: \"\\f696\"; }\r\n\r\n.fa-solar-panel::before {\r\n  content: \"\\f5ba\"; }\r\n\r\n.fa-sort::before {\r\n  content: \"\\f0dc\"; }\r\n\r\n.fa-unsorted::before {\r\n  content: \"\\f0dc\"; }\r\n\r\n.fa-sort-down::before {\r\n  content: \"\\f0dd\"; }\r\n\r\n.fa-sort-desc::before {\r\n  content: \"\\f0dd\"; }\r\n\r\n.fa-sort-up::before {\r\n  content: \"\\f0de\"; }\r\n\r\n.fa-sort-asc::before {\r\n  content: \"\\f0de\"; }\r\n\r\n.fa-spa::before {\r\n  content: \"\\f5bb\"; }\r\n\r\n.fa-spaghetti-monster-flying::before {\r\n  content: \"\\f67b\"; }\r\n\r\n.fa-pastafarianism::before {\r\n  content: \"\\f67b\"; }\r\n\r\n.fa-spell-check::before {\r\n  content: \"\\f891\"; }\r\n\r\n.fa-spider::before {\r\n  content: \"\\f717\"; }\r\n\r\n.fa-spinner::before {\r\n  content: \"\\f110\"; }\r\n\r\n.fa-splotch::before {\r\n  content: \"\\f5bc\"; }\r\n\r\n.fa-spoon::before {\r\n  content: \"\\f2e5\"; }\r\n\r\n.fa-utensil-spoon::before {\r\n  content: \"\\f2e5\"; }\r\n\r\n.fa-spray-can::before {\r\n  content: \"\\f5bd\"; }\r\n\r\n.fa-spray-can-sparkles::before {\r\n  content: \"\\f5d0\"; }\r\n\r\n.fa-air-freshener::before {\r\n  content: \"\\f5d0\"; }\r\n\r\n.fa-square::before {\r\n  content: \"\\f0c8\"; }\r\n\r\n.fa-square-arrow-up-right::before {\r\n  content: \"\\f14c\"; }\r\n\r\n.fa-external-link-square::before {\r\n  content: \"\\f14c\"; }\r\n\r\n.fa-square-caret-down::before {\r\n  content: \"\\f150\"; }\r\n\r\n.fa-caret-square-down::before {\r\n  content: \"\\f150\"; }\r\n\r\n.fa-square-caret-left::before {\r\n  content: \"\\f191\"; }\r\n\r\n.fa-caret-square-left::before {\r\n  content: \"\\f191\"; }\r\n\r\n.fa-square-caret-right::before {\r\n  content: \"\\f152\"; }\r\n\r\n.fa-caret-square-right::before {\r\n  content: \"\\f152\"; }\r\n\r\n.fa-square-caret-up::before {\r\n  content: \"\\f151\"; }\r\n\r\n.fa-caret-square-up::before {\r\n  content: \"\\f151\"; }\r\n\r\n.fa-square-check::before {\r\n  content: \"\\f14a\"; }\r\n\r\n.fa-check-square::before {\r\n  content: \"\\f14a\"; }\r\n\r\n.fa-square-envelope::before {\r\n  content: \"\\f199\"; }\r\n\r\n.fa-envelope-square::before {\r\n  content: \"\\f199\"; }\r\n\r\n.fa-square-full::before {\r\n  content: \"\\f45c\"; }\r\n\r\n.fa-square-h::before {\r\n  content: \"\\f0fd\"; }\r\n\r\n.fa-h-square::before {\r\n  content: \"\\f0fd\"; }\r\n\r\n.fa-square-minus::before {\r\n  content: \"\\f146\"; }\r\n\r\n.fa-minus-square::before {\r\n  content: \"\\f146\"; }\r\n\r\n.fa-square-nfi::before {\r\n  content: \"\\e576\"; }\r\n\r\n.fa-square-parking::before {\r\n  content: \"\\f540\"; }\r\n\r\n.fa-parking::before {\r\n  content: \"\\f540\"; }\r\n\r\n.fa-square-pen::before {\r\n  content: \"\\f14b\"; }\r\n\r\n.fa-pen-square::before {\r\n  content: \"\\f14b\"; }\r\n\r\n.fa-pencil-square::before {\r\n  content: \"\\f14b\"; }\r\n\r\n.fa-square-person-confined::before {\r\n  content: \"\\e577\"; }\r\n\r\n.fa-square-phone::before {\r\n  content: \"\\f098\"; }\r\n\r\n.fa-phone-square::before {\r\n  content: \"\\f098\"; }\r\n\r\n.fa-square-phone-flip::before {\r\n  content: \"\\f87b\"; }\r\n\r\n.fa-phone-square-alt::before {\r\n  content: \"\\f87b\"; }\r\n\r\n.fa-square-plus::before {\r\n  content: \"\\f0fe\"; }\r\n\r\n.fa-plus-square::before {\r\n  content: \"\\f0fe\"; }\r\n\r\n.fa-square-poll-horizontal::before {\r\n  content: \"\\f682\"; }\r\n\r\n.fa-poll-h::before {\r\n  content: \"\\f682\"; }\r\n\r\n.fa-square-poll-vertical::before {\r\n  content: \"\\f681\"; }\r\n\r\n.fa-poll::before {\r\n  content: \"\\f681\"; }\r\n\r\n.fa-square-root-variable::before {\r\n  content: \"\\f698\"; }\r\n\r\n.fa-square-root-alt::before {\r\n  content: \"\\f698\"; }\r\n\r\n.fa-square-rss::before {\r\n  content: \"\\f143\"; }\r\n\r\n.fa-rss-square::before {\r\n  content: \"\\f143\"; }\r\n\r\n.fa-square-share-nodes::before {\r\n  content: \"\\f1e1\"; }\r\n\r\n.fa-share-alt-square::before {\r\n  content: \"\\f1e1\"; }\r\n\r\n.fa-square-up-right::before {\r\n  content: \"\\f360\"; }\r\n\r\n.fa-external-link-square-alt::before {\r\n  content: \"\\f360\"; }\r\n\r\n.fa-square-virus::before {\r\n  content: \"\\e578\"; }\r\n\r\n.fa-square-xmark::before {\r\n  content: \"\\f2d3\"; }\r\n\r\n.fa-times-square::before {\r\n  content: \"\\f2d3\"; }\r\n\r\n.fa-xmark-square::before {\r\n  content: \"\\f2d3\"; }\r\n\r\n.fa-staff-aesculapius::before {\r\n  content: \"\\e579\"; }\r\n\r\n.fa-rod-asclepius::before {\r\n  content: \"\\e579\"; }\r\n\r\n.fa-rod-snake::before {\r\n  content: \"\\e579\"; }\r\n\r\n.fa-staff-snake::before {\r\n  content: \"\\e579\"; }\r\n\r\n.fa-stairs::before {\r\n  content: \"\\e289\"; }\r\n\r\n.fa-stamp::before {\r\n  content: \"\\f5bf\"; }\r\n\r\n.fa-star::before {\r\n  content: \"\\f005\"; }\r\n\r\n.fa-star-and-crescent::before {\r\n  content: \"\\f699\"; }\r\n\r\n.fa-star-half::before {\r\n  content: \"\\f089\"; }\r\n\r\n.fa-star-half-stroke::before {\r\n  content: \"\\f5c0\"; }\r\n\r\n.fa-star-half-alt::before {\r\n  content: \"\\f5c0\"; }\r\n\r\n.fa-star-of-david::before {\r\n  content: \"\\f69a\"; }\r\n\r\n.fa-star-of-life::before {\r\n  content: \"\\f621\"; }\r\n\r\n.fa-sterling-sign::before {\r\n  content: \"\\f154\"; }\r\n\r\n.fa-gbp::before {\r\n  content: \"\\f154\"; }\r\n\r\n.fa-pound-sign::before {\r\n  content: \"\\f154\"; }\r\n\r\n.fa-stethoscope::before {\r\n  content: \"\\f0f1\"; }\r\n\r\n.fa-stop::before {\r\n  content: \"\\f04d\"; }\r\n\r\n.fa-stopwatch::before {\r\n  content: \"\\f2f2\"; }\r\n\r\n.fa-stopwatch-20::before {\r\n  content: \"\\e06f\"; }\r\n\r\n.fa-store::before {\r\n  content: \"\\f54e\"; }\r\n\r\n.fa-store-slash::before {\r\n  content: \"\\e071\"; }\r\n\r\n.fa-street-view::before {\r\n  content: \"\\f21d\"; }\r\n\r\n.fa-strikethrough::before {\r\n  content: \"\\f0cc\"; }\r\n\r\n.fa-stroopwafel::before {\r\n  content: \"\\f551\"; }\r\n\r\n.fa-subscript::before {\r\n  content: \"\\f12c\"; }\r\n\r\n.fa-suitcase::before {\r\n  content: \"\\f0f2\"; }\r\n\r\n.fa-suitcase-medical::before {\r\n  content: \"\\f0fa\"; }\r\n\r\n.fa-medkit::before {\r\n  content: \"\\f0fa\"; }\r\n\r\n.fa-suitcase-rolling::before {\r\n  content: \"\\f5c1\"; }\r\n\r\n.fa-sun::before {\r\n  content: \"\\f185\"; }\r\n\r\n.fa-sun-plant-wilt::before {\r\n  content: \"\\e57a\"; }\r\n\r\n.fa-superscript::before {\r\n  content: \"\\f12b\"; }\r\n\r\n.fa-swatchbook::before {\r\n  content: \"\\f5c3\"; }\r\n\r\n.fa-synagogue::before {\r\n  content: \"\\f69b\"; }\r\n\r\n.fa-syringe::before {\r\n  content: \"\\f48e\"; }\r\n\r\n.fa-t::before {\r\n  content: \"\\54\"; }\r\n\r\n.fa-table::before {\r\n  content: \"\\f0ce\"; }\r\n\r\n.fa-table-cells::before {\r\n  content: \"\\f00a\"; }\r\n\r\n.fa-th::before {\r\n  content: \"\\f00a\"; }\r\n\r\n.fa-table-cells-large::before {\r\n  content: \"\\f009\"; }\r\n\r\n.fa-th-large::before {\r\n  content: \"\\f009\"; }\r\n\r\n.fa-table-columns::before {\r\n  content: \"\\f0db\"; }\r\n\r\n.fa-columns::before {\r\n  content: \"\\f0db\"; }\r\n\r\n.fa-table-list::before {\r\n  content: \"\\f00b\"; }\r\n\r\n.fa-th-list::before {\r\n  content: \"\\f00b\"; }\r\n\r\n.fa-table-tennis-paddle-ball::before {\r\n  content: \"\\f45d\"; }\r\n\r\n.fa-ping-pong-paddle-ball::before {\r\n  content: \"\\f45d\"; }\r\n\r\n.fa-table-tennis::before {\r\n  content: \"\\f45d\"; }\r\n\r\n.fa-tablet::before {\r\n  content: \"\\f3fb\"; }\r\n\r\n.fa-tablet-android::before {\r\n  content: \"\\f3fb\"; }\r\n\r\n.fa-tablet-button::before {\r\n  content: \"\\f10a\"; }\r\n\r\n.fa-tablet-screen-button::before {\r\n  content: \"\\f3fa\"; }\r\n\r\n.fa-tablet-alt::before {\r\n  content: \"\\f3fa\"; }\r\n\r\n.fa-tablets::before {\r\n  content: \"\\f490\"; }\r\n\r\n.fa-tachograph-digital::before {\r\n  content: \"\\f566\"; }\r\n\r\n.fa-digital-tachograph::before {\r\n  content: \"\\f566\"; }\r\n\r\n.fa-tag::before {\r\n  content: \"\\f02b\"; }\r\n\r\n.fa-tags::before {\r\n  content: \"\\f02c\"; }\r\n\r\n.fa-tape::before {\r\n  content: \"\\f4db\"; }\r\n\r\n.fa-tarp::before {\r\n  content: \"\\e57b\"; }\r\n\r\n.fa-tarp-droplet::before {\r\n  content: \"\\e57c\"; }\r\n\r\n.fa-taxi::before {\r\n  content: \"\\f1ba\"; }\r\n\r\n.fa-cab::before {\r\n  content: \"\\f1ba\"; }\r\n\r\n.fa-teeth::before {\r\n  content: \"\\f62e\"; }\r\n\r\n.fa-teeth-open::before {\r\n  content: \"\\f62f\"; }\r\n\r\n.fa-temperature-arrow-down::before {\r\n  content: \"\\e03f\"; }\r\n\r\n.fa-temperature-down::before {\r\n  content: \"\\e03f\"; }\r\n\r\n.fa-temperature-arrow-up::before {\r\n  content: \"\\e040\"; }\r\n\r\n.fa-temperature-up::before {\r\n  content: \"\\e040\"; }\r\n\r\n.fa-temperature-empty::before {\r\n  content: \"\\f2cb\"; }\r\n\r\n.fa-temperature-0::before {\r\n  content: \"\\f2cb\"; }\r\n\r\n.fa-thermometer-0::before {\r\n  content: \"\\f2cb\"; }\r\n\r\n.fa-thermometer-empty::before {\r\n  content: \"\\f2cb\"; }\r\n\r\n.fa-temperature-full::before {\r\n  content: \"\\f2c7\"; }\r\n\r\n.fa-temperature-4::before {\r\n  content: \"\\f2c7\"; }\r\n\r\n.fa-thermometer-4::before {\r\n  content: \"\\f2c7\"; }\r\n\r\n.fa-thermometer-full::before {\r\n  content: \"\\f2c7\"; }\r\n\r\n.fa-temperature-half::before {\r\n  content: \"\\f2c9\"; }\r\n\r\n.fa-temperature-2::before {\r\n  content: \"\\f2c9\"; }\r\n\r\n.fa-thermometer-2::before {\r\n  content: \"\\f2c9\"; }\r\n\r\n.fa-thermometer-half::before {\r\n  content: \"\\f2c9\"; }\r\n\r\n.fa-temperature-high::before {\r\n  content: \"\\f769\"; }\r\n\r\n.fa-temperature-low::before {\r\n  content: \"\\f76b\"; }\r\n\r\n.fa-temperature-quarter::before {\r\n  content: \"\\f2ca\"; }\r\n\r\n.fa-temperature-1::before {\r\n  content: \"\\f2ca\"; }\r\n\r\n.fa-thermometer-1::before {\r\n  content: \"\\f2ca\"; }\r\n\r\n.fa-thermometer-quarter::before {\r\n  content: \"\\f2ca\"; }\r\n\r\n.fa-temperature-three-quarters::before {\r\n  content: \"\\f2c8\"; }\r\n\r\n.fa-temperature-3::before {\r\n  content: \"\\f2c8\"; }\r\n\r\n.fa-thermometer-3::before {\r\n  content: \"\\f2c8\"; }\r\n\r\n.fa-thermometer-three-quarters::before {\r\n  content: \"\\f2c8\"; }\r\n\r\n.fa-tenge-sign::before {\r\n  content: \"\\f7d7\"; }\r\n\r\n.fa-tenge::before {\r\n  content: \"\\f7d7\"; }\r\n\r\n.fa-tent::before {\r\n  content: \"\\e57d\"; }\r\n\r\n.fa-tent-arrow-down-to-line::before {\r\n  content: \"\\e57e\"; }\r\n\r\n.fa-tent-arrow-left-right::before {\r\n  content: \"\\e57f\"; }\r\n\r\n.fa-tent-arrow-turn-left::before {\r\n  content: \"\\e580\"; }\r\n\r\n.fa-tent-arrows-down::before {\r\n  content: \"\\e581\"; }\r\n\r\n.fa-tents::before {\r\n  content: \"\\e582\"; }\r\n\r\n.fa-terminal::before {\r\n  content: \"\\f120\"; }\r\n\r\n.fa-text-height::before {\r\n  content: \"\\f034\"; }\r\n\r\n.fa-text-slash::before {\r\n  content: \"\\f87d\"; }\r\n\r\n.fa-remove-format::before {\r\n  content: \"\\f87d\"; }\r\n\r\n.fa-text-width::before {\r\n  content: \"\\f035\"; }\r\n\r\n.fa-thermometer::before {\r\n  content: \"\\f491\"; }\r\n\r\n.fa-thumbs-down::before {\r\n  content: \"\\f165\"; }\r\n\r\n.fa-thumbs-up::before {\r\n  content: \"\\f164\"; }\r\n\r\n.fa-thumbtack::before {\r\n  content: \"\\f08d\"; }\r\n\r\n.fa-thumb-tack::before {\r\n  content: \"\\f08d\"; }\r\n\r\n.fa-ticket::before {\r\n  content: \"\\f145\"; }\r\n\r\n.fa-ticket-simple::before {\r\n  content: \"\\f3ff\"; }\r\n\r\n.fa-ticket-alt::before {\r\n  content: \"\\f3ff\"; }\r\n\r\n.fa-timeline::before {\r\n  content: \"\\e29c\"; }\r\n\r\n.fa-toggle-off::before {\r\n  content: \"\\f204\"; }\r\n\r\n.fa-toggle-on::before {\r\n  content: \"\\f205\"; }\r\n\r\n.fa-toilet::before {\r\n  content: \"\\f7d8\"; }\r\n\r\n.fa-toilet-paper::before {\r\n  content: \"\\f71e\"; }\r\n\r\n.fa-toilet-paper-slash::before {\r\n  content: \"\\e072\"; }\r\n\r\n.fa-toilet-portable::before {\r\n  content: \"\\e583\"; }\r\n\r\n.fa-toilets-portable::before {\r\n  content: \"\\e584\"; }\r\n\r\n.fa-toolbox::before {\r\n  content: \"\\f552\"; }\r\n\r\n.fa-tooth::before {\r\n  content: \"\\f5c9\"; }\r\n\r\n.fa-torii-gate::before {\r\n  content: \"\\f6a1\"; }\r\n\r\n.fa-tornado::before {\r\n  content: \"\\f76f\"; }\r\n\r\n.fa-tower-broadcast::before {\r\n  content: \"\\f519\"; }\r\n\r\n.fa-broadcast-tower::before {\r\n  content: \"\\f519\"; }\r\n\r\n.fa-tower-cell::before {\r\n  content: \"\\e585\"; }\r\n\r\n.fa-tower-observation::before {\r\n  content: \"\\e586\"; }\r\n\r\n.fa-tractor::before {\r\n  content: \"\\f722\"; }\r\n\r\n.fa-trademark::before {\r\n  content: \"\\f25c\"; }\r\n\r\n.fa-traffic-light::before {\r\n  content: \"\\f637\"; }\r\n\r\n.fa-trailer::before {\r\n  content: \"\\e041\"; }\r\n\r\n.fa-train::before {\r\n  content: \"\\f238\"; }\r\n\r\n.fa-train-subway::before {\r\n  content: \"\\f239\"; }\r\n\r\n.fa-subway::before {\r\n  content: \"\\f239\"; }\r\n\r\n.fa-train-tram::before {\r\n  content: \"\\f7da\"; }\r\n\r\n.fa-tram::before {\r\n  content: \"\\f7da\"; }\r\n\r\n.fa-transgender::before {\r\n  content: \"\\f225\"; }\r\n\r\n.fa-transgender-alt::before {\r\n  content: \"\\f225\"; }\r\n\r\n.fa-trash::before {\r\n  content: \"\\f1f8\"; }\r\n\r\n.fa-trash-arrow-up::before {\r\n  content: \"\\f829\"; }\r\n\r\n.fa-trash-restore::before {\r\n  content: \"\\f829\"; }\r\n\r\n.fa-trash-can::before {\r\n  content: \"\\f2ed\"; }\r\n\r\n.fa-trash-alt::before {\r\n  content: \"\\f2ed\"; }\r\n\r\n.fa-trash-can-arrow-up::before {\r\n  content: \"\\f82a\"; }\r\n\r\n.fa-trash-restore-alt::before {\r\n  content: \"\\f82a\"; }\r\n\r\n.fa-tree::before {\r\n  content: \"\\f1bb\"; }\r\n\r\n.fa-tree-city::before {\r\n  content: \"\\e587\"; }\r\n\r\n.fa-triangle-exclamation::before {\r\n  content: \"\\f071\"; }\r\n\r\n.fa-exclamation-triangle::before {\r\n  content: \"\\f071\"; }\r\n\r\n.fa-warning::before {\r\n  content: \"\\f071\"; }\r\n\r\n.fa-trophy::before {\r\n  content: \"\\f091\"; }\r\n\r\n.fa-trowel::before {\r\n  content: \"\\e589\"; }\r\n\r\n.fa-trowel-bricks::before {\r\n  content: \"\\e58a\"; }\r\n\r\n.fa-truck::before {\r\n  content: \"\\f0d1\"; }\r\n\r\n.fa-truck-arrow-right::before {\r\n  content: \"\\e58b\"; }\r\n\r\n.fa-truck-droplet::before {\r\n  content: \"\\e58c\"; }\r\n\r\n.fa-truck-fast::before {\r\n  content: \"\\f48b\"; }\r\n\r\n.fa-shipping-fast::before {\r\n  content: \"\\f48b\"; }\r\n\r\n.fa-truck-field::before {\r\n  content: \"\\e58d\"; }\r\n\r\n.fa-truck-field-un::before {\r\n  content: \"\\e58e\"; }\r\n\r\n.fa-truck-front::before {\r\n  content: \"\\e2b7\"; }\r\n\r\n.fa-truck-medical::before {\r\n  content: \"\\f0f9\"; }\r\n\r\n.fa-ambulance::before {\r\n  content: \"\\f0f9\"; }\r\n\r\n.fa-truck-monster::before {\r\n  content: \"\\f63b\"; }\r\n\r\n.fa-truck-moving::before {\r\n  content: \"\\f4df\"; }\r\n\r\n.fa-truck-pickup::before {\r\n  content: \"\\f63c\"; }\r\n\r\n.fa-truck-plane::before {\r\n  content: \"\\e58f\"; }\r\n\r\n.fa-truck-ramp-box::before {\r\n  content: \"\\f4de\"; }\r\n\r\n.fa-truck-loading::before {\r\n  content: \"\\f4de\"; }\r\n\r\n.fa-tty::before {\r\n  content: \"\\f1e4\"; }\r\n\r\n.fa-teletype::before {\r\n  content: \"\\f1e4\"; }\r\n\r\n.fa-turkish-lira-sign::before {\r\n  content: \"\\e2bb\"; }\r\n\r\n.fa-try::before {\r\n  content: \"\\e2bb\"; }\r\n\r\n.fa-turkish-lira::before {\r\n  content: \"\\e2bb\"; }\r\n\r\n.fa-turn-down::before {\r\n  content: \"\\f3be\"; }\r\n\r\n.fa-level-down-alt::before {\r\n  content: \"\\f3be\"; }\r\n\r\n.fa-turn-up::before {\r\n  content: \"\\f3bf\"; }\r\n\r\n.fa-level-up-alt::before {\r\n  content: \"\\f3bf\"; }\r\n\r\n.fa-tv::before {\r\n  content: \"\\f26c\"; }\r\n\r\n.fa-television::before {\r\n  content: \"\\f26c\"; }\r\n\r\n.fa-tv-alt::before {\r\n  content: \"\\f26c\"; }\r\n\r\n.fa-u::before {\r\n  content: \"\\55\"; }\r\n\r\n.fa-umbrella::before {\r\n  content: \"\\f0e9\"; }\r\n\r\n.fa-umbrella-beach::before {\r\n  content: \"\\f5ca\"; }\r\n\r\n.fa-underline::before {\r\n  content: \"\\f0cd\"; }\r\n\r\n.fa-universal-access::before {\r\n  content: \"\\f29a\"; }\r\n\r\n.fa-unlock::before {\r\n  content: \"\\f09c\"; }\r\n\r\n.fa-unlock-keyhole::before {\r\n  content: \"\\f13e\"; }\r\n\r\n.fa-unlock-alt::before {\r\n  content: \"\\f13e\"; }\r\n\r\n.fa-up-down::before {\r\n  content: \"\\f338\"; }\r\n\r\n.fa-arrows-alt-v::before {\r\n  content: \"\\f338\"; }\r\n\r\n.fa-up-down-left-right::before {\r\n  content: \"\\f0b2\"; }\r\n\r\n.fa-arrows-alt::before {\r\n  content: \"\\f0b2\"; }\r\n\r\n.fa-up-long::before {\r\n  content: \"\\f30c\"; }\r\n\r\n.fa-long-arrow-alt-up::before {\r\n  content: \"\\f30c\"; }\r\n\r\n.fa-up-right-and-down-left-from-center::before {\r\n  content: \"\\f424\"; }\r\n\r\n.fa-expand-alt::before {\r\n  content: \"\\f424\"; }\r\n\r\n.fa-up-right-from-square::before {\r\n  content: \"\\f35d\"; }\r\n\r\n.fa-external-link-alt::before {\r\n  content: \"\\f35d\"; }\r\n\r\n.fa-upload::before {\r\n  content: \"\\f093\"; }\r\n\r\n.fa-user::before {\r\n  content: \"\\f007\"; }\r\n\r\n.fa-user-astronaut::before {\r\n  content: \"\\f4fb\"; }\r\n\r\n.fa-user-check::before {\r\n  content: \"\\f4fc\"; }\r\n\r\n.fa-user-clock::before {\r\n  content: \"\\f4fd\"; }\r\n\r\n.fa-user-doctor::before {\r\n  content: \"\\f0f0\"; }\r\n\r\n.fa-user-md::before {\r\n  content: \"\\f0f0\"; }\r\n\r\n.fa-user-gear::before {\r\n  content: \"\\f4fe\"; }\r\n\r\n.fa-user-cog::before {\r\n  content: \"\\f4fe\"; }\r\n\r\n.fa-user-graduate::before {\r\n  content: \"\\f501\"; }\r\n\r\n.fa-user-group::before {\r\n  content: \"\\f500\"; }\r\n\r\n.fa-user-friends::before {\r\n  content: \"\\f500\"; }\r\n\r\n.fa-user-injured::before {\r\n  content: \"\\f728\"; }\r\n\r\n.fa-user-large::before {\r\n  content: \"\\f406\"; }\r\n\r\n.fa-user-alt::before {\r\n  content: \"\\f406\"; }\r\n\r\n.fa-user-large-slash::before {\r\n  content: \"\\f4fa\"; }\r\n\r\n.fa-user-alt-slash::before {\r\n  content: \"\\f4fa\"; }\r\n\r\n.fa-user-lock::before {\r\n  content: \"\\f502\"; }\r\n\r\n.fa-user-minus::before {\r\n  content: \"\\f503\"; }\r\n\r\n.fa-user-ninja::before {\r\n  content: \"\\f504\"; }\r\n\r\n.fa-user-nurse::before {\r\n  content: \"\\f82f\"; }\r\n\r\n.fa-user-pen::before {\r\n  content: \"\\f4ff\"; }\r\n\r\n.fa-user-edit::before {\r\n  content: \"\\f4ff\"; }\r\n\r\n.fa-user-plus::before {\r\n  content: \"\\f234\"; }\r\n\r\n.fa-user-secret::before {\r\n  content: \"\\f21b\"; }\r\n\r\n.fa-user-shield::before {\r\n  content: \"\\f505\"; }\r\n\r\n.fa-user-slash::before {\r\n  content: \"\\f506\"; }\r\n\r\n.fa-user-tag::before {\r\n  content: \"\\f507\"; }\r\n\r\n.fa-user-tie::before {\r\n  content: \"\\f508\"; }\r\n\r\n.fa-user-xmark::before {\r\n  content: \"\\f235\"; }\r\n\r\n.fa-user-times::before {\r\n  content: \"\\f235\"; }\r\n\r\n.fa-users::before {\r\n  content: \"\\f0c0\"; }\r\n\r\n.fa-users-between-lines::before {\r\n  content: \"\\e591\"; }\r\n\r\n.fa-users-gear::before {\r\n  content: \"\\f509\"; }\r\n\r\n.fa-users-cog::before {\r\n  content: \"\\f509\"; }\r\n\r\n.fa-users-line::before {\r\n  content: \"\\e592\"; }\r\n\r\n.fa-users-rays::before {\r\n  content: \"\\e593\"; }\r\n\r\n.fa-users-rectangle::before {\r\n  content: \"\\e594\"; }\r\n\r\n.fa-users-slash::before {\r\n  content: \"\\e073\"; }\r\n\r\n.fa-users-viewfinder::before {\r\n  content: \"\\e595\"; }\r\n\r\n.fa-utensils::before {\r\n  content: \"\\f2e7\"; }\r\n\r\n.fa-cutlery::before {\r\n  content: \"\\f2e7\"; }\r\n\r\n.fa-v::before {\r\n  content: \"\\56\"; }\r\n\r\n.fa-van-shuttle::before {\r\n  content: \"\\f5b6\"; }\r\n\r\n.fa-shuttle-van::before {\r\n  content: \"\\f5b6\"; }\r\n\r\n.fa-vault::before {\r\n  content: \"\\e2c5\"; }\r\n\r\n.fa-vector-square::before {\r\n  content: \"\\f5cb\"; }\r\n\r\n.fa-venus::before {\r\n  content: \"\\f221\"; }\r\n\r\n.fa-venus-double::before {\r\n  content: \"\\f226\"; }\r\n\r\n.fa-venus-mars::before {\r\n  content: \"\\f228\"; }\r\n\r\n.fa-vest::before {\r\n  content: \"\\e085\"; }\r\n\r\n.fa-vest-patches::before {\r\n  content: \"\\e086\"; }\r\n\r\n.fa-vial::before {\r\n  content: \"\\f492\"; }\r\n\r\n.fa-vial-circle-check::before {\r\n  content: \"\\e596\"; }\r\n\r\n.fa-vial-virus::before {\r\n  content: \"\\e597\"; }\r\n\r\n.fa-vials::before {\r\n  content: \"\\f493\"; }\r\n\r\n.fa-video::before {\r\n  content: \"\\f03d\"; }\r\n\r\n.fa-video-camera::before {\r\n  content: \"\\f03d\"; }\r\n\r\n.fa-video-slash::before {\r\n  content: \"\\f4e2\"; }\r\n\r\n.fa-vihara::before {\r\n  content: \"\\f6a7\"; }\r\n\r\n.fa-virus::before {\r\n  content: \"\\e074\"; }\r\n\r\n.fa-virus-covid::before {\r\n  content: \"\\e4a8\"; }\r\n\r\n.fa-virus-covid-slash::before {\r\n  content: \"\\e4a9\"; }\r\n\r\n.fa-virus-slash::before {\r\n  content: \"\\e075\"; }\r\n\r\n.fa-viruses::before {\r\n  content: \"\\e076\"; }\r\n\r\n.fa-voicemail::before {\r\n  content: \"\\f897\"; }\r\n\r\n.fa-volcano::before {\r\n  content: \"\\f770\"; }\r\n\r\n.fa-volleyball::before {\r\n  content: \"\\f45f\"; }\r\n\r\n.fa-volleyball-ball::before {\r\n  content: \"\\f45f\"; }\r\n\r\n.fa-volume-high::before {\r\n  content: \"\\f028\"; }\r\n\r\n.fa-volume-up::before {\r\n  content: \"\\f028\"; }\r\n\r\n.fa-volume-low::before {\r\n  content: \"\\f027\"; }\r\n\r\n.fa-volume-down::before {\r\n  content: \"\\f027\"; }\r\n\r\n.fa-volume-off::before {\r\n  content: \"\\f026\"; }\r\n\r\n.fa-volume-xmark::before {\r\n  content: \"\\f6a9\"; }\r\n\r\n.fa-volume-mute::before {\r\n  content: \"\\f6a9\"; }\r\n\r\n.fa-volume-times::before {\r\n  content: \"\\f6a9\"; }\r\n\r\n.fa-vr-cardboard::before {\r\n  content: \"\\f729\"; }\r\n\r\n.fa-w::before {\r\n  content: \"\\57\"; }\r\n\r\n.fa-walkie-talkie::before {\r\n  content: \"\\f8ef\"; }\r\n\r\n.fa-wallet::before {\r\n  content: \"\\f555\"; }\r\n\r\n.fa-wand-magic::before {\r\n  content: \"\\f0d0\"; }\r\n\r\n.fa-magic::before {\r\n  content: \"\\f0d0\"; }\r\n\r\n.fa-wand-magic-sparkles::before {\r\n  content: \"\\e2ca\"; }\r\n\r\n.fa-magic-wand-sparkles::before {\r\n  content: \"\\e2ca\"; }\r\n\r\n.fa-wand-sparkles::before {\r\n  content: \"\\f72b\"; }\r\n\r\n.fa-warehouse::before {\r\n  content: \"\\f494\"; }\r\n\r\n.fa-water::before {\r\n  content: \"\\f773\"; }\r\n\r\n.fa-water-ladder::before {\r\n  content: \"\\f5c5\"; }\r\n\r\n.fa-ladder-water::before {\r\n  content: \"\\f5c5\"; }\r\n\r\n.fa-swimming-pool::before {\r\n  content: \"\\f5c5\"; }\r\n\r\n.fa-wave-square::before {\r\n  content: \"\\f83e\"; }\r\n\r\n.fa-weight-hanging::before {\r\n  content: \"\\f5cd\"; }\r\n\r\n.fa-weight-scale::before {\r\n  content: \"\\f496\"; }\r\n\r\n.fa-weight::before {\r\n  content: \"\\f496\"; }\r\n\r\n.fa-wheat-awn::before {\r\n  content: \"\\e2cd\"; }\r\n\r\n.fa-wheat-alt::before {\r\n  content: \"\\e2cd\"; }\r\n\r\n.fa-wheat-awn-circle-exclamation::before {\r\n  content: \"\\e598\"; }\r\n\r\n.fa-wheelchair::before {\r\n  content: \"\\f193\"; }\r\n\r\n.fa-wheelchair-move::before {\r\n  content: \"\\e2ce\"; }\r\n\r\n.fa-wheelchair-alt::before {\r\n  content: \"\\e2ce\"; }\r\n\r\n.fa-whiskey-glass::before {\r\n  content: \"\\f7a0\"; }\r\n\r\n.fa-glass-whiskey::before {\r\n  content: \"\\f7a0\"; }\r\n\r\n.fa-wifi::before {\r\n  content: \"\\f1eb\"; }\r\n\r\n.fa-wifi-3::before {\r\n  content: \"\\f1eb\"; }\r\n\r\n.fa-wifi-strong::before {\r\n  content: \"\\f1eb\"; }\r\n\r\n.fa-wind::before {\r\n  content: \"\\f72e\"; }\r\n\r\n.fa-window-maximize::before {\r\n  content: \"\\f2d0\"; }\r\n\r\n.fa-window-minimize::before {\r\n  content: \"\\f2d1\"; }\r\n\r\n.fa-window-restore::before {\r\n  content: \"\\f2d2\"; }\r\n\r\n.fa-wine-bottle::before {\r\n  content: \"\\f72f\"; }\r\n\r\n.fa-wine-glass::before {\r\n  content: \"\\f4e3\"; }\r\n\r\n.fa-wine-glass-empty::before {\r\n  content: \"\\f5ce\"; }\r\n\r\n.fa-wine-glass-alt::before {\r\n  content: \"\\f5ce\"; }\r\n\r\n.fa-won-sign::before {\r\n  content: \"\\f159\"; }\r\n\r\n.fa-krw::before {\r\n  content: \"\\f159\"; }\r\n\r\n.fa-won::before {\r\n  content: \"\\f159\"; }\r\n\r\n.fa-worm::before {\r\n  content: \"\\e599\"; }\r\n\r\n.fa-wrench::before {\r\n  content: \"\\f0ad\"; }\r\n\r\n.fa-x::before {\r\n  content: \"\\58\"; }\r\n\r\n.fa-x-ray::before {\r\n  content: \"\\f497\"; }\r\n\r\n.fa-xmark::before {\r\n  content: \"\\f00d\"; }\r\n\r\n.fa-close::before {\r\n  content: \"\\f00d\"; }\r\n\r\n.fa-multiply::before {\r\n  content: \"\\f00d\"; }\r\n\r\n.fa-remove::before {\r\n  content: \"\\f00d\"; }\r\n\r\n.fa-times::before {\r\n  content: \"\\f00d\"; }\r\n\r\n.fa-xmarks-lines::before {\r\n  content: \"\\e59a\"; }\r\n\r\n.fa-y::before {\r\n  content: \"\\59\"; }\r\n\r\n.fa-yen-sign::before {\r\n  content: \"\\f157\"; }\r\n\r\n.fa-cny::before {\r\n  content: \"\\f157\"; }\r\n\r\n.fa-jpy::before {\r\n  content: \"\\f157\"; }\r\n\r\n.fa-rmb::before {\r\n  content: \"\\f157\"; }\r\n\r\n.fa-yen::before {\r\n  content: \"\\f157\"; }\r\n\r\n.fa-yin-yang::before {\r\n  content: \"\\f6ad\"; }\r\n\r\n.fa-z::before {\r\n  content: \"\\5a\"; }\r\n\r\n.sr-only,\r\n.fa-sr-only {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  white-space: nowrap;\r\n  border-width: 0; }\r\n\r\n.sr-only-focusable:not(:focus),\r\n.fa-sr-only-focusable:not(:focus) {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  white-space: nowrap;\r\n  border-width: 0; }\r\n", "",{"version":3,"sources":["webpack://./src/comp/ui/common/header/fontawesome-free-6.1.1-web/css/fontawesome.css"],"names":[],"mappings":"AAAA;;;;EAIE;AACF;EACE,0DAA0D;EAC1D,iCAAiC,EAAE;;AAErC;;;;;;;;;;;;;EAaE,kCAAkC;EAClC,mCAAmC;EACnC,wCAAwC;EACxC,kBAAkB;EAClB,oBAAoB;EACpB,cAAc;EACd,oBAAoB,EAAE;;AAExB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,eAAe,EAAE;;AAEnB;EACE,kBAAkB;EAClB,kBAAkB;EAClB,uBAAuB,EAAE;;AAE3B;EACE,iBAAiB;EACjB,sBAAsB;EACtB,uBAAuB,EAAE;;AAE3B;EACE,kBAAkB;EAClB,sBAAsB;EACtB,yBAAyB,EAAE;;AAE7B;EACE,iBAAiB;EACjB,mBAAmB;EACnB,wBAAwB,EAAE;;AAE5B;EACE,gBAAgB;EAChB,sBAAsB;EACtB,wBAAwB,EAAE;;AAE5B;EACE,cAAc;EACd,sBAAsB;EACtB,yBAAyB,EAAE;;AAE7B;EACE,kBAAkB;EAClB,aAAa,EAAE;;AAEjB;EACE,qBAAqB;EACrB,uCAAuC;EACvC,eAAe,EAAE;EACjB;IACE,kBAAkB,EAAE;;AAExB;EACE,wCAAwC;EACxC,kBAAkB;EAClB,kBAAkB;EAClB,8BAA8B;EAC9B,oBAAoB,EAAE;;AAExB;EACE,0CAA0C;EAC1C,6CAA6C;EAC7C,2CAA2C;EAC3C,4CAA4C;EAC5C,sDAAsD,EAAE;;AAE1D;EACE,WAAW;EACX,0CAA0C,EAAE;;AAE9C;EACE,YAAY;EACZ,yCAAyC,EAAE;;AAE7C;EACE,+BAA+B;UACvB,uBAAuB;EAC/B,qDAAqD;UAC7C,6CAA6C;EACrD,kEAAkE;UAC1D,0DAA0D;EAClE,4DAA4D;UACpD,oDAAoD;EAC5D,gFAAgF;UACxE,wEAAwE;EAChF,0EAA0E;UAClE,kEAAkE,EAAE;;AAE9E;EACE,iCAAiC;UACzB,yBAAyB;EACjC,qDAAqD;UAC7C,6CAA6C;EACrD,kEAAkE;UAC1D,0DAA0D;EAClE,4DAA4D;UACpD,oDAAoD;EAC5D,gFAAgF;UACxE,wEAAwE;EAChF,gGAAgG;UACxF,wFAAwF,EAAE;;AAEpG;EACE,+BAA+B;UACvB,uBAAuB;EAC/B,qDAAqD;UAC7C,6CAA6C;EACrD,kEAAkE;UAC1D,0DAA0D;EAClE,4DAA4D;UACpD,oDAAoD;EAC5D,gFAAgF;UACxE,wEAAwE;EAChF,2FAA2F;UACnF,mFAAmF,EAAE;;AAE/F;EACE,oCAAoC;UAC5B,4BAA4B;EACpC,qDAAqD;UAC7C,6CAA6C;EACrD,kEAAkE;UAC1D,0DAA0D;EAClE,4DAA4D;UACpD,oDAAoD;EAC5D,gFAAgF;UACxE,wEAAwE;EAChF,2FAA2F;UACnF,mFAAmF,EAAE;;AAE/F;EACE,+BAA+B;UACvB,uBAAuB;EAC/B,qDAAqD;UAC7C,6CAA6C;EACrD,kEAAkE;UAC1D,0DAA0D;EAClE,4DAA4D;UACpD,oDAAoD;EAC5D,gFAAgF;UACxE,wEAAwE;EAChF,0EAA0E;UAClE,kEAAkE,EAAE;;AAE9E;EACE,gCAAgC;UACxB,wBAAwB;EAChC,qDAAqD;UAC7C,6CAA6C;EACrD,kEAAkE;UAC1D,0DAA0D;EAClE,4DAA4D;UACpD,oDAAoD;EAC5D,gFAAgF;UACxE,wEAAwE;EAChF,qEAAqE;UAC7D,6DAA6D,EAAE;;AAEzE;EACE,+BAA+B;UACvB,uBAAuB;EAC/B,qDAAqD;UAC7C,6CAA6C;EACrD,kEAAkE;UAC1D,0DAA0D;EAClE,4DAA4D;UACpD,oDAAoD;EAC5D,gFAAgF;UACxE,wEAAwE;EAChF,qEAAqE;UAC7D,6DAA6D,EAAE;;AAEzE;EACE,iCAAiC,EAAE;;AAErC;;EAEE,+BAA+B;UACvB,uBAAuB;EAC/B,kEAAkE;UAC1D,0DAA0D;EAClE,4DAA4D;UACpD,oDAAoD;EAC5D,gFAAgF;UACxE,wEAAwE;EAChF,uEAAuE;UAC/D,+DAA+D,EAAE;;AAE3E;EACE;;;;;;;;;IASE,6BAA6B;YACrB,qBAAqB;IAC7B,+BAA+B;YACvB,uBAAuB;IAC/B,oCAAoC;YAC5B,4BAA4B;IACpC,oBAAoB;IACpB,uBAAuB,EAAE,EAAE;;AAE/B;EACE;IACE,2BAA2B;YACnB,mBAAmB,EAAE;EAC/B;IACE,oDAAoD;YAC5C,4CAA4C,EAAE,EAAE;;AAE5D;EACE;IACE,2BAA2B;YACnB,mBAAmB,EAAE;EAC/B;IACE,oDAAoD;YAC5C,4CAA4C,EAAE,EAAE;;AAE5D;EACE;IACE,4CAA4C;YACpC,oCAAoC,EAAE;EAChD;IACE,gHAAgH;YACxG,wGAAwG,EAAE;EACpH;IACE,4IAA4I;YACpI,oIAAoI,EAAE;EAChJ;IACE,gHAAgH;YACxG,wGAAwG,EAAE;EACpH;IACE,6EAA6E;YACrE,qEAAqE,EAAE;EACjF;IACE,4CAA4C;YACpC,oCAAoC,EAAE;EAChD;IACE,4CAA4C;YACpC,oCAAoC,EAAE,EAAE;;AAEpD;EACE;IACE,4CAA4C;YACpC,oCAAoC,EAAE;EAChD;IACE,gHAAgH;YACxG,wGAAwG,EAAE;EACpH;IACE,4IAA4I;YACpI,oIAAoI,EAAE;EAChJ;IACE,gHAAgH;YACxG,wGAAwG,EAAE;EACpH;IACE,6EAA6E;YACrE,qEAAqE,EAAE;EACjF;IACE,4CAA4C;YACpC,oCAAoC,EAAE;EAChD;IACE,4CAA4C;YACpC,oCAAoC,EAAE,EAAE;;AAEpD;EACE;IACE,oCAAoC,EAAE,EAAE;;AAE5C;EACE;IACE,oCAAoC,EAAE,EAAE;;AAE5C;EACE;IACE,yCAAyC;IACzC,2BAA2B;YACnB,mBAAmB,EAAE;EAC/B;IACE,UAAU;IACV,0DAA0D;YAClD,kDAAkD,EAAE,EAAE;;AAElE;EACE;IACE,yCAAyC;IACzC,2BAA2B;YACnB,mBAAmB,EAAE;EAC/B;IACE,UAAU;IACV,0DAA0D;YAClD,kDAAkD,EAAE,EAAE;;AAElE;EACE;IACE,yHAAyH;YACjH,iHAAiH,EAAE,EAAE;;AAEjI;EACE;IACE,yHAAyH;YACjH,iHAAiH,EAAE,EAAE;;AAEjI;EACE;IACE,iCAAiC;YACzB,yBAAyB,EAAE;EACrC;IACE,gCAAgC;YACxB,wBAAwB,EAAE;EACpC;IACE,iCAAiC;YACzB,yBAAyB,EAAE;EACrC;IACE,gCAAgC;YACxB,wBAAwB,EAAE;EACpC;IACE,iCAAiC;YACzB,yBAAyB,EAAE;EACrC;IACE,gCAAgC;YACxB,wBAAwB,EAAE;EACpC;IACE,iCAAiC;YACzB,yBAAyB,EAAE;EACrC;IACE,gCAAgC;YACxB,wBAAwB,EAAE;EACpC;IACE,+BAA+B;YACvB,uBAAuB,EAAE,EAAE;;AAEvC;EACE;IACE,iCAAiC;YACzB,yBAAyB,EAAE;EACrC;IACE,gCAAgC;YACxB,wBAAwB,EAAE;EACpC;IACE,iCAAiC;YACzB,yBAAyB,EAAE;EACrC;IACE,gCAAgC;YACxB,wBAAwB,EAAE;EACpC;IACE,iCAAiC;YACzB,yBAAyB,EAAE;EACrC;IACE,gCAAgC;YACxB,wBAAwB,EAAE;EACpC;IACE,iCAAiC;YACzB,yBAAyB,EAAE;EACrC;IACE,gCAAgC;YACxB,wBAAwB,EAAE;EACpC;IACE,+BAA+B;YACvB,uBAAuB,EAAE,EAAE;;AAEvC;EACE;IACE,+BAA+B;YACvB,uBAAuB,EAAE;EACnC;IACE,iCAAiC;YACzB,yBAAyB,EAAE,EAAE;;AAEzC;EACE;IACE,+BAA+B;YACvB,uBAAuB,EAAE;EACnC;IACE,iCAAiC;YACzB,yBAAyB,EAAE,EAAE;;AAEzC;EACE,gCAAgC;UACxB,wBAAwB,EAAE;;AAEpC;EACE,iCAAiC;UACzB,yBAAyB,EAAE;;AAErC;EACE,iCAAiC;UACzB,yBAAyB,EAAE;;AAErC;EACE,+BAA+B;UACvB,uBAAuB,EAAE;;AAEnC;EACE,+BAA+B;UACvB,uBAAuB,EAAE;;AAEnC;;EAEE,gCAAgC;UACxB,wBAAwB,EAAE;;AAEpC;EACE,uDAAuD;UAC/C,+CAA+C,EAAE;;AAE3D;EACE,qBAAqB;EACrB,WAAW;EACX,gBAAgB;EAChB,kBAAkB;EAClB,sBAAsB;EACtB,YAAY,EAAE;;AAEhB;;EAEE,OAAO;EACP,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;EACX,sCAAsC,EAAE;;AAE1C;EACE,oBAAoB,EAAE;;AAExB;EACE,cAAc,EAAE;;AAElB;EACE,8BAA8B,EAAE;;AAElC;gEACgE;AAChE;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;;EAEE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,UAAU;EACV,YAAY;EACZ,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;EACnB,eAAe,EAAE;;AAEnB;;EAEE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,UAAU;EACV,YAAY;EACZ,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;EACnB,eAAe,EAAE","sourcesContent":["/*!\r\n * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com\r\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\r\n * Copyright 2022 Fonticons, Inc.\r\n */\r\n.fa {\r\n  font-family: var(--fa-style-family, \"Font Awesome 6 Free\");\r\n  font-weight: var(--fa-style, 900); }\r\n\r\n.fa,\r\n.fas,\r\n.fa-solid,\r\n.far,\r\n.fa-regular,\r\n.fal,\r\n.fa-light,\r\n.fat,\r\n.fa-thin,\r\n.fad,\r\n.fa-duotone,\r\n.fab,\r\n.fa-brands {\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  display: var(--fa-display, inline-block);\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  line-height: 1;\r\n  text-rendering: auto; }\r\n\r\n.fa-1x {\r\n  font-size: 1em; }\r\n\r\n.fa-2x {\r\n  font-size: 2em; }\r\n\r\n.fa-3x {\r\n  font-size: 3em; }\r\n\r\n.fa-4x {\r\n  font-size: 4em; }\r\n\r\n.fa-5x {\r\n  font-size: 5em; }\r\n\r\n.fa-6x {\r\n  font-size: 6em; }\r\n\r\n.fa-7x {\r\n  font-size: 7em; }\r\n\r\n.fa-8x {\r\n  font-size: 8em; }\r\n\r\n.fa-9x {\r\n  font-size: 9em; }\r\n\r\n.fa-10x {\r\n  font-size: 10em; }\r\n\r\n.fa-2xs {\r\n  font-size: 0.625em;\r\n  line-height: 0.1em;\r\n  vertical-align: 0.225em; }\r\n\r\n.fa-xs {\r\n  font-size: 0.75em;\r\n  line-height: 0.08333em;\r\n  vertical-align: 0.125em; }\r\n\r\n.fa-sm {\r\n  font-size: 0.875em;\r\n  line-height: 0.07143em;\r\n  vertical-align: 0.05357em; }\r\n\r\n.fa-lg {\r\n  font-size: 1.25em;\r\n  line-height: 0.05em;\r\n  vertical-align: -0.075em; }\r\n\r\n.fa-xl {\r\n  font-size: 1.5em;\r\n  line-height: 0.04167em;\r\n  vertical-align: -0.125em; }\r\n\r\n.fa-2xl {\r\n  font-size: 2em;\r\n  line-height: 0.03125em;\r\n  vertical-align: -0.1875em; }\r\n\r\n.fa-fw {\r\n  text-align: center;\r\n  width: 1.25em; }\r\n\r\n.fa-ul {\r\n  list-style-type: none;\r\n  margin-left: var(--fa-li-margin, 2.5em);\r\n  padding-left: 0; }\r\n  .fa-ul > li {\r\n    position: relative; }\r\n\r\n.fa-li {\r\n  left: calc(var(--fa-li-width, 2em) * -1);\r\n  position: absolute;\r\n  text-align: center;\r\n  width: var(--fa-li-width, 2em);\r\n  line-height: inherit; }\r\n\r\n.fa-border {\r\n  border-color: var(--fa-border-color, #eee);\r\n  border-radius: var(--fa-border-radius, 0.1em);\r\n  border-style: var(--fa-border-style, solid);\r\n  border-width: var(--fa-border-width, 0.08em);\r\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em); }\r\n\r\n.fa-pull-left {\r\n  float: left;\r\n  margin-right: var(--fa-pull-margin, 0.3em); }\r\n\r\n.fa-pull-right {\r\n  float: right;\r\n  margin-left: var(--fa-pull-margin, 0.3em); }\r\n\r\n.fa-beat {\r\n  -webkit-animation-name: fa-beat;\r\n          animation-name: fa-beat;\r\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\r\n          animation-delay: var(--fa-animation-delay, 0);\r\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\r\n          animation-direction: var(--fa-animation-direction, normal);\r\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\r\n          animation-duration: var(--fa-animation-duration, 1s);\r\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\r\n          animation-timing-function: var(--fa-animation-timing, ease-in-out); }\r\n\r\n.fa-bounce {\r\n  -webkit-animation-name: fa-bounce;\r\n          animation-name: fa-bounce;\r\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\r\n          animation-delay: var(--fa-animation-delay, 0);\r\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\r\n          animation-direction: var(--fa-animation-direction, normal);\r\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\r\n          animation-duration: var(--fa-animation-duration, 1s);\r\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\r\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1)); }\r\n\r\n.fa-fade {\r\n  -webkit-animation-name: fa-fade;\r\n          animation-name: fa-fade;\r\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\r\n          animation-delay: var(--fa-animation-delay, 0);\r\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\r\n          animation-direction: var(--fa-animation-direction, normal);\r\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\r\n          animation-duration: var(--fa-animation-duration, 1s);\r\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\r\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1)); }\r\n\r\n.fa-beat-fade {\r\n  -webkit-animation-name: fa-beat-fade;\r\n          animation-name: fa-beat-fade;\r\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\r\n          animation-delay: var(--fa-animation-delay, 0);\r\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\r\n          animation-direction: var(--fa-animation-direction, normal);\r\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\r\n          animation-duration: var(--fa-animation-duration, 1s);\r\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\r\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1)); }\r\n\r\n.fa-flip {\r\n  -webkit-animation-name: fa-flip;\r\n          animation-name: fa-flip;\r\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\r\n          animation-delay: var(--fa-animation-delay, 0);\r\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\r\n          animation-direction: var(--fa-animation-direction, normal);\r\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\r\n          animation-duration: var(--fa-animation-duration, 1s);\r\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\r\n          animation-timing-function: var(--fa-animation-timing, ease-in-out); }\r\n\r\n.fa-shake {\r\n  -webkit-animation-name: fa-shake;\r\n          animation-name: fa-shake;\r\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\r\n          animation-delay: var(--fa-animation-delay, 0);\r\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\r\n          animation-direction: var(--fa-animation-direction, normal);\r\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\r\n          animation-duration: var(--fa-animation-duration, 1s);\r\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\r\n          animation-timing-function: var(--fa-animation-timing, linear); }\r\n\r\n.fa-spin {\r\n  -webkit-animation-name: fa-spin;\r\n          animation-name: fa-spin;\r\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\r\n          animation-delay: var(--fa-animation-delay, 0);\r\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\r\n          animation-direction: var(--fa-animation-direction, normal);\r\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\r\n          animation-duration: var(--fa-animation-duration, 2s);\r\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\r\n          animation-timing-function: var(--fa-animation-timing, linear); }\r\n\r\n.fa-spin-reverse {\r\n  --fa-animation-direction: reverse; }\r\n\r\n.fa-pulse,\r\n.fa-spin-pulse {\r\n  -webkit-animation-name: fa-spin;\r\n          animation-name: fa-spin;\r\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\r\n          animation-direction: var(--fa-animation-direction, normal);\r\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\r\n          animation-duration: var(--fa-animation-duration, 1s);\r\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\r\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\r\n          animation-timing-function: var(--fa-animation-timing, steps(8)); }\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n  .fa-beat,\r\n  .fa-bounce,\r\n  .fa-fade,\r\n  .fa-beat-fade,\r\n  .fa-flip,\r\n  .fa-pulse,\r\n  .fa-shake,\r\n  .fa-spin,\r\n  .fa-spin-pulse {\r\n    -webkit-animation-delay: -1ms;\r\n            animation-delay: -1ms;\r\n    -webkit-animation-duration: 1ms;\r\n            animation-duration: 1ms;\r\n    -webkit-animation-iteration-count: 1;\r\n            animation-iteration-count: 1;\r\n    transition-delay: 0s;\r\n    transition-duration: 0s; } }\r\n\r\n@-webkit-keyframes fa-beat {\r\n  0%, 90% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1); }\r\n  45% {\r\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\r\n            transform: scale(var(--fa-beat-scale, 1.25)); } }\r\n\r\n@keyframes fa-beat {\r\n  0%, 90% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1); }\r\n  45% {\r\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\r\n            transform: scale(var(--fa-beat-scale, 1.25)); } }\r\n\r\n@-webkit-keyframes fa-bounce {\r\n  0% {\r\n    -webkit-transform: scale(1, 1) translateY(0);\r\n            transform: scale(1, 1) translateY(0); }\r\n  10% {\r\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\r\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0); }\r\n  30% {\r\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\r\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em)); }\r\n  50% {\r\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\r\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0); }\r\n  57% {\r\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\r\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em)); }\r\n  64% {\r\n    -webkit-transform: scale(1, 1) translateY(0);\r\n            transform: scale(1, 1) translateY(0); }\r\n  100% {\r\n    -webkit-transform: scale(1, 1) translateY(0);\r\n            transform: scale(1, 1) translateY(0); } }\r\n\r\n@keyframes fa-bounce {\r\n  0% {\r\n    -webkit-transform: scale(1, 1) translateY(0);\r\n            transform: scale(1, 1) translateY(0); }\r\n  10% {\r\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\r\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0); }\r\n  30% {\r\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\r\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em)); }\r\n  50% {\r\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\r\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0); }\r\n  57% {\r\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\r\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em)); }\r\n  64% {\r\n    -webkit-transform: scale(1, 1) translateY(0);\r\n            transform: scale(1, 1) translateY(0); }\r\n  100% {\r\n    -webkit-transform: scale(1, 1) translateY(0);\r\n            transform: scale(1, 1) translateY(0); } }\r\n\r\n@-webkit-keyframes fa-fade {\r\n  50% {\r\n    opacity: var(--fa-fade-opacity, 0.4); } }\r\n\r\n@keyframes fa-fade {\r\n  50% {\r\n    opacity: var(--fa-fade-opacity, 0.4); } }\r\n\r\n@-webkit-keyframes fa-beat-fade {\r\n  0%, 100% {\r\n    opacity: var(--fa-beat-fade-opacity, 0.4);\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1); }\r\n  50% {\r\n    opacity: 1;\r\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\r\n            transform: scale(var(--fa-beat-fade-scale, 1.125)); } }\r\n\r\n@keyframes fa-beat-fade {\r\n  0%, 100% {\r\n    opacity: var(--fa-beat-fade-opacity, 0.4);\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1); }\r\n  50% {\r\n    opacity: 1;\r\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\r\n            transform: scale(var(--fa-beat-fade-scale, 1.125)); } }\r\n\r\n@-webkit-keyframes fa-flip {\r\n  50% {\r\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\r\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg)); } }\r\n\r\n@keyframes fa-flip {\r\n  50% {\r\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\r\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg)); } }\r\n\r\n@-webkit-keyframes fa-shake {\r\n  0% {\r\n    -webkit-transform: rotate(-15deg);\r\n            transform: rotate(-15deg); }\r\n  4% {\r\n    -webkit-transform: rotate(15deg);\r\n            transform: rotate(15deg); }\r\n  8%, 24% {\r\n    -webkit-transform: rotate(-18deg);\r\n            transform: rotate(-18deg); }\r\n  12%, 28% {\r\n    -webkit-transform: rotate(18deg);\r\n            transform: rotate(18deg); }\r\n  16% {\r\n    -webkit-transform: rotate(-22deg);\r\n            transform: rotate(-22deg); }\r\n  20% {\r\n    -webkit-transform: rotate(22deg);\r\n            transform: rotate(22deg); }\r\n  32% {\r\n    -webkit-transform: rotate(-12deg);\r\n            transform: rotate(-12deg); }\r\n  36% {\r\n    -webkit-transform: rotate(12deg);\r\n            transform: rotate(12deg); }\r\n  40%, 100% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg); } }\r\n\r\n@keyframes fa-shake {\r\n  0% {\r\n    -webkit-transform: rotate(-15deg);\r\n            transform: rotate(-15deg); }\r\n  4% {\r\n    -webkit-transform: rotate(15deg);\r\n            transform: rotate(15deg); }\r\n  8%, 24% {\r\n    -webkit-transform: rotate(-18deg);\r\n            transform: rotate(-18deg); }\r\n  12%, 28% {\r\n    -webkit-transform: rotate(18deg);\r\n            transform: rotate(18deg); }\r\n  16% {\r\n    -webkit-transform: rotate(-22deg);\r\n            transform: rotate(-22deg); }\r\n  20% {\r\n    -webkit-transform: rotate(22deg);\r\n            transform: rotate(22deg); }\r\n  32% {\r\n    -webkit-transform: rotate(-12deg);\r\n            transform: rotate(-12deg); }\r\n  36% {\r\n    -webkit-transform: rotate(12deg);\r\n            transform: rotate(12deg); }\r\n  40%, 100% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg); } }\r\n\r\n@-webkit-keyframes fa-spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg); }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg); } }\r\n\r\n@keyframes fa-spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg); }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg); } }\r\n\r\n.fa-rotate-90 {\r\n  -webkit-transform: rotate(90deg);\r\n          transform: rotate(90deg); }\r\n\r\n.fa-rotate-180 {\r\n  -webkit-transform: rotate(180deg);\r\n          transform: rotate(180deg); }\r\n\r\n.fa-rotate-270 {\r\n  -webkit-transform: rotate(270deg);\r\n          transform: rotate(270deg); }\r\n\r\n.fa-flip-horizontal {\r\n  -webkit-transform: scale(-1, 1);\r\n          transform: scale(-1, 1); }\r\n\r\n.fa-flip-vertical {\r\n  -webkit-transform: scale(1, -1);\r\n          transform: scale(1, -1); }\r\n\r\n.fa-flip-both,\r\n.fa-flip-horizontal.fa-flip-vertical {\r\n  -webkit-transform: scale(-1, -1);\r\n          transform: scale(-1, -1); }\r\n\r\n.fa-rotate-by {\r\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\r\n          transform: rotate(var(--fa-rotate-angle, none)); }\r\n\r\n.fa-stack {\r\n  display: inline-block;\r\n  height: 2em;\r\n  line-height: 2em;\r\n  position: relative;\r\n  vertical-align: middle;\r\n  width: 2.5em; }\r\n\r\n.fa-stack-1x,\r\n.fa-stack-2x {\r\n  left: 0;\r\n  position: absolute;\r\n  text-align: center;\r\n  width: 100%;\r\n  z-index: var(--fa-stack-z-index, auto); }\r\n\r\n.fa-stack-1x {\r\n  line-height: inherit; }\r\n\r\n.fa-stack-2x {\r\n  font-size: 2em; }\r\n\r\n.fa-inverse {\r\n  color: var(--fa-inverse, #fff); }\r\n\r\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\r\nreaders do not read off random characters that represent icons */\r\n.fa-0::before {\r\n  content: \"\\30\"; }\r\n\r\n.fa-1::before {\r\n  content: \"\\31\"; }\r\n\r\n.fa-2::before {\r\n  content: \"\\32\"; }\r\n\r\n.fa-3::before {\r\n  content: \"\\33\"; }\r\n\r\n.fa-4::before {\r\n  content: \"\\34\"; }\r\n\r\n.fa-5::before {\r\n  content: \"\\35\"; }\r\n\r\n.fa-6::before {\r\n  content: \"\\36\"; }\r\n\r\n.fa-7::before {\r\n  content: \"\\37\"; }\r\n\r\n.fa-8::before {\r\n  content: \"\\38\"; }\r\n\r\n.fa-9::before {\r\n  content: \"\\39\"; }\r\n\r\n.fa-a::before {\r\n  content: \"\\41\"; }\r\n\r\n.fa-address-book::before {\r\n  content: \"\\f2b9\"; }\r\n\r\n.fa-contact-book::before {\r\n  content: \"\\f2b9\"; }\r\n\r\n.fa-address-card::before {\r\n  content: \"\\f2bb\"; }\r\n\r\n.fa-contact-card::before {\r\n  content: \"\\f2bb\"; }\r\n\r\n.fa-vcard::before {\r\n  content: \"\\f2bb\"; }\r\n\r\n.fa-align-center::before {\r\n  content: \"\\f037\"; }\r\n\r\n.fa-align-justify::before {\r\n  content: \"\\f039\"; }\r\n\r\n.fa-align-left::before {\r\n  content: \"\\f036\"; }\r\n\r\n.fa-align-right::before {\r\n  content: \"\\f038\"; }\r\n\r\n.fa-anchor::before {\r\n  content: \"\\f13d\"; }\r\n\r\n.fa-anchor-circle-check::before {\r\n  content: \"\\e4aa\"; }\r\n\r\n.fa-anchor-circle-exclamation::before {\r\n  content: \"\\e4ab\"; }\r\n\r\n.fa-anchor-circle-xmark::before {\r\n  content: \"\\e4ac\"; }\r\n\r\n.fa-anchor-lock::before {\r\n  content: \"\\e4ad\"; }\r\n\r\n.fa-angle-down::before {\r\n  content: \"\\f107\"; }\r\n\r\n.fa-angle-left::before {\r\n  content: \"\\f104\"; }\r\n\r\n.fa-angle-right::before {\r\n  content: \"\\f105\"; }\r\n\r\n.fa-angle-up::before {\r\n  content: \"\\f106\"; }\r\n\r\n.fa-angles-down::before {\r\n  content: \"\\f103\"; }\r\n\r\n.fa-angle-double-down::before {\r\n  content: \"\\f103\"; }\r\n\r\n.fa-angles-left::before {\r\n  content: \"\\f100\"; }\r\n\r\n.fa-angle-double-left::before {\r\n  content: \"\\f100\"; }\r\n\r\n.fa-angles-right::before {\r\n  content: \"\\f101\"; }\r\n\r\n.fa-angle-double-right::before {\r\n  content: \"\\f101\"; }\r\n\r\n.fa-angles-up::before {\r\n  content: \"\\f102\"; }\r\n\r\n.fa-angle-double-up::before {\r\n  content: \"\\f102\"; }\r\n\r\n.fa-ankh::before {\r\n  content: \"\\f644\"; }\r\n\r\n.fa-apple-whole::before {\r\n  content: \"\\f5d1\"; }\r\n\r\n.fa-apple-alt::before {\r\n  content: \"\\f5d1\"; }\r\n\r\n.fa-archway::before {\r\n  content: \"\\f557\"; }\r\n\r\n.fa-arrow-down::before {\r\n  content: \"\\f063\"; }\r\n\r\n.fa-arrow-down-1-9::before {\r\n  content: \"\\f162\"; }\r\n\r\n.fa-sort-numeric-asc::before {\r\n  content: \"\\f162\"; }\r\n\r\n.fa-sort-numeric-down::before {\r\n  content: \"\\f162\"; }\r\n\r\n.fa-arrow-down-9-1::before {\r\n  content: \"\\f886\"; }\r\n\r\n.fa-sort-numeric-desc::before {\r\n  content: \"\\f886\"; }\r\n\r\n.fa-sort-numeric-down-alt::before {\r\n  content: \"\\f886\"; }\r\n\r\n.fa-arrow-down-a-z::before {\r\n  content: \"\\f15d\"; }\r\n\r\n.fa-sort-alpha-asc::before {\r\n  content: \"\\f15d\"; }\r\n\r\n.fa-sort-alpha-down::before {\r\n  content: \"\\f15d\"; }\r\n\r\n.fa-arrow-down-long::before {\r\n  content: \"\\f175\"; }\r\n\r\n.fa-long-arrow-down::before {\r\n  content: \"\\f175\"; }\r\n\r\n.fa-arrow-down-short-wide::before {\r\n  content: \"\\f884\"; }\r\n\r\n.fa-sort-amount-desc::before {\r\n  content: \"\\f884\"; }\r\n\r\n.fa-sort-amount-down-alt::before {\r\n  content: \"\\f884\"; }\r\n\r\n.fa-arrow-down-up-across-line::before {\r\n  content: \"\\e4af\"; }\r\n\r\n.fa-arrow-down-up-lock::before {\r\n  content: \"\\e4b0\"; }\r\n\r\n.fa-arrow-down-wide-short::before {\r\n  content: \"\\f160\"; }\r\n\r\n.fa-sort-amount-asc::before {\r\n  content: \"\\f160\"; }\r\n\r\n.fa-sort-amount-down::before {\r\n  content: \"\\f160\"; }\r\n\r\n.fa-arrow-down-z-a::before {\r\n  content: \"\\f881\"; }\r\n\r\n.fa-sort-alpha-desc::before {\r\n  content: \"\\f881\"; }\r\n\r\n.fa-sort-alpha-down-alt::before {\r\n  content: \"\\f881\"; }\r\n\r\n.fa-arrow-left::before {\r\n  content: \"\\f060\"; }\r\n\r\n.fa-arrow-left-long::before {\r\n  content: \"\\f177\"; }\r\n\r\n.fa-long-arrow-left::before {\r\n  content: \"\\f177\"; }\r\n\r\n.fa-arrow-pointer::before {\r\n  content: \"\\f245\"; }\r\n\r\n.fa-mouse-pointer::before {\r\n  content: \"\\f245\"; }\r\n\r\n.fa-arrow-right::before {\r\n  content: \"\\f061\"; }\r\n\r\n.fa-arrow-right-arrow-left::before {\r\n  content: \"\\f0ec\"; }\r\n\r\n.fa-exchange::before {\r\n  content: \"\\f0ec\"; }\r\n\r\n.fa-arrow-right-from-bracket::before {\r\n  content: \"\\f08b\"; }\r\n\r\n.fa-sign-out::before {\r\n  content: \"\\f08b\"; }\r\n\r\n.fa-arrow-right-long::before {\r\n  content: \"\\f178\"; }\r\n\r\n.fa-long-arrow-right::before {\r\n  content: \"\\f178\"; }\r\n\r\n.fa-arrow-right-to-bracket::before {\r\n  content: \"\\f090\"; }\r\n\r\n.fa-sign-in::before {\r\n  content: \"\\f090\"; }\r\n\r\n.fa-arrow-right-to-city::before {\r\n  content: \"\\e4b3\"; }\r\n\r\n.fa-arrow-rotate-left::before {\r\n  content: \"\\f0e2\"; }\r\n\r\n.fa-arrow-left-rotate::before {\r\n  content: \"\\f0e2\"; }\r\n\r\n.fa-arrow-rotate-back::before {\r\n  content: \"\\f0e2\"; }\r\n\r\n.fa-arrow-rotate-backward::before {\r\n  content: \"\\f0e2\"; }\r\n\r\n.fa-undo::before {\r\n  content: \"\\f0e2\"; }\r\n\r\n.fa-arrow-rotate-right::before {\r\n  content: \"\\f01e\"; }\r\n\r\n.fa-arrow-right-rotate::before {\r\n  content: \"\\f01e\"; }\r\n\r\n.fa-arrow-rotate-forward::before {\r\n  content: \"\\f01e\"; }\r\n\r\n.fa-redo::before {\r\n  content: \"\\f01e\"; }\r\n\r\n.fa-arrow-trend-down::before {\r\n  content: \"\\e097\"; }\r\n\r\n.fa-arrow-trend-up::before {\r\n  content: \"\\e098\"; }\r\n\r\n.fa-arrow-turn-down::before {\r\n  content: \"\\f149\"; }\r\n\r\n.fa-level-down::before {\r\n  content: \"\\f149\"; }\r\n\r\n.fa-arrow-turn-up::before {\r\n  content: \"\\f148\"; }\r\n\r\n.fa-level-up::before {\r\n  content: \"\\f148\"; }\r\n\r\n.fa-arrow-up::before {\r\n  content: \"\\f062\"; }\r\n\r\n.fa-arrow-up-1-9::before {\r\n  content: \"\\f163\"; }\r\n\r\n.fa-sort-numeric-up::before {\r\n  content: \"\\f163\"; }\r\n\r\n.fa-arrow-up-9-1::before {\r\n  content: \"\\f887\"; }\r\n\r\n.fa-sort-numeric-up-alt::before {\r\n  content: \"\\f887\"; }\r\n\r\n.fa-arrow-up-a-z::before {\r\n  content: \"\\f15e\"; }\r\n\r\n.fa-sort-alpha-up::before {\r\n  content: \"\\f15e\"; }\r\n\r\n.fa-arrow-up-from-bracket::before {\r\n  content: \"\\e09a\"; }\r\n\r\n.fa-arrow-up-from-ground-water::before {\r\n  content: \"\\e4b5\"; }\r\n\r\n.fa-arrow-up-from-water-pump::before {\r\n  content: \"\\e4b6\"; }\r\n\r\n.fa-arrow-up-long::before {\r\n  content: \"\\f176\"; }\r\n\r\n.fa-long-arrow-up::before {\r\n  content: \"\\f176\"; }\r\n\r\n.fa-arrow-up-right-dots::before {\r\n  content: \"\\e4b7\"; }\r\n\r\n.fa-arrow-up-right-from-square::before {\r\n  content: \"\\f08e\"; }\r\n\r\n.fa-external-link::before {\r\n  content: \"\\f08e\"; }\r\n\r\n.fa-arrow-up-short-wide::before {\r\n  content: \"\\f885\"; }\r\n\r\n.fa-sort-amount-up-alt::before {\r\n  content: \"\\f885\"; }\r\n\r\n.fa-arrow-up-wide-short::before {\r\n  content: \"\\f161\"; }\r\n\r\n.fa-sort-amount-up::before {\r\n  content: \"\\f161\"; }\r\n\r\n.fa-arrow-up-z-a::before {\r\n  content: \"\\f882\"; }\r\n\r\n.fa-sort-alpha-up-alt::before {\r\n  content: \"\\f882\"; }\r\n\r\n.fa-arrows-down-to-line::before {\r\n  content: \"\\e4b8\"; }\r\n\r\n.fa-arrows-down-to-people::before {\r\n  content: \"\\e4b9\"; }\r\n\r\n.fa-arrows-left-right::before {\r\n  content: \"\\f07e\"; }\r\n\r\n.fa-arrows-h::before {\r\n  content: \"\\f07e\"; }\r\n\r\n.fa-arrows-left-right-to-line::before {\r\n  content: \"\\e4ba\"; }\r\n\r\n.fa-arrows-rotate::before {\r\n  content: \"\\f021\"; }\r\n\r\n.fa-refresh::before {\r\n  content: \"\\f021\"; }\r\n\r\n.fa-sync::before {\r\n  content: \"\\f021\"; }\r\n\r\n.fa-arrows-spin::before {\r\n  content: \"\\e4bb\"; }\r\n\r\n.fa-arrows-split-up-and-left::before {\r\n  content: \"\\e4bc\"; }\r\n\r\n.fa-arrows-to-circle::before {\r\n  content: \"\\e4bd\"; }\r\n\r\n.fa-arrows-to-dot::before {\r\n  content: \"\\e4be\"; }\r\n\r\n.fa-arrows-to-eye::before {\r\n  content: \"\\e4bf\"; }\r\n\r\n.fa-arrows-turn-right::before {\r\n  content: \"\\e4c0\"; }\r\n\r\n.fa-arrows-turn-to-dots::before {\r\n  content: \"\\e4c1\"; }\r\n\r\n.fa-arrows-up-down::before {\r\n  content: \"\\f07d\"; }\r\n\r\n.fa-arrows-v::before {\r\n  content: \"\\f07d\"; }\r\n\r\n.fa-arrows-up-down-left-right::before {\r\n  content: \"\\f047\"; }\r\n\r\n.fa-arrows::before {\r\n  content: \"\\f047\"; }\r\n\r\n.fa-arrows-up-to-line::before {\r\n  content: \"\\e4c2\"; }\r\n\r\n.fa-asterisk::before {\r\n  content: \"\\2a\"; }\r\n\r\n.fa-at::before {\r\n  content: \"\\40\"; }\r\n\r\n.fa-atom::before {\r\n  content: \"\\f5d2\"; }\r\n\r\n.fa-audio-description::before {\r\n  content: \"\\f29e\"; }\r\n\r\n.fa-austral-sign::before {\r\n  content: \"\\e0a9\"; }\r\n\r\n.fa-award::before {\r\n  content: \"\\f559\"; }\r\n\r\n.fa-b::before {\r\n  content: \"\\42\"; }\r\n\r\n.fa-baby::before {\r\n  content: \"\\f77c\"; }\r\n\r\n.fa-baby-carriage::before {\r\n  content: \"\\f77d\"; }\r\n\r\n.fa-carriage-baby::before {\r\n  content: \"\\f77d\"; }\r\n\r\n.fa-backward::before {\r\n  content: \"\\f04a\"; }\r\n\r\n.fa-backward-fast::before {\r\n  content: \"\\f049\"; }\r\n\r\n.fa-fast-backward::before {\r\n  content: \"\\f049\"; }\r\n\r\n.fa-backward-step::before {\r\n  content: \"\\f048\"; }\r\n\r\n.fa-step-backward::before {\r\n  content: \"\\f048\"; }\r\n\r\n.fa-bacon::before {\r\n  content: \"\\f7e5\"; }\r\n\r\n.fa-bacteria::before {\r\n  content: \"\\e059\"; }\r\n\r\n.fa-bacterium::before {\r\n  content: \"\\e05a\"; }\r\n\r\n.fa-bag-shopping::before {\r\n  content: \"\\f290\"; }\r\n\r\n.fa-shopping-bag::before {\r\n  content: \"\\f290\"; }\r\n\r\n.fa-bahai::before {\r\n  content: \"\\f666\"; }\r\n\r\n.fa-baht-sign::before {\r\n  content: \"\\e0ac\"; }\r\n\r\n.fa-ban::before {\r\n  content: \"\\f05e\"; }\r\n\r\n.fa-cancel::before {\r\n  content: \"\\f05e\"; }\r\n\r\n.fa-ban-smoking::before {\r\n  content: \"\\f54d\"; }\r\n\r\n.fa-smoking-ban::before {\r\n  content: \"\\f54d\"; }\r\n\r\n.fa-bandage::before {\r\n  content: \"\\f462\"; }\r\n\r\n.fa-band-aid::before {\r\n  content: \"\\f462\"; }\r\n\r\n.fa-barcode::before {\r\n  content: \"\\f02a\"; }\r\n\r\n.fa-bars::before {\r\n  content: \"\\f0c9\"; }\r\n\r\n.fa-navicon::before {\r\n  content: \"\\f0c9\"; }\r\n\r\n.fa-bars-progress::before {\r\n  content: \"\\f828\"; }\r\n\r\n.fa-tasks-alt::before {\r\n  content: \"\\f828\"; }\r\n\r\n.fa-bars-staggered::before {\r\n  content: \"\\f550\"; }\r\n\r\n.fa-reorder::before {\r\n  content: \"\\f550\"; }\r\n\r\n.fa-stream::before {\r\n  content: \"\\f550\"; }\r\n\r\n.fa-baseball::before {\r\n  content: \"\\f433\"; }\r\n\r\n.fa-baseball-ball::before {\r\n  content: \"\\f433\"; }\r\n\r\n.fa-baseball-bat-ball::before {\r\n  content: \"\\f432\"; }\r\n\r\n.fa-basket-shopping::before {\r\n  content: \"\\f291\"; }\r\n\r\n.fa-shopping-basket::before {\r\n  content: \"\\f291\"; }\r\n\r\n.fa-basketball::before {\r\n  content: \"\\f434\"; }\r\n\r\n.fa-basketball-ball::before {\r\n  content: \"\\f434\"; }\r\n\r\n.fa-bath::before {\r\n  content: \"\\f2cd\"; }\r\n\r\n.fa-bathtub::before {\r\n  content: \"\\f2cd\"; }\r\n\r\n.fa-battery-empty::before {\r\n  content: \"\\f244\"; }\r\n\r\n.fa-battery-0::before {\r\n  content: \"\\f244\"; }\r\n\r\n.fa-battery-full::before {\r\n  content: \"\\f240\"; }\r\n\r\n.fa-battery::before {\r\n  content: \"\\f240\"; }\r\n\r\n.fa-battery-5::before {\r\n  content: \"\\f240\"; }\r\n\r\n.fa-battery-half::before {\r\n  content: \"\\f242\"; }\r\n\r\n.fa-battery-3::before {\r\n  content: \"\\f242\"; }\r\n\r\n.fa-battery-quarter::before {\r\n  content: \"\\f243\"; }\r\n\r\n.fa-battery-2::before {\r\n  content: \"\\f243\"; }\r\n\r\n.fa-battery-three-quarters::before {\r\n  content: \"\\f241\"; }\r\n\r\n.fa-battery-4::before {\r\n  content: \"\\f241\"; }\r\n\r\n.fa-bed::before {\r\n  content: \"\\f236\"; }\r\n\r\n.fa-bed-pulse::before {\r\n  content: \"\\f487\"; }\r\n\r\n.fa-procedures::before {\r\n  content: \"\\f487\"; }\r\n\r\n.fa-beer-mug-empty::before {\r\n  content: \"\\f0fc\"; }\r\n\r\n.fa-beer::before {\r\n  content: \"\\f0fc\"; }\r\n\r\n.fa-bell::before {\r\n  content: \"\\f0f3\"; }\r\n\r\n.fa-bell-concierge::before {\r\n  content: \"\\f562\"; }\r\n\r\n.fa-concierge-bell::before {\r\n  content: \"\\f562\"; }\r\n\r\n.fa-bell-slash::before {\r\n  content: \"\\f1f6\"; }\r\n\r\n.fa-bezier-curve::before {\r\n  content: \"\\f55b\"; }\r\n\r\n.fa-bicycle::before {\r\n  content: \"\\f206\"; }\r\n\r\n.fa-binoculars::before {\r\n  content: \"\\f1e5\"; }\r\n\r\n.fa-biohazard::before {\r\n  content: \"\\f780\"; }\r\n\r\n.fa-bitcoin-sign::before {\r\n  content: \"\\e0b4\"; }\r\n\r\n.fa-blender::before {\r\n  content: \"\\f517\"; }\r\n\r\n.fa-blender-phone::before {\r\n  content: \"\\f6b6\"; }\r\n\r\n.fa-blog::before {\r\n  content: \"\\f781\"; }\r\n\r\n.fa-bold::before {\r\n  content: \"\\f032\"; }\r\n\r\n.fa-bolt::before {\r\n  content: \"\\f0e7\"; }\r\n\r\n.fa-zap::before {\r\n  content: \"\\f0e7\"; }\r\n\r\n.fa-bolt-lightning::before {\r\n  content: \"\\e0b7\"; }\r\n\r\n.fa-bomb::before {\r\n  content: \"\\f1e2\"; }\r\n\r\n.fa-bone::before {\r\n  content: \"\\f5d7\"; }\r\n\r\n.fa-bong::before {\r\n  content: \"\\f55c\"; }\r\n\r\n.fa-book::before {\r\n  content: \"\\f02d\"; }\r\n\r\n.fa-book-atlas::before {\r\n  content: \"\\f558\"; }\r\n\r\n.fa-atlas::before {\r\n  content: \"\\f558\"; }\r\n\r\n.fa-book-bible::before {\r\n  content: \"\\f647\"; }\r\n\r\n.fa-bible::before {\r\n  content: \"\\f647\"; }\r\n\r\n.fa-book-bookmark::before {\r\n  content: \"\\e0bb\"; }\r\n\r\n.fa-book-journal-whills::before {\r\n  content: \"\\f66a\"; }\r\n\r\n.fa-journal-whills::before {\r\n  content: \"\\f66a\"; }\r\n\r\n.fa-book-medical::before {\r\n  content: \"\\f7e6\"; }\r\n\r\n.fa-book-open::before {\r\n  content: \"\\f518\"; }\r\n\r\n.fa-book-open-reader::before {\r\n  content: \"\\f5da\"; }\r\n\r\n.fa-book-reader::before {\r\n  content: \"\\f5da\"; }\r\n\r\n.fa-book-quran::before {\r\n  content: \"\\f687\"; }\r\n\r\n.fa-quran::before {\r\n  content: \"\\f687\"; }\r\n\r\n.fa-book-skull::before {\r\n  content: \"\\f6b7\"; }\r\n\r\n.fa-book-dead::before {\r\n  content: \"\\f6b7\"; }\r\n\r\n.fa-bookmark::before {\r\n  content: \"\\f02e\"; }\r\n\r\n.fa-border-all::before {\r\n  content: \"\\f84c\"; }\r\n\r\n.fa-border-none::before {\r\n  content: \"\\f850\"; }\r\n\r\n.fa-border-top-left::before {\r\n  content: \"\\f853\"; }\r\n\r\n.fa-border-style::before {\r\n  content: \"\\f853\"; }\r\n\r\n.fa-bore-hole::before {\r\n  content: \"\\e4c3\"; }\r\n\r\n.fa-bottle-droplet::before {\r\n  content: \"\\e4c4\"; }\r\n\r\n.fa-bottle-water::before {\r\n  content: \"\\e4c5\"; }\r\n\r\n.fa-bowl-food::before {\r\n  content: \"\\e4c6\"; }\r\n\r\n.fa-bowl-rice::before {\r\n  content: \"\\e2eb\"; }\r\n\r\n.fa-bowling-ball::before {\r\n  content: \"\\f436\"; }\r\n\r\n.fa-box::before {\r\n  content: \"\\f466\"; }\r\n\r\n.fa-box-archive::before {\r\n  content: \"\\f187\"; }\r\n\r\n.fa-archive::before {\r\n  content: \"\\f187\"; }\r\n\r\n.fa-box-open::before {\r\n  content: \"\\f49e\"; }\r\n\r\n.fa-box-tissue::before {\r\n  content: \"\\e05b\"; }\r\n\r\n.fa-boxes-packing::before {\r\n  content: \"\\e4c7\"; }\r\n\r\n.fa-boxes-stacked::before {\r\n  content: \"\\f468\"; }\r\n\r\n.fa-boxes::before {\r\n  content: \"\\f468\"; }\r\n\r\n.fa-boxes-alt::before {\r\n  content: \"\\f468\"; }\r\n\r\n.fa-braille::before {\r\n  content: \"\\f2a1\"; }\r\n\r\n.fa-brain::before {\r\n  content: \"\\f5dc\"; }\r\n\r\n.fa-brazilian-real-sign::before {\r\n  content: \"\\e46c\"; }\r\n\r\n.fa-bread-slice::before {\r\n  content: \"\\f7ec\"; }\r\n\r\n.fa-bridge::before {\r\n  content: \"\\e4c8\"; }\r\n\r\n.fa-bridge-circle-check::before {\r\n  content: \"\\e4c9\"; }\r\n\r\n.fa-bridge-circle-exclamation::before {\r\n  content: \"\\e4ca\"; }\r\n\r\n.fa-bridge-circle-xmark::before {\r\n  content: \"\\e4cb\"; }\r\n\r\n.fa-bridge-lock::before {\r\n  content: \"\\e4cc\"; }\r\n\r\n.fa-bridge-water::before {\r\n  content: \"\\e4ce\"; }\r\n\r\n.fa-briefcase::before {\r\n  content: \"\\f0b1\"; }\r\n\r\n.fa-briefcase-medical::before {\r\n  content: \"\\f469\"; }\r\n\r\n.fa-broom::before {\r\n  content: \"\\f51a\"; }\r\n\r\n.fa-broom-ball::before {\r\n  content: \"\\f458\"; }\r\n\r\n.fa-quidditch::before {\r\n  content: \"\\f458\"; }\r\n\r\n.fa-quidditch-broom-ball::before {\r\n  content: \"\\f458\"; }\r\n\r\n.fa-brush::before {\r\n  content: \"\\f55d\"; }\r\n\r\n.fa-bucket::before {\r\n  content: \"\\e4cf\"; }\r\n\r\n.fa-bug::before {\r\n  content: \"\\f188\"; }\r\n\r\n.fa-bug-slash::before {\r\n  content: \"\\e490\"; }\r\n\r\n.fa-bugs::before {\r\n  content: \"\\e4d0\"; }\r\n\r\n.fa-building::before {\r\n  content: \"\\f1ad\"; }\r\n\r\n.fa-building-circle-arrow-right::before {\r\n  content: \"\\e4d1\"; }\r\n\r\n.fa-building-circle-check::before {\r\n  content: \"\\e4d2\"; }\r\n\r\n.fa-building-circle-exclamation::before {\r\n  content: \"\\e4d3\"; }\r\n\r\n.fa-building-circle-xmark::before {\r\n  content: \"\\e4d4\"; }\r\n\r\n.fa-building-columns::before {\r\n  content: \"\\f19c\"; }\r\n\r\n.fa-bank::before {\r\n  content: \"\\f19c\"; }\r\n\r\n.fa-institution::before {\r\n  content: \"\\f19c\"; }\r\n\r\n.fa-museum::before {\r\n  content: \"\\f19c\"; }\r\n\r\n.fa-university::before {\r\n  content: \"\\f19c\"; }\r\n\r\n.fa-building-flag::before {\r\n  content: \"\\e4d5\"; }\r\n\r\n.fa-building-lock::before {\r\n  content: \"\\e4d6\"; }\r\n\r\n.fa-building-ngo::before {\r\n  content: \"\\e4d7\"; }\r\n\r\n.fa-building-shield::before {\r\n  content: \"\\e4d8\"; }\r\n\r\n.fa-building-un::before {\r\n  content: \"\\e4d9\"; }\r\n\r\n.fa-building-user::before {\r\n  content: \"\\e4da\"; }\r\n\r\n.fa-building-wheat::before {\r\n  content: \"\\e4db\"; }\r\n\r\n.fa-bullhorn::before {\r\n  content: \"\\f0a1\"; }\r\n\r\n.fa-bullseye::before {\r\n  content: \"\\f140\"; }\r\n\r\n.fa-burger::before {\r\n  content: \"\\f805\"; }\r\n\r\n.fa-hamburger::before {\r\n  content: \"\\f805\"; }\r\n\r\n.fa-burst::before {\r\n  content: \"\\e4dc\"; }\r\n\r\n.fa-bus::before {\r\n  content: \"\\f207\"; }\r\n\r\n.fa-bus-simple::before {\r\n  content: \"\\f55e\"; }\r\n\r\n.fa-bus-alt::before {\r\n  content: \"\\f55e\"; }\r\n\r\n.fa-business-time::before {\r\n  content: \"\\f64a\"; }\r\n\r\n.fa-briefcase-clock::before {\r\n  content: \"\\f64a\"; }\r\n\r\n.fa-c::before {\r\n  content: \"\\43\"; }\r\n\r\n.fa-cake-candles::before {\r\n  content: \"\\f1fd\"; }\r\n\r\n.fa-birthday-cake::before {\r\n  content: \"\\f1fd\"; }\r\n\r\n.fa-cake::before {\r\n  content: \"\\f1fd\"; }\r\n\r\n.fa-calculator::before {\r\n  content: \"\\f1ec\"; }\r\n\r\n.fa-calendar::before {\r\n  content: \"\\f133\"; }\r\n\r\n.fa-calendar-check::before {\r\n  content: \"\\f274\"; }\r\n\r\n.fa-calendar-day::before {\r\n  content: \"\\f783\"; }\r\n\r\n.fa-calendar-days::before {\r\n  content: \"\\f073\"; }\r\n\r\n.fa-calendar-alt::before {\r\n  content: \"\\f073\"; }\r\n\r\n.fa-calendar-minus::before {\r\n  content: \"\\f272\"; }\r\n\r\n.fa-calendar-plus::before {\r\n  content: \"\\f271\"; }\r\n\r\n.fa-calendar-week::before {\r\n  content: \"\\f784\"; }\r\n\r\n.fa-calendar-xmark::before {\r\n  content: \"\\f273\"; }\r\n\r\n.fa-calendar-times::before {\r\n  content: \"\\f273\"; }\r\n\r\n.fa-camera::before {\r\n  content: \"\\f030\"; }\r\n\r\n.fa-camera-alt::before {\r\n  content: \"\\f030\"; }\r\n\r\n.fa-camera-retro::before {\r\n  content: \"\\f083\"; }\r\n\r\n.fa-camera-rotate::before {\r\n  content: \"\\e0d8\"; }\r\n\r\n.fa-campground::before {\r\n  content: \"\\f6bb\"; }\r\n\r\n.fa-candy-cane::before {\r\n  content: \"\\f786\"; }\r\n\r\n.fa-cannabis::before {\r\n  content: \"\\f55f\"; }\r\n\r\n.fa-capsules::before {\r\n  content: \"\\f46b\"; }\r\n\r\n.fa-car::before {\r\n  content: \"\\f1b9\"; }\r\n\r\n.fa-automobile::before {\r\n  content: \"\\f1b9\"; }\r\n\r\n.fa-car-battery::before {\r\n  content: \"\\f5df\"; }\r\n\r\n.fa-battery-car::before {\r\n  content: \"\\f5df\"; }\r\n\r\n.fa-car-burst::before {\r\n  content: \"\\f5e1\"; }\r\n\r\n.fa-car-crash::before {\r\n  content: \"\\f5e1\"; }\r\n\r\n.fa-car-on::before {\r\n  content: \"\\e4dd\"; }\r\n\r\n.fa-car-rear::before {\r\n  content: \"\\f5de\"; }\r\n\r\n.fa-car-alt::before {\r\n  content: \"\\f5de\"; }\r\n\r\n.fa-car-side::before {\r\n  content: \"\\f5e4\"; }\r\n\r\n.fa-car-tunnel::before {\r\n  content: \"\\e4de\"; }\r\n\r\n.fa-caravan::before {\r\n  content: \"\\f8ff\"; }\r\n\r\n.fa-caret-down::before {\r\n  content: \"\\f0d7\"; }\r\n\r\n.fa-caret-left::before {\r\n  content: \"\\f0d9\"; }\r\n\r\n.fa-caret-right::before {\r\n  content: \"\\f0da\"; }\r\n\r\n.fa-caret-up::before {\r\n  content: \"\\f0d8\"; }\r\n\r\n.fa-carrot::before {\r\n  content: \"\\f787\"; }\r\n\r\n.fa-cart-arrow-down::before {\r\n  content: \"\\f218\"; }\r\n\r\n.fa-cart-flatbed::before {\r\n  content: \"\\f474\"; }\r\n\r\n.fa-dolly-flatbed::before {\r\n  content: \"\\f474\"; }\r\n\r\n.fa-cart-flatbed-suitcase::before {\r\n  content: \"\\f59d\"; }\r\n\r\n.fa-luggage-cart::before {\r\n  content: \"\\f59d\"; }\r\n\r\n.fa-cart-plus::before {\r\n  content: \"\\f217\"; }\r\n\r\n.fa-cart-shopping::before {\r\n  content: \"\\f07a\"; }\r\n\r\n.fa-shopping-cart::before {\r\n  content: \"\\f07a\"; }\r\n\r\n.fa-cash-register::before {\r\n  content: \"\\f788\"; }\r\n\r\n.fa-cat::before {\r\n  content: \"\\f6be\"; }\r\n\r\n.fa-cedi-sign::before {\r\n  content: \"\\e0df\"; }\r\n\r\n.fa-cent-sign::before {\r\n  content: \"\\e3f5\"; }\r\n\r\n.fa-certificate::before {\r\n  content: \"\\f0a3\"; }\r\n\r\n.fa-chair::before {\r\n  content: \"\\f6c0\"; }\r\n\r\n.fa-chalkboard::before {\r\n  content: \"\\f51b\"; }\r\n\r\n.fa-blackboard::before {\r\n  content: \"\\f51b\"; }\r\n\r\n.fa-chalkboard-user::before {\r\n  content: \"\\f51c\"; }\r\n\r\n.fa-chalkboard-teacher::before {\r\n  content: \"\\f51c\"; }\r\n\r\n.fa-champagne-glasses::before {\r\n  content: \"\\f79f\"; }\r\n\r\n.fa-glass-cheers::before {\r\n  content: \"\\f79f\"; }\r\n\r\n.fa-charging-station::before {\r\n  content: \"\\f5e7\"; }\r\n\r\n.fa-chart-area::before {\r\n  content: \"\\f1fe\"; }\r\n\r\n.fa-area-chart::before {\r\n  content: \"\\f1fe\"; }\r\n\r\n.fa-chart-bar::before {\r\n  content: \"\\f080\"; }\r\n\r\n.fa-bar-chart::before {\r\n  content: \"\\f080\"; }\r\n\r\n.fa-chart-column::before {\r\n  content: \"\\e0e3\"; }\r\n\r\n.fa-chart-gantt::before {\r\n  content: \"\\e0e4\"; }\r\n\r\n.fa-chart-line::before {\r\n  content: \"\\f201\"; }\r\n\r\n.fa-line-chart::before {\r\n  content: \"\\f201\"; }\r\n\r\n.fa-chart-pie::before {\r\n  content: \"\\f200\"; }\r\n\r\n.fa-pie-chart::before {\r\n  content: \"\\f200\"; }\r\n\r\n.fa-chart-simple::before {\r\n  content: \"\\e473\"; }\r\n\r\n.fa-check::before {\r\n  content: \"\\f00c\"; }\r\n\r\n.fa-check-double::before {\r\n  content: \"\\f560\"; }\r\n\r\n.fa-check-to-slot::before {\r\n  content: \"\\f772\"; }\r\n\r\n.fa-vote-yea::before {\r\n  content: \"\\f772\"; }\r\n\r\n.fa-cheese::before {\r\n  content: \"\\f7ef\"; }\r\n\r\n.fa-chess::before {\r\n  content: \"\\f439\"; }\r\n\r\n.fa-chess-bishop::before {\r\n  content: \"\\f43a\"; }\r\n\r\n.fa-chess-board::before {\r\n  content: \"\\f43c\"; }\r\n\r\n.fa-chess-king::before {\r\n  content: \"\\f43f\"; }\r\n\r\n.fa-chess-knight::before {\r\n  content: \"\\f441\"; }\r\n\r\n.fa-chess-pawn::before {\r\n  content: \"\\f443\"; }\r\n\r\n.fa-chess-queen::before {\r\n  content: \"\\f445\"; }\r\n\r\n.fa-chess-rook::before {\r\n  content: \"\\f447\"; }\r\n\r\n.fa-chevron-down::before {\r\n  content: \"\\f078\"; }\r\n\r\n.fa-chevron-left::before {\r\n  content: \"\\f053\"; }\r\n\r\n.fa-chevron-right::before {\r\n  content: \"\\f054\"; }\r\n\r\n.fa-chevron-up::before {\r\n  content: \"\\f077\"; }\r\n\r\n.fa-child::before {\r\n  content: \"\\f1ae\"; }\r\n\r\n.fa-child-dress::before {\r\n  content: \"\\e59c\"; }\r\n\r\n.fa-child-reaching::before {\r\n  content: \"\\e59d\"; }\r\n\r\n.fa-child-rifle::before {\r\n  content: \"\\e4e0\"; }\r\n\r\n.fa-children::before {\r\n  content: \"\\e4e1\"; }\r\n\r\n.fa-church::before {\r\n  content: \"\\f51d\"; }\r\n\r\n.fa-circle::before {\r\n  content: \"\\f111\"; }\r\n\r\n.fa-circle-arrow-down::before {\r\n  content: \"\\f0ab\"; }\r\n\r\n.fa-arrow-circle-down::before {\r\n  content: \"\\f0ab\"; }\r\n\r\n.fa-circle-arrow-left::before {\r\n  content: \"\\f0a8\"; }\r\n\r\n.fa-arrow-circle-left::before {\r\n  content: \"\\f0a8\"; }\r\n\r\n.fa-circle-arrow-right::before {\r\n  content: \"\\f0a9\"; }\r\n\r\n.fa-arrow-circle-right::before {\r\n  content: \"\\f0a9\"; }\r\n\r\n.fa-circle-arrow-up::before {\r\n  content: \"\\f0aa\"; }\r\n\r\n.fa-arrow-circle-up::before {\r\n  content: \"\\f0aa\"; }\r\n\r\n.fa-circle-check::before {\r\n  content: \"\\f058\"; }\r\n\r\n.fa-check-circle::before {\r\n  content: \"\\f058\"; }\r\n\r\n.fa-circle-chevron-down::before {\r\n  content: \"\\f13a\"; }\r\n\r\n.fa-chevron-circle-down::before {\r\n  content: \"\\f13a\"; }\r\n\r\n.fa-circle-chevron-left::before {\r\n  content: \"\\f137\"; }\r\n\r\n.fa-chevron-circle-left::before {\r\n  content: \"\\f137\"; }\r\n\r\n.fa-circle-chevron-right::before {\r\n  content: \"\\f138\"; }\r\n\r\n.fa-chevron-circle-right::before {\r\n  content: \"\\f138\"; }\r\n\r\n.fa-circle-chevron-up::before {\r\n  content: \"\\f139\"; }\r\n\r\n.fa-chevron-circle-up::before {\r\n  content: \"\\f139\"; }\r\n\r\n.fa-circle-dollar-to-slot::before {\r\n  content: \"\\f4b9\"; }\r\n\r\n.fa-donate::before {\r\n  content: \"\\f4b9\"; }\r\n\r\n.fa-circle-dot::before {\r\n  content: \"\\f192\"; }\r\n\r\n.fa-dot-circle::before {\r\n  content: \"\\f192\"; }\r\n\r\n.fa-circle-down::before {\r\n  content: \"\\f358\"; }\r\n\r\n.fa-arrow-alt-circle-down::before {\r\n  content: \"\\f358\"; }\r\n\r\n.fa-circle-exclamation::before {\r\n  content: \"\\f06a\"; }\r\n\r\n.fa-exclamation-circle::before {\r\n  content: \"\\f06a\"; }\r\n\r\n.fa-circle-h::before {\r\n  content: \"\\f47e\"; }\r\n\r\n.fa-hospital-symbol::before {\r\n  content: \"\\f47e\"; }\r\n\r\n.fa-circle-half-stroke::before {\r\n  content: \"\\f042\"; }\r\n\r\n.fa-adjust::before {\r\n  content: \"\\f042\"; }\r\n\r\n.fa-circle-info::before {\r\n  content: \"\\f05a\"; }\r\n\r\n.fa-info-circle::before {\r\n  content: \"\\f05a\"; }\r\n\r\n.fa-circle-left::before {\r\n  content: \"\\f359\"; }\r\n\r\n.fa-arrow-alt-circle-left::before {\r\n  content: \"\\f359\"; }\r\n\r\n.fa-circle-minus::before {\r\n  content: \"\\f056\"; }\r\n\r\n.fa-minus-circle::before {\r\n  content: \"\\f056\"; }\r\n\r\n.fa-circle-nodes::before {\r\n  content: \"\\e4e2\"; }\r\n\r\n.fa-circle-notch::before {\r\n  content: \"\\f1ce\"; }\r\n\r\n.fa-circle-pause::before {\r\n  content: \"\\f28b\"; }\r\n\r\n.fa-pause-circle::before {\r\n  content: \"\\f28b\"; }\r\n\r\n.fa-circle-play::before {\r\n  content: \"\\f144\"; }\r\n\r\n.fa-play-circle::before {\r\n  content: \"\\f144\"; }\r\n\r\n.fa-circle-plus::before {\r\n  content: \"\\f055\"; }\r\n\r\n.fa-plus-circle::before {\r\n  content: \"\\f055\"; }\r\n\r\n.fa-circle-question::before {\r\n  content: \"\\f059\"; }\r\n\r\n.fa-question-circle::before {\r\n  content: \"\\f059\"; }\r\n\r\n.fa-circle-radiation::before {\r\n  content: \"\\f7ba\"; }\r\n\r\n.fa-radiation-alt::before {\r\n  content: \"\\f7ba\"; }\r\n\r\n.fa-circle-right::before {\r\n  content: \"\\f35a\"; }\r\n\r\n.fa-arrow-alt-circle-right::before {\r\n  content: \"\\f35a\"; }\r\n\r\n.fa-circle-stop::before {\r\n  content: \"\\f28d\"; }\r\n\r\n.fa-stop-circle::before {\r\n  content: \"\\f28d\"; }\r\n\r\n.fa-circle-up::before {\r\n  content: \"\\f35b\"; }\r\n\r\n.fa-arrow-alt-circle-up::before {\r\n  content: \"\\f35b\"; }\r\n\r\n.fa-circle-user::before {\r\n  content: \"\\f2bd\"; }\r\n\r\n.fa-user-circle::before {\r\n  content: \"\\f2bd\"; }\r\n\r\n.fa-circle-xmark::before {\r\n  content: \"\\f057\"; }\r\n\r\n.fa-times-circle::before {\r\n  content: \"\\f057\"; }\r\n\r\n.fa-xmark-circle::before {\r\n  content: \"\\f057\"; }\r\n\r\n.fa-city::before {\r\n  content: \"\\f64f\"; }\r\n\r\n.fa-clapperboard::before {\r\n  content: \"\\e131\"; }\r\n\r\n.fa-clipboard::before {\r\n  content: \"\\f328\"; }\r\n\r\n.fa-clipboard-check::before {\r\n  content: \"\\f46c\"; }\r\n\r\n.fa-clipboard-list::before {\r\n  content: \"\\f46d\"; }\r\n\r\n.fa-clipboard-question::before {\r\n  content: \"\\e4e3\"; }\r\n\r\n.fa-clipboard-user::before {\r\n  content: \"\\f7f3\"; }\r\n\r\n.fa-clock::before {\r\n  content: \"\\f017\"; }\r\n\r\n.fa-clock-four::before {\r\n  content: \"\\f017\"; }\r\n\r\n.fa-clock-rotate-left::before {\r\n  content: \"\\f1da\"; }\r\n\r\n.fa-history::before {\r\n  content: \"\\f1da\"; }\r\n\r\n.fa-clone::before {\r\n  content: \"\\f24d\"; }\r\n\r\n.fa-closed-captioning::before {\r\n  content: \"\\f20a\"; }\r\n\r\n.fa-cloud::before {\r\n  content: \"\\f0c2\"; }\r\n\r\n.fa-cloud-arrow-down::before {\r\n  content: \"\\f0ed\"; }\r\n\r\n.fa-cloud-download::before {\r\n  content: \"\\f0ed\"; }\r\n\r\n.fa-cloud-download-alt::before {\r\n  content: \"\\f0ed\"; }\r\n\r\n.fa-cloud-arrow-up::before {\r\n  content: \"\\f0ee\"; }\r\n\r\n.fa-cloud-upload::before {\r\n  content: \"\\f0ee\"; }\r\n\r\n.fa-cloud-upload-alt::before {\r\n  content: \"\\f0ee\"; }\r\n\r\n.fa-cloud-bolt::before {\r\n  content: \"\\f76c\"; }\r\n\r\n.fa-thunderstorm::before {\r\n  content: \"\\f76c\"; }\r\n\r\n.fa-cloud-meatball::before {\r\n  content: \"\\f73b\"; }\r\n\r\n.fa-cloud-moon::before {\r\n  content: \"\\f6c3\"; }\r\n\r\n.fa-cloud-moon-rain::before {\r\n  content: \"\\f73c\"; }\r\n\r\n.fa-cloud-rain::before {\r\n  content: \"\\f73d\"; }\r\n\r\n.fa-cloud-showers-heavy::before {\r\n  content: \"\\f740\"; }\r\n\r\n.fa-cloud-showers-water::before {\r\n  content: \"\\e4e4\"; }\r\n\r\n.fa-cloud-sun::before {\r\n  content: \"\\f6c4\"; }\r\n\r\n.fa-cloud-sun-rain::before {\r\n  content: \"\\f743\"; }\r\n\r\n.fa-clover::before {\r\n  content: \"\\e139\"; }\r\n\r\n.fa-code::before {\r\n  content: \"\\f121\"; }\r\n\r\n.fa-code-branch::before {\r\n  content: \"\\f126\"; }\r\n\r\n.fa-code-commit::before {\r\n  content: \"\\f386\"; }\r\n\r\n.fa-code-compare::before {\r\n  content: \"\\e13a\"; }\r\n\r\n.fa-code-fork::before {\r\n  content: \"\\e13b\"; }\r\n\r\n.fa-code-merge::before {\r\n  content: \"\\f387\"; }\r\n\r\n.fa-code-pull-request::before {\r\n  content: \"\\e13c\"; }\r\n\r\n.fa-coins::before {\r\n  content: \"\\f51e\"; }\r\n\r\n.fa-colon-sign::before {\r\n  content: \"\\e140\"; }\r\n\r\n.fa-comment::before {\r\n  content: \"\\f075\"; }\r\n\r\n.fa-comment-dollar::before {\r\n  content: \"\\f651\"; }\r\n\r\n.fa-comment-dots::before {\r\n  content: \"\\f4ad\"; }\r\n\r\n.fa-commenting::before {\r\n  content: \"\\f4ad\"; }\r\n\r\n.fa-comment-medical::before {\r\n  content: \"\\f7f5\"; }\r\n\r\n.fa-comment-slash::before {\r\n  content: \"\\f4b3\"; }\r\n\r\n.fa-comment-sms::before {\r\n  content: \"\\f7cd\"; }\r\n\r\n.fa-sms::before {\r\n  content: \"\\f7cd\"; }\r\n\r\n.fa-comments::before {\r\n  content: \"\\f086\"; }\r\n\r\n.fa-comments-dollar::before {\r\n  content: \"\\f653\"; }\r\n\r\n.fa-compact-disc::before {\r\n  content: \"\\f51f\"; }\r\n\r\n.fa-compass::before {\r\n  content: \"\\f14e\"; }\r\n\r\n.fa-compass-drafting::before {\r\n  content: \"\\f568\"; }\r\n\r\n.fa-drafting-compass::before {\r\n  content: \"\\f568\"; }\r\n\r\n.fa-compress::before {\r\n  content: \"\\f066\"; }\r\n\r\n.fa-computer::before {\r\n  content: \"\\e4e5\"; }\r\n\r\n.fa-computer-mouse::before {\r\n  content: \"\\f8cc\"; }\r\n\r\n.fa-mouse::before {\r\n  content: \"\\f8cc\"; }\r\n\r\n.fa-cookie::before {\r\n  content: \"\\f563\"; }\r\n\r\n.fa-cookie-bite::before {\r\n  content: \"\\f564\"; }\r\n\r\n.fa-copy::before {\r\n  content: \"\\f0c5\"; }\r\n\r\n.fa-copyright::before {\r\n  content: \"\\f1f9\"; }\r\n\r\n.fa-couch::before {\r\n  content: \"\\f4b8\"; }\r\n\r\n.fa-cow::before {\r\n  content: \"\\f6c8\"; }\r\n\r\n.fa-credit-card::before {\r\n  content: \"\\f09d\"; }\r\n\r\n.fa-credit-card-alt::before {\r\n  content: \"\\f09d\"; }\r\n\r\n.fa-crop::before {\r\n  content: \"\\f125\"; }\r\n\r\n.fa-crop-simple::before {\r\n  content: \"\\f565\"; }\r\n\r\n.fa-crop-alt::before {\r\n  content: \"\\f565\"; }\r\n\r\n.fa-cross::before {\r\n  content: \"\\f654\"; }\r\n\r\n.fa-crosshairs::before {\r\n  content: \"\\f05b\"; }\r\n\r\n.fa-crow::before {\r\n  content: \"\\f520\"; }\r\n\r\n.fa-crown::before {\r\n  content: \"\\f521\"; }\r\n\r\n.fa-crutch::before {\r\n  content: \"\\f7f7\"; }\r\n\r\n.fa-cruzeiro-sign::before {\r\n  content: \"\\e152\"; }\r\n\r\n.fa-cube::before {\r\n  content: \"\\f1b2\"; }\r\n\r\n.fa-cubes::before {\r\n  content: \"\\f1b3\"; }\r\n\r\n.fa-cubes-stacked::before {\r\n  content: \"\\e4e6\"; }\r\n\r\n.fa-d::before {\r\n  content: \"\\44\"; }\r\n\r\n.fa-database::before {\r\n  content: \"\\f1c0\"; }\r\n\r\n.fa-delete-left::before {\r\n  content: \"\\f55a\"; }\r\n\r\n.fa-backspace::before {\r\n  content: \"\\f55a\"; }\r\n\r\n.fa-democrat::before {\r\n  content: \"\\f747\"; }\r\n\r\n.fa-desktop::before {\r\n  content: \"\\f390\"; }\r\n\r\n.fa-desktop-alt::before {\r\n  content: \"\\f390\"; }\r\n\r\n.fa-dharmachakra::before {\r\n  content: \"\\f655\"; }\r\n\r\n.fa-diagram-next::before {\r\n  content: \"\\e476\"; }\r\n\r\n.fa-diagram-predecessor::before {\r\n  content: \"\\e477\"; }\r\n\r\n.fa-diagram-project::before {\r\n  content: \"\\f542\"; }\r\n\r\n.fa-project-diagram::before {\r\n  content: \"\\f542\"; }\r\n\r\n.fa-diagram-successor::before {\r\n  content: \"\\e47a\"; }\r\n\r\n.fa-diamond::before {\r\n  content: \"\\f219\"; }\r\n\r\n.fa-diamond-turn-right::before {\r\n  content: \"\\f5eb\"; }\r\n\r\n.fa-directions::before {\r\n  content: \"\\f5eb\"; }\r\n\r\n.fa-dice::before {\r\n  content: \"\\f522\"; }\r\n\r\n.fa-dice-d20::before {\r\n  content: \"\\f6cf\"; }\r\n\r\n.fa-dice-d6::before {\r\n  content: \"\\f6d1\"; }\r\n\r\n.fa-dice-five::before {\r\n  content: \"\\f523\"; }\r\n\r\n.fa-dice-four::before {\r\n  content: \"\\f524\"; }\r\n\r\n.fa-dice-one::before {\r\n  content: \"\\f525\"; }\r\n\r\n.fa-dice-six::before {\r\n  content: \"\\f526\"; }\r\n\r\n.fa-dice-three::before {\r\n  content: \"\\f527\"; }\r\n\r\n.fa-dice-two::before {\r\n  content: \"\\f528\"; }\r\n\r\n.fa-disease::before {\r\n  content: \"\\f7fa\"; }\r\n\r\n.fa-display::before {\r\n  content: \"\\e163\"; }\r\n\r\n.fa-divide::before {\r\n  content: \"\\f529\"; }\r\n\r\n.fa-dna::before {\r\n  content: \"\\f471\"; }\r\n\r\n.fa-dog::before {\r\n  content: \"\\f6d3\"; }\r\n\r\n.fa-dollar-sign::before {\r\n  content: \"\\24\"; }\r\n\r\n.fa-dollar::before {\r\n  content: \"\\24\"; }\r\n\r\n.fa-usd::before {\r\n  content: \"\\24\"; }\r\n\r\n.fa-dolly::before {\r\n  content: \"\\f472\"; }\r\n\r\n.fa-dolly-box::before {\r\n  content: \"\\f472\"; }\r\n\r\n.fa-dong-sign::before {\r\n  content: \"\\e169\"; }\r\n\r\n.fa-door-closed::before {\r\n  content: \"\\f52a\"; }\r\n\r\n.fa-door-open::before {\r\n  content: \"\\f52b\"; }\r\n\r\n.fa-dove::before {\r\n  content: \"\\f4ba\"; }\r\n\r\n.fa-down-left-and-up-right-to-center::before {\r\n  content: \"\\f422\"; }\r\n\r\n.fa-compress-alt::before {\r\n  content: \"\\f422\"; }\r\n\r\n.fa-down-long::before {\r\n  content: \"\\f309\"; }\r\n\r\n.fa-long-arrow-alt-down::before {\r\n  content: \"\\f309\"; }\r\n\r\n.fa-download::before {\r\n  content: \"\\f019\"; }\r\n\r\n.fa-dragon::before {\r\n  content: \"\\f6d5\"; }\r\n\r\n.fa-draw-polygon::before {\r\n  content: \"\\f5ee\"; }\r\n\r\n.fa-droplet::before {\r\n  content: \"\\f043\"; }\r\n\r\n.fa-tint::before {\r\n  content: \"\\f043\"; }\r\n\r\n.fa-droplet-slash::before {\r\n  content: \"\\f5c7\"; }\r\n\r\n.fa-tint-slash::before {\r\n  content: \"\\f5c7\"; }\r\n\r\n.fa-drum::before {\r\n  content: \"\\f569\"; }\r\n\r\n.fa-drum-steelpan::before {\r\n  content: \"\\f56a\"; }\r\n\r\n.fa-drumstick-bite::before {\r\n  content: \"\\f6d7\"; }\r\n\r\n.fa-dumbbell::before {\r\n  content: \"\\f44b\"; }\r\n\r\n.fa-dumpster::before {\r\n  content: \"\\f793\"; }\r\n\r\n.fa-dumpster-fire::before {\r\n  content: \"\\f794\"; }\r\n\r\n.fa-dungeon::before {\r\n  content: \"\\f6d9\"; }\r\n\r\n.fa-e::before {\r\n  content: \"\\45\"; }\r\n\r\n.fa-ear-deaf::before {\r\n  content: \"\\f2a4\"; }\r\n\r\n.fa-deaf::before {\r\n  content: \"\\f2a4\"; }\r\n\r\n.fa-deafness::before {\r\n  content: \"\\f2a4\"; }\r\n\r\n.fa-hard-of-hearing::before {\r\n  content: \"\\f2a4\"; }\r\n\r\n.fa-ear-listen::before {\r\n  content: \"\\f2a2\"; }\r\n\r\n.fa-assistive-listening-systems::before {\r\n  content: \"\\f2a2\"; }\r\n\r\n.fa-earth-africa::before {\r\n  content: \"\\f57c\"; }\r\n\r\n.fa-globe-africa::before {\r\n  content: \"\\f57c\"; }\r\n\r\n.fa-earth-americas::before {\r\n  content: \"\\f57d\"; }\r\n\r\n.fa-earth::before {\r\n  content: \"\\f57d\"; }\r\n\r\n.fa-earth-america::before {\r\n  content: \"\\f57d\"; }\r\n\r\n.fa-globe-americas::before {\r\n  content: \"\\f57d\"; }\r\n\r\n.fa-earth-asia::before {\r\n  content: \"\\f57e\"; }\r\n\r\n.fa-globe-asia::before {\r\n  content: \"\\f57e\"; }\r\n\r\n.fa-earth-europe::before {\r\n  content: \"\\f7a2\"; }\r\n\r\n.fa-globe-europe::before {\r\n  content: \"\\f7a2\"; }\r\n\r\n.fa-earth-oceania::before {\r\n  content: \"\\e47b\"; }\r\n\r\n.fa-globe-oceania::before {\r\n  content: \"\\e47b\"; }\r\n\r\n.fa-egg::before {\r\n  content: \"\\f7fb\"; }\r\n\r\n.fa-eject::before {\r\n  content: \"\\f052\"; }\r\n\r\n.fa-elevator::before {\r\n  content: \"\\e16d\"; }\r\n\r\n.fa-ellipsis::before {\r\n  content: \"\\f141\"; }\r\n\r\n.fa-ellipsis-h::before {\r\n  content: \"\\f141\"; }\r\n\r\n.fa-ellipsis-vertical::before {\r\n  content: \"\\f142\"; }\r\n\r\n.fa-ellipsis-v::before {\r\n  content: \"\\f142\"; }\r\n\r\n.fa-envelope::before {\r\n  content: \"\\f0e0\"; }\r\n\r\n.fa-envelope-circle-check::before {\r\n  content: \"\\e4e8\"; }\r\n\r\n.fa-envelope-open::before {\r\n  content: \"\\f2b6\"; }\r\n\r\n.fa-envelope-open-text::before {\r\n  content: \"\\f658\"; }\r\n\r\n.fa-envelopes-bulk::before {\r\n  content: \"\\f674\"; }\r\n\r\n.fa-mail-bulk::before {\r\n  content: \"\\f674\"; }\r\n\r\n.fa-equals::before {\r\n  content: \"\\3d\"; }\r\n\r\n.fa-eraser::before {\r\n  content: \"\\f12d\"; }\r\n\r\n.fa-ethernet::before {\r\n  content: \"\\f796\"; }\r\n\r\n.fa-euro-sign::before {\r\n  content: \"\\f153\"; }\r\n\r\n.fa-eur::before {\r\n  content: \"\\f153\"; }\r\n\r\n.fa-euro::before {\r\n  content: \"\\f153\"; }\r\n\r\n.fa-exclamation::before {\r\n  content: \"\\21\"; }\r\n\r\n.fa-expand::before {\r\n  content: \"\\f065\"; }\r\n\r\n.fa-explosion::before {\r\n  content: \"\\e4e9\"; }\r\n\r\n.fa-eye::before {\r\n  content: \"\\f06e\"; }\r\n\r\n.fa-eye-dropper::before {\r\n  content: \"\\f1fb\"; }\r\n\r\n.fa-eye-dropper-empty::before {\r\n  content: \"\\f1fb\"; }\r\n\r\n.fa-eyedropper::before {\r\n  content: \"\\f1fb\"; }\r\n\r\n.fa-eye-low-vision::before {\r\n  content: \"\\f2a8\"; }\r\n\r\n.fa-low-vision::before {\r\n  content: \"\\f2a8\"; }\r\n\r\n.fa-eye-slash::before {\r\n  content: \"\\f070\"; }\r\n\r\n.fa-f::before {\r\n  content: \"\\46\"; }\r\n\r\n.fa-face-angry::before {\r\n  content: \"\\f556\"; }\r\n\r\n.fa-angry::before {\r\n  content: \"\\f556\"; }\r\n\r\n.fa-face-dizzy::before {\r\n  content: \"\\f567\"; }\r\n\r\n.fa-dizzy::before {\r\n  content: \"\\f567\"; }\r\n\r\n.fa-face-flushed::before {\r\n  content: \"\\f579\"; }\r\n\r\n.fa-flushed::before {\r\n  content: \"\\f579\"; }\r\n\r\n.fa-face-frown::before {\r\n  content: \"\\f119\"; }\r\n\r\n.fa-frown::before {\r\n  content: \"\\f119\"; }\r\n\r\n.fa-face-frown-open::before {\r\n  content: \"\\f57a\"; }\r\n\r\n.fa-frown-open::before {\r\n  content: \"\\f57a\"; }\r\n\r\n.fa-face-grimace::before {\r\n  content: \"\\f57f\"; }\r\n\r\n.fa-grimace::before {\r\n  content: \"\\f57f\"; }\r\n\r\n.fa-face-grin::before {\r\n  content: \"\\f580\"; }\r\n\r\n.fa-grin::before {\r\n  content: \"\\f580\"; }\r\n\r\n.fa-face-grin-beam::before {\r\n  content: \"\\f582\"; }\r\n\r\n.fa-grin-beam::before {\r\n  content: \"\\f582\"; }\r\n\r\n.fa-face-grin-beam-sweat::before {\r\n  content: \"\\f583\"; }\r\n\r\n.fa-grin-beam-sweat::before {\r\n  content: \"\\f583\"; }\r\n\r\n.fa-face-grin-hearts::before {\r\n  content: \"\\f584\"; }\r\n\r\n.fa-grin-hearts::before {\r\n  content: \"\\f584\"; }\r\n\r\n.fa-face-grin-squint::before {\r\n  content: \"\\f585\"; }\r\n\r\n.fa-grin-squint::before {\r\n  content: \"\\f585\"; }\r\n\r\n.fa-face-grin-squint-tears::before {\r\n  content: \"\\f586\"; }\r\n\r\n.fa-grin-squint-tears::before {\r\n  content: \"\\f586\"; }\r\n\r\n.fa-face-grin-stars::before {\r\n  content: \"\\f587\"; }\r\n\r\n.fa-grin-stars::before {\r\n  content: \"\\f587\"; }\r\n\r\n.fa-face-grin-tears::before {\r\n  content: \"\\f588\"; }\r\n\r\n.fa-grin-tears::before {\r\n  content: \"\\f588\"; }\r\n\r\n.fa-face-grin-tongue::before {\r\n  content: \"\\f589\"; }\r\n\r\n.fa-grin-tongue::before {\r\n  content: \"\\f589\"; }\r\n\r\n.fa-face-grin-tongue-squint::before {\r\n  content: \"\\f58a\"; }\r\n\r\n.fa-grin-tongue-squint::before {\r\n  content: \"\\f58a\"; }\r\n\r\n.fa-face-grin-tongue-wink::before {\r\n  content: \"\\f58b\"; }\r\n\r\n.fa-grin-tongue-wink::before {\r\n  content: \"\\f58b\"; }\r\n\r\n.fa-face-grin-wide::before {\r\n  content: \"\\f581\"; }\r\n\r\n.fa-grin-alt::before {\r\n  content: \"\\f581\"; }\r\n\r\n.fa-face-grin-wink::before {\r\n  content: \"\\f58c\"; }\r\n\r\n.fa-grin-wink::before {\r\n  content: \"\\f58c\"; }\r\n\r\n.fa-face-kiss::before {\r\n  content: \"\\f596\"; }\r\n\r\n.fa-kiss::before {\r\n  content: \"\\f596\"; }\r\n\r\n.fa-face-kiss-beam::before {\r\n  content: \"\\f597\"; }\r\n\r\n.fa-kiss-beam::before {\r\n  content: \"\\f597\"; }\r\n\r\n.fa-face-kiss-wink-heart::before {\r\n  content: \"\\f598\"; }\r\n\r\n.fa-kiss-wink-heart::before {\r\n  content: \"\\f598\"; }\r\n\r\n.fa-face-laugh::before {\r\n  content: \"\\f599\"; }\r\n\r\n.fa-laugh::before {\r\n  content: \"\\f599\"; }\r\n\r\n.fa-face-laugh-beam::before {\r\n  content: \"\\f59a\"; }\r\n\r\n.fa-laugh-beam::before {\r\n  content: \"\\f59a\"; }\r\n\r\n.fa-face-laugh-squint::before {\r\n  content: \"\\f59b\"; }\r\n\r\n.fa-laugh-squint::before {\r\n  content: \"\\f59b\"; }\r\n\r\n.fa-face-laugh-wink::before {\r\n  content: \"\\f59c\"; }\r\n\r\n.fa-laugh-wink::before {\r\n  content: \"\\f59c\"; }\r\n\r\n.fa-face-meh::before {\r\n  content: \"\\f11a\"; }\r\n\r\n.fa-meh::before {\r\n  content: \"\\f11a\"; }\r\n\r\n.fa-face-meh-blank::before {\r\n  content: \"\\f5a4\"; }\r\n\r\n.fa-meh-blank::before {\r\n  content: \"\\f5a4\"; }\r\n\r\n.fa-face-rolling-eyes::before {\r\n  content: \"\\f5a5\"; }\r\n\r\n.fa-meh-rolling-eyes::before {\r\n  content: \"\\f5a5\"; }\r\n\r\n.fa-face-sad-cry::before {\r\n  content: \"\\f5b3\"; }\r\n\r\n.fa-sad-cry::before {\r\n  content: \"\\f5b3\"; }\r\n\r\n.fa-face-sad-tear::before {\r\n  content: \"\\f5b4\"; }\r\n\r\n.fa-sad-tear::before {\r\n  content: \"\\f5b4\"; }\r\n\r\n.fa-face-smile::before {\r\n  content: \"\\f118\"; }\r\n\r\n.fa-smile::before {\r\n  content: \"\\f118\"; }\r\n\r\n.fa-face-smile-beam::before {\r\n  content: \"\\f5b8\"; }\r\n\r\n.fa-smile-beam::before {\r\n  content: \"\\f5b8\"; }\r\n\r\n.fa-face-smile-wink::before {\r\n  content: \"\\f4da\"; }\r\n\r\n.fa-smile-wink::before {\r\n  content: \"\\f4da\"; }\r\n\r\n.fa-face-surprise::before {\r\n  content: \"\\f5c2\"; }\r\n\r\n.fa-surprise::before {\r\n  content: \"\\f5c2\"; }\r\n\r\n.fa-face-tired::before {\r\n  content: \"\\f5c8\"; }\r\n\r\n.fa-tired::before {\r\n  content: \"\\f5c8\"; }\r\n\r\n.fa-fan::before {\r\n  content: \"\\f863\"; }\r\n\r\n.fa-faucet::before {\r\n  content: \"\\e005\"; }\r\n\r\n.fa-faucet-drip::before {\r\n  content: \"\\e006\"; }\r\n\r\n.fa-fax::before {\r\n  content: \"\\f1ac\"; }\r\n\r\n.fa-feather::before {\r\n  content: \"\\f52d\"; }\r\n\r\n.fa-feather-pointed::before {\r\n  content: \"\\f56b\"; }\r\n\r\n.fa-feather-alt::before {\r\n  content: \"\\f56b\"; }\r\n\r\n.fa-ferry::before {\r\n  content: \"\\e4ea\"; }\r\n\r\n.fa-file::before {\r\n  content: \"\\f15b\"; }\r\n\r\n.fa-file-arrow-down::before {\r\n  content: \"\\f56d\"; }\r\n\r\n.fa-file-download::before {\r\n  content: \"\\f56d\"; }\r\n\r\n.fa-file-arrow-up::before {\r\n  content: \"\\f574\"; }\r\n\r\n.fa-file-upload::before {\r\n  content: \"\\f574\"; }\r\n\r\n.fa-file-audio::before {\r\n  content: \"\\f1c7\"; }\r\n\r\n.fa-file-circle-check::before {\r\n  content: \"\\e493\"; }\r\n\r\n.fa-file-circle-exclamation::before {\r\n  content: \"\\e4eb\"; }\r\n\r\n.fa-file-circle-minus::before {\r\n  content: \"\\e4ed\"; }\r\n\r\n.fa-file-circle-plus::before {\r\n  content: \"\\e4ee\"; }\r\n\r\n.fa-file-circle-question::before {\r\n  content: \"\\e4ef\"; }\r\n\r\n.fa-file-circle-xmark::before {\r\n  content: \"\\e494\"; }\r\n\r\n.fa-file-code::before {\r\n  content: \"\\f1c9\"; }\r\n\r\n.fa-file-contract::before {\r\n  content: \"\\f56c\"; }\r\n\r\n.fa-file-csv::before {\r\n  content: \"\\f6dd\"; }\r\n\r\n.fa-file-excel::before {\r\n  content: \"\\f1c3\"; }\r\n\r\n.fa-file-export::before {\r\n  content: \"\\f56e\"; }\r\n\r\n.fa-arrow-right-from-file::before {\r\n  content: \"\\f56e\"; }\r\n\r\n.fa-file-image::before {\r\n  content: \"\\f1c5\"; }\r\n\r\n.fa-file-import::before {\r\n  content: \"\\f56f\"; }\r\n\r\n.fa-arrow-right-to-file::before {\r\n  content: \"\\f56f\"; }\r\n\r\n.fa-file-invoice::before {\r\n  content: \"\\f570\"; }\r\n\r\n.fa-file-invoice-dollar::before {\r\n  content: \"\\f571\"; }\r\n\r\n.fa-file-lines::before {\r\n  content: \"\\f15c\"; }\r\n\r\n.fa-file-alt::before {\r\n  content: \"\\f15c\"; }\r\n\r\n.fa-file-text::before {\r\n  content: \"\\f15c\"; }\r\n\r\n.fa-file-medical::before {\r\n  content: \"\\f477\"; }\r\n\r\n.fa-file-pdf::before {\r\n  content: \"\\f1c1\"; }\r\n\r\n.fa-file-pen::before {\r\n  content: \"\\f31c\"; }\r\n\r\n.fa-file-edit::before {\r\n  content: \"\\f31c\"; }\r\n\r\n.fa-file-powerpoint::before {\r\n  content: \"\\f1c4\"; }\r\n\r\n.fa-file-prescription::before {\r\n  content: \"\\f572\"; }\r\n\r\n.fa-file-shield::before {\r\n  content: \"\\e4f0\"; }\r\n\r\n.fa-file-signature::before {\r\n  content: \"\\f573\"; }\r\n\r\n.fa-file-video::before {\r\n  content: \"\\f1c8\"; }\r\n\r\n.fa-file-waveform::before {\r\n  content: \"\\f478\"; }\r\n\r\n.fa-file-medical-alt::before {\r\n  content: \"\\f478\"; }\r\n\r\n.fa-file-word::before {\r\n  content: \"\\f1c2\"; }\r\n\r\n.fa-file-zipper::before {\r\n  content: \"\\f1c6\"; }\r\n\r\n.fa-file-archive::before {\r\n  content: \"\\f1c6\"; }\r\n\r\n.fa-fill::before {\r\n  content: \"\\f575\"; }\r\n\r\n.fa-fill-drip::before {\r\n  content: \"\\f576\"; }\r\n\r\n.fa-film::before {\r\n  content: \"\\f008\"; }\r\n\r\n.fa-filter::before {\r\n  content: \"\\f0b0\"; }\r\n\r\n.fa-filter-circle-dollar::before {\r\n  content: \"\\f662\"; }\r\n\r\n.fa-funnel-dollar::before {\r\n  content: \"\\f662\"; }\r\n\r\n.fa-filter-circle-xmark::before {\r\n  content: \"\\e17b\"; }\r\n\r\n.fa-fingerprint::before {\r\n  content: \"\\f577\"; }\r\n\r\n.fa-fire::before {\r\n  content: \"\\f06d\"; }\r\n\r\n.fa-fire-burner::before {\r\n  content: \"\\e4f1\"; }\r\n\r\n.fa-fire-extinguisher::before {\r\n  content: \"\\f134\"; }\r\n\r\n.fa-fire-flame-curved::before {\r\n  content: \"\\f7e4\"; }\r\n\r\n.fa-fire-alt::before {\r\n  content: \"\\f7e4\"; }\r\n\r\n.fa-fire-flame-simple::before {\r\n  content: \"\\f46a\"; }\r\n\r\n.fa-burn::before {\r\n  content: \"\\f46a\"; }\r\n\r\n.fa-fish::before {\r\n  content: \"\\f578\"; }\r\n\r\n.fa-fish-fins::before {\r\n  content: \"\\e4f2\"; }\r\n\r\n.fa-flag::before {\r\n  content: \"\\f024\"; }\r\n\r\n.fa-flag-checkered::before {\r\n  content: \"\\f11e\"; }\r\n\r\n.fa-flag-usa::before {\r\n  content: \"\\f74d\"; }\r\n\r\n.fa-flask::before {\r\n  content: \"\\f0c3\"; }\r\n\r\n.fa-flask-vial::before {\r\n  content: \"\\e4f3\"; }\r\n\r\n.fa-floppy-disk::before {\r\n  content: \"\\f0c7\"; }\r\n\r\n.fa-save::before {\r\n  content: \"\\f0c7\"; }\r\n\r\n.fa-florin-sign::before {\r\n  content: \"\\e184\"; }\r\n\r\n.fa-folder::before {\r\n  content: \"\\f07b\"; }\r\n\r\n.fa-folder-blank::before {\r\n  content: \"\\f07b\"; }\r\n\r\n.fa-folder-closed::before {\r\n  content: \"\\e185\"; }\r\n\r\n.fa-folder-minus::before {\r\n  content: \"\\f65d\"; }\r\n\r\n.fa-folder-open::before {\r\n  content: \"\\f07c\"; }\r\n\r\n.fa-folder-plus::before {\r\n  content: \"\\f65e\"; }\r\n\r\n.fa-folder-tree::before {\r\n  content: \"\\f802\"; }\r\n\r\n.fa-font::before {\r\n  content: \"\\f031\"; }\r\n\r\n.fa-football::before {\r\n  content: \"\\f44e\"; }\r\n\r\n.fa-football-ball::before {\r\n  content: \"\\f44e\"; }\r\n\r\n.fa-forward::before {\r\n  content: \"\\f04e\"; }\r\n\r\n.fa-forward-fast::before {\r\n  content: \"\\f050\"; }\r\n\r\n.fa-fast-forward::before {\r\n  content: \"\\f050\"; }\r\n\r\n.fa-forward-step::before {\r\n  content: \"\\f051\"; }\r\n\r\n.fa-step-forward::before {\r\n  content: \"\\f051\"; }\r\n\r\n.fa-franc-sign::before {\r\n  content: \"\\e18f\"; }\r\n\r\n.fa-frog::before {\r\n  content: \"\\f52e\"; }\r\n\r\n.fa-futbol::before {\r\n  content: \"\\f1e3\"; }\r\n\r\n.fa-futbol-ball::before {\r\n  content: \"\\f1e3\"; }\r\n\r\n.fa-soccer-ball::before {\r\n  content: \"\\f1e3\"; }\r\n\r\n.fa-g::before {\r\n  content: \"\\47\"; }\r\n\r\n.fa-gamepad::before {\r\n  content: \"\\f11b\"; }\r\n\r\n.fa-gas-pump::before {\r\n  content: \"\\f52f\"; }\r\n\r\n.fa-gauge::before {\r\n  content: \"\\f624\"; }\r\n\r\n.fa-dashboard::before {\r\n  content: \"\\f624\"; }\r\n\r\n.fa-gauge-med::before {\r\n  content: \"\\f624\"; }\r\n\r\n.fa-tachometer-alt-average::before {\r\n  content: \"\\f624\"; }\r\n\r\n.fa-gauge-high::before {\r\n  content: \"\\f625\"; }\r\n\r\n.fa-tachometer-alt::before {\r\n  content: \"\\f625\"; }\r\n\r\n.fa-tachometer-alt-fast::before {\r\n  content: \"\\f625\"; }\r\n\r\n.fa-gauge-simple::before {\r\n  content: \"\\f629\"; }\r\n\r\n.fa-gauge-simple-med::before {\r\n  content: \"\\f629\"; }\r\n\r\n.fa-tachometer-average::before {\r\n  content: \"\\f629\"; }\r\n\r\n.fa-gauge-simple-high::before {\r\n  content: \"\\f62a\"; }\r\n\r\n.fa-tachometer::before {\r\n  content: \"\\f62a\"; }\r\n\r\n.fa-tachometer-fast::before {\r\n  content: \"\\f62a\"; }\r\n\r\n.fa-gavel::before {\r\n  content: \"\\f0e3\"; }\r\n\r\n.fa-legal::before {\r\n  content: \"\\f0e3\"; }\r\n\r\n.fa-gear::before {\r\n  content: \"\\f013\"; }\r\n\r\n.fa-cog::before {\r\n  content: \"\\f013\"; }\r\n\r\n.fa-gears::before {\r\n  content: \"\\f085\"; }\r\n\r\n.fa-cogs::before {\r\n  content: \"\\f085\"; }\r\n\r\n.fa-gem::before {\r\n  content: \"\\f3a5\"; }\r\n\r\n.fa-genderless::before {\r\n  content: \"\\f22d\"; }\r\n\r\n.fa-ghost::before {\r\n  content: \"\\f6e2\"; }\r\n\r\n.fa-gift::before {\r\n  content: \"\\f06b\"; }\r\n\r\n.fa-gifts::before {\r\n  content: \"\\f79c\"; }\r\n\r\n.fa-glass-water::before {\r\n  content: \"\\e4f4\"; }\r\n\r\n.fa-glass-water-droplet::before {\r\n  content: \"\\e4f5\"; }\r\n\r\n.fa-glasses::before {\r\n  content: \"\\f530\"; }\r\n\r\n.fa-globe::before {\r\n  content: \"\\f0ac\"; }\r\n\r\n.fa-golf-ball-tee::before {\r\n  content: \"\\f450\"; }\r\n\r\n.fa-golf-ball::before {\r\n  content: \"\\f450\"; }\r\n\r\n.fa-gopuram::before {\r\n  content: \"\\f664\"; }\r\n\r\n.fa-graduation-cap::before {\r\n  content: \"\\f19d\"; }\r\n\r\n.fa-mortar-board::before {\r\n  content: \"\\f19d\"; }\r\n\r\n.fa-greater-than::before {\r\n  content: \"\\3e\"; }\r\n\r\n.fa-greater-than-equal::before {\r\n  content: \"\\f532\"; }\r\n\r\n.fa-grip::before {\r\n  content: \"\\f58d\"; }\r\n\r\n.fa-grip-horizontal::before {\r\n  content: \"\\f58d\"; }\r\n\r\n.fa-grip-lines::before {\r\n  content: \"\\f7a4\"; }\r\n\r\n.fa-grip-lines-vertical::before {\r\n  content: \"\\f7a5\"; }\r\n\r\n.fa-grip-vertical::before {\r\n  content: \"\\f58e\"; }\r\n\r\n.fa-group-arrows-rotate::before {\r\n  content: \"\\e4f6\"; }\r\n\r\n.fa-guarani-sign::before {\r\n  content: \"\\e19a\"; }\r\n\r\n.fa-guitar::before {\r\n  content: \"\\f7a6\"; }\r\n\r\n.fa-gun::before {\r\n  content: \"\\e19b\"; }\r\n\r\n.fa-h::before {\r\n  content: \"\\48\"; }\r\n\r\n.fa-hammer::before {\r\n  content: \"\\f6e3\"; }\r\n\r\n.fa-hamsa::before {\r\n  content: \"\\f665\"; }\r\n\r\n.fa-hand::before {\r\n  content: \"\\f256\"; }\r\n\r\n.fa-hand-paper::before {\r\n  content: \"\\f256\"; }\r\n\r\n.fa-hand-back-fist::before {\r\n  content: \"\\f255\"; }\r\n\r\n.fa-hand-rock::before {\r\n  content: \"\\f255\"; }\r\n\r\n.fa-hand-dots::before {\r\n  content: \"\\f461\"; }\r\n\r\n.fa-allergies::before {\r\n  content: \"\\f461\"; }\r\n\r\n.fa-hand-fist::before {\r\n  content: \"\\f6de\"; }\r\n\r\n.fa-fist-raised::before {\r\n  content: \"\\f6de\"; }\r\n\r\n.fa-hand-holding::before {\r\n  content: \"\\f4bd\"; }\r\n\r\n.fa-hand-holding-dollar::before {\r\n  content: \"\\f4c0\"; }\r\n\r\n.fa-hand-holding-usd::before {\r\n  content: \"\\f4c0\"; }\r\n\r\n.fa-hand-holding-droplet::before {\r\n  content: \"\\f4c1\"; }\r\n\r\n.fa-hand-holding-water::before {\r\n  content: \"\\f4c1\"; }\r\n\r\n.fa-hand-holding-hand::before {\r\n  content: \"\\e4f7\"; }\r\n\r\n.fa-hand-holding-heart::before {\r\n  content: \"\\f4be\"; }\r\n\r\n.fa-hand-holding-medical::before {\r\n  content: \"\\e05c\"; }\r\n\r\n.fa-hand-lizard::before {\r\n  content: \"\\f258\"; }\r\n\r\n.fa-hand-middle-finger::before {\r\n  content: \"\\f806\"; }\r\n\r\n.fa-hand-peace::before {\r\n  content: \"\\f25b\"; }\r\n\r\n.fa-hand-point-down::before {\r\n  content: \"\\f0a7\"; }\r\n\r\n.fa-hand-point-left::before {\r\n  content: \"\\f0a5\"; }\r\n\r\n.fa-hand-point-right::before {\r\n  content: \"\\f0a4\"; }\r\n\r\n.fa-hand-point-up::before {\r\n  content: \"\\f0a6\"; }\r\n\r\n.fa-hand-pointer::before {\r\n  content: \"\\f25a\"; }\r\n\r\n.fa-hand-scissors::before {\r\n  content: \"\\f257\"; }\r\n\r\n.fa-hand-sparkles::before {\r\n  content: \"\\e05d\"; }\r\n\r\n.fa-hand-spock::before {\r\n  content: \"\\f259\"; }\r\n\r\n.fa-handcuffs::before {\r\n  content: \"\\e4f8\"; }\r\n\r\n.fa-hands::before {\r\n  content: \"\\f2a7\"; }\r\n\r\n.fa-sign-language::before {\r\n  content: \"\\f2a7\"; }\r\n\r\n.fa-signing::before {\r\n  content: \"\\f2a7\"; }\r\n\r\n.fa-hands-asl-interpreting::before {\r\n  content: \"\\f2a3\"; }\r\n\r\n.fa-american-sign-language-interpreting::before {\r\n  content: \"\\f2a3\"; }\r\n\r\n.fa-asl-interpreting::before {\r\n  content: \"\\f2a3\"; }\r\n\r\n.fa-hands-american-sign-language-interpreting::before {\r\n  content: \"\\f2a3\"; }\r\n\r\n.fa-hands-bound::before {\r\n  content: \"\\e4f9\"; }\r\n\r\n.fa-hands-bubbles::before {\r\n  content: \"\\e05e\"; }\r\n\r\n.fa-hands-wash::before {\r\n  content: \"\\e05e\"; }\r\n\r\n.fa-hands-clapping::before {\r\n  content: \"\\e1a8\"; }\r\n\r\n.fa-hands-holding::before {\r\n  content: \"\\f4c2\"; }\r\n\r\n.fa-hands-holding-child::before {\r\n  content: \"\\e4fa\"; }\r\n\r\n.fa-hands-holding-circle::before {\r\n  content: \"\\e4fb\"; }\r\n\r\n.fa-hands-praying::before {\r\n  content: \"\\f684\"; }\r\n\r\n.fa-praying-hands::before {\r\n  content: \"\\f684\"; }\r\n\r\n.fa-handshake::before {\r\n  content: \"\\f2b5\"; }\r\n\r\n.fa-handshake-angle::before {\r\n  content: \"\\f4c4\"; }\r\n\r\n.fa-hands-helping::before {\r\n  content: \"\\f4c4\"; }\r\n\r\n.fa-handshake-simple::before {\r\n  content: \"\\f4c6\"; }\r\n\r\n.fa-handshake-alt::before {\r\n  content: \"\\f4c6\"; }\r\n\r\n.fa-handshake-simple-slash::before {\r\n  content: \"\\e05f\"; }\r\n\r\n.fa-handshake-alt-slash::before {\r\n  content: \"\\e05f\"; }\r\n\r\n.fa-handshake-slash::before {\r\n  content: \"\\e060\"; }\r\n\r\n.fa-hanukiah::before {\r\n  content: \"\\f6e6\"; }\r\n\r\n.fa-hard-drive::before {\r\n  content: \"\\f0a0\"; }\r\n\r\n.fa-hdd::before {\r\n  content: \"\\f0a0\"; }\r\n\r\n.fa-hashtag::before {\r\n  content: \"\\23\"; }\r\n\r\n.fa-hat-cowboy::before {\r\n  content: \"\\f8c0\"; }\r\n\r\n.fa-hat-cowboy-side::before {\r\n  content: \"\\f8c1\"; }\r\n\r\n.fa-hat-wizard::before {\r\n  content: \"\\f6e8\"; }\r\n\r\n.fa-head-side-cough::before {\r\n  content: \"\\e061\"; }\r\n\r\n.fa-head-side-cough-slash::before {\r\n  content: \"\\e062\"; }\r\n\r\n.fa-head-side-mask::before {\r\n  content: \"\\e063\"; }\r\n\r\n.fa-head-side-virus::before {\r\n  content: \"\\e064\"; }\r\n\r\n.fa-heading::before {\r\n  content: \"\\f1dc\"; }\r\n\r\n.fa-header::before {\r\n  content: \"\\f1dc\"; }\r\n\r\n.fa-headphones::before {\r\n  content: \"\\f025\"; }\r\n\r\n.fa-headphones-simple::before {\r\n  content: \"\\f58f\"; }\r\n\r\n.fa-headphones-alt::before {\r\n  content: \"\\f58f\"; }\r\n\r\n.fa-headset::before {\r\n  content: \"\\f590\"; }\r\n\r\n.fa-heart::before {\r\n  content: \"\\f004\"; }\r\n\r\n.fa-heart-circle-bolt::before {\r\n  content: \"\\e4fc\"; }\r\n\r\n.fa-heart-circle-check::before {\r\n  content: \"\\e4fd\"; }\r\n\r\n.fa-heart-circle-exclamation::before {\r\n  content: \"\\e4fe\"; }\r\n\r\n.fa-heart-circle-minus::before {\r\n  content: \"\\e4ff\"; }\r\n\r\n.fa-heart-circle-plus::before {\r\n  content: \"\\e500\"; }\r\n\r\n.fa-heart-circle-xmark::before {\r\n  content: \"\\e501\"; }\r\n\r\n.fa-heart-crack::before {\r\n  content: \"\\f7a9\"; }\r\n\r\n.fa-heart-broken::before {\r\n  content: \"\\f7a9\"; }\r\n\r\n.fa-heart-pulse::before {\r\n  content: \"\\f21e\"; }\r\n\r\n.fa-heartbeat::before {\r\n  content: \"\\f21e\"; }\r\n\r\n.fa-helicopter::before {\r\n  content: \"\\f533\"; }\r\n\r\n.fa-helicopter-symbol::before {\r\n  content: \"\\e502\"; }\r\n\r\n.fa-helmet-safety::before {\r\n  content: \"\\f807\"; }\r\n\r\n.fa-hard-hat::before {\r\n  content: \"\\f807\"; }\r\n\r\n.fa-hat-hard::before {\r\n  content: \"\\f807\"; }\r\n\r\n.fa-helmet-un::before {\r\n  content: \"\\e503\"; }\r\n\r\n.fa-highlighter::before {\r\n  content: \"\\f591\"; }\r\n\r\n.fa-hill-avalanche::before {\r\n  content: \"\\e507\"; }\r\n\r\n.fa-hill-rockslide::before {\r\n  content: \"\\e508\"; }\r\n\r\n.fa-hippo::before {\r\n  content: \"\\f6ed\"; }\r\n\r\n.fa-hockey-puck::before {\r\n  content: \"\\f453\"; }\r\n\r\n.fa-holly-berry::before {\r\n  content: \"\\f7aa\"; }\r\n\r\n.fa-horse::before {\r\n  content: \"\\f6f0\"; }\r\n\r\n.fa-horse-head::before {\r\n  content: \"\\f7ab\"; }\r\n\r\n.fa-hospital::before {\r\n  content: \"\\f0f8\"; }\r\n\r\n.fa-hospital-alt::before {\r\n  content: \"\\f0f8\"; }\r\n\r\n.fa-hospital-wide::before {\r\n  content: \"\\f0f8\"; }\r\n\r\n.fa-hospital-user::before {\r\n  content: \"\\f80d\"; }\r\n\r\n.fa-hot-tub-person::before {\r\n  content: \"\\f593\"; }\r\n\r\n.fa-hot-tub::before {\r\n  content: \"\\f593\"; }\r\n\r\n.fa-hotdog::before {\r\n  content: \"\\f80f\"; }\r\n\r\n.fa-hotel::before {\r\n  content: \"\\f594\"; }\r\n\r\n.fa-hourglass::before {\r\n  content: \"\\f254\"; }\r\n\r\n.fa-hourglass-2::before {\r\n  content: \"\\f254\"; }\r\n\r\n.fa-hourglass-half::before {\r\n  content: \"\\f254\"; }\r\n\r\n.fa-hourglass-empty::before {\r\n  content: \"\\f252\"; }\r\n\r\n.fa-hourglass-end::before {\r\n  content: \"\\f253\"; }\r\n\r\n.fa-hourglass-3::before {\r\n  content: \"\\f253\"; }\r\n\r\n.fa-hourglass-start::before {\r\n  content: \"\\f251\"; }\r\n\r\n.fa-hourglass-1::before {\r\n  content: \"\\f251\"; }\r\n\r\n.fa-house::before {\r\n  content: \"\\f015\"; }\r\n\r\n.fa-home::before {\r\n  content: \"\\f015\"; }\r\n\r\n.fa-home-alt::before {\r\n  content: \"\\f015\"; }\r\n\r\n.fa-home-lg-alt::before {\r\n  content: \"\\f015\"; }\r\n\r\n.fa-house-chimney::before {\r\n  content: \"\\e3af\"; }\r\n\r\n.fa-home-lg::before {\r\n  content: \"\\e3af\"; }\r\n\r\n.fa-house-chimney-crack::before {\r\n  content: \"\\f6f1\"; }\r\n\r\n.fa-house-damage::before {\r\n  content: \"\\f6f1\"; }\r\n\r\n.fa-house-chimney-medical::before {\r\n  content: \"\\f7f2\"; }\r\n\r\n.fa-clinic-medical::before {\r\n  content: \"\\f7f2\"; }\r\n\r\n.fa-house-chimney-user::before {\r\n  content: \"\\e065\"; }\r\n\r\n.fa-house-chimney-window::before {\r\n  content: \"\\e00d\"; }\r\n\r\n.fa-house-circle-check::before {\r\n  content: \"\\e509\"; }\r\n\r\n.fa-house-circle-exclamation::before {\r\n  content: \"\\e50a\"; }\r\n\r\n.fa-house-circle-xmark::before {\r\n  content: \"\\e50b\"; }\r\n\r\n.fa-house-crack::before {\r\n  content: \"\\e3b1\"; }\r\n\r\n.fa-house-fire::before {\r\n  content: \"\\e50c\"; }\r\n\r\n.fa-house-flag::before {\r\n  content: \"\\e50d\"; }\r\n\r\n.fa-house-flood-water::before {\r\n  content: \"\\e50e\"; }\r\n\r\n.fa-house-flood-water-circle-arrow-right::before {\r\n  content: \"\\e50f\"; }\r\n\r\n.fa-house-laptop::before {\r\n  content: \"\\e066\"; }\r\n\r\n.fa-laptop-house::before {\r\n  content: \"\\e066\"; }\r\n\r\n.fa-house-lock::before {\r\n  content: \"\\e510\"; }\r\n\r\n.fa-house-medical::before {\r\n  content: \"\\e3b2\"; }\r\n\r\n.fa-house-medical-circle-check::before {\r\n  content: \"\\e511\"; }\r\n\r\n.fa-house-medical-circle-exclamation::before {\r\n  content: \"\\e512\"; }\r\n\r\n.fa-house-medical-circle-xmark::before {\r\n  content: \"\\e513\"; }\r\n\r\n.fa-house-medical-flag::before {\r\n  content: \"\\e514\"; }\r\n\r\n.fa-house-signal::before {\r\n  content: \"\\e012\"; }\r\n\r\n.fa-house-tsunami::before {\r\n  content: \"\\e515\"; }\r\n\r\n.fa-house-user::before {\r\n  content: \"\\e1b0\"; }\r\n\r\n.fa-home-user::before {\r\n  content: \"\\e1b0\"; }\r\n\r\n.fa-hryvnia-sign::before {\r\n  content: \"\\f6f2\"; }\r\n\r\n.fa-hryvnia::before {\r\n  content: \"\\f6f2\"; }\r\n\r\n.fa-hurricane::before {\r\n  content: \"\\f751\"; }\r\n\r\n.fa-i::before {\r\n  content: \"\\49\"; }\r\n\r\n.fa-i-cursor::before {\r\n  content: \"\\f246\"; }\r\n\r\n.fa-ice-cream::before {\r\n  content: \"\\f810\"; }\r\n\r\n.fa-icicles::before {\r\n  content: \"\\f7ad\"; }\r\n\r\n.fa-icons::before {\r\n  content: \"\\f86d\"; }\r\n\r\n.fa-heart-music-camera-bolt::before {\r\n  content: \"\\f86d\"; }\r\n\r\n.fa-id-badge::before {\r\n  content: \"\\f2c1\"; }\r\n\r\n.fa-id-card::before {\r\n  content: \"\\f2c2\"; }\r\n\r\n.fa-drivers-license::before {\r\n  content: \"\\f2c2\"; }\r\n\r\n.fa-id-card-clip::before {\r\n  content: \"\\f47f\"; }\r\n\r\n.fa-id-card-alt::before {\r\n  content: \"\\f47f\"; }\r\n\r\n.fa-igloo::before {\r\n  content: \"\\f7ae\"; }\r\n\r\n.fa-image::before {\r\n  content: \"\\f03e\"; }\r\n\r\n.fa-image-portrait::before {\r\n  content: \"\\f3e0\"; }\r\n\r\n.fa-portrait::before {\r\n  content: \"\\f3e0\"; }\r\n\r\n.fa-images::before {\r\n  content: \"\\f302\"; }\r\n\r\n.fa-inbox::before {\r\n  content: \"\\f01c\"; }\r\n\r\n.fa-indent::before {\r\n  content: \"\\f03c\"; }\r\n\r\n.fa-indian-rupee-sign::before {\r\n  content: \"\\e1bc\"; }\r\n\r\n.fa-indian-rupee::before {\r\n  content: \"\\e1bc\"; }\r\n\r\n.fa-inr::before {\r\n  content: \"\\e1bc\"; }\r\n\r\n.fa-industry::before {\r\n  content: \"\\f275\"; }\r\n\r\n.fa-infinity::before {\r\n  content: \"\\f534\"; }\r\n\r\n.fa-info::before {\r\n  content: \"\\f129\"; }\r\n\r\n.fa-italic::before {\r\n  content: \"\\f033\"; }\r\n\r\n.fa-j::before {\r\n  content: \"\\4a\"; }\r\n\r\n.fa-jar::before {\r\n  content: \"\\e516\"; }\r\n\r\n.fa-jar-wheat::before {\r\n  content: \"\\e517\"; }\r\n\r\n.fa-jedi::before {\r\n  content: \"\\f669\"; }\r\n\r\n.fa-jet-fighter::before {\r\n  content: \"\\f0fb\"; }\r\n\r\n.fa-fighter-jet::before {\r\n  content: \"\\f0fb\"; }\r\n\r\n.fa-jet-fighter-up::before {\r\n  content: \"\\e518\"; }\r\n\r\n.fa-joint::before {\r\n  content: \"\\f595\"; }\r\n\r\n.fa-jug-detergent::before {\r\n  content: \"\\e519\"; }\r\n\r\n.fa-k::before {\r\n  content: \"\\4b\"; }\r\n\r\n.fa-kaaba::before {\r\n  content: \"\\f66b\"; }\r\n\r\n.fa-key::before {\r\n  content: \"\\f084\"; }\r\n\r\n.fa-keyboard::before {\r\n  content: \"\\f11c\"; }\r\n\r\n.fa-khanda::before {\r\n  content: \"\\f66d\"; }\r\n\r\n.fa-kip-sign::before {\r\n  content: \"\\e1c4\"; }\r\n\r\n.fa-kit-medical::before {\r\n  content: \"\\f479\"; }\r\n\r\n.fa-first-aid::before {\r\n  content: \"\\f479\"; }\r\n\r\n.fa-kitchen-set::before {\r\n  content: \"\\e51a\"; }\r\n\r\n.fa-kiwi-bird::before {\r\n  content: \"\\f535\"; }\r\n\r\n.fa-l::before {\r\n  content: \"\\4c\"; }\r\n\r\n.fa-land-mine-on::before {\r\n  content: \"\\e51b\"; }\r\n\r\n.fa-landmark::before {\r\n  content: \"\\f66f\"; }\r\n\r\n.fa-landmark-dome::before {\r\n  content: \"\\f752\"; }\r\n\r\n.fa-landmark-alt::before {\r\n  content: \"\\f752\"; }\r\n\r\n.fa-landmark-flag::before {\r\n  content: \"\\e51c\"; }\r\n\r\n.fa-language::before {\r\n  content: \"\\f1ab\"; }\r\n\r\n.fa-laptop::before {\r\n  content: \"\\f109\"; }\r\n\r\n.fa-laptop-code::before {\r\n  content: \"\\f5fc\"; }\r\n\r\n.fa-laptop-file::before {\r\n  content: \"\\e51d\"; }\r\n\r\n.fa-laptop-medical::before {\r\n  content: \"\\f812\"; }\r\n\r\n.fa-lari-sign::before {\r\n  content: \"\\e1c8\"; }\r\n\r\n.fa-layer-group::before {\r\n  content: \"\\f5fd\"; }\r\n\r\n.fa-leaf::before {\r\n  content: \"\\f06c\"; }\r\n\r\n.fa-left-long::before {\r\n  content: \"\\f30a\"; }\r\n\r\n.fa-long-arrow-alt-left::before {\r\n  content: \"\\f30a\"; }\r\n\r\n.fa-left-right::before {\r\n  content: \"\\f337\"; }\r\n\r\n.fa-arrows-alt-h::before {\r\n  content: \"\\f337\"; }\r\n\r\n.fa-lemon::before {\r\n  content: \"\\f094\"; }\r\n\r\n.fa-less-than::before {\r\n  content: \"\\3c\"; }\r\n\r\n.fa-less-than-equal::before {\r\n  content: \"\\f537\"; }\r\n\r\n.fa-life-ring::before {\r\n  content: \"\\f1cd\"; }\r\n\r\n.fa-lightbulb::before {\r\n  content: \"\\f0eb\"; }\r\n\r\n.fa-lines-leaning::before {\r\n  content: \"\\e51e\"; }\r\n\r\n.fa-link::before {\r\n  content: \"\\f0c1\"; }\r\n\r\n.fa-chain::before {\r\n  content: \"\\f0c1\"; }\r\n\r\n.fa-link-slash::before {\r\n  content: \"\\f127\"; }\r\n\r\n.fa-chain-broken::before {\r\n  content: \"\\f127\"; }\r\n\r\n.fa-chain-slash::before {\r\n  content: \"\\f127\"; }\r\n\r\n.fa-unlink::before {\r\n  content: \"\\f127\"; }\r\n\r\n.fa-lira-sign::before {\r\n  content: \"\\f195\"; }\r\n\r\n.fa-list::before {\r\n  content: \"\\f03a\"; }\r\n\r\n.fa-list-squares::before {\r\n  content: \"\\f03a\"; }\r\n\r\n.fa-list-check::before {\r\n  content: \"\\f0ae\"; }\r\n\r\n.fa-tasks::before {\r\n  content: \"\\f0ae\"; }\r\n\r\n.fa-list-ol::before {\r\n  content: \"\\f0cb\"; }\r\n\r\n.fa-list-1-2::before {\r\n  content: \"\\f0cb\"; }\r\n\r\n.fa-list-numeric::before {\r\n  content: \"\\f0cb\"; }\r\n\r\n.fa-list-ul::before {\r\n  content: \"\\f0ca\"; }\r\n\r\n.fa-list-dots::before {\r\n  content: \"\\f0ca\"; }\r\n\r\n.fa-litecoin-sign::before {\r\n  content: \"\\e1d3\"; }\r\n\r\n.fa-location-arrow::before {\r\n  content: \"\\f124\"; }\r\n\r\n.fa-location-crosshairs::before {\r\n  content: \"\\f601\"; }\r\n\r\n.fa-location::before {\r\n  content: \"\\f601\"; }\r\n\r\n.fa-location-dot::before {\r\n  content: \"\\f3c5\"; }\r\n\r\n.fa-map-marker-alt::before {\r\n  content: \"\\f3c5\"; }\r\n\r\n.fa-location-pin::before {\r\n  content: \"\\f041\"; }\r\n\r\n.fa-map-marker::before {\r\n  content: \"\\f041\"; }\r\n\r\n.fa-location-pin-lock::before {\r\n  content: \"\\e51f\"; }\r\n\r\n.fa-lock::before {\r\n  content: \"\\f023\"; }\r\n\r\n.fa-lock-open::before {\r\n  content: \"\\f3c1\"; }\r\n\r\n.fa-locust::before {\r\n  content: \"\\e520\"; }\r\n\r\n.fa-lungs::before {\r\n  content: \"\\f604\"; }\r\n\r\n.fa-lungs-virus::before {\r\n  content: \"\\e067\"; }\r\n\r\n.fa-m::before {\r\n  content: \"\\4d\"; }\r\n\r\n.fa-magnet::before {\r\n  content: \"\\f076\"; }\r\n\r\n.fa-magnifying-glass::before {\r\n  content: \"\\f002\"; }\r\n\r\n.fa-search::before {\r\n  content: \"\\f002\"; }\r\n\r\n.fa-magnifying-glass-arrow-right::before {\r\n  content: \"\\e521\"; }\r\n\r\n.fa-magnifying-glass-chart::before {\r\n  content: \"\\e522\"; }\r\n\r\n.fa-magnifying-glass-dollar::before {\r\n  content: \"\\f688\"; }\r\n\r\n.fa-search-dollar::before {\r\n  content: \"\\f688\"; }\r\n\r\n.fa-magnifying-glass-location::before {\r\n  content: \"\\f689\"; }\r\n\r\n.fa-search-location::before {\r\n  content: \"\\f689\"; }\r\n\r\n.fa-magnifying-glass-minus::before {\r\n  content: \"\\f010\"; }\r\n\r\n.fa-search-minus::before {\r\n  content: \"\\f010\"; }\r\n\r\n.fa-magnifying-glass-plus::before {\r\n  content: \"\\f00e\"; }\r\n\r\n.fa-search-plus::before {\r\n  content: \"\\f00e\"; }\r\n\r\n.fa-manat-sign::before {\r\n  content: \"\\e1d5\"; }\r\n\r\n.fa-map::before {\r\n  content: \"\\f279\"; }\r\n\r\n.fa-map-location::before {\r\n  content: \"\\f59f\"; }\r\n\r\n.fa-map-marked::before {\r\n  content: \"\\f59f\"; }\r\n\r\n.fa-map-location-dot::before {\r\n  content: \"\\f5a0\"; }\r\n\r\n.fa-map-marked-alt::before {\r\n  content: \"\\f5a0\"; }\r\n\r\n.fa-map-pin::before {\r\n  content: \"\\f276\"; }\r\n\r\n.fa-marker::before {\r\n  content: \"\\f5a1\"; }\r\n\r\n.fa-mars::before {\r\n  content: \"\\f222\"; }\r\n\r\n.fa-mars-and-venus::before {\r\n  content: \"\\f224\"; }\r\n\r\n.fa-mars-and-venus-burst::before {\r\n  content: \"\\e523\"; }\r\n\r\n.fa-mars-double::before {\r\n  content: \"\\f227\"; }\r\n\r\n.fa-mars-stroke::before {\r\n  content: \"\\f229\"; }\r\n\r\n.fa-mars-stroke-right::before {\r\n  content: \"\\f22b\"; }\r\n\r\n.fa-mars-stroke-h::before {\r\n  content: \"\\f22b\"; }\r\n\r\n.fa-mars-stroke-up::before {\r\n  content: \"\\f22a\"; }\r\n\r\n.fa-mars-stroke-v::before {\r\n  content: \"\\f22a\"; }\r\n\r\n.fa-martini-glass::before {\r\n  content: \"\\f57b\"; }\r\n\r\n.fa-glass-martini-alt::before {\r\n  content: \"\\f57b\"; }\r\n\r\n.fa-martini-glass-citrus::before {\r\n  content: \"\\f561\"; }\r\n\r\n.fa-cocktail::before {\r\n  content: \"\\f561\"; }\r\n\r\n.fa-martini-glass-empty::before {\r\n  content: \"\\f000\"; }\r\n\r\n.fa-glass-martini::before {\r\n  content: \"\\f000\"; }\r\n\r\n.fa-mask::before {\r\n  content: \"\\f6fa\"; }\r\n\r\n.fa-mask-face::before {\r\n  content: \"\\e1d7\"; }\r\n\r\n.fa-mask-ventilator::before {\r\n  content: \"\\e524\"; }\r\n\r\n.fa-masks-theater::before {\r\n  content: \"\\f630\"; }\r\n\r\n.fa-theater-masks::before {\r\n  content: \"\\f630\"; }\r\n\r\n.fa-mattress-pillow::before {\r\n  content: \"\\e525\"; }\r\n\r\n.fa-maximize::before {\r\n  content: \"\\f31e\"; }\r\n\r\n.fa-expand-arrows-alt::before {\r\n  content: \"\\f31e\"; }\r\n\r\n.fa-medal::before {\r\n  content: \"\\f5a2\"; }\r\n\r\n.fa-memory::before {\r\n  content: \"\\f538\"; }\r\n\r\n.fa-menorah::before {\r\n  content: \"\\f676\"; }\r\n\r\n.fa-mercury::before {\r\n  content: \"\\f223\"; }\r\n\r\n.fa-message::before {\r\n  content: \"\\f27a\"; }\r\n\r\n.fa-comment-alt::before {\r\n  content: \"\\f27a\"; }\r\n\r\n.fa-meteor::before {\r\n  content: \"\\f753\"; }\r\n\r\n.fa-microchip::before {\r\n  content: \"\\f2db\"; }\r\n\r\n.fa-microphone::before {\r\n  content: \"\\f130\"; }\r\n\r\n.fa-microphone-lines::before {\r\n  content: \"\\f3c9\"; }\r\n\r\n.fa-microphone-alt::before {\r\n  content: \"\\f3c9\"; }\r\n\r\n.fa-microphone-lines-slash::before {\r\n  content: \"\\f539\"; }\r\n\r\n.fa-microphone-alt-slash::before {\r\n  content: \"\\f539\"; }\r\n\r\n.fa-microphone-slash::before {\r\n  content: \"\\f131\"; }\r\n\r\n.fa-microscope::before {\r\n  content: \"\\f610\"; }\r\n\r\n.fa-mill-sign::before {\r\n  content: \"\\e1ed\"; }\r\n\r\n.fa-minimize::before {\r\n  content: \"\\f78c\"; }\r\n\r\n.fa-compress-arrows-alt::before {\r\n  content: \"\\f78c\"; }\r\n\r\n.fa-minus::before {\r\n  content: \"\\f068\"; }\r\n\r\n.fa-subtract::before {\r\n  content: \"\\f068\"; }\r\n\r\n.fa-mitten::before {\r\n  content: \"\\f7b5\"; }\r\n\r\n.fa-mobile::before {\r\n  content: \"\\f3ce\"; }\r\n\r\n.fa-mobile-android::before {\r\n  content: \"\\f3ce\"; }\r\n\r\n.fa-mobile-phone::before {\r\n  content: \"\\f3ce\"; }\r\n\r\n.fa-mobile-button::before {\r\n  content: \"\\f10b\"; }\r\n\r\n.fa-mobile-retro::before {\r\n  content: \"\\e527\"; }\r\n\r\n.fa-mobile-screen::before {\r\n  content: \"\\f3cf\"; }\r\n\r\n.fa-mobile-android-alt::before {\r\n  content: \"\\f3cf\"; }\r\n\r\n.fa-mobile-screen-button::before {\r\n  content: \"\\f3cd\"; }\r\n\r\n.fa-mobile-alt::before {\r\n  content: \"\\f3cd\"; }\r\n\r\n.fa-money-bill::before {\r\n  content: \"\\f0d6\"; }\r\n\r\n.fa-money-bill-1::before {\r\n  content: \"\\f3d1\"; }\r\n\r\n.fa-money-bill-alt::before {\r\n  content: \"\\f3d1\"; }\r\n\r\n.fa-money-bill-1-wave::before {\r\n  content: \"\\f53b\"; }\r\n\r\n.fa-money-bill-wave-alt::before {\r\n  content: \"\\f53b\"; }\r\n\r\n.fa-money-bill-transfer::before {\r\n  content: \"\\e528\"; }\r\n\r\n.fa-money-bill-trend-up::before {\r\n  content: \"\\e529\"; }\r\n\r\n.fa-money-bill-wave::before {\r\n  content: \"\\f53a\"; }\r\n\r\n.fa-money-bill-wheat::before {\r\n  content: \"\\e52a\"; }\r\n\r\n.fa-money-bills::before {\r\n  content: \"\\e1f3\"; }\r\n\r\n.fa-money-check::before {\r\n  content: \"\\f53c\"; }\r\n\r\n.fa-money-check-dollar::before {\r\n  content: \"\\f53d\"; }\r\n\r\n.fa-money-check-alt::before {\r\n  content: \"\\f53d\"; }\r\n\r\n.fa-monument::before {\r\n  content: \"\\f5a6\"; }\r\n\r\n.fa-moon::before {\r\n  content: \"\\f186\"; }\r\n\r\n.fa-mortar-pestle::before {\r\n  content: \"\\f5a7\"; }\r\n\r\n.fa-mosque::before {\r\n  content: \"\\f678\"; }\r\n\r\n.fa-mosquito::before {\r\n  content: \"\\e52b\"; }\r\n\r\n.fa-mosquito-net::before {\r\n  content: \"\\e52c\"; }\r\n\r\n.fa-motorcycle::before {\r\n  content: \"\\f21c\"; }\r\n\r\n.fa-mound::before {\r\n  content: \"\\e52d\"; }\r\n\r\n.fa-mountain::before {\r\n  content: \"\\f6fc\"; }\r\n\r\n.fa-mountain-city::before {\r\n  content: \"\\e52e\"; }\r\n\r\n.fa-mountain-sun::before {\r\n  content: \"\\e52f\"; }\r\n\r\n.fa-mug-hot::before {\r\n  content: \"\\f7b6\"; }\r\n\r\n.fa-mug-saucer::before {\r\n  content: \"\\f0f4\"; }\r\n\r\n.fa-coffee::before {\r\n  content: \"\\f0f4\"; }\r\n\r\n.fa-music::before {\r\n  content: \"\\f001\"; }\r\n\r\n.fa-n::before {\r\n  content: \"\\4e\"; }\r\n\r\n.fa-naira-sign::before {\r\n  content: \"\\e1f6\"; }\r\n\r\n.fa-network-wired::before {\r\n  content: \"\\f6ff\"; }\r\n\r\n.fa-neuter::before {\r\n  content: \"\\f22c\"; }\r\n\r\n.fa-newspaper::before {\r\n  content: \"\\f1ea\"; }\r\n\r\n.fa-not-equal::before {\r\n  content: \"\\f53e\"; }\r\n\r\n.fa-note-sticky::before {\r\n  content: \"\\f249\"; }\r\n\r\n.fa-sticky-note::before {\r\n  content: \"\\f249\"; }\r\n\r\n.fa-notes-medical::before {\r\n  content: \"\\f481\"; }\r\n\r\n.fa-o::before {\r\n  content: \"\\4f\"; }\r\n\r\n.fa-object-group::before {\r\n  content: \"\\f247\"; }\r\n\r\n.fa-object-ungroup::before {\r\n  content: \"\\f248\"; }\r\n\r\n.fa-oil-can::before {\r\n  content: \"\\f613\"; }\r\n\r\n.fa-oil-well::before {\r\n  content: \"\\e532\"; }\r\n\r\n.fa-om::before {\r\n  content: \"\\f679\"; }\r\n\r\n.fa-otter::before {\r\n  content: \"\\f700\"; }\r\n\r\n.fa-outdent::before {\r\n  content: \"\\f03b\"; }\r\n\r\n.fa-dedent::before {\r\n  content: \"\\f03b\"; }\r\n\r\n.fa-p::before {\r\n  content: \"\\50\"; }\r\n\r\n.fa-pager::before {\r\n  content: \"\\f815\"; }\r\n\r\n.fa-paint-roller::before {\r\n  content: \"\\f5aa\"; }\r\n\r\n.fa-paintbrush::before {\r\n  content: \"\\f1fc\"; }\r\n\r\n.fa-paint-brush::before {\r\n  content: \"\\f1fc\"; }\r\n\r\n.fa-palette::before {\r\n  content: \"\\f53f\"; }\r\n\r\n.fa-pallet::before {\r\n  content: \"\\f482\"; }\r\n\r\n.fa-panorama::before {\r\n  content: \"\\e209\"; }\r\n\r\n.fa-paper-plane::before {\r\n  content: \"\\f1d8\"; }\r\n\r\n.fa-paperclip::before {\r\n  content: \"\\f0c6\"; }\r\n\r\n.fa-parachute-box::before {\r\n  content: \"\\f4cd\"; }\r\n\r\n.fa-paragraph::before {\r\n  content: \"\\f1dd\"; }\r\n\r\n.fa-passport::before {\r\n  content: \"\\f5ab\"; }\r\n\r\n.fa-paste::before {\r\n  content: \"\\f0ea\"; }\r\n\r\n.fa-file-clipboard::before {\r\n  content: \"\\f0ea\"; }\r\n\r\n.fa-pause::before {\r\n  content: \"\\f04c\"; }\r\n\r\n.fa-paw::before {\r\n  content: \"\\f1b0\"; }\r\n\r\n.fa-peace::before {\r\n  content: \"\\f67c\"; }\r\n\r\n.fa-pen::before {\r\n  content: \"\\f304\"; }\r\n\r\n.fa-pen-clip::before {\r\n  content: \"\\f305\"; }\r\n\r\n.fa-pen-alt::before {\r\n  content: \"\\f305\"; }\r\n\r\n.fa-pen-fancy::before {\r\n  content: \"\\f5ac\"; }\r\n\r\n.fa-pen-nib::before {\r\n  content: \"\\f5ad\"; }\r\n\r\n.fa-pen-ruler::before {\r\n  content: \"\\f5ae\"; }\r\n\r\n.fa-pencil-ruler::before {\r\n  content: \"\\f5ae\"; }\r\n\r\n.fa-pen-to-square::before {\r\n  content: \"\\f044\"; }\r\n\r\n.fa-edit::before {\r\n  content: \"\\f044\"; }\r\n\r\n.fa-pencil::before {\r\n  content: \"\\f303\"; }\r\n\r\n.fa-pencil-alt::before {\r\n  content: \"\\f303\"; }\r\n\r\n.fa-people-arrows-left-right::before {\r\n  content: \"\\e068\"; }\r\n\r\n.fa-people-arrows::before {\r\n  content: \"\\e068\"; }\r\n\r\n.fa-people-carry-box::before {\r\n  content: \"\\f4ce\"; }\r\n\r\n.fa-people-carry::before {\r\n  content: \"\\f4ce\"; }\r\n\r\n.fa-people-group::before {\r\n  content: \"\\e533\"; }\r\n\r\n.fa-people-line::before {\r\n  content: \"\\e534\"; }\r\n\r\n.fa-people-pulling::before {\r\n  content: \"\\e535\"; }\r\n\r\n.fa-people-robbery::before {\r\n  content: \"\\e536\"; }\r\n\r\n.fa-people-roof::before {\r\n  content: \"\\e537\"; }\r\n\r\n.fa-pepper-hot::before {\r\n  content: \"\\f816\"; }\r\n\r\n.fa-percent::before {\r\n  content: \"\\25\"; }\r\n\r\n.fa-percentage::before {\r\n  content: \"\\25\"; }\r\n\r\n.fa-person::before {\r\n  content: \"\\f183\"; }\r\n\r\n.fa-male::before {\r\n  content: \"\\f183\"; }\r\n\r\n.fa-person-arrow-down-to-line::before {\r\n  content: \"\\e538\"; }\r\n\r\n.fa-person-arrow-up-from-line::before {\r\n  content: \"\\e539\"; }\r\n\r\n.fa-person-biking::before {\r\n  content: \"\\f84a\"; }\r\n\r\n.fa-biking::before {\r\n  content: \"\\f84a\"; }\r\n\r\n.fa-person-booth::before {\r\n  content: \"\\f756\"; }\r\n\r\n.fa-person-breastfeeding::before {\r\n  content: \"\\e53a\"; }\r\n\r\n.fa-person-burst::before {\r\n  content: \"\\e53b\"; }\r\n\r\n.fa-person-cane::before {\r\n  content: \"\\e53c\"; }\r\n\r\n.fa-person-chalkboard::before {\r\n  content: \"\\e53d\"; }\r\n\r\n.fa-person-circle-check::before {\r\n  content: \"\\e53e\"; }\r\n\r\n.fa-person-circle-exclamation::before {\r\n  content: \"\\e53f\"; }\r\n\r\n.fa-person-circle-minus::before {\r\n  content: \"\\e540\"; }\r\n\r\n.fa-person-circle-plus::before {\r\n  content: \"\\e541\"; }\r\n\r\n.fa-person-circle-question::before {\r\n  content: \"\\e542\"; }\r\n\r\n.fa-person-circle-xmark::before {\r\n  content: \"\\e543\"; }\r\n\r\n.fa-person-digging::before {\r\n  content: \"\\f85e\"; }\r\n\r\n.fa-digging::before {\r\n  content: \"\\f85e\"; }\r\n\r\n.fa-person-dots-from-line::before {\r\n  content: \"\\f470\"; }\r\n\r\n.fa-diagnoses::before {\r\n  content: \"\\f470\"; }\r\n\r\n.fa-person-dress::before {\r\n  content: \"\\f182\"; }\r\n\r\n.fa-female::before {\r\n  content: \"\\f182\"; }\r\n\r\n.fa-person-dress-burst::before {\r\n  content: \"\\e544\"; }\r\n\r\n.fa-person-drowning::before {\r\n  content: \"\\e545\"; }\r\n\r\n.fa-person-falling::before {\r\n  content: \"\\e546\"; }\r\n\r\n.fa-person-falling-burst::before {\r\n  content: \"\\e547\"; }\r\n\r\n.fa-person-half-dress::before {\r\n  content: \"\\e548\"; }\r\n\r\n.fa-person-harassing::before {\r\n  content: \"\\e549\"; }\r\n\r\n.fa-person-hiking::before {\r\n  content: \"\\f6ec\"; }\r\n\r\n.fa-hiking::before {\r\n  content: \"\\f6ec\"; }\r\n\r\n.fa-person-military-pointing::before {\r\n  content: \"\\e54a\"; }\r\n\r\n.fa-person-military-rifle::before {\r\n  content: \"\\e54b\"; }\r\n\r\n.fa-person-military-to-person::before {\r\n  content: \"\\e54c\"; }\r\n\r\n.fa-person-praying::before {\r\n  content: \"\\f683\"; }\r\n\r\n.fa-pray::before {\r\n  content: \"\\f683\"; }\r\n\r\n.fa-person-pregnant::before {\r\n  content: \"\\e31e\"; }\r\n\r\n.fa-person-rays::before {\r\n  content: \"\\e54d\"; }\r\n\r\n.fa-person-rifle::before {\r\n  content: \"\\e54e\"; }\r\n\r\n.fa-person-running::before {\r\n  content: \"\\f70c\"; }\r\n\r\n.fa-running::before {\r\n  content: \"\\f70c\"; }\r\n\r\n.fa-person-shelter::before {\r\n  content: \"\\e54f\"; }\r\n\r\n.fa-person-skating::before {\r\n  content: \"\\f7c5\"; }\r\n\r\n.fa-skating::before {\r\n  content: \"\\f7c5\"; }\r\n\r\n.fa-person-skiing::before {\r\n  content: \"\\f7c9\"; }\r\n\r\n.fa-skiing::before {\r\n  content: \"\\f7c9\"; }\r\n\r\n.fa-person-skiing-nordic::before {\r\n  content: \"\\f7ca\"; }\r\n\r\n.fa-skiing-nordic::before {\r\n  content: \"\\f7ca\"; }\r\n\r\n.fa-person-snowboarding::before {\r\n  content: \"\\f7ce\"; }\r\n\r\n.fa-snowboarding::before {\r\n  content: \"\\f7ce\"; }\r\n\r\n.fa-person-swimming::before {\r\n  content: \"\\f5c4\"; }\r\n\r\n.fa-swimmer::before {\r\n  content: \"\\f5c4\"; }\r\n\r\n.fa-person-through-window::before {\r\n  content: \"\\e433\"; }\r\n\r\n.fa-person-walking::before {\r\n  content: \"\\f554\"; }\r\n\r\n.fa-walking::before {\r\n  content: \"\\f554\"; }\r\n\r\n.fa-person-walking-arrow-loop-left::before {\r\n  content: \"\\e551\"; }\r\n\r\n.fa-person-walking-arrow-right::before {\r\n  content: \"\\e552\"; }\r\n\r\n.fa-person-walking-dashed-line-arrow-right::before {\r\n  content: \"\\e553\"; }\r\n\r\n.fa-person-walking-luggage::before {\r\n  content: \"\\e554\"; }\r\n\r\n.fa-person-walking-with-cane::before {\r\n  content: \"\\f29d\"; }\r\n\r\n.fa-blind::before {\r\n  content: \"\\f29d\"; }\r\n\r\n.fa-peseta-sign::before {\r\n  content: \"\\e221\"; }\r\n\r\n.fa-peso-sign::before {\r\n  content: \"\\e222\"; }\r\n\r\n.fa-phone::before {\r\n  content: \"\\f095\"; }\r\n\r\n.fa-phone-flip::before {\r\n  content: \"\\f879\"; }\r\n\r\n.fa-phone-alt::before {\r\n  content: \"\\f879\"; }\r\n\r\n.fa-phone-slash::before {\r\n  content: \"\\f3dd\"; }\r\n\r\n.fa-phone-volume::before {\r\n  content: \"\\f2a0\"; }\r\n\r\n.fa-volume-control-phone::before {\r\n  content: \"\\f2a0\"; }\r\n\r\n.fa-photo-film::before {\r\n  content: \"\\f87c\"; }\r\n\r\n.fa-photo-video::before {\r\n  content: \"\\f87c\"; }\r\n\r\n.fa-piggy-bank::before {\r\n  content: \"\\f4d3\"; }\r\n\r\n.fa-pills::before {\r\n  content: \"\\f484\"; }\r\n\r\n.fa-pizza-slice::before {\r\n  content: \"\\f818\"; }\r\n\r\n.fa-place-of-worship::before {\r\n  content: \"\\f67f\"; }\r\n\r\n.fa-plane::before {\r\n  content: \"\\f072\"; }\r\n\r\n.fa-plane-arrival::before {\r\n  content: \"\\f5af\"; }\r\n\r\n.fa-plane-circle-check::before {\r\n  content: \"\\e555\"; }\r\n\r\n.fa-plane-circle-exclamation::before {\r\n  content: \"\\e556\"; }\r\n\r\n.fa-plane-circle-xmark::before {\r\n  content: \"\\e557\"; }\r\n\r\n.fa-plane-departure::before {\r\n  content: \"\\f5b0\"; }\r\n\r\n.fa-plane-lock::before {\r\n  content: \"\\e558\"; }\r\n\r\n.fa-plane-slash::before {\r\n  content: \"\\e069\"; }\r\n\r\n.fa-plane-up::before {\r\n  content: \"\\e22d\"; }\r\n\r\n.fa-plant-wilt::before {\r\n  content: \"\\e43b\"; }\r\n\r\n.fa-plate-wheat::before {\r\n  content: \"\\e55a\"; }\r\n\r\n.fa-play::before {\r\n  content: \"\\f04b\"; }\r\n\r\n.fa-plug::before {\r\n  content: \"\\f1e6\"; }\r\n\r\n.fa-plug-circle-bolt::before {\r\n  content: \"\\e55b\"; }\r\n\r\n.fa-plug-circle-check::before {\r\n  content: \"\\e55c\"; }\r\n\r\n.fa-plug-circle-exclamation::before {\r\n  content: \"\\e55d\"; }\r\n\r\n.fa-plug-circle-minus::before {\r\n  content: \"\\e55e\"; }\r\n\r\n.fa-plug-circle-plus::before {\r\n  content: \"\\e55f\"; }\r\n\r\n.fa-plug-circle-xmark::before {\r\n  content: \"\\e560\"; }\r\n\r\n.fa-plus::before {\r\n  content: \"\\2b\"; }\r\n\r\n.fa-add::before {\r\n  content: \"\\2b\"; }\r\n\r\n.fa-plus-minus::before {\r\n  content: \"\\e43c\"; }\r\n\r\n.fa-podcast::before {\r\n  content: \"\\f2ce\"; }\r\n\r\n.fa-poo::before {\r\n  content: \"\\f2fe\"; }\r\n\r\n.fa-poo-storm::before {\r\n  content: \"\\f75a\"; }\r\n\r\n.fa-poo-bolt::before {\r\n  content: \"\\f75a\"; }\r\n\r\n.fa-poop::before {\r\n  content: \"\\f619\"; }\r\n\r\n.fa-power-off::before {\r\n  content: \"\\f011\"; }\r\n\r\n.fa-prescription::before {\r\n  content: \"\\f5b1\"; }\r\n\r\n.fa-prescription-bottle::before {\r\n  content: \"\\f485\"; }\r\n\r\n.fa-prescription-bottle-medical::before {\r\n  content: \"\\f486\"; }\r\n\r\n.fa-prescription-bottle-alt::before {\r\n  content: \"\\f486\"; }\r\n\r\n.fa-print::before {\r\n  content: \"\\f02f\"; }\r\n\r\n.fa-pump-medical::before {\r\n  content: \"\\e06a\"; }\r\n\r\n.fa-pump-soap::before {\r\n  content: \"\\e06b\"; }\r\n\r\n.fa-puzzle-piece::before {\r\n  content: \"\\f12e\"; }\r\n\r\n.fa-q::before {\r\n  content: \"\\51\"; }\r\n\r\n.fa-qrcode::before {\r\n  content: \"\\f029\"; }\r\n\r\n.fa-question::before {\r\n  content: \"\\3f\"; }\r\n\r\n.fa-quote-left::before {\r\n  content: \"\\f10d\"; }\r\n\r\n.fa-quote-left-alt::before {\r\n  content: \"\\f10d\"; }\r\n\r\n.fa-quote-right::before {\r\n  content: \"\\f10e\"; }\r\n\r\n.fa-quote-right-alt::before {\r\n  content: \"\\f10e\"; }\r\n\r\n.fa-r::before {\r\n  content: \"\\52\"; }\r\n\r\n.fa-radiation::before {\r\n  content: \"\\f7b9\"; }\r\n\r\n.fa-radio::before {\r\n  content: \"\\f8d7\"; }\r\n\r\n.fa-rainbow::before {\r\n  content: \"\\f75b\"; }\r\n\r\n.fa-ranking-star::before {\r\n  content: \"\\e561\"; }\r\n\r\n.fa-receipt::before {\r\n  content: \"\\f543\"; }\r\n\r\n.fa-record-vinyl::before {\r\n  content: \"\\f8d9\"; }\r\n\r\n.fa-rectangle-ad::before {\r\n  content: \"\\f641\"; }\r\n\r\n.fa-ad::before {\r\n  content: \"\\f641\"; }\r\n\r\n.fa-rectangle-list::before {\r\n  content: \"\\f022\"; }\r\n\r\n.fa-list-alt::before {\r\n  content: \"\\f022\"; }\r\n\r\n.fa-rectangle-xmark::before {\r\n  content: \"\\f410\"; }\r\n\r\n.fa-rectangle-times::before {\r\n  content: \"\\f410\"; }\r\n\r\n.fa-times-rectangle::before {\r\n  content: \"\\f410\"; }\r\n\r\n.fa-window-close::before {\r\n  content: \"\\f410\"; }\r\n\r\n.fa-recycle::before {\r\n  content: \"\\f1b8\"; }\r\n\r\n.fa-registered::before {\r\n  content: \"\\f25d\"; }\r\n\r\n.fa-repeat::before {\r\n  content: \"\\f363\"; }\r\n\r\n.fa-reply::before {\r\n  content: \"\\f3e5\"; }\r\n\r\n.fa-mail-reply::before {\r\n  content: \"\\f3e5\"; }\r\n\r\n.fa-reply-all::before {\r\n  content: \"\\f122\"; }\r\n\r\n.fa-mail-reply-all::before {\r\n  content: \"\\f122\"; }\r\n\r\n.fa-republican::before {\r\n  content: \"\\f75e\"; }\r\n\r\n.fa-restroom::before {\r\n  content: \"\\f7bd\"; }\r\n\r\n.fa-retweet::before {\r\n  content: \"\\f079\"; }\r\n\r\n.fa-ribbon::before {\r\n  content: \"\\f4d6\"; }\r\n\r\n.fa-right-from-bracket::before {\r\n  content: \"\\f2f5\"; }\r\n\r\n.fa-sign-out-alt::before {\r\n  content: \"\\f2f5\"; }\r\n\r\n.fa-right-left::before {\r\n  content: \"\\f362\"; }\r\n\r\n.fa-exchange-alt::before {\r\n  content: \"\\f362\"; }\r\n\r\n.fa-right-long::before {\r\n  content: \"\\f30b\"; }\r\n\r\n.fa-long-arrow-alt-right::before {\r\n  content: \"\\f30b\"; }\r\n\r\n.fa-right-to-bracket::before {\r\n  content: \"\\f2f6\"; }\r\n\r\n.fa-sign-in-alt::before {\r\n  content: \"\\f2f6\"; }\r\n\r\n.fa-ring::before {\r\n  content: \"\\f70b\"; }\r\n\r\n.fa-road::before {\r\n  content: \"\\f018\"; }\r\n\r\n.fa-road-barrier::before {\r\n  content: \"\\e562\"; }\r\n\r\n.fa-road-bridge::before {\r\n  content: \"\\e563\"; }\r\n\r\n.fa-road-circle-check::before {\r\n  content: \"\\e564\"; }\r\n\r\n.fa-road-circle-exclamation::before {\r\n  content: \"\\e565\"; }\r\n\r\n.fa-road-circle-xmark::before {\r\n  content: \"\\e566\"; }\r\n\r\n.fa-road-lock::before {\r\n  content: \"\\e567\"; }\r\n\r\n.fa-road-spikes::before {\r\n  content: \"\\e568\"; }\r\n\r\n.fa-robot::before {\r\n  content: \"\\f544\"; }\r\n\r\n.fa-rocket::before {\r\n  content: \"\\f135\"; }\r\n\r\n.fa-rotate::before {\r\n  content: \"\\f2f1\"; }\r\n\r\n.fa-sync-alt::before {\r\n  content: \"\\f2f1\"; }\r\n\r\n.fa-rotate-left::before {\r\n  content: \"\\f2ea\"; }\r\n\r\n.fa-rotate-back::before {\r\n  content: \"\\f2ea\"; }\r\n\r\n.fa-rotate-backward::before {\r\n  content: \"\\f2ea\"; }\r\n\r\n.fa-undo-alt::before {\r\n  content: \"\\f2ea\"; }\r\n\r\n.fa-rotate-right::before {\r\n  content: \"\\f2f9\"; }\r\n\r\n.fa-redo-alt::before {\r\n  content: \"\\f2f9\"; }\r\n\r\n.fa-rotate-forward::before {\r\n  content: \"\\f2f9\"; }\r\n\r\n.fa-route::before {\r\n  content: \"\\f4d7\"; }\r\n\r\n.fa-rss::before {\r\n  content: \"\\f09e\"; }\r\n\r\n.fa-feed::before {\r\n  content: \"\\f09e\"; }\r\n\r\n.fa-ruble-sign::before {\r\n  content: \"\\f158\"; }\r\n\r\n.fa-rouble::before {\r\n  content: \"\\f158\"; }\r\n\r\n.fa-rub::before {\r\n  content: \"\\f158\"; }\r\n\r\n.fa-ruble::before {\r\n  content: \"\\f158\"; }\r\n\r\n.fa-rug::before {\r\n  content: \"\\e569\"; }\r\n\r\n.fa-ruler::before {\r\n  content: \"\\f545\"; }\r\n\r\n.fa-ruler-combined::before {\r\n  content: \"\\f546\"; }\r\n\r\n.fa-ruler-horizontal::before {\r\n  content: \"\\f547\"; }\r\n\r\n.fa-ruler-vertical::before {\r\n  content: \"\\f548\"; }\r\n\r\n.fa-rupee-sign::before {\r\n  content: \"\\f156\"; }\r\n\r\n.fa-rupee::before {\r\n  content: \"\\f156\"; }\r\n\r\n.fa-rupiah-sign::before {\r\n  content: \"\\e23d\"; }\r\n\r\n.fa-s::before {\r\n  content: \"\\53\"; }\r\n\r\n.fa-sack-dollar::before {\r\n  content: \"\\f81d\"; }\r\n\r\n.fa-sack-xmark::before {\r\n  content: \"\\e56a\"; }\r\n\r\n.fa-sailboat::before {\r\n  content: \"\\e445\"; }\r\n\r\n.fa-satellite::before {\r\n  content: \"\\f7bf\"; }\r\n\r\n.fa-satellite-dish::before {\r\n  content: \"\\f7c0\"; }\r\n\r\n.fa-scale-balanced::before {\r\n  content: \"\\f24e\"; }\r\n\r\n.fa-balance-scale::before {\r\n  content: \"\\f24e\"; }\r\n\r\n.fa-scale-unbalanced::before {\r\n  content: \"\\f515\"; }\r\n\r\n.fa-balance-scale-left::before {\r\n  content: \"\\f515\"; }\r\n\r\n.fa-scale-unbalanced-flip::before {\r\n  content: \"\\f516\"; }\r\n\r\n.fa-balance-scale-right::before {\r\n  content: \"\\f516\"; }\r\n\r\n.fa-school::before {\r\n  content: \"\\f549\"; }\r\n\r\n.fa-school-circle-check::before {\r\n  content: \"\\e56b\"; }\r\n\r\n.fa-school-circle-exclamation::before {\r\n  content: \"\\e56c\"; }\r\n\r\n.fa-school-circle-xmark::before {\r\n  content: \"\\e56d\"; }\r\n\r\n.fa-school-flag::before {\r\n  content: \"\\e56e\"; }\r\n\r\n.fa-school-lock::before {\r\n  content: \"\\e56f\"; }\r\n\r\n.fa-scissors::before {\r\n  content: \"\\f0c4\"; }\r\n\r\n.fa-cut::before {\r\n  content: \"\\f0c4\"; }\r\n\r\n.fa-screwdriver::before {\r\n  content: \"\\f54a\"; }\r\n\r\n.fa-screwdriver-wrench::before {\r\n  content: \"\\f7d9\"; }\r\n\r\n.fa-tools::before {\r\n  content: \"\\f7d9\"; }\r\n\r\n.fa-scroll::before {\r\n  content: \"\\f70e\"; }\r\n\r\n.fa-scroll-torah::before {\r\n  content: \"\\f6a0\"; }\r\n\r\n.fa-torah::before {\r\n  content: \"\\f6a0\"; }\r\n\r\n.fa-sd-card::before {\r\n  content: \"\\f7c2\"; }\r\n\r\n.fa-section::before {\r\n  content: \"\\e447\"; }\r\n\r\n.fa-seedling::before {\r\n  content: \"\\f4d8\"; }\r\n\r\n.fa-sprout::before {\r\n  content: \"\\f4d8\"; }\r\n\r\n.fa-server::before {\r\n  content: \"\\f233\"; }\r\n\r\n.fa-shapes::before {\r\n  content: \"\\f61f\"; }\r\n\r\n.fa-triangle-circle-square::before {\r\n  content: \"\\f61f\"; }\r\n\r\n.fa-share::before {\r\n  content: \"\\f064\"; }\r\n\r\n.fa-arrow-turn-right::before {\r\n  content: \"\\f064\"; }\r\n\r\n.fa-mail-forward::before {\r\n  content: \"\\f064\"; }\r\n\r\n.fa-share-from-square::before {\r\n  content: \"\\f14d\"; }\r\n\r\n.fa-share-square::before {\r\n  content: \"\\f14d\"; }\r\n\r\n.fa-share-nodes::before {\r\n  content: \"\\f1e0\"; }\r\n\r\n.fa-share-alt::before {\r\n  content: \"\\f1e0\"; }\r\n\r\n.fa-sheet-plastic::before {\r\n  content: \"\\e571\"; }\r\n\r\n.fa-shekel-sign::before {\r\n  content: \"\\f20b\"; }\r\n\r\n.fa-ils::before {\r\n  content: \"\\f20b\"; }\r\n\r\n.fa-shekel::before {\r\n  content: \"\\f20b\"; }\r\n\r\n.fa-sheqel::before {\r\n  content: \"\\f20b\"; }\r\n\r\n.fa-sheqel-sign::before {\r\n  content: \"\\f20b\"; }\r\n\r\n.fa-shield::before {\r\n  content: \"\\f132\"; }\r\n\r\n.fa-shield-blank::before {\r\n  content: \"\\f132\"; }\r\n\r\n.fa-shield-cat::before {\r\n  content: \"\\e572\"; }\r\n\r\n.fa-shield-dog::before {\r\n  content: \"\\e573\"; }\r\n\r\n.fa-shield-halved::before {\r\n  content: \"\\f3ed\"; }\r\n\r\n.fa-shield-alt::before {\r\n  content: \"\\f3ed\"; }\r\n\r\n.fa-shield-heart::before {\r\n  content: \"\\e574\"; }\r\n\r\n.fa-shield-virus::before {\r\n  content: \"\\e06c\"; }\r\n\r\n.fa-ship::before {\r\n  content: \"\\f21a\"; }\r\n\r\n.fa-shirt::before {\r\n  content: \"\\f553\"; }\r\n\r\n.fa-t-shirt::before {\r\n  content: \"\\f553\"; }\r\n\r\n.fa-tshirt::before {\r\n  content: \"\\f553\"; }\r\n\r\n.fa-shoe-prints::before {\r\n  content: \"\\f54b\"; }\r\n\r\n.fa-shop::before {\r\n  content: \"\\f54f\"; }\r\n\r\n.fa-store-alt::before {\r\n  content: \"\\f54f\"; }\r\n\r\n.fa-shop-lock::before {\r\n  content: \"\\e4a5\"; }\r\n\r\n.fa-shop-slash::before {\r\n  content: \"\\e070\"; }\r\n\r\n.fa-store-alt-slash::before {\r\n  content: \"\\e070\"; }\r\n\r\n.fa-shower::before {\r\n  content: \"\\f2cc\"; }\r\n\r\n.fa-shrimp::before {\r\n  content: \"\\e448\"; }\r\n\r\n.fa-shuffle::before {\r\n  content: \"\\f074\"; }\r\n\r\n.fa-random::before {\r\n  content: \"\\f074\"; }\r\n\r\n.fa-shuttle-space::before {\r\n  content: \"\\f197\"; }\r\n\r\n.fa-space-shuttle::before {\r\n  content: \"\\f197\"; }\r\n\r\n.fa-sign-hanging::before {\r\n  content: \"\\f4d9\"; }\r\n\r\n.fa-sign::before {\r\n  content: \"\\f4d9\"; }\r\n\r\n.fa-signal::before {\r\n  content: \"\\f012\"; }\r\n\r\n.fa-signal-5::before {\r\n  content: \"\\f012\"; }\r\n\r\n.fa-signal-perfect::before {\r\n  content: \"\\f012\"; }\r\n\r\n.fa-signature::before {\r\n  content: \"\\f5b7\"; }\r\n\r\n.fa-signs-post::before {\r\n  content: \"\\f277\"; }\r\n\r\n.fa-map-signs::before {\r\n  content: \"\\f277\"; }\r\n\r\n.fa-sim-card::before {\r\n  content: \"\\f7c4\"; }\r\n\r\n.fa-sink::before {\r\n  content: \"\\e06d\"; }\r\n\r\n.fa-sitemap::before {\r\n  content: \"\\f0e8\"; }\r\n\r\n.fa-skull::before {\r\n  content: \"\\f54c\"; }\r\n\r\n.fa-skull-crossbones::before {\r\n  content: \"\\f714\"; }\r\n\r\n.fa-slash::before {\r\n  content: \"\\f715\"; }\r\n\r\n.fa-sleigh::before {\r\n  content: \"\\f7cc\"; }\r\n\r\n.fa-sliders::before {\r\n  content: \"\\f1de\"; }\r\n\r\n.fa-sliders-h::before {\r\n  content: \"\\f1de\"; }\r\n\r\n.fa-smog::before {\r\n  content: \"\\f75f\"; }\r\n\r\n.fa-smoking::before {\r\n  content: \"\\f48d\"; }\r\n\r\n.fa-snowflake::before {\r\n  content: \"\\f2dc\"; }\r\n\r\n.fa-snowman::before {\r\n  content: \"\\f7d0\"; }\r\n\r\n.fa-snowplow::before {\r\n  content: \"\\f7d2\"; }\r\n\r\n.fa-soap::before {\r\n  content: \"\\e06e\"; }\r\n\r\n.fa-socks::before {\r\n  content: \"\\f696\"; }\r\n\r\n.fa-solar-panel::before {\r\n  content: \"\\f5ba\"; }\r\n\r\n.fa-sort::before {\r\n  content: \"\\f0dc\"; }\r\n\r\n.fa-unsorted::before {\r\n  content: \"\\f0dc\"; }\r\n\r\n.fa-sort-down::before {\r\n  content: \"\\f0dd\"; }\r\n\r\n.fa-sort-desc::before {\r\n  content: \"\\f0dd\"; }\r\n\r\n.fa-sort-up::before {\r\n  content: \"\\f0de\"; }\r\n\r\n.fa-sort-asc::before {\r\n  content: \"\\f0de\"; }\r\n\r\n.fa-spa::before {\r\n  content: \"\\f5bb\"; }\r\n\r\n.fa-spaghetti-monster-flying::before {\r\n  content: \"\\f67b\"; }\r\n\r\n.fa-pastafarianism::before {\r\n  content: \"\\f67b\"; }\r\n\r\n.fa-spell-check::before {\r\n  content: \"\\f891\"; }\r\n\r\n.fa-spider::before {\r\n  content: \"\\f717\"; }\r\n\r\n.fa-spinner::before {\r\n  content: \"\\f110\"; }\r\n\r\n.fa-splotch::before {\r\n  content: \"\\f5bc\"; }\r\n\r\n.fa-spoon::before {\r\n  content: \"\\f2e5\"; }\r\n\r\n.fa-utensil-spoon::before {\r\n  content: \"\\f2e5\"; }\r\n\r\n.fa-spray-can::before {\r\n  content: \"\\f5bd\"; }\r\n\r\n.fa-spray-can-sparkles::before {\r\n  content: \"\\f5d0\"; }\r\n\r\n.fa-air-freshener::before {\r\n  content: \"\\f5d0\"; }\r\n\r\n.fa-square::before {\r\n  content: \"\\f0c8\"; }\r\n\r\n.fa-square-arrow-up-right::before {\r\n  content: \"\\f14c\"; }\r\n\r\n.fa-external-link-square::before {\r\n  content: \"\\f14c\"; }\r\n\r\n.fa-square-caret-down::before {\r\n  content: \"\\f150\"; }\r\n\r\n.fa-caret-square-down::before {\r\n  content: \"\\f150\"; }\r\n\r\n.fa-square-caret-left::before {\r\n  content: \"\\f191\"; }\r\n\r\n.fa-caret-square-left::before {\r\n  content: \"\\f191\"; }\r\n\r\n.fa-square-caret-right::before {\r\n  content: \"\\f152\"; }\r\n\r\n.fa-caret-square-right::before {\r\n  content: \"\\f152\"; }\r\n\r\n.fa-square-caret-up::before {\r\n  content: \"\\f151\"; }\r\n\r\n.fa-caret-square-up::before {\r\n  content: \"\\f151\"; }\r\n\r\n.fa-square-check::before {\r\n  content: \"\\f14a\"; }\r\n\r\n.fa-check-square::before {\r\n  content: \"\\f14a\"; }\r\n\r\n.fa-square-envelope::before {\r\n  content: \"\\f199\"; }\r\n\r\n.fa-envelope-square::before {\r\n  content: \"\\f199\"; }\r\n\r\n.fa-square-full::before {\r\n  content: \"\\f45c\"; }\r\n\r\n.fa-square-h::before {\r\n  content: \"\\f0fd\"; }\r\n\r\n.fa-h-square::before {\r\n  content: \"\\f0fd\"; }\r\n\r\n.fa-square-minus::before {\r\n  content: \"\\f146\"; }\r\n\r\n.fa-minus-square::before {\r\n  content: \"\\f146\"; }\r\n\r\n.fa-square-nfi::before {\r\n  content: \"\\e576\"; }\r\n\r\n.fa-square-parking::before {\r\n  content: \"\\f540\"; }\r\n\r\n.fa-parking::before {\r\n  content: \"\\f540\"; }\r\n\r\n.fa-square-pen::before {\r\n  content: \"\\f14b\"; }\r\n\r\n.fa-pen-square::before {\r\n  content: \"\\f14b\"; }\r\n\r\n.fa-pencil-square::before {\r\n  content: \"\\f14b\"; }\r\n\r\n.fa-square-person-confined::before {\r\n  content: \"\\e577\"; }\r\n\r\n.fa-square-phone::before {\r\n  content: \"\\f098\"; }\r\n\r\n.fa-phone-square::before {\r\n  content: \"\\f098\"; }\r\n\r\n.fa-square-phone-flip::before {\r\n  content: \"\\f87b\"; }\r\n\r\n.fa-phone-square-alt::before {\r\n  content: \"\\f87b\"; }\r\n\r\n.fa-square-plus::before {\r\n  content: \"\\f0fe\"; }\r\n\r\n.fa-plus-square::before {\r\n  content: \"\\f0fe\"; }\r\n\r\n.fa-square-poll-horizontal::before {\r\n  content: \"\\f682\"; }\r\n\r\n.fa-poll-h::before {\r\n  content: \"\\f682\"; }\r\n\r\n.fa-square-poll-vertical::before {\r\n  content: \"\\f681\"; }\r\n\r\n.fa-poll::before {\r\n  content: \"\\f681\"; }\r\n\r\n.fa-square-root-variable::before {\r\n  content: \"\\f698\"; }\r\n\r\n.fa-square-root-alt::before {\r\n  content: \"\\f698\"; }\r\n\r\n.fa-square-rss::before {\r\n  content: \"\\f143\"; }\r\n\r\n.fa-rss-square::before {\r\n  content: \"\\f143\"; }\r\n\r\n.fa-square-share-nodes::before {\r\n  content: \"\\f1e1\"; }\r\n\r\n.fa-share-alt-square::before {\r\n  content: \"\\f1e1\"; }\r\n\r\n.fa-square-up-right::before {\r\n  content: \"\\f360\"; }\r\n\r\n.fa-external-link-square-alt::before {\r\n  content: \"\\f360\"; }\r\n\r\n.fa-square-virus::before {\r\n  content: \"\\e578\"; }\r\n\r\n.fa-square-xmark::before {\r\n  content: \"\\f2d3\"; }\r\n\r\n.fa-times-square::before {\r\n  content: \"\\f2d3\"; }\r\n\r\n.fa-xmark-square::before {\r\n  content: \"\\f2d3\"; }\r\n\r\n.fa-staff-aesculapius::before {\r\n  content: \"\\e579\"; }\r\n\r\n.fa-rod-asclepius::before {\r\n  content: \"\\e579\"; }\r\n\r\n.fa-rod-snake::before {\r\n  content: \"\\e579\"; }\r\n\r\n.fa-staff-snake::before {\r\n  content: \"\\e579\"; }\r\n\r\n.fa-stairs::before {\r\n  content: \"\\e289\"; }\r\n\r\n.fa-stamp::before {\r\n  content: \"\\f5bf\"; }\r\n\r\n.fa-star::before {\r\n  content: \"\\f005\"; }\r\n\r\n.fa-star-and-crescent::before {\r\n  content: \"\\f699\"; }\r\n\r\n.fa-star-half::before {\r\n  content: \"\\f089\"; }\r\n\r\n.fa-star-half-stroke::before {\r\n  content: \"\\f5c0\"; }\r\n\r\n.fa-star-half-alt::before {\r\n  content: \"\\f5c0\"; }\r\n\r\n.fa-star-of-david::before {\r\n  content: \"\\f69a\"; }\r\n\r\n.fa-star-of-life::before {\r\n  content: \"\\f621\"; }\r\n\r\n.fa-sterling-sign::before {\r\n  content: \"\\f154\"; }\r\n\r\n.fa-gbp::before {\r\n  content: \"\\f154\"; }\r\n\r\n.fa-pound-sign::before {\r\n  content: \"\\f154\"; }\r\n\r\n.fa-stethoscope::before {\r\n  content: \"\\f0f1\"; }\r\n\r\n.fa-stop::before {\r\n  content: \"\\f04d\"; }\r\n\r\n.fa-stopwatch::before {\r\n  content: \"\\f2f2\"; }\r\n\r\n.fa-stopwatch-20::before {\r\n  content: \"\\e06f\"; }\r\n\r\n.fa-store::before {\r\n  content: \"\\f54e\"; }\r\n\r\n.fa-store-slash::before {\r\n  content: \"\\e071\"; }\r\n\r\n.fa-street-view::before {\r\n  content: \"\\f21d\"; }\r\n\r\n.fa-strikethrough::before {\r\n  content: \"\\f0cc\"; }\r\n\r\n.fa-stroopwafel::before {\r\n  content: \"\\f551\"; }\r\n\r\n.fa-subscript::before {\r\n  content: \"\\f12c\"; }\r\n\r\n.fa-suitcase::before {\r\n  content: \"\\f0f2\"; }\r\n\r\n.fa-suitcase-medical::before {\r\n  content: \"\\f0fa\"; }\r\n\r\n.fa-medkit::before {\r\n  content: \"\\f0fa\"; }\r\n\r\n.fa-suitcase-rolling::before {\r\n  content: \"\\f5c1\"; }\r\n\r\n.fa-sun::before {\r\n  content: \"\\f185\"; }\r\n\r\n.fa-sun-plant-wilt::before {\r\n  content: \"\\e57a\"; }\r\n\r\n.fa-superscript::before {\r\n  content: \"\\f12b\"; }\r\n\r\n.fa-swatchbook::before {\r\n  content: \"\\f5c3\"; }\r\n\r\n.fa-synagogue::before {\r\n  content: \"\\f69b\"; }\r\n\r\n.fa-syringe::before {\r\n  content: \"\\f48e\"; }\r\n\r\n.fa-t::before {\r\n  content: \"\\54\"; }\r\n\r\n.fa-table::before {\r\n  content: \"\\f0ce\"; }\r\n\r\n.fa-table-cells::before {\r\n  content: \"\\f00a\"; }\r\n\r\n.fa-th::before {\r\n  content: \"\\f00a\"; }\r\n\r\n.fa-table-cells-large::before {\r\n  content: \"\\f009\"; }\r\n\r\n.fa-th-large::before {\r\n  content: \"\\f009\"; }\r\n\r\n.fa-table-columns::before {\r\n  content: \"\\f0db\"; }\r\n\r\n.fa-columns::before {\r\n  content: \"\\f0db\"; }\r\n\r\n.fa-table-list::before {\r\n  content: \"\\f00b\"; }\r\n\r\n.fa-th-list::before {\r\n  content: \"\\f00b\"; }\r\n\r\n.fa-table-tennis-paddle-ball::before {\r\n  content: \"\\f45d\"; }\r\n\r\n.fa-ping-pong-paddle-ball::before {\r\n  content: \"\\f45d\"; }\r\n\r\n.fa-table-tennis::before {\r\n  content: \"\\f45d\"; }\r\n\r\n.fa-tablet::before {\r\n  content: \"\\f3fb\"; }\r\n\r\n.fa-tablet-android::before {\r\n  content: \"\\f3fb\"; }\r\n\r\n.fa-tablet-button::before {\r\n  content: \"\\f10a\"; }\r\n\r\n.fa-tablet-screen-button::before {\r\n  content: \"\\f3fa\"; }\r\n\r\n.fa-tablet-alt::before {\r\n  content: \"\\f3fa\"; }\r\n\r\n.fa-tablets::before {\r\n  content: \"\\f490\"; }\r\n\r\n.fa-tachograph-digital::before {\r\n  content: \"\\f566\"; }\r\n\r\n.fa-digital-tachograph::before {\r\n  content: \"\\f566\"; }\r\n\r\n.fa-tag::before {\r\n  content: \"\\f02b\"; }\r\n\r\n.fa-tags::before {\r\n  content: \"\\f02c\"; }\r\n\r\n.fa-tape::before {\r\n  content: \"\\f4db\"; }\r\n\r\n.fa-tarp::before {\r\n  content: \"\\e57b\"; }\r\n\r\n.fa-tarp-droplet::before {\r\n  content: \"\\e57c\"; }\r\n\r\n.fa-taxi::before {\r\n  content: \"\\f1ba\"; }\r\n\r\n.fa-cab::before {\r\n  content: \"\\f1ba\"; }\r\n\r\n.fa-teeth::before {\r\n  content: \"\\f62e\"; }\r\n\r\n.fa-teeth-open::before {\r\n  content: \"\\f62f\"; }\r\n\r\n.fa-temperature-arrow-down::before {\r\n  content: \"\\e03f\"; }\r\n\r\n.fa-temperature-down::before {\r\n  content: \"\\e03f\"; }\r\n\r\n.fa-temperature-arrow-up::before {\r\n  content: \"\\e040\"; }\r\n\r\n.fa-temperature-up::before {\r\n  content: \"\\e040\"; }\r\n\r\n.fa-temperature-empty::before {\r\n  content: \"\\f2cb\"; }\r\n\r\n.fa-temperature-0::before {\r\n  content: \"\\f2cb\"; }\r\n\r\n.fa-thermometer-0::before {\r\n  content: \"\\f2cb\"; }\r\n\r\n.fa-thermometer-empty::before {\r\n  content: \"\\f2cb\"; }\r\n\r\n.fa-temperature-full::before {\r\n  content: \"\\f2c7\"; }\r\n\r\n.fa-temperature-4::before {\r\n  content: \"\\f2c7\"; }\r\n\r\n.fa-thermometer-4::before {\r\n  content: \"\\f2c7\"; }\r\n\r\n.fa-thermometer-full::before {\r\n  content: \"\\f2c7\"; }\r\n\r\n.fa-temperature-half::before {\r\n  content: \"\\f2c9\"; }\r\n\r\n.fa-temperature-2::before {\r\n  content: \"\\f2c9\"; }\r\n\r\n.fa-thermometer-2::before {\r\n  content: \"\\f2c9\"; }\r\n\r\n.fa-thermometer-half::before {\r\n  content: \"\\f2c9\"; }\r\n\r\n.fa-temperature-high::before {\r\n  content: \"\\f769\"; }\r\n\r\n.fa-temperature-low::before {\r\n  content: \"\\f76b\"; }\r\n\r\n.fa-temperature-quarter::before {\r\n  content: \"\\f2ca\"; }\r\n\r\n.fa-temperature-1::before {\r\n  content: \"\\f2ca\"; }\r\n\r\n.fa-thermometer-1::before {\r\n  content: \"\\f2ca\"; }\r\n\r\n.fa-thermometer-quarter::before {\r\n  content: \"\\f2ca\"; }\r\n\r\n.fa-temperature-three-quarters::before {\r\n  content: \"\\f2c8\"; }\r\n\r\n.fa-temperature-3::before {\r\n  content: \"\\f2c8\"; }\r\n\r\n.fa-thermometer-3::before {\r\n  content: \"\\f2c8\"; }\r\n\r\n.fa-thermometer-three-quarters::before {\r\n  content: \"\\f2c8\"; }\r\n\r\n.fa-tenge-sign::before {\r\n  content: \"\\f7d7\"; }\r\n\r\n.fa-tenge::before {\r\n  content: \"\\f7d7\"; }\r\n\r\n.fa-tent::before {\r\n  content: \"\\e57d\"; }\r\n\r\n.fa-tent-arrow-down-to-line::before {\r\n  content: \"\\e57e\"; }\r\n\r\n.fa-tent-arrow-left-right::before {\r\n  content: \"\\e57f\"; }\r\n\r\n.fa-tent-arrow-turn-left::before {\r\n  content: \"\\e580\"; }\r\n\r\n.fa-tent-arrows-down::before {\r\n  content: \"\\e581\"; }\r\n\r\n.fa-tents::before {\r\n  content: \"\\e582\"; }\r\n\r\n.fa-terminal::before {\r\n  content: \"\\f120\"; }\r\n\r\n.fa-text-height::before {\r\n  content: \"\\f034\"; }\r\n\r\n.fa-text-slash::before {\r\n  content: \"\\f87d\"; }\r\n\r\n.fa-remove-format::before {\r\n  content: \"\\f87d\"; }\r\n\r\n.fa-text-width::before {\r\n  content: \"\\f035\"; }\r\n\r\n.fa-thermometer::before {\r\n  content: \"\\f491\"; }\r\n\r\n.fa-thumbs-down::before {\r\n  content: \"\\f165\"; }\r\n\r\n.fa-thumbs-up::before {\r\n  content: \"\\f164\"; }\r\n\r\n.fa-thumbtack::before {\r\n  content: \"\\f08d\"; }\r\n\r\n.fa-thumb-tack::before {\r\n  content: \"\\f08d\"; }\r\n\r\n.fa-ticket::before {\r\n  content: \"\\f145\"; }\r\n\r\n.fa-ticket-simple::before {\r\n  content: \"\\f3ff\"; }\r\n\r\n.fa-ticket-alt::before {\r\n  content: \"\\f3ff\"; }\r\n\r\n.fa-timeline::before {\r\n  content: \"\\e29c\"; }\r\n\r\n.fa-toggle-off::before {\r\n  content: \"\\f204\"; }\r\n\r\n.fa-toggle-on::before {\r\n  content: \"\\f205\"; }\r\n\r\n.fa-toilet::before {\r\n  content: \"\\f7d8\"; }\r\n\r\n.fa-toilet-paper::before {\r\n  content: \"\\f71e\"; }\r\n\r\n.fa-toilet-paper-slash::before {\r\n  content: \"\\e072\"; }\r\n\r\n.fa-toilet-portable::before {\r\n  content: \"\\e583\"; }\r\n\r\n.fa-toilets-portable::before {\r\n  content: \"\\e584\"; }\r\n\r\n.fa-toolbox::before {\r\n  content: \"\\f552\"; }\r\n\r\n.fa-tooth::before {\r\n  content: \"\\f5c9\"; }\r\n\r\n.fa-torii-gate::before {\r\n  content: \"\\f6a1\"; }\r\n\r\n.fa-tornado::before {\r\n  content: \"\\f76f\"; }\r\n\r\n.fa-tower-broadcast::before {\r\n  content: \"\\f519\"; }\r\n\r\n.fa-broadcast-tower::before {\r\n  content: \"\\f519\"; }\r\n\r\n.fa-tower-cell::before {\r\n  content: \"\\e585\"; }\r\n\r\n.fa-tower-observation::before {\r\n  content: \"\\e586\"; }\r\n\r\n.fa-tractor::before {\r\n  content: \"\\f722\"; }\r\n\r\n.fa-trademark::before {\r\n  content: \"\\f25c\"; }\r\n\r\n.fa-traffic-light::before {\r\n  content: \"\\f637\"; }\r\n\r\n.fa-trailer::before {\r\n  content: \"\\e041\"; }\r\n\r\n.fa-train::before {\r\n  content: \"\\f238\"; }\r\n\r\n.fa-train-subway::before {\r\n  content: \"\\f239\"; }\r\n\r\n.fa-subway::before {\r\n  content: \"\\f239\"; }\r\n\r\n.fa-train-tram::before {\r\n  content: \"\\f7da\"; }\r\n\r\n.fa-tram::before {\r\n  content: \"\\f7da\"; }\r\n\r\n.fa-transgender::before {\r\n  content: \"\\f225\"; }\r\n\r\n.fa-transgender-alt::before {\r\n  content: \"\\f225\"; }\r\n\r\n.fa-trash::before {\r\n  content: \"\\f1f8\"; }\r\n\r\n.fa-trash-arrow-up::before {\r\n  content: \"\\f829\"; }\r\n\r\n.fa-trash-restore::before {\r\n  content: \"\\f829\"; }\r\n\r\n.fa-trash-can::before {\r\n  content: \"\\f2ed\"; }\r\n\r\n.fa-trash-alt::before {\r\n  content: \"\\f2ed\"; }\r\n\r\n.fa-trash-can-arrow-up::before {\r\n  content: \"\\f82a\"; }\r\n\r\n.fa-trash-restore-alt::before {\r\n  content: \"\\f82a\"; }\r\n\r\n.fa-tree::before {\r\n  content: \"\\f1bb\"; }\r\n\r\n.fa-tree-city::before {\r\n  content: \"\\e587\"; }\r\n\r\n.fa-triangle-exclamation::before {\r\n  content: \"\\f071\"; }\r\n\r\n.fa-exclamation-triangle::before {\r\n  content: \"\\f071\"; }\r\n\r\n.fa-warning::before {\r\n  content: \"\\f071\"; }\r\n\r\n.fa-trophy::before {\r\n  content: \"\\f091\"; }\r\n\r\n.fa-trowel::before {\r\n  content: \"\\e589\"; }\r\n\r\n.fa-trowel-bricks::before {\r\n  content: \"\\e58a\"; }\r\n\r\n.fa-truck::before {\r\n  content: \"\\f0d1\"; }\r\n\r\n.fa-truck-arrow-right::before {\r\n  content: \"\\e58b\"; }\r\n\r\n.fa-truck-droplet::before {\r\n  content: \"\\e58c\"; }\r\n\r\n.fa-truck-fast::before {\r\n  content: \"\\f48b\"; }\r\n\r\n.fa-shipping-fast::before {\r\n  content: \"\\f48b\"; }\r\n\r\n.fa-truck-field::before {\r\n  content: \"\\e58d\"; }\r\n\r\n.fa-truck-field-un::before {\r\n  content: \"\\e58e\"; }\r\n\r\n.fa-truck-front::before {\r\n  content: \"\\e2b7\"; }\r\n\r\n.fa-truck-medical::before {\r\n  content: \"\\f0f9\"; }\r\n\r\n.fa-ambulance::before {\r\n  content: \"\\f0f9\"; }\r\n\r\n.fa-truck-monster::before {\r\n  content: \"\\f63b\"; }\r\n\r\n.fa-truck-moving::before {\r\n  content: \"\\f4df\"; }\r\n\r\n.fa-truck-pickup::before {\r\n  content: \"\\f63c\"; }\r\n\r\n.fa-truck-plane::before {\r\n  content: \"\\e58f\"; }\r\n\r\n.fa-truck-ramp-box::before {\r\n  content: \"\\f4de\"; }\r\n\r\n.fa-truck-loading::before {\r\n  content: \"\\f4de\"; }\r\n\r\n.fa-tty::before {\r\n  content: \"\\f1e4\"; }\r\n\r\n.fa-teletype::before {\r\n  content: \"\\f1e4\"; }\r\n\r\n.fa-turkish-lira-sign::before {\r\n  content: \"\\e2bb\"; }\r\n\r\n.fa-try::before {\r\n  content: \"\\e2bb\"; }\r\n\r\n.fa-turkish-lira::before {\r\n  content: \"\\e2bb\"; }\r\n\r\n.fa-turn-down::before {\r\n  content: \"\\f3be\"; }\r\n\r\n.fa-level-down-alt::before {\r\n  content: \"\\f3be\"; }\r\n\r\n.fa-turn-up::before {\r\n  content: \"\\f3bf\"; }\r\n\r\n.fa-level-up-alt::before {\r\n  content: \"\\f3bf\"; }\r\n\r\n.fa-tv::before {\r\n  content: \"\\f26c\"; }\r\n\r\n.fa-television::before {\r\n  content: \"\\f26c\"; }\r\n\r\n.fa-tv-alt::before {\r\n  content: \"\\f26c\"; }\r\n\r\n.fa-u::before {\r\n  content: \"\\55\"; }\r\n\r\n.fa-umbrella::before {\r\n  content: \"\\f0e9\"; }\r\n\r\n.fa-umbrella-beach::before {\r\n  content: \"\\f5ca\"; }\r\n\r\n.fa-underline::before {\r\n  content: \"\\f0cd\"; }\r\n\r\n.fa-universal-access::before {\r\n  content: \"\\f29a\"; }\r\n\r\n.fa-unlock::before {\r\n  content: \"\\f09c\"; }\r\n\r\n.fa-unlock-keyhole::before {\r\n  content: \"\\f13e\"; }\r\n\r\n.fa-unlock-alt::before {\r\n  content: \"\\f13e\"; }\r\n\r\n.fa-up-down::before {\r\n  content: \"\\f338\"; }\r\n\r\n.fa-arrows-alt-v::before {\r\n  content: \"\\f338\"; }\r\n\r\n.fa-up-down-left-right::before {\r\n  content: \"\\f0b2\"; }\r\n\r\n.fa-arrows-alt::before {\r\n  content: \"\\f0b2\"; }\r\n\r\n.fa-up-long::before {\r\n  content: \"\\f30c\"; }\r\n\r\n.fa-long-arrow-alt-up::before {\r\n  content: \"\\f30c\"; }\r\n\r\n.fa-up-right-and-down-left-from-center::before {\r\n  content: \"\\f424\"; }\r\n\r\n.fa-expand-alt::before {\r\n  content: \"\\f424\"; }\r\n\r\n.fa-up-right-from-square::before {\r\n  content: \"\\f35d\"; }\r\n\r\n.fa-external-link-alt::before {\r\n  content: \"\\f35d\"; }\r\n\r\n.fa-upload::before {\r\n  content: \"\\f093\"; }\r\n\r\n.fa-user::before {\r\n  content: \"\\f007\"; }\r\n\r\n.fa-user-astronaut::before {\r\n  content: \"\\f4fb\"; }\r\n\r\n.fa-user-check::before {\r\n  content: \"\\f4fc\"; }\r\n\r\n.fa-user-clock::before {\r\n  content: \"\\f4fd\"; }\r\n\r\n.fa-user-doctor::before {\r\n  content: \"\\f0f0\"; }\r\n\r\n.fa-user-md::before {\r\n  content: \"\\f0f0\"; }\r\n\r\n.fa-user-gear::before {\r\n  content: \"\\f4fe\"; }\r\n\r\n.fa-user-cog::before {\r\n  content: \"\\f4fe\"; }\r\n\r\n.fa-user-graduate::before {\r\n  content: \"\\f501\"; }\r\n\r\n.fa-user-group::before {\r\n  content: \"\\f500\"; }\r\n\r\n.fa-user-friends::before {\r\n  content: \"\\f500\"; }\r\n\r\n.fa-user-injured::before {\r\n  content: \"\\f728\"; }\r\n\r\n.fa-user-large::before {\r\n  content: \"\\f406\"; }\r\n\r\n.fa-user-alt::before {\r\n  content: \"\\f406\"; }\r\n\r\n.fa-user-large-slash::before {\r\n  content: \"\\f4fa\"; }\r\n\r\n.fa-user-alt-slash::before {\r\n  content: \"\\f4fa\"; }\r\n\r\n.fa-user-lock::before {\r\n  content: \"\\f502\"; }\r\n\r\n.fa-user-minus::before {\r\n  content: \"\\f503\"; }\r\n\r\n.fa-user-ninja::before {\r\n  content: \"\\f504\"; }\r\n\r\n.fa-user-nurse::before {\r\n  content: \"\\f82f\"; }\r\n\r\n.fa-user-pen::before {\r\n  content: \"\\f4ff\"; }\r\n\r\n.fa-user-edit::before {\r\n  content: \"\\f4ff\"; }\r\n\r\n.fa-user-plus::before {\r\n  content: \"\\f234\"; }\r\n\r\n.fa-user-secret::before {\r\n  content: \"\\f21b\"; }\r\n\r\n.fa-user-shield::before {\r\n  content: \"\\f505\"; }\r\n\r\n.fa-user-slash::before {\r\n  content: \"\\f506\"; }\r\n\r\n.fa-user-tag::before {\r\n  content: \"\\f507\"; }\r\n\r\n.fa-user-tie::before {\r\n  content: \"\\f508\"; }\r\n\r\n.fa-user-xmark::before {\r\n  content: \"\\f235\"; }\r\n\r\n.fa-user-times::before {\r\n  content: \"\\f235\"; }\r\n\r\n.fa-users::before {\r\n  content: \"\\f0c0\"; }\r\n\r\n.fa-users-between-lines::before {\r\n  content: \"\\e591\"; }\r\n\r\n.fa-users-gear::before {\r\n  content: \"\\f509\"; }\r\n\r\n.fa-users-cog::before {\r\n  content: \"\\f509\"; }\r\n\r\n.fa-users-line::before {\r\n  content: \"\\e592\"; }\r\n\r\n.fa-users-rays::before {\r\n  content: \"\\e593\"; }\r\n\r\n.fa-users-rectangle::before {\r\n  content: \"\\e594\"; }\r\n\r\n.fa-users-slash::before {\r\n  content: \"\\e073\"; }\r\n\r\n.fa-users-viewfinder::before {\r\n  content: \"\\e595\"; }\r\n\r\n.fa-utensils::before {\r\n  content: \"\\f2e7\"; }\r\n\r\n.fa-cutlery::before {\r\n  content: \"\\f2e7\"; }\r\n\r\n.fa-v::before {\r\n  content: \"\\56\"; }\r\n\r\n.fa-van-shuttle::before {\r\n  content: \"\\f5b6\"; }\r\n\r\n.fa-shuttle-van::before {\r\n  content: \"\\f5b6\"; }\r\n\r\n.fa-vault::before {\r\n  content: \"\\e2c5\"; }\r\n\r\n.fa-vector-square::before {\r\n  content: \"\\f5cb\"; }\r\n\r\n.fa-venus::before {\r\n  content: \"\\f221\"; }\r\n\r\n.fa-venus-double::before {\r\n  content: \"\\f226\"; }\r\n\r\n.fa-venus-mars::before {\r\n  content: \"\\f228\"; }\r\n\r\n.fa-vest::before {\r\n  content: \"\\e085\"; }\r\n\r\n.fa-vest-patches::before {\r\n  content: \"\\e086\"; }\r\n\r\n.fa-vial::before {\r\n  content: \"\\f492\"; }\r\n\r\n.fa-vial-circle-check::before {\r\n  content: \"\\e596\"; }\r\n\r\n.fa-vial-virus::before {\r\n  content: \"\\e597\"; }\r\n\r\n.fa-vials::before {\r\n  content: \"\\f493\"; }\r\n\r\n.fa-video::before {\r\n  content: \"\\f03d\"; }\r\n\r\n.fa-video-camera::before {\r\n  content: \"\\f03d\"; }\r\n\r\n.fa-video-slash::before {\r\n  content: \"\\f4e2\"; }\r\n\r\n.fa-vihara::before {\r\n  content: \"\\f6a7\"; }\r\n\r\n.fa-virus::before {\r\n  content: \"\\e074\"; }\r\n\r\n.fa-virus-covid::before {\r\n  content: \"\\e4a8\"; }\r\n\r\n.fa-virus-covid-slash::before {\r\n  content: \"\\e4a9\"; }\r\n\r\n.fa-virus-slash::before {\r\n  content: \"\\e075\"; }\r\n\r\n.fa-viruses::before {\r\n  content: \"\\e076\"; }\r\n\r\n.fa-voicemail::before {\r\n  content: \"\\f897\"; }\r\n\r\n.fa-volcano::before {\r\n  content: \"\\f770\"; }\r\n\r\n.fa-volleyball::before {\r\n  content: \"\\f45f\"; }\r\n\r\n.fa-volleyball-ball::before {\r\n  content: \"\\f45f\"; }\r\n\r\n.fa-volume-high::before {\r\n  content: \"\\f028\"; }\r\n\r\n.fa-volume-up::before {\r\n  content: \"\\f028\"; }\r\n\r\n.fa-volume-low::before {\r\n  content: \"\\f027\"; }\r\n\r\n.fa-volume-down::before {\r\n  content: \"\\f027\"; }\r\n\r\n.fa-volume-off::before {\r\n  content: \"\\f026\"; }\r\n\r\n.fa-volume-xmark::before {\r\n  content: \"\\f6a9\"; }\r\n\r\n.fa-volume-mute::before {\r\n  content: \"\\f6a9\"; }\r\n\r\n.fa-volume-times::before {\r\n  content: \"\\f6a9\"; }\r\n\r\n.fa-vr-cardboard::before {\r\n  content: \"\\f729\"; }\r\n\r\n.fa-w::before {\r\n  content: \"\\57\"; }\r\n\r\n.fa-walkie-talkie::before {\r\n  content: \"\\f8ef\"; }\r\n\r\n.fa-wallet::before {\r\n  content: \"\\f555\"; }\r\n\r\n.fa-wand-magic::before {\r\n  content: \"\\f0d0\"; }\r\n\r\n.fa-magic::before {\r\n  content: \"\\f0d0\"; }\r\n\r\n.fa-wand-magic-sparkles::before {\r\n  content: \"\\e2ca\"; }\r\n\r\n.fa-magic-wand-sparkles::before {\r\n  content: \"\\e2ca\"; }\r\n\r\n.fa-wand-sparkles::before {\r\n  content: \"\\f72b\"; }\r\n\r\n.fa-warehouse::before {\r\n  content: \"\\f494\"; }\r\n\r\n.fa-water::before {\r\n  content: \"\\f773\"; }\r\n\r\n.fa-water-ladder::before {\r\n  content: \"\\f5c5\"; }\r\n\r\n.fa-ladder-water::before {\r\n  content: \"\\f5c5\"; }\r\n\r\n.fa-swimming-pool::before {\r\n  content: \"\\f5c5\"; }\r\n\r\n.fa-wave-square::before {\r\n  content: \"\\f83e\"; }\r\n\r\n.fa-weight-hanging::before {\r\n  content: \"\\f5cd\"; }\r\n\r\n.fa-weight-scale::before {\r\n  content: \"\\f496\"; }\r\n\r\n.fa-weight::before {\r\n  content: \"\\f496\"; }\r\n\r\n.fa-wheat-awn::before {\r\n  content: \"\\e2cd\"; }\r\n\r\n.fa-wheat-alt::before {\r\n  content: \"\\e2cd\"; }\r\n\r\n.fa-wheat-awn-circle-exclamation::before {\r\n  content: \"\\e598\"; }\r\n\r\n.fa-wheelchair::before {\r\n  content: \"\\f193\"; }\r\n\r\n.fa-wheelchair-move::before {\r\n  content: \"\\e2ce\"; }\r\n\r\n.fa-wheelchair-alt::before {\r\n  content: \"\\e2ce\"; }\r\n\r\n.fa-whiskey-glass::before {\r\n  content: \"\\f7a0\"; }\r\n\r\n.fa-glass-whiskey::before {\r\n  content: \"\\f7a0\"; }\r\n\r\n.fa-wifi::before {\r\n  content: \"\\f1eb\"; }\r\n\r\n.fa-wifi-3::before {\r\n  content: \"\\f1eb\"; }\r\n\r\n.fa-wifi-strong::before {\r\n  content: \"\\f1eb\"; }\r\n\r\n.fa-wind::before {\r\n  content: \"\\f72e\"; }\r\n\r\n.fa-window-maximize::before {\r\n  content: \"\\f2d0\"; }\r\n\r\n.fa-window-minimize::before {\r\n  content: \"\\f2d1\"; }\r\n\r\n.fa-window-restore::before {\r\n  content: \"\\f2d2\"; }\r\n\r\n.fa-wine-bottle::before {\r\n  content: \"\\f72f\"; }\r\n\r\n.fa-wine-glass::before {\r\n  content: \"\\f4e3\"; }\r\n\r\n.fa-wine-glass-empty::before {\r\n  content: \"\\f5ce\"; }\r\n\r\n.fa-wine-glass-alt::before {\r\n  content: \"\\f5ce\"; }\r\n\r\n.fa-won-sign::before {\r\n  content: \"\\f159\"; }\r\n\r\n.fa-krw::before {\r\n  content: \"\\f159\"; }\r\n\r\n.fa-won::before {\r\n  content: \"\\f159\"; }\r\n\r\n.fa-worm::before {\r\n  content: \"\\e599\"; }\r\n\r\n.fa-wrench::before {\r\n  content: \"\\f0ad\"; }\r\n\r\n.fa-x::before {\r\n  content: \"\\58\"; }\r\n\r\n.fa-x-ray::before {\r\n  content: \"\\f497\"; }\r\n\r\n.fa-xmark::before {\r\n  content: \"\\f00d\"; }\r\n\r\n.fa-close::before {\r\n  content: \"\\f00d\"; }\r\n\r\n.fa-multiply::before {\r\n  content: \"\\f00d\"; }\r\n\r\n.fa-remove::before {\r\n  content: \"\\f00d\"; }\r\n\r\n.fa-times::before {\r\n  content: \"\\f00d\"; }\r\n\r\n.fa-xmarks-lines::before {\r\n  content: \"\\e59a\"; }\r\n\r\n.fa-y::before {\r\n  content: \"\\59\"; }\r\n\r\n.fa-yen-sign::before {\r\n  content: \"\\f157\"; }\r\n\r\n.fa-cny::before {\r\n  content: \"\\f157\"; }\r\n\r\n.fa-jpy::before {\r\n  content: \"\\f157\"; }\r\n\r\n.fa-rmb::before {\r\n  content: \"\\f157\"; }\r\n\r\n.fa-yen::before {\r\n  content: \"\\f157\"; }\r\n\r\n.fa-yin-yang::before {\r\n  content: \"\\f6ad\"; }\r\n\r\n.fa-z::before {\r\n  content: \"\\5a\"; }\r\n\r\n.sr-only,\r\n.fa-sr-only {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  white-space: nowrap;\r\n  border-width: 0; }\r\n\r\n.sr-only-focusable:not(:focus),\r\n.fa-sr-only-focusable:not(:focus) {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  white-space: nowrap;\r\n  border-width: 0; }\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4215:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/comp/ui/common/header/fontawesome-free-6.1.1-web/css/solid.css ***!
  \******************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ 1667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../webfonts/fa-solid-900.woff2 */ 7015), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../webfonts/fa-solid-900.ttf */ 8577), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\r\n * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com\r\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\r\n * Copyright 2022 Fonticons, Inc.\r\n */\r\n:root, :host {\r\n  --fa-font-solid: normal 900 1em/1 \"Font Awesome 6 Free\"; }\r\n\r\n@font-face {\r\n  font-family: 'Font Awesome 6 Free';\r\n  font-style: normal;\r\n  font-weight: 900;\r\n  font-display: block;\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\"); }\r\n\r\n.fas,\r\n.fa-solid {\r\n  font-family: 'Font Awesome 6 Free';\r\n  font-weight: 900; }\r\n", "",{"version":3,"sources":["webpack://./src/comp/ui/common/header/fontawesome-free-6.1.1-web/css/solid.css"],"names":[],"mappings":"AAAA;;;;EAIE;AACF;EACE,uDAAuD,EAAE;;AAE3D;EACE,kCAAkC;EAClC,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,wHAAkH,EAAE;;AAEtH;;EAEE,kCAAkC;EAClC,gBAAgB,EAAE","sourcesContent":["/*!\r\n * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com\r\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\r\n * Copyright 2022 Fonticons, Inc.\r\n */\r\n:root, :host {\r\n  --fa-font-solid: normal 900 1em/1 \"Font Awesome 6 Free\"; }\r\n\r\n@font-face {\r\n  font-family: 'Font Awesome 6 Free';\r\n  font-style: normal;\r\n  font-weight: 900;\r\n  font-display: block;\r\n  src: url(\"../webfonts/fa-solid-900.woff2\") format(\"woff2\"), url(\"../webfonts/fa-solid-900.ttf\") format(\"truetype\"); }\r\n\r\n.fas,\r\n.fa-solid {\r\n  font-family: 'Font Awesome 6 Free';\r\n  font-weight: 900; }\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 783:
/*!***************************************************!*\
  !*** ./src/comp/ui/common/back-to-top/style.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ 3362);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 1365:
/*!**********************************************!*\
  !*** ./src/comp/ui/common/footer/style.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ 5521);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 7369:
/*!***********************************************!*\
  !*** ./src/comp/ui/common/header/common.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./common.scss */ 8146);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 4381:
/*!**********************************************!*\
  !*** ./src/comp/ui/common/header/style.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ 7892);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 7746:
/*!*****************************************************!*\
  !*** ./src/comp/ui/common/pop-up-header/style.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ 2779);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 9091:
/*!******************************************!*\
  !*** ./src/comp/ui/game/game/style.scss ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ 0);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 8711:
/*!**********************************************************************************!*\
  !*** ./src/comp/ui/common/header/fontawesome-free-6.1.1-web/css/fontawesome.css ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fontawesome_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!./fontawesome.css */ 9943);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_fontawesome_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_fontawesome_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_fontawesome_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_fontawesome_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 4696:
/*!****************************************************************************!*\
  !*** ./src/comp/ui/common/header/fontawesome-free-6.1.1-web/css/solid.css ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_solid_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!./solid.css */ 4215);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_solid_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_solid_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_solid_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_solid_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 9379:
/*!*********************************************************************!*\
  !*** ./src/comp/js/i18n/lang/ lazy ^\.\/.*\.json$ namespace object ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./bg.json": [
		6918,
		"src_comp_js_i18n_lang_bg_json"
	],
	"./cs.json": [
		7325,
		"src_comp_js_i18n_lang_cs_json"
	],
	"./de.json": [
		9061,
		"src_comp_js_i18n_lang_de_json"
	],
	"./el.json": [
		6756,
		"src_comp_js_i18n_lang_el_json"
	],
	"./en.json": [
		5281,
		"src_comp_js_i18n_lang_en_json"
	],
	"./en_test.json": [
		7306,
		"src_comp_js_i18n_lang_en_test_json"
	],
	"./es.json": [
		9019,
		"src_comp_js_i18n_lang_es_json"
	],
	"./fr.json": [
		2113,
		"src_comp_js_i18n_lang_fr_json"
	],
	"./fr_test.json": [
		6138,
		"src_comp_js_i18n_lang_fr_test_json"
	],
	"./hu.json": [
		7092,
		"src_comp_js_i18n_lang_hu_json"
	],
	"./it.json": [
		2537,
		"src_comp_js_i18n_lang_it_json"
	],
	"./pl.json": [
		9746,
		"src_comp_js_i18n_lang_pl_json"
	],
	"./pt.json": [
		9238,
		"src_comp_js_i18n_lang_pt_json"
	],
	"./ro.json": [
		627,
		"src_comp_js_i18n_lang_ro_json"
	],
	"./sk.json": [
		631,
		"src_comp_js_i18n_lang_sk_json"
	],
	"./sr.json": [
		1466,
		"src_comp_js_i18n_lang_sr_json"
	],
	"./tr.json": [
		7391,
		"src_comp_js_i18n_lang_tr_json"
	],
	"./uk.json": [
		256,
		"src_comp_js_i18n_lang_uk_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 9379;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 8577:
/*!****************************************************************************************!*\
  !*** ./src/comp/ui/common/header/fontawesome-free-6.1.1-web/webfonts/fa-solid-900.ttf ***!
  \****************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/images/e615bbcb258550973c16.ttf";

/***/ }),

/***/ 7015:
/*!******************************************************************************************!*\
  !*** ./src/comp/ui/common/header/fontawesome-free-6.1.1-web/webfonts/fa-solid-900.woff2 ***!
  \******************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/images/59edf72a325ac2048d60.woff2";

/***/ }),

/***/ 8486:
/*!************************************************!*\
  !*** ./src/comp/ui/common/header/img/logo.png ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/images/9e38743938ef7b3d517d.png";

/***/ }),

/***/ 486:
/*!***********************************************************!*\
  !*** ./src/comp/ui/common/pop-up-header/img/prizes-1.png ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/images/c36d806ca3c2a0f81dc4.png";

/***/ }),

/***/ 6568:
/*!***********************************************************!*\
  !*** ./src/comp/ui/common/pop-up-header/img/prizes-2.png ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/images/f1183a5ca8585ea87b12.png";

/***/ }),

/***/ 3701:
/*!***********************************************************!*\
  !*** ./src/comp/ui/common/pop-up-header/img/prizes-3.png ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/images/2695b55c450d68cd118a.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "static/js/" + chunkId + "." + {"src_comp_js_i18n_lang_bg_json":"5ea66f5c9ca31421e36f","src_comp_js_i18n_lang_cs_json":"a943b6a165c8d6b7a2a2","src_comp_js_i18n_lang_de_json":"d971ee040a28d76142f8","src_comp_js_i18n_lang_el_json":"a03665c8c2415fbc153f","src_comp_js_i18n_lang_en_json":"5c7c4614d44ee56db548","src_comp_js_i18n_lang_en_test_json":"2abcccd8c87e0aa9697d","src_comp_js_i18n_lang_es_json":"c358312772adb19e5a4b","src_comp_js_i18n_lang_fr_json":"83bf23991d8e94fc04fa","src_comp_js_i18n_lang_fr_test_json":"e2c21878dba4df98ef49","src_comp_js_i18n_lang_hu_json":"a91fe85a0e73393c0c19","src_comp_js_i18n_lang_it_json":"6dba226304b6e159beea","src_comp_js_i18n_lang_pl_json":"63b29c3b4c2f5a32e512","src_comp_js_i18n_lang_pt_json":"3276ddf43bda474ceb68","src_comp_js_i18n_lang_ro_json":"2b76490657b5ad3a6a93","src_comp_js_i18n_lang_sk_json":"713618e415ac17fd3f72","src_comp_js_i18n_lang_sr_json":"4f23abd9d61cbec84164","src_comp_js_i18n_lang_tr_json":"124e7cd405ca11d3013b","src_comp_js_i18n_lang_uk_json":"c0a55ef280e78e50e5f2"}[chunkId] + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "as-d:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"game": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkas_d"] = self["webpackChunkas_d"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__(9654); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;