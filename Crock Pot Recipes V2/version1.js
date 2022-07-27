/*jshint loopfunc: true */
$();
'use strict';
//Crockpot and ingredient stuff
var ingredients = [];
var recipeValue = {
  meats:0,
  monsterFood:0,
  eggs:0,
  fruit:0,
  vegetables:0,
  sweetners:0,
  fish:0,
};
var ingredientlist = ['drumstick', 'eel', 'fish', 'frog legs', 'meat', 
'monster meat', 'morsel', 'durian', 'egg', 'tallbird egg', 'pomegranate', 
'dragon fruit', 'berries', 'cave banana', 'carrot', 'corn', 'eggplant', 
'pumpkin', 'blue cap', 'green cap', 'red cap', 'mandrake', 'lichen', 'honey', 'honeycomb', 'twigs', 'butterfly wings'];
var meats = ['drumstick', 'eel', 'fish', 
'frog legs', 'meat', 'monster meat', 'morsel'];
var monsterFood = ['monster meat', 'durian'];
var eggs = ['egg', 'tallbird egg'];
var fruit = ['pomegranate', 'dragon fruit', 'berries', 'cave banana', 'durian'];
var vegetables = ['carrot', 'corn', 'eggplant', 'pumpkin', 'blue cap', 'green cap', 'red cap', 'mandrake', 'lichen',];
var sweetners = ['honey', 'honeycomb'];
var fish = ['fish', 'eel'];
var ingredientTypes = [meats, monsterFood, eggs, fruit, vegetables, sweetners, fish];
var typeOfIngredient = ['meats', 'monsterFood', 'eggs', 'fruit', 'vegetables', 'sweetners', 'fish'];
var ingredientValues = {
  meats:{
    0.5:['morsel', 'eel', 'fish', 'frog legs', 'drumstick'],
    1:['meat', 'monster meat'],
  },
  monsterFood:{
    1:['monster meat', 'durian'],
  },
  eggs:{
    1:['egg'],
    3:['tallbird egg'],
  },
  fruit:{
    0.5:['berry'],
    1:['pomegranate', 'dragon fruit', 'cave banana', 'durian'],
  }, 
  vegetables:{
    0.5:['red cap', 'green cap', 'blue cap'],
    1:['carrot', 'corn', 'eggplant', 'pumpkin', 'mandrake', 'lichen',],
  },
  sweetners:{
    1:['honey', 'honeycomb'],
  },
  fish:{
    1:['fish', 'eel'],
  }
};
//HTML
var ingredientSection = $('#ingredients')[0];
var firstIngred = $('#firstIngred');
var secondIngred = $('#secondIngred');
var thirdIngred = $('#thirdIngred');
var fourthIngred = $('#fourthIngred');
var finishedDish = $('#finishedDish');
//Adding buttons
for (let i = 0; i < ingredientlist.length; i ++){
  ingredientSection.innerHTML += "<button id='" + ingredientlist[i] + "'>Add " 
  + ingredientlist[i] + "</button>";
}
//Getting buttons in the array
var buttonArray = document.getElementsByTagName('main')[0].getElementsByTagName('button');
//Declaring constructor
function MakeRecipe(meatVal, monsterVal, eggVal, fruitVal, vegetableVal, sweetnerVal, fishVal, requirements, restrictions){
  this.meatVal = meatVal;
  this.monsterval = monsterVal;
  this.eggVal = eggVal;
  this.fruitVal = fruitVal;
  this.vegetableVal = vegetableVal;
  this.sweetnerVal = sweetnerVal;
  this.fishVal = fishVal;
  this.requirements = requirements;
  this.restrictions = restrictions;
}
//Object containing all recipes
var recipes = {
  //40
  unagi:new MakeRecipe(0, 0, 0, 0, 0, 0, 0, ['eel', 'lichen'], ['none']),
  //10
  mandrakeSoup:new MakeRecipe(0, 0, 0, 0, 0, 0, 0, ['mandrake'], ['none']),
  pumpkinCookie:new MakeRecipe(0, 0, 0, 0, 0, 2, 0, ['pumpkin'], ['none']),
  powderCake:new MakeRecipe(0, 0, 0, 0, 0, 0, 0, ['corn', 'twig', 'honey'], ['none']),
  //fish sticks must not have more than one twig
  fishSticks:new MakeRecipe(0, 0, 0, 0, 0, 0, 0.5, ['twig'], ['none']),
  fishTacos:new MakeRecipe(0, 0, 0, 0, 0, 0, 0.5, ['corn'], ['none']),
  baconEggs:new MakeRecipe(1.5, 0, 2, 0, 0, 0, 0, ['none'], ['vegetables', 'twig']),
  monsterLasagna:new MakeRecipe(0, 2, 0, 0, 0, 0, 0, ['none'], ['twig']),
  taffy:new MakeRecipe(0, 0, 0, 0, 0, 3, 0, ['none'], ['meats']),
  turkeyDinner:new MakeRecipe(0.5, 0, 0, 0.5, 0.5, 0, 0, ['none'], ['none']),
  waffles:new MakeRecipe(0, 0, 1, 0, 0, 0, 0, ['berry', 'butter'], ['none']),
  //5
  pierogi:new MakeRecipe(0.5, 0, 1, 0, 0.5, 0, 0, ['none'], ['twig', 'mandrake']),
  kabobs:new MakeRecipe(0.5, 0, 0, 0, 0, 0, 0, ['twig'], ['none']),
  //2
  honeyHam:new MakeRecipe(2, 0, 0, 0, 0, 1, 0, ['none'], ['twig']),
  //meat value greater than 2 will make honey ham
  honeyNuggets:new MakeRecipe(0.5, 0, 0, 0, 0, 1, 0, ['none'], ['twig']),
  //1
  froggieBunwich:new MakeRecipe(0, 0, 0, 0, 0.5, 0, 0, ['frog legs'], ['none']),
  dragonpie:new MakeRecipe(0, 0, 0, 0, 0, 0, 0, ['dragonpie'], ['meats']),
  butterMuffin:new MakeRecipe(0, 0, 0, 0, 0.5, 0, 0, ['butterfly wings'], ['meats']),
  stuffedEggplant:new MakeRecipe(0, 0, 0, 0, 0.5, 0, 0, ['eggplant'], ['none']),
  //0
  meatyStew:new MakeRecipe(3, 0, 0, 0, 0, 0, 0, ['none'], ['twig']),
  ratatouille:new MakeRecipe(0, 0, 0, 0, 0.5, 0, 0, ['none'], ['meats', 'twig']),
  fistFullOfJam:new MakeRecipe(0, 0, 0, 0.5, 0, 0, 0, ['none'], ['meats', 'vegetables', 'twig']),
  fruitMedley:new MakeRecipe(0, 0, 0, 3, 0, 0, 0, ['none'], ['dragon fruit', 'meat', 'vegetables']),
  //-1
  meatballs:new MakeRecipe(0.5, 0, 0, 0, 0, 0, 0, ['none'], ['twigs']),
  //Wet Goop is any invalid recipe with -2 priority
};

