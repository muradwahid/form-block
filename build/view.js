/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../bpl-tools/Advanced/generateCSS.js":
/*!********************************************!*\
  !*** ../bpl-tools/Advanced/generateCSS.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animationFn: () => (/* binding */ animationFn),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   generateCSS: () => (/* binding */ generateCSS)
/* harmony export */ });
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "../bpl-tools/utils/common.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/data */ "../bpl-tools/utils/data.js");
/* harmony import */ var _utils_getCSS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getCSS */ "../bpl-tools/utils/getCSS.js");



const dimensionCSS = dimension => {
  const {
    padding,
    margin,
    height,
    width
  } = dimension || {};
  const hwCSS = (p, v) => (0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)(p, v);
  const heightWidthCSS = (type, obj, d) => hwCSS(type, obj?.[type]?.[d]) + hwCSS(`min-${type}`, obj?.min?.[d]) + hwCSS(`max-${type}`, obj?.max?.[d]);
  const pCSS = p => (0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('padding', (0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBoxCSS)(p));
  const mCSS = m => (0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('margin', (0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBoxCSS)(m));
  return {
    desktop: pCSS(padding?.desktop) + mCSS(margin?.desktop) + heightWidthCSS('height', height, 'desktop') + heightWidthCSS('width', width, 'desktop'),
    tablet: pCSS(padding?.tablet) + mCSS(margin?.tablet) + heightWidthCSS('height', height, 'tablet') + heightWidthCSS('width', width, 'tablet'),
    mobile: pCSS(padding?.mobile) + mCSS(margin?.mobile) + heightWidthCSS('height', height, 'mobile') + heightWidthCSS('width', width, 'mobile')
  };
};
const borderShadowCSS = borderShadow => {
  const {
    normal,
    hover
  } = borderShadow || {};
  const stateGenerate = state => {
    const {
      border,
      radius,
      shadow
    } = state || {};
    const radiusCSS = (0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('border-radius', (0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBoxCSS)(radius));
    const shadowCSS = (0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('box-shadow', (0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getMultiShadowCSS)(shadow, 'box'));
    return (0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBorderBoxCSS)(border) + radiusCSS + shadowCSS;
  };
  return {
    normal: stateGenerate(normal),
    hover: stateGenerate(hover)
  };
};
const visibilityCSS = visibility => {
  const {
    zIndex,
    overflow
  } = visibility || {};
  const overflowCSS = overflow ? `overflow: ${overflow};` : '';
  const zIndexCSS = device => `${(0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('z-index', zIndex?.[device])} ${(0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('position', (0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.isExist)(zIndex?.[device]) ? 'relative' : '')}`;
  return {
    desktop: zIndexCSS('desktop') + overflowCSS,
    tablet: zIndexCSS('tablet'),
    mobile: zIndexCSS('mobile')
  };
};
const responsiveCSS = (responsive, isBackend) => {
  const {
    desktop = false,
    tablet = false,
    mobile = false
  } = responsive || {};
  const css = isBackend ? 'opacity: 0.5;' : 'display: none;';
  const resCSS = val => val ? css : '';
  return {
    desktop: resCSS(desktop),
    tablet: resCSS(tablet),
    mobile: resCSS(mobile)
  };
};
const transitionCSS = (background, borderShadow, transform) => {
  const {
    transition: bgT = 0.4
  } = background || {};
  const {
    transition: bsT = 0.4
  } = borderShadow || {};
  const {
    transition: tfT = 200
  } = transform || {};
  return `transition: background ${bgT}s, border ${bsT}s, border-radius ${bsT}s, box-shadow ${bsT}s, transform ${tfT}ms ease-in-out;`;
};

// export const animationFn = (animation, id,isBackend) => {
// 	const selector = isBackend?`#${id} > div`:`$#${id}`;
// 	const element = document.querySelector(selector);
// 	if (element && animation && animation?.type) {
// 		element.setAttribute('data-aos', animation.type);
// 		element.setAttribute('data-aos-duration', animation.duration || 0.4);
// 		element.setAttribute('data-aos-delay', animation.delay || 0);
// 	}
// }
const animationFn = (animation, id, isBackend) => {
  const selector = isBackend ? `#${id} > div` : `#${id}`;
  const element = document.querySelector(selector);
  if (element && animation && animation.type) {
    element.setAttribute('data-aos', animation.type);
    element.setAttribute('data-aos-duration', animation.duration * 1000 || 0.4);
    element.setAttribute('data-aos-delay', animation.delay * 1000 || 0);
    if (!element.classList.contains('aos-init')) {
      element.classList.add('aos-init');
      window?.AOS?.init();
    }
    if (isBackend) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0.5) {
            element.classList.add('aos-animate');
          } else {
            element.classList.remove('aos-animate');
          }
        });
      }, {
        threshold: [0.5]
      });
      observer.observe(element);
    }
  }
};
const generateCSS = (id, advanced, isBackend = false, isFirstChild = true) => {
  const {
    dimension,
    transform,
    background,
    borderShadow,
    mask,
    animation,
    visibility,
    responsive,
    css = ''
  } = advanced || {};
  const selector = isBackend ? `#${id}>div>div${isFirstChild ? ':first-child' : ''}` : `#${id}>div`;

  // !isBackend && animationFn(animation, id);
  animationFn(animation, id, isBackend);
  const dCSS = dimensionCSS(dimension).desktop + visibilityCSS(visibility).desktop + transitionCSS(background, borderShadow, transform) + (0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getMaskCSS)(mask);
  const tCSS = dimensionCSS(dimension).tablet + visibilityCSS(visibility).tablet + responsiveCSS(responsive, isBackend).tablet;
  const mCSS = dimensionCSS(dimension).mobile + visibilityCSS(visibility).mobile + responsiveCSS(responsive, isBackend).mobile;
  const nCSS = borderShadowCSS(borderShadow).normal;
  const hCSS = borderShadowCSS(borderShadow).hover;
  const resCSS = responsiveCSS(responsive, isBackend).desktop;
  return `
		${dCSS || nCSS ? `${selector} {
			${dCSS}
			${nCSS}
		}` : ''}
		${hCSS ? `${selector}:hover {
			${hCSS}
		}` : ''}

		${resCSS ? `${_utils_data__WEBPACK_IMPORTED_MODULE_1__.deskBreakpoint} {
			${selector}{
				${resCSS}
			}
		}` : ''}

		${tCSS ? `${_utils_data__WEBPACK_IMPORTED_MODULE_1__.tabBreakpoint} {
			${selector}{
				${tCSS}
			}
		}` : ''}

		${mCSS ? `${_utils_data__WEBPACK_IMPORTED_MODULE_1__.mobileBreakpoint} {
			${selector}{
				${mCSS}
			}
		}` : ''}

		${(0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getAdvBGCSS)(background?.normal, selector)}
		${(0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getAdvBGCSS)(background?.hover, selector, true)}
		${(0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getOverlayCSS)(background?.overlay, selector)}
		${(0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getOverlayCSS)(background?.hoverOverlay, selector, true)}
		${(0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.isExist)(transform?.normal) ? (0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getTransformCSS)(transform?.normal, selector) : ''}
		${(0,_utils_common__WEBPACK_IMPORTED_MODULE_0__.isExist)(transform?.hover) ? (0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getTransformCSS)(transform?.hover, selector, true) : ''}

		${css}
	`.replace(/\s+/g, ' ');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateCSS);

/***/ }),

