'use strict';
/*//Game Options
var gameOptions = {
  startFoodStat:50,
  foodStat:100,
  startSanityStat:50,
  sanityStat:100,
  startWaterStat:50,
  waterStat:100,
  startTools:['none'],
  trapChance:6,
  startCloth:1,
  startFlowers:0,
  startFlax:0,
  startHemp:0,
  startFood:10,
  startTimber:10,
  startFlaxStorage:1,
  startFlowerStorage:0,
  startHempStorage:2,
  startRockStorage:0,
};*/
//Game board
var gameBoard = {
  0:'start',
  1:'Flax patch',
  2:'passage',
  3:'rock deposit',
  4:'passage',
  5:'spring',
  6:'rabbit den',
  7:'flower patch',
  8:'possible trap',
  9:'passage',
  10:'possible trap',
  11:'passage',
  12:'possible trap',
  13:'exit door',
  14:'possible animal',
  15:'possible trap',
  //this passage may become a tree instead
  16:'passage',
  17:'passage',
  18:'possible trap',
  19:'Hemp patch',
};
// declare variables
// Tile 
var space = 0;
// HTML
var HTML = document.getElementsByTagName('html')[0];
var title = document.getElementById('title');
var banner = document.getElementById('banner');
var headerText = document.getElementById('headerText');
var welcomeBackText = document.getElementById('welcomeBackText');
var button1 = document.getElementById('button1');
var buttonForward = document.getElementById('buttonforward');
var buttonBackward = document.getElementById('buttonbackward');
var actionButton = document.getElementById('actions');
var winButton = document.getElementById('winButton');
var tips = document.getElementById('tips');
var easterEggs = document.getElementById("easterEggs");
var sleepButton = document.getElementById('sleepButton');
var shadowPerson = document.getElementById('shadowPerson');
var shadowPerson2 = document.getElementById('shadowPerson2');
var selfActions = document.getElementById('selfActions');
var flaxCloth = document.getElementById('flaxCloth');
var hempCloth = document.getElementById('hempCloth');
var foodSection = document.getElementById('foodSection');
//Crafting stuff
var craftingSection = document.getElementById('craftingSection');
var crafting1List = document.getElementById('crafting1List');
var crafting2List = document.getElementById('crafting2List');
var crafting3List = document.getElementById('crafting3List');
var craftingRecipe = document.getElementById('craftingRecipe');
var craftingList = document.getElementsByClassName('craftingList');
var crafting1Text = craftingList[0];
var crafting2Text = craftingList[1];
var crafting3Text = craftingList[2];
var crafting1Items = document.getElementsByClassName('crafting1Items');
var pocketKnife = crafting1Items[0];
var smallSnareTrap = crafting1Items[1];
var clothyBed = crafting1Items[2];
var campFire = crafting1Items[3];
var garland = crafting1Items[4];
var spinningWheel = crafting1Items[5];
var upgrade1Base = crafting1Items[6];
var crafting2Items = document.getElementsByClassName('crafting2Items');
var snareTrap = crafting2Items[0];
var pickax = crafting2Items[1];
var raisedBed = crafting2Items[2];
var canteen = crafting2Items[3];
var upgrade2Base = crafting2Items[4];
var crafting3Items = document.getElementsByClassName('crafting3Items');
var sledgeHammer = crafting3Items[0];
var comfortableBed = crafting3Items[1];
var furnace = crafting3Items[2];
var metalKnife = crafting3Items[3];
var storages = document.getElementById('storages');
var timberDisplay = storages.getElementsByTagName('h2')[0];
var timberDisplayNumber = storages.getElementsByTagName('h3')[0];
var rockDisplay = storages.getElementsByTagName('h2')[1];
var clothDisplay = storages.getElementsByTagName('h2')[2];
var flowerDisplay = storages.getElementsByTagName('h2')[3];
//Values
var counter = 0;
var gateOpen = false;
var gateVisited = 0;
var baseLevel = 1;
var bedLevel = 1;
var bedDurability = 100;
var keyCounter = 21;
//Stats
var stats = document.getElementById('stats');
var hungerStat = 240;
var hungerMax = 300;
var hungerDisplay = document.getElementById('hungerDisplay');
var hungerText = stats.getElementsByTagName('p')[0];
var hungerCounter = 11;
var waterStat = 250;
var waterMax = 300;
var waterDisplay = document.getElementById('waterDisplay');
var waterText = stats.getElementsByTagName('p')[1];
var waterCounter = 11;
var sanityStat = 80;
var sanityMax = 100;
var sanityCounter = 0;
var sanityDisplay = document.getElementById('sanityDisplay');
var sanityText = stats.getElementsByTagName('p')[2];
var sanityStatCounter = 11;
//Anything that can be crafted
var craftables = {
  pickax:false,
  smallSnareTraps:1,
  snareTrap:0,
  campFire:false,
  key:false,
  code:false,
  pocketKnife:false,
  sledgeHammer:false,
  flint:false,
  garlands:0,
  spinningWheel:false,
  canteen:false,
  furnace:false,
  sledgehammer:false,
  metalKnife:false,
};
//Relating to food
var eatRawRabbits = document.getElementById('eatRawRabbits');
var cookRabbits = document.getElementById('cookRabbits');
var eatCookedRabbits = document.getElementById('eatCookedRabbits');
var eatRawPig = document.getElementById('eatRawPig');
var cookPig = document.getElementById('cookPig');
var eatCookedPig = document.getElementById('eatCookedPig');
var eatRawBoar = document.getElementById('eatRawBoar');
var cookBoar = document.getElementById('cookBoar');
var eatCookedBoar = document.getElementById('eatCookedBoar');
//Relating to the exit
var lookAtNote = document.getElementById('lookAtNote');
var exitForm = document.getElementById('exitForm');
var exitButton = document.getElementById('exitButton');
var exitInput = document.getElementById("exitInput");
var exitSection = document.getElementById('exitSection');
var noteButton = document.getElementById('noteButton');
var lookBack = document.getElementById('lookBack');
var getBackToMaze = document.getElementById('getBackToMaze');
var lock1 = false;
var lock2 = false;
var lock3 = false;
var currentLock = 0;
var currentState = 'not at exit';
// Storages
//if (timberStorage !== false){
    var flaxStorage = 0;
    var clothStorage =  2;
    var flowerStorage = 0;
    var hempStorage = 0;
    var foodStorage = {
      rabbits:0,
      cookedRabbits:0,
      pigs:0,
      cookedPigs:0,
      boars:0,
      cookedBoars:0,
    };
    var timberStorage = 10;
    var flaxPatchStorage = 10;
    var flowerPatchStorage = 10;
    var hempPatchStorage = 10;
    var animalOutside = true;
    var rockStorage = 0;
    var metalDepositStorage = 0;
    var metalStorage = 0;
