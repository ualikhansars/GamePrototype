let c: any = document.getElementById("canvas");
let ctx = c.getContext("2d");

// import units from store
import {
  unitsStore,
  assignCurrentlyChosenUnit
} from './store/unitsStore';

// global variables
const WIDTH: number = 1000;
const HEIGHT: number = 560;

// descruct unitsStore
let {units, currentlyChosenUnit} = unitsStore;


class Unit {
  name: string;
  x: number; // initial X position
  y: number; // initial Y position
  width: number; // width of the unit
  height: number; // height of the unit
  spdX: number; // speed X
  spdY: number; // speed Y
  moveToX: number; // next X postion
  moveToY: number; // next Y position

  constructor(name: string, x: number, y:number, width: number, height:number, spdX:number, spdY:number) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.spdX = spdX;
    this.spdY = spdY;
  }
}

let setUnit = (unit) => {
    ctx.fillRect(unit.x, unit.y, unit.width, unit.height);
}

// create Unit and immediatly push it into units array
let createUnit = (name:string, x:number, y:number, width:number, height:number, spdX:number, spdY:number) => {
  let unit = new Unit(name, x, y, width, height, spdX, spdY);
  units.push(unit);
  setUnit(unit);
  return unit;
}

let infantry = createUnit('Infantry',0, 0, 100, 50, 5, 7);
let cavalry = createUnit('Cavalry', 100, 80, 50, 60, 12, 20);
let heavyInfantry = createUnit('heavyInfantry', 300, 180, 100, 120, 2, 2);


// check if units was clicked by left mouse button
// x - mouse position X
// y - mouse position Y
let chooseUnit = (units, x, y) => {
  let foundedUnit = null;
  for(let unit of units) {
    let unitX0 = unit.x;
    let unitY0 = unit.y;
    let unitX1 = unitX0 + unit.width;
    let unitY1 = unitY0 + unit.height;
    // check if coordinates is equal to unit position
    if(x >= unitX0 && x <= unitX1 && y >= unitY0 && y <= unitY1) {
      foundedUnit = unit;
      break;
    }
  }
  // if unit was found in units array
  // currentlyChosenUnit is equal to foundedUnit
  // else is unit is not founded, then
  // currentlyChosenUnit will be null
  assignCurrentlyChosenUnit(foundedUnit);
  console.log('currentlyChosenUnit', currentlyChosenUnit);
}

// change unit's moveToX, moveToY
const assignMoveToPosition = (unit, x:number, y:number) => {
  unit.moveToX = x;
  unit.moveToY = y;
  console.log(unit.name + ' is moving to : x:' + unit.moveToX + ' y:' + unit.moveToY);
}

// set onClickListener for left mouse event to canvas element
c.addEventListener('click', (e) => {
  let x = e.offsetX; // get X
  let y = e.offsetY; // get Y
  console.log('Position x', e.offsetX); // get X
  console.log('Position y', e.offsetY); // get Y
  chooseUnit(units, x, y);
});

// set onClickListener for right mouse event
c.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  let x = e.offsetX; // get X
  let y = e.offsetY; // get Y
  if(currentlyChosenUnit) {
    assignMoveToPosition(currentlyChosenUnit, x, y); //assign unit's next x and y position
  }
});
