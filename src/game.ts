import {canvas, ctx} from './config/map';

import {
  units,
  currentlyChosenUnit
} from './store/unitsStore';

import {rotateUnit} from './units/unitRotation';

import {
  setUnit,
  chooseUnit,
  assignMoveToPosition,
  createUnit,
} from './units/unitActions';

let infantry = createUnit('Infantry',200, 40, 100, 50, 3, undefined ,20);
console.log('infantry', infantry);
let cavalry = createUnit('Cavalry', 100, 300, 50, 30, 5, undefined, 15);
let heavyInfantry = createUnit('HeavyInfantry', 300, 180, 160, 120, 2, undefined, 30);

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
    rotateUnit(currentlyChosenUnit); // rotate unit

    // assignMoveToPosition(currentlyChosenUnit, x, y); //assign unit's next x and y position
    // currentlyChosenUnit.assignAngle(); // assign angle to the unit
    // smoothlyRotateUnit(currentlyChosenUnit); // rotate unit
    //rotateUnit(currentlyChosenUnit);
    // console.error('x:', currentlyChosenUnit.centerX, 'y:', currentlyChosenUnit.centerY, 'destX:', currentlyChosenUnit.moveToX, 'destY:', currentlyChosenUnit.moveToY);

    console.log('GAME: previousCanvasAngle', currentlyChosenUnit.previousCanvasAngle);
    console.error('GAME: desctinationCanvasAngle', currentlyChosenUnit.destinationCanvasAngle);
    //console.log('Unit:' ,currentlyChosenUnit.x, currentlyChosenUnit.y);
    //console.log('center:', currentlyChosenUnit.centerX, currentlyChosenUnit.centerY);
  }
});


//setInterval(unitsHaveToMove, 300);
