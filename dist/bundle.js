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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ctx; });
// global variables
const WIDTH = 1224;
/* unused harmony export WIDTH */

const HEIGHT = 768;
/* unused harmony export HEIGHT */

// create Canvas
let canvas = document.createElement('canvas');
canvas.id = "canvas";
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.border = "1px solid";
document.body.appendChild(canvas);
// define 2d context
let ctx = canvas.getContext("2d");


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_map__ = __webpack_require__(0);

const ctxSave = () => {
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].save();
};
/* harmony export (immutable) */ __webpack_exports__["j"] = ctxSave;

const ctxRestore = () => {
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].restore();
};
/* harmony export (immutable) */ __webpack_exports__["h"] = ctxRestore;

const ctxFillRect = (x, y, width, height) => {
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].fillRect(x, y, width, height);
};
/* harmony export (immutable) */ __webpack_exports__["d"] = ctxFillRect;

const ctxDrawImage = (img, x, y, width, height) => {
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].drawImage(img, x, y, width, height);
};
/* harmony export (immutable) */ __webpack_exports__["c"] = ctxDrawImage;

const ctxTranslate = (centerX, centerY) => {
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].translate(centerX, centerY);
};
/* harmony export (immutable) */ __webpack_exports__["n"] = ctxTranslate;

const ctxRotate = (angle) => {
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].rotate(angle);
};
/* harmony export (immutable) */ __webpack_exports__["i"] = ctxRotate;

const ctxClearRect = (x, y, width, height) => {
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].clearRect(x, y, width, height);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = ctxClearRect;

const ctxFillStyle = (color) => {
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].fillStyle = color;
};
/* harmony export (immutable) */ __webpack_exports__["e"] = ctxFillStyle;

const ctxTransform = (unit) => {
    ctxTranslate(unit.centerX, unit.centerY); // translate to rectangle center
    let angle = unit.destinationCanvasAngle * (Math.PI / 180);
    ctxRotate(angle);
    ctxTranslate(-unit.centerX, -unit.centerY); // translate to rectangle center
};
/* harmony export (immutable) */ __webpack_exports__["m"] = ctxTransform;

const ctxBeginPath = () => {
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].beginPath();
};
/* harmony export (immutable) */ __webpack_exports__["a"] = ctxBeginPath;

const ctxStrokeStyle = (color) => {
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].strokeStyle = color;
};
/* harmony export (immutable) */ __webpack_exports__["l"] = ctxStrokeStyle;

const ctxMoveTo = (x, y) => {
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].moveTo(x, y);
};
/* harmony export (immutable) */ __webpack_exports__["g"] = ctxMoveTo;

const ctxLineTo = (x, y) => {
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].lineTo(x, y);
};
/* harmony export (immutable) */ __webpack_exports__["f"] = ctxLineTo;

const ctxStroke = () => {
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].stroke();
};
/* harmony export (immutable) */ __webpack_exports__["k"] = ctxStroke;

const ctxIsPointInPath = (x, y, fillRull) => {
    return __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].isPointInPath(x, y, fillRull);
};
/* unused harmony export ctxIsPointInPath */



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return currentlyChosenUnit; });
const units = [];
/* harmony export (immutable) */ __webpack_exports__["c"] = units;

let currentlyChosenUnit = null;
const assignCurrentlyChosenUnit = (unit) => {
    // check unit
    if (unit) {
        currentlyChosenUnit = unit;
    }
    else {
        currentlyChosenUnit = null;
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = assignCurrentlyChosenUnit;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// load image
const loadImage = (imgPath, callback) => {
    console.error('loadImage');
    let img = new Image;
    img.onload = () => {
        callback(null, img);
    };
    img.onerror = () => {
        let msg = 'Cannot load the image at ' + imgPath;
        callback(new Error(msg));
    };
    img.src = imgPath;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = loadImage;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// setTimeout as a Promise
const timeout = (time) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, time);
    });
};
/* harmony export (immutable) */ __webpack_exports__["a"] = timeout;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*

Standart
                C
                *
            *   *
        c *     *
        *       * a
      *         *
    *           *
A  ************** B
       b


Canvas rotation

        b
A  **************** B
    *             *
      *           *
        *         *
      c   *       * a
            *     *
              *   *
                * *
                  *
                  C

  a = descY - centerY
  b = descX - center X
*/
// get unit's position and destination position and return angle in radians between unit and destination
const calcDestinationAngle = (unitX, unitY, destX, destY) => {
    //console.error('calcDestinationAngle');
    let a = Math.abs(destY - unitY);
    let b = Math.abs(destX - unitX);
    let c = Math.sqrt(a * a + b * b);
    let angle;
    let quater = getQuater(unitX, unitY, destX, destY); // check quater
    if (quater === 1 || quater === 2)
        angle = a / c;
    else if (quater === 3 || quater === 4)
        angle = -(a / c);
    return angle;
};
/* unused harmony export calcDestinationAngle */

