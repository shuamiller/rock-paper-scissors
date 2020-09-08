const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);

function computerPlay () {
    let compNum = Math.floor(Math.random() * Math.floor(3));
    let compChoice = "";
    if (compNum === 0) {
        compChoice = "Rock";
    } else if (compNum === 1) {
        compChoice = "Paper";
    } else {
        compChoice = "Scissors";
    }
    return compChoice;
}

function getPlayerChoice() {
    let playerPrompt = prompt("What do you choose? Rock, Paper, or Scissors?");
    let playerChoice = playerPrompt.toLowerCase();
    return playerChoice;
}

function playRound() {
    let playerChoice = getPlayerChoice().toLowerCase();
    console.log(playerChoice);
    let computerChoice = computerPlay();
    console.log(computerChoice);
    let result = "";
    
    if (playerChoice === computerChoice) {
        result = "You both chose the same thing. That's a tie! Try again.";
    } else if (playerChoice === "rock" && computerChoice === "Paper") {
        result = "Paper beats Rock! You lose!";
    } else if (playerChoice === "paper" && computerChoice === "Scissors") {
        result = "Scissors beats Paper! You lose!";
    } else if (playerChoice === "scissors" && computerChoice === "Rock") {
        result = "Rock beats Scissors! You lose!";
    } else if (playerChoice === "rock" && computerChoice === "Scissors") {
        result = "Rock beats Scissors! You win!";
    } else if (playerChoice === "paper" && computerChoice === "Rock") {
        result = "Paper beats Rock! You win!";
    } else if (playerChoice === "scissors" && computerChoice === "Paper") {
        result = "Scissors beats Paper! You win!";
    }

    console.log(result);
    return result;
}

function game() {
    
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        let roundResult = playRound();
        if (roundResult === "You both chose the same thing. That's a tie! Try again.") {
            console.log("No score change! Keep going.");
        } else if (roundResult === "Paper beats Rock! You lose!") {
            computerScore++;
            console.log(`Your score: ${playerScore} Computer's Score: ${computerScore}`);
        } else if (roundResult === "Scissors beats Paper! You lose!") {
            computerScore++;
            console.log(`Your score: ${playerScore} Computer's Score: ${computerScore}`);
        } else if (roundResult === "Rock beats Scissors! You lose!") {
            computerScore++;
            console.log(`Your score: ${playerScore} Computer's Score: ${computerScore}`);
        } else if (roundResult === "Rock beats Scissors! You win!") {
            playerScore++;
            console.log(`Your score: ${playerScore} Computer's Score: ${computerScore}`);
        } else if (roundResult === "Paper beats Rock! You win!") {
            playerScore++;
            console.log(`Your score: ${playerScore} Computer's Score: ${computerScore}`);
        }  else if (roundResult === "Scissors beats Paper! You win!") {
            playerScore++;
            console.log(`Your score: ${playerScore} Computer's Score: ${computerScore}`);
        }
    }

    if (playerScore > computerScore) {
        console.log("You Won! Congrats!");
    } else if (playerScore < computerScore) {
        console.log("You Lost. Better Luck Next Time!");
    } else {
        console.log("Something went wrong! Whoops!");
    }
}