//}
//Declaring storage size
/*if (localStorage[0] !== 'true'){
  localStorage[0] = false;
}
window.onload = function(event){
  if (localStorage[0] === 'false'){
    flaxStorage = gameOptions.startFlax;
    clothStorage = gameOptions.startCloth;
    flowerStorage = gameOptions.startFlower;
    hempStorage = gameOptions.startHemp;
    foodStorage = gameOptions.startFood;
    timberStorage = gameOptions.startTimber;
    flaxPatchStorage = gameOptions.startFlaxStorage;
    flowerPatchStorage = gameOptions.startFlowerStorage;
    hempPatchStorage = gameOptions.startHempStorage;
    rockStorage = gameOptions.startRockStorage;
    localStorage[0] = true;
    craftables = {
      pocketKnife:false,
      smallSnareTraps:0,
    };
    console.log('Has not run');
  } else if (localStorage[0] === 'true'){
    console.log('Has run');
  }
};
*/
//Placeholder values for debugging
/*window.onload = function(){
  timberStorage = 200;
  clothStorage = 200;
  flowerStorage = 200;
  hempStorage = 200;
  rockStorage = 200;
  metalDepositStorage = 200;
  metalStorage = 200;
}; */
//Introduction
button1.onclick = function(event){
  event.preventDefault();
  if (counter === 0){
  banner.innerText = "You realize you don't have a bed to sleep on tonight nor anything else. You feel like you're going crazy, but you try to handle the situation.";
  button1.innerText = 'Make a small base';
  } else if (counter === 1){
    banner.innerText = "You make a small little indentation in the dirt and take some leaves you found off the ground to make a bed. It's not really comfortable, so you should probably adventure into the maze.";
    button1.innerText = 'Cool';
  } else if (counter === 2){
    banner.innerText = "Let's go then. To your left, there is a gate that blocks your path. It could be opened on the outside, but your hand is too small to fit through the gaps. You can only go up.";
    button1.style.display = 'none';
    buttonForward.style.display = 'block';
    storages.style.display = 'flex';
  }
  counter ++;
};
function displayStats(){
  
}

//Declaring counters for tips
  let rockCounter = 0;
  let springCounter = 0;
  let bunnyCounter = 0;
  let flowerCounter = 0;
  let trapCounter = 0;
  let animalCounter = 0;
  let exitCounter = 0;
  let flaxCounter = 0;
  let hempCounter = 0;
  let sleepCounter = 0;
  let keysCounter = 2;
//Declaring functions for other functions