// get unit's position and destination position and return angle in radians between unit and destination
const calcDestinationAngleInDegrees = (unitX, unitY, destX, destY) => {
    //console.error('calcDestinationAngleInDegrees');
    let angle;
    let a = Math.abs(destY - unitY);
    let b = Math.abs(destX - unitX);
    let angleInRadian = Math.atan(a / b);
    // check quater of the circle
    let degree = angleInRadian * (180 / Math.PI); // convert radians into degree
    let quater = getQuater(unitX, unitY, destX, destY); // check quater
    if (quater === 1)
        angle = degree;
    if (quater === 2)
        angle = 90 + (90 - degree);
    else if (quater === 3)
        angle = 180 + degree;
    else if (quater === 4)
        angle = 270 + (90 - degree);
    return Math.round(angle);
};
/* unused harmony export calcDestinationAngleInDegrees */

const makeAnglePositive = (angle) => {
    //console.error('makeAnglePositive');
    if (angle < 0) {
        return angle + 360;
    }
    else if (angle >= 0) {
        return angle;
    }
};
/* harmony export (immutable) */ __webpack_exports__["c"] = makeAnglePositive;

// calculate rotate angle in canvas degrees
const calcCanvasAngle = (unitX, unitY, destX, destY) => {
    //console.error('calcCanvasAngle');
    let angle;
    let a = Math.abs(destY - unitY);
    let b = Math.abs(destX - unitX);
    let angleInRadian = Math.atan(a / b);
    // check quater of the circle
    let degree = angleInRadian * (180 / Math.PI); // convert radians into degree
    let quater = getQuater(unitX, unitY, destX, destY); // check quater
    if (quater === 1)
        angle = angle = 90 - degree; // I === I
    if (quater === 2)
        angle = angle = 270 + degree; // II == IV
    else if (quater === 3)
        angle = angle = 180 + (90 - degree); // III = III
    else if (quater === 4)
        angle = angle = 90 + degree; // IV = II
    return Math.round(angle);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = calcCanvasAngle;

const getQuater = (unitX, unitY, destX, destY) => {
    //console.error('getQuater');
    let quater;
    if (destX >= unitX && destY < unitY) {
        quater = 1;
    }
    else if (destX < unitX && destY <= unitY) {
        quater = 2;
    }
    else if (destX <= unitX && destY > unitY) {
        quater = 3;
    }
    else if (destX > unitX && destY >= unitY) {
        quater = 4;
    }
    return quater;
};
/* unused harmony export getQuater */

const getCanvasAngleQuater = (canvasAngle) => {
    //console.error('getCanvasAngleQuater');
    if (canvasAngle >= 0 && canvasAngle < 90)
        return 1;
    else if (canvasAngle >= 90 && canvasAngle < 180)
        return 4;
    else if (canvasAngle >= 180 && canvasAngle < 270)
        return 3;
    else if (canvasAngle >= 270 && canvasAngle < 360)
        return 2;
};
/* unused harmony export getCanvasAngleQuater */

// calculate path in both directions
// and decide in what direction unit has to rotate
// return startAngle, finishAngle, rotationDirection
const chooseRotationDirection = (initialStartAngle, initialFinishAngle) => {
    //console.error('chooseRotationDirection');
    let startQuater, finishQuater;
    let startAngle, finishAngle, rotationDirection;
    let positiveStartAngle, positiveFinishAngle;
    let negativeStartAngle, negativeFinishAngle;
    positiveStartAngle = initialStartAngle;
    positiveFinishAngle = initialFinishAngle;
    if (positiveStartAngle === 0) {
        negativeStartAngle = 0; // use 0 instead of 360
    }
    else {
        negativeStartAngle = positiveStartAngle - 360;
    }
    if (positiveFinishAngle === 0) {
        negativeFinishAngle = 0;
    }
    else {
        negativeFinishAngle = positiveFinishAngle - 360;
    }
    startQuater = getCanvasAngleQuater(positiveStartAngle);
    finishQuater = getCanvasAngleQuater(positiveFinishAngle);
    let positivePath, negativePath;
    if (startQuater === 2 || startQuater === 3) {
        negativePath = Math.abs(negativeStartAngle) + Math.abs(positiveFinishAngle);
    }
    else {
        negativePath = Math.abs(positiveStartAngle) + Math.abs(negativeFinishAngle);
    }
    positivePath = Math.abs(positiveFinishAngle - positiveStartAngle);
    if (positivePath <= negativePath) {
        startAngle = positiveStartAngle;
        finishAngle = positiveFinishAngle;
        if (positiveStartAngle > positiveFinishAngle)
            rotationDirection = -1;
        if (positiveStartAngle < positiveFinishAngle)
            rotationDirection = 1;
    }
    else {
        if (startQuater === 2 || startQuater === 3) {
            startAngle = negativeStartAngle;
            finishAngle = positiveFinishAngle;
            rotationDirection = 1;
        }
        else {
            startAngle = positiveStartAngle;
            finishAngle = negativeFinishAngle;
            rotationDirection = -1;
        }
    }
    return {
        startAngle,
        finishAngle,
        rotationDirection
    };
};
/* harmony export (immutable) */ __webpack_exports__["b"] = chooseRotationDirection;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const calcSpeed = (unit) => {
    let speedX, speedY;
    if (unit.centerX !== unit.moveToX || unit.centerY !== unit.moveToY) {
        if (unit.centerX < unit.moveToX && unit.centerY < unit.moveToY) {
            speedX = 1;
            speedY = 1;
        }
        else if (unit.centerX > unit.moveToX && unit.centerY > unit.moveToY) {
            speedX = -1;
            speedY = -1;
        }
        else if (unit.centerX < unit.moveToX && unit.centerY > unit.moveToY) {
            speedX = 1;
            speedY = -1;
        }
        else if (unit.centerX > unit.moveToX && unit.centerY < unit.moveToY) {
            speedX = -1;
            speedY = 1;
        }
    }
    return {
        speedX,
        speedY
    };
};
/* harmony export (immutable) */ __webpack_exports__["c"] = calcSpeed;

const calcCoefficient = (unit) => {
    let pathX = Math.abs(unit.moveToX - unit.x);
    let pathY = Math.abs(unit.moveToY - unit.y);
    if (pathX >= pathY)
        return Math.round(pathX / pathY);
    if (pathY > pathX)
        return Math.round(pathY / pathX);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = calcCoefficient;

const calcGreaterSpeed = (unit) => {
    let pathX = Math.abs(unit.moveToX - unit.x);
    let pathY = Math.abs(unit.moveToY - unit.y);
    if (pathX >= pathY)
        return 'x';
    if (pathY > pathX)
        return 'y';
};
/* harmony export (immutable) */ __webpack_exports__["b"] = calcGreaterSpeed;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_map__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ctx__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unitUtils__ = __webpack_require__(6);



// show path
const showPath = (unit) => {
    let { speedX, speedY } = Object(__WEBPACK_IMPORTED_MODULE_2__unitUtils__["c" /* calcSpeed */])(unit);
    let currentX = unit.centerX;
    let currentY = unit.centerY;
    let i = 0;
    let coefficient = Object(__WEBPACK_IMPORTED_MODULE_2__unitUtils__["a" /* calcCoefficient */])(unit);
    let greaterPath = Object(__WEBPACK_IMPORTED_MODULE_2__unitUtils__["b" /* calcGreaterSpeed */])(unit);
    while (currentX !== unit.moveToX || currentY !== unit.moveToY) {
        let prevSpeedX = speedX;
        let prevSpeedY = speedY;
        console.error('PATH speedX:', speedX, 'speedY:', speedY);
        if (i <= coefficient) {
            if (greaterPath === 'x')
                speedY = 0;
            if (greaterPath === 'y')
                speedX = 0;
        }
        if (currentX === unit.moveToX)
            speedX = 0;
        if (currentY === unit.moveToY)
            speedY = 0;
        console.log('speedX:', speedX, 'speedY', speedY);
        currentX += speedX;
        currentY += speedY;
        if (i > coefficient)
            i = 0;
        speedX = prevSpeedX;
        speedY = prevSpeedY;
        console.log('speed after speedX:', speedX, 'speedY', speedY);
        Object(__WEBPACK_IMPORTED_MODULE_1__utils_ctx__["e" /* ctxFillStyle */])('green');
        Object(__WEBPACK_IMPORTED_MODULE_1__utils_ctx__["d" /* ctxFillRect */])(currentX - 2, currentY - 2, 4, 4);
        i++; // increment coefficient
    }
    console.log('currentX:', currentX, 'currentY', currentY);
    console.log('moveToX', unit.moveToX, 'moveToY', unit.moveToY);
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_ctx__["e" /* ctxFillStyle */])('red');
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_ctx__["d" /* ctxFillRect */])(currentX - 10, currentY - 10, 20, 20);
};
/* unused harmony export showPath */