/***/ "../bpl-tools/Components/Mask/assets/shapes/blob.svg":
/*!***********************************************************!*\
  !*** ../bpl-tools/Components/Mask/assets/shapes/blob.svg ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgBlob),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgBlob = function SvgBlob(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 121,
    height: 89
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M100.016 7.397c-9.77-6.177-26.708-11.063-35.59-3.684-7.442 6.177-2.38 15.204-9.416 21.59-10.6 9.614-28.159-5.442-41.858 2.632C.676 35.255-4.28 59.149 4.278 73.798c13.137 22.524 53.13 13.854 61.194 12.106 4.5-.993 53.495-12.265 55.469-42.705.957-14.946-9.841-28.78-20.925-35.802"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjEuMDAwMiIgaGVpZ2h0PSI4OSIgdmlld0JveD0iMCAwIDEyMS4wMDAyIDg5Ij48cGF0aCBkPSJNMTAwLjAxNiw3LjM5NzJDOTAuMjQ1MiwxLjIyLDczLjMwODQtMy42NjYzLDY0LjQyNTUsMy43MTI2LDU2Ljk4MzYsOS44OSw2Mi4wNDY5LDE4LjkxNzQsNTUuMDEsMjUuMzAzMmMtMTAuNiw5LjYxMzQtMjguMTU4OS01LjQ0MjMtNDEuODU4NCwyLjYzMThDLjY3NTcsMzUuMjU0My00LjI3OTEsNTkuMTQ4OSw0LjI3ODEsNzMuNzk3NWMxMy4xMzY5LDIyLjUyNCw1My4xMywxMy44NTQxLDYxLjE5MzYsMTIuMTA2MSw0LjUwMDctLjk5MzEsNTMuNDk1My0xMi4yNjUsNTUuNDY5My00Mi43MDQzQzEyMS44OTgsMjguMjUyOCwxMTEuMSwxNC40MTg1LDEwMC4wMTYsNy4zOTcyWiIvPjwvc3ZnPg==");

/***/ }),

/***/ "../bpl-tools/Components/Mask/assets/shapes/circle.svg":
/*!*************************************************************!*\
  !*** ../bpl-tools/Components/Mask/assets/shapes/circle.svg ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgCircle),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _circle;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgCircle = function SvgCircle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 89,
    height: 89
  }, props), _circle || (_circle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    cx: 44.5,
    cy: 44.5,
    r: 44.5
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4OSIgaGVpZ2h0PSI4OSIgdmlld0JveD0iMCAwIDg5IDg5Ij48Y2lyY2xlIGN4PSI0NC41IiBjeT0iNDQuNSIgcj0iNDQuNSIvPjwvc3ZnPg==");

/***/ }),

/***/ "../bpl-tools/Components/Mask/assets/shapes/flower.svg":
/*!*************************************************************!*\
  !*** ../bpl-tools/Components/Mask/assets/shapes/flower.svg ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgFlower),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgFlower = function SvgFlower(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 89,
    height: 89
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m76.133 44.475 6.33-6.328a22.349 22.349 0 0 0-31.613-31.6l-6.318 6.318-6.372-6.318a22.352 22.352 0 1 0-31.612 31.61l6.318 6.318-6.318 6.372a22.352 22.352 0 0 0 31.612 31.61l6.318-6.318 6.372 6.253a22.349 22.349 0 0 0 31.612-31.6Z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4OSIgaGVpZ2h0PSI4OSIgdmlld0JveD0iMCAwIDg5IDg5Ij48cGF0aCBkPSJNNzYuMTMzMiw0NC40NzUybDYuMzI4OS02LjMyODVBMjIuMzQ4NiwyMi4zNDg2LDAsMCwwLDUwLjg1LDYuNTQ3NEw0NC41MzIsMTIuODY1MSwzOC4xNiw2LjU0NzRhMjIuMzUyNCwyMi4zNTI0LDAsMSwwLTMxLjYxMiwzMS42MWw2LjMxODEsNi4zMTc3TDYuNTQ3OCw1MC44NDdhMjIuMzUyNCwyMi4zNTI0LDAsMCwwLDMxLjYxMiwzMS42MWw2LjMxODEtNi4zMTc3TDUwLjg1LDgyLjM5MjJhMjIuMzQ4NiwyMi4zNDg2LDAsMCwwLDMxLjYxMi0zMS41OTkzWiIvPjwvc3ZnPg==");

/***/ }),

/***/ "../bpl-tools/Components/Mask/assets/shapes/hexagon.svg":
/*!**************************************************************!*\
  !*** ../bpl-tools/Components/Mask/assets/shapes/hexagon.svg ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgHexagon),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgHexagon = function SvgHexagon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 103,
    height: 89
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M77.211 0H25.752L0 44.505 25.752 89h51.46L103 44.505ZM61.77 62.261H41.222L30.939 44.504 41.222 26.74h20.547l10.283 17.766Z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDMiIGhlaWdodD0iODkiIHZpZXdCb3g9IjAgMCAxMDMgODkiPjxwYXRoIGQ9Ik03Ny4yMTE0LDBIMjUuNzUyM0wwLDQ0LjUwNDUsMjUuNzUyMyw4OUg3Ny4yMTE0TDEwMyw0NC41MDQ1Wk02MS43NjkxLDYyLjI2MUg0MS4yMjE4TDMwLjkzOTEsNDQuNTA0NSw0MS4yMjE4LDI2LjczOUg2MS43NjkxTDcyLjA1MTksNDQuNTA0NVoiLz48L3N2Zz4=");

/***/ }),

/***/ "../bpl-tools/Components/Mask/assets/shapes/sketch.svg":
/*!*************************************************************!*\
  !*** ../bpl-tools/Components/Mask/assets/shapes/sketch.svg ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgSketch),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgSketch = function SvgSketch(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 91.114,
    height: 89
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m82.175 37.527 1.612-1.612c.948-.949-6.37-5.931-7.05-6.378a45 45 0 0 0-5.776-3.325c-.247-.115-.602-.3-.987-.478q1.781-1.897 3.586-3.771c.949-.98-6.363-5.923-7.05-6.37a44 44 0 0 0-5.76-3.332l-.293-.147 1.396-1.542c.94-1.05-6.332-5.9-7.05-6.37a44 44 0 0 0-5.76-3.34c-.54-.247-2.314-1.265-2.847-.687q-13.458 14.993-28.08 28.891c-7.844 7.45-16.567 15.58-18.11 26.87-.115.825 1.327 1.974 1.744 2.314a41 41 0 0 0 5.314 4.057 44 44 0 0 0 5.76 3.34c.64.293 2.176 1.203 2.847.686l2.074-1.558c1.45 1.859 5.97 4.72 6.671 5.175l1.489.956a257 257 0 0 0-4.435 5.622c-.91 1.188 6.263 5.862 7.05 6.37a44 44 0 0 0 5.76 3.332c.602.278 2.23 1.234 2.846.694l9.255-8.098c.825 2.568 14.569 11.63 15.672 9.972L91.06 45.362c.632-.948-4.335-5.036-8.885-7.835"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MS4xMTQzIiBoZWlnaHQ9Ijg4Ljk5OTkiIHZpZXdCb3g9IjAgMCA5MS4xMTQzIDg4Ljk5OTkiPjxwYXRoIGQ9Ik04Mi4xNzQ5LDM3LjUyNjZsMS42MTE5LTEuNjExOWMuOTQ4Ni0uOTQ4Ny02LjM3LTUuOTMwOS03LjA0OTItNi4zNzgyYTQ1LjE1MTYsNDUuMTUxNiwwLDAsMC01Ljc3NjYtMy4zMjQxYy0uMjQ2OC0uMTE1Ny0uNjAxNi0uMzAwOC0uOTg3Mi0uNDc4MnExLjc4MTYtMS44OTcyLDMuNTg2My0zLjc3MTNjLjk0ODYtLjk4LTYuMzYyOC01LjkyMzItNy4wNDkyLTYuMzcwNUE0NC4xNTc5LDQ0LjE1NzksMCwwLDAsNjAuNzUsMTIuMjYwNmwtLjI5My0uMTQ2NSwxLjM5NTktMS41NDI1Yy45NDA5LTEuMDQ4OS02LjMzMTktNS45LTcuMDQ5Mi02LjM3QTQ0LjIxMiw0NC4yMTIsMCwwLDAsNDkuMDQyMi44NjE2Yy0uNTQtLjI0NjctMi4zMTM3LTEuMjY0OC0yLjg0NTgtLjY4NjRRMzIuNzM4MSwxNS4xNjgyLDE4LjExNTQsMjkuMDY2Yy03Ljg0MzYsNy40NS0xNi41NjYzLDE1LjU3OTEtMTguMTA4OCwyNi44Ny0uMTE1Ny44MjUzLDEuMzI2NSwxLjk3NDQsMS43NDMsMi4zMTM4YTQwLjc5OSw0MC43OTksMCwwLDAsNS4zMTM5LDQuMDU2Nyw0NC4yMTc0LDQ0LjIxNzQsMCwwLDAsNS43NjExLDMuMzRjLjY0LjI5MzEsMi4xNzUsMS4yMDMxLDIuODQ1OS42ODY0bDIuMDc0Ny0xLjU1NzljMS40NSwxLjg1ODcsNS45Njk0LDQuNzIsNi42NzEyLDUuMTc1bDEuNDg4NS45NTY0QzI0LjQwMSw3Mi43NjQ3LDIyLjkyLDc0LjYzMTEsMjEuNDcsNzYuNTI4M2MtLjkxLDEuMTg3OCw2LjI2MjUsNS44NjE1LDcuMDQ5Miw2LjM3YTQ0LjE2MzMsNDQuMTYzMywwLDAsMCw1Ljc2MTEsMy4zMzE4Yy42MDE2LjI3NzYsMi4yMjg5LDEuMjM0LDIuODQ1OS42OTQxbDkuMjU1LTguMDk4Yy44MjUyLDIuNTY4MiwxNC41Njg3LDExLjYzLDE1LjY3MTYsOS45NzIxTDkxLjA2LDQ1LjM2MjRDOTEuNjkyLDQ0LjQxMzgsODYuNzI1Miw0MC4zMjYyLDgyLjE3NDksMzcuNTI2NloiLz48L3N2Zz4=");

/***/ }),