// Space checker function
function spaceChecker(){
  if (space === 19){
    gateOpen = true;
  }
  shadowPerson.style.display = 'none';
  shadowPerson2.style.display = 'none';
  craftingSection.style.display = 'none';
  cookRabbits.style.display = 'none';
  cookPig.style.display = 'none';
  cookBoar.style.display = 'none';
  selfActions.style.display = 'none';
  switch(gameBoard[space]){
    //Hallways
    case 'passage':
      headerText.innerText = 'Passage';
      title.innerText = 'Dark Passage';
      banner.innerText = "This path feels safe.";
      //Sanity event
      if (sanityStat < 30){
        switch(Math.floor(Math.random()*3)){
          case 2:
            banner.innerText = "While walking through the passage, you find a shadowy figure in front of you. After a while, it dissapears. You have to get out of this maze.";
            shadowPerson.style.display = 'block';
            break;
          default:
            //Nothing should happen
            break;
        }
      }
      break;
    //Mines
    case 'rock deposit':
      banner.innerText = "Oh, it's a rock deposit! You'd need a pickaxe, though.";
      if (rockCounter === 0){
        tips.style.display = 'block';
        tips.innerText = "With a pickaxe, you can mine rocks for more tools. Be careful though, as it drains your hunger a lot.";
        rockCounter ++;
      }
      headerText.innerText = 'Rock Deposit';
      title.innerText = 'Loaded rock deposit';
      actionButton.style.display = 'block';
      if (craftables.pickax === false){
        actionButton.innerText = 'Gather rocks';
      } else{
        actionButton.innerText = 'Mine rocks';
      }
      break;
    //Water
    case 'spring':
      banner.innerText = "It's a fresh spring!";
      if (springCounter === 0){
        tips.style.display = 'block';
        tips.innerText = "Whenever you pass through here, your canteen and water stat will automatically fill up.";
        springCounter ++;
      }
      headerText.innerText = 'Spring';
      title.innerText = 'Spring';
      waterStat = waterMax;
      sanityStat += 2;
      sanityCounter = 0;
      break;
    //Rabbits
    case 'rabbit den':
      banner.innerText = "Some rabbits are here. That spring is probably why they are here. Should be able to snap their necks easily.";
      bunnyCounter ++;
      headerText.innerText = 'Rabbit hole';
      title.innerText = "Rabbit's den";
      actionButton.style.display = 'block';
      switch(craftables.smallSnareTraps){
        case 0:
          actionButton.innerText = 'Catch some rabbits';
          break;
        default:
          actionButton.innerText = 'Set up a trap';
      }
      switch(Math.floor(Math.random() * 6)){
        case 5:
          easterEggs.style.display = 'block';
          easterEggs.innerText = 'How far will you go down the rabbit hole?';
          break;
        default:
          break;
      }
      break;
    //Flower patch
    case 'flower patch':
      banner.innerText = "Looks like a patch of flowers. That spring must be providing these plants water. These beautiful flowers may help you not go crazy.";
      //Random flower occurences
      switch(Math.floor(Math.random()*6)){
        case 5:
          headerText.innerText = 'These ones are daises';
          break;
        case 4:
          headerText.innerText = "These ones are tulips";
          break;
        case 3:
          headerText.innerText = "These ones are roses";
          break;
        case 2:
          headerText.innerText = "These ones are carnations";
          break;
        case 1:
          headerText.innerText = "These ones are orchids, that's not good.";
          break;
        case 0:
          headerText.innerText = "These ones are sunflowers";
      }
      title.innerText = "Flower Patch";
      if (flowerCounter === 0){
        tips.style.display = 'block';
        tips.innerText = "Picking flowers can really help you with your sanity.";
        easterEggs.style.display = 'block';
        easterEggs.innerText = "I swear I'm not copying DST. Well, maybe a little.";
      }
      actionButton.style.display = 'block';
      actionButton.innerText = "Pick some flowers";
      flowerCounter ++;
      break;
    //Random item 
    case 'possible trap':
      banner.innerText = "Something is here. Maybe you should try to get whatever is inside of it.";
      if (trapCounter === 0){
        tips.style.display = 'block';
        tips.innerText = "This is a chance to get something that can help towards your progress out of your maze, or it could be a trap. Take your chances, but remember that the traps are your only source of timber.";
        trapCounter ++;
      }
      headerText.innerText = 'A random item.';
      title.innerText = 'Should you look inside?';
      actionButton.style.display = 'block';
      actionButton.innerText = 'Look inside';
      break;
    //Random animal
    case 'possible animal':
      banner.innerText = "Did that shadow move? I think an animal is lurking by. And not a rabbit, something much bigger. It's distracted by something near the wall. You could tread carefully to avoid this beast.";
      if (animalCounter === 0){
        tips.style.display = 'block';
        tips.innerText = 'This could be your chance for a big feast. Big meat can give you a lot of food, health, and sanity, but you need the right tools to kill one.';
        animalCounter ++;
      }
      headerText.innerText = 'Hunting Season';
      title.innerText = 'Well, you need the food.';
      if (animalOutside === true){
        actionButton.style.display = 'block';
        actionButton.innerText = "Try to catch the animal";
      }
      break;
    //Exit
    case 'exit door':
      banner.innerHTML = "There seems to be a door leading outside. It actually seems to be the exit, but it has three different locks. <br> One of them is one that straight up requires a key. <br> The second one is a padlock that is securing a handle. This wouldn't be so bad, but the keyhole has been welded. Good luck trying to get through this one. <br> The third one is a padlock. It requires a 4-digit combination. It might be here somewhere. <br> Well, seems like you'll have to risk your life to get these parts.";
      if (exitCounter === 0){
        tips.style.display = 'block';
        tips.innerText = 'This is your chance to get out! You will have to craft something for one of the locks, then look for the other two items to get the others.';
        exitCounter ++;
      }
      headerText.innerText = "It's the exit!";
      title.innerText = 'Exit door';
      actionButton.style.display = 'block';
      actionButton.innerText = "Try one of the locks";
      break;
    //Base
    case 'start':
      banner.innerText = 'This is your base.';
      sleepButton.style.display = 'block';
      craftingSection.style.display = 'flex';
      selfActions.style.display = 'block';
      if(sleepCounter === 0){
        tips.style.display = 'block';
        tips.innerText = "When you sleep, every outside resource will be replenished.";
      }
      sleepCounter ++;
      switch(baseLevel){
        case 1:
          banner.innerText += " It's pretty small and uncomfortable, but it will do for now.";
          headerText.innerText = 'Meager base';
          title.innerText = 'Uncomfortable base';
          crafting1List.style.display = 'block';
          crafting1Text.style.display = 'block';
          break;
        case 2:
          banner.innerText += " It's good for now. Now bugs can't bite you, and you can craft new stuff.";
          headerText.innerText = 'Mediocre base';
          title.innerText = 'Upgraded base';
          break;
        case 3:
          banner.innerText += " It's really comfy now. You could almost stay here forever. Almost. The loneliness still tugs at you. Maybe you should get a good night's rest.";
          headerText.innerText = 'Comfy base';
          title.innerText = 'Comfortable base';
          break;
      }
      break;
    //Flax
    case 'Flax patch':
      banner.innerText = "It's a patch of flax. You could probably get some cloth from this, if you had a spinning wheel";
      headerText.innerText = 'Flax';
      title.innerText = 'Flax Patch';
      actionButton.style.display = 'block';
      actionButton.innerText = 'Gather flax';
      break;
    //Hemp
    case 'Hemp patch':
      banner.innerText = "Is this a patch of hemp? Sadly, you can't get high off of this substance because of the low levels of THC, but you could make some cloth out of it.";
      headerText.innerText = 'No canabis here';
      title.innerText = 'Hemp patch';
      actionButton.style.display = 'block';
      actionButton.innerText = 'Gather Hemp';
  }
}
//Function to get rid of all buttons for the exit
function ridButtons(){
  buttonForward.style.display = 'none';
  buttonBackward.style.display = 'none';
  selfActions.style.display = 'none';
  actionButton.style.display = 'none';
  exitButton.style.display = 'block';
  exitForm.style.display = 'block';
  getBackToMaze.style.display = 'block';
  lookBack.style.display = 'none';
}

