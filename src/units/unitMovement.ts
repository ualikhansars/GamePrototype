import {ctx} from '../config/map';
import {units}  from '../store/unitsStore';
import {timeout} from '../utils/timeout';
import {loadImage} from '../utils/loadImage';
import {
  ctxSave,
  ctxRestore,
  ctxTranslate,
  ctxRotate,
  ctxClearRect,
  ctxDrawImage,
  ctxTransform,
  ctxFillRect, // test
  ctxFillStyle, // test
  ctxBeginPath,
  ctxStrokeStyle,
  ctxMoveTo,
  ctxLineTo,
  ctxStroke,
  ctxIsPointInPath,
  ctxIsPointInStroke
} from '../utils/ctx';

// move unit to the destination position
export const move = (unit) => {
  console.error('Move');
  loadImage(unit.imgPath, (err, img) => {
    let {speedX, speedY} = calcSpeed(unit);
    let currentMoveToX = unit.moveToX; // save previous moveToPositions
    let currentMoveToY = unit.moveToY;
    //makeMovement(unit, img, currentMoveToX, currentMoveToY,speedX, speedY, 0);
    let path = findPath(unit);
    makeMovement2(unit, img, path)
  });
}

// draw unit every movement speed until unitCenter position is not equal to
// moveTo position
export const makeMovement = (unit, img, currentMoveToX:number, currentMoveToY:number, speedX:number, speedY:number, i:number) => {
    // save previousMoveTo position
    //console.error('Make Movement');
    let prevSpeedX = speedX; // save speedX
    let prevSpeedY = speedY; // save speedY
    if(currentMoveToX !== unit.moveToX || currentMoveToY !== unit.moveToY) {
      console.log('new destination has been chosen');
      return; // new destination position has been chosen
    }
    console.error('speed before x:', speedX, 'y:', speedY);
    let movementSpeed = 50;
    // movement control
    let coefficient = calcCoefficient(unit);
    let greaterPath = calcGreaterSpeed(unit);
    if(i <= coefficient) {
      if(greaterPath === 'x') speedY = 0;
      if(greaterPath === 'y') speedX = 0;
    }
    if(unit.centerX === unit.moveToX) speedX = 0;
    if(unit.centerY === unit.moveToY) speedY = 0;

    unit.centerX += speedX ;
    unit.centerY += speedY;

    console.log('i:', i, 'coefficient:', coefficient);
    console.log('speed x:', speedX, 'speedY:', speedY);

    if(i > coefficient) {
      console.log('i === coefficient');
      i = 0;
    }

    speedX = prevSpeedX; // restore speedX
    speedY = prevSpeedY; // restore speedY

    ctxSave();
    clearMovementUnit(unit);
    ctxTransform(unit);
    unit.x = unit.centerX - (unit.width / 2); // change x and y every time when centerX and centerY is changed
    unit.y = unit.centerY - (unit.height / 2);
    // console.log('MAKE MOVEMENT DRAW ANGLE', unit.destinationCanvasAngle);
    // console.log('MAKE MOVEMENT: DRAW: unit x:',unit.x, 'unit y:', unit.y);
    //console.log('unit destination x:', currentMoveToX, 'y:', currentMoveToY);
    //console.log('unit center x:', unit.centerX, 'y:',unit.centerY);
    ctxDrawImage(img, unit.x, unit.y, unit.width, unit.height);
    ctxRestore();
    i++;
    //console.log('makeMovement');
    if(unit.centerX === currentMoveToX && unit.centerY === currentMoveToY) { // unit is reached it's position
      console.log('unit reached position');
      return;
    }
    //else { // every movement speed repeat this function
      timeout(movementSpeed)
      .then(() => {
        makeMovement(unit, img, currentMoveToX, currentMoveToY, speedX, speedY, i); // recursively call makeMovement
      });
    //}
}

// show path
export const showPath = (unit) => {
  let {speedX, speedY} = calcSpeed(unit);
  let currentX = unit.centerX;
  let currentY = unit.centerY;
  let i = 0;
  let coefficient = calcCoefficient(unit);
  let greaterPath = calcGreaterSpeed(unit);
  while(currentX !== unit.moveToX || currentY !== unit.moveToY) {
    let prevSpeedX = speedX;
    let prevSpeedY = speedY;
    console.error('PATH speedX:', speedX, 'speedY:', speedY);
    if(i <= coefficient) {
      if(greaterPath === 'x') speedY = 0;
      if(greaterPath === 'y') speedX = 0;
    }
    if(currentX === unit.moveToX) speedX = 0;
    if(currentY === unit.moveToY) speedY = 0;
    console.log('speedX:', speedX, 'speedY', speedY);
    currentX += speedX ;
    currentY += speedY;
    if(i > coefficient) i = 0;
    speedX = prevSpeedX;
    speedY = prevSpeedY;
    console.log('speed after speedX:', speedX, 'speedY', speedY);
    ctxFillStyle('green');
    ctxFillRect(currentX - 2, currentY - 2, 4, 4);
    i++; // increment coefficient
  }
  console.log('currentX:', currentX, 'currentY', currentY);
  console.log('moveToX', unit.moveToX, 'moveToY', unit.moveToY);
  ctxFillStyle('red');
  ctxFillRect(currentX - 10, currentY - 10, 20, 20);
}

