function getComputerChoice () {
    let i = Math.floor((Math.random() * 3) + 1);
    switch(i) {
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS";
    }
    }

function singleRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        console.log(`Draw! You and computer both chose ${playerSelection}`)
        return 0;
    } else if(playerSelection == "ROCK" && computerSelection == "SCISSORS" || playerSelection == "PAPER" && computerSelection == "ROCK" || playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        return 1;
    } else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        return 2;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    while(playerScore < 3 && computerScore < 3) {
        let player = prompt("Choose: Rock, Paper or Scissor").toUpperCase();
        let computer = getComputerChoice();
        let round = singleRound(player, computer);
        if(round == 0) {
            playerScore++;
            computerScore++;
        } else if(round == 1) {
            playerScore++;
        } else {
            computerScore++;
        }
        console.log(`Your Current Score is ${playerScore}`);
        console.log(`The current computer score is ${computerScore}`);
    }
    if(playerScore > computerScore) {
        console.log(`Well Done, you win ${playerScore} - ${computerScore}!`);
    } else {
        console.log(`What a pity, you lost ${playerScore} - ${computerScore}...`);
    }
}

game();