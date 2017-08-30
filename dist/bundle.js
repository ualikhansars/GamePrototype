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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ctx", function() { return ctx; });
// global variables
const WIDTH = 1224;
/* harmony export (immutable) */ __webpack_exports__["WIDTH"] = WIDTH;

const HEIGHT = 768;
/* harmony export (immutable) */ __webpack_exports__["HEIGHT"] = HEIGHT;

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ctxIsPointInStroke = exports.ctxIsPointInPath = exports.ctxStroke = exports.ctxLineTo = exports.ctxMoveTo = exports.ctxStrokeStyle = exports.ctxBeginPath = exports.ctxTransform = exports.ctxFillStyle = exports.ctxClearRect = exports.ctxRotate = exports.ctxTranslate = exports.ctxDrawImage = exports.ctxFillRect = exports.ctxRestore = exports.ctxSave = undefined;

var _map = __webpack_require__(0);

var ctxSave = exports.ctxSave = function ctxSave() {
  _map.ctx.save();
};

var ctxRestore = exports.ctxRestore = function ctxRestore() {
  _map.ctx.restore();
};

var ctxFillRect = exports.ctxFillRect = function ctxFillRect(x, y, width, height) {
  _map.ctx.fillRect(x, y, width, height);
};

var ctxDrawImage = exports.ctxDrawImage = function ctxDrawImage(img, x, y, width, height) {
  _map.ctx.drawImage(img, x, y, width, height);
};

var ctxTranslate = exports.ctxTranslate = function ctxTranslate(centerX, centerY) {
  _map.ctx.translate(centerX, centerY);
};

var ctxRotate = exports.ctxRotate = function ctxRotate(angle) {
  _map.ctx.rotate(angle);
};

var ctxClearRect = exports.ctxClearRect = function ctxClearRect(x, y, width, height) {
  _map.ctx.clearRect(x, y, width, height);
};

var ctxFillStyle = exports.ctxFillStyle = function ctxFillStyle(color) {
  _map.ctx.fillStyle = color;
};

var ctxTransform = exports.ctxTransform = function ctxTransform(unit) {
  ctxTranslate(unit.centerX, unit.centerY); // translate to rectangle center
  var angle = unit.destinationCanvasAngle * (Math.PI / 180);
  ctxRotate(angle);
  ctxTranslate(-unit.centerX, -unit.centerY); // translate to rectangle center
};

var ctxBeginPath = exports.ctxBeginPath = function ctxBeginPath() {
  _map.ctx.beginPath();
};

var ctxStrokeStyle = exports.ctxStrokeStyle = function ctxStrokeStyle(color) {
  _map.ctx.strokeStyle = color;
};

var ctxMoveTo = exports.ctxMoveTo = function ctxMoveTo(x, y) {
  _map.ctx.moveTo(x, y);
};

var ctxLineTo = exports.ctxLineTo = function ctxLineTo(x, y) {
  _map.ctx.lineTo(x, y);
};

var ctxStroke = exports.ctxStroke = function ctxStroke() {
  _map.ctx.stroke();
};

var ctxIsPointInPath = exports.ctxIsPointInPath = function ctxIsPointInPath(x, y, fillRull) {
  return _map.ctx.isPointInPath(x, y, fillRull);
};

