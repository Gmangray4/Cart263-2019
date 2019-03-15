/*

Condiments
Pippin Barr

Chooses random words from local JSON data to fill out a sentence
describing a condiment based on cats and rooms... weird.

Uses:

Corpora
https://github.com/dariusk/corpora

RiTA
http://rednoise.org/rita/index.html

*/
let $text;

let vowels = ['a', 'e', 'o', 'i', 'u'];

let aForCat = "a";
let aForRoom = "a";
let aForCreatures = "a";
let aForActions = "a";

let catArray = [""];
let roomArray = [""];
let creaturesArray = [""];
let actionsArray = [""];
let condimentArray = [""];

let cat = "";
let room = "";
let creatures = "";
let actions = "";

let condiment = "";
let verb = 'is';
let description = "";

$(document).ready(function() {
  $text = $('#text');
  work();
  // $(".body").click(function {
  //         console.log(click);
  // });

  // The first thing we need to do is load the data we're going
  // to use to get random words.
  //
  // For that we use jQuery's .getJSON() function, which we give
  // the location of the file, and a function to call when the data
  // is available...
  $.getJSON('data/data.json', gotData);
  ////////////////////////////////////////////////////
  document.addEventListener("click", function (){
  console.log("click");
  work();
  });
});

// gotData (data)
//
// This function gets called by getJSON when the data has been loaded.
// The data itself will be in the 'data' argument as a JavaScript object.
function gotData(data) {
  // Now we select random elements from the three arrays inside
  // our JSON to get a random condiment, cat, and room. Then we add those
  // words onto our page by setting the text of the appropriate span.

  // First the condiment
  // Get a random condiment from the condiments array in the JSON
  // Check if the last latter of the condiment is an 's'

  condimentsArray = data.condiments;

  // Now the cat
  catArray = data.cats;

  // Same again for room
  roomArray = data.rooms;

  actionsArray = data.actions;

  creaturesArray = data.creatures;

  console.log(catArray);
  // Now we can construct our description with a template string
  // We have the basic structure of a sentence and we substitute in the
  // values we've just calculated
}

function work(){

console.log(condimentArray);
  if (condiment.charAt(condimentArray.length - 1) === 's') {
    // If so, assume it's plural (this is a flawed assumption)
    verb = 'are';
  }

cat = catArray[Math.floor(Math.random() * catArray.length)];
room = roomArray[Math.floor(Math.random() * roomArray.length)];
actions = actionsArray[Math.floor(Math.random() * actionsArray.length)];
creatures = creaturesArray[Math.floor(Math.random() * creaturesArray.length)];

console.log(cat);

checkVowels();
description = `${condiment} ${verb} like ${aForCat} ${cat} in ${aForRoom} ${room}, perfroming ${aForActions} ${actions} on ${aForCreatures} ${creatures}.`;
// Finally, we add it to the page and hey presto!
text.innerText = description;
// $('body').append(description);
}

// getRandomElement ()
//
// Returns a random element from the array provided
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function checkVowels() {
  if (getVowels(room.charAt(0))) {
    aForRoom = "an";
  } else {
    aForRoom = "a";
  }
  if (getVowels(cat.charAt(0))) {
    aForCat = "an";
  } else {
    aForCat = "a";
  }
  if (getVowels(creatures.charAt(0))) {
    aForCreatures = "an";
  } else {
    aForCreatures = "a";
  }

  if (getVowels(actions.charAt(0))) {
    aForActions = "an";
  } else {
    aForActions = "a";
  }
}

function getVowels(string) {
  let m = string.match(/[aeiou]/gi);
  return m === null ? false : true;
}

// $(document).on('click','body *',function(){
//   gotData(data);
//   console.log(click);
