import {ctx} from '../config/map';

class Unit {
  name: string;
  x: number; // initial X position
  y: number; // initial Y position
  width: number; // width of the unit
  height: number; // height of the unit
  speed: number; // speed of the unit
  moveToX: number; // next X postion
  moveToY: number; // next Y position

  constructor(name: string, x: number, y:number, width: number, height:number, speed:number) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.moveToX = x;
    this.moveToY = y
  }

  update(speedX, speedY) {
    this.x += speedX ;
    this.y += speedY;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  moveToPosition(speedX, speedY) {
    if(this.x !== this.moveToX || this.y !== this.moveToY) {
         ctx.clearRect(this.x, this.y, this.width, this.height);
         this.update(speedX, speedY);
    }
    console.log(this.name + ' is on position');
  }
}

export default Unit;
