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


let $statDiv;
let $gameWindow;
let $p1Role;
let $p2Role;
let $roundNum;
let $startButton;

let player1Turn = false;
let player2Turn = false;

let hackerCoordinateX = 1;
let hackerCoordinateY = 1;

let scoreP1 = 0;
let scoreP2 = 0;

let round = 0;

let sentence = "";

let turnInterval;

let arrayIds = [];
let arraysInC = [];

let blockW1 = false;
let blockW2 = false;
let blockW3 = false;
let blockW4 = false;

let incognitoIsUsed = false;

let memeAddSound;
let memeRemoveSound;
let gameStartSound;
let incAddSound;
let incRemoveSound;
let bugSound;
let gameOverSound;

let bgm1;
let bgm2;
let bgm3;
let bgm4;
let bgm5;
let bgm6;
let bgm7;
let menuBgm;

let currentSong;
$(document).ready(setup);

$(document).ready(function() {
  document.addEventListener("click", function() {
    console.log("click");
  });
});

function setup() {
  menuBgm = new Pizzicato.Sound({
    source: 'file',
    volume: 0.3,
    options: {
      path: 'assets/sounds/Music/Menu.mp3'
    }
  });
  bgm1 = new Pizzicato.Sound({
    source: 'file',
    options: {
      path: 'assets/sounds/Music/bgm1.mp3'
    }
  });
  bgm2 = new Pizzicato.Sound({
    source: 'file',
    options: {
      path: 'assets/sounds/Music/bgm2.mp3'
    }
  });
  bgm3 = new Pizzicato.Sound({
    source: 'file',
    options: {
      path: 'assets/sounds/Music/bgm3.mp3'
    }
  });
  bgm4 = new Pizzicato.Sound({
    source: 'file',
    options: {
      path: 'assets/sounds/Music/bgm4.mp3'
    }
  });
  bgm5 = new Pizzicato.Sound({
    source: 'file',
    volume: 0.3,
    options: {
      path: 'assets/sounds/Music/bgm5.mp3'
    }
  });
  bgm6 = new Pizzicato.Sound({
    source: 'file',
    options: {
      path: 'assets/sounds/Music/bgm6.mp3'
    }
  });
  bgm7 = new Pizzicato.Sound({
    source: 'file',
    volume: 0.3,
    options: {
      path: 'assets/sounds/Music/bgm7.mp3'
    }
  });
  memeAddSound = new Pizzicato.Sound({
    source: 'file',
    options: {
      path: 'assets/sounds/addMeme.wav'
    }
  });

  memeRemoveSound = new Pizzicato.Sound({
    source: 'file',
    options: {
      path: 'assets/sounds/removeMeme.wav'
    }
  });

  incAddSound = new Pizzicato.Sound({
    source: 'file',
    options: {
      path: 'assets/sounds/IncognitoAdd.wav'
    }
  });
  incRemoveSound = new Pizzicato.Sound({
    source: 'file',
    options: {
      path: 'assets/sounds/IncognitoRemove.wav'
    }
  });
  gameStartSound = new Pizzicato.Sound({
    source: 'file',
    options: {
      path: 'assets/sounds/gameStart.wav'
    }
  });
  bugSound = new Pizzicato.Sound({
    source: 'file',
    options: {
      path: 'assets/sounds/bugClick.wav'
    }
  });
  gameOverSound = new Pizzicato.Sound({
    source: 'file',
    options: {
      path: 'assets/sounds/gameOver.mp3'
    }
  });

  $startButton = $('#startButton');
  $statDiv = $('#statDiv');
  $gameWindow = $('#gameWindow');
  $p1Role = $('#p1Role');
  $p2Role = $('#p2Role');
  $roundNum = $('#roundNum');
  $(document).on("keydown", keyDown);
  sentence = "Meme-ah-tahj";
  lodingDiv();
}