const drawPath = (unit) => {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_ctx__["a" /* ctxBeginPath */])();
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_ctx__["l" /* ctxStrokeStyle */])('green');
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_ctx__["g" /* ctxMoveTo */])(unit.centerX, unit.centerY);
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_ctx__["f" /* ctxLineTo */])(unit.moveToX, unit.moveToY);
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_ctx__["k" /* ctxStroke */])();
};
/* harmony export (immutable) */ __webpack_exports__["a"] = drawPath;

const findPath = (unit) => {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_ctx__["a" /* ctxBeginPath */])();
    let path = [];
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_ctx__["l" /* ctxStrokeStyle */])('green');
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_ctx__["g" /* ctxMoveTo */])(unit.centerX, unit.centerY);
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_ctx__["f" /* ctxLineTo */])(unit.moveToX, unit.moveToY);
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_ctx__["k" /* ctxStroke */])();
    for (let x = 0; x <= 1224; ++x) {
        for (let y = 0; y <= 768; ++y) {
            if (__WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].isPointInStroke(x, y)) {
                path.push({ x, y });
            }
        }
    }
    return path;
};
/* harmony export (immutable) */ __webpack_exports__["c"] = findPath;

const filterPath = (unit, path) => {
    let startPath = path[0];
    let finishPath = path[path.length - 1];
    let startDifference = Math.abs((unit.centerX - startPath.x) + unit.centerY - startPath.y);
    console.log('startDifference', startDifference);
    let finishDifference = Math.abs((unit.centerX - finishPath.x) + unit.centerY - finishPath.y);
    console.log('finishDifference', finishDifference);
    if (startDifference > finishDifference) {
        let updatedPath = [];
        for (let i = path.length - 1; i > 0; --i) {
            updatedPath.push(path[i]);
        }
        updatedPath.push({ x: unit.moveToX, y: unit.moveToY });
        path = updatedPath;
    }
    return path;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = filterPath;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_map__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_unitsStore__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__units_unitRotation__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__units_unitPath__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__units_unitActions__ = __webpack_require__(11);





let infantry = Object(__WEBPACK_IMPORTED_MODULE_4__units_unitActions__["c" /* createUnit */])('Infantry', 200, 40, 100, 50, 3, undefined, 20);
console.log('infantry', infantry);
let cavalry = Object(__WEBPACK_IMPORTED_MODULE_4__units_unitActions__["c" /* createUnit */])('Cavalry', 100, 300, 50, 30, 5, undefined, 15);
let heavyInfantry = Object(__WEBPACK_IMPORTED_MODULE_4__units_unitActions__["c" /* createUnit */])('HeavyInfantry', 300, 180, 160, 120, 2, undefined, 30);
__WEBPACK_IMPORTED_MODULE_0__config_map__["a" /* canvas */].addEventListener('click', (e) => {
    console.error('Click');
    let x = e.offsetX; // get X
    let y = e.offsetY; // get Y
    console.log('Position x', e.offsetX); // get X
    console.log('Position y', e.offsetY); // get Y
    Object(__WEBPACK_IMPORTED_MODULE_4__units_unitActions__["b" /* chooseUnit */])(__WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["c" /* units */], x, y);
});
// set onClickListener for right mouse event
__WEBPACK_IMPORTED_MODULE_0__config_map__["a" /* canvas */].addEventListener('contextmenu', (e) => {
    console.error('Right Mouse Click');
    e.preventDefault();
    let x = e.offsetX; // get X
    let y = e.offsetY; // get Y
    if (__WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["b" /* currentlyChosenUnit */]) {
        Object(__WEBPACK_IMPORTED_MODULE_4__units_unitActions__["a" /* assignMoveToPosition */])(__WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["b" /* currentlyChosenUnit */], x, y); //assign unit's next x and y position
        __WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["b" /* currentlyChosenUnit */].assignAngle(); // assign angle to the unit
        Object(__WEBPACK_IMPORTED_MODULE_3__units_unitPath__["a" /* drawPath */])(__WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["b" /* currentlyChosenUnit */]);
        console.error('PATH:', Object(__WEBPACK_IMPORTED_MODULE_3__units_unitPath__["c" /* findPath */])(__WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["b" /* currentlyChosenUnit */]));
        console.log('UPDATED PATH:', Object(__WEBPACK_IMPORTED_MODULE_3__units_unitPath__["b" /* filterPath */])(__WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["b" /* currentlyChosenUnit */], Object(__WEBPACK_IMPORTED_MODULE_3__units_unitPath__["c" /* findPath */])(__WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["b" /* currentlyChosenUnit */])));
        Object(__WEBPACK_IMPORTED_MODULE_2__units_unitRotation__["a" /* rotateAndMove */])(__WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["b" /* currentlyChosenUnit */]); // rotate unit
        // assignMoveToPosition(currentlyChosenUnit, x, y); //assign unit's next x and y position
        // currentlyChosenUnit.assignAngle(); // assign angle to the unit
        // smoothlyRotateUnit(currentlyChosenUnit); // rotate unit
        //rotateUnit(currentlyChosenUnit);
        // console.error('x:', currentlyChosenUnit.centerX, 'y:', currentlyChosenUnit.centerY, 'destX:', currentlyChosenUnit.moveToX, 'destY:', currentlyChosenUnit.moveToY);
        console.log('GAME: previousCanvasAngle', __WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["b" /* currentlyChosenUnit */].previousCanvasAngle);
        console.error('GAME: desctinationCanvasAngle', __WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["b" /* currentlyChosenUnit */].destinationCanvasAngle);
        //console.log('Unit:' ,currentlyChosenUnit.x, currentlyChosenUnit.y);
        //console.log('center:', currentlyChosenUnit.centerX, currentlyChosenUnit.centerY);
    }
});


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_map__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_loadImage__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_timeout__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__unitMath__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__unitMovement__ = __webpack_require__(10);





// change angle depends on received data
const changeAngle = (unit, img, changingAngle, current) => {
    //console.error('changeAngle');
    return new Promise(resolve => {
        __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].save();
        clearUnit(unit); // delete previos drawing unit
        __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].translate(unit.centerX, unit.centerY); // translate to rectangle center
        let angle = changingAngle * (Math.PI / 180);
        //console.log('CHANGE ANGLE: draw unit degree:', changingAngle);
        __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].rotate(angle); // rotate to look straight to the destination position
        __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].translate(-unit.centerX, -unit.centerY); // translate to rectangle center
        __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].drawImage(img, unit.x, unit.y, unit.width, unit.height);
        __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].restore();
        resolve();
    });
};
/* unused harmony export changeAngle */

