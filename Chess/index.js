/*jshint loopfunc:true */
"use strict";
let canvas = document.getElementById("canvas");
let footer = document.getElementsByTagName("footer")[0];
let movesTillDraw = document.getElementById("movesTillDraw");
let resignW = document.getElementById("resignW");
let draw = document.getElementById("draw");
let resignB = document.getElementById("resignB");
let moves = document.getElementById("moves");
let undoB = document.getElementById("undo");
let ctx = canvas.getContext("2d");
let board = [
  [2, 3, 4, 5, 6, 4, 3, 2],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [7, 7, 7, 7, 7, 7, 7, 7],
  [8, 9, 10, 11, 12, 10, 9, 8],
];
// let board = [
//   [0, 0, 0, 0, 6, 0, 0 ,0],
//   [0, 0, 0, 2, 0, 2, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 2],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 12, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 2],
// ];
let squareSize = 50;
let turn = 0;
let highlighted = -1;
let highlightedPiece;
let possibleMoves = [];
let deadPieces = [];
let pastMoves = [];
let ranks = [8, 7, 6, 5, 4, 3, 2, 1];
let files = ["a", "b", "c", "d", "e", "f", "g", "h"];

//Check
let wCheck = false;
let bCheck = false;
let checkMate = false;
let stalemate = false;
let gameOver = false;

//Draw
let movesUntilDraw = 50;

//Castling
let wo_o = false;
let wo_o_o = false;
let bo_o = false;
let bo_o_o = false;

//En passant
let enpassant = false;
let possiblePassant = false;

//Starts the game
window.onload = function() {
  drawMap();
};


function drawMap() {
  //Redraws the board
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let color = (j % 2 + i % 2) % 2 === 0 ? "white" : "orange";
      ctx.fillStyle = color;
      ctx.fillRect(j * squareSize, i * squareSize, squareSize, squareSize);
      ctx.fillStyle = "grey";
      ctx.font = "25px Arial";
      let piece = board[i][j];
      drawPiece(piece, j, i);
      //ctx.fillText(piece, j * squareSize, i * squareSize + squareSize - 12.5);
    }
  }
  //Highlights the selected piece
  ctx.lineWidth = 4;
  if (typeof highlighted === "object") {
    highlightedPiece = board[highlighted[0]][highlighted[1]];
    if ((turn === 0 && highlightedPiece >= 7) || (turn == 1 && highlightedPiece >= 1 && highlightedPiece < 7)) {
      ctx.fillStyle = "aqua";
      ctx.fillRect(highlighted[1] * 50, highlighted[0] * 50, squareSize, squareSize);
      ctx.fillStyle = "grey";
      ctx.font = "25px Arial";
      drawPiece(highlightedPiece, highlighted[1], highlighted[0]);
      showPossibleMoves(highlightedPiece, highlighted[0], highlighted[1], board);
    }
  }
  //Highlights possible moves
  possibleMoves.forEach(val => {
    //console.log(board[val[0]][val[1]]);
    if (board[val[0]][val[1]] === 0) {
      ctx.fillStyle = "green";
    } else {
      ctx.fillStyle = "red";
    }
    ctx.fillRect(val[1] * 50, val[0] * 50, squareSize, squareSize);
  });
}

