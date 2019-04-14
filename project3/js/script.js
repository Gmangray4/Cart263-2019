"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

///Ask about how to remove spsifc images with removeing the others.
/// how to check how many image ids are left.
// also how to check the window height and width

// Key	Code
// backspace	8
// tab	9
// enter	13
// shift	16
// ctrl	17
// alt	18
// pause/break	19
// caps lock	20
// escape	27
// (space)	32
// page up	33
// page down	34
// end	35
// home	36
// left arrow	37
// up arrow	38
// right arrow	39
// down arrow	40
// insert	45
// delete	46
// 0	48
// 1	49
// 2	50
// 3	51
// 4	52
// 5	53
// 6	54
// 7	55
// 8	56
// 9	57
// a	65
// b	66
// c	67
// d	68
// Key	Code
// e	69
// f	70
// g	71
// h	72
// i	73
// j	74
// k	75
// l	76
// m	77
// n	78
// o	79
// p	80
// q	81
// r	82
// s	83
// t	84
// u	85
// v	86
// w	87
// x	88
// y	89
// z	90
// left window key	91
// right window key	92
// select key	93
// numpad 0	96
// numpad 1	97
// numpad 2	98
// numpad 3	99
// numpad 4	100
// numpad 5	101
// numpad 6	102
// numpad 7	103
// Key	Code
// numpad 8	104
// numpad 9	105
// multiply	106
// add	107
// subtract	109
// decimal point	110
// divide	111
// f1	112
// f2	113
// f3	114
// f4	115
// f5	116
// f6	117
// f7	118
// f8	119
// f9	120
// f10	121
// f11	122
// f12	123
// num lock	144
// scroll lock	145
// semi-colon	186
// equal sign	187
// comma	188
// dash	189
// period	190
// forward slash	191
// grave accent	192
// open bracket	219
// back slash	220
// close braket	221
// single quote	222

let $windowP1;
let $windowP2;

let $imgP1;
let $imgP2;
let $gameWindow;
let $textScoreP1;
let $textScoreP2;

let player1Turn = false;
let player2Turn = false;

let possbleKeyList = "1234567890qwertyuiopasdfghjklzxcvbnm";

let windowRegion = 1;
let hackerCoordinateX = 1;
let hackerCoordinateY = 1;

let scoreP1 = 0;
let scoreP2 = 0;

let possbleKeyListHeldKey = "tgbv";

let possbleEventKeyList1 = "";
let possbleEventKeyList2 = "";

let currentkey = " ";

let currentHeldKey = " ";
let heldKey = "";

let images = "";

let time = "";

let gameRuning = false;

let countdownStart = 180000;

let sentence = "";

let turnInterval;

$(document).ready(setup);

$(document).ready(function() {
  document.addEventListener("click", function() {


    console.log("click");
  });
});


function setup() {
  $gameWindow = $('#gameWindow');
  $windowP2 = $('#windowP2');
  $windowP1 = $('#windowP1');
  $imgP1 = $('#imgP1');
  $imgP2 = $('#imgP2');
  $textScoreP1 = $('#textScoreP1')
  $textScoreP2 = $('#textScoreP2')

  changeAll();
  $(document).on("keyup", keyUp);
  $(document).on("keydown", keyDown);
  console.log(currentHeldKey);

  let i = Math.floor((Math.random() * 2) + 1);
  if (i === 1) {
    player1Turn = true;
  }
  if (i === 2) {
    player2Turn = true;
  }
  turnDisplay();
  console.log(i);
  console.log(player1Turn);
  console.log(player2Turn);
  changeKey();
  block();
  createImageP1();
  createImageP2();

}

function draw() {
}

