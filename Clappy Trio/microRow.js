//HTML
let menu = $("#menu");
let instructions = $("#instructions");
let credits = $("#credits");
let game = $("#game");
let toGame = $(".toGame");
//Audio
let clap = $("#clap");
let triangle = $("#triangle");
let whistle = $("#whistle");
let whistle2 = $("#whistle2");
//Values
let delay = 3;
let action, startTime, reaction, startSeconds, startMilliseconds;
let gameOver = false;
let strikes = [];
let moves = [];
let clapTimes = [];

function rhythm() {
  let date = new Date();
  startSeconds = date.getSeconds();
  startMilliseconds = date.getMilliseconds();
  startTime = startSeconds + startMilliseconds / 1000;
  switch(randomNumber(3)){
    case 2:
      action = "triangle";
      break;
    case 1:
      action = "whistle";
      break;
    case 0:
      action = "move";
      break;
  }
}

function checkRhythm() {
  switch(action){
    case "triangle":
      let newClapTimes = clapTimes.map(val => {
        let time = val - startTime;
        if (time < 0){
          time += 60;
        }
        return time;
      });
      newClapTimes = newClapTimes.map(val => {
        
      });
      break;
      
  }
}

function playerMoves() {
  let date = new Date();
  let seconds = date.getSeconds();
  let milliseconds = date.getMilliseconds();
  clapTimes.push(seconds + milliseconds / 1000);
  moves.push(1);
  clap[0].load();
  clap[0].play();
}

document.onkeydown = function(event) {
  if (event.key == " " && (!gameOver)){
    playerMoves();
    
  }
};

function randomNumber(max, min = 0) {
  return Math.floor(Math.random() * max + min);
}

toGame.click(event => {
  $(event.target).parent().css("display", "none");
  game.css("display", "block");
  gameOver = false;
  //setTimeout(rhythm, delay * 1000);
});
//Triangle plays after 400 milliseconds and has a delay of 600 milliseconds. The claps should start after 200 milliseconds with 400 milliseconds between them
//Whistles play with a 160 millisecond gap and a delay of 600 milliseconds. The claps should start after 200 milliseconds, then another 200 milliseconds
let debugDelay = 0.2;

function playAudio(audio){
  audio[0].load();
  audio[0].play();
  console.log("2");
}