//It either highlights or moves the piece when the canvas is clicked
canvas.onclick = function(event) {
  if (gameOver) {
    alert("The game's over");
    return;
  }
  //console.log(event);
  let row = Math.floor(event.offsetY / 50);
  let column = Math.floor(event.offsetX / 50);
  let square = board[row][column];
  if (typeof highlighted !== "object") {
    highlighted = [row, column];
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

//Archived, drawPiece is used instead
//Gets the piece letters depending on the value
// function getPiece(square, row, column){
//   let piece;
//   let img;
//   switch(square){
//     case 0:
//       piece = "";
//       break;
//     case 1: 
//       piece = "bp";
//       break;
//     case 2:
//       piece = "br";
//       break;
//     case 3:
//       piece = "bkn";
//       break;
//     case 4:
//       piece = "bb";
//       break;
//     case 5:
//       piece = "bq";
//       break;
//     case 6:
//       piece = "bk";
//       break;
//     case 7: 
//       piece = "wp";
//       break;
//     case 8:
//       piece = "wr";
//       break;
//     case 9:
//       piece = "wkn";
//       break;
//     case 10:
//       piece = "wb";
//       break;
//     case 11:
//       piece = "wq";
//       break;
//     case 12:
//       piece = "wk";
//       break;
//   }
//   return piece;
// }

function getPiece(square, row, column){
  let piece;
  switch(square){
    case 1: 
    case 7:
      piece = "P";
      break;
    case 2:
    case 8:
      piece = "R";
      break;
    case 3:
    case 9:
      piece = "N";
      break;
    case 4:
    case 10:
      piece = "B";
      break;
    case 5:
    case 11:
      piece = "Q";
      break;
    case 6:
    case 12:
      piece = "K";
      break;
    default:
      console.log(square);
  }
  return piece;
}

//Draws the piece
function drawPiece(square, row, column) {
  let piece;
  let img = document.getElementById("chessPieces");
  if (piece === 0) {
    return;
  }
  if (square == 6 || square == 12) {
    ctx.drawImage(img, 0, (Math.floor(square / 7) + 1) % 2 * 427 / 2, 1280 / 6, 427 / 2, row * squareSize, column * squareSize, squareSize, squareSize);
  } else {
    ctx.drawImage(img, (6 - (square % 6)) * (1280 / 6), (Math.floor(square / 7) + 1) % 2 * 427 / 2, 1280 / 6, 427 / 2, row * squareSize, column * squareSize, squareSize, squareSize);
  }
  return piece;
}

function showPossibleMoves(piece, row, column, board) {
  switch (piece) {
    //Black pawn
    case 1:
      //Moving one space
      if (board[row + 1] !== undefined) {
        if (board[row + 1][column] === 0) {
          possibleMoves.push([row + 1, column]);
        }
        //Attacking a piece diagonally
        if (checkPieceTeam(piece, board[row + 1][column - 1]) == "enemy") {
          possibleMoves.push([row + 1, column - 1]);
        }
        if (checkPieceTeam(piece, board[row + 1][column + 1]) == "enemy") {
          possibleMoves.push([row + 1, column + 1]);
        }
      }
      //Moving two spaces at the starting place
      if (board[row + 2] !== undefined) {
        if (row == 1) {
          if (board[row + 2][column] === 0 && board[row + 1][column] === 0) {
            possibleMoves.push([row + 2, column]);
          }
        }
      }
      break;
      //White pawn
    case 7:
      //Moving one space
      if (board[row - 1] !== undefined) {
        if (board[row - 1][column] === 0) {
          possibleMoves.push([row - 1, column]);
        }
        //Attacking a piece diagonally
        if (checkPieceTeam(piece, board[row - 1][column - 1]) == "enemy") {
          possibleMoves.push([row - 1, column - 1]);
        }
        if (checkPieceTeam(piece, board[row - 1][column + 1]) == "enemy") {
          possibleMoves.push([row - 1, column + 1]);
        }
      }
      //Moving two space at their starting move
      if (board[row - 2] !== undefined) {
        if (row == 6) {
          if (board[row - 2][column] === 0 && board[row - 1][column] === 0) {
            possibleMoves.push([row - 2, column]);
          }
        }
      }
      if (possiblePassant && !enpassant) {
        if (row == 3 && pastMoves[pastMoves.length - 1].final[0] == 3) {
          possibleMoves.push([row - 1, pastMoves[pastMoves.length - 1].final[1]]);
        }
      }
      break;
      //Rooks
    case 2:
    case 8:
      //all the moves rightward
      if (board[row] !== undefined) {
        rookMovingCondition(piece, row, column, 0, 1, -1, board.length, board);
      }
      //All the moves leftward
      if (board[row] !== undefined) {
        rookMovingCondition(piece, row, column, 0, -1, -1, -1, board);
      }
      //All the moves downward
      if (board[row + 1] !== undefined) {
        rookMovingCondition(piece, row, column, 1, 0, board.length, -1, board);
      }
      //All the moves upward
      if (board[row - 1] !== undefined) {
        rookMovingCondition(piece, row, column, -1, 0, -1, -1, board);
      }
      //console.log("Running");
      break;
      //Knights
    case 3:
    case 9:
      //Moves one rook up and one bishop up
      if (board[row - 2] !== undefined) {
        let currentPiece = board[row - 2][column - 1];
        if (checkPieceTeam(piece, currentPiece) != "ally") {
          possibleMoves.push([row - 2, column - 1]);
        }
        currentPiece = board[row - 2][column + 1];
        if (checkPieceTeam(piece, currentPiece) != "ally") {
          possibleMoves.push([row - 2, column + 1]);
        }
      }
      //Moves one rook down and one bishop down
      if (board[row + 2] !== undefined) {
        let currentPiece = board[row + 2][column - 1];
        if (checkPieceTeam(piece, currentPiece) != "ally") {
          possibleMoves.push([row + 2, column - 1]);
        }
        currentPiece = board[row + 2][column + 1];
        if (checkPieceTeam(piece, currentPiece) != "ally") {
          possibleMoves.push([row + 2, column + 1]);
        }
      }
      //Moves one rook left and on bishop left
      if (board[row - 1] !== undefined) {
        let currentPiece = board[row - 1][column - 2];
        if (checkPieceTeam(piece, currentPiece) != "ally") {
          possibleMoves.push([row - 1, column - 2]);
        }

        currentPiece = board[row - 1][column + 2];
        if (checkPieceTeam(piece, currentPiece) != "ally") {
          possibleMoves.push([row - 1, column + 2]);
        }
      }
      if (board[row + 1] !== undefined) {
        //Moves one rook right and one bishop right
        let currentPiece = board[row + 1][column + 2];
        if (checkPieceTeam(piece, currentPiece) != "ally") {
          possibleMoves.push([row + 1, column + 2]);
        }

        currentPiece = board[row + 1][column - 2];
        if (checkPieceTeam(piece, currentPiece) != "ally") {
          possibleMoves.push([row + 1, column - 2]);
        }
      }
      break;
    case 4:
    case 10:
      //Moves the bishop to the right
      if (board[row + 1] !== undefined) {
        bishopMovingCondition(piece, row, column, 1, 1, board.length, board.length, board);
        bishopMovingCondition(piece, row, column, 1, -1, board.length, -1, board);
      }
      //Moves the bishop to the left
      if (board[row - 1] !== undefined) {
        bishopMovingCondition(piece, row, column, -1, -1, -1, -1, board);
        bishopMovingCondition(piece, row, column, -1, 1, -1, board.length, board);
      }
      break;
    case 5:
    case 11:
      //Does the vertical movement of the rooks
      rookMovingCondition(piece, row, column, 0, 1, -1, board.length, board);
      rookMovingCondition(piece, row, column, 0, -1, -1, -1, board);
      if (board[row + 1] !== undefined) {
        //Moves the queen right horizontally
        rookMovingCondition(piece, row, column, 1, 0, board.length, -1, board);
        //Moves the queen right diagonally
        bishopMovingCondition(piece, row, column, 1, 1, board.length, board.length, board);
        bishopMovingCondition(piece, row, column, 1, -1, board.length, -1, board);
      }
      if (board[row - 1] !== undefined) {
        //Moves the queen left horizontally
        rookMovingCondition(piece, row, column, -1, 0, -1, -1, board);
        //Moves the queen left diagonally
        bishopMovingCondition(piece, row, column, -1, -1, -1, -1, board);
        bishopMovingCondition(piece, row, column, -1, 1, -1, board.length, board);
      }
      break;
    case 6:
    case 12:
      kingMovingCondition(piece, row, column, board);
      break;
  }
}

function rookMovingCondition(piece, row, column, moveRow, moveColumn, rrestriction, crestriction, board) {
  for (let i = row + moveRow;;) {
    for (let j = column + moveColumn;;) {
      if (checkPieceTeam(piece, board[i][j]) == "enemy") {
        possibleMoves.push([i, j]);
        break;
      } else if (checkPieceTeam(piece, board[i][j]) == "empty") {
        possibleMoves.push([i, j]);
      } else {
        break;
      }
      i += moveRow;
      j += moveColumn;
      if (i == rrestriction || j == crestriction) {
        break;
      }
    }
    break;
  }
}

function bishopMovingCondition(piece, row, column, moveRow, moveColumn, rrestriction, crestriction, board) {
  for (let i = row + moveRow;;) {
    for (let j = column + moveColumn;;) {
      if (i == rrestriction || j == crestriction) {
        break;
      }
      if (checkPieceTeam(piece, board[i][j]) == "enemy") {
        possibleMoves.push([i, j]);
        break;
      } else if (checkPieceTeam(piece, board[i][j]) == "empty") {
        possibleMoves.push([i, j]);
      } else {
        break;
      }
      i += moveRow;
      j += moveColumn;
    }
    break;
  }
}

function kingMovingCondition(piece, row, column, board) {
  //Skeleton for the top and bottom rows the king moves
  function rowCheckerSkeleton(currentRow, column) {
    if (checkPieceTeam(piece, board[currentRow][column]) != "ally") {
      possibleMoves.push([currentRow, column]);
    }
    if (checkPieceTeam(piece, board[currentRow][column + 1]) != "ally") {
      possibleMoves.push([currentRow, column + 1]);
    }
    if (checkPieceTeam(piece, board[currentRow][column - 1]) != "ally") {
      possibleMoves.push([currentRow, column - 1]);
    }
  }
  //Checks for all the moves down
  if (board[row + 1] !== undefined) {
    rowCheckerSkeleton(row + 1, column);
  }
  //Checks for all the moves up
  if (board[row - 1] !== undefined) {
    rowCheckerSkeleton(row - 1, column);
  }
  //Checks for all the moves right
  if (checkPieceTeam(piece, board[row][column + 1]) != "ally") {
    possibleMoves.push([row, column + 1]);
  }
  //Checks for all the moves left
  if (checkPieceTeam(piece, board[row][column - 1]) != "ally") {
    possibleMoves.push([row, column - 1]);
  }
  //Checks for white castling
  if (piece == 12) {
    if (board[row][column + 2] === 0 && board[row][column + 1] === 0 && !wo_o) {
      possibleMoves.push([row, column + 2]);
    }
    if (board[row][column - 2] === 0 && board[row][column - 1] === 0 && !wo_o_o) {
      possibleMoves.push([row, column - 2]);
    }
  }
  //Checks for black castling
  if (piece == 6) {
    if (board[row][column + 2] === 0 && board[row][column + 1] === 0 && !bo_o) {
      possibleMoves.push([row, column + 2]);
    }
    if (board[row][column - 2] === 0 && board[row][column - 1] === 0 && !bo_o_o) {
      possibleMoves.push([row, column - 2]);
    }
  }
}

//Moves the piece
function movePiece(piece, initialRow, initialColumn, finalRow, finalColumn) {
  if (movesUntilDraw === 0) {
    alert("You two ran out of moves!");
    return;
  }
  //Castling for white is row 7, column 2 or 6
  //Castling for black is row 0, column 2 or 6
  const blackCastleRow = 0;
  const whiteCastleRow = 7;
  const castleColumn1 = 2;
  const castleColumn2 = 6;

  //Finds out what move the current player did
  let isPromotion = false;
  let o_o = false;
  let o_o_o = false;
  let check = false;
  let checkMate = false;
  let move = {};


  //If the move is a castling move
  if ((finalRow === blackCastleRow ||
      finalRow == whiteCastleRow) &&
    (finalColumn == castleColumn1 ||
      finalColumn == castleColumn2) &&
    (piece == 12 || piece == 6)) {
    //Checks if the king is in check
    if (checkCheck(board)) {
      if (turn === 0) {
        alert("White's king is in check");
      } else if (turn == 1) {
        alert("Black's king is in check");
      }
      return;
    }

    //Runs if the castle is a queen's side castle
    if (finalColumn == castleColumn1 && ((turn === 0 && !wo_o_o) || (turn == 1 && !bo_o_o))) {
      board[finalRow][finalColumn + 1] = piece;
      board[initialRow][initialColumn] = 0;
      
      if (!checkCheck(board)) {
        
        board[finalRow][finalColumn + 1] = 0;
        board[finalRow][finalColumn] = piece;
        
        if (!checkCheck(board)) {
          board[finalRow][finalColumn + 1] = (turn ? 2 : 8);
          move.initial = [initialRow, initialColumn];
          move.final = [finalRow, finalColumn];
          move.piece = piece;
          move.captured = 0;
          move.type = "queenCastle";
          
          (turn ? function() {
              bo_o = true;
              bo_o_o = true;
            } :
            function() {
              wo_o = true;
              wo_o_o = true;
            });
          board[finalRow][0] = 0;
          pastMoves.push(move);
          changeTurn();
          movesUntilDraw -= 1;
        } else {
          alert(`${turn ? "Black's" : "White's"} king will be in check`);
          board[initialRow][initialColumn] = piece;
          board[finalRow][finalColumn] = 0;
        }
      } else {
        alert(`${turn ? "Black's" : "White's"} king will step on a spot in check`);
        board[initialRow][initialColumn] = piece;
        board[finalRow][finalColumn + 1] = 0;
      }
    }
    //Checks if the castle is a king's side castle
    else if (finalColumn == castleColumn2 && ((turn === 0 && !wo_o) || (turn == 1 && !bo_o))) {
      board[finalRow][finalColumn - 1] = piece;
      board[initialRow][initialColumn] = 0;
      
      if (!checkCheck(board)) {
        board[finalRow][finalColumn - 1] = 0;
        board[finalRow][finalColumn] = piece;
        
        if (!checkCheck(board)) {
          console.log(piece);
          board[finalRow][finalColumn - 1] = (turn ? 2 : 8);
          move.initial = [initialRow, initialColumn];
          move.final = [finalRow, finalColumn];
          move.piece = piece;
          move.captured = 0;
          move.type = "kingCastle";
          (turn ? function() {
              bo_o = true;
              bo_o_o = true;
            } :
            function() {
              wo_o = true;
              wo_o_o = true;
            });
          pastMoves.push(move);
          board[finalRow][7] = 0;
          changeTurn();
          movesUntilDraw -= 1;
          
        } else {
          alert(`${turn ? "Black's" : "White's"} king will be in check`);
          board[initialRow][initialColumn] = piece;
          board[finalRow][finalColumn] = 0;
        }
      } else {
        alert(`${turn ? "Black's" : "White's"} king will step on a spot in check`);
        board[initialRow][initialColumn] = piece;
        board[finalRow][finalColumn - 1] = 0;
      }
    }
    logMove();
    return;
  }
  movesTillDraw.innerText = movesUntilDraw;


  //Makes the intial space empty
  board[initialRow][initialColumn] = 0;

  //Adds the captured piece to the dead pieces array
  deadPieces.push(board[finalRow][finalColumn]);

  //Moves the piece
  board[finalRow][finalColumn] = piece;
  possibleMoves = [];
  checkCheck(board);
  if (turn === 0 && wCheck) {
    board[initialRow][initialColumn] = piece;
    board[finalRow][finalColumn] = deadPieces.pop();
    alert("White's king is/will be in check");
    return;
  }

  if (turn == 1 && bCheck) {
    board[initialRow][initialColumn] = piece;
    board[finalRow][finalColumn] = deadPieces.pop();
    alert("Black's king is/will be in check");
    return;
  }
  
  move.initial = [initialRow, initialColumn];
  move.final = [finalRow, finalColumn];
  move.piece = piece;
  move.captured = deadPieces[deadPieces.length - 1];
  
  changeTurn();
  
  if ((piece == 1 || piece == 7) && initialColumn != finalColumn) {
    if (deadPieces[deadPieces.length - 1] === 0) {
      deadPieces.pop();
      deadPieces.push((piece + 6) % 12);
      board[initialRow][finalColumn] = 0;
      move.captured = deadPieces[deadPieces.length - 1];
      move.type = "en passant";
      enpassant = true;
    }
  }
  
  if (checkCheckMate(turn === 0 ? 12 : 6)) {
    gameOver = true;
    turn === 0 ? alert("White is in checkmate") : alert("Black is in checkmate");
    move.checkMate = true;
    logMove();
    return;
  }
  
  checkStalemate();
  if (stalemate) {
    gameOver = true;
    turn === 0 ? alert("White is in stalemate") : alert("Black is in stalemate");
    move.stalemate = true;
    return;
  }
  
  move.check = checkCheck(board);
  
  let pieces = [];
  board.forEach(row => {
    row.forEach(piece => {
      if (piece) {
        pieces.push(piece);
      }
    });
  });
  if (pieces.length == 2) {
    gameOver = true;
    alert("Kings are the only pieces left");
    return;
  } else if (pieces.length == 3) {
    if (pieces.includes(8) || pieces.includes(3)) {
      gameOver = true;
      alert("King and knight cannot checkmate");
      return;
    }
    if (pieces.includes(9) || pieces.includes(4)) {
      gameOver = true;
      alert("King and bishop cannot checkmate");
      return;
    }
  }

  if (board[0].includes(7) || board[7].includes(1)) {
    promotion(piece, finalRow, finalColumn);
    move.type = promotion;
  }

  movesUntilDraw -= 1;
  if (piece == 1 || piece == 7 || deadPieces[deadPieces.length - 1] !== 0) {
    movesUntilDraw = 50;
  }
  movesTillDraw.innerText = movesUntilDraw;
  if (movesUntilDraw === 0) {
    alert("You two ran out of moves!");
    movesTillDraw.innerText = "0, you ran out of time";
    gameOver = true;
    return;
  }

  // deadPieces.forEach((val, index, arr) => {
  //   if (val === 0) {
  //     arr.splice(index, 1);
  //   }
  // });
  console.log(deadPieces);
  //Checks castling rules if the king moves
  if (board[finalRow][finalColumn] == piece && piece == 12) {
    wo_o = true;
    wo_o_o = true;
  }
  if (board[finalRow][finalColumn] == piece && piece == 6) {
    bo_o = true;
    bo_o_o = true;
  }
  //Checks castling rules if the black rooks move
  if (board[0][0] != 2) {
    bo_o_o = true;
  }
  if (board[0][board.length - 1] != 2) {
    bo_o = true;
  }
  //Checks castling rules if the white rooks move
  if (board[board.length - 1][0] != 8) {
    wo_o_o = true;
  }
  if (board[board.length - 1][board.length - 1] != 8) {
    wo_o = true;
  }
  
  if ((piece == 7 && finalRow == 4 && initialRow == 6) || (piece == 1 && finalRow == 3 && initialRow == 1)) {
    possiblePassant = true;
  }
  
  pastMoves.push(move);
  logMove();
}

//Promotes the pawn
function promotion(piece, row, column) {
  let answer;
  if (piece == 7) {
    answer = prompt(`What piece do you want your pawn to be?
    8 = rook
    9 = knight
    10 = bishop
    11 = queen`);
    board[row][column] = Number(answer);
  } else if (piece == 1) {
    answer = prompt(`What piece do you want your pawn to be?
    2 = rook
    3 = knight
    4 = bishop
    5 = queen`);
    board[row][column] = Number(answer);
  } else {
    alert("Something is wrong...");
  }
  drawMap();
}

//Checks the color the piece is
function checkPieceTeam(piece, unknown) {
  if (unknown === 0) {
    return "empty";
  } else if (piece >= 7 && unknown >= 7) {
    return "ally";
  } else if (piece >= 7 && unknown < 7) {
    return "enemy";
  } else if (piece < 7 && unknown < 7) {
    return "ally";
  } else if (piece < 7 && unknown >= 7) {
    return "enemy";
  }
}

//Checks if the kings are in check
function checkCheck(board) {
  wCheck = false;
  bCheck = false;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let piece = board[i][j];
      possibleMoves = [];
      showPossibleMoves(piece, i, j, board);
      if (possibleMoves !== undefined) {
        possibleMoves.forEach(val => {
          if (board[val[0]][val[1]] == 12) {
            wCheck = true;
          }
          if (board[val[0]][val[1]] == 6) {
            bCheck = true;
          }
        });
      }
    }
  }
  if (turn === 0) {
    return wCheck;
  } else {
    return bCheck;
  }
}

