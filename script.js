function getComputerChoice(ranNum) {
    if (ranNum < 0.33) {
        return "rock";
    } else if (ranNum>= 0.33 && ranNum<=0.66) {
        return "paper";
    } else {
        return "scissor";
    }
}

function playGame() {

let userChoice=prompt("Write rock, paper or scissor!");

function getHumenChoice() {
    return userChoice;
}
console.log(`You choose: ${userChoice}`)

let humanScore=0;
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
        console.log("You lose! Rock beats Scissor");rock
    }  else if (humanChoice=="paper" && computerChoice=="rock") {
        console.log("You win! Paper beats Rock");
    } else {
        console.log("You lose! Scissor beats Paper");
    }
}
const humanSelection=getHumenChoice(userChoice).toLowerCase();
const computerSelection=getComputerChoice(Math.random);+
console.log(`Computer choose: ${computerSelection}`);
playRound(humanSelection,computerSelection);
}

for (round=1;round<=2;round++) {
    playGame(round);
    console.log(playGame(round));
    

    // if (playGame(round).slice(3,6)=="win"){
    //     humanScore++;
    //     console.log(`Your score: ${humanScore}  Computers score: ${computerScore}`);
    // } else if (playGame(round).slice(3,6)=="los") {
    //     computerScore++;
    //     console.log(`Your score: ${humanScore}  Computers score: ${computerScore}`);
    // } else {
    //     console.log(`Your score: ${humanScore}  Computers score: ${computerScore}`);
    // }
}

