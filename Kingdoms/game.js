//jshint maxerr:1000
$();
"use strict";
//Declaring variables
let turn = "red";
let redStats = {};
let blueStats = {};
let redBuild = false;
let blueBuild = false;
let redAbilities;
let blueAbilities;
//Declaring map values
let mapHeight = 20;
let mapWidth = 16;
let kingdomWidth = 6;
let kingdomHeight = 3;
let redColumnOffset = 5;
let redRowOffset = 0;
let blueColumnOffset = 5;
let blueRowOffset = 17;
//Declaring HTML elements
let gameStarter = $("#gameStarter");
let chooseAbilities = $("#chooseAbilities");
let redAbility = $("#redAbility");
let blueAbility = $("#blueAbility");
let redName = $("#redName");
let blueName = $("#blueName");
let select1 = $("#select1");
let select2 = $("#select2");
let turns = 0;
let redGold, redTroops, blueGold, blueTroops, redMine, redVillage, redBarrack, redGuard, blueMine, blueVillage, blueBarrack, blueGuard;
//Declaring functions
function moveArmies(event){
  let element = event.target;
  element = $(`#${element.getAttribute("id")}`);
  function moveArmy(army, enemy){
    changeClass($(`.${army}Army`), [`${army}Army`], [`${army}Space`]);
    if (getClass(element)){
      changeClass(element, [`${enemy}Space`, `${army}Space`], [`${army}Army`]);
    } else{
      changeClass(element, [], [`${army}Army`]);
    }
    colorSpaces();
  }
  function removeArmy(army, enemy, state){
    console.log(state);
    if (state == "attacker wins"){
      changeClass($(`.${army}Army`), [`${army}Army`], [`${army}Space`]);
      changeClass($(`.${enemy}Army`), [`${enemy}Army`, `${enemy}Space`], [`${army}Army`]);
      console.log(`${enemy}Space`);
    } else{
      changeClass($(`.${army}Army`), [`${army}Army`], [`${army}Space`]);
    }
    colorSpaces();
  }
  switch(element.attr("class")){
    case "kingdom1":
      break;
    case "kingdom2":
      break;
    default:
      //let color = element.css("background-color");
      switch(element.css("background-color")){
        //blue
        case "rgb(0, 0, 255)":
          //red attacking blue
          console.log(turn == "blue" && checkLegalMove($(".blueArmy"), element));
          if (turn == "red" && checkLegalMove($(".redArmy"), element)){
            let state = battleArmies(redStats, blueStats);
            removeArmy("red", "blue", state);
            turn = "blue";
            turns += 0.5;
            changeTurn();
          }
          break;
        //red
        case "rgb(255, 0, 0)":
          //blue attacking red
          console.log(turn == "blue" && checkLegalMove($(".blueArmy"), element));
          if (turn == "blue" && checkLegalMove($(".blueArmy"), element)){
            let state = battleArmies(blueStats, redStats);
            removeArmy("blue", "red", state);
            turn = "red";
            turns += 0.5;
            changeTurn();
          }
          break;
        //pink
        case "rgb(255, 192, 203)":
          if (redBuild){
            switch(redBuild){
              case "Mine":
                buildMine(element, "red");
                break;
              case "Village":
                buildVillage(element, "red");
                break;
              case "Barrack":
                buildBarrack(element, "red");
                break;
              default:
                console.log(redBuild);
                break;
            }
            redBuild = false;
          } else if (turn == "blue" && checkLegalMove($(".blueArmy"), element)){
            moveArmy("blue", "red");
            turn = "red";
            turns += 0.5;
            changeTurn();
          } else if (checkLegalMove($(".redArmy"), element)){
            moveArmy("red", "blue");
            turn = "blue";
            turns += 0.5;
            changeTurn();
          }
          colorSpaces();
          break;
        //aqua
        case "rgb(0, 255, 255)":
          if (blueBuild){
            switch(blueBuild){
              case "Mine":
                buildMine(element, "blue");
                break;
              case "Village":
                buildVillage(element, "blue");
                break;
              case "Barrack":
                buildBarrack(element, "blue");
                break;
              default:
                console.log(blueBuild);
                break;
            }
            blueBuild = false;
          } else if (turn == "red" && checkLegalMove($(".redArmy"), element)){
            moveArmy("red", "blue");
            turn = "blue";
            turns += 0.5;
            changeTurn();
          } else if (checkLegalMove($(".blueArmy"), element)){
            moveArmy("blue", "red");
            turn = "red";
            turns += 0.5;
            changeTurn();
          }
          colorSpaces();
          break;
        //any other color
        default:
          switch(turn){
            case "red":
              //moving red
              if ($(".redArmy")[0] === undefined){
                if (/redStart/g.test(element.attr("class"))){
                  changeClass(element, ["blueSpace", "redSpace"], ["redArmy"]);
                  colorSpaces();
                  turn = "blue";
                  turns += 0.5;
                  changeTurn();
                }
              } else if (checkLegalMove($(".redArmy"), element)){
                moveArmy("red", "blue");
                turn = "blue";
                turns += 0.5;
                changeTurn();
              }
              break;
            case "blue":
              //moving blue
              if ($(".blueArmy")[0] === undefined){
                if (/blueStart/g.test(element.attr("class"))){
                  changeClass(element, ["blueSpace", "redSpace"], ["blueArmy"]);
                  colorSpaces();
                  turn = "red";
                  turns += 0.5;
                  changeTurn();
                }
              } else if (checkLegalMove($(".blueArmy"), element)){
                moveArmy("blue", "red");
                turn = "red";
                turns += 0.5;
                changeTurn();
              }
              break;
          }
      }
  }
}
//This changes the classes for the elements
function changeClass(element, remove, add){
  let classes = element.attr("class");
  if(getClass(element)){
    classes = classes.split(" ");
    classes.forEach((val, index) => {
      if(remove.indexOf(val) != -1){
        classes.splice(index, 1);
      }
    });
    if(add.length !== 0){
      add.forEach(val => {
        classes.push(val);
      });
    }
    classes = classes.join(" ");
  } else {
    classes = [];
    add.forEach(val => {
      classes.push(val);
    });
  }
  element.attr("class", classes);
  colorSpaces();
}
//Colors in spaces belonging to respective armies
function colorSpaces(){
  $(".redArmy").css("background-color", "red");
  $(".blueArmy").css("background-color", "blue");
  $(".redSpace").css("background-color", "pink");
  $(".blueSpace").css("background-color", "aqua");
}
//This checks if a player is moving to an adjacent square
function checkLegalMove(start, square){
  start = start.attr("id").split("-");
  square = square.attr("id").split("-");
  startX = start[0];
  startY = start[1];
  squareX = square[0];
  squareY = square[1];
  return (Math.abs(startX - squareX) <= 1 && Math.abs(startY - squareY) <= 1);
}
//This function is called when two parties collide
function battleArmies(attacker, defender){
  let attackPower = attacker.troops * attacker.morale;
  let defenderPower = defender.troops * defender.morale;
  if (attackPower > defenderPower){
    return "attacker wins";
  } else{
    return "defender wins";
  }
}
//This changes whose turn it is
function changeTurn(){
  $("#displayTurn").text(turn);
  if (turns % 1 === 0){
    redStats.addValues();
    blueStats.addValues();
    redTroops.text(redTroops.text().match(/[\D]/g).join("") + redStats.troops);
    redGold.text(redGold.text().match(/[\D]/g).join("") + redStats.gold);
    blueTroops.text(blueTroops.text().match(/[\D]/g).join("") + blueStats.troops);
    blueGold.text(blueGold.text().match(/[\D]/g).join("") + blueStats.gold);
  }
}
//This adds attributes to a certain amount of rows and columns
//i represents the columns, j represents the rows
function loopThroughCells(rowOffset, height, columnOffset, width, attr, name){
  for (let i = rowOffset; i < Number(rowOffset) + Number(height); i ++){
    for (let j = columnOffset; j < Number(columnOffset) + Number(width); j ++){
      let td = $(`#${i + "-" + j}`);
      changeClass(td, [], [name]);
    }
  }
}
//Makes the starting points for each player
function defineAllStartingPoints(kingdom, height, width, rowOffset, columnOffset){
  makeStartingPoints(kingdom, height, width, rowOffset, columnOffset);
}
function makeStartingPoints(kingdom, height, width, rowOffset, columnOffset){
  if (rowOffset > 0){
    loopThroughCells(rowOffset - 1, 1, columnOffset, width, "class", `${kingdom}Start`);
  }
  if (rowOffset + height < mapHeight){
    loopThroughCells(rowOffset + height, 1, columnOffset, width, "class", `${kingdom}Start`);
  }
  if (columnOffset > 0){
    loopThroughCells(rowOffset, height, columnOffset - 1, 1, "class", `${kingdom}Start`);
  }
  if (columnOffset + width < mapWidth){
    loopThroughCells(rowOffset, height, columnOffset + width, 1, "class", `${kingdom}Start`);
  }
}
//Setting player stats
function setStats(color, role){
  switch(role){
    case "Warrior":
      (color == "red" ? redStats = new MakeStats(role, 0.5, 100, 30, 15) : blueStats = new MakeStats(role, 0.5, 100, 30, 15));
      break;
    case "Wizard":
      (color == "red" ? redStats = new MakeStats(role, 0.75, 75, 40, 10) : blueStats = new MakeStats(role, 0.75, 75, 40, 10));
      break;
    case "Jester":
      (color == "red" ? redStats = new MakeStats(role, 1, 50, 50, 5) : blueStats = new MakeStats(role, 1, 50, 50, 5));
      break;
    default:
      break;
  }
}
//Constructing actions
function MakeStats(role, morale, troops, makeGold, makeTroops){
  this.role = role;
  this.morale = morale;
  this.troops = troops;
  this.makeGold = makeGold;
  this.makeTroops = makeTroops;
  this.gold = 0;
  this.addValues = () => {
    this.gold += makeGold;
    this.troops += makeTroops;
  };
}
//Getting the class of an element
function getClass(square){
  if (square.attr("class") !== undefined){
    return square.attr("class");
  } else{
    return "";
  }
}
//Making the character sheets
function setSheets(){
  redAbility.append(`<h2>${redName.val()}</h2>`);
  redAbility.append(`<p>Class:${redStats.role}</p>`);
  blueAbility.append(`<h2>${blueName.val()}</h2>`);
  blueAbility.append(`<p>Class:${blueStats.role}</p>`);
  redAbility.append(`<p id='redTroops'></p><p id='redGold'></p>`);
  blueAbility.append(`<p id='blueTroops'></p><p id='blueGold'></p>`);
  switch(redStats.role){
    case "Warrior":
      redAbilities = "<button id='redCharge'>Charge</button>";
      break;
    case "Wizard":
      redAbilities = "<button id='redDestroy'>Destroy development</button><button id='redThwart'>Thwart</button>";
      break;
    case "Jester":
      redAbilities = "<button id='redMock'>Mock</button><button id='redSpeech'>Speech</button>";
      break;
  }
  switch(blueStats.role){
    case "Warrior":
      blueAbilities = "<button id='blueCharge'>Charge</button>";
      break;
    case "Wizard":
      blueAbilities = "<button id='blueDestroy'>Destroy development</button><button id='blueThwart'>Thwart</button>";
      break;
    case "Jester":
      blueAbilities = "<button id='blueMock'>Mock</button><button id='blueSpeech'>Speech</button>";
      break;
  }
  redAbility.append(redAbilities);
  blueAbility.append(blueAbilities);
  redTroops = $("#redTroops");
  redGold = $("#redGold");
  blueTroops = $("#blueTroops");
  blueGold = $("#blueGold");
  redTroops.text("Troops: " + redStats.troops);
  redGold.text("Gold: " + redStats.gold);
  blueTroops.text("Troops: " + blueStats.troops);
  blueGold.text("Gold: " + blueStats.gold);
  redAbility.append("<button id = 'redMine'>Build mine</button><button id = 'redVillage'>Build village</button><button id = 'redBarrack'>Build barrack</button><button id = 'redGuard'>Build guard tower</button>");
  blueAbility.append("<button id = 'blueMine'>Build mine</button><button id = 'blueVillage'>Build village</button><button id = 'blueBarrack'>Build barrack</button><button id = 'blueGuard'>Build guard tower</button>");
  redMine = $("#redMine");
  redVillage = $("#redVillage");
  redBarrack = $("#redBarrack");
  redGuard = $("#redGuard");
  blueMine = $("#blueMine");
  blueVillage = $("#blueVillage");
  blueBarrack = $("#blueBarrack");
  blueGuard = $("#blueGuard");
}
//Building Mine
function testMine(element, color){
  let x = Number(element.attr("id").split('-')[0]);
  let y = Number(element.attr("id").split('-')[1]);
  //checks all of the square for the mine is inhabited by the player
  let condition1 = getClass($(`#${(x) + "-" + (y)}`)).indexOf(`${color}Space`) != -1;
  let condition2 = getClass($(`#${(x+1) + "-" + y}`)).indexOf(`${color}Space`) != -1;
  let condition3 = getClass($(`#${x + "-" + (y+1)}`)).indexOf(`${color}Space`) != -1;
  let condition4 = getClass($(`#${(x+1) + "-" + (y+1)}`)).indexOf(`${color}Space`) != -1;
  let condition5 = getClass($(`#${(x+2) + "-" + (y)}`)).indexOf(`${color}Space`) != -1;
  let condition6 = getClass($(`#${(x+2) + "-" + (y+1)}`)).indexOf(`${color}Space`) != -1;
  return condition1 && condition2 && condition3 && condition4 && condition5 && condition6;
}
//Building Village
function testVillage(element, color){
  let x = Number(element.attr("id").split('-')[0]);
  let y = Number(element.attr("id").split('-')[1]);
  //checks all of the square for the mine is inhabited by the player
  let condition1 = getClass($(`#${(x) + "-" + (y)}`)).indexOf(`${color}Space`) != -1;
  let condition2 = getClass($(`#${(x+1) + "-" + (y)}`)).indexOf(`${color}Space`) != -1;
  let condition3 = getClass($(`#${(x) + "-" + (y+1)}`)).indexOf(`${color}Space`) != -1;
  let condition4 = getClass($(`#${(x+1) + "-" + (y+1)}`)).indexOf(`${color}Space`) != -1;
  return condition1 && condition2 && condition3 && condition4;
}
//Building Barracks
function testBarrack(element, color){
  let x = Number(element.attr("id").split('-')[0]);
  let y = Number(element.attr("id").split('-')[1]);
  //checks all of the square for the mine is inhabited by the player
  let condition1 = getClass($(`#${(x) + "-" + (y)}`)).indexOf(`${color}Space`) != -1;
  let condition2 = getClass($(`#${(x+1) + "-" + (y)}`)).indexOf(`${color}Space`) != -1;
  let condition3 = getClass($(`#${(x) + "-" + (y+1)}`)).indexOf(`${color}Space`) != -1;
  let condition4 = getClass($(`#${(x+1) + "-" + (y+1)}`)).indexOf(`${color}Space`) != -1;
  let condition5 = getClass($(`#${(x) + "-" + (y+2)}`)).indexOf(`${color}Space`) != -1;
  let condition6 = getClass($(`#${(x+1) + "-" + (y+2)}`)).indexOf(`${color}Space`) != -1;
  return condition1 && condition2 && condition3 && condition4 && condition5 && condition6;
}
//Building events
function buildMine(element, color){
  if (testMine(element, color)){
    let id = element.attr("id");
    id = id.split("-");
    let x = id[0];
    let y = id[1];
    loopThroughCells(x, 3, y, 2, "class", `${color}Mine`);
    changeClass($(`.${color}Mine`), [`${color}Space`], []);
    
  }
}
function buildVillage(element, color){
  if (testVillage(element, color)){
    let id = element.attr("id");
    id = id.split("-");
    let x = id[0];
    let y = id[1];
    loopThroughCells(x, 2, y, 2, "class", `${color}Village`);
    changeClass($(`.${color}Village`), [`${color}Space`], []);
    return true;
  }
}
function buildBarrack(element, color){
  if (testBarrack(element, color)){
    let id = element.attr("id");
    id = id.split("-");
    let x = id[0];
    let y = id[1];
    loopThroughCells(x, 3, y, 2, "class", `${color}Barrack`);
    changeClass($(`.${color}Barrack`), [`${color}Space`], []);
    return true;
  }
}
//Starting the game
function startTheGame(){
  chooseAbilities.css("display", "none");
  redAbility.css("display", "flex");
  blueAbility.css("display", "flex");
  $("header").toggle();
  //Setting up the map
  let map = $("table");
  for (let i = 0; i < mapHeight; i ++){
    let row = "<tr>";
    for (let j = 0; j < mapWidth; j ++){
      row += `<td id = "${i + "-" + j}"></td>`;
    }
    row += "</tr>";
    map.append(row);
  }
  loopThroughCells(redRowOffset, kingdomHeight, redColumnOffset, kingdomWidth, "class", "kingdom1");
  loopThroughCells(blueRowOffset, kingdomHeight, blueColumnOffset, kingdomWidth, "class", "kingdom2");
  defineAllStartingPoints("blue", kingdomHeight, kingdomWidth, blueRowOffset, blueColumnOffset);
  defineAllStartingPoints("red", kingdomHeight, kingdomWidth, redRowOffset, redColumnOffset);
  let td = $("td");
  td.click(moveArmies);
  setStats("red", select1.val());
  setStats("blue", select2.val());
  setSheets();
  //Building events
  redMine.click(() => redBuild = "Mine");
  redVillage.click(() => redBuild = "Village");
  redBarrack.click(() => redBuild = "Barrack");
  redGuard.click(() => redBuild = "Guard");
  blueMine.click(() => blueBuild = "Mine");
  blueVillage.click(() => blueBuild = "Village");
  blueBarrack.click(() => blueBuild = "Barrack");
  blueGuard.click(() => blueBuild = "Guard");
}
//Javascript events
gameStarter.click(startTheGame);
/*
Table with 20 rows and 16 columns
Kingdoms take up 3 rows and columns
Viliages take up 2 rows and 2 columns
Gold mines take up 3 rows and 2 columns
Barracks take up 2 rows and 3 columns
*/
