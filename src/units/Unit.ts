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
  destinationCanvasAngle: number = 0;
  currentCanvasAngle: number;
  previousCanvasAngle: number;
  angleToRemove: number;
  imgPath: string;
  rotationSpeed: number;
  isRotating: boolean = false;
  stoppedAngle: number = null;
  // rotation. test
  currentRotationPrevAngle: number = null;
  currentRotationNextAngle: number = null;
  nextRotationPrevAngle: number = null;
  nextRotationNextAngle: number = null;

  constructor(name: string, centerX: number, centerY:number, width: number, height:number, speed:number, imgPath:string, rotationSpeed: number) {
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
    this.rotationSpeed = rotationSpeed;
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
    this.previousCanvasAngle = this.destinationCanvasAngle;
    this.destinationCanvasAngle = calcCanvasAngle(this.centerX, this.centerY, this.moveToX, this.moveToY);
    this.nextRotationPrevAngle = this.previousCanvasAngle;   //assign next rotation
    this.nextRotationNextAngle = this.destinationCanvasAngle;

    console.log('CLASS UNIT: new desctination has been assign, angle =', this.destinationCanvasAngle);
  }

  setAngleToRemove(newAngle:number) {
    let angleToRemove = this.makeAnglePositive(newAngle);
    this.angleToRemove = angleToRemove;
  }

  setDestinationCanvasAngle(newAngle) {
    let updatedAngle = this.makeAnglePositive(newAngle);
    this.destinationCanvasAngle = updatedAngle;
  }

  setCurrentCanvasAngle(newAngle:number) {
    let updatedAngle = this.makeAnglePositive(newAngle);
    this.currentCanvasAngle = updatedAngle;
  }

  setPreviousCanvasAngle(newAngle: number) {
    let updatedAngle = this.makeAnglePositive(newAngle);
    this.previousCanvasAngle = updatedAngle;
  }

  setIsRotating(newValue: boolean) {
    this.isRotating = newValue;
  }

  setStoppedAngle(newAngle: number) {
    this.stoppedAngle = this.makeAnglePositive(newAngle);
  }

  setCurrentRotation(startAngle: number, finishAngle: number) {
    let updatedStartAngle = this.makeAnglePositive(startAngle);
    let updatedFinishAngle = this.makeAnglePositive(finishAngle);
    this.currentRotationPrevAngle = updatedStartAngle;
    this.currentRotationNextAngle = updatedFinishAngle;
  }

  makeAnglePositive(angle: number):number {
    if(angle < 0) {
      return angle + 360;
    }
    else if(angle >= 0) {
        return angle;
    }
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