function round1Start() {
  bgm1.volume = 0.1;
  bgm2.volume = 0.1;
  bgm3.volume = 0.1;
  bgm4.volume = 0.1;
  bgm5.volume = 0.1;
  bgm6.volume = 0.1;
  bgm7.volume = 0.1;
  console.log("whahth");
  $("#statDiv").remove();
  round = 1;
  countdown();
  gameStartSound.play();
  bgmToPlay();
  menuBgm.stop();
}

function round1End() {
  scoreP1 = arrayIds.length;
  round1EndDiv();
  incognitoRemoveAll();
  bgmToStop();
  menuBgm.play();
}

function round2Start() {
  for (var i = 0; i < arrayIds.length; i++) {
    document.getElementById(arrayIds[i]).remove();
    console.log(arrayIds[i]);
  }
arrayIds = [];
p1Role.innerText = 'Hacker';
p2Role.innerText = 'Remover';
roundNum.innerText = '2';
$("#endRound1Div").remove();
round = 2;
countdown();
gameStartSound.play();
bgmToPlay();
menuBgm.stop();
// bgmToPlay();
}

function round2End() {
  scoreP2 = arrayIds.length;
  bgmToStop();
  round2EndDiv();
  incognitoRemoveAll();
  gameOverSound.play();
  menuBgm.play();
}

function playAgain() {
  for (var i = 0; i < arrayIds.length; i++) {
    document.getElementById(arrayIds[i]).remove();
    console.log(arrayIds[i]);
  }
arrayIds = [];
p1Role.innerText = 'Remover';
p2Role.innerText = 'Hacker';
roundNum.innerText = '1';
$("#endRound2Div").remove();
countdown();
gameStartSound.play();
bgmToPlay();
scoreP1 = 0;
scoreP2 = 0;
round = 1;
menuBgm.stop();
}

function createImage() {
  createImageW1();
  createImageW2();
  createImageW3();
  createImageW4();
}

function createImageW1() {

  if (hackerCoordinateX === 1 && hackerCoordinateY === 1 && blockW1 === true) {
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
    let id = "img" + i;
    img.id = id;
    arrayIds.push(id);
    img.height = imgSize;
    img.width = imgSize;
    img.style.position = "absolute";
    img.style.top = xy[1] + 'px';
    img.style.left = xy[0] + 'px';
    img.style.zIndex = z;
    img.addEventListener("click", function() {
      let index = arrayIds.indexOf(img.id);
      if (index !== -1) arrayIds.splice(index, 1);
      img.remove();
      memeRemoveSound.play();
      // textScoreP1.innerText = "Score = " + scoreP1;
    })
    window1.appendChild(img);
    memeAddSound.play();
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
    let id = "img" + i;
    img.id = id;
    arrayIds.push(id);
    img.height = imgSize;
    img.width = imgSize;
    img.style.position = "absolute";
    img.style.top = xy[1] + 'px';
    img.style.left = xy[0] + 'px';
    img.style.zIndex = z;
    img.addEventListener("click", function() {
      let index = arrayIds.indexOf(img.id);
      if (index !== -1) arrayIds.splice(index, 1);
      img.remove();
      memeRemoveSound.play();
      // textScoreP1.innerText = "Score = " + scoreP1;
    })
    window2.appendChild(img);
    memeAddSound.play();
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
    let id = "img" + i;
    img.id = id;
    arrayIds.push(id);
    img.height = imgSize;
    img.width = imgSize;
    img.style.position = "absolute";
    img.style.top = xy[1] + 'px';
    img.style.left = xy[0] + 'px';
    img.style.zIndex = z;
    img.addEventListener("click", function() {
      let index = arrayIds.indexOf(img.id);
      if (index !== -1) arrayIds.splice(index, 1);
      img.remove();
      memeRemoveSound.play();
      // textScoreP1.innerText = "Score = " + scoreP1;
    })
    window3.appendChild(img);
    memeAddSound.play();
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
    let id = "img" + i;
    img.id = id;
    arrayIds.push(id);
    img.height = imgSize;
    img.width = imgSize;
    img.style.position = "absolute";
    img.style.top = xy[1] + 'px';
    img.style.left = xy[0] + 'px';
    img.style.zIndex = z;
    img.addEventListener("click", function() {
      let index = arrayIds.indexOf(img.id);
      if (index !== -1) arrayIds.splice(index, 1);
      img.remove();
      memeRemoveSound.play();

      // textScoreP1.innerText = "Score = " + scoreP1;
    })
    window4.appendChild(img);
    memeAddSound.play();
    // textScoreP1.innerText = "Score = " + scoreP1;
  }
}