function createImage(){
  createImageW1();
  createImageW2();
  createImageW3();
  createImageW4();
}
function createImageW1() {
  if (hackerCoordinateX === 1 && hackerCoordinateY === 1 && blockW1 === true){
  let max_width = 400;
  let max_height = 150;
  let z = Math.floor((Math.random() * 100) + 1);
  let i = Math.floor((Math.random() * 118) + 1);
  let imgSize = Math.floor((Math.random() * 50) + 100);

  let randomCoordinate = function() {
    var r = [];
    var x = Math.floor(Math.random() * max_width);
    var y = Math.floor(Math.random() * max_height) + 60;
    r = [x, y];
    return r;
  };
  let xy = randomCoordinate();

  let img = document.createElement("img");
  img.src = "assets/images/memes/" + i + ".png";
  img.className = "memeImg";
  img.id = "imgP1" + i;
  img.height = imgSize;
  img.width = imgSize;
  img.style.position = "absolute";
  img.style.top = xy[1] + 'px';
  img.style.left = xy[0] + 'px';
  img.style.zIndex = z;
  img.addEventListener("click", function() {
  img.remove();
    scoreP1--;
    // textScoreP1.innerText = "Score = " + scoreP1;
  })
  window1.appendChild(img);
  // textScoreP1.innerText = "Score = " + scoreP1;
}
}
function createImageW2() {
  if (hackerCoordinateX === 2 && hackerCoordinateY === 1 && blockW2 === true) {
  let max_width = 400;
  let max_height = 150;
  let z = Math.floor((Math.random() * 100) + 1);
  let i = Math.floor((Math.random() * 118) + 1);
  let imgSize = Math.floor((Math.random() * 50) + 100);

  let randomCoordinate = function() {
    var r = [];
    var x = Math.floor(Math.random() * max_width) + 700;
    var y = Math.floor(Math.random() * max_height) + 60;
    r = [x, y];
    return r;

  };
  let xy = randomCoordinate();

  let img = document.createElement("img");
  img.src = "assets/images/memes/" + i + ".png";
  img.className = "memeImg";
  img.id = "imgP1" + i;
  img.height = imgSize;
  img.width = imgSize;
  img.style.position = "absolute";
  img.style.top = xy[1] + 'px';
  img.style.left = xy[0] + 'px';
  img.style.zIndex = z;
  img.addEventListener("click", function() {
  img.remove();
    // textScoreP1.innerText = "Score = " + scoreP1;
  })
  window2.appendChild(img);
  // textScoreP1.innerText = "Score = " + scoreP1;
}
}
function createImageW3() {
    if (hackerCoordinateX === 1 && hackerCoordinateY === 2 && blockW3 === true) {
  let max_width = 400;
  let max_height = 150;
  let z = Math.floor((Math.random() * 100) + 1);
  let i = Math.floor((Math.random() * 118) + 1);
  let imgSize = Math.floor((Math.random() * 50) + 100);

  let randomCoordinate = function() {
    var r = [];
    var x = Math.floor(Math.random() * max_width);
    var y = Math.floor(Math.random() * max_height) + 400;
    r = [x, y];
    return r;
  };

  let xy = randomCoordinate();

  let img = document.createElement("img");
  img.src = "assets/images/memes/" + i + ".png";
  img.className = "memeImg";
  img.id = "imgP1" + i;
  img.height = imgSize;
  img.width = imgSize;
  img.style.position = "absolute";
  img.style.top = xy[1] + 'px';
  img.style.left = xy[0] + 'px';
  img.style.zIndex = z;
  img.addEventListener("click", function() {
  img.remove();
    // textScoreP1.innerText = "Score = " + scoreP1;
  })
  window3.appendChild(img);
  // textScoreP1.innerText = "Score = " + scoreP1;
}
}
function createImageW4() {
    if (hackerCoordinateX === 2 && hackerCoordinateY === 2 && blockW4 === true) {
  let max_width = 400;
  let max_height = 150;
  let z = Math.floor((Math.random() * 100) + 1);
  let i = Math.floor((Math.random() * 118) + 1);
  let imgSize = Math.floor((Math.random() * 50) + 100);

  let randomCoordinate = function() {
    var r = [];
    var x = Math.floor(Math.random() * max_width) + 700;
    var y = Math.floor(Math.random() * max_height) + 400;
    r = [x, y];
    return r;
  };

  let xy = randomCoordinate();

  let img = document.createElement("img");
  img.src = "assets/images/memes/" + i + ".png";
  img.className = "memeImg";
  img.id = "imgP1" + i;
  img.height = imgSize;
  img.width = imgSize;
  img.style.position = "absolute";
  img.style.top = xy[1] + 'px';
  img.style.left = xy[0] + 'px';
  img.style.zIndex = z;
  img.addEventListener("click", function() {
  img.remove();
    // textScoreP1.innerText = "Score = " + scoreP1;
  })
  window4.appendChild(img);
  // textScoreP1.innerText = "Score = " + scoreP1;
}
}

