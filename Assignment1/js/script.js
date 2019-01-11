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
vx:0,
vy:0,
speed:30,
size: 100,
color:'#ccc55'
}

function setup() {
createCanvas(windowWidth, windowHeight);
noCursor();
food.x = food.vx;
food.y = food.vy;
food.vx = food.speed;
food.vy = food.speed;
const AVATAR_SIZE_GAIN = 50;
const AVATAR_SIZE_LOSS = 1;

}

function draw() {
background(0);
if (avatar.active === true){
updateAvatar();
updateFood();
displayAvatar();
displayFood();
checkCollision();
console.log(food.speed);
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

function updateFood()  {
  food.x += food.vx;
  food.y += food.vy;

  if (food.x - food.size/2 < 0 || food.x + food.size/2 > windowWidth) {
      food.vx = -food.vx;

  }
    if (food.y - food.size/2 < 0 || food.y + food.size/2 > windowHeight) {
        food.vy = -food.vy;
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
    food.x = random(100,width - 100);
    food.y = random(100,height - 100);
    food.speed = random(1, 30);
    food.vx = food.speed;
    food.vy = food.speed;
  }
}
