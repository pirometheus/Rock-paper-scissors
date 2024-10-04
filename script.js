// Choosing a random element 

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
let i =0;

// Calling HTML elements in JS

const rock = document.querySelector("#rock");
const scissor = document.querySelector("#scissor");
const paper = document.querySelector("#paper");
const round = document.querySelector("#round");
const roundContainer = document.querySelector("#roundContainer");
const choiceHuman = document.querySelector("#choiceHuman");
const choiceComputer = document.querySelector("#choiceComputer");
const result = document.querySelector("#result");
const score = document.querySelector("#score");
const humScore=document.querySelector("#humScore");
const comScore = document.querySelector("#comScore");
const roundNumber = document.querySelector("#roundNumber");

//Adding click event to buttons
rock.addEventListener("click",()=>{playGame("rock")});
scissor.addEventListener("click",()=>{playGame("scissor")});
paper.addEventListener("click", ()=>{playGame("paper")});

//Creating element for the choose section from HTML
const paraHuman = document.createElement("p");
const paraComp = document.createElement("p");
const parahumScore = document.createElement("p");
const paracomScore = document.createElement("p");

paraComp.setAttribute("style","background-color: white; color: red");
paraHuman.setAttribute("style","background-color: white; color: red");

//Defining the function, that let us play a round of the game

function playGame(humanSelection) {

    const computerSelection=getComputerChoice(Math.random());
    paraHuman.textContent= humanSelection.toUpperCase();
    paraComp.textContent = computerSelection.toUpperCase();

    choiceHuman.appendChild(paraHuman);
    choiceComputer.appendChild(paraComp);

    function playRound(humanChoice,computerChoice){
        if (humanScore==5){
            result.textContent = "CONGRATULATIONS!!! YOU WIN THE GAME";
            return;
        } else if (computerScore==5){
            result.textContent = "YOU LOST THE GAME. TRY AGAIN!!!";
            return;
        } else if (humanChoice==computerChoice){
            i+=1;
            result.textContent = "It is a TIE. No one wins.";
        } else if ((humanChoice=="rock" &&  computerChoice=="scissor") || (humanChoice=="scissor" && computerChoice=="paper")||(humanChoice=="paper" && computerChoice=="rock")){
            humanScore += 1;
            i+=1;
            result.textContent = "You win this round.";
        } else {
            computerScore += 1;
            i+=1;
            result.textContent = "You lose this round.";
        }
        parahumScore.textContent = humanScore;
        paracomScore.textContent = computerScore;
        roundNumber.textContent = `Round ${i}`;

        if (humanScore==5){
            i===0;
            computerScore===0;
            humanScore===0;
        }
        console.log(typeof(humanScore));
    }

    
    humScore.appendChild(parahumScore);
    comScore.appendChild(paracomScore);

    playRound(humanSelection,computerSelection);
    
}