const rotateAndMove = (unit) => {
    //console.error('rotateAndMove');
    return new Promise(resolve => {
        Object(__WEBPACK_IMPORTED_MODULE_1__utils_loadImage__["a" /* loadImage */])(unit.imgPath, (err, img) => {
            if (err)
                throw err;
            let isRotating = unit.isRotating;
            let rotationSpeed = unit.rotationSpeed;
            let initialStartAngle = unit.previousCanvasAngle;
            let initialFinishAngle = unit.destinationCanvasAngle;
            let { startAngle, finishAngle, rotationDirection } = Object(__WEBPACK_IMPORTED_MODULE_3__unitMath__["b" /* chooseRotationDirection */])(initialStartAngle, initialFinishAngle);
            let changingAngle = startAngle;
            //console.error('ROTATE UNIT: startAngle:', startAngle, 'finishAngle:', finishAngle, 'direction:', rotationDirection);
            if (!isRotating) {
                unit.setIsRotatingToTrue();
                makeRotation(unit, img, startAngle, changingAngle, finishAngle, rotationDirection, rotationSpeed);
            }
        });
        resolve();
    });
};
/* harmony export (immutable) */ __webpack_exports__["a"] = rotateAndMove;

const clearUnit = (unit) => {
    //console.error('clearUnit');
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].save();
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].translate(unit.centerX, unit.centerY); // translate to rectangle center
    let angle = unit.angleToRemove * (Math.PI / 180);
    //console.log('ROTATION: angle to remove:', unit.angleToRemove);
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].rotate(angle); // rotate unit
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].translate(-unit.centerX, -unit.centerY); // translate to rectangle center
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].clearRect(unit.x - 1, unit.y - 1, unit.width + 2, unit.height + 2);
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].restore();
};
/* unused harmony export clearUnit */