var ctxIsPointInStroke = exports.ctxIsPointInStroke = function ctxIsPointInStroke(x, y) {
  console.log('ctxIsPointInStroke');
  _map.ctx.isPointInStroke(x, y);
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_map__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_unitsStore__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__units_unitRotation__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__units_unitMovement__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__units_unitActions__ = __webpack_require__(7);





let infantry = Object(__WEBPACK_IMPORTED_MODULE_4__units_unitActions__["c" /* createUnit */])('Infantry', 200, 40, 100, 50, 3, undefined, 20);
console.log('infantry', infantry);
let cavalry = Object(__WEBPACK_IMPORTED_MODULE_4__units_unitActions__["c" /* createUnit */])('Cavalry', 100, 300, 50, 30, 5, undefined, 15);
let heavyInfantry = Object(__WEBPACK_IMPORTED_MODULE_4__units_unitActions__["c" /* createUnit */])('HeavyInfantry', 300, 180, 160, 120, 2, undefined, 30);
__WEBPACK_IMPORTED_MODULE_0__config_map__["canvas"].addEventListener('click', (e) => {
    console.error('Click');
    let x = e.offsetX; // get X
    let y = e.offsetY; // get Y
    console.log('Position x', e.offsetX); // get X
    console.log('Position y', e.offsetY); // get Y
    Object(__WEBPACK_IMPORTED_MODULE_4__units_unitActions__["b" /* chooseUnit */])(__WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["c" /* units */], x, y);
});
// set onClickListener for right mouse event
__WEBPACK_IMPORTED_MODULE_0__config_map__["canvas"].addEventListener('contextmenu', (e) => {
    console.error('Right Mouse Click');
    e.preventDefault();
    let x = e.offsetX; // get X
    let y = e.offsetY; // get Y
    if (__WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["b" /* currentlyChosenUnit */]) {
        Object(__WEBPACK_IMPORTED_MODULE_4__units_unitActions__["a" /* assignMoveToPosition */])(__WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["b" /* currentlyChosenUnit */], x, y); //assign unit's next x and y position
        __WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["b" /* currentlyChosenUnit */].assignAngle(); // assign angle to the unit
        Object(__WEBPACK_IMPORTED_MODULE_3__units_unitMovement__["a" /* drawPath */])(__WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["b" /* currentlyChosenUnit */]);
        console.error('PATH:', Object(__WEBPACK_IMPORTED_MODULE_3__units_unitMovement__["b" /* findPath */])(__WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["b" /* currentlyChosenUnit */]));
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_map__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_timeout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_loadImage__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_ctx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_ctx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__utils_ctx__);




// move unit to the destination position
const move = (unit) => {
    console.error('Move');
    Object(__WEBPACK_IMPORTED_MODULE_2__utils_loadImage__["a" /* loadImage */])(unit.imgPath, (err, img) => {
        let { speedX, speedY } = calcSpeed(unit);
        let currentMoveToX = unit.moveToX; // save previous moveToPositions
        let currentMoveToY = unit.moveToY;
        //makeMovement(unit, img, currentMoveToX, currentMoveToY,speedX, speedY, 0);
        let path = findPath(unit);
        makeMovement2(unit, img, path);
    });
};
/* harmony export (immutable) */ __webpack_exports__["c"] = move;

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
    let coefficient = calcCoefficient(unit);
    let greaterPath = calcGreaterSpeed(unit);
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
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_ctx__["ctxSave"])();
    clearMovementUnit(unit);
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_ctx__["ctxTransform"])(unit);
    unit.x = unit.centerX - (unit.width / 2); // change x and y every time when centerX and centerY is changed
    unit.y = unit.centerY - (unit.height / 2);
    // console.log('MAKE MOVEMENT DRAW ANGLE', unit.destinationCanvasAngle);
    // console.log('MAKE MOVEMENT: DRAW: unit x:',unit.x, 'unit y:', unit.y);
    //console.log('unit destination x:', currentMoveToX, 'y:', currentMoveToY);
    //console.log('unit center x:', unit.centerX, 'y:',unit.centerY);
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_ctx__["ctxDrawImage"])(img, unit.x, unit.y, unit.width, unit.height);
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_ctx__["ctxRestore"])();
    i++;
    //console.log('makeMovement');
    if (unit.centerX === currentMoveToX && unit.centerY === currentMoveToY) {
        console.log('unit reached position');
        return;
    }
    //else { // every movement speed repeat this function
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_timeout__["a" /* timeout */])(movementSpeed)
        .then(() => {
        makeMovement(unit, img, currentMoveToX, currentMoveToY, speedX, speedY, i); // recursively call makeMovement
    });
    //}
};
/* unused harmony export makeMovement */

// show path
const showPath = (unit) => {
    let { speedX, speedY } = calcSpeed(unit);
    let currentX = unit.centerX;
    let currentY = unit.centerY;
    let i = 0;
    let coefficient = calcCoefficient(unit);
    let greaterPath = calcGreaterSpeed(unit);
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
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_ctx__["ctxFillStyle"])('green');
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_ctx__["ctxFillRect"])(currentX - 2, currentY - 2, 4, 4);
        i++; // increment coefficient
    }
    console.log('currentX:', currentX, 'currentY', currentY);
    console.log('moveToX', unit.moveToX, 'moveToY', unit.moveToY);
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_ctx__["ctxFillStyle"])('red');
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_ctx__["ctxFillRect"])(currentX - 10, currentY - 10, 20, 20);
};
/* unused harmony export showPath */

const drawPath = (unit) => {
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_ctx__["ctxBeginPath"])();
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_ctx__["ctxStrokeStyle"])('green');
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_ctx__["ctxMoveTo"])(unit.centerX, unit.centerY);
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_ctx__["ctxLineTo"])(unit.moveToX, unit.moveToY);
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_ctx__["ctxStroke"])();
};
/* harmony export (immutable) */ __webpack_exports__["a"] = drawPath;

const findPath = (unit) => {
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_ctx__["ctxBeginPath"])();
    let path = [];
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_ctx__["ctxStrokeStyle"])('green');
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_ctx__["ctxMoveTo"])(unit.centerX, unit.centerY);
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_ctx__["ctxLineTo"])(unit.moveToX, unit.moveToY);
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_ctx__["ctxStroke"])();
    for (let x = 0; x <= 1224; ++x) {
        for (let y = 0; y <= 768; ++y) {
            if (__WEBPACK_IMPORTED_MODULE_0__config_map__["ctx"].isPointInStroke(x, y)) {
                path.push({ x, y });
            }
        }
    }
    return path;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = findPath;

