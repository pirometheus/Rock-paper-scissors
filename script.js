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

const round = document.querySelector("#round");
const roundContainer = document.querySelector("#roundContainer");
const choiceHuman = document.querySelector("#choiceHuman");
const choiceComputer = document.querySelector("#choiceComputer");
const result = document.querySelector("#result");
const score = document.querySelector("#score");
const paraHuman = document.createElement("p");
const paraComp = document.createElement("p");




function playGame(humanSelection) {

    const computerSelection=getComputerChoice(Math.random());
    paraHuman.textContent= humanSelection.toUpperCase();
    paraComp.textContent = computerSelection.toUpperCase();

    choiceHuman.appendChild(paraHuman);
    choiceComputer.appendChild(paraComp);

    function playRound(humanChoice,computerChoice){
        if (humanChoice==computerChoice){
            result.textContent = "It is a TIE. No one wins.";
        } else if ((humanChoice=="rock" &&  computerChoice=="scissor") || (humanChoice=="scissor" && computerChoice=="paper")||(humanChoice=="paper" && computerChoice=="rock")){
            result.textContent = "You win this round.";
        } else {
            result.textContent = "You lose this round.";
        }
    }


    playRound(humanSelection,computerSelection);
}


if (humanScore==computerScore){
    console.log("No one wins! Play again");
} else if(humanScore>computerScore){
    console.log("Conragulations!!! You won");
} else {
    console.log("Game Over! Computer wins");
}