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
        return `Draw! You and computer both chose ${playerSelection}`;
    } else if(playerSelection == "ROCK" && computerSelection == "SCISSORS" || playerSelection == "PAPER" && computerSelection == "ROCK" || playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

let player = prompt("Choose: Rock, Paper or Scissor").toUpperCase();
console.log(singleRound(player, getComputerChoice()));