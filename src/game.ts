let c: any = document.getElementById("canvas");
let ctx = c.getContext("2d");

// global variables
const WIDTH: number = 1000;
const HEIGHT: number = 560;

let x: number =  5;
let y: number = 10;
let spdX: number = 10;
let spdY: number = 5;

function update() {
  x += spdX ;
  y += spdY;
  ctx.fillRect(x, y, 40, 20);
  console.log('x =', x, 'y =', y)

  if(x > WIDTH || x < 0) {
    spdX = -spdX;
  }

  if(y > HEIGHT || y < 0) {
    spdY = -spdY;
  }
}

setInterval(update, 600);