function createImageP1() {
  let max_width = 400;
  let max_height = 400;
  let z = Math.floor((Math.random() * 100) + 1);
  let i = Math.floor((Math.random() * 118) + 1);
  let imgSize = Math.floor((Math.random() * 150) + 100);

  let randomCoordinate = function() {
    var r = [];
    var x = Math.floor(Math.random() * max_width);
    var y = Math.floor(Math.random() * max_height) + 60;
    r = [x, y];
    return r;
  };
  let xy = randomCoordinate();

  let img = document.createElement("img");
  img.src = "assets/images/memes/" + i + ".png";
  img.className = "memeImg";
  img.id = "imgP1" + i;
  img.height = imgSize;
  img.width = imgSize;
  img.style.position = "absolute";
  img.style.top = xy[1] + 'px';
  img.style.left = xy[0] + 'px';
  img.style.zIndex = z;
  scoreP1++;
  img.addEventListener("click", function() {
  img.remove();
    scoreP1--;
    // textScoreP1.innerText = "Score = " + scoreP1;
  })
  window1.appendChild(img);
  // textScoreP1.innerText = "Score = " + scoreP1;
}

function createImageP2() {
  let max_width = 400;
  let max_height = 400;
  let z = Math.floor((Math.random() * 100) + 1);
  let i = Math.floor((Math.random() * 118) + 1);
  let imgSize = Math.floor((Math.random() * 150) + 100);

  let randomCoordinate = function() {
    var r = [];
    var x = Math.floor(Math.random() * max_width + 700);
    var y = Math.floor(Math.random() * max_height) + 60;
    r = [x, y];
    return r;
  };

  let xy = randomCoordinate();
  let img = document.createElement("img");
  img.src = "assets/images/memes/" + i + ".png";
  img.className = "memeImg";
  img.id = "imgP2" + i;
  img.height = imgSize;
  img.width = imgSize;
  img.style.position = "absolute";
  img.style.top = xy[1] + 'px';
  img.style.left = xy[0] + 'px';
  img.style.zIndex = z;
  scoreP2++;
  img.addEventListener("click", function() {
    img.remove();
    scoreP2--;
  })

  window2.appendChild(img);
}

function changeAll() {
  currentHeldKey = possbleKeyListHeldKey[Math.floor(Math.random() * possbleKeyListHeldKey.length)];
}

function changeKey() {
  currentkey = possbleKeyList[Math.floor(Math.random() * possbleKeyList.length)];
    console.log(currentkey);
    turnDisplay();
}

function turnDisplay(){
  if (player1Turn === true && player2Turn === false ) {
  textScoreP1.innerText = "Press Key: " + currentkey;
  textScoreP2.innerText = "click to remove!";
}else if (player1Turn === false && player2Turn === true ) {
  textScoreP2.innerText = "Press Key: " + currentkey;
  textScoreP1.innerText = "click to remove!";
}
}

let blockW1 = false;
let blockW2 = false;
let blockW3 = false;
let blockW4 = false;

function blockWindow1(){
if (hackerCoordinateX === 1 && hackerCoordinateY === 1 && blockW1 === false){
  let max_width = 0;
  let max_height = 5;
  let placement = function() {
    let r = [];
    let x = max_width + 8;
    let y = max_height + 60;
    r = [x, y];
    return r;
  };

  let xy = placement();
  let div = document.createElement("div");
  div.className = "block";
  div.id = "windowBlock";
  div.style.width = "50%";
  div.style.height = "45vh";
  div.style.backgroundImage = "url(../assets/images/div/incognito.png)";
  div.style.backgroundRepeat = "no-repeat";
  div.style.backgroundSize = "cover";
  div.style.backgroundPosition = "center";
  div.style.color = "yellow";
  div.style.position = "absolute";
  div.style.top = xy[1] + 'px';
  div.style.left = xy[0] + 'px';
  blockW1 = true;
  div.addEventListener("click", function() {
    blockW1 = false;
  div.remove();
    // textScoreP1.innerText = "Score = " + scoreP1;
  })
  div.style.zIndex = 9998;
  document.getElementById("gameWindow").appendChild(div);
}
}

