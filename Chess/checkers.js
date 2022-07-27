//jshint maxerr: 1000
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let board = [
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [2, 0, 2, 0, 2, 0, 2, 0],
  [0, 2, 0, 2, 0, 2, 0, 2],
  [2, 0, 2, 0, 2, 0, 2, 0],
];
let checkerPieces = document.getElementById("checkerPieces");
let checkerBoard = document.getElementById("checkerBoard");
let squareSize = 50;
let boardPadding = 50;
let highlighted;
let possibleMoves = [];
let highlightedPiece;
let turn = 0;
let extendedMove = false;
let gameOver = false;
let colorsPlace = {
  black: 0,
  white: 95.99 / 3,
  red: 95.99 * 2 / 3
};
let colors = ["black", "white"];
let forceJump = false;
let forcedPiece;

function drawMap() {
  drawBackground();
  //Redraws the board
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let color = (j % 2 + i % 2) % 2 === 0 ? "white" : "black";
      //ctx.fillStyle = color;
      ctx.drawImage(checkerBoard, 0, (j % 2 + i % 2) % 2 === 0 ? 0 : 96 / 3 * 2, 32, 32, j * squareSize + boardPadding, i * squareSize + boardPadding, squareSize, squareSize);
      //ctx.fillRect(j * squareSize + boardPadding, i * squareSize + boardPadding, squareSize, squareSize);
      ctx.fillStyle = "grey";
      ctx.font = "25px Arial";
      let piece = board[i][j];
      drawPiece(piece, j, i);
      //ctx.fillText(piece, j * squareSize, i * squareSize + squareSize - 12.5);
    }
  }
  if (typeof highlighted === "object") {
    highlightedPiece = board[highlighted[0]][highlighted[1]];
    if ((turn === 0 && (highlightedPiece == 2 || highlightedPiece == 4)) || (turn == 1 && highlightedPiece == 1 || highlightedPiece == 3)) {
      ctx.fillStyle = "aqua";
      ctx.fillRect(highlighted[1] * 50 + boardPadding, highlighted[0] * 50 + boardPadding, squareSize, squareSize);
      ctx.fillStyle = "grey";
      ctx.font = "25px Arial";
      drawPiece(highlightedPiece, highlighted[1], highlighted[0]);
      showPossibleMoves(highlightedPiece, highlighted[0], highlighted[1], board);
    }
  }
  //Highlights possible moves
  possibleMoves.forEach(val => {
    //console.log(board[val[0]][val[1]]);
    ctx.fillStyle = "green";
    ctx.fillRect(val[1] * 50 + boardPadding, val[0] * 50 + boardPadding, squareSize, squareSize);
  });
}

function drawBackground() {
  let topLeftX = 224 / 7 * 2;
  let topMiddleX = 224 / 7 * 3;
  let topRightX = 224 / 7 * 4;
  let leftMiddleX = 224 / 7 * 2;
  let leftMiddleY = 96 / 3;
  let bottomLeftX = 224 / 7 * 2;
  let bottomLeftY = 96 / 3 * 2;
  let bottomRightX = 224 / 7 * 4;
  let bottomRightY = 96 / 3 * 2;
  let rightMiddleX = 224 / 7 * 4;
  let rightMiddleY = 96 / 3;
  let bottomMiddleX = 224 / 7 * 3;
  let bottomMiddleY = 96 / 3 * 2;
  ctx.drawImage(checkerBoard, topLeftX, 0, 32, 32, 0, 0, 50, 50);
  ctx.drawImage(checkerBoard, topRightX, 0, 32, 32, (board[0].length + 1) * squareSize, 0, squareSize, squareSize);
  ctx.drawImage(checkerBoard, bottomLeftX, bottomLeftY, 32, 32, 0, (board.length + 1) * squareSize, squareSize, squareSize);
  ctx.drawImage(checkerBoard, bottomRightX, bottomRightY, 32, 32, (board[0].length + 1) * squareSize, (board.length + 1) * squareSize, squareSize, squareSize);
  for (let i = 1; i < board[0].length + 1; i ++) {
    ctx.drawImage(checkerBoard, topMiddleX, 0, 32, 32, i * squareSize, 0, squareSize, squareSize);
  }
  for (let i = 1; i < board.length + 1; i ++) {
    ctx.drawImage(checkerBoard, leftMiddleX, leftMiddleY, 32, 32, 0, i * squareSize, squareSize, squareSize);
  }
  for (let i = 1; i < board[0].length + 1; i ++) {
    ctx.drawImage(checkerBoard, bottomMiddleX, bottomMiddleY, 32, 32, i * squareSize, (board.length + 1) * squareSize, squareSize, squareSize);
  }
  for (let i = 1; i < board.length + 1; i ++) {
    ctx.drawImage(checkerBoard, rightMiddleX, rightMiddleY, 32, 32, (board[0].length + 1) * squareSize, i * squareSize, squareSize, squareSize);
  }
}

