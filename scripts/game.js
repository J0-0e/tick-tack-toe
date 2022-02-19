function resetGameStatus() {
  activePlayer = 0;
  currentRound = 1;
  gameIsOver = false;
  gameOver.firstElementChild.innerHTML = `You won, <span id="winner-name">PLAYER NAME</span>!`;
  gameOver.style.display = "none";

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      const gameBoardItem = gameBoard.children[gameBoardIndex];
      gameBoardItem.textContent = "";
      gameBoardItem.classList.remove("disabled");
      gameBoardIndex++;
    }
  }
}

function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set custom player names for both players!");
    return;
  }

  resetGameStatus();

  activePlayerName.textContent = players[activePlayer].name;
  gameArea.style.display = "block";
}

function switchPlayer() {
  activePlayer == 1 ? (activePlayer = 0) : (activePlayer = 1);
  activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  const selectedField = event.target;
  if (selectedField.tagName !== "LI" || gameIsOver) {
    return;
  }
  const col = selectedField.dataset.col - 1,
    row = selectedField.dataset.row - 1;

  if (gameData[row][col] > 0) {
    alert("Please select an empty game field!");
    return;
  }

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  gameData[row][col] = activePlayer + 1;

  // console.log(gameData);
  const winnerId = checkForGameOver();
  if (winnerId !== 0) {
    endGame(winnerId);
  }
  currentRound++;
  switchPlayer();
}

function checkForGameOver() {
  // rows
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  // columns
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  // Diagonal: top left to bottom right
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  // Diagonal: bottom left to top right
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }
  return 0;
}

function endGame(winnerId) {
  if (winnerId > 0) {
    gameOver.firstElementChild.firstElementChild.textContent =
      players[winnerId - 1].name;
  } else {
    gameOver.firstElementChild.textContent = "it's a draw!";
  }
  gameIsOver = true;
  gameOver.style.display = "block";
}