const makeRotation = (unit, img, startAngle, changingAngle, finishAngle, rotationDirection, rotationSpeed, previousStartAngle = null, previousFinishAngle = null) => {
    //console.error('makeRotation');
    let previous = changingAngle - rotationDirection; // previous angle state
    unit.setAngleToRemove(previous); // set angle that has to be removed
    let checkFinishAngle; // angle to compare with unit.destinationCanvasAngle
    if (finishAngle < 0)
        checkFinishAngle = finishAngle + 360; // make angle positive
    if (finishAngle >= 0)
        checkFinishAngle = finishAngle;
    if (startAngle === previousStartAngle) {
        return;
    }
    if (checkFinishAngle !== unit.destinationCanvasAngle) {
        previousStartAngle = startAngle; // save previous rotation
        previousFinishAngle = finishAngle;
        changingAngle = Object(__WEBPACK_IMPORTED_MODULE_3__unitMath__["c" /* makeAnglePositive */])(changingAngle); // argumenent for chooseRotationDirection()
        finishAngle = Object(__WEBPACK_IMPORTED_MODULE_3__unitMath__["c" /* makeAnglePositive */])(unit.destinationCanvasAngle); // argumenent for chooseRotationDirection()
        let { startAngle: newStartAngle, finishAngle: newFinishAngle, rotationDirection: newRotationDirection } = Object(__WEBPACK_IMPORTED_MODULE_3__unitMath__["b" /* chooseRotationDirection */])(changingAngle, finishAngle);
        let newChangingAngle = newStartAngle;
        makeRotation(unit, img, newStartAngle, newChangingAngle, newFinishAngle, newRotationDirection, rotationSpeed, previousStartAngle, previousFinishAngle);
    }
    if (changingAngle === finishAngle) {
        //console.error('rotation finished');
        unit.setIsRotatingToFalse();
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_timeout__["a" /* timeout */])(rotationSpeed).then(() => changeAngle(unit, img, changingAngle, finishAngle)) // now angle === destinationCanvasAngle
            .then(() => Object(__WEBPACK_IMPORTED_MODULE_4__unitMovement__["a" /* move */])(unit)); // make movement
        //console.error('start position x:', unit.centerX, 'y:', unit.centerY);
        //console.error('finish position x:', unit.moveToX, 'y:', unit.moveToY);
        return;
    }
    else {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_timeout__["a" /* timeout */])(rotationSpeed).then(() => changeAngle(unit, img, changingAngle, finishAngle))
            .then(() => {
            makeRotation(unit, img, startAngle, changingAngle += rotationDirection, finishAngle, rotationDirection, rotationSpeed, previousStartAngle, previousFinishAngle);
        });
    }
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_timeout__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_loadImage__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ctx__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__unitUtils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__unitPath__ = __webpack_require__(7);





