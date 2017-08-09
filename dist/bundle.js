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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_map__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_unitsStore__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__units_unitActions__ = __webpack_require__(3);



let infantry = Object(__WEBPACK_IMPORTED_MODULE_2__units_unitActions__["c" /* createUnit */])('Infantry', 200, 40, 100, 50, 3);
console.log('infantry', infantry);
let cavalry = Object(__WEBPACK_IMPORTED_MODULE_2__units_unitActions__["c" /* createUnit */])('Cavalry', 100, 80, 50, 60, 5);
let heavyInfantry = Object(__WEBPACK_IMPORTED_MODULE_2__units_unitActions__["c" /* createUnit */])('HeavyInfantry', 300, 180, 160, 120, 2);
__WEBPACK_IMPORTED_MODULE_0__config_map__["a" /* canvas */].addEventListener('click', (e) => {
    let x = e.offsetX; // get X
    let y = e.offsetY; // get Y
    console.log('Position x', e.offsetX); // get X
    console.log('Position y', e.offsetY); // get Y
    Object(__WEBPACK_IMPORTED_MODULE_2__units_unitActions__["b" /* chooseUnit */])(__WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["c" /* units */], x, y);
});
// set onClickListener for right mouse event
__WEBPACK_IMPORTED_MODULE_0__config_map__["a" /* canvas */].addEventListener('contextmenu', (e) => {
    e.preventDefault();
    let x = e.offsetX; // get X
    let y = e.offsetY; // get Y
    if (__WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["b" /* currentlyChosenUnit */]) {
        Object(__WEBPACK_IMPORTED_MODULE_2__units_unitActions__["a" /* assignMoveToPosition */])(__WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["b" /* currentlyChosenUnit */], x, y); //assign unit's next x and y position
        __WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["b" /* currentlyChosenUnit */].assignAngle(); // assign angle to the unit
        Object(__WEBPACK_IMPORTED_MODULE_2__units_unitActions__["d" /* smoothlyRotateUnit */])(__WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["b" /* currentlyChosenUnit */]); // rotate unit
        //rotateUnit(currentlyChosenUnit);
        // console.error('x:', currentlyChosenUnit.centerX, 'y:', currentlyChosenUnit.centerY, 'destX:', currentlyChosenUnit.moveToX, 'destY:', currentlyChosenUnit.moveToY);
        console.error('Unit angle in degree :', __WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["b" /* currentlyChosenUnit */].angleInDegree);
        //console.error('Unit previosAngleInDegree:', currentlyChosenUnit.previosAngleInDegree);
        console.log('previousCanvasAngle', __WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["b" /* currentlyChosenUnit */].previousCanvasAngle);
        console.error('Canvas angle', __WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["b" /* currentlyChosenUnit */].currentCanvasAngle);
        //console.error('Unit angle in radians :', currentlyChosenUnit.angleInRadian);
        //console.log('Unit:' ,currentlyChosenUnit.x, currentlyChosenUnit.y);
        //console.log('center:', currentlyChosenUnit.centerX, currentlyChosenUnit.centerY);
    }
});
//setInterval(unitsHaveToMove, 300);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return chooseUnit; });
/* unused harmony export setUnit */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createUnit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_unitsStore__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_map__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Unit__ = __webpack_require__(4);



