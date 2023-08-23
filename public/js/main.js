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

eval("const marquee = document.querySelector('.marquee');\nwindow.addEventListener('load', Marquee('.marquee', 0.2))\nfunction Marquee(selector, speed) {\n  if (marquee) {\n    const parentSelector = document.querySelector(selector);\n    const clone = parentSelector.innerHTML;\n    const firstElement = parentSelector.children[0];\n    let i = 0;\n    parentSelector.insertAdjacentHTML('beforeend', clone);\n    parentSelector.insertAdjacentHTML('beforeend', clone);\n\n    setInterval(function () {\n      firstElement.style.marginLeft = `-${i}px`;\n      if (i > firstElement.clientWidth) {\n        i = 0;\n      }\n      i = i + speed;\n    }, 0);\n  }\n}\n\n\nconst burgerButton = document.querySelector('.header__burger');\nconst menu = document.querySelector('.mobile-menu');\n\nburgerButton.addEventListener('click', function () {\n  burgerButton.classList.toggle('active');\n  menu.classList.toggle('menu--active');\n});\n\nconst tabButtons = document.querySelectorAll('.main-services__link');\nconst tabs = document.querySelectorAll('.main-services__tab');\n\ntabButtons.forEach(button => {\n  button.addEventListener('click', () => {\n    const selectedTab = button.dataset.tab;\n    activateTab(selectedTab);\n  });\n});\n\nfunction activateTab(selectedTab) {\n  tabs.forEach(tab => {\n    if (tab.id === selectedTab.substring(1)) {\n      tab.classList.add('active');\n    } else {\n      tab.classList.remove('active');\n    }\n  });\n\n  tabButtons.forEach(button => {\n    if (button.dataset.tab === selectedTab) {\n      button.classList.add('active');\n    } else {\n      button.classList.remove('active');\n    }\n  });\n}\n// Устанавливаем активный класс для первой кнопки и таба при загрузке страницы\ntabButtons[0].classList.add('active');\ntabs[0].classList.add('active');\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

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