/***/ "../bpl-tools/Components/Mask/assets/shapes/triangle.svg":
/*!***************************************************************!*\
  !*** ../bpl-tools/Components/Mask/assets/shapes/triangle.svg ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgTriangle),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgTriangle = function SvgTriangle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 103,
    height: 89
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M77.255 44.505 51.5 0 25.755 44.505 0 89h103z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDMiIGhlaWdodD0iODkiIHZpZXdCb3g9IjAgMCAxMDMgODkiPjxwb2x5Z29uIHBvaW50cz0iNzcuMjU1IDQ0LjUwNSA1MS41IDAgMjUuNzU1IDQ0LjUwNSAwIDg5IDUxLjUgODkgMTAzIDg5IDc3LjI1NSA0NC41MDUiLz48L3N2Zz4=");

/***/ }),

/***/ "../bpl-tools/utils/common.js":
/*!************************************!*\
  !*** ../bpl-tools/utils/common.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SVGSanitizer: () => (/* binding */ SVGSanitizer),
/* harmony export */   escapeHTML: () => (/* binding */ escapeHTML),
/* harmony export */   isExist: () => (/* binding */ isExist),
/* harmony export */   sanitizeHTML: () => (/* binding */ sanitizeHTML),
/* harmony export */   sanitizeInput: () => (/* binding */ sanitizeInput),
/* harmony export */   sanitizeURL: () => (/* binding */ sanitizeURL)
/* harmony export */ });
const isExist = value => {
  if (value === undefined || value === null || value === '') {
    return false;
  }
  if (Array.isArray(value) && value.length === 0) {
    return false;
  }
  if (typeof value === 'object' && Object.keys(value).length === 0) {
    return false;
  }
  if (typeof value === 'string' && value.trim() === '') {
    return false;
  }
  if (typeof value === 'number' && value === 0) {
    return false;
  }
  return true;
};
const escapeHTML = (input = '') => {
  if (!input) {
    return '';
  }

  // Regular expression to match all HTML tags and their attributes
  return input?.replace(/<([a-z][a-z0-9]*)\b([^>]*)>/gi, (match, tagName, attrs) => {
    // List of allowed tags and their attributes
    const allowedTags = ['b', 'strong', 'i', 'em', 'span', 'a', 'br'];
    const allowedAttrs = ['style', 'href', 'target', 'rel', 'class'];

    // If the tag is allowed, keep it, but sanitize its attributes
    if (allowedTags.includes(tagName.toLowerCase())) {
      // Process the tag's attributes
      const sanitizedAttrs = attrs.replace(/([a-z0-9-]+)=["'][^"']*["']/gi, (attrMatch, attrName) => {
        // Only keep allowed attributes
        if (allowedAttrs.includes(attrName.toLowerCase())) {
          return attrMatch; // Keep allowed attributes as they are
        }
        return ''; // Remove any other attributes
      });
      return `<${tagName}${sanitizedAttrs}>`;
    }
    return match?.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  });
};
const sanitizeURL = inputUrl => {
  try {
    const url = new URL(inputUrl);

    // 1. Check for safe protocols
    if (!['http:', 'https:'].includes(url.protocol)) {
      return null;
    } else {
      // 2. Strip query and fragment for safety
      // url.search = '';
      // url.hash = '';

      return url.toString();
    }
  } catch (err) {
    if (typeof inputUrl === 'string' && inputUrl.startsWith('/') && !inputUrl.startsWith('//')) {
      return inputUrl;
    } else {
      return null;
    }
  }
};
const sanitizeHTML = input => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(input, 'text/html');
  const allowedTags = ['b', 'strong', 'i', 'em', 'span', 'a', 'br'];
  const allowedAttrs = ['style', 'href', 'target', 'rel', 'class'];
  doc.body.querySelectorAll('*').forEach(node => {
    // Remove disallowed tags
    if (!allowedTags.includes(node.tagName.toLowerCase())) {
      node.remove();
      return;
    }

    // Loop through attributes and sanitize
    [...node.attributes].forEach(attr => {
      if (!allowedAttrs.includes(attr.name)) {
        node.removeAttribute(attr.name);
      }

      // if (attr.name === 'href' && attr.value.trim().toLowerCase().startsWith('javascript:')) {
      // 	node.removeAttribute('href');
      // }

      if (attr.name === 'href') {
        const sanitizeHref = sanitizeURL(attr.value);
        if (sanitizeHref) {
          node.setAttribute('href', sanitizeHref);
        } else {
          node.removeAttribute('href');
        }
      }
    });
  });
  return doc.body.innerHTML;
};
const sanitizeInput = input => {
  return input.replace(/[<>]/g, '').replace(/javascript:/gi, '').replace(/on\w+=/gi, '').trim();
};

//-------- Sanitize SVG ----------//
class SVGSanitizer {
  constructor(options = {}) {
    this.defaultOptions = {
      allowedTags: ['svg', 'g', 'path', 'rect', 'circle', 'ellipse', 'line', 'polyline', 'polygon', 'text', 'tspan', 'defs', 'clipPath', 'mask', 'linearGradient', 'radialGradient', 'stop', 'style', 'title', 'desc'],
      allowedAttributes: ['id', 'class', 'style', 'transform', 'd', 'x', 'y', 'width', 'height', 'cx', 'cy', 'r', 'rx', 'ry', 'points', 'x1', 'y1', 'x2', 'y2', 'fill', 'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'opacity', 'fill-opacity', 'stroke-opacity', 'viewBox', 'preserveAspectRatio', 'xmlns', 'xmlns:xlink'],
      allowedProtocols: ['http', 'https', 'data'],
      removeScripts: true,
      removeEvents: true,
      removeExternalResources: true,
      sanitizeStyle: true
    };
    this.options = {
      ...this.defaultOptions,
      ...options
    };
  }
  sanitize(svgString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgString, 'image/svg+xml');
    this.removeScripts(doc);
    this.sanitizeElements(doc);
    const serializer = new XMLSerializer();
    return serializer.serializeToString(doc.documentElement);
  }

