import {ctx} from '../config/map';
import {
  calcDestinationAngleInDegrees,
  calcDestinationAngle,
  getQuater,
  calcCanvasAngle
} from './unitMath';
class Unit {
  name: string;
  centerX: number; // center of the unit
  centerY: number;
  x: number; // initial X position
  y: number; // initial Y position
  width: number; // width of the unit
  height: number; // height of the unit
  speed: number; // speed of the unit
  moveToX: number; // next X postion
  moveToY: number; // next Y position
  angleInRadian: number;
  angleInDegree: number = 90; // current unit's angle
  previosAngleInDegree: number;
  previosAngleInRadian: number;
  imgPath: string;

  constructor(name: string, centerX: number, centerY:number, width: number, height:number, speed:number, imgPath:string) {
    this.name = name;
    this.centerX = centerX;
    this.centerY = centerY;
    this.width = width;
    this.height = height;
    this.x = this.centerX - (this.width / 2);
    this.y = this.centerY - (this.height / 2);
    this.speed = speed;
    this.moveToX = centerX;
    this.moveToY = centerY;
    this.imgPath = imgPath;
  }

  update(speedX, speedY) {
    ctx.save();
    // ctx.translate(this.x + this.width * 0.5, this.y + this.height * 0.5); // translate to rectangle center
    // ctx.rotate(this.angle);
    // this.centerX += speedX ;
    // this.centerY += speedY;
    // this.x = this.centerX - (this.width / 2); // change x and y every time when centerX and centerY is changed
    // this.y = this.centerY - (this.height / 2);
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.restore();
  }

  assignAngle() {
    this.previosAngleInDegree = this.angleInDegree;
    this.previosAngleInRadian = this.angleInRadian;
    this.angleInRadian =  calcDestinationAngle(this.centerX, this.centerY, this.moveToX, this.moveToY)
    this.angleInDegree = calcDestinationAngleInDegrees(this.centerX, this.centerY, this.moveToX, this.moveToY);
  }

  moveToPosition(speedX, speedY) {
    if(this.centerX !== this.moveToX || this.centerY !== this.moveToY) {
      ctx.clearRect(this.x, this.y, this.width, this.height);
      //ctx.clearRect(0, 0, 1224, 768);
      this.update(speedX, speedY);
    }
  }
}

export default Unit;