//Action function
function actionChecker(){
  switch(gameBoard[space]){
    //Flax patch
    case 'Flax patch':
      
      switch(flaxPatchStorage){
        case 0:
          banner.innerText = "There aren't any left";
          break;
        default:
          banner.innerText = "You got a flax bundle";
          flaxStorage ++;
          flaxPatchStorage --;
          hungerStat -= 1;
          break;
      }
    break;
    //rocks
    case 'rock deposit':
      //Do they have a pickax
      switch(craftables.pickax){
        case false:
          //Checks if they already got flint
          switch(craftables.flint){
            case false:
              //Randomizer to get flint
              switch(Math.floor(Math.random() * 3)){
                case 2:
                  //Winning
                  banner.innerText = 'While searching through some rocks, you find a flint rock! This will be useful while crafting.';
                  hungerStat -=3;
                  craftables.flint = true;
                  break;
                //losing
                default:
                  banner.innerText = 'You gathered some rocks';
                  hungerStat -=3;
                  rockStorage += 2;
                  break;
              }
              break;
            //If they already got flint
            case true:
              banner.innerText = 'You gathered some rocks';
              hungerStat -=3;
              rockStorage += 2;
              break;
          }
          break;
          //If they have a pickax
        case true:
          banner.innerText = 'You gathered some rocks and got one with metal inside.';
          hungerStat -= 10;
          rockStorage += 5;
          break;
      }
      break;
    case 'spring':
      //Water stat gets brought up immediately
      break;
    //Rabbit Den
    case 'rabbit den':
      //Checks for a snare trap
      switch(craftables.smallSnareTraps){
        //If none
        case 0:
          //They will try to get a rabbit
          switch(Math.floor(Math.random()*6)){
            //If they succeed
            case 5:
              banner.innerText = 'You were somehow able to capture a rabbit, and immediately snapped its neck! Kind of disgusting, though. Maybe we should just eat it already';
              sanityStat -= 5;
              sanityCounter = 0;
              foodStorage.rabbits ++;
              break;
            //If they fail
            default:
              banner.innerText = "You weren't able to catch a rabbit";
              hungerStat -= 5;
              break;
          }
          break;
        //They will use a snare trap if they do have one
        default:
          hungerStat -= 2;
          //Better chance of getting a rabbit
          switch(Math.floor(Math.random()*5)){
            //Success
            case 4:
            case 3:
            case 2:
              banner.innerText = 'You set up a snare trap, and manage to catch a rabbit. The snare trap broke, but you got a rabbit!';
              foodStorage.rabbits ++;
              craftables.smallSnareTraps --;
              if (craftables.smallSnareTraps === 0){
                actionButton.innerText = "Catch some rabbits";
              }
              break;
              //Fail
            default:
              banner.innerText = 'You set up a snare trap, but no rabbits get caught. Bummer.';
              break;
          }
      }
      break;
    //Flower patch
    case 'flower patch':
      switch(flowerPatchStorage){
        //If they don't have any flowers
        case 0:
          banner.innerText = "You can't do that";
          break;
        //If they do
        default:
          banner.innerText = "You picked some flowers";
          sanityStat += 5;
          hungerStat --;
          waterStat --;
          flowerStorage ++;
          flowerPatchStorage --;
          break;
      }
      break;
    //Possible trap
    case 'possible trap':
      keyCounter --;
      //They will get a random item, or get caught from a trap
      switch(Math.floor(Math.random()*keyCounter)){
        //Shadow person
        case 15:
          banner.innerText = "There is something in the slot. You try to get the item, but it requires hard work. When you are done, however, your reward isn't what you expected. A shadowy figure is in front of you, and holds out its hand. It then dissapears suddenly. You don't know what you saw. You should get out of here.";
          sanityStat -= 40;
          hungerStat -= 10;
          shadowPerson2.style.display = 'block';
          headerText.innerText = "What was that?";
          title.innerText = "Shadow person";
          actionButton.style.display = 'none';
          break;
        //Cloth
        case 8:
          let piecesOfCloth = Math.floor(Math.random()*6+1);
          switch(piecesOfCloth){
            case 1:
              banner.innerText = "You look inside and find 1 piece of cloth. You take it.";
              break;
            default:
              banner.innerText = "You look inside and find " + piecesOfCloth + " pieces of cloth. You collect all the pieces";
              break;
          }
          clothStorage += piecesOfCloth;
          actionButton.style.display = 'none';
          break;
        //Flowers
        case 7:
          let amountOfFlowers = Math.floor(Math.random()*6+1);
          banner.innerText = "You look inside, and it looks like there are flowers. They are a bit wilted, but you collect them anyways.";
          flowerStorage += amountOfFlowers;
          actionButton.style.display = 'none';
          break;
        //Rocks
        case 6:
          let amountOfRocks = Math.floor(Math.random()*6+1);
          switch(amountOfRocks){
            case 1:
              banner.innerText = "You look inside, and there is 1 rock. You take it.";
              break;
            default:
              banner.innerText = "You look inside, and find " + amountOfRocks + ' rocks. You take all of them.';
              break;
          }
          rockStorage += amountOfRocks;
          actionButton.style.display = 'none';
          break;
        //Trap
        case 5:
          banner.innerText = "You look inside, but then your hand gets caught on something! It seems to be a snare trap, but you can't figure out how to untie it. After some time of struggling, you finally pull it out. Looks like some cloth is stuck to your hand.";
          hungerStat -= 10;
          waterStat -= 3;
          sanityStat -= 5;
          clothStorage += 1;
          actionButton.style.display = 'none';
          break;
        //Flint
        case 4:
          banner.innerText = "You look inside, and it looks like there is some flint. ";
          switch(craftables.flint){
            case false:
              banner.innerText += "You grab it. This will be useful when crafting.";
              craftables.flint = true;
              break;
            case true:
              banner.innerText += "You already have one though. I guess it could be used as another rock.";
              rockStorage += 1;
          }
          actionButton.style.display = 'none';
          break;
        //Salt trap
        case 3:
          banner.innerText = "You look inside, but it seems like something is in there. When you grab it, you find a piece of meat wrapped in clotch. You decide to eat it, but it was seasoned with a heaping load of salt. Gross.";
          waterStat -= 20;
          sanityStat -= 10;
          hungerStat += 5;
          clothStorage += 2;
          actionButton.style.display = 'none';
          break;
        //Nothing
        case 2:
          banner.innerText = "You look inside, but it seems like there's nothing. You reach inside, but there's nothing there.";
          actionButton.style.display = 'none';
          break;
        //Metal
        case 1:
          let piecesOfMetal = Math.floor(Math.random() * 6 + 1);
          banner.innerText = "You look inside, and there seems to be something smooth. When you pull it out, you find " + piecesOfMetal;
          switch(piecesOfMetal){
            case 1:
              banner.innerText += " piece of metal. Really lucky there.";
              break;
           default:
              banner.innerText += " pieces of metal. Really lucky there";
              break;
          }
          metalDepositStorage ++;
          actionButton.style.display = 'none';
        break;
      //Keys to the exit
      case 0:
        //If they don't have any
        keyCounter = 20;
        if (!(craftables.key)|| !(craftables.code)){
          //Chance to get a key or the note
          switch(Math.floor(Math.random() * keysCounter )){
            //Key path
            case 0:
              switch(Math.floor(Math.random()*2)){
                //Getting key
                case 1:
                  if (craftables.key === false){
                    banner.innerText = "You got a key!";
                    craftables.key = true;
                    if (exitCounter !== 0){
                      banner.innerText += " This one must help with that first lock for the exit.";
                    } else{
                      banner.innerText += " Who knows what this will open.";
                    }
                  } else{
                    //Getting note
                    if (craftables.code === false){
                      banner.innerText = 'You got a note. It says, "The first number is the number of locks on the door. The second number is the number of possible traps in this maze. The third number is the number of ways you can make cloth. The fourth number is the number of people in this maze." You put this in your pocket.';
                      craftables.code = true;
                      switch(exitCounter !== 0){
                        case false:
                          banner.innerText += " This may be useful, but you don't know what for.";
                          break;
                        case true:
                          banner.innerText += " This must be for that third padlock.";
                      }
                    }
                  }
                  break;
                case 0:
                  //Getting note
                  if (craftables.code === false){
                    banner.innerText = 'You got a note. It says, "The first number is the number of locks on the door. The second number is the number of possible traps in this maze. The third number is the number of possible ways you can make cloth. The fourth number is the number of people in this maze." You put this in your pocket.';
                    craftables.code = true;
                    switch(exitCounter !== 0){
                      case false:
                        banner.innerText += " This may be useful, but you don't know what for.";
                        break;
                      case true:
                        banner.innerText += " This must be for that third padlock.";
                        break;
                    }
                  } else{
                    //Getting key
                    banner.innerText = "You got a key!";
                    craftables.key = true;
                    if (exitCounter !== 0){
                      banner.innerText += " This one must help with that first lock for the exit.";
                    } else{
                      banner.innerText += " Who knows what this will open.";
                    }
                  }
                }
          }
        } else{
          banner.innerText = "You look inside, but it seems like there's nothing. You reach inside, but there's nothing there.";
        }
      actionButton.style.display = 'none';
      break;
      //Timber
        default:
          let piecesOfWood = (Math.floor(Math.random()*20+1));
          switch(piecesOfWood){
            case 1:
              banner.innerText = "You look inside, and it seems that there is 1 piece of timber. You collect it.";
              break;
            default:
              banner.innerText = "You look inside and it seems that there are " + piecesOfWood + " pieces of timber. you collect them all.";
          }
          timberStorage += piecesOfWood;
          actionButton.style.display = 'none';
          title.innerText = "Wood!";
          break;
    }
    break;
    //Animal
    case 'possible animal':
      //Picks between a boar or pig
      switch(Math.floor(Math.random()*2)){
        //Domesticated pig
        case 0:
          banner.innerText = "You try to catch the animal. It looks like a domesticated pig. Odd.";
          //Checks for a snare trap
          switch(craftables.snareTrap){
            //If not
            case 0:
              banner.innerText += " You don't have a snare trap for a pig.";
              //Checks for a pocket knife
              switch(craftables.pocketKnife){
                //If yes
                case true:
                  banner.innerText += " However, you do have a knife that could be able to slaughter the animal.";
                  //They have a chance at getting the animal
                  switch(Math.floor(Math.random()*8)){
                    //Success
                    case 7:
                      banner.innerText += " You try to stab the animal to incapacitate it. When it tries to feed on the walls of the maze, you stab it in its leg. Then, you go for its head. Somehow, you succeed in doing this. This will be a good feast tonight.";
                      hungerStat -= 20;
                      sanityStat -= 10;
                      foodStorage.pigs += 1;
                      break;
                    //Failure
                    default:
                      banner.innerText += " You try to stab the animal, then incapacitate it. However, when you try to stab it legs, it notices you before you could kill it. It knocks you down, but you cut the animal in defense. It runs away, allowing you to escape. However, you still don't have meat.";
                      hungerStat -= 40;
                      sanityStat -= 20;
                      break;
                  }
                  break;
                //If they don't have a knife
                case false:
                  banner.innerText += " You don't have a knife either. You try different ways to capture it, but the animal walks away. Should've gotten a trap or something.";
                  easterEggs.innerText = "Intelligence - 10";
                  break;
              }
              break;
            //If they do have a snare trap
            default:
              //A chance to get the animal
              banner.innerText += " You have a snare trap big enough to kill the pig. You set it down, and wait.";
              switch(Math.floor(Math.random()*5)){
                //Success
                case 4:
                  banner.innerText += " After some time, you hear something. It sounding like a pig suffocating. When you check on the trap, you see that the pig got stuck on the trap. ";
                  //Checks for pocket knife for text
                  switch(craftables.pocketKnife){
                    case false:
                      banner.innerText += " You wait for the pig to die. After it does, you collect its corpse. Looks like a meal for you.";
                      sanityStat -= 5;
                      break;
                    case true:
                      banner.innerText += " You stab the pig in the neck to quickly kill it. You collect its corpse. Looks like a meal for you.";
                      break;
                  }
                  hungerStat -= 2;
                  foodStorage.pigs ++;
                  craftables.snareTrap --;
                  break;
                  //Faliure
                default:
                  banner.innerText += "After some time waiting, you don't think that the pig will be coming back. It's footsteps suggested that it went somewhere else. Guess you'll need to wait tomorrow.";
                  hungerStat -= 5;
                  break;
              }
          }
          animalOutside = false;
          actionButton.style.display = 'none';
          break;
        //Boar section
        case 1:
          banner.innerText = "You try to catch the animal. It looks like a wild boar.";
          //Checks for a snare trap
          switch(craftables.snareTrap){
            //If not
            case 0:
              banner.innerText += " You don't have a snare trap for a boar.";
              //Checks for a pocket knife
              switch(craftables.pocketKnife){
                //If yes
                case true:
                  banner.innerText += " However, you do have a knife that could be able to slaughter the animal.";
                  //They have a chance at getting the animal
                  switch(Math.floor(Math.random()*12)){
                    //Success
                    case 11:
                      banner.innerText += " You try to stab the animal to incapacitate it. When it tries to feed on the walls of the maze, you stab it in its leg. Then, you go for its head. Somehow, you succeed in doing this. This will be a great feast tonight.";
                      hungerStat -= 20;
                      sanityStat -= 10;
                      foodStorage.boars += 1;
                      break;
                    //Failure
                    default:
                      banner.innerText += " You try to stab the animal, then incapacitate it. However, when you try to stab it legs, it notices you before you could kill it. It knocks you down, but you cut the animal in defense. It runs away, allowing you to escape. However, you still don't have meat.";
                      hungerStat -= 40;
                      sanityStat -= 20;
                      break;
                  }
                  break;
                //If they don't have a knife
                case false:
                  banner.innerText += " You don't have a knife either. You try different ways to capture it, but you give up. Should've gotten a trap or something.";
                  easterEggs.innerText = "Intelligence - 10";
                  easterEggs.style.display = 'block';
                  actionButton.style.display = 'none';
                  break;
              }
              break;
            //If they do have a snare trap
            default:
              //A chance to get the animal
              banner.innerText += " You have a snare trap big enough to kill the boar. You set it down, and wait.";
              switch(Math.floor(Math.random()*7)){
                //Success
                case 6:
                  banner.innerText += " After some time, you hear something. It sounding like a boar suffocating. When you check on the trap, you see that the boar got stuck on the trap. ";
                  //Checks for pocket knife for text
                  switch(craftables.pocketKnife){
                    case false:
                      banner.innerText += " You wait for the boar to die. After it does, you collect its corpse. Looks like a meal for you.";
                      sanityStat -= 5;
                      break;
                    case true:
                      banner.innerText += " You stab the boar in the neck to quickly kill it. You collect its corpse. Looks like a meal for you.";
                      break;
                  }
                  hungerStat -= 2;
                  foodStorage.boars ++;
                  craftables.snareTrap --;
                  break;
                  //Faliure
                default:
                  banner.innerText += "After some time waiting, you don't think that the boar will be coming back. It's footsteps suggested that it went somewhere else. Guess you'll need to wait tomorrow.";
                  hungerStat -= 5;
                  break;
              }
          }
          animalOutside = false;
          actionButton.style.display = 'none';
          break;
      }
      break;
    case 'Hemp patch':
      if (hempPatchStorage !== 0){
        banner.innerText = "You grab a hemp plant";
        hempStorage ++;
        hempPatchStorage --;
        hungerStat -= 1;
      } else{
        banner.innerText = "There aren't any plants";
      }
      break;
    case 'exit door':
      ridButtons();
      currentState = "choosing locks";
      exitSection.style.display = 'block';
  }
  statDisplay();
}
//End of Action section

