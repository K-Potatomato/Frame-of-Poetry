let movers = [];
let a = 30;

function setup() {
  createCanvas(800,800);
  for (let i = 0; i < 100; i++) {
     movers[i] = new Mover();
  }
  background(0,0);
  rectMode(CENTER);
}

function draw() {
  fill(0,10);
  noStroke();
  rect(width/2,height/2, 600,600);
  push();
  translate(400,400);
  angleMode(RADIANS);
  rotate(a);
  a = a+0.01;
  if (keyCode === UP_ARROW){
    fill(213,176,244,100);
    rect(0, 0, 225);
  }
    else if (keyCode ===RIGHT_ARROW){
     fill(128,128,192,100);
     square(0, 0, 225,75);
    }
    else if (keyCode ===LEFT_ARROW){
     fill(158,206,136,100);
     square(0, 0, 225,75);
    }
    else if (keyCode ===DOWN_ARROW){
      fill(132,170,176,100);
      circle(0, 0, 225);
      }
    pop();
    for (let i = 0; i < movers.length; i++) {
    movers[i].update();
    movers[i].colorset();
    movers[i].display();
    movers[i].checkEdge();
  }
}
