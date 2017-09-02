import {units}  from '../store/unitsStore';
import {timeout} from '../utils/timeout';
import {loadImage} from '../utils/loadImage';
import {context2D} from '../utils/ctx';

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
    // delete previous state
    let deleteX, deleteY;
    if(i > 0) {
      deleteX = path[i - 1].x - (unit.width / 2);
      deleteY = path[i - 1].y - (unit.height / 2);
    } else {
      deleteX = path[i].x  - (unit.width / 2);
      deleteY = path[i].y - (unit.height / 2);
    }
    clearMovementUnit(unit, deleteX, deleteY);
    let x = path[i].x;
    let y = path[i].y;
    unit.centerX = x;
    unit.centerY = y;

    context2D.save();
    context2D.transform(unit);
    unit.x = unit.centerX - (unit.width / 2); // change x and y every time when centerX and centerY is changed
    unit.y = unit.centerY - (unit.height / 2);
    context2D.drawImage(img, unit.x, unit.y, unit.width, unit.height);
    context2D.restore();
    i++;
    timeout(50)
    .then(() => {
      makeMovement(unit, img, path, i, currentMoveToX, currentMoveToY); // recursively call makeMovement
    });
}

export const clearMovementUnit = (unit, deleteX:number, deleteY:number) => {
  //console.error('clearMovementUnit');
  context2D.save();
  context2D.translate(unit.centerX, unit.centerY); // translate to rectangle center
  let angle = (unit.destinationCanvasAngle) * (Math.PI / 180);
  context2D.rotate(angle); // rotate unit
  context2D.translate(-unit.centerX, -unit.centerY); // translate to rectangle center
  context2D.clearRect(deleteX - 1, deleteY - 1, unit.width + 2, unit.height + 2);
  context2D.restore();
}