// move unit to the destination position
const move = (unit) => {
    console.error('Move');
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_loadImage__["a" /* loadImage */])(unit.imgPath, (err, img) => {
        let { speedX, speedY } = Object(__WEBPACK_IMPORTED_MODULE_3__unitUtils__["c" /* calcSpeed */])(unit);
        let currentMoveToX = unit.moveToX; // save previous moveToPositions
        let currentMoveToY = unit.moveToY;
        //makeMovement(unit, img, currentMoveToX, currentMoveToY,speedX, speedY, 0);
        let path = Object(__WEBPACK_IMPORTED_MODULE_4__unitPath__["c" /* findPath */])(unit);
        let updatedPath = Object(__WEBPACK_IMPORTED_MODULE_4__unitPath__["b" /* filterPath */])(unit, path);
        console.log('updatedPath', updatedPath);
        makeMovement2(unit, img, updatedPath, 0, currentMoveToX, currentMoveToY);
    });
};
/* harmony export (immutable) */ __webpack_exports__["a"] = move;

// draw unit every movement speed until unitCenter position is not equal to
// moveTo position
const makeMovement = (unit, img, currentMoveToX, currentMoveToY, speedX, speedY, i) => {
    // save previousMoveTo position
    //console.error('Make Movement');
    let prevSpeedX = speedX; // save speedX
    let prevSpeedY = speedY; // save speedY
    if (currentMoveToX !== unit.moveToX || currentMoveToY !== unit.moveToY) {
        console.log('new destination has been chosen');
        return; // new destination position has been chosen
    }
    console.error('speed before x:', speedX, 'y:', speedY);
    let movementSpeed = 50;
    // movement control
    let coefficient = Object(__WEBPACK_IMPORTED_MODULE_3__unitUtils__["a" /* calcCoefficient */])(unit);
    let greaterPath = Object(__WEBPACK_IMPORTED_MODULE_3__unitUtils__["b" /* calcGreaterSpeed */])(unit);
    if (i <= coefficient) {
        if (greaterPath === 'x')
            speedY = 0;
        if (greaterPath === 'y')
            speedX = 0;
    }
    if (unit.centerX === unit.moveToX)
        speedX = 0;
    if (unit.centerY === unit.moveToY)
        speedY = 0;
    unit.centerX += speedX;
    unit.centerY += speedY;
    console.log('i:', i, 'coefficient:', coefficient);
    console.log('speed x:', speedX, 'speedY:', speedY);
    if (i > coefficient) {
        console.log('i === coefficient');
        i = 0;
    }
    speedX = prevSpeedX; // restore speedX
    speedY = prevSpeedY; // restore speedY
    Object(__WEBPACK_IMPORTED_MODULE_2__utils_ctx__["j" /* ctxSave */])();
    clearMovementUnit(unit);
    Object(__WEBPACK_IMPORTED_MODULE_2__utils_ctx__["m" /* ctxTransform */])(unit);
    unit.x = unit.centerX - (unit.width / 2); // change x and y every time when centerX and centerY is changed
    unit.y = unit.centerY - (unit.height / 2);
    // console.log('MAKE MOVEMENT DRAW ANGLE', unit.destinationCanvasAngle);
    // console.log('MAKE MOVEMENT: DRAW: unit x:',unit.x, 'unit y:', unit.y);
    //console.log('unit destination x:', currentMoveToX, 'y:', currentMoveToY);
    //console.log('unit center x:', unit.centerX, 'y:',unit.centerY);
    Object(__WEBPACK_IMPORTED_MODULE_2__utils_ctx__["c" /* ctxDrawImage */])(img, unit.x, unit.y, unit.width, unit.height);
    Object(__WEBPACK_IMPORTED_MODULE_2__utils_ctx__["h" /* ctxRestore */])();
    i++;
    //console.log('makeMovement');
    if (unit.centerX === currentMoveToX && unit.centerY === currentMoveToY) {
        console.log('unit reached position');
        return;
    }
    //else { // every movement speed repeat this function
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_timeout__["a" /* timeout */])(movementSpeed)
        .then(() => {
        makeMovement(unit, img, currentMoveToX, currentMoveToY, speedX, speedY, i); // recursively call makeMovement
    });
    //}
};
/* unused harmony export makeMovement */

