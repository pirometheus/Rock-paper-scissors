function getComputerChoice(ranNum) {
    if (ranNum < 0.33) {
        console.log("rock");
    } else if (ranNum>= 0.33 && ranNum<=0.66) {
        console.log("paper");
    } else {
        console.log("scissor");
    }
}

let userChoice=prompt("Write rock, paper or scissor!");

function getHumenChoice() {
    return userChoice;
}
console.log(`User choise: ${userChoice}`)

let humenScore=0;
let computerScore=0;

function playRound(humanChoice,computerChoice){
    if (humanChoice==computerChoice) {
        console.log("No one wins!");
    } else if (humanChoice=="rock" && computerChoice=="scissor") {
        console.log("You win! Rock beats Scissor");
    } else if (humanChoice=="rock" && computerChoice=="paper") {
        console.log("You lose! Paper beats Rock");
    } else if (humanChoice=="scissor" && computerChoice=="paper") {
        console.log("You win! Scissor beats Paper");
    } else if (humanChoice=="scissor" && computerChoice=="rock") {
        console.log("You lose! Rock beats Scissor");
    }  else if (humanChoice=="paper" && computerChoice=="rock") {
        console.log("You win! Paper beats Rock");
    } else {
        console.log("You lose! Scissor beats Paper");
    }
}
const humanSelection=getHumenChoice(userChoice).toLowerCase();
const computerSelection=getComputerChoice(Math.random);
console.log(`Computer Choice: ${computerSelection}`);
playRound(humanSelection,computerSelection);