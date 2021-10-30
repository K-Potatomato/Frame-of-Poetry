let movers = [];

function setup() {
  createCanvas(800,800);
  for (let i = 0; i < 100; i++) {
     movers[i] = new Mover();
  }
}

function draw() {
  background(0,0);
  fill(0,10);
  rectMode(CENTER);
  rect(width/2,height/2, 600,600);
  if (keyCode === UP_ARROW){
    fill(204,155,255,80);
    rect(width/2, height/2, 225);
  }
    else if (keyCode ===RIGHT_ARROW){
      fill(255,204,102,80);
      square(width/2, height/2, 250,90);
    }
    else if (keyCode ===LEFT_ARROW){
    fill(102,255,255,80);
    quad(width/2-125,height/2,width/2, height/2 -125,width/2+125,height/2 ,width/2, height/2 +125)
    }
    else if (keyCode ===DOWN_ARROW){
      fill(0,255,153,80);
      circle(width/2, height/2, 250);
      }
    for (let i = 0; i < movers.length; i++) {
    movers[i].update();
    movers[i].colorset();
    movers[i].display();
    movers[i].checkEdge();
  }
}