const makeMovement2 = (unit, img, path, i, currentMoveToX, currentMoveToY) => {
    if (path[i].x === unit.moveToX && path[i].y === unit.moveToY)
        return; // unit reach destination point
    if (currentMoveToX !== unit.moveToX || currentMoveToY !== unit.moveToY) {
        console.log('new destination has been chosen');
        return; // new destination position has been chosen
    }
    let x = path[i].x;
    let y = path[i].y;
    unit.centerX = x;
    unit.centerY = y;
    clearMovementUnit(unit);
    Object(__WEBPACK_IMPORTED_MODULE_2__utils_ctx__["j" /* ctxSave */])();
    Object(__WEBPACK_IMPORTED_MODULE_2__utils_ctx__["m" /* ctxTransform */])(unit);
    unit.x = unit.centerX - (unit.width / 2); // change x and y every time when centerX and centerY is changed
    unit.y = unit.centerY - (unit.height / 2);
    Object(__WEBPACK_IMPORTED_MODULE_2__utils_ctx__["c" /* ctxDrawImage */])(img, unit.x, unit.y, unit.width, unit.height);
    Object(__WEBPACK_IMPORTED_MODULE_2__utils_ctx__["h" /* ctxRestore */])();
    i++;
    console.log('i', i);
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_timeout__["a" /* timeout */])(50)
        .then(() => {
        makeMovement2(unit, img, path, i, currentMoveToX, currentMoveToY); // recursively call makeMovement
    });
};
/* unused harmony export makeMovement2 */

const findTurnPoint = (unit) => {
    let currentX = unit.centerX;
    let currentY = unit.centerY;
    let turnPoint;
    let { speedX, speedY } = Object(__WEBPACK_IMPORTED_MODULE_3__unitUtils__["c" /* calcSpeed */])(unit);
    console.log('speedX:', speedX, 'speedY:', speedY);
    if (unit.centerY <= unit.moveToY) {
        while (currentX !== unit.moveToX) {
            currentX += speedX;
            currentY += speedY;
        }
    }
    else if (unit.centerY > unit.moveToY) {
        while (currentY !== unit.moveToY) {
            currentX += speedX;
            currentY += speedY;
        }
    }
    return {
        turnPointX: currentX,
        turnPointY: currentY
    };
};
/* unused harmony export findTurnPoint */

const clearMovementUnit = (unit) => {
    //console.error('clearMovementUnit');
    Object(__WEBPACK_IMPORTED_MODULE_2__utils_ctx__["j" /* ctxSave */])();
    Object(__WEBPACK_IMPORTED_MODULE_2__utils_ctx__["n" /* ctxTranslate */])(unit.centerX, unit.centerY); // translate to rectangle center
    let angle = (unit.destinationCanvasAngle) * (Math.PI / 180);
    Object(__WEBPACK_IMPORTED_MODULE_2__utils_ctx__["i" /* ctxRotate */])(angle); // rotate unit
    Object(__WEBPACK_IMPORTED_MODULE_2__utils_ctx__["n" /* ctxTranslate */])(-unit.centerX, -unit.centerY); // translate to rectangle center
    // console.log('MOVEMENT: CLEAR RECT angle:', unit.destinationCanvasAngle);
    // console.log('MOVEMENT: CLEAR RECT unit x:', unit.x, 'unit y:', unit.y);
    Object(__WEBPACK_IMPORTED_MODULE_2__utils_ctx__["b" /* ctxClearRect */])(unit.x, unit.y, unit.width, unit.height);
    Object(__WEBPACK_IMPORTED_MODULE_2__utils_ctx__["h" /* ctxRestore */])();
};
/* unused harmony export clearMovementUnit */



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return chooseUnit; });
/* unused harmony export setUnit */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createUnit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_unitsStore__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ctx__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Unit__ = __webpack_require__(12);



