const boxes = document.querySelectorAll(".box");

const Player = (mark, turn) => {
  return { mark, turn };
};

const winningCondition = (mark, board) => {
  const hasNumbers = board.some((element) => !isNaN(element));

  if (
    (board[0] === mark && board[4] === mark && board[8] === mark) ||
    (board[0] === mark && board[1] === mark && board[2] === mark) ||
    (board[0] === mark && board[3] === mark && board[6] === mark) ||
    (board[2] === mark && board[4] === mark && board[6] === mark) ||
    (board[0] === mark && board[3] === mark && board[6] === mark) ||
    (board[1] === mark && board[4] === mark && board[7] === mark) ||
    (board[2] === mark && board[5] === mark && board[8] === mark) ||
    (board[3] === mark && board[4] === mark && board[5] === mark) ||
    (board[6] === mark && board[7] === mark && board[8] === mark)
  ) {
    return true;
  } else if (hasNumbers === false) {
    return 1;
  } else {
    return false;
  }
};

const gameBoard = () => {
  let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const resetBtn = document.querySelector(".reset-btn");
  resetBtn.addEventListener("click", clearBoard);

  const playerOne = Player("X", true);
  const playerTwo = Player("O", false);

  function clearBoard() {
    board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    boxes.forEach((box) => {
      box.textContent = "";
    });
  }

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (playerOne.turn === true) {
        if (board[box.id] === "O") return;
        board.splice(Number([box.id]), 1, playerOne.mark);
        box.textContent = playerOne.mark;

        playerTwo.turn = true;
        playerOne.turn = false;
      } else if (playerTwo.turn === true) {
        if (board[box.id] === "X") return;
        board.splice(Number([box.id]), 1, playerTwo.mark);
        box.textContent = playerTwo.mark;

        playerTwo.turn = false;
        playerOne.turn = true;
      }

      console.log(board);
      if (winningCondition(playerOne.mark, board) === true) {
        alert("Player 1 Wins!");
        clearBoard();
      } else if (winningCondition(playerTwo.mark, board) === true) {
        alert("Player 2 Wins!");
        clearBoard();
      } else if (winningCondition(playerOne.mark, board) === 1) {
        alert("It's a draw!");
        clearBoard();
      }
    });
  });
};

const game = () => {};

gameBoard();
