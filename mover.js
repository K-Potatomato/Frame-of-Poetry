class Mover{
  constructor() {
    this.fs = random(5,10)
    this.ts = random(4,7)
    this.mouse = createVector(width/2,height/2);
    this.position = createVector(random(width),random(height));
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
    fill(204,155+10,255);
    }
  else if (keyCode ===RIGHT_ARROW&& this.position.x <= width/2+140 && this.position.x >= width/2-140 && this.position.y<= height/2+140 && this.position.y >= height/2-140){
    fill(255,204,102+10);
    }
   else if (keyCode ===LEFT_ARROW &&this.position.x <= width/2+140 && this.position.x >= width/2-140 && this.position.y<= height/2+140 && this.position.y >= height/2-140){
     fill(102+10,255,255);
   }
    else if(keyCode ===DOWN_ARROW && this.position.x <= width/2+140 && this.position.x >= width/2-140 && this.position.y<= height/2+140 && this.position.y >= height/2-140){
     fill(0,255,153+10);
    }
    else{
      fill(255,60);
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
     quad(this.position.x-this.ts,this.position.y,this.position.x, this.position.y -this.ts,this.position.x+this.ts,this.position.y ,this.position.x, this.position.y +this.ts)
    }
    else if(keyCode ===DOWN_ARROW){
      circle(this.position.x, this.position.y, this.fs);
      }
    else{
      square(this.position.x, this.position.y,this.fs,random(1,3));
    }
  }
  checkEdge() {
    if (this.position.y > height) {
      this.velocity.y = this.velocity.y * -1;
      this.position.y = height;
    }
    if (this.position.y < 0) {
      this.velocity.y = this.velocity.y * -1;
      this.position.y = 0;
    }
    if (this.position.x > width) {
      this.velocity.x = this.velocity.x * -1;
      this.position.x = width;
    }
    if (this.position.x < 0) {
      this.velocity.x = this.velocity.x * -1;
      this.position.x = 0;
    }
  }
}
