import { units, currentlyChosenUnit, assignCurrentlyChosenUnit } from '../store/unitsStore';
import { ctxSave, ctxRestore, ctxDrawImage } from '../utils/ctx';
import Unit from './Unit';
// check if units was clicked by left mouse button
// x - mouse position X
// y - mouse position Y
export let chooseUnit = (units, x, y) => {
    //console.error('chooseUnit');
    let foundedUnit = null;
    for (let unit of units) {
        let unitX0 = unit.x;
        let unitY0 = unit.y;
        let unitX1 = unitX0 + unit.width;
        let unitY1 = unitY0 + unit.height;
        // check if coordinates is equal to unit position
        if (x >= unitX0 && x <= unitX1 && y >= unitY0 && y <= unitY1) {
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
};
// change unit's moveToX, moveToY
export const assignMoveToPosition = (unit, x, y) => {
    //console.error('assignMoveToPosition');
    unit.moveToX = x;
    unit.moveToY = y;
    console.log(unit.name + ' is moving to : x:' + unit.moveToX + ' y:' + unit.moveToY);
};
// draw Units in the canvas
export let setUnit = (unit) => {
    //console.error('setUnit');
    ctxSave();
    let img = new Image();
    img.src = unit.imgPath;
    img.onload = () => {
        ctxDrawImage(img, unit.x, unit.y, unit.width, unit.height);
    };
    ctxRestore();
};
// create Unit and immediatly push it into units array
export let createUnit = (name, centerX, centerY, width, height, speed, imgPath = '../../img/unit.svg', rotationSpeed) => {
    //console.error('createUnit');
    let unit = new Unit(name, centerX, centerY, width, height, speed, imgPath, rotationSpeed);
    units.push(unit);
    setUnit(unit);
    return unit;
};
//# sourceMappingURL=unitActions.js.map