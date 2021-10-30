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
    fill(204,155,255,80);
    rect(0, 0, 225);
  }
    else if (keyCode ===RIGHT_ARROW){
      fill(255,204,102,80);
      square(0, 0, 250,90);
    }
    else if (keyCode ===LEFT_ARROW){
    fill(102,255,255,80);
    quad(0-125,0,0, 0 -125,0+125,0 ,0, 0 +125)
    }
    else if (keyCode ===DOWN_ARROW){
      fill(0,255,153,80);
      circle(0, 0, 250);
      }
    pop();
    for (let i = 0; i < movers.length; i++) {
    movers[i].update();
    movers[i].colorset();
    movers[i].display();
    movers[i].checkEdge();
  }
}
