/*

Standart
                C
                *
            *   *
        c *     *
        *       * a
      *         *
    *           *
A  ************** B
       b


Canvas rotation

        b
A  **************** B
    *             *
      *           *
        *         *
      c   *       * a
            *     *
              *   *
                * *
                  *
                  C

  a = descY - centerY
  b = descX - center X
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

export const makeAnglePositive = (angle: number):number => {
  if(angle < 0) {
    return angle + 360;
  }
  else if(angle >= 0) {
      return angle;
  }
}

// calculate rotate angle in canvas degrees
export const calcCanvasAngle = (unitX:number, unitY:number, destX:number, destY:number):number => {
  let angle;
  let a = Math.abs(destY - unitY);
  let b = Math.abs(destX - unitX);
  let angleInRadian = Math.atan(a / b);
  // check quater of the circle
  let degree =  angleInRadian * (180 / Math.PI); // convert radians into degree
  let quater = getQuater(unitX, unitY, destX, destY); // check quater
  if(quater === 1) angle = angle = 90 - degree; // I === I
  if(quater === 2) angle = angle = 270 + degree; // II == IV
  else if(quater === 3) angle = angle = 180 + (90 - degree); // III = III
  else if(quater === 4) angle = angle = 90 + degree; // IV = II
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

export const getCanvasAngleQuater = (canvasAngle) => {
  if(canvasAngle >= 0 && canvasAngle < 90) return 1;
  else if(canvasAngle >= 90 && canvasAngle < 180) return 4;
  else if(canvasAngle >= 180 && canvasAngle < 270) return 3;
  else if(canvasAngle >= 270 && canvasAngle < 360) return 2;
}

// calculate path in both directions
// and decide in what direction unit has to rotate
// return startAngle, finishAngle, rotationDirection
export const chooseRotationDirection = (initialStartAngle, initialFinishAngle) => {
  let startQuater, finishQuater;
  let startAngle, finishAngle, rotationDirection;
  let positiveStartAngle, positiveFinishAngle;
  let negativeStartAngle, negativeFinishAngle;
  positiveStartAngle = initialStartAngle;
  positiveFinishAngle =initialFinishAngle;

  if(positiveStartAngle === 0) {
      negativeStartAngle = 0; // use 0 instead of 360
  }  else {
    negativeStartAngle = positiveStartAngle - 360;
  }

  if(positiveFinishAngle === 0) {
      negativeFinishAngle = 0;
  }  else {
    negativeFinishAngle = positiveFinishAngle - 360;
  }

  startQuater = getCanvasAngleQuater(positiveStartAngle);
  finishQuater = getCanvasAngleQuater(positiveFinishAngle);

  let positivePath, negativePath;
  if(startQuater === 2 || startQuater === 3) {
      negativePath = Math.abs(negativeStartAngle) + Math.abs(positiveFinishAngle);
  } else {
      negativePath = Math.abs(positiveStartAngle) + Math.abs(negativeFinishAngle);
  }
  positivePath = Math.abs(positiveFinishAngle - positiveStartAngle);

  if(positivePath <= negativePath) {
    startAngle = positiveStartAngle;
    finishAngle = positiveFinishAngle;
    if(positiveStartAngle > positiveFinishAngle) rotationDirection = -1;
    if(positiveStartAngle < positiveFinishAngle) rotationDirection = 1;
  } else { // negativePath > positivePath
    if(startQuater === 2 || startQuater === 3) {
      startAngle = negativeStartAngle;
      finishAngle = positiveFinishAngle;
      rotationDirection = 1;
    } else {
      startAngle = positiveStartAngle;
      finishAngle = negativeFinishAngle;
      rotationDirection = -1;
    }
  }
  return {
    startAngle,
    finishAngle,
    rotationDirection
  }
}