  // ✅ New method: sanitize from File object
  async sanitizeFile(file) {
    const response = await fetch(file);
    const svgText = await response.text();
    // console.log(svgText)
    return this.sanitize(`${svgText}`);
    // return "";
  }
  removeScripts(doc) {
    if (this.options.removeScripts) {
      const scripts = doc.querySelectorAll('script');
      scripts.forEach(script => script.remove());
      const allElements = doc.querySelectorAll('*');
      allElements.forEach(el => {
        if (el.tagName.toLowerCase().includes('script')) {
          el.remove();
        }
      });
    }
  }
  sanitizeElements(doc) {
    const allElements = doc.querySelectorAll('*');
    allElements.forEach(element => {
      const tagName = element.tagName.toLowerCase();
      if (!this.options.allowedTags.includes(tagName)) {
        element.remove();
        return;
      }
      this.sanitizeAttributes(element);
    });
  }
  sanitizeAttributes(element) {
    const attributes = Array.from(element.attributes);
    attributes.forEach(attr => {
      const attrName = attr.name.toLowerCase();
      const attrValue = attr.value;
      if (this.options.removeEvents && attrName.startsWith('on')) {
        element.removeAttribute(attrName);
        return;
      }
      if (this.options.removeExternalResources) {
        if ((attrName === 'href' || attrName === 'xlink:href') && !this.isAllowedUrl(attrValue)) {
          element.removeAttribute(attrName);
          return;
        }
      }
      const baseAttrName = attrName.replace('xlink:', '');
      if (!this.options.allowedAttributes.includes(baseAttrName)) {
        element.removeAttribute(attrName);
        return;
      }
      if (attrName === 'style' && this.options.sanitizeStyle) {
        this.sanitizeStyleAttribute(element, attrValue);
      }
    });
  }
  isAllowedUrl(url) {
    if (url.startsWith('data:') || url.startsWith('#')) {
      return true;
    }
    try {
      const parsedUrl = new URL(url);
      return this.options.allowedProtocols.includes(parsedUrl.protocol.replace(':', ''));
    } catch {
      return false;
    }
  }
  sanitizeStyleAttribute(element, styleValue) {
    const safeStyle = styleValue.replace(/expression\(|javascript:|url\(javascript:/gi, '').replace(/behavior\s*:/gi, '').replace(/binding\s*:/gi, '');
    element.setAttribute('style', safeStyle);
  }
}

/***/ }),

/***/ "../bpl-tools/utils/data.js":
/*!**********************************!*\
  !*** ../bpl-tools/utils/data.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentColor: () => (/* binding */ contentColor),
/* harmony export */   deskBreakpoint: () => (/* binding */ deskBreakpoint),
/* harmony export */   gradient: () => (/* binding */ gradient),
/* harmony export */   mobileBreakpoint: () => (/* binding */ mobileBreakpoint),
/* harmony export */   primaryColor: () => (/* binding */ primaryColor),
/* harmony export */   primaryColor100: () => (/* binding */ primaryColor100),
/* harmony export */   primaryColor1000: () => (/* binding */ primaryColor1000),
/* harmony export */   primaryColor200: () => (/* binding */ primaryColor200),
/* harmony export */   primaryColor300: () => (/* binding */ primaryColor300),
/* harmony export */   primaryColor400: () => (/* binding */ primaryColor400),
/* harmony export */   primaryColor500: () => (/* binding */ primaryColor500),
/* harmony export */   primaryColor600: () => (/* binding */ primaryColor600),
/* harmony export */   primaryColor700: () => (/* binding */ primaryColor700),
/* harmony export */   primaryColor800: () => (/* binding */ primaryColor800),
/* harmony export */   primaryColor900: () => (/* binding */ primaryColor900),
/* harmony export */   secondaryColor: () => (/* binding */ secondaryColor),
/* harmony export */   tabBreakpoint: () => (/* binding */ tabBreakpoint),
/* harmony export */   titleColor: () => (/* binding */ titleColor)
/* harmony export */ });
const deskBreakpoint = '@media only screen and (min-width: 1025px)';
const tabBreakpoint = '@media only screen and (max-width: 1024px)';
const mobileBreakpoint = '@media only screen and (max-width: 640px)';
const primaryColor = '#146EF5';
const primaryColor100 = '#e7f0fe';
const primaryColor200 = '#b6d2fc';
const primaryColor300 = '#85b4fa';
const primaryColor400 = '#5495f8';
const primaryColor500 = '#2377f6';
const primaryColor600 = '#095edc';
const primaryColor700 = '#0749ab';
const primaryColor800 = '#05347a';
const primaryColor900 = '#031f49';
const primaryColor1000 = '#010a18';
const secondaryColor = '#FF7A00';
const titleColor = '#070127';
const contentColor = '#485781';
const gradient = 'linear-gradient(135deg, #0040E3, #18D4FD)';

/***/ }),

/***/ "../bpl-tools/utils/getCSS.js":
/*!************************************!*\
  !*** ../bpl-tools/utils/getCSS.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAdvBGCSS: () => (/* binding */ getAdvBGCSS),
/* harmony export */   getBackgroundCSS: () => (/* binding */ getBackgroundCSS),
/* harmony export */   getBorderBoxCSS: () => (/* binding */ getBorderBoxCSS),
/* harmony export */   getBorderCSS: () => (/* binding */ getBorderCSS),
/* harmony export */   getBoxCSS: () => (/* binding */ getBoxCSS),
/* harmony export */   getColorsCSS: () => (/* binding */ getColorsCSS),
/* harmony export */   getGradientCSS: () => (/* binding */ getGradientCSS),
/* harmony export */   getIconCSS: () => (/* binding */ getIconCSS),
/* harmony export */   getMaskCSS: () => (/* binding */ getMaskCSS),
/* harmony export */   getMultiShadowCSS: () => (/* binding */ getMultiShadowCSS),
/* harmony export */   getOverlayCSS: () => (/* binding */ getOverlayCSS),
/* harmony export */   getSeparatorCSS: () => (/* binding */ getSeparatorCSS),
/* harmony export */   getShadowCSS: () => (/* binding */ getShadowCSS),
/* harmony export */   getSpaceCSS: () => (/* binding */ getSpaceCSS),
/* harmony export */   getTransformCSS: () => (/* binding */ getTransformCSS),
/* harmony export */   getTypoCSS: () => (/* binding */ getTypoCSS),
/* harmony export */   isValidCSS: () => (/* binding */ isValidCSS)
/* harmony export */ });
/* harmony import */ var _Components_Mask_assets_shapes_blob_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/Mask/assets/shapes/blob.svg */ "../bpl-tools/Components/Mask/assets/shapes/blob.svg");
/* harmony import */ var _Components_Mask_assets_shapes_circle_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Mask/assets/shapes/circle.svg */ "../bpl-tools/Components/Mask/assets/shapes/circle.svg");
/* harmony import */ var _Components_Mask_assets_shapes_flower_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Mask/assets/shapes/flower.svg */ "../bpl-tools/Components/Mask/assets/shapes/flower.svg");
/* harmony import */ var _Components_Mask_assets_shapes_hexagon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Mask/assets/shapes/hexagon.svg */ "../bpl-tools/Components/Mask/assets/shapes/hexagon.svg");
/* harmony import */ var _Components_Mask_assets_shapes_sketch_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Mask/assets/shapes/sketch.svg */ "../bpl-tools/Components/Mask/assets/shapes/sketch.svg");
/* harmony import */ var _Components_Mask_assets_shapes_triangle_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Mask/assets/shapes/triangle.svg */ "../bpl-tools/Components/Mask/assets/shapes/triangle.svg");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common */ "../bpl-tools/utils/common.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data */ "../bpl-tools/utils/data.js");