//Food function
function checkFood(){
  //rabbit section
  if (foodStorage.rabbits > 0){
    eatRawRabbits.style.display = 'block';
    foodSection.style.display = 'block';
    if (space === 0 && craftables.campFire === true){
      cookRabbits.style.display = 'block';
    } else {
      //empty
    }
  } else if (foodStorage.rabbits === 0 || space !== 0){
    eatRawRabbits.style.display = 'none';
    cookRabbits.style.display = 'none';
  }
  if (foodStorage.cookedRabbits > 0){
    eatCookedRabbits.style.display = 'block';
  } else if (foodStorage.cookedRabbits === 0){
    eatCookedRabbits.style.display = 'none';
  }
  //Sleep button. Looks weird, but it is convenient
  if (space !== 0){
    sleepButton.style.display = 'none';
  }
  //Pig section
  if (foodStorage.pigs > 0){
    eatRawPig.style.display = 'block';
    foodSection.style.display = 'block';
    if (space === 0 && craftables.campFire === true){
      cookPig.style.display = 'block';
    } else{
      cookPig.style.display = 'none';
    }
  } else{
    eatRawPig.style.display = 'none';
    cookPig.style.display = 'none';
  }
  if (foodStorage.cookedPigs > 0){
    eatCookedPig.style.display = 'block';
  } else{
    eatCookedPig.style.display = 'none';
  }
  //Boar section
  if (foodStorage.boars > 0){
    eatRawBoar.style.display = 'block';
    foodSection.style.display = 'block';
    if (space === 0 && craftables.campFire === true){
      cookBoar.style.display = 'block';
    } else{
      cookBoar.style.display = 'block';
    }
  } else{
    eatRawBoar.style.display = 'none';
    cookBoar.style.display = 'none';
  }
  if (foodStorage.cookedBoars > 0){
    eatCookedBoar.style.display = 'block';
  } else{
    eatCookedBoar.style.display = 'none';
  }
}
//End of Food checker