function checkCheckMate(king) {
  checkMate = true;
  // for (let i = 0; i < board.length; i++) {
  //   for (let j = 0; j < board.length; j++) {
  //     let piece = board[i][j];
  //     if (checkPieceTeam(king, piece) == "ally") {
  //       let copyBoard = [];
  //       board.forEach((row, index) => {
  //         copyBoard.push([]);
  //         row.forEach(piece => {
  //           copyBoard[index].push(piece);
  //         });
  //       });
  //       showPossibleMoves(piece, i, j, copyBoard);
  //       let tests = [];
  //       possibleMoves.forEach(move => {
  //         copyBoard[i][j] = 0;
  //         copyBoard[move[0]][move[1]] = piece;
  //         tests.push(checkCheck(copyBoard));
  //         copyBoard = [];
  //         board.forEach((row, index) => {
  //           copyBoard.push([]);
  //           row.forEach(piece => {
  //             copyBoard[index].push(piece);
  //           });
  //         });
  //       });
  //       if (tests.includes(false)) {
  //         checkMate = false;
  //       }
  //     }
  //   }
  // }
  console.log(checkKingsMoves && checkCheck(board));
  if (!(checkKingsMoves() && checkCheck(board))) {
    return false;
  }
  for (let i = 0; i < board.length; i ++) {
    for (let j = 0; j < board[i].length; j ++) {
      let piece = board[i][j];
      if (checkPieceTeam(king, piece) == "ally") {
        showPossibleMoves(piece, i, j, board);
        let tests = [];
        possibleMoves.forEach(move => {
          let copyBoard = [];
        board.forEach((row, index) => {
          copyBoard.push([]);
          row.forEach(piece => {
            copyBoard[index].push(piece);
          });
        });
          copyBoard[i][j] = 0;
          copyBoard[move[0]][move[1]] = piece;
          if (!checkCheck(copyBoard)) {
            checkMate = false;
          }
        });
      }
    }
  }
  possibleMoves = [];
  return checkMate;
}

