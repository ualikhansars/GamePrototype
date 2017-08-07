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
  let angle;
  let quater = getQuater(unitX, unitY, destX, destY); // check quater
  if(quater === 1 || quater === 2) angle = a / c;
  else if(quater === 3 || quater === 4) angle = -(a / c);
  return angle;
}

// get unit's position and destination position and return angle in radians between unit and destination
export const calcDestinationAngleInDegrees = (unitX:number, unitY:number, destX:number, destY:number):number => {
  let angle;
  let a = Math.abs(destY - unitY);
  let b = Math.abs(destX - unitX);
  let angleInRadian = Math.atan(a / b);
  // check quater of the circle
  let degree =  angleInRadian * (180 / Math.PI); // convert radians into degree
  let quater = getQuater(unitX, unitY, destX, destY); // check quater
  if(quater === 1) angle = degree;
  if(quater === 2) angle = 90 + (90 - degree);
  else if(quater === 3) angle = 180 + degree;
  else if(quater === 4) angle = 270 + (90 - degree);
  return Math.round(angle);
}

export const calcCanvasAngle = (unitX:number, unitY:number, destX:number, destY:number):number => {
  let angle;
  let a = Math.abs(destY - unitY);
  let b = Math.abs(destX - unitX);
  let angleInRadian = Math.atan(a / b);
  // check quater of the circle
  let degree =  angleInRadian * (180 / Math.PI); // convert radians into degree
  let quater = getQuater(unitX, unitY, destX, destY); // check quater
  if(quater === 1) angle = 90 - degree;
  if(quater === 2) angle = 90 + degree;
  else if(quater === 3) angle = 180 + (90 - degree);
  else if(quater === 4) angle = 270 + degree;
  return Math.round(angle);
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
