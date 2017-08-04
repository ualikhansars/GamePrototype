import {canvas} from './config/map';

import {
  units,
  currentlyChosenUnit
} from './store/unitsStore';

import {
  chooseUnit,
  assignMoveToPosition,
  createUnit,
  unitsHaveToMove
} from './units/unitActions';

let infantry = createUnit('Infantry',0, 0, 100, 50, 3);
let cavalry = createUnit('Cavalry', 100, 80, 50, 60, 5);
let heavyInfantry = createUnit('HeavyInfantry', 300, 180, 100, 120, 2);

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
  }
});


setInterval(unitsHaveToMove, 300);