// check if units was clicked by left mouse button
// x - mouse position X
// y - mouse position Y
let chooseUnit = (units, x, y) => {
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
    unit.moveToX = x;
    unit.moveToY = y;
    console.log(unit.name + ' is moving to : x:' + unit.moveToX + ' y:' + unit.moveToY);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = assignMoveToPosition;

// draw Units in the canvas
let setUnit = (unit) => {
    __WEBPACK_IMPORTED_MODULE_1__config_map__["b" /* ctx */].save();
    //ctx.translate(unit.x + unit.width * 0.5, unit.y + unit.height * 0.5); // translate to rectangle center
    //ctx.rotate(unit.angle);
    //ctx.fillRect(unit.x, unit.y, unit.width, unit.height);
    let img = new Image();
    //img.src = '../../img/unit.svg';
    img.src = unit.imgPath;
    img.onload = () => {
        __WEBPACK_IMPORTED_MODULE_1__config_map__["b" /* ctx */].drawImage(img, unit.x, unit.y, unit.width, unit.height);
    };
    __WEBPACK_IMPORTED_MODULE_1__config_map__["b" /* ctx */].restore();
};
// create Unit and immediatly push it into units array
let createUnit = (name, centerX, centerY, width, height, speed, imgPath = '../../img/unit.svg') => {
    let unit = new __WEBPACK_IMPORTED_MODULE_2__Unit__["a" /* default */](name, centerX, centerY, width, height, speed, imgPath);
    __WEBPACK_IMPORTED_MODULE_0__store_unitsStore__["c" /* units */].push(unit);
    setUnit(unit);
    return unit;
};
// load image
const loadImage = (imgPath, callback) => {
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
/* unused harmony export loadImage */

const rotateUnit = (unit) => {
    loadImage(unit.imgPath, (err, img) => {
        if (err)
            throw err;
        __WEBPACK_IMPORTED_MODULE_1__config_map__["b" /* ctx */].save();
        clearUnit(unit); // delete previos drawing unit
        __WEBPACK_IMPORTED_MODULE_1__config_map__["b" /* ctx */].translate(unit.centerX, unit.centerY); // translate to rectangle center
        //let angle = (90 - unit.angleInDegree) * (Math.PI / 180);
        let angle = unit.currentCanvasAngle * (Math.PI / 180);
        __WEBPACK_IMPORTED_MODULE_1__config_map__["b" /* ctx */].rotate(angle); // rotate to look straight to the destination position
        __WEBPACK_IMPORTED_MODULE_1__config_map__["b" /* ctx */].translate(-unit.centerX, -unit.centerY); // translate to rectangle center
        __WEBPACK_IMPORTED_MODULE_1__config_map__["b" /* ctx */].drawImage(img, unit.x, unit.y, unit.width, unit.height);
        __WEBPACK_IMPORTED_MODULE_1__config_map__["b" /* ctx */].restore();
    });
};
/* unused harmony export rotateUnit */

const changeAngle = (unit, img, previous, current) => {
    return new Promise(resolve => {
        __WEBPACK_IMPORTED_MODULE_1__config_map__["b" /* ctx */].save();
        clearUnit(unit); // delete previos drawing unit
        __WEBPACK_IMPORTED_MODULE_1__config_map__["b" /* ctx */].translate(unit.centerX, unit.centerY); // translate to rectangle center
        //let angle = (90 - unit.angleInDegree) * (Math.PI / 180);
        let angle = previous * (Math.PI / 180);
        __WEBPACK_IMPORTED_MODULE_1__config_map__["b" /* ctx */].rotate(angle); // rotate to look straight to the destination position
        __WEBPACK_IMPORTED_MODULE_1__config_map__["b" /* ctx */].translate(-unit.centerX, -unit.centerY); // translate to rectangle center
        __WEBPACK_IMPORTED_MODULE_1__config_map__["b" /* ctx */].drawImage(img, unit.x, unit.y, unit.width, unit.height);
        __WEBPACK_IMPORTED_MODULE_1__config_map__["b" /* ctx */].restore();
        resolve();
    });
};
/* unused harmony export changeAngle */

const timeout = (time, i) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('timeout', i);
            resolve('done');
        }, time);
    });
};
/* unused harmony export timeout */

const smoothlyRotateUnit = (unit) => {
    loadImage(unit.imgPath, (err, img) => {
        if (err)
            throw err;
        let rotationDirection;
        if (unit.currentCanvasAngle > unit.previousCanvasAngle) {
            rotationDirection = 1;
        }
        else if (unit.currentCanvasAngle < unit.previousCanvasAngle) {
            rotationDirection = -1;
        }
        console.log(rotationDirection);
        let previous = unit.previousCanvasAngle;
        let current = unit.currentCanvasAngle;
        console.log('difference', previous + ":" + current);
        makeRotation(unit, img, previous, current, rotationDirection, 20);
        // for(let i = previous; i!== current; i+=rotationSpeed) {
        //   (function(){    // create a closure (new scope)
        //   var _i = i;   // make a local copy of `i` from the outer scope
        //   timeout().then(() => changeAngle(unit, img, _i, current))
        //   .then(() => speed += rotationSpeed);
        //   console.log(_i);
        //   })();
        // }
        // while(previous !== current) {
        //   (function() {
        //     let _previous = previous;
        //     timeout().then(() => changeAngle(unit, img, _previous, current))
        //     .then(() => {
        //       console.log('rotation speed increase');
        //       previous += rotationSpeed;
        //     });
        //   })();
        // }
    });
};
/* harmony export (immutable) */ __webpack_exports__["d"] = smoothlyRotateUnit;