// check if units was clicked by left mouse button
// x - mouse position X
// y - mouse position Y
let chooseUnit = (units, x, y) => {
    //console.error('chooseUnit');
    let foundedUnit = null;
    for (let unit of units) {
        let unitX0 = unit.x;
        let unitY0 = unit.y;
        let unitX1 = unitX0 + unit.width;
        let unitY1 = unitY0 + unit.height;
        // check if coordinates is equal to unit position
        if (x >= unitX0 && x <= unitX1 && y >= unitY0 && y <= unitY1) {
            foundedUnit = unit;
            break;
        }
    }
    // if unit was found in units array
    // currentlyChosenUnit is equal to foundedUnit
    // else is unit is not founded, then
    // currentlyChosenUnit will be null
    Object(__WEBPACK_IMPORTED_MODULE_0__store_unitsStore__["a" /* assignCurrentlyChosenUnit */])(foundedUnit);
    console.log('currentlyChosenUnit', __WEBPACK_IMPORTED_MODULE_0__store_unitsStore__["b" /* currentlyChosenUnit */]);
};
// change unit's moveToX, moveToY
const assignMoveToPosition = (unit, x, y) => {
    //console.error('assignMoveToPosition');
    unit.moveToX = x;
    unit.moveToY = y;
    console.log(unit.name + ' is moving to : x:' + unit.moveToX + ' y:' + unit.moveToY);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = assignMoveToPosition;

// draw Units in the canvas
let setUnit = (unit) => {
    //console.error('setUnit');
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_ctx__["j" /* ctxSave */])();
    let img = new Image();
    img.src = unit.imgPath;
    img.onload = () => {
        Object(__WEBPACK_IMPORTED_MODULE_1__utils_ctx__["c" /* ctxDrawImage */])(img, unit.x, unit.y, unit.width, unit.height);
    };
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_ctx__["h" /* ctxRestore */])();
};
// create Unit and immediatly push it into units array
let createUnit = (name, centerX, centerY, width, height, speed, imgPath = '../../img/unit.svg', rotationSpeed) => {
    //console.error('createUnit');
    let unit = new __WEBPACK_IMPORTED_MODULE_2__Unit__["a" /* default */](name, centerX, centerY, width, height, speed, imgPath, rotationSpeed);
    __WEBPACK_IMPORTED_MODULE_0__store_unitsStore__["c" /* units */].push(unit);
    setUnit(unit);
    return unit;
};


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__unitMath__ = __webpack_require__(5);

class Unit {
    constructor(name, centerX, centerY, width, height, speed, imgPath, rotationSpeed) {
        this.destinationCanvasAngle = 0;
        this.isRotating = false;
        this.name = name;
        this.centerX = centerX;
        this.centerY = centerY;
        this.width = width;
        this.height = height;
        this.x = this.centerX - (this.width / 2);
        this.y = this.centerY - (this.height / 2);
        this.speed = speed;
        this.moveToX = centerX;
        this.moveToY = centerY;
        this.imgPath = imgPath;
        this.rotationSpeed = rotationSpeed;
    }
    assignAngle() {
        this.previousCanvasAngle = this.destinationCanvasAngle;
        this.destinationCanvasAngle = Object(__WEBPACK_IMPORTED_MODULE_0__unitMath__["a" /* calcCanvasAngle */])(this.centerX, this.centerY, this.moveToX, this.moveToY);
        console.log('CLASS UNIT: new desctination has been assign, angle =', this.destinationCanvasAngle);
    }
    setAngleToRemove(newAngle) {
        let angleToRemove = this.makeAnglePositive(newAngle);
        this.angleToRemove = angleToRemove;
    }
    setDestinationCanvasAngle(newAngle) {
        let updatedAngle = this.makeAnglePositive(newAngle);
        this.destinationCanvasAngle = updatedAngle;
    }
    setPreviousCanvasAngle(newAngle) {
        let updatedAngle = this.makeAnglePositive(newAngle);
        this.previousCanvasAngle = updatedAngle;
    }
    setIsRotatingToTrue() {
        this.isRotating = true;
    }
    setIsRotatingToFalse() {
        this.isRotating = false;
    }
    setCurrentRotation(startAngle, finishAngle) {
        let updatedStartAngle = this.makeAnglePositive(startAngle);
        let updatedFinishAngle = this.makeAnglePositive(finishAngle);
    }
    makeAnglePositive(angle) {
        if (angle < 0) {
            return angle + 360;
        }
        else if (angle >= 0) {
            return angle;
        }
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Unit);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map