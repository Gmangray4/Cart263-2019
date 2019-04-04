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

let $imgMeme;

let player1WaterTank = false;
let player2WaterTank = false;

let possbleKeyListP1 = "qwertasdfzxc";
let possbleKeyListP2 = "yuiophjklbnm";

let possbleKeyListHeldKey = "tgbv";

let possbleEventKeyList1 = "";
let possbleEventKeyList2 = "";

let keyListPlayer1 = "";
let keyListPlayer2 = "";

let currentHeldKey = " ";
let heldKey = "";

let images = "";

$(document).ready(setup);

function setup(){

$windowP2 = $('#windowP2');
$windowP1 = $('#windowP1');
$imgMeme = $('#imgMeme');

changeAll();
$(document).on("keyup",keyUp);
$(document).on("keydown",keyDown);
console.log(currentHeldKey);

createImageP1();
createImageP2();

console.log(possbleKeyListP1);
}

function draw(){
}
function createImageP1(){
  let max_width = 400;
  let max_height = 400;
  let z = Math.floor((Math.random() * 100) + 1);
  let i = Math.floor((Math.random() * 118) + 1);
  let imgSize = Math.floor((Math.random() * 150) + 100);

  let randomCoordinate = function(){
           var r = [];
           var x = Math.floor( Math.random() * max_width);
           var y = Math.floor( Math.random() * max_height ) + 60;
           r = [x,y];
           return r;
       };

  let xy = randomCoordinate();
  let img = document.createElement("img");
      img.src = "assets/images/memes/" + i + ".png";
      img.className = "memeImg";
      img.id = "imgP1";
      img.height = imgSize;
      img.width = imgSize;
      img.style.position = "absolute";
      img.style.top = xy[1] + 'px';
      img.style.left = xy[0] + 'px';
      img.style.zIndex = z;



      windowP2.appendChild(img);
}

function createImageP2(){
  let max_width = 400;
  let max_height = 400;
  let z = Math.floor((Math.random() * 100) + 1);
  let i = Math.floor((Math.random() * 118) + 1);
  let imgSize = Math.floor((Math.random() * 150) + 100);

  let randomCoordinate = function(){
           var r = [];
           var x = Math.floor( Math.random() * max_width + 700 );
           var y = Math.floor( Math.random() * max_height ) + 60;
           r = [x,y];
           return r;
       };

  let xy = randomCoordinate();
  let img = document.createElement("img");
      img.src = "assets/images/memes/" + i + ".png";
      img.className = "memeImg";
      img.id = "imgP2";
      img.height = imgSize;
      img.width = imgSize;
      img.style.position = "absolute";
      img.style.top = xy[1] + 'px';
      img.style.left = xy[0] + 'px';
      img.style.zIndex = z;



      windowP2.appendChild(img);
}

function changeAll(){
currentHeldKey =  possbleKeyListHeldKey[Math.floor(Math.random() * possbleKeyListHeldKey.length)];
}


// function shuffle() {
//   let currentIndex =  possbleKeyListP1.length, temporaryValue, randomIndex;
//
//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {
//
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//
//     // And swap it with the current element.
//      temporaryValue = possbleKeyListP1[currentIndex];
//      possbleKeyListP1[currentIndex] = possbleKeyListP1[randomIndex];
//      possbleKeyListP1[randomIndex] = temporaryValue;
//   }
//   return  possbleKeyListP1;
// }

// function hey(){
//   keyListPlayer1 = undefined;
//
// // let yogi = possbleKeyListP1[Math.floor(Math.random() * possbleKeyListP1.length)];
//   for (var i = 0; i <  possbleKeyListP1.length; i++) {
//      keyListPlayer1 = keyListPlayer1 + possbleKeyListP1[i];
//   }
//
// }



function keyDown(e){
// console.log("keyDown");
// console.log(heldKey);
heldKey = e.key;

// if (heldKey === currentHeldKey)
if (e.key === "t") {
  createImageP2();
  console.log("t");
}

if (e.key === "r") {
  createImageP1();
  console.log("r");
}

}

function keyUp(e){
// console.log("KeyUp");
if (heldKey === currentHeldKey){
heldKey = undefined;
console.log("lol");
}

}

function onclick(){
$('div.elements_class').click(function(){
    var now_id = $(this).attr('id');
    alert(thisArray[now_id]);
});
}