export const drawPath = (unit) => {
  ctxBeginPath();
  ctxStrokeStyle('green');
  ctxMoveTo(unit.centerX, unit.centerY);
  ctxLineTo(unit.moveToX, unit.moveToY);
  ctxStroke();
}

export const findPath = (unit) => {
  ctxBeginPath();
  let path = [];
  ctxStrokeStyle('green');
  ctxMoveTo(unit.centerX, unit.centerY);
  ctxLineTo(unit.moveToX, unit.moveToY);
  ctxStroke();
  for(let x = 0; x <= 1224; ++x) {
    for(let y = 0; y <= 768; ++y) {
      if(ctx.isPointInStroke(x, y)) {
          path.push({x, y});
      }
    }
  }
  return path;
}

export const makeMovement2 = (unit, img, path) => {
  for(let step of path) {
    unit.centerX = step.x;
    unit.centerY = step.y;
    clearMovementUnit(unit);
    ctxSave();
    ctxTransform(unit);
    unit.x = unit.centerX - (unit.width / 2); // change x and y every time when centerX and centerY is changed
    unit.y = unit.centerY - (unit.height / 2);
    ctxDrawImage(img, unit.x, unit.y, unit.width, unit.height);
    ctxRestore();
  }
}

export const findTurnPoint = (unit) => {
  let currentX = unit.centerX;
  let currentY = unit.centerY;
  let turnPoint;
  let {speedX, speedY} = calcSpeed(unit);
  console.log('speedX:', speedX, 'speedY:', speedY);
  if(unit.centerY <= unit.moveToY) {
    while(currentX !== unit.moveToX) {
      currentX += speedX;
      currentY += speedY;
    }
  }
  else if(unit.centerY > unit.moveToY) {
    while(currentY !== unit.moveToY) {
      currentX += speedX;
      currentY += speedY;
    }
  }
  return {
    turnPointX: currentX,
    turnPointY: currentY
  }
}

export const clearMovementUnit = (unit) => {
  //console.error('clearMovementUnit');
  ctxSave();
  ctxTranslate(unit.centerX, unit.centerY); // translate to rectangle center
  let angle = (unit.destinationCanvasAngle) * (Math.PI / 180);
  ctxRotate(angle); // rotate unit
  ctxTranslate(-unit.centerX, -unit.centerY); // translate to rectangle center
  // console.log('MOVEMENT: CLEAR RECT angle:', unit.destinationCanvasAngle);
  // console.log('MOVEMENT: CLEAR RECT unit x:', unit.x, 'unit y:', unit.y);
  ctxClearRect(unit.x, unit.y, unit.width, unit.height);
  ctxRestore();
}


export const calcSpeed = (unit) => {
    let speedX, speedY;
    if(unit.centerX !== unit.moveToX || unit.centerY !== unit.moveToY) {
      if(unit.centerX < unit.moveToX && unit.centerY < unit.moveToY) {
        speedX = 1;
        speedY = 1;
      }
      else if(unit.centerX > unit.moveToX && unit.centerY > unit.moveToY) {
        speedX = -1;
        speedY = -1;
      }
      else if(unit.centerX < unit.moveToX && unit.centerY > unit.moveToY) {
        speedX = 1;
        speedY = -1;
      }
      else if(unit.centerX > unit.moveToX && unit.centerY < unit.moveToY) {
        speedX = -1;
        speedY = 1;
      }
    }
    return {
      speedX,
      speedY
    }
}

export const calcCoefficient = (unit) => {
  let pathX = Math.abs(unit.moveToX - unit.x);
  let pathY = Math.abs(unit.moveToY - unit.y);
  if(pathX >= pathY) return Math.round(pathX / pathY);
  if(pathY > pathX) return Math.round(pathY / pathX);
}

export const calcGreaterSpeed = (unit) => {
  let pathX = Math.abs(unit.moveToX - unit.x);
  let pathY = Math.abs(unit.moveToY - unit.y);
  if(pathX >= pathY) return 'x';
  if(pathY > pathX) return 'y';
}