function checkStalemate() {
  stalemate = true;
  if (turn === 0) {
    let king = 12;
    let freeMove = false;
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        let piece = board[i][j];
        if (checkPieceTeam(piece, king) == "ally") {
          let copyBoard = [];
          board.forEach(row => {
            let copyRow = [];
            row.forEach(val => {
              copyRow.push(val);
            });
            copyBoard.push(copyRow);
          });
          possibleMoves = [];
          showPossibleMoves(piece, i, j, copyBoard);
          possibleMoves.forEach(move => {
            copyBoard[i][j] = 0;
            copyBoard[move[0]][move[1]] = piece;
            if (!checkCheck(copyBoard)) {
              freeMove = true;
            }
          });
          if (freeMove) {
            stalemate = false;
          }
        }
      }
    }
  } else {
    let king = 6;
    let freeMove = false;
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        let piece = board[i][j];
        if (checkPieceTeam(king, piece) == "ally") {
          showPossibleMoves(piece, i, j, board);
          possibleMoves.forEach(moves => {
            let copyBoard = [];
            board.forEach(row => {
              let copyRow = [];
              row.forEach(piece => {
                copyRow.push(piece);
              });
              copyBoard.push(copyRow);
            });
            copyBoard[i][j] = 0;
            copyBoard[moves[0]][moves[1]] = piece;
            if (!checkCheck(copyBoard)) {
              freeMove = true;
            }

          });
          if (freeMove) {
            stalemate = false;
          }
        }
      }
    }
  }
}

