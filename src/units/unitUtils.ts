export const calcSpeed = (unit) => {
    let speedX, speedY;
    if(unit.centerX !== unit.moveToX || unit.centerY !== unit.moveToY) {
      if(unit.centerX < unit.moveToX && unit.centerY < unit.moveToY) {
        speedX = 1;
        speedY = 1;
      }
      else if(unit.centerX > unit.moveToX && unit.centerY > unit.moveToY) {
        speedX = -1;
        speedY = -1;
      }
      else if(unit.centerX < unit.moveToX && unit.centerY > unit.moveToY) {
        speedX = 1;
        speedY = -1;
      }
      else if(unit.centerX > unit.moveToX && unit.centerY < unit.moveToY) {
        speedX = -1;
        speedY = 1;
      }
    }
    return {
      speedX,
      speedY
    }
}

export const calcCoefficient = (unit) => {
  let pathX = Math.abs(unit.moveToX - unit.x);
  let pathY = Math.abs(unit.moveToY - unit.y);
  if(pathX >= pathY) return Math.round(pathX / pathY);
  if(pathY > pathX) return Math.round(pathY / pathX);
}

export const calcGreaterSpeed = (unit) => {
  let pathX = Math.abs(unit.moveToX - unit.x);
  let pathY = Math.abs(unit.moveToY - unit.y);
  if(pathX >= pathY) return 'x';
  if(pathY > pathX) return 'y';
}
