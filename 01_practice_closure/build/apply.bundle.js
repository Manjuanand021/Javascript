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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** ./closure_apply.js ***!
  \**************************/
/***/ (function(module, exports) {

eval("//Use apply to save the context\r\n//call() and apply() immediately run the function, they return the result of calling that function.\r\nvar cat = {\r\n    name: \"Gus\",\r\n    color: \"gray\",\r\n    age: 15,\r\n\r\n    printInfo: function () {\r\n        console.log(\"Name:\", this.name, \"Color:\", this.color, \"Age:\", this.age);\r\n        nestedFunction = function () {\r\n            console.log(\"Name:\", this.name, \"Color:\", this.color, \"Age:\", this.age);\r\n        }\r\n        return nestedFunction;\r\n    }\r\n}\r\nvar innerFunc = cat.printInfo();\r\ncat.printInfo();\r\nvar refToApply = innerFunc.apply(cat);\r\nconsole.log(refToApply);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Nsb3N1cmVfYXBwbHkuanM/ZGQ2MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1VzZSBhcHBseSB0byBzYXZlIHRoZSBjb250ZXh0XHJcbi8vY2FsbCgpIGFuZCBhcHBseSgpIGltbWVkaWF0ZWx5IHJ1biB0aGUgZnVuY3Rpb24sIHRoZXkgcmV0dXJuIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGF0IGZ1bmN0aW9uLlxyXG52YXIgY2F0ID0ge1xyXG4gICAgbmFtZTogXCJHdXNcIixcclxuICAgIGNvbG9yOiBcImdyYXlcIixcclxuICAgIGFnZTogMTUsXHJcblxyXG4gICAgcHJpbnRJbmZvOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJOYW1lOlwiLCB0aGlzLm5hbWUsIFwiQ29sb3I6XCIsIHRoaXMuY29sb3IsIFwiQWdlOlwiLCB0aGlzLmFnZSk7XHJcbiAgICAgICAgbmVzdGVkRnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTmFtZTpcIiwgdGhpcy5uYW1lLCBcIkNvbG9yOlwiLCB0aGlzLmNvbG9yLCBcIkFnZTpcIiwgdGhpcy5hZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmVzdGVkRnVuY3Rpb247XHJcbiAgICB9XHJcbn1cclxudmFyIGlubmVyRnVuYyA9IGNhdC5wcmludEluZm8oKTtcclxuY2F0LnByaW50SW5mbygpO1xyXG52YXIgcmVmVG9BcHBseSA9IGlubmVyRnVuYy5hcHBseShjYXQpO1xyXG5jb25zb2xlLmxvZyhyZWZUb0FwcGx5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Nsb3N1cmVfYXBwbHkuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);