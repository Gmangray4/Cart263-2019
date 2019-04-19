"use strict";

/*****************

Title of Project: Meme Sabotage
Author Name: Gordon Gray.

******************/



//Jquarly elements
let $statDiv;
let $gameWindow;
let $p1Role;
let $p2Role;
let $roundNum;
let $startButton;
//chicks which player's turn it is.
let player1Turn = false;
let player2Turn = false;

// the x-y cordinates for The Hacker player on screen.
let hackerCoordinateX = 1;
let hackerCoordinateY = 1;
//Player's score/memecount
let scoreP1 = 0;
let scoreP2 = 0;
// what round is it?
let round = 0;
//what does the voice to speech say
let sentence = "";

// Ids array holder to chick the number of memes in the game.
let arrayIds = [];
// Ids array holder to chick the number of IncognitoWindows in the game.
let arraysInC = [];

//Which Incoginto is on screen.
// all are set to false because there is no incognito window on the start of the game.
let blockW1 = false;
let blockW2 = false;
let blockW3 = false;
let blockW4 = false;
// when a incognito window is called so that we can set a daley for when the next incognito can be called.
let incognitoIsUsed = false;
// all sounds
let memeAddSound;
let memeRemoveSound;
let gameStartSound;
let incAddSound;
let incRemoveSound;
let bugSound;
let gameOverSound;
//all background songs
let bgm1;
let bgm2;
let bgm3;
let bgm4;
let bgm5;
let bgm6;
let bgm7;
let menuBgm;
// what song is currently in play?
let currentSong;
$(document).ready(setup);
//allows clicking on the screen to be checked
$(document).ready(function() {
  document.addEventListener("click", function() {
    console.log("click");
  });
});

