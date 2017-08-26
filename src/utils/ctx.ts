import {ctx} from '../config/map';

export const ctxSave = () => {
  ctx.save();
}

export const ctxRestore = () => {
  ctx.restore();
}

export const ctxFillRect = (x:number, y:number, width:number, height:number) => {
  ctx.fillRect(x, y, width, height);
}

export const ctxDrawImage = (img, x, y, width, height) => {
  ctx.drawImage(img, x, y, width, height);
}

export const ctxTranslate = (centerX:number, centerY:number) => {
  ctx.translate(centerX, centerY);
}

export const ctxRotate = (angle:number) => {
  ctx.rotate(angle);
}

export const ctxClearRect = (x:number, y:number, width:number, height:number) => {
  ctx.clearRect(x, y, width, height);
}

export const ctxFillStyle = (color:string) => {
  ctx.fillStyle = color;
}

export const ctxTransform = (unit) => {
  ctxTranslate(unit.centerX, unit.centerY); // translate to rectangle center
  let angle = unit.destinationCanvasAngle * (Math.PI / 180);
  ctxRotate(angle);
  ctxTranslate(-unit.centerX, -unit.centerY); // translate to rectangle center
}
