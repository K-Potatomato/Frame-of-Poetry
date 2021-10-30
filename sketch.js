let movers = [];

function setup() {
  createCanvas(500,500);
  for (let i = 0; i < 100; i++) {
     movers[i] = new Mover();
  }
}

function draw() {
  background(0);
  if (keyCode === UP_ARROW){
    fill(204,155,255,100);
    rect(width/2-125, height/2-125, 250);
  } 
    else if (keyCode ===RIGHT_ARROW){
      fill(255,204,102,100);
      square(width/2-125, height/2-125, 250,90);
    }
    else if (keyCode ===LEFT_ARROW){
    fill(102,255,255,100);
    quad(width/2-125,height/2,width/2, height/2 -125,width/2+125,height/2 ,width/2, height/2 +125)
    }
    else if (keyCode ===DOWN_ARROW){
      fill(0,255,153,100);
      circle(width/2, height/2, 250);
      }
    for (let i = 0; i < movers.length; i++) {
    movers[i].update();
    movers[i].colorset();
    movers[i].display();
    movers[i].checkEdge();
  }
}

