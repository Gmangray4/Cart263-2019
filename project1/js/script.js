"use strict";

// all the objects being afected by JavaScpit
let $horse;
let $barn;
let $haybail;
let $haybail2;
let $haybail3;
let $haybail4;
let $haybail5;
let $haybail6;
let $haybail7;
let $haybail8;

//vearables
let fail = 0;
let haybailEatenCount = 0;
let joeText = 0;
let shoutSelect = 0;

// dialogs
let $Farmer_Joe;
let $Player;

// sounds
const horseCrySFX = new Audio("assets/sounds/horseCry.wav");
const horseEatSFX = new Audio("assets/sounds/horseEat.wav");
const cowbell = new Audio("assets/sounds/cowbell.wav");
const shout1SFX = new Audio("assets/sounds/shout1.mp3");
const shout2SFX = new Audio("assets/sounds/shout2.mp3");
const shout3SFX = new Audio("assets/sounds/shout4.mp3");
const shout4SFX = new Audio("assets/sounds/shout5.wav");
const shout5SFX = new Audio("assets/sounds/shout6.wav");

$(document).ready(setup);
function setup() {
// for the use of the dialog for Farmer Joe
// called here to make Farmer Joe's manu pop up on start up
  $( "#Farmer_Joe" ).dialog({ autoOpen: false });
  $( "#Farmer_Joe" ).dialog( "open" );
// Get the barn element from the page
  $barn = $('#barn');
  $barn.droppable({
    drop: barnDroped
  });

//horse element from the page
  $horse = $ ('#horse');
  $horse.draggable({ revert: "valid"});
//haybail element from the page
//makes the element draggable
//makes the element droppable ... also starts the bailEaten function on drop.
  $haybail = $ ('#haybail');
  $haybail.draggable({ revert: "valid"});
  $haybail.droppable({ drop: bailEaten });

  //haybail2 element from the page
  //makes the element draggable
  //makes the element droppable  ... also starts the bailEaten2 function on drop.
  $haybail2 = $ ('#haybail2');
  $haybail2.draggable({ revert: "valid"});
  $haybail2.droppable({ drop: bailEaten2 });
  //haybail3 element from the page
  //makes the element draggable
  //makes the element droppable  ... also starts the bailEaten3 function on drop.
  $haybail3 = $ ('#haybail3');
  $haybail3.draggable({ revert: "valid"});
  $haybail3.droppable({ drop: bailEaten3 });
  //haybail4 element from the page
  //makes the element draggable
  //makes the element droppable  ... also starts the bailEaten4 function on drop.
  $haybail4 = $ ('#haybail4');
  $haybail4.draggable({ revert: "valid"});
  $haybail4.droppable({ drop: bailEaten4 });
  //haybail5 element from the page
  //makes the element draggable
  //makes the element droppable  ... also starts the bailEaten5 function on drop.
  $haybail5 = $ ('#haybail5');
  $haybail5.draggable({ revert: "valid"});
  $haybail5.droppable({ drop: bailEaten5 });
  //haybail6 element from the page
  //makes the element draggable
  //makes the element droppable  ... also starts the bailEaten6 function on drop.
  $haybail6 = $ ('#haybail6');
  $haybail6.draggable({ revert: "valid"});
  $haybail6.droppable({ drop: bailEaten6 });
  //haybail7 element from the page
  //makes the element draggable
  //makes the element droppable  ... also starts the bailEaten7 function on drop.
  $haybail7 = $ ('#haybail7');
  $haybail7.draggable({ revert: "valid"});
  $haybail7.droppable({ drop: bailEaten7 });
  //haybail8 element from the page
  //makes the element draggable
  //makes the element droppable  ... also starts the bailEaten8 function on drop.
  $haybail8 = $ ('#haybail8');
  $haybail8.draggable({ revert: "valid"});
  $haybail8.droppable({ drop: bailEaten8 });

// playes the horse cry sound file and animates the horse on chlick
  $horse.on('mousedown',function () {
horseCrySFX.play();
    horseAtmate();
  });
  // chckes the horseanimates when off click so that the horse goes back to the stances it should.
  $horse.on('mouseup',function () {
    horseAinmate();
  });
}

