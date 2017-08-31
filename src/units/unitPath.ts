import {ctx} from '../config/map';
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

export const filterPath = (unit, path) => {
  let startPath = path[0];
  let finishPath = path[path.length - 1];
  let startDifference = Math.abs((unit.centerX - startPath.x) + unit.centerY - startPath.y);
  console.log('startDifference', startDifference);
  let finishDifference = Math.abs((unit.centerX - finishPath.x) + unit.centerY - finishPath.y);
  console.log('finishDifference', finishDifference);
  if(startDifference > finishDifference) { // reverse array
    let updatedPath = [];
    for(let i = path.length - 1; i > 0; --i) {
      updatedPath.push(path[i]);
    }
    updatedPath.push({x: unit.moveToX, y: unit.moveToY});
    path = updatedPath;
  }
  return path;
}
