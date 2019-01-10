"use strict";

let avatar = {
x:0,
y:0,
maxSize: 100,
size: 100,
active: true,
color: '#ccc55'

}

let food = {
x:0,
y:0,
size: 100,
color:'#ccc55'
}

function setup() {
createCanvas(windowWidth, windowHeight);
noCursor();
food.x = random(0,width);
food.y = random(0,height);

}

function draw() {
background(0);
if (avatar.active === true){

updateAvatar();
displayAvatar();
displayFood();
checkCollision();
}
}

function updateAvatar() {
  avatar.x = mouseX;
  avatar.y = mouseY;
  avatar.size -= 0.5;
  avatar.size = constrain(avatar.size,0, avatar.maxSize);

  if (avatar.size === 0) {
    avatar.active = false;
  }

}

function displayAvatar() {
push();
noStroke();
fill(avatar.color);
ellipse(avatar.x,avatar.y,avatar.size);
pop();
}

function displayFood() {
push();
noStroke();
fill(food.color);
ellipse(food.x,food.y,food.size);
pop();
}

function checkCollision() {
  let d = dist(avatar.x,avatar.y,food.x,food.y);
  if (d < avatar.size/2 + food.size/2) {
    avatar.size = constrain(avatar.size + 50,0,avatar.maxSize);
    food.x = random(0,width);
    food.y = random(0,height);
  }
}