function drawPiece(piece, row, column) {
  if (piece === 0) {
    return;
  }
  let topCheckersX = colorsPlace[colors[0]];
  let bottomCheckersX = colorsPlace[colors[1]];
  let clipY = 63.99 / 2;
  if (piece >= 3) {
    clipY = 0;
  }
  if (piece == 1 || piece == 3) {
    ctx.drawImage(checkerPieces, topCheckersX, clipY, 95.99 / 3, 63.99 / 2, row * squareSize + boardPadding, column * squareSize + boardPadding, squareSize, squareSize);
  } else {
    ctx.drawImage(checkerPieces, bottomCheckersX, clipY, 95.99 / 3, 63.99 / 2, row * squareSize + boardPadding, column * squareSize + boardPadding, squareSize, squareSize);
  }
}

canvas.onclick = function() {
  if (gameOver) {
    alert("The game is over");
    return;
  }
  let row = Math.floor(event.offsetY / 50) - 1;
  let column = Math.floor(event.offsetX/ 50) - 1;
  let square = board[row][column];
  if (typeof highlighted !== "object") {
    if ((forceJump && String(forcedPiece) === String([row, column])) || !forceJump) {
      highlighted = [row, column]; 
    }
  } else {
    let isMovePossible = false;
    possibleMoves.forEach(val => {
      if (String(val) == String([row, column])) {
        isMovePossible = true;
      }
    });
    if (isMovePossible) {
      movePiece(highlightedPiece, highlighted[0], highlighted[1], row, column);
    }
    highlighted = 0;
    possibleMoves = [];
  }
  drawMap();
};

//Board parameter could be removed
function showPossibleMoves(piece, row, column, board) {
  checkJump(piece, row, column);
  if (possibleMoves.length !== 0) {
    forceJump = true;
    forcedPiece = [row, column];
    return;
  }
  switch(piece) {
    case 1:
      if (board[row + 1] !== undefined) {
        if (board[row + 1][column + 1] === 0 && !extendedMove) {
          possibleMoves.push([row + 1, column + 1]);
        }
        if (board[row + 1][column - 1] === 0 && !extendedMove) {
          possibleMoves.push([row + 1, column - 1]);
        }
      }
      break;
    case 2:
      if (board[row - 1] !== undefined) {
        //console.log(row - 1, column + 1);
        if (board[row - 1][column + 1] === 0 && !extendedMove) {
          possibleMoves.push([row - 1, column + 1]);
        }
        if (board[row - 1][column - 1] === 0 && !extendedMove) {
          possibleMoves.push([row - 1, column - 1]);
        }
      }
      break;
    case 3:
    case 4:
      if (board[row - 1] !== undefined) {
        if (board[row - 1][column - 1] === 0 && !extendedMove) {
          possibleMoves.push([row - 1, column - 1]);
        }
        if (board[row - 1][column + 1] === 0 && !extendedMove) {
          possibleMoves.push([row - 1, column + 1]);
        }
      }
      if (board[row + 1] !== undefined) {
        if (board[row + 1][column + 1] === 0 && !extendedMove) {
          possibleMoves.push([row + 1, column + 1]);
        }
        if (board[row + 1][column - 1] === 0 && !extendedMove) {
          possibleMoves.push([row + 1, column - 1]);
        }
      } 
      break;
  }
}