const isValidCSS = (p, v) => (0,_common__WEBPACK_IMPORTED_MODULE_6__.isExist)(v) ? `${p}: ${v};` : '';
const getBackgroundCSS = (bg, isSolid = true, isGradient = true, isImage = true) => {
  const {
    type = 'solid',
    color = '',
    gradient = _data__WEBPACK_IMPORTED_MODULE_7__.gradient,
    image = {},
    position = 'center center',
    attachment = '',
    repeat = 'no-repeat',
    size = '',
    overlayColor = ''
  } = bg || {};
  const styles = 'gradient' === type && isGradient ? isValidCSS('background', gradient) : 'image' === type && isImage ? `background: url(${image?.url});
				${isValidCSS('background-color', overlayColor)}
				${isValidCSS('background-position', position)}
				${isValidCSS('background-size', size)}
				${isValidCSS('background-repeat', repeat)}
				${isValidCSS('background-attachment', attachment)}
				${isValidCSS('background-repeat', repeat)}
				background-blend-mode: overlay;` : isSolid && isValidCSS('background', color);
  return styles;
};
const getBorderCSS = border => {
  const {
    width = '',
    style = 'solid',
    color = '',
    side = 'all',
    radius = ''
  } = border || {};
  const borderSideCheck = s => {
    const bSide = side?.toLowerCase();
    return bSide?.includes('all') || bSide?.includes(s);
  };
  const borderCSS = `${width} ${style} ${color}`;
  const styles = `
		${!width || parseInt(width) === 0 ? '' : ['top', 'right', 'bottom', 'left'].map(side => borderSideCheck(side) ? `border-${side}: ${borderCSS};` : '').join('')}
		${isValidCSS('border-radius', radius)}
	`;
  return styles;
};
const getBorderBoxCSS = border => {
  if (!border) return '';
  const generateBorderCSS = borderObj => {
    const {
      color = '#000000',
      style = 'solid',
      width = '0px'
    } = borderObj;
    return `${width} ${style} ${color}`;
  };
  if ('object' === typeof border && !Array.isArray(border)) {
    if (border.hasOwnProperty('top') || border.hasOwnProperty('right') || border.hasOwnProperty('bottom') || border.hasOwnProperty('left')) {
      const sides = ['top', 'right', 'bottom', 'left'];
      return sides.map(side => border[side] ? `border-${side}: ${generateBorderCSS(border[side])};` : '').join(' ').trim();
    } else {
      return isValidCSS('border', generateBorderCSS(border));
    }
  }
  return '';
};
const getColorsCSS = colors => {
  const {
    color = '',
    bgType = 'solid',
    bg = '',
    gradient = _data__WEBPACK_IMPORTED_MODULE_7__.gradient
  } = colors || {};
  const styles = `
		${isValidCSS('color', color)}
		${gradient || bg ? isValidCSS('background', 'gradient' === bgType ? gradient : bg) : ''}
	`;
  return styles;
};
const getIconCSS = (icon, isSize = true, isColor = true) => {
  const {
    fontSize = 16,
    colorType = 'solid',
    color = 'inherit',
    gradient = _data__WEBPACK_IMPORTED_MODULE_7__.gradient
  } = icon || {};
  const colorCSS = 'gradient' === colorType ? `color: transparent; background-image: ${gradient}; -webkit-background-clip: text; background-clip: text;` : isValidCSS('color', color);
  const styles = `
		${!fontSize || !isSize ? '' : isValidCSS('font-size', fontSize ? `${fontSize}px` : '')}
		${isColor ? colorCSS : ''}
	`;
  return styles;
};
const getMultiShadowCSS = (value, type = 'box') => {
  let styles = '';
  value?.map((item, index) => {
    const {
      hOffset = '0px',
      vOffset = '0px',
      blur = '0px',
      spreed = '0px',
      color = '#e7f0fe',
      isInset = false
    } = item || {};
    const inset = isInset ? 'inset' : '';
    const offsetBlur = `${hOffset} ${vOffset} ${blur}`;
    const isComa = index + 1 >= value.length ? '' : ', ';
    styles += 'text' === type ? `${offsetBlur} ${color}${isComa}` : `${offsetBlur} ${spreed} ${color} ${inset}${isComa}`;
  });
  return styles || '';
};
const getSeparatorCSS = separator => {
  const {
    width = '50%',
    height = '2px',
    style = 'solid',
    color = _data__WEBPACK_IMPORTED_MODULE_7__.primaryColor300
  } = separator || {};
  const styles = `
		${isValidCSS('width', width)}
		${0 === parseInt(height) ? '' : `border-top: ${height} ${style} ${color};`}
	`;
  return styles;
};
const getShadowCSS = (shadow, type = 'box') => {
  const {
    hOffset = '0px',
    vOffset = '0px',
    blur = '0px',
    spreed = '0px',
    color = '#7090b0',
    isInset = false
  } = shadow || {};
  const inset = isInset ? 'inset' : '';
  const offsetBlur = `${hOffset} ${vOffset} ${blur}`;
  const styles = 'text' === type ? `${offsetBlur} ${color}` : `${offsetBlur} ${spreed} ${color} ${inset}`;
  return styles || 'none';
};
const getSpaceCSS = space => {
  const {
    side = 2,
    vertical = '0px',
    horizontal = '0px',
    top = '0px',
    right = '0px',
    bottom = '0px',
    left = '0px'
  } = space || {};
  const styles = 2 === side ? `${vertical} ${horizontal}` : `${top} ${right} ${bottom} ${left}`;
  return styles;
};
const getTypoCSS = (selector, typo, isFamily = true) => {
  const {
    fontFamily = 'Default',
    fontCategory = 'sans-serif',
    fontVariant = 400,
    fontWeight,
    isUploadFont = true,
    fontSize = {
      desktop: null,
      tablet: null,
      mobile: null
    },
    fontStyle,
    textTransform,
    textDecoration,
    lineHeight,
    letterSpace
  } = typo || {};
  const isEmptyFamily = !isFamily || !fontFamily || 'Default' === fontFamily;
  const desktopFontSize = fontSize?.desktop || fontSize;
  const tabletFontSize = fontSize?.tablet || desktopFontSize;
  const mobileFontSize = fontSize?.mobile || tabletFontSize;
  const checkUnit = size => {
    const value = String(size);
    const units = ['px', 'em', 'rem', '%', 'vh', 'vw'];
    if (units.some(unit => value.endsWith(unit))) {
      return value;
    } else if (typeof size === 'number') {
      return `${value}px`;
    }
    return '';
  };
  const styles = `
		${isEmptyFamily ? '' : `font-family: '${fontFamily}', ${fontCategory};`}
		${isValidCSS('font-weight', fontWeight)}
		${isValidCSS('font-size', checkUnit(desktopFontSize))}
		${isValidCSS('font-style', fontStyle)}
		${isValidCSS('text-transform', textTransform)}
		${isValidCSS('text-decoration', textDecoration)}
		${isValidCSS('line-height', lineHeight)}
		${isValidCSS('letter-spacing', letterSpace)}
	`;

  // Google font link
  const linkQuery = !fontVariant || 400 === fontVariant ? '' : '400i' === fontVariant ? ':ital@1' : fontVariant?.includes('00i') ? `: ital, wght@1, ${fontVariant?.replace('00i', '00')} ` : `: wght@${fontVariant} `;
  const link = isEmptyFamily ? '' : `https://fonts.googleapis.com/css2?family=${fontFamily?.split(' ').join('+')}${linkQuery.replace(/ /g, '')}&display=swap`;
  return {
    googleFontLink: !isUploadFont || isEmptyFamily ? '' : `@import url(${link});`,
    styles: `${selector}{
			${styles}
		}
		${_data__WEBPACK_IMPORTED_MODULE_7__.tabBreakpoint} {
			${selector}{
				${isValidCSS('font-size', checkUnit(tabletFontSize))}
			}
		}
		${_data__WEBPACK_IMPORTED_MODULE_7__.mobileBreakpoint} {
			${selector}{
				${isValidCSS('font-size', checkUnit(mobileFontSize))}
			}
		}`.replace(/\s+/g, ' ').trim()
  };
};
const getBoxCSS = val => {
  if (!val) return '';
  if (typeof val === 'string') return val;
  if (typeof val === 'object' && !Array.isArray(val)) {
    const order = ['top', 'right', 'bottom', 'left'];
    const values = order.map(side => val[side] || '');
    const allEmpty = values.every(value => !value);
    return allEmpty ? '' : order.map(side => val[side] || '0').join(' ');
  }
  return '';
};

