var rock = $('#Rock')[0];
var paper = $('#Paper')[0];
var scissors = $('#Scissors')[0];
var aiResult = $('#aiChoice')[0];
var result = $('#result')[0];
var choices = {
  0:'rock',
  1:'paper',
  2:'scissors',
};
function aiChoice(){
  return choices[Math.floor(Math.random()*3)];
}

rock.onclick = function(){
  switch(aiChoice()){
    case 'rock':
      result.innerText = "Tie!";
      aiResult.innerText = "Rock";
      break;
    case 'paper':
      result.innerText = "You lose!";
      aiResult.innerText = "Paper";
      break;
    case 'scissors':
      result.innerText = "You win!";
      aiResult.innerText = "Scissors";
      break;
  }
};
paper.onclick = function(){
  switch(aiChoice()){
    case 'rock':
      result.innerText = "You Win!";
      aiResult.innerText = "Rock";
      break;
    case 'paper':
      result.innerText = "Tie!";
      aiResult.innerText = "Paper";
      break;
    case 'scissors':
      result.innerText = "You lose!";
      aiResult.innerText = "Scissors";
      break;
  }
};
scissors.onclick = function(){
  switch(aiChoice()){
    case 'rock':
      result.innerText = "You lose!";
      aiResult.innerText = "Rock";
      break;
    case 'paper':
      result.innerText = "You win!";
      aiResult.innerText = "Paper";
      break;
    case 'scissors':
      result.innerText = "Tie!";
      aiResult.innerText = "Scissors";
      break;
  }
};
