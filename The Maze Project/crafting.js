//Crafting buttons for list 1

//Crafting Pocket Knife
pocketKnife.onclick = function(){
  event.preventDefault();
  if (timberStorage >= 1 && craftables.flint === true && craftables.pocketKnife === false){
    banner.innerText = "You crafted a pocket knife! Time to stabbity stab stab.";
    timberStorage --;
    craftables.pocketKnife = true;
    pocketKnife.style.display = 'none';
    hungerStat -= 1;
    statDisplay();
  } else{
    banner.innerText = "You don't have enough resources";
  }
};

//Making a small snare trap
smallSnareTrap.onclick = function(){
  event.preventDefault();
  if (timberStorage >= 3 && craftables.flint === true){
    craftables.smallSnareTraps ++;
    timberStorage -= 3;
    banner.innerText = "You crafted a small snare trap! Time to hunt some bunnies!";
    hungerStat -= 5;
    statDisplay();
  } else{
    banner.innerText = "You don't have enough resources";
  }
};

clothyBed.onclick = function(){
  event.preventDefault();
  if (clothStorage >= 10 && timberStorage >= 3){
    banner.innerText = "You upgraded your bed. Better than leaves and sticks.";
    clothStorage -= 10;
    timberStorage -= 3;
    bedLevel ++;
    hungerStat -= 10;
    statDisplay();
    clothyBed.style.display = 'none';
    bedDurability = 100;
  } else{
    banner.innerText = "You don't have enough resources";
  }
};

//Campfire
campFire.onclick = function(){
  event.preventDefault();
  if (rockStorage >= 10){
    rockStorage -= 10;
    craftables.campFire = true;
    sanityStat += 10;
    statDisplay();
    banner.innerText = "You crafted a camp fire! Time to roast some grub!";
    campFire.style.display = 'none';
  } else{
    banner.innerText = "You don't have enough resources";
  }
};

//Garland
garland.onclick = function(){
  event.preventDefault();
  if (flowerStorage >= 12){
    flowerStorage -= 12;
    craftables.garlands ++;
    banner.innerText = "You crafted a garland out of flowers, your only way of staying sane.";
  } else{
    banner.innerText = "You don't have enough flowers.";
  }
};

//Spinning wheel
spinningWheel.onclick = function(){
  event.preventDefault();
  if (timberStorage >= 4 && craftables.flint === true){
    timberStorage -= 4;
    craftables.spinningWheel = true;
    banner.innerText = "You made a spinning wheel! Time to get some cloth!";
    hungerStat -= 5;
    sanityStat += 4;
    sanityCounter = 0;
    spinningWheel.style.display = 'none';
    statDisplay();
    flaxCloth.style.display = 'block';
    hempCloth.style.display = 'block';
  } else{
    banner.innerText = "You don't have enough resources.";
  }
};

//Upgrade base for the first time
upgrade1Base.onclick = function(){
  event.preventDefault();
  if (timberStorage >= 10 && rockStorage >= 10 && craftables.flint){
    timberStorage -= 10;
    rockStorage -= 10;
    banner.innerText = "You upgraded your base! You can craft more stuff now!";
    crafting2List.style.display = 'block';
    crafting2Text.style.display = 'block';
    hungerStat -= 20;
    waterStat -= 10;
    sanityStat += 10;
    sanityCounter = 0;
    upgrade1Base.style.display = 'none';
    statDisplay();
  } else{
    banner.innerText = "You don't have enough resources";
  }
};

//Hovering over pocketKnife
pocketKnife.onmouseover = function(){
  craftingRecipe.style.opacity = 1;
  craftingRecipe.innerText = "You'll need one piece of timber and a 1 flint to craft this (the flint won't be used up).";
};
//Hovering outside pocketKnife
pocketKnife.onmouseout = function(){
  craftingRecipe.style.opacity = 0;
};

