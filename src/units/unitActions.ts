import {
  units,
  currentlyChosenUnit,
  assignCurrentlyChosenUnit
} from '../store/unitsStore';

import {ctx} from '../config/map';

import Unit from './Unit';

// check if units was clicked by left mouse button
// x - mouse position X
// y - mouse position Y
export let chooseUnit = (units, x, y) => {
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
export const assignMoveToPosition = (unit, x:number, y:number) => {
  unit.moveToX = x;
  unit.moveToY = y;
  console.log(unit.name + ' is moving to : x:' + unit.moveToX + ' y:' + unit.moveToY);
}

// draw Units in the canvas
export let setUnit = (unit) => {
    ctx.fillRect(unit.x, unit.y, unit.width, unit.height);
}

// create Unit and immediatly push it into units array
export let createUnit = (name:string, x:number, y:number, width:number, height:number, speed: number) => {
  let unit = new Unit(name, x, y, width, height, speed);
  units.push(unit);
  setUnit(unit);
  return unit;
}

// change unit's position until it approaches to moveToPosition
export const unitsHaveToMove = () => {
  for(let unit of units) {
    if(unit.x !== unit.moveToX || unit.y !== unit.moveToY) {
      if(unit.x < unit.moveToX && unit.y < unit.moveToY) {
        unit.moveToPosition(1, 1);
      }
      else if(unit.x > unit.moveToX && unit.y > unit.moveToY) {
          unit.moveToPosition(-1, -1);
      }
      else if(unit.x < unit.moveToX && unit.y > unit.moveToY) {
        unit.moveToPosition(1, -1);
      }
      else if(unit.x > unit.moveToX && unit.y < unit.moveToY) {
        unit.moveToPosition(-1, 1);
      }
    }
    setUnit(unit);
  }
}
