import {ctx} from '../config/map';
import {loadImage} from '../utils/loadImage';
import {timeout} from '../utils/timeout';
import {
  chooseRotationDirection,
  makeAnglePositive
} from './unitMath';

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

export const rotateUnit = (unit) => {
  return new Promise(resolve => {
    loadImage(unit.imgPath, (err, img) => { // load image, then rotate unit
      if(err) throw err;
      let isRotating = unit.isRotating;
      let rotationSpeed = unit.rotationSpeed;
      let initialStartAngle = unit.previousCanvasAngle;
      let initialFinishAngle = unit.destinationCanvasAngle;
      let {startAngle, finishAngle, rotationDirection} = chooseRotationDirection(initialStartAngle, initialFinishAngle);
      let changingAngle = startAngle;
      console.error('ROTATE UNIT: startAngle:', startAngle, 'finishAngle:', finishAngle, 'direction:', rotationDirection);
      if(!isRotating) {
        unit.setIsRotating(true);
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
  console.log('REMOVE ANGLE: angle to remove:', unit.angleToRemove);
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

  console.log('1rec startAngle', startAngle);
  console.log('1rec finishAngle', finishAngle);
  console.log('previousStartAngle', previousStartAngle);

  if(startAngle === previousStartAngle) { // stopped previous rotation
    console.log('previous recursion stopped');
    return;
  }


  //unit.setCurrentCanvasAngle(positiveChangingAngle);
  //console.log('angleToRemove', angleToRemove);
  if(checkFinishAngle !== unit.destinationCanvasAngle) {  // if another desctination has been chosen
    previousStartAngle = startAngle; // save previous rotation
    previousFinishAngle = finishAngle;
    changingAngle = makeAnglePositive(changingAngle); // argumenent for chooseRotationDirection()
    finishAngle = makeAnglePositive(unit.destinationCanvasAngle); // argumenent for chooseRotationDirection()
    //checkFinishAngle = finishAngle;
    let {
      startAngle: newStartAngle,
      finishAngle: newFinishAngle,
      rotationDirection: newRotationDirection
    } = chooseRotationDirection(changingAngle, finishAngle);
    let newChangingAngle = newStartAngle;
    console.log('new rotation has been chosen');
    console.log('previousStartAngle', previousStartAngle);
    console.log('previousFinishAngle', previousFinishAngle);
    console.log('newStartAngle', newStartAngle);
    console.log('newChangingAngle', newChangingAngle);
    console.log('newFinishAngle', newFinishAngle);

    console.log('changingAngle', changingAngle, 'finishAngle', finishAngle);
    console.log('rotationDirection', newRotationDirection);
    // unit.setPreviousCanvasAngle(changingAngle); // update destinationCanvasAngle
    // unit.setStoppedAngle(changingAngle);
    makeRotation(unit, img, newStartAngle, newChangingAngle, newFinishAngle, newRotationDirection, rotationSpeed, previousStartAngle, previousFinishAngle);
  }
  if(changingAngle === finishAngle) { // rotation is finished
      console.log('rotation finish');
      console.error('unit angle to remove', unit.angleToRemove);
      unit.setIsRotating(false);
      //unit.setStoppedAngle(null);
      return;
  }
  else {
    console.log('rotation. startAngle', startAngle, 'finishAngle', finishAngle);
    console.error('changingAngle', changingAngle);
    console.log('angle to remove', unit.angleToRemove);
    //if(startAngle !== changingAngle) previous = changingAngle - rotationDirection;
      //unit.setAngleToRemove(previous);
      timeout(rotationSpeed, changingAngle).then(() => changeAngle(unit, img, changingAngle, finishAngle))
      .then(() => {
      makeRotation(unit, img, startAngle, changingAngle += rotationDirection, finishAngle, rotationDirection, rotationSpeed, previousStartAngle, previousFinishAngle);
    })
  }
}