//Hovering over smallSnareTrap
smallSnareTrap.onmouseover = function(){
  craftingRecipe.style.opacity = 1;
  craftingRecipe.innerText = "You'll need 3 pieces of timber and 1 flint (the flint won't be used up).";
};
//Hovering outside smallSnareTrap
smallSnareTrap.onmouseout = function(){
  craftingRecipe.style.opacity = 0;
};

//Hovering over Clothy bed
clothyBed.onmouseover = function(){
  craftingRecipe.style.opacity = 1;
  craftingRecipe.innerText = "You'll need 10 pieces of cloth and 3 pieces of timber";
};
//Hovering outside Clothy bed
clothyBed.onmouseout = function(){
  craftingRecipe.style.opacity = 0;
};

//Hovering over campFire
campFire.onmouseover = function(){
  craftingRecipe.style.opacity = 1;
  craftingRecipe.innerText = "You'll need 10 rocks and you'll have to have timber or cloth for fuel.";
};
//Hovering outside campFire
campFire.onmouseout = function(){
  craftingRecipe.style.opacity = 0;
};

//Hovering over garland
garland.onmouseover = function(){
  craftingRecipe.style.opacity = 1;
  craftingRecipe.innerText = "You'll need 12 flowers. Note that the garland will expire over time.";
};
//Hovering outside garland
garland.onmouseout = function(){
  craftingRecipe.style.opacity = 0;
};

//Hovering over spinningWheel
spinningWheel.onmouseover = function(){
  craftingRecipe.style.opacity = 1;
  craftingRecipe.innerText = "You'll need 4 pieces of timber and 1 flint (the flint won't be used up).";
};
//Hovering outside spinningWheel
spinningWheel.onmouseout = function(){
  craftingRecipe.style.opacity = 0;
};

//Hovering over upgradeBase
upgrade1Base.onmouseover = function(){
  craftingRecipe.style.opacity = 1;
  craftingRecipe.innerText = "You'll need 10 pieces of timber, 10 rocks, and a pocket knife to upgrade your base.";
};
//Hovering outside upgradeBase
upgrade1Base.onmouseout = function(){
  craftingRecipe.style.opacity = 0;
};

