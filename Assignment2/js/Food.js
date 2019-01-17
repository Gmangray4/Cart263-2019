"use strict";
class Food extends Agent {
  constructor(x,y,minSize,maxSize,maxSpeed) {
    super(x,y,random(minSize,maxSize),'#813C1A');
    this.minSize = minSize;
    this.maxSize = maxSize;
    this.maxSpeed = maxSpeed;
    this.vx = maxSpeed;
    this.vy = maxSpeed;
  }
update(){
this.x += this.vx;
this.y += this.vy;

if (this.x - this.size/2 < 0 || this.x + this.size/2 > width) {
    this.vx = -this.vx;

}
  if (this.y - this.size/2 < 0 || this.y + this.size/2 > height) {
      this.vy = -this.vy;
  }
}

  reset() {
    this.x = random(0,width);
    this.y = random(0,height);
    this.size = random(this.minSize,this.maxSize);
    this.vx = random(1,50);
    this.vy = random(1,50);
  }
}