// function for everything that happens when an object droped on the barn element.
function barnDroped (event,ui) {
  //checks if the element drop was the horse Id element.
  // if so add to the fail Counts
  //play a cowbell sound.
  //let
if (event.toElement === document.getElementById('horse')) {
//  console.log('doot');
$(this).addClass('#fail');
fail ++;
$('#fail').text(fail);
cowbell.play();
FamerJoeTalk();
}
//checks if any of the haybail elements are droped
if (event.toElement === document.getElementById('haybail')
|| event.toElement === document.getElementById('haybail2')
|| event.toElement === document.getElementById('haybail3')
|| event.toElement === document.getElementById('haybail4')
|| event.toElement === document.getElementById('haybail5')
|| event.toElement === document.getElementById('haybail6')
|| event.toElement === document.getElementById('haybail7')
|| event.toElement === document.getElementById('haybail8')
) {
  //opens the player character pop up called self, and updates the paragrahp of the PlayerP ID
  //plays the cowbell sound file.
  // adds to the fail count.
    document.getElementById("PlayerP").innerHTML = "Holy Cow! The bales are too big to fit through the door.  Maybe the horse can help.";
    $( "#Player" ).dialog({ autoOpen: false });
    $( "#Player" ).dialog( "open" );
    cowbell.play();
    $(this).addClass('#fail');
    fail ++;
    $('#fail').text(fail);
  }
}

// this fuction updates how the horse should be animated for when it's later called aponed with mouse down/up
function horseAinmate() {
  // if all the haybails are not eaten yet then make the horse appear normal.
if (haybailEatenCount >= 0 && haybailEatenCount <= 7) {
    // if the image is on png0 when called then set it to png1
if ($horse.attr('src') === 'assets/images/horse_0.png') {
  $horse.attr('src','assets/images/horse_1.png');
}
//when not clicked set it back to png0
else {
  $horse.attr('src','assets/images/horse_0.png');
}
}
// if all the bails are eaten then change the horse to her fat image costume.
if (haybailEatenCount >= 8) {
if ($horse.attr('src') === 'assets/images/fat_0.png') {
  $horse.attr('src','assets/images/fat_1.png');
}
else {
  $horse.attr('src','assets/images/fat_0.png');
}
}
}
// function for the first haybail: Id $haybail2.
function bailEaten (event,ui) {
if (event.toElement === document.getElementById('horse')) {
  //removes this bail
    $haybail.remove();
    horseEatSFX.play();
  //self talking
  //haybail eaten count
    $(this).addClass('#haybailEatenCount');
    haybailEatenCount ++;
    $('#haybailEatenCount').text(haybailEatenCount);
    bailEatenTalk();
  }
}
// function for the seconed haybail: Id $haybail2.
function bailEaten2 (event,ui) {
if (event.toElement === document.getElementById('horse')) {
  //removes this bail
    $haybail2.remove();
    horseEatSFX.play();
  //self talking
  //haybail eaten count
    $(this).addClass('#haybailEatenCount');
    haybailEatenCount ++;
    $('#haybailEatenCount').text(haybailEatenCount);
    bailEatenTalk();
  }
}
// function for the third haybail: Id $haybail3.
function bailEaten3 (event,ui) {
if (event.toElement === document.getElementById('horse')) {
  //removes this bail
    $haybail3.remove();
    horseEatSFX.play();
  //self talking
  //haybail eaten count
    $(this).addClass('#haybailEatenCount');
    haybailEatenCount ++;
    $('#haybailEatenCount').text(haybailEatenCount);
    bailEatenTalk();
  }
}
// function for the fourth haybail: Id $haybail4.
function bailEaten4 (event,ui) {
if (event.toElement === document.getElementById('horse')) {
  //removes this bail
    $haybail4.remove();
    horseEatSFX.play();
  //self talking
  //haybail eaten count
    $(this).addClass('#haybailEatenCount');
    haybailEatenCount ++;
    $('#haybailEatenCount').text(haybailEatenCount);
    bailEatenTalk();
  }
}
// function for the firth haybail: Id $haybail5.
function bailEaten5 (event,ui) {
if (event.toElement === document.getElementById('horse')) {
  //removes this bail
    $haybail5.remove();
    horseEatSFX.play();
  //self talking
  //haybail eaten count
    $(this).addClass('#haybailEatenCount');
    haybailEatenCount ++;
    $('#haybailEatenCount').text(haybailEatenCount);
    bailEatenTalk();
  }
}
// function for the sixth haybail: Id $haybail6.
function bailEaten6 (event,ui) {
if (event.toElement === document.getElementById('horse')) {
  //removes this bail
    $haybail6.remove();
    horseEatSFX.play();
  //self talking
  //haybail eaten count
    $(this).addClass('#haybailEatenCount');
    haybailEatenCount ++;
    $('#haybailEatenCount').text(haybailEatenCount);
    bailEatenTalk();
  }
}
// function for the seventh haybail: Id $haybail7.
function bailEaten7 (event,ui) {
if (event.toElement === document.getElementById('horse')) {
  //removes this bail
    $haybail7.remove();
    horseEatSFX.play();
  //self talking
  //haybail eaten count
    $(this).addClass('#haybailEatenCount');
    haybailEatenCount ++;
    $('#haybailEatenCount').text(haybailEatenCount);
    bailEatenTalk();
  }
}
// function for the eighth haybail: Id $haybail8.
function bailEaten8 (event,ui) {
if (event.toElement === document.getElementById('horse')) {
  //removes this bail
    $haybail8.remove();
    horseEatSFX.play();
    $(this).addClass('#haybailEatenCount');
    haybailEatenCount ++;
    $('#haybailEatenCount').text(haybailEatenCount);
    bailEatenTalk();
  }
}

