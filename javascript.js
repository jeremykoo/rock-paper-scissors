console.log("Hello World");

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

function getHumanChoice() {
    let choice = prompt('Type "rock", "paper", or "scissors"!');
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
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

let humanScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(humanSelection);
    console.log(computerSelection);
    playRound(humanSelection, computerSelection);
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
}