/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!*************************!*\
  !*** ./closure_bind.js ***!
  \*************************/
/***/ (function(module, exports) {

eval("//Use bind to save the context\r\n//Bind is nifty because it allows you to change what this references \r\n//and then store a reference to the altered function in a variable to be used at a later time\r\nvar cat = {\r\n    name: \"Gus\",\r\n    color: \"gray\",\r\n    age: 15,\r\n\r\n    printInfo: function () {\r\n        console.log(\"Name:\", this.name, \"Color:\", this.color, \"Age:\", this.age);\r\n        nestedFunction = function () {\r\n            console.log(\"Name:\", this.name, \"Color:\", this.color, \"Age:\", this.age);\r\n        }\r\n        return nestedFunction;\r\n    }\r\n}\r\nvar innerFunc = cat.printInfo();\r\ncat.printInfo();\r\nvar refToAlteredFunc = innerFunc.bind(cat);\r\n// console.log(refToAlteredFunc);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Nsb3N1cmVfYmluZC5qcz9iNTlkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vVXNlIGJpbmQgdG8gc2F2ZSB0aGUgY29udGV4dFxyXG4vL0JpbmQgaXMgbmlmdHkgYmVjYXVzZSBpdCBhbGxvd3MgeW91IHRvIGNoYW5nZSB3aGF0IHRoaXMgcmVmZXJlbmNlcyBcclxuLy9hbmQgdGhlbiBzdG9yZSBhIHJlZmVyZW5jZSB0byB0aGUgYWx0ZXJlZCBmdW5jdGlvbiBpbiBhIHZhcmlhYmxlIHRvIGJlIHVzZWQgYXQgYSBsYXRlciB0aW1lXHJcbnZhciBjYXQgPSB7XHJcbiAgICBuYW1lOiBcIkd1c1wiLFxyXG4gICAgY29sb3I6IFwiZ3JheVwiLFxyXG4gICAgYWdlOiAxNSxcclxuXHJcbiAgICBwcmludEluZm86IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5hbWU6XCIsIHRoaXMubmFtZSwgXCJDb2xvcjpcIiwgdGhpcy5jb2xvciwgXCJBZ2U6XCIsIHRoaXMuYWdlKTtcclxuICAgICAgICBuZXN0ZWRGdW5jdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOYW1lOlwiLCB0aGlzLm5hbWUsIFwiQ29sb3I6XCIsIHRoaXMuY29sb3IsIFwiQWdlOlwiLCB0aGlzLmFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXN0ZWRGdW5jdGlvbjtcclxuICAgIH1cclxufVxyXG52YXIgaW5uZXJGdW5jID0gY2F0LnByaW50SW5mbygpO1xyXG5jYXQucHJpbnRJbmZvKCk7XHJcbnZhciByZWZUb0FsdGVyZWRGdW5jID0gaW5uZXJGdW5jLmJpbmQoY2F0KTtcclxuLy8gY29uc29sZS5sb2cocmVmVG9BbHRlcmVkRnVuYyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jbG9zdXJlX2JpbmQuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);