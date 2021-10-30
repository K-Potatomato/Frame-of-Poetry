class Mover{
  constructor() {
    this.fs = random(5,10)
    this.ts = random(4,7)
    this.mouse = createVector(width/2,height/2);
    this.position = createVector(random(0+100,width-100),random(0+100,height-100));
    this.velocity = createVector();
    this.acceleration = createVector();
    this.topspeed = 5;

  }

  update() {

    this.acceleration.set(random(-5, 5), random(-5, 5));
    this.acceleration.mult(0.05);
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    if (mouseIsPressed){
    this.acceleration = p5.Vector.sub(this.mouse,this.position);
    this.acceleration.setMag(random(0.4));
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
    }
  }
  colorset() {
    if (keyCode === UP_ARROW && this.position.x <= width/2+140 && this.position.x >= width/2-140 && this.position.y<= height/2+140 && this.position.y >= height/2-140){
    fill(157,77,230,60);
    }
  else if (keyCode ===RIGHT_ARROW&& this.position.x <= width/2+140 && this.position.x >= width/2-140 && this.position.y<= height/2+140 && this.position.y >= height/2-140){
    fill(60,60,212,60);
    }
   else if (keyCode ===LEFT_ARROW &&this.position.x <= width/2+140 && this.position.x >= width/2-140 && this.position.y<= height/2+140 && this.position.y >= height/2-140){
     fill(62,103,41,60);
   }
    else if(keyCode ===DOWN_ARROW && this.position.x <= width/2+140 && this.position.x >= width/2-140 && this.position.y<= height/2+140 && this.position.y >= height/2-140){
     fill(56,84,88,60);
    }
    else{
      fill(100,60);
    }

  }

  display() {
    noStroke();
    if (keyCode === UP_ARROW){
      rect(this.position.x, this.position.y, this.fs);
    }
    else if (keyCode ===RIGHT_ARROW){
      square(this.position.x, this.position.y,this.fs,random(1,3));
    }
    else if (keyCode ===LEFT_ARROW){
     square(this.position.x, this.position.y,this.fs,random(1,3));
    }
    else if(keyCode ===DOWN_ARROW){
      circle(this.position.x, this.position.y, this.fs);
      }
    else{
      circle(this.position.x, this.position.y, this.fs);
    }
  }
  checkEdge() {
    if (this.position.y > height-100) {
      this.velocity.y = this.velocity.y * -1;
      this.position.y = height-100;
    }
    if (this.position.y < 0+100) {
      this.velocity.y = this.velocity.y * -1;
      this.position.y = 0+100;
    }
    if (this.position.x > width-100) {
      this.velocity.x = this.velocity.x * -1;
      this.position.x = width-100;
    }
    if (this.position.x < 0+100) {
      this.velocity.x = this.velocity.x * -1;
      this.position.x = 0+100;
    }
  }
}
