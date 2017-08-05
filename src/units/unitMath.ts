/*
                C
                *
            *   *
        c *     *
        *       * a
      *         *
    *           *
A  ************** B
       b
*/


// get unit's position and destination position and return angle in radians between unit and destination
export const calcDestinationAngle = (unitX:number, unitY:number, destX:number, destY:number):number => {
  let a = Math.abs(destY - unitY);
  let b = Math.abs(destX - unitX);
  let c = Math.sqrt(a * a + b * b);
  return a / c;
}

// get unit's position and destination position and return angle in radians between unit and destination
export const calcDestinationAngleInDegrees = (unitX:number, unitY:number, destX:number, destY:number):number => {
  let y = Math.abs(destY - unitY);
  let x = Math.abs(destX - unitX);
  let c = Math.sqrt(x * x + y * y);;
  let angle = Math.atan(y / x);
  return angle * (180 / Math.PI);
}

export const getQuater = (unitX:number, unitY:number, destX:number, destY:number):number => {
  let quater;
  if(destX >= unitX && destY < unitY) {
    quater = 1;
  }
  else if(destX < unitX && destY <= unitY) {
    quater = 2;
  }
  else if(destX <= unitX && destY > unitY) {
    quater = 3;
  }
  else if(destX > unitX && destY >= unitY) {
    quater = 4;
  }
  return quater;
}