function blockWindow2(){
if (hackerCoordinateX === 2 && hackerCoordinateY === 1 && blockW2 === false){
  let max_width = 0;
  let max_height = 5;
  let placement = function() {
    let r = [];
    let x = max_width + 680;
    let y = max_height + 60;
    r = [x, y];
    return r;
  };

  let xy = placement();
  let div = document.createElement("div");
  div.className = "block";
  div.id = "windowBlock";
  div.style.width = "50%";
  div.style.height = "45vh";
  div.style.backgroundImage = "url(../assets/images/div/incognito.png)";
  div.style.backgroundRepeat = "no-repeat";
  div.style.backgroundSize = "cover";
  div.style.backgroundPosition = "center";
  div.style.color = "yellow";
  div.style.position = "absolute";
  div.style.top = xy[1] + 'px';
  div.style.left = xy[0] + 'px';
  blockW2 = true;
  div.addEventListener("click", function() {
    blockW2 = false;
  div.remove();
    // textScoreP1.innerText = "Score = " + scoreP1;
  })
  div.style.zIndex = 9998;
  document.getElementById("gameWindow").appendChild(div);
}
}

function blockWindow3(){
if (hackerCoordinateX === 1 && hackerCoordinateY === 2 && blockW3 === false){
  let max_width = 0;
  let max_height = 5;
  let placement = function() {
    let r = [];
    let x = max_width + 8;
    let y = max_height + 350;
    r = [x, y];
    return r;
  };

  let xy = placement();
  let div = document.createElement("div");
  div.className = "block";
  div.id = "windowBlock";
  div.style.width = "50%";
  div.style.height = "45vh";
  div.style.backgroundImage = "url(../assets/images/div/incognito.png)";
  div.style.backgroundRepeat = "no-repeat";
  div.style.backgroundSize = "cover";
  div.style.backgroundPosition = "center";
  div.style.color = "yellow";
  div.style.position = "absolute";
  div.style.top = xy[1] + 'px';
  div.style.left = xy[0] + 'px';
  blockW3 = true;
  div.addEventListener("click", function() {
    blockW3 = false;
  div.remove();
    // textScoreP1.innerText = "Score = " + scoreP1;
  })
  div.style.zIndex = 9998;
  document.getElementById("gameWindow").appendChild(div);
}
}
function blockWindow4(){
if (hackerCoordinateX === 2 && hackerCoordinateY === 2 && blockW4 === false){
  let max_width = 0;
  let max_height = 5;
  let placement = function() {
    let r = [];
    let x = max_width + 680;
    let y = max_height + 350;
    r = [x, y];
    return r;
  };

  let xy = placement();
  let div = document.createElement("div");
  div.className = "block";
  div.id = "windowBlock";
  div.style.width = "50%";
  div.style.height = "45vh";
  div.style.backgroundImage = "url(../assets/images/div/incognito.png)";
  div.style.backgroundRepeat = "no-repeat";
  div.style.backgroundSize = "cover";
  div.style.backgroundPosition = "center";
  div.style.color = "yellow";
  div.style.position = "absolute";
  div.style.top = xy[1] + 'px';
  div.style.left = xy[0] + 'px';
  blockW4 = true;
  div.addEventListener("click", function() {
    blockW4 = false;
  div.remove();
    // textScoreP1.innerText = "Score = " + scoreP1;
  })
  div.style.zIndex = 9998;
  document.getElementById("gameWindow").appendChild(div);
}
}



function block() {

  let max_width = 0;
  let max_height = 5;
  let placement = function() {
    let r = [];
    let x = 0;
    let y = max_height + 60;

    if (player1Turn === true) {
      x = max_width + 0;
    }
    if (player2Turn === true) {
      x = max_width + 680;
    }
    r = [x, y];
    return r;
  };

  let xy = placement();
  let div = document.createElement("div");
  div.className = "block";
  div.id = "windowBlock";
  div.style.width = "50%";
  div.style.height = "90vh";
  div.style.backgroundImage = "url(../assets/images/div/incognito.png)";
  div.style.backgroundRepeat = "no-repeat";
  div.style.backgroundSize = "cover";
  div.style.backgroundPosition = "center";
  div.style.color = "yellow";
  div.style.position = "absolute";
  div.style.top = xy[1] + 'px';
  div.style.left = xy[0] + 'px';
  div.addEventListener("click", function() {
  div.remove();
    // textScoreP1.innerText = "Score = " + scoreP1;
  })
  div.style.zIndex = 9998;
  document.getElementById("gameWindow").appendChild(div);
}

