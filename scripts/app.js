const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0,
  activePlayer = 0,
  currentRound = 1,
  gameIsOver = false,
  players = [
    {
      name: "",
      symbol: "X",
    },
    {
      name: "",
      symbol: "O",
    },
  ];

const configOverlay = document.getElementById("config-overlay"),
  backdrop = document.getElementById("backdrop"),
  form = document.querySelector("form"),
  errorOutput = document.getElementById("config-errors"),
  gameArea = document.getElementById("active-game"),
  activePlayerName = document.getElementById("active-player-name"),
  gameOver = document.getElementById("game-over");

const editPlayer1Btn = document.getElementById("edit-player-1-btn"),
  editPlayer2Btn = document.getElementById("edit-player-2-btn"),
  cancelConfigBtn = document.getElementById("cancel-config-btn"),
  startNewGameBtnElement = document.getElementById("start-game-btn"),
  // gameFields = document.querySelectorAll("#game-board li"),
  gameBoard = document.getElementById("game-board");

editPlayer1Btn.addEventListener("click", openPlayerConfig);
editPlayer2Btn.addEventListener("click", openPlayerConfig);

cancelConfigBtn.addEventListener("click", closePlayerConfig);
backdrop.addEventListener("click", closePlayerConfig);

form.addEventListener("submit", savePlayerConfig);

startNewGameBtnElement.addEventListener("click", startNewGame);

// for (const gameField of gameFields) {
//   gameField.addEventListener("click", selectGameField);
// }
gameBoard.addEventListener("click", selectGameField);