function changeKey() {
  currentkey = possbleKeyList[Math.floor(Math.random() * possbleKeyList.length)];
  console.log(currentkey);
  turnDisplay();
}

function turnDisplay() {
  if (player1Turn === true && player2Turn === false) {
    textScoreP1.innerText = "Press Key: " + currentkey;
    textScoreP2.innerText = "click to remove!";
  } else if (player1Turn === false && player2Turn === true) {
    textScoreP2.innerText = "Press Key: " + currentkey;
    textScoreP1.innerText = "click to remove!";
  }
}

function blockWindow1() {
  if (hackerCoordinateX === 1 && hackerCoordinateY === 1 && blockW1 === false && incognitoIsUsed === false) {
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
    let id = "windowBlock" + 1;
    div.id = id;
    arraysInC.push(id);
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
      let index = arraysInC.indexOf(div.id);
      if (index !== -1) arraysInC.splice(index, 1);
      blockW1 = false;
      div.remove();
      incRemoveSound.play();
      // textScoreP1.innerText = "Score = " + scoreP1;
    })
    div.style.zIndex = 9998;
    incAddSound.play();
    document.getElementById("gameWindow").appendChild(div);
    let incognitoTime = 1 * 1;
    incognitoTimer(incognitoTime);
  }
}

function blockWindow2() {
  if (hackerCoordinateX === 2 && hackerCoordinateY === 1 && blockW2 === false && incognitoIsUsed === false) {
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
    let id = "windowBlock" + 2;
    div.id = id;
    arraysInC.push(id);
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
      let index = arraysInC.indexOf(div.id);
      if (index !== -1) arraysInC.splice(index, 1);
      blockW2 = false;
      div.remove();
      incRemoveSound.play();
      // textScoreP1.innerText = "Score = " + scoreP1;
    })
    div.style.zIndex = 9998;
    incAddSound.play();
    document.getElementById("gameWindow").appendChild(div);
    let incognitoTime = 1 * 1;
    incognitoTimer(incognitoTime);
  }
}

function blockWindow3() {
  if (hackerCoordinateX === 1 && hackerCoordinateY === 2 && blockW3 === false && incognitoIsUsed === false) {
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
    let id = "windowBlock" + 3;
    div.id = id;
    arraysInC.push(id);
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
      let index = arraysInC.indexOf(div.id);
      if (index !== -1) arraysInC.splice(index, 1);
      blockW3 = false;
      div.remove();
      incRemoveSound.play();
      // textScoreP1.innerText = "Score = " + scoreP1;
    })
    div.style.zIndex = 9998;
    incAddSound.play();
    document.getElementById("gameWindow").appendChild(div);
    let incognitoTime = 1 * 1;
    incognitoTimer(incognitoTime);
  }
}

function blockWindow4() {
  if (hackerCoordinateX === 2 && hackerCoordinateY === 2 && blockW4 === false && incognitoIsUsed === false) {
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
    let id = "windowBlock" + 4;
    div.id = id;
    arraysInC.push(id);
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
      let index = arraysInC.indexOf(div.id);
      if (index !== -1) arraysInC.splice(index, 1);
      blockW4 = false;
      div.remove();
      incRemoveSound.play();
      // textScoreP1.innerText = "Score = " + scoreP1;
    })
    div.style.zIndex = 9998;
    incAddSound.play();
    document.getElementById("gameWindow").appendChild(div);
    let incognitoTime = 1 * 1;
    incognitoTimer(incognitoTime);
  }
}


