import {canvas, ctx} from './config/map';

import {
  units,
  currentlyChosenUnit
} from './store/unitsStore';

import {
  setUnit,
  chooseUnit,
  assignMoveToPosition,
  createUnit,
  unitsHaveToMove,
  smoothlyRotateUnit, // test
  chooseRotationDirection, // test
} from './units/unitActions';

let infantry = createUnit('Infantry',200, 40, 100, 50, 3, );
console.log('infantry', infantry);
let cavalry = createUnit('Cavalry', 100, 300, 50, 30, 5);
let heavyInfantry = createUnit('HeavyInfantry', 300, 180, 160, 120, 2);

canvas.addEventListener('click', (e) => {
  let x = e.offsetX; // get X
  let y = e.offsetY; // get Y
  console.log('Position x', e.offsetX); // get X
  console.log('Position y', e.offsetY); // get Y
  chooseUnit(units, x, y);
});

// set onClickListener for right mouse event
canvas.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  let x = e.offsetX; // get X
  let y = e.offsetY; // get Y
  if(currentlyChosenUnit) {
    assignMoveToPosition(currentlyChosenUnit, x, y); //assign unit's next x and y position
    currentlyChosenUnit.assignAngle(); // assign angle to the unit
    smoothlyRotateUnit(currentlyChosenUnit); // rotate unit
    chooseRotationDirection(currentlyChosenUnit);
    //rotateUnit(currentlyChosenUnit);
    // console.error('x:', currentlyChosenUnit.centerX, 'y:', currentlyChosenUnit.centerY, 'destX:', currentlyChosenUnit.moveToX, 'destY:', currentlyChosenUnit.moveToY);
    console.error('Unit angle in degree :', currentlyChosenUnit.angleInDegree);
    //console.error('Unit previosAngleInDegree:', currentlyChosenUnit.previosAngleInDegree);
    console.log('previousCanvasAngle', currentlyChosenUnit.previousCanvasAngle);
    console.error('Canvas angle', currentlyChosenUnit.currentCanvasAngle);
    //console.error('Unit angle in radians :', currentlyChosenUnit.angleInRadian);
    //console.log('Unit:' ,currentlyChosenUnit.x, currentlyChosenUnit.y);
    //console.log('center:', currentlyChosenUnit.centerX, currentlyChosenUnit.centerY);
  }
});


//setInterval(unitsHaveToMove, 300);
