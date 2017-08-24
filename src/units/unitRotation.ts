import {ctx} from '../config/map';
import {loadImage} from '../utils/loadImage';
import {timeout} from '../utils/timeout';
import {
  chooseRotationDirection,
  makeAnglePositive
} from './unitMath';

import {move} from './unitMovement';

// change angle depends on received data
export const changeAngle = (unit,img, changingAngle, current) => {
  return new Promise(resolve => {
    ctx.save();
    clearUnit(unit); // delete previos drawing unit
    ctx.translate(unit.centerX, unit.centerY); // translate to rectangle center
    let angle = changingAngle * (Math.PI / 180);
    console.log('CHANGE ANGLE: draw unit degree:', changingAngle);
    ctx.rotate(angle); // rotate to look straight to the destination position
    ctx.translate(-unit.centerX, -unit.centerY); // translate to rectangle center
    ctx.drawImage(img, unit.x, unit.y, unit.width, unit.height);
    ctx.restore();
    resolve();
  });
}

export const rotateAndMove = (unit) => {
  //console.error('rotateUnit');
  return new Promise(resolve => {
    loadImage(unit.imgPath, (err, img) => { // load image, then rotate unit
      if(err) throw err;
      let isRotating = unit.isRotating;
      let rotationSpeed = unit.rotationSpeed;
      let initialStartAngle = unit.previousCanvasAngle;
      let initialFinishAngle = unit.destinationCanvasAngle;
      let {startAngle, finishAngle, rotationDirection} = chooseRotationDirection(initialStartAngle, initialFinishAngle);
      let changingAngle = startAngle;
      //console.error('ROTATE UNIT: startAngle:', startAngle, 'finishAngle:', finishAngle, 'direction:', rotationDirection);
      if(!isRotating) {
        unit.setIsRotatingToTrue();
        makeRotation(unit, img, startAngle, changingAngle, finishAngle, rotationDirection, rotationSpeed);
      }
    });
    resolve();
  });
}

export const clearUnit = (unit) => {
  ctx.save();
  ctx.translate(unit.centerX, unit.centerY); // translate to rectangle center
  let angle = unit.angleToRemove * (Math.PI / 180);
  console.log('ROTATION: angle to remove:', unit.angleToRemove);
  ctx.rotate(angle); // rotate unit
  ctx.translate(-unit.centerX, -unit.centerY); // translate to rectangle center
  ctx.clearRect(unit.x - 1, unit.y - 1, unit.width + 2, unit.height + 2);
  ctx.restore();
}

const makeRotation = (unit, img, startAngle, changingAngle, finishAngle, rotationDirection, rotationSpeed, previousStartAngle=null, previousFinishAngle=null) => {
  let previous = changingAngle - rotationDirection; // previous angle state
  unit.setAngleToRemove(previous); // set angle that has to be removed
  let checkFinishAngle; // angle to compare with unit.destinationCanvasAngle
  if(finishAngle < 0) checkFinishAngle = finishAngle + 360; // make angle positive
  if(finishAngle >= 0) checkFinishAngle = finishAngle;

  if(startAngle === previousStartAngle) { // stopped previous rotation
    return;
  }

  if(checkFinishAngle !== unit.destinationCanvasAngle) {  // if another destination has been chosen
    previousStartAngle = startAngle; // save previous rotation
    previousFinishAngle = finishAngle;
    changingAngle = makeAnglePositive(changingAngle); // argumenent for chooseRotationDirection()
    finishAngle = makeAnglePositive(unit.destinationCanvasAngle); // argumenent for chooseRotationDirection()
    let {
      startAngle: newStartAngle,
      finishAngle: newFinishAngle,
      rotationDirection: newRotationDirection
    } = chooseRotationDirection(changingAngle, finishAngle);
    let newChangingAngle = newStartAngle;
    makeRotation(unit, img, newStartAngle, newChangingAngle, newFinishAngle, newRotationDirection, rotationSpeed, previousStartAngle, previousFinishAngle);
  }
  if(changingAngle === finishAngle) { // rotation is finished
      //console.error('rotation finished');
      unit.setIsRotatingToFalse();
      timeout(rotationSpeed).then(() => changeAngle(unit, img, changingAngle, finishAngle)) // now angle === destinationCanvasAngle
      .then(() => move(unit)) // make movement
      //console.error('start position x:', unit.centerX, 'y:', unit.centerY);
      //console.error('finish position x:', unit.moveToX, 'y:', unit.moveToY);
      return;
  }
  else {
    timeout(rotationSpeed).then(() => changeAngle(unit, img, changingAngle, finishAngle))
    .then(() => {
    makeRotation(unit, img, startAngle, changingAngle += rotationDirection, finishAngle, rotationDirection, rotationSpeed, previousStartAngle, previousFinishAngle);
    })
  }
}
