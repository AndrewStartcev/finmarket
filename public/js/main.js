/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("function Marquee(selector, speed) {\r\n  const parentSelector = document.querySelector(selector);\r\n  const clone = parentSelector.innerHTML;\r\n  const firstElement = parentSelector.children[0];\r\n  let i = 0;\r\n  parentSelector.insertAdjacentHTML('beforeend', clone);\r\n  parentSelector.insertAdjacentHTML('beforeend', clone);\r\n\r\n  setInterval(function () {\r\n    firstElement.style.marginLeft = `-${i}px`;\r\n    if (i > firstElement.clientWidth) {\r\n      i = 0;\r\n    }\r\n    i = i + speed;\r\n  }, 0);\r\n}\r\n\r\nwindow.addEventListener('load', Marquee('.marquee', 0.2))\r\n\r\nconst burgerButton = document.querySelector('.header__burger');\r\nconst menu = document.querySelector('.mobile-menu');\r\n\r\nburgerButton.addEventListener('click', function () {\r\n  burgerButton.classList.toggle('active');\r\n  menu.classList.toggle('menu--active');\r\n});\r\n\r\nconst tabButtons = document.querySelectorAll('.main-services__link');\r\nconst tabs = document.querySelectorAll('.main-services__tab');\r\n\r\ntabButtons.forEach(button => {\r\n  button.addEventListener('click', () => {\r\n    const selectedTab = button.dataset.tab;\r\n    activateTab(selectedTab);\r\n  });\r\n});\r\n\r\nfunction activateTab(selectedTab) {\r\n  tabs.forEach(tab => {\r\n    if (tab.id === selectedTab.substring(1)) {\r\n      tab.classList.add('active');\r\n    } else {\r\n      tab.classList.remove('active');\r\n    }\r\n  });\r\n\r\n  tabButtons.forEach(button => {\r\n    if (button.dataset.tab === selectedTab) {\r\n      button.classList.add('active');\r\n    } else {\r\n      button.classList.remove('active');\r\n    }\r\n  });\r\n}\r\n// Устанавливаем активный класс для первой кнопки и таба при загрузке страницы\r\ntabButtons[0].classList.add('active');\r\ntabs[0].classList.add('active');\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;