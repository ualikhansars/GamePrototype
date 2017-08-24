import {units}  from '../store/unitsStore';
import {timeout} from '../utils/timeout';
import {loadImage} from '../utils/loadImage';
import {
  ctxSave,
  ctxRestore,
  ctxTranslate,
  ctxRotate,
  ctxClearRect,
  ctxDrawImage
} from '../utils/ctx';

// move unit to the destination position
export const move = (unit) => {
  console.error('Move');
  loadImage(unit.imgPath, (err, img) => {
    let {speedX, speedY} = calcSpeed(unit);
    let currentMoveToX = unit.moveToX; // save previous moveToPositions
    let currentMoveToY = unit.moveToY;
    makeMovement(unit, img, currentMoveToX, currentMoveToY,speedX, speedY);
  });
}

// draw unit every movement speed until unitCenter position is not equal to
// moveTo position
export const makeMovement = (unit, img, currentMoveToX:number, currentMoveToY:number, speedX:number, speedY:number) => {
  //loadImage(unit.imgPath, (err, img) => {
    // save previousMoveTo position
    console.error('Make Movement');
    if(currentMoveToX !== unit.moveToX || currentMoveToY !== unit.moveToY) {
      console.log('new destination has been chosen');
      return; // new destination position has been chosen
    }
    let movementSpeed = 50;
    // movement control
    if(unit.centerX === unit.moveToX) speedX = 0;
    if(unit.centerY === unit.moveToY) speedY = 0;
    ctxSave();
    clearMovementUnit(unit);
    unit.centerX += speedX ;
    unit.centerY += speedY;
    ctxTranslate(unit.centerX, unit.centerY); // translate to rectangle center
    let angle = unit.destinationCanvasAngle * (Math.PI / 180);
    ctxRotate(angle);
    ctxTranslate(-unit.centerX, -unit.centerY); // translate to rectangle center
    unit.x = unit.centerX - (unit.width / 2); // change x and y every time when centerX and centerY is changed
    unit.y = unit.centerY - (unit.height / 2);
    //console.log('MAKE MOVEMENT DRAW ANGLE', unit.destinationCanvasAngle);
    //console.log('MAKE MOVEMENT: DRAW: unit x:',unit.x, 'unit y:', unit.y);
    console.log('unit destination x:', currentMoveToX, 'y:', currentMoveToY);
    console.log('unit center x:', unit.centerX, 'y:',unit.centerY);
    ctxDrawImage(img, unit.x, unit.y, unit.width, unit.height);
    ctxRestore();
    //console.log('makeMovement');
    if(unit.centerX === currentMoveToX && unit.centerY === currentMoveToY) { // unit is reached it's position
      console.log('unit reached position');
      return;
    }
    //else { // every movement speed repeat this function
      console.log('unit movement recursion');
      timeout(movementSpeed)
      .then(() => {
        makeMovement(unit, img, currentMoveToX, currentMoveToY, speedX, speedY); // recursively call makeMovement
      });
    //}
  //});
}


export const clearMovementUnit = (unit) => {
  console.error('clearMovementUnit');
  ctxSave();
  ctxTranslate(unit.centerX, unit.centerY); // translate to rectangle center
  let angle = (unit.destinationCanvasAngle) * (Math.PI / 180);
  ctxRotate(angle); // rotate unit
  ctxTranslate(-unit.centerX, -unit.centerY); // translate to rectangle center
  //console.log('MOVEMENT: CLEAR RECT angle:', unit.destinationCanvasAngle);
  //console.log('MOVEMENT: CLEAR RECT unit x:', unit.x, 'unit y:', unit.y);
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