// https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
function gameTimer(duration, display) {
  let timer = duration,
    minutes, seconds;
  let gameInterval = setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
      clearInterval(turnInterval);
      clearInterval(gameInterval);
    }

  }, 1000);
  console.log(minutes);
}

function turnTimer(duration) {
  let timer = duration,
    minutes, seconds;
turnInterval = setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    if (--timer < 0) {
      sentence = "change turn";
      speak();
      timer = duration;
      changeTurns();
    }

  }, 1000);
  console.log(minutes);
}

function countdown() {
  sentence = "start";
  speak();
  let time = 60 * 3,
    display = document.querySelector('#time');
  gameTimer(time, display);
  let turnTime = 30 * 1;
  turnTimer(turnTime);

};

function changeTurns() {

  if (player1Turn === true) {
    player1Turn = false;
    player2Turn = true;
    document.getElementById("windowBlock").remove();
    setTimeout(block, 100);
  } else if (player2Turn === true) {
    player2Turn = false;
    player1Turn = true;
    document.getElementById("windowBlock").remove();
    setTimeout(block, 100);
  }
    turnDisplay();
}

function checkCoordinates(){
  if (hackerCoordinateX === 1 && hackerCoordinateY === 1) {
  document.getElementById("hackerS").style.margin = "0";
  }
  if (hackerCoordinateX === 2 && hackerCoordinateY === 1) {
  document.getElementById("hackerS").style.margin = "0px 0px 0px 50%";
  }
  if (hackerCoordinateX === 1 && hackerCoordinateY === 2) {
  document.getElementById("hackerS").style.margin = "45vh 0px 0px";
  }
  if (hackerCoordinateX === 2 && hackerCoordinateY === 2) {
  document.getElementById("hackerS").style.margin = "45vh 0px 0px 50%";
  }
}


function speak() {
  // Set some random numbers for the voice's pitch and rate parameters for a bit of fun
  let options = {
    pitch: Math.random(),
    rate: Math.random()
  };
  // Use ResponsiveVoice to speak the string we generated, with UK English Male voice
  // and the options we just specified.
  responsiveVoice.speak(sentence,'UK English Male',options);
}

function keyDown(e) {
  // console.log("keyDown");
  // console.log(heldKey);
  if (player1Turn === true && e.key === currentkey) {
    createImageP1();
    changeKey();
  } else {
  }

  if (player2Turn === true && e.key === currentkey) {
    createImageP2();
    changeKey();
  } else {
  }

  if (e.key === "q") {
    console.log("q");
    countdown();
  }
  if (e.key === "m") {
    console.log("m");
    sentence = "meme";
    speak();
createImage();
  }
  if (e.key === "i") {
    console.log("i");
blockWindow1();
blockWindow2();
blockWindow3();
blockWindow4();
  }
  // up arrow	38
  if (e.keyCode === 38) {
    console.log("38");
    if (hackerCoordinateY === 2) {
      hackerCoordinateY = 1;
    }
    checkCoordinates();
  }
  // left arrow	37
  if (e.keyCode === 37) {
    console.log("37");
    if (hackerCoordinateX === 2) {
      hackerCoordinateX = 1;
    }
    checkCoordinates();
  }
  // right arrow	39
  if (e.keyCode === 39) {
    console.log("39");
    if (hackerCoordinateX === 1) {
      hackerCoordinateX = 2;
    }
    checkCoordinates();
  }

// down arrow	40
  if (e.keyCode === 40) {
    console.log("40");
    if (hackerCoordinateY === 1) {
      hackerCoordinateY = 2;
    }
    checkCoordinates();
  }
}
function keyUp(e) {
  // console.log("KeyUp");
  if (heldKey === currentHeldKey) {
    heldKey = undefined;
    console.log("lol");
  }
}