function checkJump(piece, row, column) {
  switch (piece) {
    case 1:
      if (board[row + 1] !== undefined) {
        if (board[row + 1][column - 1] == 2 || board[row + 1][column - 1] == 4) {
          if (board[row + 2] !== undefined) {
            if (board[row + 2][column - 2] === 0) {
              possibleMoves.push([row + 2, column - 2]);
              //checkJump(piece, row + 2, column - 2);
            }
          }
        }
        if (board[row + 1][column + 1] == 2 || board[row + 1][column + 1] == 4) {
          if (board[row + 2] !== undefined) {
            if (board[row + 2][column + 2] === 0) {
              possibleMoves.push([row + 2, column + 2]);
              //checkJump(piece, row + 2, column - 2);
            }
          }
        }
      }
      break;
    case 2:
      if (board[row - 1] !== undefined) {
        if (board[row - 1][column - 1] == 1 || board[row - 1][column - 1] == 3) {
          if (board[row - 2] !== undefined) {
            if (board[row - 2][column - 2] === 0) {
              possibleMoves.push([row - 2, column - 2]);
              //checkJump(piece, row + 2, column - 2);
            }
          }
        }
        if (board[row - 1][column + 1] == 1 || board[row - 1][column + 1] == 3) {
          if (board[row - 2] !== undefined) {
            if (board[row - 2][column + 2] === 0) {
              possibleMoves.push([row - 2, column + 2]);
              //checkJump(piece, row + 2, column - 2);
            }
          }
        }
      }
      break;
    case 3:
      if (board[row - 1] !== undefined) {
        if (board[row - 1][column - 1] == 2 || board[row - 1][column - 1] == 4) {
          if (board[row - 2] !== undefined) {
            if (board[row - 2][column - 2] === 0) {
              possibleMoves.push([row - 2, column - 2]);
              //checkJump(piece, row + 2, column - 2);
            }
          }
        }
        if (board[row - 1][column + 1] == 2 || board[row - 1][column + 1 == 4]) {
          if (board[row - 2] !== undefined) {
            if (board[row - 2][column + 2] === 0) {
              possibleMoves.push([row - 2, column + 2]);
              //checkJump(piece, row + 2, column - 2);
            }
          }
        }
      }
      if (board[row + 1] !== undefined) {
        console.log(row, column);
        if (board[row + 1][column - 1] == 2 || board[row + 1][column - 1] == 4) {
          if (board[row + 2] !== undefined) {
            if (board[row + 2][column - 2] === 0) {
              possibleMoves.push([row + 2, column - 2]);
              //checkJump(piece, row + 2, column - 2);
            }
          }
        }
        if (board[row + 1][column + 1] == 2 || board[row + 1][column + 1] == 4) {
          if (board[row + 2] !== undefined) {
            if (board[row + 2][column + 2] === 0) {
              possibleMoves.push([row + 2, column + 2]);
              //checkJump(piece, row + 2, column - 2);
            }
          }
        }
      }
      break;
    case 4:
      if (board[row - 1] !== undefined) {
        if (board[row - 1][column - 1] == 1 || board[row - 1][column - 1] == 3) {
          if (board[row - 2] !== undefined) {
            if (board[row - 2][column - 2] === 0) {
              possibleMoves.push([row - 2, column - 2]);
              //checkJump(piece, row + 2, column - 2);
            }
          }
        }
        if (board[row - 1][column + 1] == 1 || board[row - 1][column + 1] == 3) {
          if (board[row - 2] !== undefined) {
            if (board[row - 2][column + 2] === 0) {
              possibleMoves.push([row - 2, column + 2]);
              //checkJump(piece, row + 2, column - 2);
            }
          }
        }
      }
      if (board[row + 1] !== undefined) {
        console.log(row, column);
        if (board[row + 1][column - 1] == 1 || board[row + 1][column - 1] == 3) {
          if (board[row + 2] !== undefined) {
            if (board[row + 2][column - 2] === 0) {
              possibleMoves.push([row + 2, column - 2]);
              //checkJump(piece, row + 2, column - 2);
            }
          }
        }
        if (board[row + 1][column + 1] == 1 || board[row + 1][column + 1] == 3) {
          if (board[row + 2] !== undefined) {
            if (board[row + 2][column + 2] === 0) {
              possibleMoves.push([row + 2, column + 2]);
              //checkJump(piece, row + 2, column - 2);
            }
          }
        }
      }
      break;
  }
}