//Maxes out external storages
function maxOut(){
  let flaxStorageMax = 20;
  let flowerStorageMax = 20;
  let hempStorageMax = 20;
  flaxPatchStorage = flaxStorageMax;
  flowerPatchStorage = flowerStorageMax;
  hempPatchStorage = hempStorageMax;
  animalOutside = true;
}

//Advance and backward button actions
function moving(){
  tips.style.display = 'none';
  easterEggs.style.display = 'none';
  actionButton.style.display = 'none';
  sanityCounter ++;
  waterStat -= 3;
  hungerStat -= 3;
  if (sanityCounter === 5){
    sanityCounter = 0;
    sanityStat -= 5;
  }
  if (space !== 0){
    sleepButton.style.display = 'none';
  }
}

//Getting rid of everything when you die
function dying(){
  exitSection.style.display = 'none';
  foodSection.style.display = 'none';
  selfActions.style.display = 'none';
  shadowPerson.style.display = 'none';
  shadowPerson2.style.display = 'none';
  tips.style.display = 'none';
  exitButton.style.display = 'none';
  buttonForward.style.display = 'none';
  buttonBackward.style.display = 'none';
  actionButton.style.display = 'none';
  easterEggs.style.display = 'none';
  storages.style.display = 'none';
  headerText.innerText = "You're dead";
  title.innerText = '...';
  if (sanityStat === 0){
    banner.innerText = "You see shadow people everywhere. You feel like they are trying to come after you. You back away, but then your foot slips and you fall in the river. You feel something at the bottom, and realize that it's a human body! But that doesn't matter, you are trying to get up. After several attemps, your body sinks down, and you drown.";
  } else if (waterStat === 0){
    banner.innerText = "You run, trying to get to the spring. You fall down, and have to crawl the rest of the way. You eventually reach it, and try to get some water. However, while trying to get some water with your hands, your body slips and falls into the spring. You try to swim up, but you don't have enough energy. When you sink down, you realize there are dead bodies on the floor! You try to get up, trying to not meet their same fate, but death consumes you.";
  } else{
    banner.innerText = "You get too ravenous, trying to find a way to get food. The leaves here are likely poisonous, so you try to catch a rabbit. When you try to catch one, the rabbits are always faster. After some attemps, your body falls down. You can't get up, and you're likely going to be food for the animals if you stay. To end your pain, you try to crawl into the spring. You fall down, and drown yourself.";
  }
}

