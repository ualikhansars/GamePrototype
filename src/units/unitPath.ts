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

export const naiveLineDrawingAlgorithm = (unit) => {
// algorithm:
//   dx = x2 - x1
//   dy = y2 - y1
//   for x from x1 to x2 {
//    y = y1 + dy * (x - x1) / dx
//    plot(x, y)
// }
  let dx = unit.moveToX - unit.centerX;
  let dy = unit.moveToY - unit.centerY;
  let x1 = unit.centerX;
  let x2 = unit.moveToX;
  let y1 = unit.centerY;
  let y2 = unit.moveToY;
  let startX, finishX;
  console.log('dx', dx);
  console.log('dy', dy);
  console.error('x1:', x1, 'x2:', x2);
  console.error('y1:', y1, 'y2:', y2);
  let inc;
  if(x1 <= x2) {
    console.log('x1 <= x2');
    if(Math.abs(dx) >= Math.abs(dy)) {
      console.log('dx > dy')
      if(y1 > y2) {
        console.log('y1 > y2')
        for(let x = x1; x <= x2; ++x) {
          let y = Math.round(y1 + dy * (x - x1) / dx);
          ctx.fillStyle = "green";
          ctx.fillRect(x, y, 1, 1);
        }
      }
      if(y1 <= y2) { // work
        console.log('y1 <= y2')
        for(let x = x1; x <= x2; ++x) {
          let y = Math.round(y1 + dy * (x - x1) / dx);
          //console.log('x:', x, 'y:', y);
          ctx.fillStyle = "green";
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }
    if(Math.abs(dx) < Math.abs(dy)) {
      console.log('dx < dy');
      if(y1 > y2) {
        console.log('y1 > y2'); // work
        for(let y = y1; y >= y2; --y) {
          let x = Math.round(x1 + dx * (y - y1) / dy);
          //console.log('x:', x, 'y:', y);
          ctx.fillStyle = "green";
          ctx.fillRect(x, y, 1, 1);
        }
      }
      if(y1 <= y2) {
        console.log('y1 <= y2')
        for(let y = y1; y <= y2; ++y) {
          let x = Math.round(x1 + dx * (y - y1) / dy);
          //console.log('x:', x, 'y:', y);
          ctx.fillStyle = "green";
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }
  } // end if x1 < x2
  ///////////////////
  ///////////////////
  if(x1 > x2) {
    console.log('x1 > x2');
    if(Math.abs(dx) >= Math.abs(dy)) {
      console.log('dx >= dy');
      if(y1 > y2) {
        console.log('y1 > y2');
        for(let x = x1; x >= x2; --x) {
          let y = Math.round(y1 + dy * (x - x1) / dx);
          // console.log('x:', x, 'y:', y);
          ctx.fillStyle = "green";
          ctx.fillRect(x, y, 1, 1);
        }
      }
      if(y1 <= y2) {
        console.log('y1 <= y2');
        for(let x = x1; x >= x2; --x) {
          let y = Math.round(y1 + dy * (x - x1) / dx);
          // console.log('x:', x, 'y:', y);
          ctx.fillStyle = "green";
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }
    if(Math.abs(dx) < Math.abs(dy)) {
      console.log('dy > dx');
      if(y1 > y2) {
        console.log('y1 > y2');
        for(let y = y1; y >= y2; --y) {
          let x = Math.round(x1 + dx * (y - y1) / dy);
          // console.log('x:', x, 'y:', y);
          ctx.fillStyle = "green";
          ctx.fillRect(x, y, 1, 1);
        }
      }
      console.log('y1 <= y2'); // not work
      if(y1 <= y2) {
        for(let y = y1; y <= y2; ++y) {
          let x = Math.round(x1 + dx * (y - y1) / dy);
          // console.log('x:', x, 'y:', y);
          ctx.fillStyle = "green";
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }
  }

}

export const bresenhamsLineAlgorithm = (unit) => {
  // function line(x0, y0, x1, y1)
  //    real deltax := x1 - x0
  //    real deltay := y1 - y0
  //    real deltaerr := abs(deltay / deltax)    // Assume deltax != 0 (line is not vertical),
  //          // note that this division needs to be done in a way that preserves the fractional part
  //    real error := 0.0 // No error at start
  //    int y := y0
  //    for x from x0 to x1
  //        plot(x,y)
  //        error := error + deltaerr
  //        if error ≥ 0.5 then
  //            y := y + 1
  //            error := error - 1.0
  let x0 = unit.centerX;
  let x1 = unit.moveToX;
  let y0 = unit.centerY;
  let y1 = unit.moveToY;
  let dx = x1 - x0;
  let dy = y1 - y0;
  console.log('x0:', x0, 'x1:', x1);
  console.log('y0:', y0, 'y1:', y1);
  console.log('dx:', dx, 'dy:', dy);
  let deltaError = Math.abs(dy / dx);
  let error = 0.0;
  let y = y0;
  for(let x = x0; x <= x1; ++x) {
    console.log('for loop');
    ctx.fillStyle = "green";
    ctx.fillRect(x, y, 1, 1);
    error += deltaError;
    if(error >= 0.5) {
      y += y1;
      error -= 1.0;
    }
  }
}
