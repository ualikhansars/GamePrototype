import {ctx} from '../config/map';
import {units}  from '../store/unitsStore';
import {rotateUnit} from './unitRotation';
import {timeout} from '../utils/timeout';
import {loadImage} from '../utils/loadImage';

// move unit to the destination position
export const move = (unit) => {
  let {speedX, speedY} = calcSpeed(unit);
  makeMovement(unit, speedX, speedY);
}

// draw unit every movement speed until unitCenter position is not equal to
// moveTo position
export const makeMovement = (unit, speedX:number, speedY:number) => {
  loadImage(unit.imgPath, (err, img) => {
    let movementSpeed = 50;
    // movement control
    if(unit.centerX === unit.moveToX) speedX = 0;
    if(unit.centerY === unit.moveToY) speedY = 0;
    ctx.save();
    clearMovementUnit(unit);
    unit.centerX += speedX ;
    unit.centerY += speedY;
    ctx.translate(unit.centerX, unit.centerY); // translate to rectangle center
    let angle = unit.destinationCanvasAngle * (Math.PI / 180);
    ctx.rotate(angle);
    ctx.translate(-unit.centerX, -unit.centerY); // translate to rectangle center
    unit.x = unit.centerX - (unit.width / 2); // change x and y every time when centerX and centerY is changed
    unit.y = unit.centerY - (unit.height / 2);
    //console.log('MAKE MOVEMENT ANGLE', angle);
    //console.log('MAKE MOVEMENT unit x:',unit.x, 'unit y:', unit.y);
    ctx.drawImage(img, unit.x, unit.y, unit.width, unit.height);
    ctx.restore();
    //console.log('makeMovement');
    if(unit.centerX === unit.moveToX && unit.centerY === unit.moveToY) { // unit is reached it's position
      return;
    } else { // every movement speed repeat this function
      timeout(movementSpeed)
      .then(() => {
        makeMovement(unit, speedX, speedY); // recursively call makeMovement
      });
    }
  });
}

// draw unit every movement speed until unitCenter position is not equal to
// moveTo position
export const makeMovement2 = (unit, speedX:number, speedY:number) => {
  loadImage(unit.imgPath, (err, img) => {
    let movementSpeed = 50;
    // movement control
    if(unit.centerX === unit.moveToX) speedX = 0;
    if(unit.centerY === unit.moveToY) speedY = 0;
    ctx.save();
    clearMovementUnit(unit);
    unit.centerX += speedX ;
    unit.centerY += speedY;
    ctx.translate(unit.centerX, unit.centerY); // translate to rectangle center
    let angle = unit.destinationCanvasAngle * (Math.PI / 180);
    ctx.rotate(angle);
    ctx.translate(-unit.centerX, -unit.centerY); // translate to rectangle center
    unit.x = unit.centerX - (unit.width / 2); // change x and y every time when centerX and centerY is changed
    unit.y = unit.centerY - (unit.height / 2);
    //console.log('MAKE MOVEMENT ANGLE', angle);
    //console.log('MAKE MOVEMENT unit x:',unit.x, 'unit y:', unit.y);
    ctx.drawImage(img, unit.x, unit.y, unit.width, unit.height);
    ctx.restore();
    //console.log('makeMovement');
    if(unit.centerX === unit.moveToX && unit.centerY === unit.moveToY) { // unit is reached it's position
      return;
    } else { // every movement speed repeat this function
      timeout(movementSpeed)
      .then(() => {
        makeMovement2(unit, speedX, speedY); // recursively call makeMovement
      });
    }
  });
}


export const clearMovementUnit = (unit) => {
  //console.log('clearMovementUnit');
  ctx.save();
  ctx.translate(unit.centerX, unit.centerY); // translate to rectangle center
  let angle = unit.destinationCanvasAngle * (Math.PI / 180);
  ctx.rotate(angle); // rotate unit
  ctx.translate(-unit.centerX, -unit.centerY); // translate to rectangle center
  // console.log('CLEAR RECT angle:', angle);
  // console.log('CLEAR RECT unit x:', unit.x, 'unit y:', unit.y);
  ctx.clearRect(unit.x, unit.y, unit.width, unit.height);
  ctx.restore();
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

const calcCoefficient = (unit) => {
  let pathX = Math.abs(unit.destX - unit.x);
  let pathY = Math.abs(unit.destY - unit.y);
  if(pathX >= pathY) return Math.round(pathX / pathY);
  if(pathY > pathX) return Math.round(pathY / pathX);
}
