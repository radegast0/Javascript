let result;
let playerChoice;
let computerMove;
let gameScore = JSON.parse(localStorage.getItem("gameScore"));
document.querySelector(
  ".js-p"
).innerHTML = `Wins: ${gameScore.win} Loses: ${gameScore.lose} Ties: ${gameScore.tie} Total score: ${gameScore.score}`;

if (gameScore === null) {
  gameScore = {
    win: 0,
    lose: 0,
    tie: 0,
    score: 0,
  };
}

console.log(JSON.stringify(gameScore));
function playGame(player) {
  playerChoice = player;
  if (player === "rock") {
    if (computerMove === "rock") {
      result = "tie.";
    } else if (computerMove === "paper") {
      result = "lose.";
    } else if (computerMove === "scissors") {
      result = "win.";
    }
  } else if (player === "paper") {
    if (computerMove === "rock") {
      result = "win.";
    } else if (computerMove === "paper") {
      result = "tie.";
    } else if (computerMove === "scissors") {
      result = "lose.";
    }
  } else if (player === "scissors") {
    if (computerMove === "rock") {
      result = "lose.";
    } else if (computerMove === "paper") {
      result = "win.";
    } else if (computerMove === "scissors") {
      result = "tie.";
    }
  }
}
function pickComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }
}
function score() {
  if (result === "win.") {
    gameScore.win = gameScore.win + 1;
    gameScore.score = gameScore.score + 1;
  } else if (result === "lose.") {
    gameScore.lose = gameScore.lose + 1;
    gameScore.score = gameScore.score - 1;
  } else if (result === "tie.") {
    gameScore.tie = gameScore.tie + 1;
  }

  localStorage.setItem("gameScore", JSON.stringify(gameScore));
  finalAlert();
}
function resetGame() {
  gameScore.win = 0;
  gameScore.lose = 0;
  gameScore.tie = 0;
  gameScore.score = 0;
  localStorage.setItem("gameScore", JSON.stringify(gameScore));
  alert(
    `Game has been reset \nwin: ${gameScore.win}, lose: ${gameScore.lose}, tie: ${gameScore.tie}`
  );
  show();
}
function finalAlert() {}
function finalGame(player) {
  pickComputerMove();
  playGame(player);
  score();
  show();
  pickText();
}
function show() {
  document.querySelector(
    ".js-p"
  ).innerHTML = `Wins: ${gameScore.win} Loses: ${gameScore.lose} Ties: ${gameScore.tie} Total score: ${gameScore.score}`;
  document.querySelector(".js-p2").innerHTML = null;
}
function pickText() {
  document.querySelector(".js-p2").innerHTML =
    `Your pick: ${playerChoice}` +
    "<br><br>" +
    `Computers pick: ${computerMove}`;
}
