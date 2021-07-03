var activePlayer = 0;
var scores = [0, 0];
var roundScore = 0;
var diceNumber;

var diceDom = document.querySelector(".dice");
var player0 = document.querySelector(".player-0-panel");
var player1 = document.querySelector(".player-1-panel");
var rollButton = document.querySelector(".btn-roll");
var holdButton = document.querySelector(".btn-hold");

function changePlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.remove("active");
  activePlayer = Math.abs(activePlayer - 1);
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.add("active");
}

function endGame() {
  rollButton.style.display = "none";
  holdButton.style.display = "none";
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.add("winner");
  document.getElementById("name-" + activePlayer).textContent =
    "Player " + (activePlayer + 1) + " WON!";
}

function beginGame() {
  document.getElementById("name-" + activePlayer).textContent =
    "Player " + (activePlayer + 1);
  player0.classList.remove("winner");
  player1.classList.remove("winner");
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  rollButton.style.display = "block";
  holdButton.style.display = "block";
  diceDom.style.display = "none";
  activePlayer = 0;
  scores = [0, 0];
  roundScore = 0;
  player0.classList.add("active");
  player1.classList.remove("active");
}

rollButton.addEventListener("click", function () {
  diceNumber = Math.ceil(Math.random() * 6);
  diceDom.src = "dice-" + diceNumber + ".png";
  diceDom.style.display = "block";
  if (diceNumber === 1) changePlayer();
  else {
    roundScore += diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  }
});

holdButton.addEventListener("click", function () {
  diceDom.style.display = "none";
  scores[activePlayer] += roundScore;
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 100) endGame();
  else changePlayer();
});

document.querySelector(".btn-new").addEventListener("click", function () {
  beginGame();
});

beginGame();
