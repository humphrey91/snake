
var s;
var scl = 20;

var food;

function setup() {
  canvas = createCanvas(600,600);
  canvas.parent('snake');
  s = new Snake();
  frameRate(12);
  
}

function picklocation() {
  cols = floor(width/scl);
  rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(50,89,100);
  if (s.eat(food)) {
    picklocation();
  }
  s.death();
  s.update();
  s.show();


  fill(255, 0, 100);
  rect(food.x,food.y,scl,scl)
}
function keyPressed() {
  if (s.xspeed > 0 || s.xspeed < 0 || s.yspeed > 0 || s.yspeed < 0) {
    if (keyCode === UP_ARROW) {
      if (s.yspeed === 1) {
      } else {
      s.dir(0, -1);
      }
    } else if (keyCode === DOWN_ARROW) {
      if (s.yspeed === -1) {
      } else {
      s.dir(0, 1);
      }
    } else if (keyCode === RIGHT_ARROW) {
      if (s.xspeed === -1) {
      } else {
      s.dir(1, 0);
      }
    } else if (keyCode === LEFT_ARROW) {
      if (s.xspeed === 1){
      } else {
        s.dir(-1, 0);
      }
    }
  } else if (s.xspeed === 0 && s.yspeed === 0) {
    if (keyCode === 32) {
      newGame();
    }
  }
}

function newGame() {
  s.xspeed = 1;
  document.getElementById('new').style.visibility = 'hidden';
  s.total++
  picklocation();
}
