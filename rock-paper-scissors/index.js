const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const rockEl = document.getElementById("rock");
const paperEl = document.getElementById("paper");
const scissorsEl = document.getElementById("scissors");
let resultMessageEl = document.getElementById("result-message");
const resetGameBtn = document.getElementById("reset-button");

const options = ["rock", "paper", "scissors"];
const choices = [rockEl, paperEl, scissorsEl];

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = options[Math.floor(Math.random() * options.length)];

    if (computerChoice === playerChoice) {
        resultMessageEl.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. It's a tie!`;
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessageEl.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. You win!`;
        playerScore++;
        playerScoreEl.textContent = playerScore;
    } else {
        resultMessageEl.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. You lose!`;
        computerScore++;
        computerScoreEl.textContent = computerScore;
    }
}

for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener("click", function () {
        playGame(options[i]);
    });
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = 0;
    computerScoreEl.textContent = 0;
    resultMessageEl.textContent = "Make your move!";
}

resetGameBtn.addEventListener("click", function () {
    resetGame();
});
