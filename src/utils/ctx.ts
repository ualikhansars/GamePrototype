import {ctx} from '../config/map';

export const ctxSave = () => {
  ctx.save();
}

export const ctxRestore = () => {
  ctx.restore();
}

export const ctxFillRect = (x, y, width, height) => {
  ctx.fillRect(x, y, width, height);
}

export const ctxDrawImage = (img, x, y, width, height) => {
  ctx.drawImage(img, x, y, width, height);
}

export const ctxTranslate = (centerX, centerY) => {
  ctx.translate(centerX, centerY);
}

export const ctxRotate = (angle) => {
  ctx.rotate(angle);
}

export const ctxClearRect = (x, y, width, height) => {
  ctx.clearRect(x, y, width, height);
}

export const ctxFillStyle = (color) => {
  ctx.fillStyle = color;
}

export const ctxTransform = (unit) => {
  ctxTranslate(unit.centerX, unit.centerY); // translate to rectangle center
  let angle = unit.destinationCanvasAngle * (Math.PI / 180);
  ctxRotate(angle);
  ctxTranslate(-unit.centerX, -unit.centerY); // translate to rectangle center
}

export const ctxBeginPath = () => {
  ctx.beginPath();
}

export const ctxStrokeStyle = (color) => {
  ctx.strokeStyle = color;
}

export const ctxMoveTo = (x, y) => {
  ctx.moveTo(x, y);
}

export const ctxLineTo = (x, y) => {
  ctx.lineTo(x, y);
}

export const ctxStroke = () => {
  ctx.stroke();
}

export const ctxIsPointInPath = (x:number, y:number, fillRull) => {
  return ctx.isPointInPath(x, y, fillRull);
}

export const ctxArc = (x:number, y:number, radius:number, startAngle:number, endAngle:number, anticlockwise=true) => {
  ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
}

export const ctxFill = () => {
  ctx.fill();
}