//Reseting the stat displays
function statDisplay(){
  if (hungerStat <= 0){
    hungerCounter --;
    hungerDisplay.style.width = 0;
    hungerStat = 0;
    if (hungerCounter === 0){
      dying();
    } else{
      hungerText.innerText = 'Hunger Stat too low! Restore hunger in ' + hungerCounter ;
        if (hungerCounter !== 1){
          hungerText.innerText += ' moves!';
        } else{
        hungerText.innerText += ' move!';
      }
    }
  } else if (hungerStat > hungerMax ){
    hungerDisplay.style.width = '100%';
    hungerStat = hungerMax;
  } else{
    hungerDisplay.style.width = hungerStat/hungerMax * 100 + '%';
  }
  if (waterStat <= 0){
    waterDisplay.style.width = 0;
    waterStat = 0;
    waterCounter --;
    if (waterCounter === 0){
      dying();
    } else{
      waterText.innerText = "Thirst Stat too low! Get to a water source in " + waterCounter;
      if (waterCounter !== 0){
        waterText.innerText += " moves";
      } else{
        waterText.innerText += ' move';
      }
    }
  } else if (waterStat > waterMax){
    waterDisplay.style.width = '100%';
    waterStat = waterMax;
  } else{
    waterDisplay.style.width = waterStat/waterMax * 100 + '%';
  }
  if (sanityStat <= 0){
    sanityDisplay.style.width = 0;
    sanityStat = 0;
    sanityStatCounter --;
    if (sanityStatCounter === 0){
      dying();
    } else{
      sanityText.innerText = "You're going insane! Try to boost your sanity in " + sanityStatCounter;
      if (sanityStatCounter !== 1){
        sanityText.innerText += " moves";
      } else{
        sanityText.innerText += ' move';
      }
    }
  } else if (sanityStat > sanityMax){
    sanityDisplay.style.width = '100%';
    sanityStat = sanityMax;
  } else{
    sanityDisplay.style.width = sanityStat/sanityMax * 100 + '%';
  }
}

//Advancing button
buttonForward.onclick = function(event){
  event.preventDefault();
  moving();
  space ++;
  if (gameBoard[space] !== 'start' || gateOpen === true){
    buttonBackward.style.display = 'block';
  }
  if (space === 20 && gateOpen === false){
    banner.innerText = "You found the gate that was blocking you from advancing before! This gate has a deadbolt lock, which you can easily unlock. Now you can go through the gate!";
    space %= 20;
    actionButton.style.display = 'block';
    buttonForward.style.display = 'none';
    buttonBackward.style.display = 'none';
  } else{
    space %= 20;
    spaceChecker();
  }
  checkFood();
  statDisplay();
};
// backward button

buttonBackward.onclick = function(event){
  event.preventDefault();
  moving();
  space --;
  if (space === -1){
    space = 19;
  }
  spaceChecker();
  if (gameBoard[space] === 'start' && gateOpen === false){
    buttonBackward.style.display = 'none';
  }
  checkFood();
  statDisplay();
};
//Action button

actionButton.onclick = function(event){
  tips.style.display = 'none';
  easterEggs.style.display = 'none';
  actionChecker();
  checkFood();
  statDisplay();
};

//eating raw rabbits button
eatRawRabbits.onclick = function(event){
  tips.style.display = 'none';
  easterEggs.style.display = 'none';
  hungerStat += 25;
  sanityStat -= 10;
  foodStorage.rabbits --;
  statDisplay();
  checkFood();
  banner.innerText = "You just ate that rabbit. Raw. Gross, but you need the food.";
};

//cooking rabbits button
cookRabbits.onclick = function(event){
  tips.style.display = 'none';
  easterEggs.style.display = 'none';
  foodStorage.rabbits --;
  foodStorage.cookedRabbits ++;
  (hungerStat <= 20) ? null:hungerStat -= 5;
  waterStat -= 3;
  (waterStat <= 10) ? null:waterStat -= 3;
  sanityStat += 2;
  sanityCounter = 0;
  statDisplay();
  checkFood();
  banner.innerText = "You cook some rabbits over the fire pit. It looks so good and it makes your mouth water.";
};

// eating cooked rabbits
eatCookedRabbits.onclick = function(){
  tips.style.display = 'none';
  easterEggs.style.display = 'none';
  foodStorage.cookedRabbits --;
  hungerStat += 70;
  waterStat += 5;
  sanityStat += 10;
  sanityCounter = 0;
  statDisplay();
  checkFood();
  banner.innerText = "You eat the cooked morsel. It's better than eating raw rabbits at least.";
};

//eating raw pigs
eatRawPig.onclick = function(){
  tips.style.display = 'none';
  easterEggs.style.display = 'none';
  foodStorage.pigs --;
  hungerStat += 100;
  waterStat += 20;
  sanityStat -= 20;
  sanityCounter ++;
  statDisplay();
  checkFood();
  banner.innerText = "You eat the pig raw. You need to food, but it doesn't taste good.";
};

cookPig.onclick = function(){
  tips.style.display = 'none';
  easterEggs.style.display = 'none';
  foodStorage.pigs --;
  foodStorage.cookedPigs ++;
  hungerStat -= 10;
  waterStat -= 5;
  sanityStat += 20;
  sanityCounter = 0;
  statDisplay();
  checkFood();
  banner.innerText = "You cook the pig. It makes your mouth water. It looks really good.";
};
//Eating a cooked pig
eatCookedPig.onclick = function(){
  tips.style.display = 'none';
  easterEggs.style.display = 'none';
  foodStorage.cookedPigs--;
  hungerStat += 150;
  waterStat += 40;
  sanityStat += 40;
  sanityCounter = 0;
  statDisplay();
  checkFood();
  banner.innerText = "You eat the cooked pig. It's really good considering the circumstances.";
};

//Eating raw boars
eatRawBoar.onclick = function(){
  tips.style.display = 'none';
  easterEggs.style.display = 'none';
  foodStorage.boars --;
  hungerStat += 100;
  waterStat += 30;
  sanityStat -= 30;
  statDisplay();
  checkFood();
  banner.innerText = "You eat the boar raw. This really doesn't seem healthy, but you need the food.";
};

//cooking boars
cookBoar.onclick = function(){
  tips.style.display = 'none';
  easterEggs.style.display = 'none';
  foodStorage.boars --;
  foodStorage.cookedBoars ++;
  hungerStat -= 10;
  waterStat -= 20;
  sanityStat += 10;
  sanityCounter = 0;
  statDisplay();
  checkFood();
  banner.innerText = "You cook the boar. There is so much juicy meat. Too bad you can't see it because the dev decided not to include good graphics.";
};

//Eating cooked boars
eatCookedBoar.onclick = function(){
  tips.style.display = 'none';
  easterEggs.style.display = 'none';
  foodStorage.cookedBoars --;
  hungerStat += 150;
  waterStat += 20;
  sanityStat += 30;
  sanityCounter = 0;
  statDisplay();
  checkFood();
  banner.innerText = "You eat the cooked boar. The meat is lean, but there is a lot. ";
};