function round1EndDiv() {
  let div = document.createElement("div");
  div.className = "round1OverDiv";
  div.id = "endRound1Div";
  div.style.width = "100%";
  div.style.height = "90vh";
  div.style.backgroundColor = "#01001A";
  div.style.backgroundRepeat = "no-repeat";
  div.style.backgroundSize = "cover";
  div.style.backgroundPosition = "center";
  div.style.color = "yellow";
  div.style.position = "absolute"
  div.style.zIndex = 9999;
  document.getElementById("gameWindow").appendChild(div);
  // div.style.top = placement("100px");
  // div.style.left = placement("100px");
  div.style.zIndex = 9999;
  document.getElementById("gameWindow").appendChild(div);
  div.innerHTML = '<button class="round2Button" onclick="round2Start()">Round 2</button>' + '<h3 class="r1p">Round 1 Results</h3>' + '<p class="r1p"> Player 1: <spam id="p1MemeCount">' + scoreP1 + '<spam> Memes Total!</p>' + '<p class="r1p"> Change roles: Player 1 is now the Hacker and Player 2 is the Remover</p>' + '<img class="r1EndImg" src="assets/images/euLock.jpg" alt="image">';
}

function round2EndDiv() {
  let div = document.createElement("div");
  div.className = "round2OverDiv";
  div.id = "endRound2Div";
  div.style.width = "100%";
  div.style.height = "90vh";
  div.style.backgroundColor = "#01001A";
  div.style.backgroundRepeat = "no-repeat";
  div.style.backgroundSize = "cover";
  div.style.backgroundPosition = "center";
  div.style.color = "yellow";
  div.style.position = "absolute"
  div.style.zIndex = 9999;
  document.getElementById("gameWindow").appendChild(div);
  // div.style.top = placement("100px");
  // div.style.left = placement("100px");
  div.style.zIndex = 9999;
  document.getElementById("gameWindow").appendChild(div);


  let whoWins;
  let wholoses;
  if (scoreP1 < scoreP2) {
    whoWins = "1";
    wholoses = "2";
  } else if (scoreP1 > scoreP2) {
    whoWins = "2";
    wholoses = "1";
  } else if (scoreP1 === scoreP2) {
    whoWins = "None";
    wholoses = "1 and 2";
  }
  div.innerHTML = '<button class="round2Button" onclick="playAgain()"> Play again</button>' + '<h3 class="r1p">Game Results</h3>' + '<p class="r1p"> Player 1: <spam id="p1MemeCount">' + scoreP1 + '</spam> Memes Total!</p><p class="r1p"> Player 2: <spam id="p2MemeCount">' + scoreP2 + '</spam> Memes Total!</p> <p  class="r1p" >Player <spam> ' + wholoses + '</spam> has the most memes and is therefore busted for Meme possession.</p> <p  class="r1p">Player<spam> ' + whoWins + ' </spam>wins!</p>';
}

function lodingDiv() {
  let div = document.createElement("div");
  div.className = "loudingDev";
  div.id = "loudDev";
  div.style.width = "100%";
  div.style.height = "100vh";
  div.style.backgroundColor = "#01001A";
  div.style.backgroundRepeat = "no-repeat";
  div.style.backgroundSize = "cover";
  div.style.backgroundPosition = "center";
  div.style.color = "yellow";
  div.style.position = "absolute"
  div.style.zIndex = 9999;
  document.getElementById("gameWindow").appendChild(div);
  // div.style.top = placement("100px");
  // div.style.left = placement("100px");
  div.style.zIndex = 9999;
  document.getElementById("gameWindow").appendChild(div);

  div.innerHTML = '<p class="loading">Loading Meme Sabotage...<br><br> Please Hold your Memes Down and Thanks for Wating....</p>';
  loadTimeStart();
}

function bugClicked() {
  document.getElementById("bug").onclick = function() {

    for (var i = 0; i < arrayIds.length; i++) {
      document.getElementById(arrayIds[i]).remove();
      console.log(arrayIds[i]);
    }
    arrayIds = [];
    bugSound.play();
  };
}