//Making the values when ingredients are added or removed
// function getRecipeValues(){
//   for (let keys in recipeValues){
//     recipeValues[keys] = 0;
//   }
//   for(let i = 0;i < 4;i ++){
//     let ingredientInList = ingredients[i];
//     for (let j = 0;j < keys(ingredientValues).length;i ++){
//       for (let keys in ingredientValues){
//         let type = ingredientValues[keys];
//         for (let value in type){
//           let ingredArr = type[value];
//           for (let k = 0; k < ingredArr.length; k ++){
//             if (ingredArr[k] == ingredientInList){
//               recipeValues[keys] += value;
//             }
//           }
//         }
//       }
//     }
//   }
// }
//Functions for getting the dish
function getFinishedDish(){
  finishedDish.style.display = 'none';
  finishedDish.innerText = '';
  console.log('running');
  //unagi, has highest priority
  if (isRecipe(recipes.unagi, recipeValue)){
    finishedDish.style.display = 'flex';
    finishedDish.innerText = 'unagi';
    console.log('unagi');
  } 
}
function isRecipe(dish, ingredients){
  return checkMeat(dish, ingredients) && checkMonster(dish, ingredients) && checkEggs(dish, ingredients) && checkFruit(dish, ingredients) && checkVeg(dish, ingredients) && checkSweet(dish, ingredients) && checkFish(dish, ingredients) && checkRequirements(dish, ingredients) && checkRestrictions(dish, ingredients);
}
function checkMeat(dish, ingredients){
  console.log();
  return ingredients.meatVal >= dish.meat;
}
function checkMonster(dish, ingredients){
  console.log();
  return ingredients.monsterVal >= dish.monsterVal;
}
function checkEggs(dish, ingredients){
  console.log();
  return ingredients.eggVal >= dish.eggVal;
}
function checkFruit(dish, ingredients){
  console.log();
  return ingredients.fruitval >= dish.fruitVal;
}
function checkVeg(dish, ingredients){
  console.log();
  return ingredients.vegetabalVal >= dish.vegetableVal;
}
function checkSweet(dish, ingredients){
  console.log();
  return ingredients.sweetnerVal >= dish.sweetnerVal;
}
function checkFish(dish, ingredients){
  console.log();
  return ingredients.fishVal >= dish.fishVal;
}
function checkRequirements(dish, ingredients){
  let required = dish.requirements;
  for (let i = 0; i < required.length; i ++){
    let requiredIngredient = required[i];
    let isThere = false;
    for (let j = 0; j < ingredients.length; j ++){
      if (requiredIngredient == ingredients[j]){
        isThere = true;
        break;
      }
    }
    if (!isThere){
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}
function checkRestrictions(dish, ingredients){
  let restricted = dish.restrictions;
  for (let i = 0; i < restricted.length; i ++){
    let restrictedIngredient = restricted[i];
    let isThere = false;
    if (typeOfIngredient.indexOf(restrictedIngredient) == -1){
      for (let j = 0; j < ingredients.length; j ++){
        if (restrictedIngredient == ingredients[j]){
          isThere = true;
          break;
        }
      }
    } else{
      let category = ingredientTypes[typeOfIngredient.indexOf
      (restrictedIngredient)];
      for (let j = 0; j < ingredients.length; j ++){
        if (category.indexOf(ingredients[j]) == -1){
          isThere = true;
          break;
        }
      }
    }
    if (isThere){
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}
function addUserValues(ingredient){
  for (let i = 0; i < ingredientTypes.length; i ++){
    let category = ingredientTypes[i];
    if (category.indexOf(ingredient) !== -1){
      typeOfIngredient[category.indexOf(ingredient)];
      
    }
  }
}
//Declaring function affecting HTML
function displayIngredients(){
  if (ingredients[0] !== undefined){
    firstIngred.innerText = ingredients[0];
    firstIngred.style.display = "flex";
  }
  if (ingredients[1] !== undefined){
    secondIngred.innerText = ingredients[1];
    secondIngred.style.display = "flex";
  }
  if (ingredients[2] !== undefined){
    thirdIngred.innerText = ingredients[2];
    thirdIngred.style.display = "flex";
  }
  if (ingredients[3] !== undefined){
    fourthIngred.innerText = ingredients[3];
    fourthIngred.style.display = "flex";
  }
}
function clickButton(item){
  if (ingredients.length >= 4){
    document.getElementById('warning').style.display = 'block';
  } else{
    ingredients.push(item);
    document.getElementById('warning').style.display = 'none';
    displayIngredients();
  }
}
for (let i = 0; i < buttonArray.length; i ++){
  let button = buttonArray[i];
  buttonArray[i].onclick = function(){
    clickButton(button.id);
    getFinishedDish();
  };
}
