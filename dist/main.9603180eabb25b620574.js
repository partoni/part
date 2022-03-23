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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("let articles = document.querySelector(\".Featured-works__articles\")\r\nlet article = document.querySelectorAll(\".Featured-works__article\")\r\nlet leftArrow = document.querySelector('.arrow-left')\r\nlet rightArrow = document.querySelector('.arrow-right')\r\n\r\n// window.addEventListener('resize',addSlider)\r\n\r\n function addSlider(){\r\n    \r\n    let innerWidth = window.innerWidth;\r\n    let articlesSize = articles.offsetWidth;\r\n    console.log(innerWidth);\r\n    let count=0\r\n     if(innerWidth<700){\r\n        leftArrow.classList.add('icon-arrow-left')\r\n        rightArrow.classList.add('icon-arrow-right')\r\n        articles.style.display = 'flex'\r\n        articles.style.width = innerWidth*article.length+'px'\r\n        article.forEach(item=>item.style.width=articlesSize/article.length+'px')\r\n        \r\n        console.log(article[0].style.width , articles.offsetWidth);\r\n        articles.style.overflow = 'hidden'\r\n        rightArrow.addEventListener('click',function(){\r\n           console.log('нажал');\r\n           if(count<article.length){count++\r\n         articles.style.transform = 'translate(-'+count*innerWidth+'px)'\r\n           }else{\r\n              count=0\r\n              articles.style.transform = 'translate(-'+count*innerWidth+'px)'\r\n           }\r\n        })\r\n     }else{\r\n      leftArrow.classList.remove('icon-arrow-left')\r\n      rightArrow.classList.remove('icon-arrow-right')\r\n        articles.style.display = 'block'\r\n     }\r\n   }\r\n \r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;