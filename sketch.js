let movers = [];
let a = 30;
let o = 20;
let bell;
let bs;

function preload() {
 bell = loadSound('ShipBell.mp3');
 bs = loadSound('DolphineGodmode.mp3');
}

function setup() {
  createCanvas(800,800);
  bs.play();
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
    fill(213,176,244,o);
    rect(0, 0, 225);
  }
    else if (keyCode ===RIGHT_ARROW){
     fill(128,128,192,o);
     square(0, 0, 225,75);
    }
    else if (keyCode ===LEFT_ARROW){
     fill(158,206,136,o);
     square(0, 0, 225,75);
    }
    else if (keyCode ===DOWN_ARROW){
      fill(132,170,176,o);
      circle(0, 0, 225);
      }
    pop();
    for (let i = 0; i < movers.length; i++) {
    movers[i].update();
    movers[i].colorset();
    movers[i].display();
    movers[i].checkEdge();
  }
  if (mouseIsPressed){
    if(!bell.isPlaying()){
     bell.play();
    }
  }
}
