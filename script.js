function getComputerChoice(ranNum) {
    if (ranNum < 0.33) {
        return "rock";
    } else if (ranNum>= 0.33 && ranNum<=0.66) {
        return "paper";
    } else {
        return "scissor";
    }
}

let humanScore=0;
let computerScore=0;

const rock = document.querySelector("#rock");
rock.addEventListener("click",()=>{playGame("rock")});

const scissor = document.querySelector("#scissor");
scissor.addEventListener("click",()=>{playGame("scissor")});

const paper = document.querySelector("#paper");
paper.addEventListener("click", ()=>{playGame("paper")});

function playGame(humanSelection) {

//userChoice =prompt("write smth");

// function getHumenChoice() {
//     return userChoice;
// }
console.log(`You choose: ${humanSelection}`);

// const humanSelection=getHumenChoice(userChoice).toLowerCase();
const computerSelection=getComputerChoice(Math.random());
console.log(`Computer choose: ${computerSelection}`);

function playRound(humanChoice,computerChoice){
    if (humanChoice==computerChoice) {
        console.log("No one wins!");
        console.log(`Your Score: ${humanScore}`);
        console.log(`Computers Score: ${computerScore}`)
    } else if (humanChoice=="rock" && computerChoice=="scissor") {
        console.log("You win! Rock beats Scissor");
        humanScore++;
        console.log(`Your Score: ${humanScore}`);
        console.log(`Computers Score: ${computerScore}`)
    } else if (humanChoice=="rock" && computerChoice=="paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
        console.log(`Your Score: ${humanScore}`);
        console.log(`Computers Score: ${computerScore}`)
    } else if (humanChoice=="scissor" && computerChoice=="paper") {
        console.log("You win! Scissor beats Paper");
        humanScore++;
        console.log(`Your Score: ${humanScore}`);
        console.log(`Computers Score: ${computerScore}`)
    } else if (humanChoice=="scissor" && computerChoice=="rock") {
        console.log("You lose! Rock beats Scissor");
        computerScore++;
        console.log(`Your Score: ${humanScore}`);
        console.log(`Computers Score: ${computerScore}`)
    }  else if (humanChoice=="paper" && computerChoice=="rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
        console.log(`Your Score: ${humanScore}`);
        console.log(`Computers Score: ${computerScore}`)
    } else {
        console.log("You lose! Scissor beats Paper");
        computerScore++;
        console.log(`Your Score: ${humanScore}`);
        console.log(`Computers Score: ${computerScore}`)
    }
}


playRound(humanSelection,computerSelection);
}



// for (round=1;round<=5;round++) {
//     playGame(round);
// }

if (humanScore==computerScore){
    console.log("No one wins! Play again");
} else if(humanScore>computerScore){
    console.log("Conragulations!!! You won");
} else {
    console.log("Game Over! Computer wins");
}



//Learning area#
