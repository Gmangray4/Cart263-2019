"use strict";

const AVATAR_MAX_SIZE = 64;
const AVATAR_SIZE_LOSS_PER_FRAME = 1;
const FOOD_MIN_SIZE = 5;
const FOOD_MAX_SIZE = 100;
const FOOD_MAX_SPEED = 5;

let avatar;
let food = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  avatar = new Avatar(mouseX,mouseY,AVATAR_MAX_SIZE,AVATAR_SIZE_LOSS_PER_FRAME);

  for (let i = 0; i < 15; i++){
  food.push(new Food(random(0,width),random(0,height),FOOD_MIN_SIZE,FOOD_MAX_SIZE,FOOD_MAX_SPEED));
}
  noCursor();
}

function draw() {
  background(0);
  avatar.update();

    for (let i = 0; i < food.length; i++){
  if (avatar.collide(food[i])) {
    avatar.eat(food[i]);
  }
}

  for (let i = 0; i < food.length; i++) {
    food[i].update();
    food[i].display();
  }
  avatar.display();
}
