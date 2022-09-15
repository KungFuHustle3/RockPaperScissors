let winner = 0;
let humanScore = 0;
let computerScore = 0;

function userPlay() {
    let answer = prompt( 'Rock! Paper! Scissors!');
    if(answer === 'rock'){
        console.log('rock');
    } else if(answer === 'paper'){
        console.log('paper');
    } else if(answer === 'scissors'){
        console.log('scissors');
    }
    return answer;
}

function computerPlay() {
    let random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) { //plays a round of the game.
if (playerSelection === "rock") {
    return "Draw!";
    } else if (computerSelection === "paper") {
    return "Computer Wins!";
    computerScore += 1;
    } else {
    return "You win!";
    humanScore += 1;
    }
} else if (playerSelection === "paper") {
    if (computerSelection === "rock"){
        return "You win!";
        humanScore += 1;
    } else if (computerSelection === "paper") {
        return "Draw!";
    } else {
        return "Computer wins!";
        computerScore += 1;
    }
} else {
    if (computerSelection === "rock") {
        return "Computer wins!";
        computerScore += 1;
    } else if (computerSelection === "paper") {
        return "You win!";
        humanScore +=1;
    } else {
        return "Draw!";
    }
}

let userChoise = userPlay();
let computerSelection = computerPlay();
let result = playRound(userChoice, computerSelection);
console.log("user's choice", userChoice);
console.log("computer's choice", computerSelection);
console.log("Result is", result);

function game(playRound) {
    for (let i=0; i<5; i++) {
        if (playerScore < 5) {
            userPlay();
        } else if (computerScore <5) {
            userPlay();
        }
    }
    console.log(win_condition());
}

function win_condition() {
    if (humanScore === 5) {
        return "You have bested the machine";
    } else if (computerScore === 5) {
        return "You have been beaten by a machine, just sad really";
    }
}