import {ctx} from '../config/map';

const save = () => {
  ctx.save();
}

const restore = () => {
  ctx.restore();
}

const fillRect = (x, y, width, height) => {
  ctx.fillRect(x, y, width, height);
}

const drawImage = (img, x, y, width, height) => {
  ctx.drawImage(img, x, y, width, height);
}

const translate = (centerX, centerY) => {
  ctx.translate(centerX, centerY);
}

const rotate = (angle) => {
  ctx.rotate(angle);
}

const clearRect = (x, y, width, height) => {
  ctx.clearRect(x, y, width, height);
}

const fillStyle = (color) => {
  ctx.fillStyle = color;
}

export const transform = (unit) => {
  translate(unit.centerX, unit.centerY); // translate to rectangle center
  let angle = unit.destinationCanvasAngle * (Math.PI / 180);
  rotate(angle);
  translate(-unit.centerX, -unit.centerY); // translate to rectangle center
}

const beginPath = () => {
  ctx.beginPath();
}

const strokeStyle = (color) => {
  ctx.strokeStyle = color;
}

const moveTo = (x, y) => {
  ctx.moveTo(x, y);
}

const lineTo = (x, y) => {
  ctx.lineTo(x, y);
}

const stroke = () => {
  ctx.stroke();
}

const isPointInPath = (x:number, y:number, fillRull) => {
  return ctx.isPointInPath(x, y, fillRull);
}

const arc = (x:number, y:number, radius:number, startAngle:number, endAngle:number, anticlockwise=true) => {
  ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
}

const fill = () => {
  ctx.fill();
}

const rect = (x:number, y:number, width: number, height: number) => {
  ctx.rect(x, y, width, height);
}

export const context2D = {
  save,
  restore,
  fillRect,
  drawImage,
  translate,
  rotate,
  clearRect,
  fillStyle,
  transform,
  beginPath,
  strokeStyle,
  moveTo,
  lineTo,
  stroke,
  isPointInPath,
  arc,
  fill,
  rect
}
