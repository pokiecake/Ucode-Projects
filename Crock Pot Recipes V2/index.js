// jshint maxerr:2000
// jshint loopfunc:true
$();
'use strict';
let ingredients = [];
let ingredientValues = {
  meat:0,
  monsterFood:0,
  eggs:0,
  fruit:0,
  vegetables:0,
  sweetners:0,
  fish:0
};
let values = {
  meat:{
    0.5:["morsel", "eel", "fish", "frog legs", "drumstick"],
    1:["meat", "monster meat"],
  },
  monsterFood:{
    1:["monster meat", "durian"],
  },
  eggs:{
    1:["egg"],
    3:["tallbird egg"],
  },
  fruit:{
    0.5:["berry"],
    1:["pomegranate", "dragon fruit", "cave banana", "durian"],
  }, 
  vegetables:{
    0.5:["red cap", "green cap", "blue cap"],
    1:["carrot", "corn", "eggplant", "pumpkin", "mandrake", "lichen",],
  },
  sweetners:{
    1:["honey", "honeycomb"],
  },
  fish:{
    1:["fish", "eel"],
  }
};
//Declaring values for ingredients
let meat = ["drumstick", "eel", "fish", 
"frog legs", "meat", "monster meat", "morsel"];
let monsterFood = ["monster meat", "durian"];
let eggs = ["egg", "tallbird egg"];
let fruit = ["pomegranate", "dragon fruit", "berry", "cave banana", "durian"];
let vegetables = ["carrot", "corn", "eggplant", "pumpkin", "blue cap", "green cap", "red cap", "mandrake", "lichen",];
let sweetners = ["honey", "honeycomb"];
let fish = ["fish", "eel"];
let ingredientTypes = [meat, monsterFood, eggs, fruit, vegetables, sweetners, fish];
let types = ["meat", "monsterFood", "eggs", "fruit", "vegetables", "sweetners", "fish"];
let ingredientlist = ["drumstick", "eel", "fish", "frog legs", "meat", 
"monster meat", "morsel", "durian", "egg", "tallbird egg", "pomegranate", 
"dragon fruit", "berry", "cave banana", "carrot", "corn", "eggplant", 
"pumpkin", "blue cap", "green cap", "red cap", "mandrake", "lichen", "honey", "honeycomb", "twig", "butterfly wings", "butter"];
//Declaring html
let adding = $("#adding");
  //Adding buttons
