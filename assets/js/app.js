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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let game = document.querySelector(\".game__fields\"),\r\n  res = document.querySelector(\".res\"),\r\n  player = document.querySelector(\".player\"),\r\n  btnGame = document.querySelector(\".new-game\"),\r\n  fields = document.querySelectorAll(\".game__field\"),\r\n  step = false,\r\n  count = 0;\r\n\r\nlet circle = () => {\r\n  if (window.screen.width < 461)\r\n    return `<svg class=\"circle\">\r\n    <circle class=\"three\" r=\"40\" cx=\"55\" cy=\"55\" stroke=\"#5AA1EF\" stroke-width=\"8\" fill=\"none\" stroke-linecap=\"round\" />\r\n  </svg> `;\r\n  if (window.screen.width < 601)\r\n    return `<svg class=\"circle\">\r\n    <circle class=\"three\" r=\"45\" cx=\"70\" cy=\"70\" stroke=\"#5AA1EF\" stroke-width=\"10\" fill=\"none\" stroke-linecap=\"round\" />\r\n  </svg> `;\r\n  if (window.screen.width < 650)\r\n    return `<svg class=\"circle\">\r\n    <circle class=\"three\" r=\"45\" cx=\"85\" cy=\"85\" stroke=\"#5AA1EF\" stroke-width=\"10\" fill=\"none\" stroke-linecap=\"round\" />\r\n  </svg> `;\r\n  else {\r\n    return `<svg class=\"circle\">\r\n    <circle class=\"three\" r=\"45\" cx=\"100\" cy=\"100\" stroke=\"#5AA1EF\" stroke-width=\"10\" fill=\"none\" stroke-linecap=\"round\" />\r\n  </svg> `;\r\n  }\r\n};\r\n\r\nlet cross = () => {\r\n  if (window.screen.width < 461)\r\n    return `<svg class=\"cross\">\r\n\t\t\t\t<line class=\"first\"  x1=\"12\" y1=\"12\" x2=\"97\" y2=\"97\" stroke=\"#EF8240\" stroke-width=\"8\" stroke-linecap=\"round\" />\r\n\t\t\t\t<line class=\"second\"  x1=\"97\" y1=\"12\" x2=\"12\" y2=\"97\" stroke=\"#EF8240\" stroke-width=\"8\" stroke-linecap=\"round\" />\r\n\t\t\t</svg>`;\r\n  if (window.screen.width < 601)\r\n    return `<svg class=\"cross\">\r\n\t\t\t\t<line class=\"first\" x1=\"25\" y1=\"25\" x2=\"110\" y2=\"110\" stroke=\"#EF8240\" stroke-width=\"10\" stroke-linecap=\"round\" />\r\n\t\t\t\t<line class=\"second\" x1=\"110\" y1=\"25\" x2=\"25\" y2=\"110\" stroke=\"#EF8240\" stroke-width=\"10\" stroke-linecap=\"round\" />\r\n\t\t\t</svg>`;\r\n  if (window.screen.width < 650)\r\n    return `<svg class=\"cross\">\r\n\t\t\t\t<line class=\"first\" x1=\"42.5\" y1=\"42.5\" x2=\"127.5\" y2=\"127.5\" stroke=\"#EF8240\" stroke-width=\"10\" stroke-linecap=\"round\" />\r\n\t\t\t\t<line class=\"second\" x1=\"127.5\" y1=\"42.5\" x2=\"42.5\" y2=\"127.5\" stroke=\"#EF8240\" stroke-width=\"10\" stroke-linecap=\"round\" />\r\n\t\t\t</svg>`;\r\n  else {\r\n    return `<svg class=\"cross\">\r\n\t\t\t\t<line class=\"first\" x1=\"50\" y1=\"50\" x2=\"135\" y2=\"135\" stroke=\"#EF8240\" stroke-width=\"10\" stroke-linecap=\"round\" />\r\n\t\t\t\t<line class=\"second\" x1=\"135\" y1=\"50\" x2=\"50\" y2=\"135\" stroke=\"#EF8240\" stroke-width=\"10\" stroke-linecap=\"round\" />\r\n\t\t\t</svg>`;\r\n  }\r\n};\r\n\r\nfunction stepCross(target) {\r\n  if (!target.innerHTML) {\r\n    target.innerHTML = cross();\r\n    target.classList.add(\"x\");\r\n    count++;\r\n    step = !step;\r\n  }\r\n}\r\nfunction stepZero(target) {\r\n  if (!target.innerHTML) {\r\n    target.innerHTML = circle();\r\n    target.classList.add(\"o\");\r\n    count++;\r\n    step = !step;\r\n  }\r\n}\r\n\r\nfunction init(e) {\r\n  if (!step) stepCross(e.target);\r\n  else stepZero(e.target);\r\n  win();\r\n}\r\n\r\nfunction newGame() {\r\n  step = false;\r\n  count = 0;\r\n  res.innerText = \"\";\r\n  fields.forEach((item) => {\r\n    item.innerHTML = \"\";\r\n    item.classList.remove(\"x\", \"o\", \"active\");\r\n  });\r\n  game.addEventListener(\"click\", init);\r\n}\r\n\r\nfunction win() {\r\n  let comb = [\r\n    [0, 1, 2],\r\n    [3, 4, 5],\r\n    [6, 7, 8],\r\n    [0, 3, 6],\r\n    [1, 4, 7],\r\n    [2, 5, 8],\r\n    [0, 4, 8],\r\n    [2, 4, 6],\r\n  ];\r\n\r\n  for (let i = 0; i < comb.length; i++) {\r\n    if (\r\n      fields[comb[i][0]].classList.contains(\"x\") &&\r\n      fields[comb[i][1]].classList.contains(\"x\") &&\r\n      fields[comb[i][2]].classList.contains(\"x\")\r\n    ) {\r\n      setTimeout(() => {\r\n        fields[comb[i][0]].classList.add(\"active\");\r\n        fields[comb[i][1]].classList.add(\"active\");\r\n        fields[comb[i][2]].classList.add(\"active\");\r\n        res.innerText = \"X\";\r\n      }, 1500);\r\n      game.removeEventListener(\"click\", init);\r\n    } else if (\r\n      fields[comb[i][0]].classList.contains(\"o\") &&\r\n      fields[comb[i][1]].classList.contains(\"o\") &&\r\n      fields[comb[i][2]].classList.contains(\"o\")\r\n    ) {\r\n      setTimeout(() => {\r\n        fields[comb[i][0]].classList.add(\"active\");\r\n        fields[comb[i][1]].classList.add(\"active\");\r\n        fields[comb[i][2]].classList.add(\"active\");\r\n        res.innerText = \"O\";\r\n      }, 1500);\r\n      game.removeEventListener(\"click\", init);\r\n    } else if (count == 9) {\r\n      res.innerText = \"Ничья\";\r\n      game.removeEventListener(\"click\", init);\r\n    }\r\n  }\r\n}\r\n\r\nbtnGame.addEventListener(\"click\", newGame);\r\ngame.addEventListener(\"click\", init);\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });