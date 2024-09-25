const moves = document.querySelector("#moves");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const spanHuman = document.querySelector("#human");
const spanComputer = document.querySelector("#computer")
const result = document.querySelector("h2");

let humanScore = 0;
let computerScore = 0;
let computerChoice = getComputerChoice();

moves.addEventListener("click", (event) => {
    let target = event.target;
    humanChoice = target.id;
    playRound(humanChoice, computerChoice);
    spanHuman.textContent = humanScore;
    spanComputer.textContent = computerScore;
    if (humanScore == 5) {
        result.textContent = "You win! :)"
    } else if (computerScore == 5) {
        result.textContent = "You lose. :("
    }
    computerChoice = getComputerChoice();
});

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "rock";
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    result.textContent = `human choice = ${humanChoice}, computer choice = ${computerChoice}`
    if (humanChoice === computerChoice) {
        console.log("Tie! No one wins.");
        return;
    }
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock.")
            computerScore++;
        } else if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors.")
            humanScore++;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock.")
            humanScore++;
        } else if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper.")
            computerScore++;
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats scissors.")
            computerScore++;
        } else if (computerChoice === "paper") {
            console.log("You win! Scissors beats paper.")
            humanScore++;
        }
    }
}