function checkKingsMoves() {
  let king = (turn === 0 ? 12 : 6);
  let kingRow;
  let kingColumn;
  for (let i = 0; i < board.length; i ++) {
    for (let j = 0; j < board[i].length; j ++) {
      if (board[i][j] == king) {
        kingRow = i;
        kingColumn = j;
        break;
      }
    }
  }
  possibleMoves = [];
  showPossibleMoves(king, kingRow, kingColumn, board);
  possibleMoves.forEach(moves => {
    let copyBoard = [];
    board.forEach(row => {
      let copyRow = [];
      row.forEach(piece => {
        copyRow.push(piece);
      });
      copyBoard.push(copyRow);
    });
    copyBoard[kingRow][kingColumn] = 0;
    copyBoard[moves[0]][moves[1]] = king;
    if (!checkCheck(copyBoard)) {
      return false;
    }
  });
  return true;
}

// function checkCheckT(board, king) {
//   wCheck = false;
//   bCheck = false;
//   for (let i = 0; i < board.length; i ++) {
//     for (let j = 0; j < board.length; j ++) {
//       possibleMoves = [];
//       let piece = board[i][j];
//       if (checkPieceTeam(king, piece) == "enemy" && king != piece) { 
//         changeTurn();
//         showPossibleMoves(piece, i, j, board);
//         if (piece == 2){
//         console.log(board);
//         console.log(possibleMoves);
//         console.log("new");
//         }
//       if (possibleMoves !== undefined) {
//         possibleMoves.forEach(val => {
//           if (board[val[0]][val[1]] == 12) {
//             wCheck = true;
//           }
//           if (board[val[0]][val[1]] == 6) {
//             bCheck = true;
//           }
//         });
//       }
//       }
//     }
//   }
//   if (turn === 0) {
//     return wCheck;
//   } else {
//     return bCheck;
//   }
// }

