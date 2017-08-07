import {
  units,
  currentlyChosenUnit,
  assignCurrentlyChosenUnit
} from '../store/unitsStore';

import {ctx, WIDTH, HEIGHT} from '../config/map';

import Unit from './Unit';

// let unitImage = new Image();
// unitImage.src = '../../img/unit.svg';

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
    ctx.save();
    //ctx.translate(unit.x + unit.width * 0.5, unit.y + unit.height * 0.5); // translate to rectangle center
    //ctx.rotate(unit.angle);
    //ctx.fillRect(unit.x, unit.y, unit.width, unit.height);
    let img = new Image();
    //img.src = '../../img/unit.svg';
    img.src = unit.imgPath;
    img.onload = () => {
      ctx.drawImage(img, unit.x, unit.y, unit.width, unit.height);
    }
    ctx.restore();
}

// create Unit and immediatly push it into units array
export let createUnit = (name:string, centerX:number, centerY:number, width:number, height:number, speed: number, imgPath: string='../../img/unit.svg') => {
  let unit = new Unit(name, centerX, centerY, width, height, speed, imgPath);
  units.push(unit);
  setUnit(unit);
  return unit;
}

// load image
export const loadImage = (imgPath: string, callback) => {
    let img = new Image;
    img.onload = () => {
      callback(null, img);
    }
    img.onerror = () => {
      let msg = 'Cannot load the image at ' + imgPath;
      callback(new Error(msg));
    }
    img.src = imgPath;
}

export const rotateUnit = (unit) => {
  loadImage(unit.imgPath, (err, img) => {
    if(err) throw err;
    ctx.save();
    clearUnit(unit); // delete previos drawing unit
    ctx.translate(unit.centerX, unit.centerY); // translate to rectangle center
    let angle = (90 - unit.angleInDegree) * (Math.PI / 180);
    ctx.rotate(angle); // rotate to look straight to the destination position
    ctx.translate(-unit.centerX, -unit.centerY); // translate to rectangle center
    ctx.drawImage(img, unit.x, unit.y, unit.width, unit.height);
    ctx.restore();
  });
}


export const clearUnit = (unit) => {
  ctx.save();
  ctx.translate(unit.centerX, unit.centerY); // translate to rectangle center
  let angle = (90 - unit.previosAngleInDegree) * (Math.PI / 180);
  ctx.rotate(angle); // rotate unit
  ctx.translate(-unit.centerX, -unit.centerY); // translate to rectangle center
  ctx.clearRect(unit.x, unit.y, unit.width, unit.height);
  ctx.restore();
}

// change unit's position until it approaches to moveToPosition
export const unitsHaveToMove = () => {
  for(let unit of units) {
    if(unit.centerX !== unit.moveToX || unit.centerY !== unit.moveToY) {
      if(unit.centerX < unit.moveToX && unit.centerY < unit.moveToY) {
        unit.moveToPosition(1, 1);
      }
      else if(unit.centerX > unit.moveToX && unit.centerY > unit.moveToY) {
          unit.moveToPosition(-1, -1);
      }
      else if(unit.centerX < unit.moveToX && unit.centerY > unit.moveToY) {
        unit.moveToPosition(1, -1);
      }
      else if(unit.centerX > unit.moveToX && unit.centerY < unit.moveToY) {
        unit.moveToPosition(-1, 1);
      }
    }
    //setUnit(unit);
  }
}
