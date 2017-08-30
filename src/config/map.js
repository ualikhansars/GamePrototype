// global variables
export const WIDTH = 1224;
export const HEIGHT = 768;
// create Canvas
export let canvas = document.createElement('canvas');
canvas.id = "canvas";
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.border = "1px solid";
document.body.appendChild(canvas);
// define 2d context
export let ctx = canvas.getContext("2d");
//# sourceMappingURL=map.js.map