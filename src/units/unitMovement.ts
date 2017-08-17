import {ctx} from '../config/map';
import {units}  from '../store/unitsStore';
import {rotateUnit} from './unitRotation';
import {timeout} from '../utils/timeout';

// change unit's position until it approaches to moveToPosition
export const moveToPosition = () => {
  console.log('moveToPosition');
}

export const calcSpeed = (unit) => {
  console.log('calcSpeed');
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

export const move = (unit) => {
  let {speedX, speedY} = calcSpeed(unit);
  makeMovement2(unit, speedX, speedY);
}

export const makeMovement = (unit, speedX:number, speedY:number) => {
  console.log('makeMovement');
  while(unit.centerX !== unit.moveToX || unit.centerY !== unit.moveToY) {
    if(unit.centerX === unit.moveToX) speedX = 0;
    if(unit.centerY === unit.moveToY) speedY = 0;
    clearMovementUnit(unit);
    update(unit, speedX, speedY);
  }
}

export const makeMovement2 = (unit, speedX:number, speedY:number) => {
  let movementSpeed = 15;
  if(unit.centerX === unit.moveToX) speedX = 0;
  if(unit.centerY === unit.moveToY) speedY = 0;
  clearMovementUnit(unit);
  ctx.save();
  ctx.translate(unit.centerX, unit.centerY); // translate to rectangle center
  ctx.rotate(unit.destinationCanvasAngle);
  ctx.translate(-unit.centerX, -unit.centerY); // translate to rectangle center
  unit.centerX += speedX ;
  unit.centerY += speedY;
  unit.x = unit.centerX - (unit.width / 2); // change x and y every time when centerX and centerY is changed
  unit.y = unit.centerY - (unit.height / 2);
  ctx.fillRect(unit.x, unit.y, unit.width, unit.height);
  ctx.restore();
  console.log('makeMovement');
  if(unit.centerX === unit.moveToX && unit.centerY === unit.moveToY) {
    return;
  } else { // unit is reached it's position
    timeout(movementSpeed)
    .then(() => {
      makeMovement2(unit, speedX, speedY);
    });
  }

}

const update = (unit, speedX:number, speedY:number) => {
  console.log('update');
  ctx.save();
  ctx.translate(unit.centerX, unit.centerY); // translate to rectangle center
  ctx.rotate(unit.destinationCanvasAngle);
  ctx.translate(-unit.centerX, -unit.centerY); // translate to rectangle center
  unit.centerX += speedX ;
  unit.centerY += speedY;
  unit.x = unit.centerX - (unit.width / 2); // change x and y every time when centerX and centerY is changed
  unit.y = unit.centerY - (unit.height / 2);
  ctx.fillRect(unit.x, unit.y, unit.width, unit.height);
  ctx.restore();
}

export const clearMovementUnit = (unit) => {
  console.log('clearMovementUnit');
  ctx.save();
  ctx.translate(unit.centerX, unit.centerY); // translate to rectangle center
  let angle = unit.destinationCanvasAngle * (Math.PI / 180);
  ctx.rotate(angle); // rotate unit
  ctx.translate(-unit.centerX, -unit.centerY); // translate to rectangle center
  ctx.clearRect(unit.x, unit.y, unit.width, unit.height);
  ctx.restore();
}
