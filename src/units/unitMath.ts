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
export const calcDestinationAngle = (unitX, unitY, destX, destY) => {
  let a = Math.abs(destX - unitX);
  let b = Math.abs(destY - unitY);
  let c = Math.sqrt(a * a + b * b);
  return Math.sin(a / c);
}

// get unit's position and destination position and return angle in radians between unit and destination
export const calcDestinationAngleInDegrees = (unitX, unitY, destX, destY) => {
  let a = Math.abs(destX - unitX);
  let b = Math.abs(destY - unitY);
  let c = Math.sqrt(a * a + b * b);
  let angle = Math.sin(a / c);
  return angle * (180 / Math.PI);
}