// Murad Wahid
const getGradientCSS = gradient => {
  const {
    type = 'linear',
    radialType = 'ellipse',
    colors = [],
    centerPositions = {
      x: 0,
      y: 0
    },
    angel = 0
  } = gradient || {};
  if ((0,_common__WEBPACK_IMPORTED_MODULE_6__.isExist)(gradient)) {
    const gradientColors = colors?.map(({
      color,
      position
    }) => `${color} ${position}%`);
    const liner = `linear-gradient(${angel}deg, ${gradientColors})`;
    const radial = `radial-gradient(${radialType} at ${centerPositions?.x}% ${centerPositions?.y}%,${gradientColors})`;
    return isValidCSS('background', type === 'radial' ? radial : liner);
  }
  return '';
};
const getImagePosition = img => {
  const {
    position = 'center center',
    xPosition = 0,
    yPosition = 0,
    attachment = '',
    repeat = 'no-repeat',
    size = 'cover',
    customSize = '0px'
  } = img || {};
  const cd = v => 'initial' !== v || (0,_common__WEBPACK_IMPORTED_MODULE_6__.isExist)(v);
  return `
		${cd(position) ? `background-position: ${'custom' === position ? `${xPosition} ${yPosition}` : position};` : ''}
		${attachment && cd(attachment) ? `background-attachment: ${attachment};` : ''}
		${cd(repeat) ? `background-repeat: ${repeat};` : ''}
		${cd(size) ? `background-size: ${'custom' === size ? `${customSize} auto` : size};` : ''}
	`;
};
const getImageCSS = (img = {}) => {
  if (img) {
    return {
      desktop: (0,_common__WEBPACK_IMPORTED_MODULE_6__.isExist)(img.url) ? `background-image: url(${img.url}); ${getImagePosition(img?.desktop)}` : '',
      tablet: (0,_common__WEBPACK_IMPORTED_MODULE_6__.isExist)(img.url) ? getImagePosition(img?.tablet) : '',
      mobile: (0,_common__WEBPACK_IMPORTED_MODULE_6__.isExist)(img.url) ? getImagePosition(img?.mobile) : ''
    };
  }
  return '';
};
const getVideoCSS = (video, selector) => {
  const {
    url,
    loop
  } = video || {};
  const parentEl = document.querySelector(selector);
  const el = parentEl?.querySelector('.bPlVideo');
  const videoEl = document.createElement('video');
  videoEl.muted = true;
  videoEl.autoplay = true;
  videoEl.classList.add('bPlVideo');
  if (!el) {
    if (parentEl && url) {
      videoEl.innerHTML = `<source src=${url}></source>`;
      parentEl.appendChild(videoEl);
    }
  }
  videoEl.loop = loop;
  videoEl.play();
  return `${selector} .bPlVideo{
		left: 0;
		min-height: 100%;
		min-width: 100%;
		position: absolute;
		width: -webkit-fill-available;
		top: 0;
		z-index: 0;
	}`;
};
const getAdvBGCSS = (background, selector, isHover = false) => {
  const {
    type = 'color',
    color,
    gradient,
    img,
    video
  } = background || {};
  const bgCSS = type === 'color' ? isValidCSS('background', color) : type === 'gradient' ? getGradientCSS(gradient) : type === 'image' ? getImageCSS(img).desktop : '';
  const tablet = type === 'image' ? getImageCSS(img).tablet : '';
  const mobile = type === 'image' ? getImageCSS(img).mobile : '';
  const sl = isHover ? `${selector}:hover` : selector;
  return `
		${type === 'video' ? getVideoCSS(video, selector) : ''}

		${bgCSS ? `${sl}{
			${bgCSS}
		}` : ''}

		${tablet ? `${_data__WEBPACK_IMPORTED_MODULE_7__.tabBreakpoint} {
			${sl}{
				${tablet}
			}
		}` : ''}

		${mobile ? `${_data__WEBPACK_IMPORTED_MODULE_7__.mobileBreakpoint} {
			${sl}{
				${mobile}
			}
		}` : ''}
	`.replace(/\s+/g, ' ').trim();
};
const getOverlayCSS = (overlay, selector, isHover = false) => {
  const {
    isEnabled,
    colors,
    opacity = 1,
    blend,
    filter = '',
    blur = 0,
    brightness = 100,
    contrast = 100,
    saturation = 100,
    hue = 0,
    position = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    zIndex = -1
  } = overlay || {};
  const filterCSSValue = `${100 !== brightness ? `brightness(${brightness}%)` : ''} ${100 !== contrast ? `contrast(${contrast}%)` : ''} ${100 !== saturation ? `saturate(${saturation}%)` : ''} ${0 !== blur ? `blur(${blur}px)` : ''} ${0 !== hue ? `hue-rotate(${hue}deg)` : ''}`;
  const filterCSS = `${filter}: ${filter ? filterCSSValue : ''}; -webkit-${filter}: ${filter ? filterCSSValue : ''};`;
  const sl = isHover ? `${selector}:hover::after` : `${selector}::after`;
  return isEnabled ? `
		${selector}{
			position:relative;
			z-index:1;
		}
		${selector}::after{
			content: '';
			position: absolute;
			top:${(0,_common__WEBPACK_IMPORTED_MODULE_6__.isExist)(position.top) ? position.top : 0};
			right:${(0,_common__WEBPACK_IMPORTED_MODULE_6__.isExist)(position.right) ? position.right : 0};
			bottom:${(0,_common__WEBPACK_IMPORTED_MODULE_6__.isExist)(position.bottom) ? position.bottom : 0};
			left:${(0,_common__WEBPACK_IMPORTED_MODULE_6__.isExist)(position.left) ? position.left : 0};
			z-index:${zIndex};
		}
		${getAdvBGCSS(colors, sl, false)}
		${sl}{
			${isValidCSS('opacity', opacity)}
			${isValidCSS('mix-blend-mode', blend)}
			${filterCSS}
		}
	`.replace(/\s+/g, ' ').trim() : '';
};
const getTransformCSS = (transform, selector, isHover = false) => {
  const generateTransformCSS = (value, device = 'desktop') => {
    if (!(0,_common__WEBPACK_IMPORTED_MODULE_6__.isExist)(value)) return '';
    const {
      skew,
      scale,
      rotate,
      offset,
      flipX,
      flipY
    } = value;
    const {
      threeDRotate
    } = rotate || {};
    const {
      isProportion
    } = scale || {};
    const transforms = [];
    //skew
    if ((0,_common__WEBPACK_IMPORTED_MODULE_6__.isExist)(skew)) {
      if ((0,_common__WEBPACK_IMPORTED_MODULE_6__.isExist)(skew?.[device]?.x)) transforms.push(`skewX(${skew[device].x}deg)`);
      if ((0,_common__WEBPACK_IMPORTED_MODULE_6__.isExist)(skew?.[device]?.y)) transforms.push(`skewY(${skew[device].y}deg)`);
    }
    //scale
    if (isProportion) {
      if ((0,_common__WEBPACK_IMPORTED_MODULE_6__.isExist)(scale?.[device]?.scale)) transforms.push(`scale(${scale[device].scale})`);
    } else {
      if ((0,_common__WEBPACK_IMPORTED_MODULE_6__.isExist)(scale?.[device]?.x)) transforms.push(`scaleX(${scale[device].x})`);
      if ((0,_common__WEBPACK_IMPORTED_MODULE_6__.isExist)(scale?.[device]?.y)) transforms.push(`scaleY(${scale[device].y})`);
    }

    //rotate
    if ((0,_common__WEBPACK_IMPORTED_MODULE_6__.isExist)(rotate)) {
      if ((0,_common__WEBPACK_IMPORTED_MODULE_6__.isExist)(rotate?.[device]?.z)) transforms.push(`rotateZ(${rotate[device].z}deg)`);
      if (threeDRotate) {
        if ((0,_common__WEBPACK_IMPORTED_MODULE_6__.isExist)(rotate?.[device]?.x)) transforms.push(`rotateX(${rotate[device].x}deg)`);
        if ((0,_common__WEBPACK_IMPORTED_MODULE_6__.isExist)(rotate?.[device]?.y)) transforms.push(`rotateY(${rotate[device].y}deg)`);
      }
    }

    //offset
    if ((0,_common__WEBPACK_IMPORTED_MODULE_6__.isExist)(offset)) {
      if ((0,_common__WEBPACK_IMPORTED_MODULE_6__.isExist)(offset?.[device]?.x)) transforms.push(`translateX(${offset[device].x})`);
      if ((0,_common__WEBPACK_IMPORTED_MODULE_6__.isExist)(offset?.[device]?.y)) transforms.push(`translateY(${offset[device].y})`);
    }

    //flip
    if ((0,_common__WEBPACK_IMPORTED_MODULE_6__.isExist)(flipX)) transforms.push(flipX ? 'scaleX(-1)' : '');
    if ((0,_common__WEBPACK_IMPORTED_MODULE_6__.isExist)(flipY)) transforms.push(flipY ? 'scaleY(-1)' : '');
    if (transforms.length === 0) return '';
    return isValidCSS('transform', transforms.join(' '));
  };
  const sl = isHover ? `${selector}:hover` : selector;
  // ${isExist(hover?.transition)?`transition:transform ${hover.transition}ms ease-in-out`:'' }

  return `
		${sl} {
			${generateTransformCSS(transform, 'desktop')}
		}
		${_data__WEBPACK_IMPORTED_MODULE_7__.tabBreakpoint}{
			${sl} {
				${generateTransformCSS(transform, 'tablet')}
			}
		}
		${_data__WEBPACK_IMPORTED_MODULE_7__.mobileBreakpoint}{
			${sl} {
				${generateTransformCSS(transform, 'mobile')}
			}
		}
	`;
};
const getMaskCSS = mask => {
  const {
    isMask = false,
    shape = {
      type: 'circle'
    },
    size = {
      type: 'contain',
      scale: '100%'
    },
    position = {
      type: 'center center',
      x: 50,
      y: 50
    },
    repeat = 'no-repeat'
  } = mask || {};
  const svgShape = [{
    svg: _Components_Mask_assets_shapes_circle_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
    type: 'circle'
  }, {
    svg: _Components_Mask_assets_shapes_flower_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    type: 'flower'
  }, {
    svg: _Components_Mask_assets_shapes_sketch_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
    type: 'sketch'
  }, {
    svg: _Components_Mask_assets_shapes_triangle_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
    type: 'triangle'
  }, {
    svg: _Components_Mask_assets_shapes_blob_svg__WEBPACK_IMPORTED_MODULE_0__["default"],
    type: 'blob'
  }, {
    svg: _Components_Mask_assets_shapes_hexagon_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    type: 'hexagon'
  }];
  const getShape = type => svgShape.find(e => e.type === type);
  return isMask ? `-webkit-mask-image: url(${shape.type === 'custom' ? shape.url : getShape(shape.type).svg});
		-webkit-mask-size: ${size.type === 'custom' ? size.scale : size.type};
		${position.type === 'custom' ? `${isValidCSS('-webkit-mask-position-x', position.x)}
			${isValidCSS('-webkit-mask-position-y', position.y)}` : `${isValidCSS('-webkit-mask-position', position.type)}`}
		${size.type !== 'cover' ? `-webkit-mask-repeat: ${repeat};` : ''}` : '';
};

