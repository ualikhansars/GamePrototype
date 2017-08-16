import {units}  from '../store/unitsStore';
import {rotateUnit} from './unitRotation';

// change unit's position until it approaches to moveToPosition
export const unitsHaveToMove = () => {
  for(let unit of units) {
    if(unit.centerX !== unit.moveToX || unit.centerY !== unit.moveToY) {
      if(unit.centerX < unit.moveToX && unit.centerY < unit.moveToY) {
        rotateUnit(unit).then(() => unit.moveToPosition(1, 1));
      }
      else if(unit.centerX > unit.moveToX && unit.centerY > unit.moveToY) {
        rotateUnit(unit).then(() => unit.moveToPosition(-1, -1));
      }
      else if(unit.centerX < unit.moveToX && unit.centerY > unit.moveToY) {
        rotateUnit(unit).then(() => unit.moveToPosition(1, -1));
      }
      else if(unit.centerX > unit.moveToX && unit.centerY < unit.moveToY) {
        rotateUnit(unit).then(() => unit.moveToPosition(-1, 1));
      }
    }
  }
}
