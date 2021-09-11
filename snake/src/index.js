let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 1600;
const GAME_HEIGHT = 900;

canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;

ctx.fillStyle = '#ffffff';
ctx.fillRect(10 * Math.floor(Math.random() * (canvas.width / 10)), 10 * Math.floor(Math.random() * (canvas.height / 10)), 10, 10);
