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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/* unknown exports provided */
/* all exports used */
/*!*************************!*\
  !*** ./closure_call.js ***!
  \*************************/
/***/ (function(module, exports) {

eval("//Use call to save the context\r\n//call() and apply() immediately run the function, they return the result of calling that function.\r\nvar cat = {\r\n    name: \"Gus\",\r\n    color: \"gray\",\r\n    age: 15,\r\n\r\n    printInfo: function () {\r\n        console.log(\"Name:\", this.name, \"Color:\", this.color, \"Age:\", this.age);\r\n        nestedFunction = function () {\r\n            console.log(\"Name:\", this.name, \"Color:\", this.color, \"Age:\", this.age);\r\n        }\r\n        return nestedFunction;\r\n    }\r\n}\r\nvar innerFunc = cat.printInfo();\r\ncat.printInfo();\r\nvar refToCall = innerFunc.call(cat);\r\nconsole.log(refToCall);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Nsb3N1cmVfY2FsbC5qcz8yODk1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vVXNlIGNhbGwgdG8gc2F2ZSB0aGUgY29udGV4dFxyXG4vL2NhbGwoKSBhbmQgYXBwbHkoKSBpbW1lZGlhdGVseSBydW4gdGhlIGZ1bmN0aW9uLCB0aGV5IHJldHVybiB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhhdCBmdW5jdGlvbi5cclxudmFyIGNhdCA9IHtcclxuICAgIG5hbWU6IFwiR3VzXCIsXHJcbiAgICBjb2xvcjogXCJncmF5XCIsXHJcbiAgICBhZ2U6IDE1LFxyXG5cclxuICAgIHByaW50SW5mbzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmFtZTpcIiwgdGhpcy5uYW1lLCBcIkNvbG9yOlwiLCB0aGlzLmNvbG9yLCBcIkFnZTpcIiwgdGhpcy5hZ2UpO1xyXG4gICAgICAgIG5lc3RlZEZ1bmN0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5hbWU6XCIsIHRoaXMubmFtZSwgXCJDb2xvcjpcIiwgdGhpcy5jb2xvciwgXCJBZ2U6XCIsIHRoaXMuYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5lc3RlZEZ1bmN0aW9uO1xyXG4gICAgfVxyXG59XHJcbnZhciBpbm5lckZ1bmMgPSBjYXQucHJpbnRJbmZvKCk7XHJcbmNhdC5wcmludEluZm8oKTtcclxudmFyIHJlZlRvQ2FsbCA9IGlubmVyRnVuYy5jYWxsKGNhdCk7XHJcbmNvbnNvbGUubG9nKHJlZlRvQ2FsbCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jbG9zdXJlX2NhbGwuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

/******/ });