const makeRotation = (unit, img, previous, current, rotationDirection, rotationSpeed) => {
    if (previous !== current) {
        (function () {
            let _previous = previous;
            timeout(rotationSpeed, previous).then(() => changeAngle(unit, img, _previous, current))
                .then(() => {
                console.log('make rotation');
                makeRotation(unit, img, previous += rotationDirection, current, rotationDirection, rotationSpeed);
            });
        })();
    }
};
const clearUnit = (unit) => {
    __WEBPACK_IMPORTED_MODULE_1__config_map__["b" /* ctx */].save();
    __WEBPACK_IMPORTED_MODULE_1__config_map__["b" /* ctx */].translate(unit.centerX, unit.centerY); // translate to rectangle center
    let angle = unit.previousCanvasAngle * (Math.PI / 180);
    __WEBPACK_IMPORTED_MODULE_1__config_map__["b" /* ctx */].rotate(angle); // rotate unit
    __WEBPACK_IMPORTED_MODULE_1__config_map__["b" /* ctx */].translate(-unit.centerX, -unit.centerY); // translate to rectangle center
    __WEBPACK_IMPORTED_MODULE_1__config_map__["b" /* ctx */].clearRect(unit.x, unit.y, unit.width, unit.height);
    __WEBPACK_IMPORTED_MODULE_1__config_map__["b" /* ctx */].restore();
};
/* unused harmony export clearUnit */

// change unit's position until it approaches to moveToPosition
const unitsHaveToMove = () => {
    for (let unit of __WEBPACK_IMPORTED_MODULE_0__store_unitsStore__["c" /* units */]) {
        if (unit.centerX !== unit.moveToX || unit.centerY !== unit.moveToY) {
            if (unit.centerX < unit.moveToX && unit.centerY < unit.moveToY) {
                unit.moveToPosition(1, 1);
            }
            else if (unit.centerX > unit.moveToX && unit.centerY > unit.moveToY) {
                unit.moveToPosition(-1, -1);
            }
            else if (unit.centerX < unit.moveToX && unit.centerY > unit.moveToY) {
                unit.moveToPosition(1, -1);
            }
            else if (unit.centerX > unit.moveToX && unit.centerY < unit.moveToY) {
                unit.moveToPosition(-1, 1);
            }
        }
        //setUnit(unit);
    }
};
/* unused harmony export unitsHaveToMove */



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_map__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__unitMath__ = __webpack_require__(5);


class Unit {
    constructor(name, centerX, centerY, width, height, speed, imgPath) {
        this.angleInDegree = 90; // current unit's angle
        this.currentCanvasAngle = 0;
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
    }
    update(speedX, speedY) {
        __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].save();
        // ctx.translate(this.x + this.width * 0.5, this.y + this.height * 0.5); // translate to rectangle center
        // ctx.rotate(this.angle);
        // this.centerX += speedX ;
        // this.centerY += speedY;
        // this.x = this.centerX - (this.width / 2); // change x and y every time when centerX and centerY is changed
        // this.y = this.centerY - (this.height / 2);
        __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].fillRect(this.x, this.y, this.width, this.height);
        __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].restore();
    }
    assignAngle() {
        this.previousAngleInDegree = this.angleInDegree;
        this.previousAngleInRadian = this.angleInRadian;
        this.previousCanvasAngle = this.currentCanvasAngle;
        this.angleInRadian = Object(__WEBPACK_IMPORTED_MODULE_1__unitMath__["b" /* calcDestinationAngle */])(this.centerX, this.centerY, this.moveToX, this.moveToY);
        this.angleInDegree = Object(__WEBPACK_IMPORTED_MODULE_1__unitMath__["c" /* calcDestinationAngleInDegrees */])(this.centerX, this.centerY, this.moveToX, this.moveToY);
        this.currentCanvasAngle = Object(__WEBPACK_IMPORTED_MODULE_1__unitMath__["a" /* calcCanvasAngle */])(this.centerX, this.centerY, this.moveToX, this.moveToY);
    }
    moveToPosition(speedX, speedY) {
        if (this.centerX !== this.moveToX || this.centerY !== this.moveToY) {
            __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].clearRect(this.x, this.y, this.width, this.height);
            //ctx.clearRect(0, 0, 1224, 768);
            this.update(speedX, speedY);
        }
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Unit);


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
/* harmony export (immutable) */ __webpack_exports__["b"] = calcDestinationAngle;

// get unit's position and destination position and return angle in radians between unit and destination
const calcDestinationAngleInDegrees = (unitX, unitY, destX, destY) => {
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
/* harmony export (immutable) */ __webpack_exports__["c"] = calcDestinationAngleInDegrees;

// calculate rotate angle in canvas degrees
const calcCanvasAngle = (unitX, unitY, destX, destY) => {
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



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map