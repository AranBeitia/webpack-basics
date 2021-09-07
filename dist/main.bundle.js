/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

eval("class Car {\n  constructor(brand, color) {\n    this.name = brand\n    this.color = color\n  }\n}\n\nconst bmw = new Car('BMW', 'red')\nconst ford = new Car('Ford', 'blue')\n\n\nconst root = document.getElementById('root')\nroot.innerHTML = `<p>My new car is ${bmw.name} and the color is ${bmw.color}</p>`\nroot.innerHTML += `<p>My new car is ${ford.name} and the color is ${ford.color}</p>`\n\n\n//# sourceURL=webpack://webpack-basics/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.js"]();
/******/ 	
/******/ })()
;