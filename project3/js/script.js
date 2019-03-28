"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let currentKey = "";
let heldKey = "";

let keys = {};

const input = document.querySelector('input');
const log = document.getElementById('log');

function setup(){

}

function draw(){
checkKey();
console.log(logkey);
}

function checkKey(){
input.addEventListener('keydown', logKey);

}

function logKey(e) {
  log.textContent == e;
}