const makeMovement2 = (unit, img, path) => {
    for (let step of path) {
        unit.centerX = step.x;
        unit.centerY = step.y;
        clearMovementUnit(unit);
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_ctx__["ctxSave"])();
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_ctx__["ctxTransform"])(unit);
        unit.x = unit.centerX - (unit.width / 2); // change x and y every time when centerX and centerY is changed
        unit.y = unit.centerY - (unit.height / 2);
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_ctx__["ctxDrawImage"])(img, unit.x, unit.y, unit.width, unit.height);
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_ctx__["ctxRestore"])();
    }
};
/* unused harmony export makeMovement2 */

const findTurnPoint = (unit) => {
    let currentX = unit.centerX;
    let currentY = unit.centerY;
    let turnPoint;
    let { speedX, speedY } = calcSpeed(unit);
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
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_ctx__["ctxSave"])();
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_ctx__["ctxTranslate"])(unit.centerX, unit.centerY); // translate to rectangle center
    let angle = (unit.destinationCanvasAngle) * (Math.PI / 180);
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_ctx__["ctxRotate"])(angle); // rotate unit
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_ctx__["ctxTranslate"])(-unit.centerX, -unit.centerY); // translate to rectangle center
    // console.log('MOVEMENT: CLEAR RECT angle:', unit.destinationCanvasAngle);
    // console.log('MOVEMENT: CLEAR RECT unit x:', unit.x, 'unit y:', unit.y);
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_ctx__["ctxClearRect"])(unit.x, unit.y, unit.width, unit.height);
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_ctx__["ctxRestore"])();
};
/* unused harmony export clearMovementUnit */

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
/* unused harmony export calcSpeed */

const calcCoefficient = (unit) => {
    let pathX = Math.abs(unit.moveToX - unit.x);
    let pathY = Math.abs(unit.moveToY - unit.y);
    if (pathX >= pathY)
        return Math.round(pathX / pathY);
    if (pathY > pathX)
        return Math.round(pathY / pathX);
};
/* unused harmony export calcCoefficient */

const calcGreaterSpeed = (unit) => {
    let pathX = Math.abs(unit.moveToX - unit.x);
    let pathY = Math.abs(unit.moveToY - unit.y);
    if (pathX >= pathY)
        return 'x';
    if (pathY > pathX)
        return 'y';
};
/* unused harmony export calcGreaterSpeed */



/***/ }),
/* 5 */
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
/* 6 */
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return chooseUnit; });
/* unused harmony export setUnit */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createUnit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_unitsStore__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ctx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ctx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__utils_ctx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Unit__ = __webpack_require__(8);



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
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_ctx__["ctxSave"])();
    let img = new Image();
    img.src = unit.imgPath;
    img.onload = () => {
        Object(__WEBPACK_IMPORTED_MODULE_1__utils_ctx__["ctxDrawImage"])(img, unit.x, unit.y, unit.width, unit.height);
    };
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_ctx__["ctxRestore"])();
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__unitMath__ = __webpack_require__(9);

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


/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_map__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_loadImage__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_timeout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__unitMath__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__unitMovement__ = __webpack_require__(4);





// change angle depends on received data
const changeAngle = (unit, img, changingAngle, current) => {
    //console.error('changeAngle');
    return new Promise(resolve => {
        __WEBPACK_IMPORTED_MODULE_0__config_map__["ctx"].save();
        clearUnit(unit); // delete previos drawing unit
        __WEBPACK_IMPORTED_MODULE_0__config_map__["ctx"].translate(unit.centerX, unit.centerY); // translate to rectangle center
        let angle = changingAngle * (Math.PI / 180);
        //console.log('CHANGE ANGLE: draw unit degree:', changingAngle);
        __WEBPACK_IMPORTED_MODULE_0__config_map__["ctx"].rotate(angle); // rotate to look straight to the destination position
        __WEBPACK_IMPORTED_MODULE_0__config_map__["ctx"].translate(-unit.centerX, -unit.centerY); // translate to rectangle center
        __WEBPACK_IMPORTED_MODULE_0__config_map__["ctx"].drawImage(img, unit.x, unit.y, unit.width, unit.height);
        __WEBPACK_IMPORTED_MODULE_0__config_map__["ctx"].restore();
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
    __WEBPACK_IMPORTED_MODULE_0__config_map__["ctx"].save();
    __WEBPACK_IMPORTED_MODULE_0__config_map__["ctx"].translate(unit.centerX, unit.centerY); // translate to rectangle center
    let angle = unit.angleToRemove * (Math.PI / 180);
    //console.log('ROTATION: angle to remove:', unit.angleToRemove);
    __WEBPACK_IMPORTED_MODULE_0__config_map__["ctx"].rotate(angle); // rotate unit
    __WEBPACK_IMPORTED_MODULE_0__config_map__["ctx"].translate(-unit.centerX, -unit.centerY); // translate to rectangle center
    __WEBPACK_IMPORTED_MODULE_0__config_map__["ctx"].clearRect(unit.x - 1, unit.y - 1, unit.width + 2, unit.height + 2);
    __WEBPACK_IMPORTED_MODULE_0__config_map__["ctx"].restore();
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
            .then(() => Object(__WEBPACK_IMPORTED_MODULE_4__unitMovement__["c" /* move */])(unit)); // make movement
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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map