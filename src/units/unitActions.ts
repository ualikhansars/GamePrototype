import {
  units,
  currentlyChosenUnit,
  assignCurrentlyChosenUnit
} from '../store/unitsStore';
import {ctx} from '../config/map';
import {getCanvasAngleQuater} from './unitMath';

import {WIDTH, HEIGHT} from '../config/map';

import {context2D} from '../utils/ctx';

import Unit from './Unit';

// check if units was clicked by left mouse button
// x - mouse position X
// y - mouse position Y
export let chooseUnit = (units, x, y) => {
  //console.error('chooseUnit');
  let foundedUnit = null;
  for(let unit of units) {
    context2D.save();
    context2D.transform(unit);
    context2D.beginPath();
    if (ctx.isPointInPath(x, y)) {
      console.log('unit clicked');
      foundedUnit = unit;
      context2D.restore();
    }
    context2D.restore();
  }
  // if unit was found in units array
  // currentlyChosenUnit is equal to foundedUnit
  // else if unit is not founded, then
  // currentlyChosenUnit will be null
  assignCurrentlyChosenUnit(foundedUnit);
  console.log('currentlyChosenUnit', currentlyChosenUnit);
}

// change unit's moveToX, moveToY
export const assignMoveToPosition = (unit, x:number, y:number) => {
  //console.error('assignMoveToPosition');
  unit.moveToX = x;
  unit.moveToY = y;
  console.log(unit.name + ' is moving to : x:' + unit.moveToX + ' y:' + unit.moveToY);
}

// draw Units in the canvas
export let setUnit = (unit) => {
    //console.error('setUnit');
    context2D.save();
    let img = new Image();
    img.src = unit.imgPath;
    img.onload = () => {
      context2D.drawImage(img, unit.x, unit.y, unit.width, unit.height);
    }
    context2D.restore();
}

// create Unit and immediatly push it into units array
export let createUnit = (name:string, centerX:number, centerY:number, width:number, height:number, speed: number, imgPath: string='../../img/unit.svg', rotationSpeed) => {
  //console.error('createUnit');
  let unit = new Unit(name, centerX, centerY, width, height, speed, imgPath, rotationSpeed);
  units.push(unit);
  setUnit(unit);
  return unit;
}
