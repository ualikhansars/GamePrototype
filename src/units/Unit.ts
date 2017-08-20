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
  previousCanvasAngle: number;
  angleToRemove: number;
  imgPath: string;
  rotationSpeed: number;
  isRotating: boolean = false;

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

  assignAngle() {
    this.previousCanvasAngle = this.destinationCanvasAngle;
    this.destinationCanvasAngle = calcCanvasAngle(this.centerX, this.centerY, this.moveToX, this.moveToY);
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

  setPreviousCanvasAngle(newAngle: number) {
    let updatedAngle = this.makeAnglePositive(newAngle);
    this.previousCanvasAngle = updatedAngle;
  }

  setIsRotating(newValue: boolean) {
    this.isRotating = newValue;
  }

  setCurrentRotation(startAngle: number, finishAngle: number) {
    let updatedStartAngle = this.makeAnglePositive(startAngle);
    let updatedFinishAngle = this.makeAnglePositive(finishAngle);
  }

  makeAnglePositive(angle: number):number {
    if(angle < 0) {
      return angle + 360;
    }
    else if(angle >= 0) {
        return angle;
    }
  }
}

export default Unit;