/***/ }),

/***/ "../plugin-slug/node_modules/react-dom/client.js":
/*!*******************************************************!*\
  !*** ../plugin-slug/node_modules/react-dom/client.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "./src/Components/Common/Style.js":
/*!****************************************!*\
  !*** ./src/Components/Common/Style.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bpl_tools_Advanced_generateCSS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../bpl-tools/Advanced/generateCSS */ "../bpl-tools/Advanced/generateCSS.js");
/* harmony import */ var _bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../bpl-tools/utils/getCSS */ "../bpl-tools/utils/getCSS.js");



const Style = ({
  attributes,
  id,
  isBackend = false
}) => {
  const {
    styles,
    termsConditions
  } = attributes;
  const {
    form,
    buttonStyle,
    message
  } = styles;
  const {
    container,
    button,
    navigation
  } = buttonStyle;
  const {
    first,
    second
  } = navigation;
  const {
    success,
    error
  } = message;
  const mainSl = `#${id}`;
  const blockSl = `${mainSl} .b-blocks-b-form-wrapper`;
  const formSl = `${blockSl} .b-blocks-b-form-container`;
  const buttonContainerSl = `${formSl} .b-blocks-form-button-wrapper`;
  const buttonSl = `${buttonContainerSl} .b-blocks-form-submitBtn`;
  const navigationSl = `${buttonContainerSl} .b-blocks-form-button-navigation-wrapper`;
  const navigationFirstSl = `${navigationSl} .b-blocks-form-button-navigation-text`;
  const navigationSecondSl = `${navigationSl} .b-blocks-form-button-navigation-link`;
  const checkBoxSl = `${formSl} .b-blocks-b-form-termsConditionWrapper`;
  const successSl = `${blockSl} .b-blocks-b-form-success-message`;
  const errorSl = `${blockSl} .b-blocks-b-form-error-message`;
  const childFileSl = isBackend ? '.block-editor-inner-blocks .block-editor-block-list__layout' : `${mainSl} .b-blocks-b-form-child-field-wrapper`;
  const mainAlign = ` ${form.align === 'left' ? 'justify-content: flex-start' : form.align === 'center' ? 'justify-content: center' : form.align === 'right' ? 'justify-content: flex-end' : ''}
	`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: ` ${(0,_bpl_tools_Advanced_generateCSS__WEBPACK_IMPORTED_MODULE_1__["default"])(id, attributes.advanced, isBackend)}`
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: `
			${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getTypoCSS)('', button.typography).googleFontLink}
			${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getTypoCSS)('', first.typography).googleFontLink}
			${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getTypoCSS)('', second.typography).googleFontLink}
			${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getTypoCSS)('', termsConditions.typography).googleFontLink}
			${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getTypoCSS)('', success.typo).googleFontLink}
			${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getTypoCSS)('', error.typo).googleFontLink}

			${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getTypoCSS)(navigationFirstSl, first.typography).styles}
			${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getTypoCSS)(navigationSecondSl, second.typography).styles}
			${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getTypoCSS)(buttonSl, button.typography).styles}
			${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getTypoCSS)(checkBoxSl, termsConditions.typography).styles}
			${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getTypoCSS)(successSl, success.typo).styles}
			${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getTypoCSS)(errorSl, error.typo).styles}

			${mainSl}{
				${form.width.type === 'custom' ? mainAlign : ''}
			}

			${blockSl}{
				${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBackgroundCSS)(form.bg)}
				${form.width.type === 'custom' ? (0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('width', form.width.desktop) : ''}
				${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('margin', (0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBoxCSS)(form.desktop.margin))}
				${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('padding', (0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBoxCSS)(form.desktop.padding))}
				${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBorderBoxCSS)(form.border)}
				${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('border-radius', (0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBoxCSS)(form.desktop.radius))}
				${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('box-shadow', (0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getMultiShadowCSS)(form.shadow))}
			}

			${childFileSl}{
				display:grid;
				${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('gap', form.desktop.fieldGap ? form.desktop.fieldGap + 'px' : '')}
			}
			
			${buttonContainerSl}{
				${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('margin', (0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBoxCSS)(container.desktop.margin))}
				flex-direction:${container.desktop.display};
				${container.desktop.display === 'row' ? 'align-items: center;' : `align-items:${container.desktop.align};`}
				${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('justify-content', container.desktop.justify)}
				${container.desktop.display === 'row' ? '' : (0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('gap', container.desktop.gap)}
			}

			${buttonSl}{
					${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('margin', (0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBoxCSS)(button.desktop.margin))}
					${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('padding', (0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBoxCSS)(button.desktop.padding))}
					${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('color', button.normal.color)}
					${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBackgroundCSS)(button.normal.bg)}
					${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBorderBoxCSS)(button.normal.desktop.border)}
					${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('border-radius', (0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBoxCSS)(button.normal.desktop.radius))}
					${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('box-shadow', (0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getMultiShadowCSS)(button.normal.desktop.shadow))}
			}

			${buttonSl}:hover{
					${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('color', button.hover.color)}
					${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBackgroundCSS)(button.hover.bg)}
					${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBorderBoxCSS)(button.hover.desktop.border)}
					${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('border-radius', (0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBoxCSS)(button.hover.desktop.radius))}
					${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('box-shadow', (0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getMultiShadowCSS)(button.hover.desktop.shadow))}
			}

			${navigationFirstSl}{
				${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('color', first.color)}
				${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('margin', (0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBoxCSS)(first.desktop.margin))}
			}

			${navigationSecondSl}{
				${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('color', second.color)}
				${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('margin', (0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBoxCSS)(second.desktop.margin))}
			}

			${checkBoxSl}{
				${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('margin', (0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBoxCSS)(termsConditions.margin.desktop))}
        ${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('padding', (0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBoxCSS)(termsConditions.padding.desktop))}
        ${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('color', (0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBoxCSS)(termsConditions.color.text))}
        ${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('background', (0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBoxCSS)(termsConditions.color.bg))}
			}

			${checkBoxSl} .b-blocks-b-form-checkbox-container{
					${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('margin', (0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBoxCSS)(termsConditions.checkboxMargin.desktop))}
			}

			${checkBoxSl} .b-blocks-b-blocks-termsConditionWrapper-link{
				${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('color', termsConditions.color.link)}
			}

			${checkBoxSl} .b-blocks-b-form-checkbox-container>input:checked ~ .b-blocks-b-form-checkmark {
				${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('background', termsConditions.color.checkbox)}
			}

			${successSl}{
				${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('margin', (0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBoxCSS)(success.margin))}
				${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('padding', (0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBoxCSS)(success.padding))}
				${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('color', success.color.text)}
				${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBackgroundCSS)(success.color.bg)}
				${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBorderBoxCSS)(success.border)}
				${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('border-radius', (0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBoxCSS)(success.radius))}
			}
			${errorSl}{
				${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('margin', (0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBoxCSS)(error.margin))}
				${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('padding', (0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBoxCSS)(error.padding))}
				${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('color', error.color.text)}
				${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBackgroundCSS)(error.color.bg)}
				${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBorderBoxCSS)(error.border)}
				${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.isValidCSS)('border-radius', (0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_2__.getBoxCSS)(error.radius))}
			}

	`.replace(/\s+/g, ' ').trim()
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/Components/Frontend/BForm.js":
/*!******************************************!*\
  !*** ./src/Components/Frontend/BForm.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



const BForm = ({
  children,
  attributes,
  isFrontend = false
}) => {
  const {
    form,
    button,
    termsConditions,
    message
  } = attributes;
  const {
    navigation
  } = button;
  const [showSuccessMessage, setShowSuccessMessage] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [showErrorMessage, setShowErrorMessage] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    let errors = [];
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const fields = Object.keys(data);
    const getErrorEl = name => {
      const el = form.querySelector(`.b-blocks-input-field-validation-${name}`);
      if (!el) return;
      const isValid = JSON.parse(el.dataset.iserror);
      if (isValid) {
        el.classList.add('b-blocks-input-field-error-container');
        return name;
      }
    };
    fields.forEach(field => {
      const error = getErrorEl(field);
      error && errors.push(error);
    });
  };
  // console.log("form", attributes, " : ", form);

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "b-blocks-b-form-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    onSubmit: handleSubmit,
    className: "b-blocks-b-form-container"
  }, children, termsConditions.show && form.formType === 'register' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "b-blocks-b-form-termsConditionWrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "b-blocks-b-form-checkbox-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    required: true
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "b-blocks-b-form-checkmark"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "b-blocks-b-blocks-termsConditionWrapper-first"
  }, termsConditions.label.first), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "b-blocks-b-blocks-termsConditionWrapper-link",
    href: termsConditions.url
  }, termsConditions.label.second)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "b-blocks-form-button-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "b-blocks-form-submitBtn",
    type: "submit"
  }, button.button.text), navigation.isNavigation && (navigation.first.text || navigation.second.text) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "b-blocks-form-button-navigation-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "b-blocks-form-button-navigation-text"
  }, navigation.first.text), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "b-blocks-form-button-navigation-link",
    href: navigation.second.url
  }, navigation.second.text), " "))), showSuccessMessage && message.success.successFulRegistration && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "b-blocks-b-form-success-message"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, message.success.successFulRegistration)), showErrorMessage && message.error.default && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "b-blocks-b-form-error-message"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, message.error.default)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BForm);

/***/ }),