function movePiece(piece, initialRow, initialCol, finalRow, finalCol) {
  board[initialRow][initialCol] = 0;
  board[finalRow][finalCol] = piece;
  if (Math.abs(finalRow - initialRow) !== 1) {
    let deadRow;
    let deadCol;
    if (finalRow > initialRow) {
      deadRow = finalRow - 1;
    } else {
      deadRow = finalRow + 1;
    }
    if (finalCol > initialCol) {
      deadCol = finalCol - 1;
    } else {
      deadCol = finalCol + 1;
    }
    board[deadRow][deadCol] = 0;
    possibleMoves = [];
    checkJump(piece, finalRow, finalCol);
    if (possibleMoves.length === 0) {
      changeTurn();
    } else {
      console.log(possibleMoves);
      forcedPiece = [finalRow, finalCol];
      extendedMove = true;
    }
  } else {
    changeTurn();
  }
  if (board[0].includes(2)) {
    board[0][board[0].indexOf(2)] = 4;
  }
  if (board[board.length - 1].includes(1)) {
    board[board.length - 1][board[board.length - 1].indexOf(1)] = 3;
  }
  checkEndGame();
  checkForceJump();
}

function changeTurn() {
  turn += 1;
  turn %= 2;
  console.log("extendedMove = false");
  extendedMove = false;
}

function checkEndGame() {
  let pieces = [];
  board.forEach(row => {
    row.forEach(piece => {
      if (piece !== 0) {
        pieces.push(piece);
      }
    });
  });
  let bottomAlive = pieces.includes(2) || pieces.includes(4);
  let topAlive = pieces.includes(1) || pieces.includes(3);
  if (!topAlive) {
    alert("Game's over, " + colors[1] + " won");
    gameOver = true;
    return;
  }
  if (!bottomAlive) {
    alert("Game's over, " + colors[0] + " won");
    gameOver = true;
    return;
  }
  let topCanMove = false;
  let bottomCanMove = false;
  board.forEach((row, rowNum) => {
    row.forEach((piece, colNum) => {
      possibleMoves = [];
      showPossibleMoves(piece, rowNum, colNum, board);
      if (possibleMoves.length !== 0) {
        if (piece == 1 || piece == 3) {
          topCanMove = true;
        }
        if (piece == 2 || piece == 4) {
          bottomCanMove = true;
        }
      }
    });
  });
  // if (!topCanMove && !bottomCanMove) {
  //   alert("Now how can you two not be able to move at the same time? There may be a bug.");
  //   gameOver = true;
  //   return;
  // }
  // if (!topCanMove) {
  //   alert("Game's over, " + colors[0] + " won");
  // }
  // if (!bottomCanMove) {
  //   alert("Game's over, " + colors[1] + " won");
  // }
  possibleMoves = [];
}

function checkForceJump() {
  let isTopForced = true;
  let isBottomForced = true;
  board.forEach((row, rowNum) => {
    row.forEach((piece, colNum) => {
      possibleMoves = [];
      checkJump(piece, rowNum, colNum);
      if (possibleMoves.length === 0) {
        if (piece == 1 || piece == 3) {
          isTopForced = false;
        }
        if (piece == 2 || piece == 4) {
          isBottomForced = false;
        }
      }
    });
  });
  if (turn === 0) {
    forceJump = isBottomForced;
  }
  if (turn == 1) {
    forceJump = isTopForced;
  }
}

drawMap();