// a fuction for what the player character should say when Shelby eats each bail of hay.
// deppening on the number bails eathen count. the character qutoes will update in a linear fashtion
// also with each increase of the haybailEatenCount the hight and width will be updated for the horse img Id
// on the last eaten bail. this will update the horse with the horseAinmate() fuction so that she is now a fat horse.
function bailEatenTalk (event,ui) {
  if (haybailEatenCount === 1) {
    document.getElementById("PlayerP").innerHTML = "Oh boy, Shellby eat the whole hay bale, I hope Joe doesn't noticed.";
    $( "#Player" ).dialog({ autoOpen: false });
    $( "#Player" ).dialog( "open" );

    document.getElementById("horse").height = "140";
    document.getElementById("horse").width = "140";

  }
  if (haybailEatenCount === 2) {
    document.getElementById("PlayerP").innerHTML = "Two whole bales? Dam this horse can sure eat.";
    $( "#Player" ).dialog({ autoOpen: false });
    $( "#Player" ).dialog( "open" );

    document.getElementById("horse").height = "160";
    document.getElementById("horse").width = "160";

  }
  if (haybailEatenCount === 3) {
    document.getElementById("PlayerP").innerHTML = "Does Joe not feed her well?";
    $( "#Player" ).dialog({ autoOpen: false });
    $( "#Player" ).dialog( "open" );

    document.getElementById("horse").height = "180";
    document.getElementById("horse").width = "180";

  }
  if (haybailEatenCount === 4) {
    document.getElementById("PlayerP").innerHTML = "I wonder how much she can really eat?";
    $( "#Player" ).dialog({ autoOpen: false });
    $( "#Player" ).dialog( "open" );

    document.getElementById("horse").height = "200";
    document.getElementById("horse").width = "200";

  }
  if (haybailEatenCount === 5) {
    document.getElementById("PlayerP").innerHTML = "I’m hoping Joe doesn’t noticed a few missing bales.";
    $( "#Player" ).dialog({ autoOpen: false });
    $( "#Player" ).dialog( "open" );
    document.getElementById("horse").height = "220";
    document.getElementById("horse").width = "220";

  }
  if (haybailEatenCount === 6) {
    document.getElementById("PlayerP").innerHTML = "oh lord...Joe's going to kill me";
    $( "#Player" ).dialog({ autoOpen: false });
    $( "#Player" ).dialog( "open" );
    document.getElementById("horse").height = "240";
    document.getElementById("horse").width = "240";

  }
  if (haybailEatenCount === 7) {
    document.getElementById("PlayerP").innerHTML = "Alright maybe if I let her eat the last one Joe will think I bought in all the bales.";
    $( "#Player" ).dialog({ autoOpen: false });
    $( "#Player" ).dialog( "open" );
    document.getElementById("horse").height = "260";
    document.getElementById("horse").width = "260";

  }
  if (haybailEatenCount === 8) {
    document.getElementById("PlayerP").innerHTML = "Oh no! Shelby's not looking so good! Maybe I should bring her in now.";
    $( "#Player" ).dialog({ autoOpen: false });
    $( "#Player" ).dialog( "open" );
    document.getElementById("horse").height = "280";
    document.getElementById("horse").width = "280";
    horseAinmate();
  }
  }
