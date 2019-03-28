"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let currentKey = "";
let heldKey = "";

$(document).ready(setup);

function setup(){
$(document).on("keyup",keyUp);
$(document).on("keydown",keyDown);
}


function keyDown(e){
console.log("keyDown");
console.log(heldKey);
heldKey = e.keyCode;
}

function keyUp(e){
console.log("KeyUp");
heldKey = undefined;
}