function changeTurn() {
  turn += 1;
  turn %= 2;
}

//Offers
resignW.onclick = function(){
  if (gameOver) {
    alert("The game is already over");
    return;
  }
  if (confirm("Are you sure you want to resign?")) {
    gameOver = true;
    alert("White resigned");
  }
};

resignB.onclick = function(){
  if (gameOver) {
    alert("The game is already over");
    return;
  }
  if (confirm("Are you sure you want to resign?")) {
    gameOver = true;
    alert("Black resigned");
  }
};

draw.onclick = function(){
  if (gameOver) {
    alert("The game is already over");
    return;
  }
  if (confirm("Does the other player want a draw? \nDo note that the computer takes in your fingerprints whenever you put your finger on the trackpad, so I can tell whether this one person is doing this without the other person's permission.")) {
    gameOver = true;
    alert("Draw");
  }
};

function logMove() {
  moves.innerHTML = "<h2>Moves</h2><ol></ol>";
  let ol = moves.getElementsByTagName("ol")[0];
  pastMoves.forEach((log, index) => {
    let notation = "";
    notation += getPiece(log.piece);
    notation += files[log.initial[0]];
    notation += ranks[log.initial[1]];
    if (log.captured !== 0 && log.captured !== undefined) {
      notation += "x";
    }
    if (log.check) {
      notation += "+";
    }
    if (log.checkMate) {
      notation += "#";
    }
    notation += files[log.final[0]];
    notation += ranks[log.final[1]];
    //May be wrong here
    if (log.type == "promotion") {
      notation += "=";
      notation += getPiece(log.piece);
      notation[0] == "P";
    }
    if (index % 2 === 0) {
      ol.innerHTML += `<li>${notation}</li>`;
    } else {
      ol.getElementsByTagName("li")[ol.childNodes.length - 1].innerHTML += "&nbsp&nbsp&nbsp&nbsp&nbsp" + notation;
    }
  });
}

