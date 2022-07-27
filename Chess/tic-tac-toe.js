//jshint maxerr: 1000
let game = document.getElementById("game");
let ctx = game.getContext("2d");
let resetGame = document.getElementById("resetGame");
const width = 300;
const height = 300;
const circleRadius = 20;
const lineOffset = 20;
let board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
let turn = 0;
let gameOver = false;

window.onload = function() {
  drawGame();
};

function drawGame() {
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, width, height);
  
  ctx.strokeStyle = "black";
  
  ctx.beginPath();
  ctx.moveTo(width / 3, 0);
  ctx.lineTo(width / 3, height);
  ctx.stroke();
  ctx.closePath();
  
  ctx.beginPath();
  ctx.moveTo(width * 2 / 3, 0);
  ctx.lineTo(width * 2 / 3, height);
  ctx.stroke();
  ctx.closePath();
  
  ctx.beginPath();
  ctx.moveTo(0, height / 3);
  ctx.lineTo(width, height / 3);
  ctx.stroke();
  ctx.closePath();
  
  ctx.beginPath();
  ctx.moveTo(0, height * 2 / 3);
  ctx.lineTo(width, height * 2 / 3);
  ctx.stroke();
  ctx.closePath();

  for (let i = 0; i < board.length; i ++) {
    let row = board[i];
    for (let j = 0; j < row.length; j ++) {
      let symbol = row[j];
      switch(symbol) {
        //Circle
        case 2:
          ctx.beginPath();
          ctx.arc(j * 100 + 50, i * 100 + 50, circleRadius, 0, 2 * Math.PI);
          ctx.stroke();
          ctx.closePath();
          break;
        case 1:
          ctx.beginPath();
          ctx.moveTo(j * 100 + 50 - lineOffset, i * 100 + 50 - lineOffset);
          ctx.lineTo(j * 100 + 50 + lineOffset, i * 100 + 50 + lineOffset);
          ctx.stroke();
          ctx.moveTo(j * 100 + 50 + lineOffset, i * 100 + 50 - lineOffset);
          ctx.lineTo(j * 100 + 50 - lineOffset, i * 100 + 50 + lineOffset);
          ctx.stroke();
          ctx.closePath();
          break;
      }
    }
  }
  
  checkWinner();
}

game.onclick = function(event) {
  if (gameOver) {
    return;
  }
  let x = event.offsetX;
  let y = event.offsetY;
  console.log(x, y);
  let gridRow = Math.floor(y / (height / 3));
  let gridColumn = Math.floor(x / (width / 3));
  if (board[gridRow][gridColumn] === 0) {
    board[gridRow][gridColumn] = turn + 1;
    changeTurn();
    console.log(turn);
    drawGame();
  }
};

function changeTurn() {
  turn += 1;
  turn %= 2;
}

function checkWinner() {
  //Checks everything horizontally
  for (let i = 0; i < board.length; i ++) {
    let row = board[i];
    for (let j = 0; j < row.length - 2; j ++) {
      if (row[j] == row[j + 1] && row[j] == row[j + 2] && row[j] !== 0) {
        gameOver = true;
        endGame(row[j]);
      }
    }
  }
  
  //Checks everything vertically
  for (let i = 0; i < board.length - 2; i ++) {
    let row = board[i];
    for (let j = 0; j < row.length; j ++) {
      if (row[j] == board[i + 1][j] && row[j] == board[i + 2][j] && row[j] !== 0) {
        gameOver = true;
        endGame(row[j]);
      }
    }
  }
  
  //Checks everything diagonally right
  for (let i = 0; i < board.length - 2; i ++) {
    let row = board[i];
    for (let j = 0; j < row.length - 2; j ++) {
      if (board[i + 1] === undefined || board[i + 2] === undefined) {
        break;
      }
      if (row[j] == board[i + 1][j + 1] && row[j] == board[i + 2][j + 2] && row[j] !== 0) {
        gameOver = true;
        endGame(row[j]);
      }
    }
  }
  
  //Checks everything diagonally left
  for (let i = board.length - 1; i > 1; i --) {
    let row = board[i];
    for (let j = row.length - 1; i > 1; j --) {
      if (board[i + 1] === undefined || board[i + 2] === undefined) {
        break;
      }
      if (row[j] == board[i + 1][j - 1] && row[j] == board[i + 2][j - 2] && row[j] !== 0) {
        gameOver = true;
        endGame(row[j]);
      } 
    }
  }
  
  //Checks if there are no remaining moves
  let freeSpace = false;
  board.forEach(row => {
    row.forEach(val => {
      if (val === 0) {
        freeSpace = true;
      }
    });
  });
  
  if (freeSpace) {
    return;
  }
  
  if (gameOver) {
    endGame(0);
  }
}

function endGame(winner) {
  if (winner == 1) {
    alert("X won");
  } else if (winner == 2) {
    alert("O won");
  } else {
    alert("Tie!");
  }
}

function reset() {
  board.forEach((row, indexR, arr) => {
    row.forEach((val, indexV) => {
      arr[indexR][indexV] = 0;
    });
  });
  turn = 0;
  drawGame();
  gameOver = false;
}

resetGame.onclick = reset;
