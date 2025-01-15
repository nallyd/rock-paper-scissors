/*
    * TOP
    *
    * Rock Paper Scissors
    *
    * nallyd
*/

function getComputerChoice() {
    // Generate a random number between [0,3)
    let choice = Math.floor(Math.random() * 3);

    // Return the string as requested
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(invalidLast) {
    // Get choice from user, trim whitespace and conver to lower case
    let choice = (invalidLast) ?
        prompt("Invalid choice. Please choose rock, paper or scissors!").trim().toLowerCase() :
        prompt("Please choose rock, paper or scissors!").trim().toLowerCase();

    // If the choice is rock, paper, or scissors -> return choice
    // Otherwise, advise the choice was invalid and prompt again
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    }

    return getHumanChoice(true);
}

function playRound(humanChoice, computerChoice) {
    // If choices are the same, it's a tie
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return 2;
    }

    // Log tree for winning/losing match-ups since we know it's not a tie
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log(`You win! Rock beats Scissors!`);
            return 1;
        }
        
        console.log(`You lose... Paper beats Rock.`);
        return 0;
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log(`You win! Paper beats Rock!`);
            return 1;
        }
        
        console.log(`You lose... Scissors beat paper.`);
        return 0;
    } else {
        if (computerChoice === "paper") {
            console.log(`You win! Scissors beat paper!`);
            return 1;
        }
            
        console.log(`You lose... Rock beats Scissors`);
        return 0;
    }
}

function playGame() {
    // Initialize our scores
    let humanScore = 0;
    let computerScore = 0;

    // While loop that works as a best of 5
    while (humanScore < 3 && computerScore < 3) {
        // Result of the round, select new humand and computer choice
        let result = playRound(getHumanChoice(), getComputerChoice());

        // We've deemed 1 as player win, 0 as computer win
        if (result === 1) {
            humanScore += 1;
        } else if (result === 0) {
            computerScore += 1;
        }
    }

    // Declare the winner of the best of 5
    if (humanScore > computerScore) {
        console.log("User wins! You've bested the computer!");
    } else {
        console.log("Computer wins! Technology has bested us!");
    }
}

playGame();