function setup() {
  // here the songs/bgm are being created
  menuBgm = new Pizzicato.Sound({
    source: 'file',
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
  //Here is where the sound effects are being created
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
// all jQuery and id elements
  $startButton = $('#startButton');
  $statDiv = $('#statDiv');
  $gameWindow = $('#gameWindow');
  $p1Role = $('#p1Role');
  $p2Role = $('#p2Role');
  $roundNum = $('#roundNum');
  // allows us to check which key is held down
  $(document).on("keydown", keyDown);
  // gives a sentence for the spaker to say that being the title
  sentence = "Meme Sabotage";
  // now speak
  speak();
  // this is the loding screen which is called here.
  lodingDiv();
}

// the round start and end function determines what happens when the first and seconed round starts

function round1Start() {
  // set the volume of the bgm so that the sound effects can be heard over the Music;
  bgm1.volume = 0.1;
  bgm2.volume = 0.1;
  bgm3.volume = 0.1;
  bgm4.volume = 0.1;
  bgm5.volume = 0.1;
  bgm6.volume = 0.1;
  bgm7.volume = 0.1;
// remove the rules screen
  $("#statDiv").remove();
// tell the system that it is now round 1
  round = 1;
// start the coundown of the round;
  countdown();
  gameStartSound.play();
// pick a background song
  bgmToPlay();
  menuBgm.stop();
}

function round1End() {
  // add the number of memes left to the first player's score
  scoreP1 = arrayIds.length;
  //display the round 1 over div/screen
  round1EndDiv();
  //Remove all incognito windows
  incognitoRemoveAll();
  // stop the current song
  bgmToStop();
  menuBgm.play();
}

function round2Start() {
  // remove all memes from the last round
  for (var i = 0; i < arrayIds.length; i++) {
    document.getElementById(arrayIds[i]).remove();
    console.log(arrayIds[i]);
  }
arrayIds = [];

// set the text for player 1 to hacker
p1Role.innerText = 'Hacker';
// set the text for player 2 to Remover
p2Role.innerText = 'Remover';
// set the round display to round 2
roundNum.innerText = '2';
//remove the round 2 screen
$("#endRound1Div").remove();
// tell the system that it is now round 2
round = 2;
// stat the round countdown
countdown();
gameStartSound.play();
bgmToPlay();
menuBgm.stop();
}

function round2End() {
  // add the number of memes left to player 2's score
  scoreP2 = arrayIds.length;
  //stop bgm
  bgmToStop();
  //add the end game Results screen
  round2EndDiv();
  incognitoRemoveAll();
  gameOverSound.play();
  menuBgm.play();
}

// play again repeats most the code from round1Start()
// but resets the score, resets on screen text and removes the end game screen
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

// this cheicks all meme image creation fuction
function createImage() {
  createImageW1();
  createImageW2();
  createImageW3();
  createImageW4();
}
//this creates a meme image on the top left desktop
function createImageW1() {
// the if statment makes sure that memes in this desktopwindow can only be made if
//  the hacker is currently over the desktop of x 1 y 1 and also only allows memes
// to be made if there is a incognito window over this desktop space.

// most the code below was taken from this link below as it was very helpful for creatinng an image on a random area of the the window.
//https://stackoverflow.com/questions/31843349/random-position-of-images
  if (hackerCoordinateX === 1 && hackerCoordinateY === 1 && blockW1 === true) {
  //creates a fixed width and height for the images to appear on scrren
    let max_width = 400;
    let max_height = 150;
    let z = Math.floor((Math.random() * 100) + 1);
    // i = which Meme image to be picked from the image folder
    let i = Math.floor((Math.random() * 118) + 1);
    let imgSize = Math.floor((Math.random() * 50) + 100);
// picks a random spot to place the image
    let randomCoordinate = function() {
      var r = [];
      var x = Math.floor(Math.random() * max_width);
      var y = Math.floor(Math.random() * max_height) + 60;
      r = [x, y];
      return r;
    };
    let xy = randomCoordinate();
// how an image is created
    let img = document.createElement("img");
    img.src = "assets/images/memes/" + i + ".png";
    img.className = "memeImg";
    let id = "img" + i;
    img.id = id;
    // adds the image to an id array
    arrayIds.push(id);
    img.height = imgSize;
    img.width = imgSize;
    img.style.position = "absolute";
    img.style.top = xy[1] + 'px';
    img.style.left = xy[0] + 'px';
    img.style.zIndex = z;
    img.addEventListener("click", function() {
      // removes the image from image id array if it is easered
      let index = arrayIds.indexOf(img.id);
      if (index !== -1) arrayIds.splice(index, 1);
      img.remove();
      memeRemoveSound.play();
    })
    window1.appendChild(img);
    memeAddSound.play();
  }
}
//read CreateImageW1 to get an idea
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
//read CreateImageW1 to get an idea
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
//read CreateImageW1 to get an idea
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

//IncognitoWindows
function blockWindow1() {
  //creates an incognito if the hacker is over this desktop.
  //also only lets an incognito be made every few seconeds after a pervous incognito has pervously been used
  //simler to how a meme image above is created by instead for specific location on the screen souch as over a deststop window
  //read CreateImageW1 to get an idea
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

//the result screen for the end of the first round
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
  // I used this to code the HTML right into the part of the code I needed
  div.innerHTML = '<button class="round2Button" onclick="round2Start()">Round 2</button>' + '<h3 class="r1p">Round 1 Results</h3>' + '<p class="r1p"> Player 1: <spam id="p1MemeCount">' + scoreP1 + '<spam> Memes Total!</p>' + '<p class="r1p"> Change roles: Player 1 is now the Hacker and Player 2 is the Remover</p>' + '<img class="r1EndImg" src="assets/images/euLock.jpg" alt="image">';
}
//the result screen for the end of the seconed round
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

// sets up all the verables to the program to check who won
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
  div.innerHTML = '<button class="round2Button" onclick="playAgain()"> Play again</button>' + '<h3 class="r1p">Game Results</h3>' + '<p class="r1p"> Player 1: <spam id="p1MemeCount">' + scoreP1 + '</spam> Memes Total!</p><p class="r1p"> Player 2: <spam id="p2MemeCount">' + scoreP2 + '</spam> Memes Total!</p> <p  class="r1p" >Player <spam> ' + wholoses + '</spam> has the most memes and is therefore busted for Meme possession.</p> <p  class="r1p">Player<spam> ' + whoWins + ' </spam>wins!</p>' + '<img class="r1EndImg" src="assets/images/go.jpg" alt="image">';
}
//the loding screen
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
  div.innerHTML = '<p class="loading">Loading Meme Sabotage! <br><br> Please Hold your Memes  and Thanks for Wating....</p>';
  loadTimeStart();
}

//if the on screen virus bug is clikced the systemwill remove all on screen memes
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
// used to remove all Incoginto windows on screen
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


// Time fuctions
// These timer fuctions were created by the link below and is remixed or editied by me to create the countdown needed for a few fuction
// https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer

// the Load time coundown 25 seconds
function loadTimeStart() {
  let time = 25 * 1;
  loadTime(time);
};

// the duration of the load screen
function loadTime(duration) {
  let timer = duration,
    minutes, seconds;
  let timeforload = setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    if (--timer < 0) {
      //rmoves the loading screen when the time is up
      clearInterval(timeforload);
      document.getElementById("loudDev").remove();
      menuBgm.play();
    }
  }, 1000);
  console.log(minutes);
}

// this is for time between rounds
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
// this is the daly time before the Hacker can create an incognito window again
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
// this is the coundown for the rounds annd is for 2 minutes
function countdown() {
  sentence = "start";
  speak();
  let time = 60 * 2,
    display = document.querySelector('#time');
  gameTimer(time, display);
};

//this fuction checks which window the hacker is own and is repstented with a yellow div
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
  // Set a radom pitch and leave the rate at 0.6
  let options = {
    pitch: Math.random(),
    rate: 0.6,
  };
  // talk with the bristh voice
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
  // key to make memes
  if (e.key === "m") {
    console.log("m");
    sentence = "meme";
    speak();
    createImage();
  }
  // key to make an incognito
  if (e.key === "i") {
    console.log("i");
    blockWindow1();
    blockWindow2();
    blockWindow3();
    blockWindow4();
  }
  // arrow keys to change windows the hacker is looking at
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