// the FamerJoeTalk() function plays everthing Famer Joe will say, and will change at random so that it is no the same each time it's called.
  function FamerJoeTalk (event,ui) {
    // this controls the list of things that Joe will say if not all bails of hay are not eaten yet.
    if (haybailEatenCount >= 0 && haybailEatenCount <= 7)
    {
      // this picks a random number out of 5.
        joeText = Math.floor((Math.random() * 5) + 1);
      // depping on what number joeText is updated the list below will open up the Farmer Joe pop up and update the what content should the p tag element should say under the joeP Id
    if (joeText == 1) {
      document.getElementById("JoeP").innerHTML = "The hay bales need to be bought in before Shellby can.";
      $( "#Farmer_Joe" ).dialog({ autoOpen: false });
      $( "#Farmer_Joe" ).dialog( "open" );

    }
    if (joeText == 2) {
      document.getElementById("JoeP").innerHTML = "Look boy, the bales need to be dragged in first.";
      $( "#Farmer_Joe" ).dialog({ autoOpen: false });
      $( "#Farmer_Joe" ).dialog( "open" );

    }
    if (joeText == 3) {
      document.getElementById("JoeP").innerHTML = "I know your young son but please bring my bale's first ok?";
      $( "#Farmer_Joe" ).dialog({ autoOpen: false });
      $( "#Farmer_Joe" ).dialog( "open" );

    }
    if (joeText == 4) {
      document.getElementById("JoeP").innerHTML = "Don't disappoint me son, drag in those bales. Make Marg proud!";
      $( "#Farmer_Joe" ).dialog({ autoOpen: false });
      $( "#Farmer_Joe" ).dialog( "open" );

    }
    if (joeText == 5) {
      document.getElementById("JoeP").innerHTML = "I didn’t ask for the horse to be bought in… just get me my bale's son.";
      $( "#Farmer_Joe" ).dialog({ autoOpen: false });
      $( "#Farmer_Joe" ).dialog( "open" );
    }
  }
// this is the list of things that famer joe will say after all the bails have been eaten.
// there are 10 diffenert quotes he can be updated to say here.
// also each will call the JoeShout() fuction to play an angry sounding file to show Joe is losing his patience.
  if (haybailEatenCount >= 8){
    // checkes and upates joeTect by 10 now.
      joeText = Math.floor((Math.random() * 10) + 1);
    if (joeText == 1 ) {
      document.getElementById("JoeP").innerHTML = "WHAT HAVE YOU DONE TO MY HORSE!!!??!???!?!?? She can’t fit through the stable door no more!";
      $( "#Farmer_Joe" ).dialog({ autoOpen: false });
      $( "#Farmer_Joe" ).dialog( "open" );
      JoeShout();
    }
    if (joeText == 2) {
      document.getElementById("JoeP").innerHTML = "Where are all my Bales BOY!!! Don't Tell me the horse eat them!!!";
      $( "#Farmer_Joe" ).dialog({ autoOpen: false });
      $( "#Farmer_Joe" ).dialog( "open" );
      JoeShout();
    }
    if (joeText == 3) {
      document.getElementById("JoeP").innerHTML = "I swear if I don’t see them bales in by the end of the day boy, I’m a have you push them up Marge’s Hill!";
      $( "#Farmer_Joe" ).dialog({ autoOpen: false });
      $( "#Farmer_Joe" ).dialog( "open" );
      JoeShout();
    }
    if (joeText == 4) {
      document.getElementById("JoeP").innerHTML = "Were you hit in the head by a rock boy? Why can’t my horse fit in the stable???";
      $( "#Farmer_Joe" ).dialog({ autoOpen: false });
      $( "#Farmer_Joe" ).dialog( "open" );
      JoeShout();
    }
    if (joeText == 5) {
      document.getElementById("JoeP").innerHTML = "Boy your going to wish you got crushed by a boulder if I don’t see them bales by dusk";
      $( "#Farmer_Joe" ).dialog({ autoOpen: false });
      $( "#Farmer_Joe" ).dialog( "open" );
      JoeShout();
    }
    if (joeText == 6) {
      document.getElementById("JoeP").innerHTML = "Boy I’m a feed you to Shelby….given how her belly can’t fit through the door, consider yourself lucky!";
      $( "#Farmer_Joe" ).dialog({ autoOpen: false });
      $( "#Farmer_Joe" ).dialog( "open" );
      JoeShout();
    }
    if (joeText == 7) {
      document.getElementById("JoeP").innerHTML = "Ohhhh and you really believe I wouldn't noticed a few missing bales HUH???!!!!";
      $( "#Farmer_Joe" ).dialog({ autoOpen: false });
      $( "#Farmer_Joe" ).dialog( "open" );
      JoeShout();
    }
    if (joeText == 8) {
      document.getElementById("JoeP").innerHTML = "Your testing my patience boy! WHERE ARE MY BALES!!!";
      $( "#Farmer_Joe" ).dialog({ autoOpen: false });
      $( "#Farmer_Joe" ).dialog( "open" );
      JoeShout();
    }
    if (joeText == 9) {
      document.getElementById("JoeP").innerHTML = "Look I’m a keep you until the end of time if don’t I see MY BALES in the barn before my horse…or better said….MY NEW COW IS!!!";
      $( "#Farmer_Joe" ).dialog({ autoOpen: false });
      $( "#Farmer_Joe" ).dialog( "open" );
      JoeShout();
    }
    if (joeText == 10) {
      document.getElementById("JoeP").innerHTML = "Do you want to see the front end of my tracker boy? Then continue to not bring in my bales and you’ll be as lucky as that groundhog last week!";
      $( "#Farmer_Joe" ).dialog({ autoOpen: false });
      $( "#Farmer_Joe" ).dialog( "open" );
      JoeShout();
    }
}
  }

// this fuction choses a random angry sound file to play to make Joe sound mad at the player incompetence.

function JoeShout (event,ui) {
// choses which shout file to play with random and shoutSelect
// plays sound file when called by the corsponing number... out of 5
shoutSelect = Math.floor((Math.random() * 5) + 1);
if (shoutSelect == 1) {
  shout1SFX.play();
}
if (shoutSelect == 2) {
  shout2SFX.play();
}
if (shoutSelect == 3) {
  shout3SFX.play();
}
if (shoutSelect == 4) {
  shout4SFX.play();
}
if (shoutSelect == 5) {
  shout5SFX.play();
}
  }
