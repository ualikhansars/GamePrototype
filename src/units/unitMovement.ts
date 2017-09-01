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
} from '../utils/ctx';

import {
  calcSpeed,
  calcCoefficient,
  calcGreaterSpeed
} from './unitUtils';

import {
  findPath
} from './unitPath';

// move unit to the destination position
export const move = (unit, path) => {
  console.error('Move');
  loadImage(unit.imgPath, (err, img) => {
    let {speedX, speedY} = calcSpeed(unit);
    let currentMoveToX = unit.moveToX; // save previous moveToPositions
    let currentMoveToY = unit.moveToY;
    //makeMovement(unit, img, currentMoveToX, currentMoveToY,speedX, speedY, 0);
    // let path = findPath(unit);
    // let updatedPath = filterPath(unit, path);
    makeMovement(unit, img, path, 0, currentMoveToX, currentMoveToY);
  });
}



export const makeMovement = (unit, img, path, i, currentMoveToX:number, currentMoveToY:number) => {
    if(path[i].x === unit.moveToX && path[i].y === unit.moveToY) return; // unit reach destination point

    if(currentMoveToX !== unit.moveToX || currentMoveToY !== unit.moveToY) {
      console.log('new destination has been chosen');
      return; // new destination position has been chosen
    }
    let x = path[i].x;
    let y = path[i].y;
    unit.centerX = x;
    unit.centerY = y;
    clearMovementUnit(unit);
    ctxSave();
    ctxTransform(unit);
    unit.x = unit.centerX - (unit.width / 2); // change x and y every time when centerX and centerY is changed
    unit.y = unit.centerY - (unit.height / 2);
    ctxDrawImage(img, unit.x, unit.y, unit.width, unit.height);
    ctxRestore();
    i++;
    console.log('i', i);
    timeout(50)
    .then(() => {
      makeMovement(unit, img, path, i, currentMoveToX, currentMoveToY); // recursively call makeMovement
    });
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