//Tier 2 crafting Items
//Snare trap
snareTrap.onclick = function(){
  event.preventDefault();
  if (timberStorage >= 4 && clothStorage >= 2 && craftables.pocketKnife === true){
    banner.innerText = "You crafted a bigger snare trap to hunt some animals.";
    timberStorage -= 4;
    clothStorage -= 2;
    hungerStat -= 5;
    sanityStat +=5;
    sanityCounter = 0;
    craftables.snareTrap ++;
    statDisplay();
  } else{
    banner.innerText = "You don't have enough resources";
  }
};
//Pickax
pickax.onclick = function(){
  event.preventDefault();
  if (timberStorage >= 3 && rockStorage >= 7){
    banner.innerText = "You crafted a pickax to mine some rocks.";
    timberStorage -= 3;
    rockStorage -= 7;
    hungerStat -= 7;
    sanityStat += 8;
    sanityCounter = 0;
    craftables.pickax = true;
    pickax.style.display = 'none';
    statDisplay();
  } else{
    banner.innerText = "You don't have enough resources";
  }
};
//Raised Bed
raisedBed.onclick = function(){
  event.preventDefault();
  if (timberStorage >= 6 && clothStorage >= 15 && craftables.pocketKnife === true){
    banner.innerText = "You crafted a bed that is over the ground. This will be more comfortable, but still bad.";
    timberStorage -= 6;
    clothStorage -= 15;
    hungerStat -= 10;
    sanityStat += 10;
    bedLevel ++;
    raisedBed.style.display = 'none';
    clothyBed.style.display = 'none';
    bedDurability = 100;
    statDisplay();
  } else{
    banner.innerText = "You don't have enough resources.";
  }
};
//canteen
canteen.onclick = function(){
  event.preventDefault();
  if (timberStorage >= 4 && craftables.pocketKnife === true){
    banner.innerText = "You crafted a canteen. Now you have the ability to transport water.";
    timberStorage -= 4;
    sanityStat += 5;
    craftables.canteen = true;
    canteen.style.display = 'none';
    statDisplay();
  } else{
    banner.innerText = "You don't have enough resources.";
  }
};
//Upgrade base for the second time
upgrade2Base.onclick = function(){
  event.preventDefault();
  if (timberStorage >= 20 && rockStorage >= 10 && clothStorage >= 20){
    banner.innerText = "You upgraded your base! It now looks like a makeshift hut. You can craft more stuff now!";
    crafting3List.style.display = 'block';
    crafting3Text.style.display = 'block';
    hungerStat -= 40;
    waterStat -= 20;
    sanityStat += 25;
    sanityCounter = 0;
    statDisplay();
    upgrade2Base.style.display = 'none';
  } else{
    banner.innerText = "You don't have enough resources.";
  }
};
//Hovering snare trap
snareTrap.onmouseover = function(){
  craftingRecipe.style.opacity = 1;
  craftingRecipe.innerText = 'You need 4 pieces of timber, 2 pieces of cloth, and a pocket knife to craft a snare trap.';
};
//Getting away snare trap
snareTrap.onmouseout = function(){
  craftingRecipe.style.opacity = 0;
};
//hovering pickax
pickax.onmouseover = function(){
  craftingRecipe.style.opacity = 1;
  craftingRecipe.innerText = "You need 3 pieces of timber and 7 rocks to to craft a pickax";
};
//Getting away from pickax
pickax.onmouseout = function(){
  craftingRecipe.style.opacity = 0;
};
//Hovering over raised Bed
raisedBed.onmouseover = function(){
  craftingRecipe.style.opacity = 1;
  craftingRecipe.innerText = "You need 6 pieces of timber, 15 pieces of cloth, and a pocket knife to upgrade your bed.";
};
//Getting away from raised bed
raisedBed.onmouseout = function(){
  craftingRecipe.style.opacity = 0;
};
//overing over canteen
canteen.onmouseover = function(){
  craftingRecipe.style.opacity = 1;
  craftingRecipe.innerText = "You need 4 pieces of timber and a pocket knife to make a canteen.";
};
//Getting away from canteen
canteen.onmouseout = function(){
  craftingRecipe.style.opacity = 0;
};
//Hovering over the link to upgrade your base
upgrade2Base.onmouseover = function(){
  craftingRecipe.style.opacity = 1;
  craftingRecipe.innerText = "You need 20 pieces of timber, 10 rocks, and 20 pieces of cloth to craft this.";
};
//Getting away from it
upgrade2Base.onmouseout = function(){
  craftingRecipe.style.opacity = 0;
};
//Tier 3 crafting items
//Sledgehammer
sledgeHammer.onclick = function(){
  event.preventDefault();
  if(timberStorage >= 10 && metalStorage >= 20 && craftables.furnace === true){
    banner.innerText = "You crafted a heavy Sledgehammer! ";
    switch(exitCounter){
      case 0:
        banner.innerText += "You don't know what this is for, but it should be for something.";
        break;
      default:
        banner.innerText += "Time to bash that lock on the door!";
    }
    timberStorage -= 10;
    metalStorage -= 20;
    hungerStat -= 40;
    sanityStat += 20;
    sanityCounter = 0;
    statDisplay();
    sledgeHammer.style.display = 'none';
    craftables.sledgeHammer = true;
  } else{
    banner.innerText = "You don't have enough resources.";
  }
};
//Comfortable Bed
comfortableBed.onclick = function(){
  event.preventDefault();
  if (timberStorage >= 10 && clothStorage >= 20){
    banner.innerText = 'You make a raised bed with a comfortable matress, a canopy overhead, and a pillow. Sounds like your own home minus your house.';
    timberStorage -= 10;
    clothStorage -= 20;
    hungerStat -= 10;
    sanityStat += 30;
    sanityCounter = 0;
    statDisplay();
    comfortableBed.style.display = 'none';
    raisedBed.style.display = 'none';
    clothyBed.style.display = 'none';
    bedLevel ++;
    bedDurability = 100;
  } else{
    banner.innerText = "You don't have enough resources.";
  }
};

