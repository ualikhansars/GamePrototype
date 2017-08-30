// const makeRotation = (unit, img, previousAngle, changingAngle, current, rotationDirection, rotationSpeed) => {
//   if(changingAngle !== current) {
//     (function() {
//       let _changingAngle = changingAngle;
//       let previous = changingAngle;
//       if(previousAngle !== changingAngle) previous = changingAngle - rotationDirection;
//       console.error('changingAngle', _changingAngle);
//       console.error('previosAngle', previous);
//       timeout(rotationSpeed, changingAngle).then(() => changeAngle(unit, img, _changingAngle, current))
//       .then(() => {
//         makeRotation(unit, img, previousAngle, _changingAngle += rotationDirection, current, rotationDirection, rotationSpeed);
//       })
//     })()
//   }
// }
// export const clearUnitPromise = (unit) => {
//   return new Promise(resolve => {
//     ctx.save();
//     ctx.translate(unit.centerX, unit.centerY); // translate to rectangle center
//     let angle = unit.angleToRemove * (Math.PI / 180);
//     console.log('REMOVE ANGLE: angle to remove:', unit.angleToRemove);
//     ctx.rotate(angle); // rotate unit
//     ctx.translate(-unit.centerX, -unit.centerY); // translate to rectangle center
//     ctx.clearRect(unit.x, unit.y, unit.width, unit.height);
//     ctx.restore();
//     resolve();
//   })
// }
// export const rotateUnit = (unit) => {
//   loadImage(unit.imgPath, (err, img) => { // load image, then rotate unit
//     if(err) throw err;
//     ctx.save();
//     clearUnit(unit); // delete previos drawing unit
//     ctx.translate(unit.centerX, unit.centerY); // translate to rectangle center
//     //let angle = (90 - unit.angleInDegree) * (Math.PI / 180);
//     let angle = unit.destinationCanvasAngle * (Math.PI / 180);
//     ctx.rotate(angle); // rotate to look straight to the destination position
//     ctx.translate(-unit.centerX, -unit.centerY); // translate to rectangle center
//     ctx.drawImage(img, unit.x, unit.y, unit.width, unit.height);
//     ctx.restore();
//   });
// }
//
// export const clearUnit = (unit) => {
//   ctx.save();
//   ctx.translate(unit.centerX, unit.centerY); // translate to rectangle center
//   let angle = unit.previousCanvasAngle * (Math.PI / 180);
//   ctx.rotate(angle); // rotate unit
//   ctx.translate(-unit.centerX, -unit.centerY); // translate to rectangle center
//   ctx.clearRect(unit.x, unit.y, unit.width, unit.height);
//   ctx.restore();
// }
// export const smoothlyRotateUnit = (unit) => {
//   loadImage(unit.imgPath, (err, img) => { // load image, then rotate unit
//     if(err) throw err;
//     let isRotating = unit.isRotating;
//     let rotationSpeed = unit.rotationSpeed;
//     let initialStartAngle = unit.previousCanvasAngle;
//     let initialFinishAngle = unit.destinationCanvasAngle;
//     let {startAngle, finishAngle, rotationDirection} = chooseRotationDirection(initialStartAngle, initialFinishAngle);
//     let changingAngle = startAngle;
//     console.error('ROTATE UNIT: startAngle:', startAngle, 'finishAngle:', finishAngle, 'direction:', rotationDirection);
//     if(!isRotating) {
//       unit.setIsRotating(true);
//       makeRotation2(unit, img, startAngle, changingAngle, finishAngle, rotationDirection, rotationSpeed);
//     }
//   });
// }
// show path
// export const showPath = (unit) => {
//   let {speedX, speedY} = calcSpeed(unit);
//   let currentX = unit.x;
//   let currentY = unit.y;
//   while(currentX !== unit.moveToX || currentY !== unit.moveToY) {
//     if(currentX === unit.moveToX) speedX = 0;
//     if(currentY === unit.moveToY) speedY = 0;
//     currentX += speedX ;
//     currentY += speedY;
//     ctxFillStyle('green');
//     ctxFillRect(currentX, currentY, 1, 1);
//   }
//   ctxFillStyle('red');
//   ctxFillRect(currentX - 10, currentY - 10, 20, 20);
// }
//# sourceMappingURL=temp.js.map