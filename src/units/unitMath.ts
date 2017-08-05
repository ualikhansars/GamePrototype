/*
                C
                *
            *   *
        c *     *
        *       * b
      *         *
    *           *
A  ************** B
       a
*/


// get unit's position and destination position and return angle in radians between unit and destination
export const calcDestinationAngle = (unitX:number, unitY:number, destX:number, destY:number):number => {
  let a = Math.abs(destX - unitX);
  let b = Math.abs(destY - unitY);
  let c = Math.sqrt(a * a + b * b);
  return Math.sin(a / c);
}

// get unit's position and destination position and return angle in radians between unit and destination
export const calcDestinationAngleInDegrees = (unitX, unitY, destX, destY):number => {
  let a = Math.abs(destX - unitX);
    let b = Math.abs(destY - unitY);
    let c = Math.sqrt(a * a + b * b);
    let angle = Math.sin(a / c);
    return angle * (180 / Math.PI);
}

export const getQuater = (unitX, unitY, destX, destY) => {
  let quater;
  if(destX > unitX && destY < unitY) {
    quater = 1;
  }
  else if(destX < unitX && destY < unitY) {
    quater = 2;
  }
  else if(destX < unitX && destY > unitY) {
    quater = 3;
  }
  else if(destX > unitX && destY > unitY) {
    quater = 4;
  }
  return quater;
}