function incognitoRemoveAll(){
  blockW1 = false;
  blockW2 = false;
  blockW3 = false;
  blockW4 = false;

  for (var i = 0; i < arraysInC.length; i++) {
    document.getElementById(arraysInC[i]).remove();
  }
  arraysInC = [];
}

function loadTimeStart() {
  let time = 25 * 1;
  loadTime(time);
};

function loadTime(duration) {
  let timer = duration,
    minutes, seconds;
  let timeforload = setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    if (--timer < 0) {
      clearInterval(timeforload);
      document.getElementById("loudDev").remove();
      menuBgm.play();
      menuBgm.loop();
    }
  }, 1000);
  console.log(minutes);
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
      if (round === 1) {
        round1End();
      }else {
        round2End();
      }
      clearInterval(gameInterval);
      timer = duration;
    }
  }, 1000);
  console.log(minutes);
}

function incognitoTimer(duration) {
  incognitoIsUsed = true;
  let timer = duration,
    minutes, seconds;
  let incognitioInterval = setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    if (--timer < 0) {
      incognitoIsUsed = false;
      timer = duration;
      clearInterval(incognitioInterval);
    }
  }, 1000);
  console.log(minutes);
}

function countdown() {
  sentence = "start";
  speak();
  let time = 60 * 2,
    display = document.querySelector('#time');
  gameTimer(time, display);
};

function checkCoordinates() {
  if (hackerCoordinateX === 1 && hackerCoordinateY === 1) {
    document.getElementById("hackerS").style.margin = "0";
    document.getElementById("bug").style.margin = "8% 20%";
  }
  if (hackerCoordinateX === 2 && hackerCoordinateY === 1) {
    document.getElementById("hackerS").style.margin = "0px 0px 0px 50%";
    document.getElementById("bug").style.margin = "8% 73%";
  }
  if (hackerCoordinateX === 1 && hackerCoordinateY === 2) {
    document.getElementById("hackerS").style.margin = "45vh 0px 0px";
    document.getElementById("bug").style.margin = "30% 20% 0";
  }
  if (hackerCoordinateX === 2 && hackerCoordinateY === 2) {
    document.getElementById("hackerS").style.margin = "45vh 0px 0px 50%";
    document.getElementById("bug").style.margin = "30% 73% 0";
  }
}

function speak() {
  // Set some random numbers for the voice's pitch and rate parameters for a bit of fun
  let options = {
    pitch: Math.random(),
    rate: 0.6,
  };
  // Use ResponsiveVoice to speak the string we generated, with UK English Male voice
  // and the options we just specified.
  responsiveVoice.speak(sentence, 'UK English Male', options);
}

//picks a song to play.
function bgmToPlay(){

currentSong = Math.floor((Math.random() * 7) + 1);

if (currentSong === 1) {
bgm1.play();
}else if (currentSong === 2) {
bgm2.play();
}else if (currentSong === 3) {
bgm3.play();
}else if (currentSong === 4) {
bgm4.play();
}else if (currentSong === 5) {
bgm5.play();
}else if (currentSong === 6) {
bgm6.play();
}else if (currentSong === 7) {
bgm7.play();
}
}

//stops which song is currently playing
function bgmToStop(){

if (currentSong === 1) {
bgm1.stop();
}else if (currentSong === 2) {
bgm2.stop();
}else if (currentSong === 3) {
bgm3.stop();
}else if (currentSong === 4) {
bgm4.stop();
}else if (currentSong === 5) {
bgm5.stop();
}else if (currentSong === 6) {
bgm6.stop();
}else if (currentSong === 7) {
bgm7.stop();
}
}

function keyDown(e) {
  // console.log("keyDown");
  // console.log(heldKey);
  if (e.key === "q") {
    console.log("q");
    round2EndDiv();
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

// function keyUp(e) {
//   // console.log("KeyUp");
//   if (heldKey === currentHeldKey) {
//     heldKey = undefined;
//     console.log("lol");
//   }
// }
