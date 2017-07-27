let c: any = document.getElementById("canvas");
let ctx = c.getContext("2d");

// global variables
const WIDTH: number = 1000;
const HEIGHT: number = 560;

class Unit {
  x: number;
  y: number;
  width: number;
  height: number;
  spdX: number;
  spdY: number;

  constructor(x: number, y:number, width: number, height:number, spdX:number, spdY:number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.spdX = spdX;
    this.spdY = spdY;
  }
}

let updateUnit = (unit) => {
  unit.x += unit.spdX ;
  unit.y += unit.spdY;
  ctx.fillRect(unit.x, unit.y, unit.width, unit.height);

  if(unit.x > WIDTH || unit.x < 0) {
    unit.spdX = -unit.spdX;
  }

  if(unit.y > HEIGHT || unit.y < 0) {
    unit.spdY = -unit.spdY;
  }
}

let infantry = new Unit(10, 10, 60, 80, 5, 7);
let cavalry = new Unit(10, 20, 50, 60, 12, 20);

let update = () => {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  updateUnit(infantry);
  updateUnit(cavalry);
}

setInterval(update, 600);
