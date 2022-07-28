/*jshint loopfunc: true*/
//jshint maxerr: 1000
let menu = $("#menu");
"use strict";
let start = $("#start");
let instructions = $("#instructions");
let rules = $("#rules");
let game = $("#game");
let backMenu = $(".backMenu");
let backGame = $(".backGame");
let clapDisplay = $("#claps");
let gameScore = $("#gameScore");
let score = $("#score");
let message = $("#message");
let clapSound = $("audio")[0];
let claps = [];
let people = 2;
let playerClaps = 0;
const roundCap = 11;
let rounds = 0;
let startClapping, date, reaction, time, correctTime, delay, checkRhythm;
let scoreKeeping = [];
let gameOver = true;

function startRhythm(){
  gameOver = false;
  if (rounds >= roundCap){
    setTimeout(() => {rounds = 0;
    endGame();}, 500);
    return;
  }
  date = new Date();
  let seconds = date.getSeconds();
  let milliseconds = date.getMilliseconds();
  time = seconds + milliseconds / 1000;
  delay = generateDelay() * 1000;
  //delay = 200;
  startClapping = setInterval(peopleClap, delay);
  correctTime = delay * (people + 1) / 1000;
  setTimeout(reset, delay * (people + 1) + delay / 2);
  setTimeout(testRhythm, delay * (people + 1) + delay / 3);
  rounds += 1;
}
function peopleClap(){
  if (claps.length < people){
    claps.push("!");
    clapDisplay.html(claps.join(" "));
    clapSound.load();
    clapSound.play();
  } else{
    clearInterval(startClapping);
  }
}
function testRhythm(){
  if (reaction === undefined){
    scoreKeeping.push([time.toFixed(2), 0, correctTime.toFixed(2), 0, "No"]);
    message.text("Bad!");
  } else if (playerClaps > 1){
    scoreKeeping.push([time.toFixed(2), "-", correctTime.toFixed(2), "-", "No"]);
    message.text("Bad!");
  } else{
    let theTime;
    let isRight;
    if (time > reaction){
      theTime = 60 - time + reaction;
      isRight = theTime + 0.05 >= correctTime && theTime - 0.1 <= correctTime;
      scoreKeeping.push([time.toFixed(2), reaction.toFixed(2), correctTime.toFixed(2), theTime.toFixed(2), isRight ? "Yes" : "No"]);
    } else{
      theTime = reaction - time;
      isRight = theTime + 0.05 >= correctTime && theTime - 0.1 <= correctTime;
      scoreKeeping.push([time.toFixed(2), reaction.toFixed(2), correctTime.toFixed(2), theTime.toFixed(2), isRight ? "Yes" : "No"]);
    }
    if (isRight){
      message.text("Good!");
    } else{
      message.text("Bad!");
    }
  }
}

document.onkeydown = function(event){
  if (event.key === " " && (!gameOver)){
    playerClap();
  }
};
function playerClap(){
  clapSound.load();
  clapSound.play();
  claps.push("!");
  playerClaps ++;
  let date = new Date();
  let seconds = date.getSeconds();
  let milliseconds = date.getMilliseconds();
  reaction = seconds + milliseconds / 1000;
  clapDisplay.html(clapDisplay.html() + " <span style = 'color: red; font-weight: none'>!</span>");
}
function generateDelay(){
  let delay = Math.abs((Math.random() * people * 2) - people );
  if (delay < 0.3) {
    delay = 0.3;
  }
  return delay;
}
function reset(){
  claps.splice(0, claps.length);
  playerClaps = 0;
  reaction = undefined;
  startRhythm();
}

function endGame(){
  game.toggle();
  gameScore.toggle();
  clearInterval();
  let data = "<tbody>";
  for (let i = 0; i < roundCap; i ++){
    let row = scoreKeeping[i];
    data += "<tr>";
    row.forEach(val => {
      data += `<td>${val}</td>`;
    });
    data += "</tr>";
  }
  data += "</tbody>";
  score.html(score.html() + data);
  scoreKeeping = [];
}

instructions.click(() => {
  menu.toggle();
  rules.toggle();
});

backMenu.click(event => {
  menu.toggle();
  $(event.target).parent().css("display", "none");
});

backGame.click(event => {
  game.toggle();
  $(event.target).parent().css("display", "none");
  startRhythm();
  score.html("<thead><tr><th>Time started clapping</th><th>Your Time</th><th>Correct Time</th><th>Difference</th><th>Success?</th></tr></thead>");
});

start.click(() => {
  menu.toggle();
  game.toggle();
  startRhythm();
});