function logDeadPieces() {
  
}

//Undoes the last move
function undo() {
  if (pastMoves.length === 0) {
    return;
  }
  changeTurn();
  let move = pastMoves.pop();
  let initialRow = move.initial[0];
  let initialColumn = move.initial[1];
  let finalRow = move.final[0];
  let finalColumn = move.final[1];
  let piece = move.piece;
  let type = move.type;
  let captured = move.captured;
  board[initialRow][initialColumn] = piece;
  board[finalRow][finalColumn] = captured;
  if (type == "kingCastle") {
    board[initialRow][initialColumn + 1] = 0;
    board[board.length - 1][board.length - 1] = (turn === 0 ? 8 : 2);
    if (piece == 12) {
      wo_o = false;
    } else if (piece == 6) {
      bo_o = false;
    }
  }
  if (type == "queenCastle") {
    board[finalRow][finalColumn - 1] = 0;
    board[0][0] = (turn === 0 ? 8 : 2);
    if (piece == 12) {
      wo_o_o = false;
    } else if (piece == 6) {
      bo_o_o = false;
    }
  }
  if (type == "promotion") {
    board[initialRow][initialColumn] = (turn === 0 ? 7 : 1);
  }
  if (type == "en passant") {
    board[finalRow][finalColumn] = 0;
    board[initialRow][finalColumn] = captured;
    enpassant = false;
  }
  
  
  
  logMove();
  drawMap();
}