for (let i = 0; i < ingredientlist.length; i ++){
  adding.append(`<button id="${ingredientlist[i]}">${ingredientlist[i]}</button`);
}
let buttons = $("button");
let ingredient1 = $("#ingredient1");
let ingredient2 = $("#ingredient2");
let ingredient3 = $("#ingredient3");
let ingredient4 = $("#ingredient4");
let finishedDish = $("#finishedDish");
let td = $("td");
let search = $("#search");
//declaring functions
//Modifying HTML
function addIngredients(event){
  if (ingredients.length < 4){
    let button = event.target.getAttribute("id");
    ingredients.push(button);
    addIngredientValues(button);
    displayIngredients();
  }
  findDish();
}
function removeIngredients(event){
  let element = event.target;
  let text = element.innerText;
  if (element == ingredient1[0]){
    hideIngredientsText();
    ingredients.splice(0, 1);
    displayIngredients();
  } else if (element == ingredient2[0]){
    hideIngredientsText();
    ingredients.splice(1, 1);
    displayIngredients();
  } else if (element == ingredient3[0]){
    hideIngredientsText();
    ingredients.splice(2, 1);
    displayIngredients();
  } else if (element == ingredient4[0]){
    hideIngredientsText();
    ingredients.splice(3, 1);
    displayIngredients();
  }
  removeIngredientValues(text);
  findDish();
}
function hideIngredientsText(){
  ingredient1.text("");
  ingredient2.text("");
  ingredient3.text("");
  ingredient4.text("");
}
function displayIngredients(){
  if (!ingredient1.text()){
    ingredient1.text(ingredients[0]);
  } 
  if (!ingredient2.text()){
    ingredient2.text(ingredients[1]);
  } 
  if (!ingredient3.text()){
    ingredient3.text(ingredients[2]);
  }
  if (!ingredient4.text()){
    ingredient4.text(ingredients[3]);
  }
}
function displayDish(dish){
  if (dish.length !== 0){
    if (dish.length > 1){
      finishedDish.text(dish.join(" or "));
    } else{
      finishedDish.text(dish[0]);
    }
  } else{
    finishedDish.text("");
  }
}
//Javascript functions
function addIngredientValues(ingredient){
  for (let i = 0; i < ingredientTypes.length; i ++){
    let categoryName = types[i];
    let category = ingredientTypes[i];
    if (category.indexOf(ingredient) != -1){
      let categoryValues = values[categoryName];
      for (let valueOfIngredient in categoryValues){
        if (categoryValues[valueOfIngredient].indexOf(ingredient)
        != -1){
          ingredientValues[categoryName] += Number(valueOfIngredient);
        }
      }
    }
  }
}
function removeIngredientValues(ingredient){
  for (let i = 0; i < ingredientTypes.length; i ++){
    let categoryName = types[i];
    let category = ingredientTypes[i];
    if (category.indexOf(ingredient) != -1){
      let categoryValues = values[categoryName];
      for (let valueOfIngredient in categoryValues){
        if (categoryValues[valueOfIngredient].indexOf(ingredient) != -1){
          ingredientValues[categoryName] -= Number(valueOfIngredient);
        }
      }
    }
  }
}
//Prototyping recipes
function MakeRecipe(meat, monsterFood, eggs, fruit, vegetables, sweetners, fish, requirements, restrictions){
  this.meat = meat;
  this.monsterFood = monsterFood;
  this.eggs = eggs;
  this.fruit = fruit;
  this.vegetables = vegetables;
  this.sweetners = sweetners;
  this.fish = fish;
  this.requirements = requirements;
  this.restrictions = restrictions;
}
//Declaring all recipes for the crockpot
var recipes = {
  //40
  unagi:new MakeRecipe(0, 0, 0, 0, 0, 0, 0, ["eel", "lichen"], ["none"]),
  //10
  mandrakeSoup:new MakeRecipe(0, 0, 0, 0, 0, 0, 0, ["mandrake"], ["none"]),
  pumpkinCookie:new MakeRecipe(0, 0, 0, 0, 0, 2, 0, ["pumpkin"], ["none"]),
  powderCake:new MakeRecipe(0, 0, 0, 0, 0, 0, 0, ["corn", "twig", "honey"], ["none"]),
  //fish sticks must not have more than one twig
  fishSticks:new MakeRecipe(0, 0, 0, 0, 0, 0, 0.5, ["twig"], ["none"]),
  fishTacos:new MakeRecipe(0, 0, 0, 0, 0, 0, 0.5, ["corn"], ["none"]),
  baconEggs:new MakeRecipe(1.5, 0, 2, 0, 0, 0, 0, ["none"], ["vegetables", "twig"]),
  monsterLasagna:new MakeRecipe(0, 2, 0, 0, 0, 0, 0, ["none"], ["twig"]),
  taffy:new MakeRecipe(0, 0, 0, 0, 0, 3, 0, ["none"], ["meat"]),
  turkeyDinner1:new MakeRecipe(1.5, 0, 0, 0.5, 0, 0, 0, [["drumstick", 2]], ["none"]),
  turkeyDinner2:new MakeRecipe(1.5, 0, 0, 0, 0.5, 0, 0, [["drumstick", 2]], ["none"]),
  waffles:new MakeRecipe(0, 0, 1, 0, 0, 0, 0, ["berry", "butter"], ["none"]),
  //5
  pierogi:new MakeRecipe(0.5, 0, 1, 0, 0.5, 0, 0, ["none"], ["twig", "mandrake"]),
  kabobs:new MakeRecipe(0.5, 0, 0, 0, 0, 0, 0, ["twig"], ["none"]),
  //2
  honeyHam:new MakeRecipe(2, 0, 0, 0, 0, 1, 0, ["none"], ["twig"]),
  //meat value greater than 2 will make honey ham
  honeyNuggets:new MakeRecipe(0.5, 0, 0, 0, 0, 1, 0, ["none"], ["twig"]),
  //1
  froggieBunwich:new MakeRecipe(0, 0, 0, 0, 0.5, 0, 0, ["frog legs"], ["none"]),
  dragonpie:new MakeRecipe(0, 0, 0, 0, 0, 0, 0, ["dragon fruit"], ["meat"]),
  butterMuffin:new MakeRecipe(0, 0, 0, 0, 0.5, 0, 0, ["butterfly wings"], ["meat"]),
  /*Stuffed eggplant technically needs 0.5 vegetable
  points, but an eggplant counts as 1*/
  stuffedEggplant:new MakeRecipe(0, 0, 0, 0, 1.5, 0, 0, ["eggplant"], ["none"]),
  //0
  meatyStew:new MakeRecipe(3, 0, 0, 0, 0, 0, 0, ["none"], ["twig"]),
  ratatouille:new MakeRecipe(0, 0, 0, 0, 0.5, 0, 0, ["none"], ["meat", "twig"]),
  fistFullOfJam:new MakeRecipe(0, 0, 0, 0.5, 0, 0, 0, ["none"], ["meat", "vegetables", "twig"]),
  fruitMedley:new MakeRecipe(0, 0, 0, 3, 0, 0, 0, ["none"], ["dragon fruit", "meat", "vegetables"]),
  //-1
  meatballs:new MakeRecipe(0.5, 0, 0, 0, 0, 0, 0, ["none"], ["twig"])
  //Wet Goop is any invalid recipe with -2 priority
};
//Checking if the ingredients match a dish
function checkMeat(dish, ingredients){
  return ingredients.meat >= dish.meat;
}
function checkMonster(dish, ingredients){
  return ingredients.monsterFood >= dish.monsterFood;
}
function checkEggs(dish, ingredients){
  return ingredients.eggs >= dish.eggs;
}
function checkFruit(dish, ingredients){
  return ingredients.fruit >= dish.fruit;
}
function checkVeg(dish, ingredients){
  return ingredients.vegetables >= dish.vegetables;
}
function checkSweet(dish, ingredients){
  return ingredients.sweetners >= dish.sweetners;
}
function checkFish(dish, ingredients){
  return ingredients.fish >= dish.fish;
}
function checkRequirements(dish, ingredients){
  let requirements = dish.requirements;
  if (requirements[0] == "none"){
    return true;
  }
  for (let i = 0; i < requirements.length; i ++){
    //The required ingredient will never be a category
    let required = requirements[i];
    if (typeof required == "object"){
      let amount = 0;
      ingredients.forEach(val => required[0] == val ? amount ++: null);
      if (required[1] > amount){
        return false;
      }
    } else if (ingredients.indexOf(required) == -1){
      return false;
    }
  }
  return true;
}
function checkRestrictions(dish, ingredients){
  let restrictions = dish.restrictions;
  if (restrictions[0] == "none"){
    return true;
  }
  for (let i = 0; i < restrictions.length; i ++){
    let restricted = restrictions[i];
    if (types.indexOf(restricted) == -1){
      if (ingredients.indexOf(restricted) != -1){
        return false;
      }
    } else{
      let category = ingredientTypes[types.indexOf(restricted)];
      for (let j = 0; j < category.length; j ++){
        if (ingredients.indexOf(category[j]) != -1){
          return false;
        }
      }
    }
  }
  return true;
}
function checkDish(dish){
  return checkMeat(dish, ingredientValues) 
  && checkMonster(dish, ingredientValues) && checkEggs(dish, ingredientValues) 
  && checkFruit(dish, ingredientValues) && checkVeg(dish, ingredientValues) 
  && checkSweet(dish, ingredientValues) && checkFish(dish, ingredientValues) 
  && checkRequirements(dish, ingredients) 
  && checkRestrictions(dish, ingredients);
}
function findDish(){
  let dishes = [];
  if (checkDish(recipes.unagi)){
    //40
    dishes.push("Unagi");
  } else if (checkDish(recipes.mandrakeSoup)|| checkDish(recipes.pumpkinCookie) 
  || checkDish(recipes.powderCake) || checkDish(recipes.fishSticks) 
  || checkDish(recipes.fishTacos) || checkDish(recipes.baconEggs) 
  || checkDish(recipes.monsterLasagna) || checkDish(recipes.taffy) 
  || checkDish(recipes.turkeyDinner1) || checkDish(recipes.turkeyDinner2) || checkDish(recipes.waffles)){
    //10
    if (checkDish(recipes.mandrakeSoup)){
      dishes.push("Mandrake Soup");
    }
    if (checkDish(recipes.pumpkinCookie)){
      dishes.push("Pumpkin Cookie");
    }
    if (checkDish(recipes.powderCake)){
      dishes.push("Powder Cake");
    }
    if (checkDish(recipes.fishSticks)){
      dishes.push("Fish Sticks");
    }
    if (checkDish(recipes.fishTacos)){
      dishes.push("Fish Tacos");
    }
    if (checkDish(recipes.baconEggs)){
      dishes.push("Bacon and Eggs");
    }
    if (checkDish(recipes.monsterLasagna)){
      dishes.push("Monster Lasagna");
    }
    if (checkDish(recipes.taffy)){
      dishes.push("Taffy");
    }
    if (checkDish(recipes.turkeyDinner1) || checkDish(recipes.turkeyDinner2)){
      dishes.push("Turkey Dinner");
    }
    if (checkDish(recipes.waffles)){
      dishes.push("Waffles");
    }
  } else if (checkDish(recipes.pierogi) || checkDish(recipes.kabobs)){
    //5
    if (checkDish(recipes.pierogi)){
      dishes.push("Pierogi");
    }
    if (checkDish(recipes.kabobs)){
      dishes.push("Kabobs");
    }
  } else if (checkDish(recipes.honeyHam) || checkDish(recipes.honeyNuggets)){
    if (checkDish(recipes.honeyHam)){
      //2
      dishes.push("Honey Ham");
    } else if (checkDish(recipes.honeyNuggets)){
      dishes.push("Honey Nuggets");
    }
  } else if (checkDish(recipes.froggieBunwich) 
    || checkDish(recipes.dragonpie) || checkDish(recipes.butterMuffin)
    || checkDish(recipes.stuffedEggplant)){
    // 1
    if (checkDish(recipes.froggieBunwich)){
      dishes.push("Froggie Bunwich");
    }
    if (checkDish(recipes.dragonpie)){
      dishes.push("Dragonpie");
    }
    if (checkDish(recipes.butterMuffin)){
      dishes.push("Butter Muffin");
    }
    if (checkDish(recipes.stuffedEggplant)){
      dishes.push("Stuffed Eggplant");
    }
  } else if (checkDish(recipes.meatyStew) || checkDish(recipes.ratatouille) 
  || checkDish(recipes.fistFullOfJam) || checkDish(recipes.fruitMedley)){
    if (checkDish(recipes.meatyStew)){
      dishes.push("Meaty Stew");
    }
    if (checkDish(recipes.ratatouille)){
      dishes.push("Ratatouille");
    }
    if (checkDish(recipes.fruitMedley)){
      dishes.push("Fruit Medley");
    } else if (checkDish(recipes.fistFullOfJam)){
      dishes.push("Fist Full of Jam");
    }
  } else if (checkDish(recipes.meatballs)){
    if (checkDish(recipes.meatballs)){
      dishes.push("Meatballs");
    }
  } else if (ingredients.length == 4){
    dishes.push("Wet Goop");
  } else{
    
  }
  displayDish(dishes);
}
//Search bars
function searchButtons(event){
  let input = search.val();
  if (input){
    for (let i = 0; i < buttons.length; i ++){
      let button = buttons[i];
      if (button.getAttribute("id").indexOf(input) == -1){
        button.style.display = "none";
      } else{
        button.style.display = "inline-block";
      }
    }
  } else{
    buttons.css("display", "inline-block");
  }
}
//declaring event functions
buttons.click(addIngredients);
td.click(removeIngredients);
search.keyup(searchButtons);