/***/ "./src/Components/Frontend/Frontend.js":
/*!*********************************************!*\
  !*** ./src/Components/Frontend/Frontend.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BForm */ "./src/Components/Frontend/BForm.js");


const Frontend = props => {
  const {
    attributes,
    content
  } = props;
  // console.log(content);
  // console.log(JSON.parse(decodeWpEscapedHtml(content)));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attributes: attributes,
    isFrontend: true,
    content: content
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "b-blocks-b-form-child-field-wrapper",
    dangerouslySetInnerHTML: {
      __html: content
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Frontend);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "../plugin-slug/node_modules/react-dom/client.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _Components_Common_Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Common/Style */ "./src/Components/Common/Style.js");
/* harmony import */ var _Components_Frontend_BForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Frontend/BForm */ "./src/Components/Frontend/BForm.js");
/* harmony import */ var _Components_Frontend_Frontend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/Frontend/Frontend */ "./src/Components/Frontend/Frontend.js");






document.addEventListener('DOMContentLoaded', () => {
  const bFormEls = document.querySelectorAll('.wp-block-b-blocks-b-form');
  bFormEls.forEach(bFormEl => {
    const attributes = JSON.parse(bFormEl.dataset.attributes);
    const content = bFormEl.querySelector('template#bFormPhpGetContent');

    // const content = JSON.parse(bFormEl.dataset.content);
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(bFormEl).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Common_Style__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attributes: attributes,
      id: bFormEl.id
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Frontend_Frontend__WEBPACK_IMPORTED_MODULE_5__["default"], {
      attributes: attributes,
      content: content
    })));
    bFormEl?.removeAttribute('data-attributes');
  });
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map