// SleepButton
sleepButton.onclick = function(){
  switch(bedLevel){
    case 1:
      banner.innerText = "It was pretty uncomfortable, but at least there are fresh resources today. ";
      hungerStat -= 30;
      waterStat -= 20;
      sanityStat -= 20;
      break;
    case 2:
      banner.innerText = "Now you have a blanket, still pretty bad though. At least there are fresh resources. ";
      hungerStat -= 30;
      waterStat -= 20;
      sanityStat -= 10;
      bedDurability -= 10;
      break;
    case 3:
      banner.innerText = "It's off from the ants at least. Let's harvest the new resources. ";
      hungerStat -= 40;
      waterStat -= 25;
      sanityStat += 5;
      bedDurability -= 10;
      break;
    case 4:
      banner.innerText = "This was a good night. It almost gets you off of the depression you have. ";
      hungerStat -= 35;
      waterStat -= 25;
      sanityStat += 25;
      sanityCounter = 0;
      bedDurability -= 20;
  }
  if (bedDurability <= 0){
    switch(bedLevel){
      case 2:
        banner.innerText += 'However, it seems that your blanket has been destroyed. Now, you\'ll need to craft a new one.';
        clothyBed.style.display = 'block';
        raisedBed.style.display = 'block';
        comfortableBed.style.display = 'block';
        bedLevel = 1;
        break;
      case 3:
        banner.innerText += "When you get up, you find that one of the bed legs got destroyed. When you try to replace the part, the whole bed falls apart. I guess you'll need a new bed.";
        clothyBed.style.display = 'block';
        raisedBed.style.display = 'block';
        comfortableBed.style.display = 'block';
        bedLevel = 1;
        break;
      case 4:
        banner.innerText += "Almost because you realized that your bed got worn down. Better craft a new one quick.";
        clothyBed.style.display = 'block';
        raisedBed.style.display = 'block';
        comfortableBed.style.display = 'block';
        bedLevel = 1;
        break;
    }
    bedDurability = 0;
  }
  statDisplay();
  maxOut();
};

//Looking at the code again
lookAtNote.onclick = function(){
  tips.style.display = 'none';
  easterEggs.style.display = 'none';
  banner.innerText = "The note says,\"The first number is the number of locks on the door. The second number is the number of possible traps in this maze. The third number is the number of ways you can make cloth. The fourth number is the number of people in this maze.\" You put it back in your pocket";
};
//Exit Door
exitButton.onclick = function(event){
  event.preventDefault();
  getBackToMaze.style.display = 'none';
  for(let i = 0; i < 3; i ++){
    if (exitForm[i].checked === true){
      currentLock = exitForm[i].value;
    }
  }
  switch(currentLock){
    case '3':
      exitForm.style.display = 'none';
      exitButton.style.display = 'none';
      switch(lock3){
        case false:
          banner.innerText = "You try to enter a code.";
          exitInput.style.display = 'block';
          noteButton.style.display = 'block';
          getBackToMaze.style.display = 'none';
          break;
        case true:
          banner.innerText = "You already opened this.";
          lookBack.style.display = 'block';
          exitButton.style.display = 'none';
          break;
      }
      break;
    case '2':
      exitForm.style.display = 'none';
      switch(lock2){
        case false:
      switch(craftables.sledgeHammer){
          case false:
            banner.innerText = "You need something with a high force to break this lock. You don't have anything that could break this, though.";
            exitButton.style.display = 'none';
            lookBack.style.display = 'block';
            break;
          case true:
            banner.innerText = "You need something with a high force to break this lock. Luckily, you remember that you built a sledgehammer. You grab it, and try to break the lock with the sledgehammer. The lock breaks after the third attempt. You're tired, but it works.";
            lock2 = true;
            exitButton.style.display = 'none';
            lookBack.style.display = 'block';
            hungerStat -= 20;
            break;
          }
          break;
        case true:
          banner.innerText = "You already destroyed this one";
          lookBack.style.display = 'block';
          exitButton.style.display = 'block';
          break;
      }
      break;
    case '1':
      exitForm.style.display = 'none';
      switch(lock1){
        case false:
        switch(craftables.key){
          case false:
            banner.innerText = "You simply need a key to open this. However, you don't have one. It might be lying around here in this maze somewhere";
            exitButton.style.display = 'none';
            lookBack.style.display = 'block';
            break;
          case true:
            banner.innerText = "You simply need a key to open this. You use the key you got from one of those slots in the maze. It opens the lock with a satisfying click.";
            exitButton.style.display = 'none';
            lookBack.style.display = 'block';
            lock1 = true;
            break;
          }
            break;
        case true:
          banner.innerText = "You already unlocked this one.";
          lookBack.style.display = 'block';
          exitButton.style.display = 'none';
          break;
      }
  }
  statDisplay();
};

//Button for the code
noteButton.onclick = function(event){
  event.preventDefault();
  lookBack.style.display = 'block';
    if(exitInput.value.length === 4){
      if (exitInput.value === '3521'){
        banner.innerText = "That was the right code! You get the lock open.";
        lock3 = true;
        noteButton.style.display = 'none';
        exitInput.style.display = 'none';
      } else{
        banner.innerText = "That wasn't the right code.";
      }
    } else{
      banner.innerText = "Input a 4-digit code";
    }
};
//Looking back at the locks
lookBack.onclick = function(event){
  event.preventDefault();
  noteButton.style.display = 'none';
  lookBack.style.display = 'none';
  exitButton.style.display = 'block';
  if (lock1 === false || lock2 === false || lock3 === false){
    exitButton.style.display = 'block';
    exitInput.style.display = 'none';
    exitForm.style.display = 'block';
    banner.innerText = 'You think about which of the locks to do.';
    getBackToMaze.style.display = 'block';
  } else{
    actionButton.style.display = 'none';
    exitButton.style.display = 'none';
    banner.innerText = "You got all of the locks open! You open it and get your way into freedom";
    winButton.style.display = 'block';
  }
};
//Withdrawing from the exit
getBackToMaze.onclick = function(){
  buttonForward.style.display = 'block';
  buttonBackward.style.display = 'block';
  actionButton.style.display = 'block';
  selfActions.style.display = 'block';
  exitSection.style.display = 'none';
};

//Button win you when
winButton.onclick = function(){
  winButton.style.display = 'none';
  banner.innerText = "You open the door and manage to get outside! The outside looks so bright compared to the maze. You still don't know where you are. There is a path from the exit leading somewhere, so you follow it. When you reach the end, you find your house. You get in, safe and sound.";
  headerText.innerText = "Outside at last!";
  title.innerText = "You won!";
};

//Updates storage
function updateStorage() {
  timberStorageNumber
}