furnace.onclick = function(){
  event.preventDefault();
  if (rockStorage >= 10 && timberStorage >= 6){
    banner.innerText = "You make a makeshift furnace. It could somehow melt metal deposits.";
    timberStorage -= 6;
    rockStorage -= 10;
    hungerStat -= 15;
    sanityStat += 10;
    sanityCounter = 0;
    statDisplay();
    furnace.style.display = 'none';
    craftables.furnace = true;
  } else{
    banner.innerText = "You don't have enough resources.";
  }
};

metalKnife.onclick = function(){
  event.preventDefault();
  if (metalStorage >= 5 && timberStorage >= 3 && craftables.pocketKnife === true){
    banner.innerText = "You craft a sharper metal knife.";
    metalStorage -= 5;
    timberStorage -= 3;
    hungerStat -= 20;
    sanityStat += 10;
    sanityCounter = 0;
    statDisplay();
    metalKnife.style.display = 'none';
    craftables.metalKnife = true;
  } else{
    banner.innerText = "You don't have enough resources.";
  }
};

sledgeHammer.onmouseover = function(){
  craftingRecipe.style.opacity = 1;
  craftingRecipe.innerText = "You'll need 10 pieces of timber, 20 pieces of metal, and a furnace to make a sledgehammer.";
};

sledgeHammer.onmouseout = function(){
  craftingRecipe.style.opacity = 0;
};

comfortableBed.onmouseover = function(){
  craftingRecipe.style.opacity = 1;
  craftingRecipe.innerText = "You'll need 10 pieces of timber and 20 pieces of cloth to upgrade your bed.";
};

comfortableBed.onmouseout = function(){
  craftingRecipe.style.opacity = 0;
};

furnace.onmouseover = function(){
  craftingRecipe.style.opacity = 1;
  craftingRecipe.innerText = "You'll need 10 rocks and 6 pieces of timber to make a furnace (you will also need timber for fuel).";
};

furnace.onmouseout = function(){
  craftingRecipe.style.opacity = 0;
};

metalKnife.onmouseover = function(){
  craftingRecipe.style.opacity = 1;
  craftingRecipe.innerText = "You'll need 5 metal, 3 pieces of timber, and a pocket knife to craft a metal knife.";
};

metalKnife.onmouseout = function(){
  craftingRecipe.style.opacity = 0;
};

//Spinning wheel
//Using Flax
flaxCloth.onclick = function(){
  if (flaxStorage >= 4){
    banner.innerText = "With the power of flax, you got linen.";
    flaxStorage -= 4;
    clothStorage ++;
  } else{
    banner.innerText = "You don't have enough flax.";
  }
};
flaxCloth.onmouseover = function(){
  craftingRecipe.style.opacity = 1;
  craftingRecipe.innerText = "You need 4 flax bundles to make some cloth.";
};
flaxCloth.onmouseout = function(){
  craftingRecipe.style.opacity = 0;
};
//Using Hemp
hempCloth.onclick = function(){
  if (hempStorage >= 6){
    banner.innerText = "With the power of hemp, you make hemp fabric.";
    hempStorage -= 6;
    clothStorage ++;
  } else{
    banner.innerText = "You don't have enough hemp.";
  }
};
hempCloth.onmouseover = function(){
  craftingRecipe.style.opacity = 1;
  craftingRecipe.innerText = "You need 6 hemp plants to make cloth.";
};
hempCloth.onmouseout = function(){
  craftingRecipe.style.opacity = 0;
};
