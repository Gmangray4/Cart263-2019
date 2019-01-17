"use strict";

class Avatar extends Agent {
  constructor(x,y,size,sizeLoss) {
    super(x,y,size,'#005DFF');
    this.maxSize = size;
    this.sizeLoss = sizeLoss;
  }
  update() {
    if (!this.active) {
      return;
    }
    this.x = mouseX;
    this.y = mouseY;
    this.size = constrain(this.size - this.sizeLoss,0,this.maxSize);
    if (this.size === 0) {
      this.active = false;
    }
  }
}
