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
let userChoice=prompt("Choose your weapon: Rock, Paper or Scissor!");

function getHumanChoice() {
    console.log(`You choose: ${userChoice}`);
    return userChoice;
}


let no1="No one wins!";
let RbS="You win! Rock beats Scissor";
let RlS="You lose! Paper beats Rock";
let sbp= "You win! Scissor beats Paper";
let slr="You lose! Rock beats Scissor";
let pbr="You win! Paper beats Rock";
let plr="You lose! Scissor beats Paper";



function playGame() { 
    function playRound(humanChoice,computerChoice){
        if (humanChoice==computerChoice) {
            console.log(no1);
            console.log(`Your score: ${humanScore}`);
            console.log(`Computers score: ${computerScore}`);
        } else if (humanChoice=="rock" && computerChoice=="scissor") {
            console.log(RbS);
            humanScore++;
            console.log(`Your score: ${humanScore}`);
            console.log(`Computers score: ${computerScore}`);    
        } else if (humanChoice=="rock" && computerChoice=="paper") {
            console.log(RlS);
            computerScore++;
            console.log(`Your score: ${humanScore}`);
            console.log(`Computers score: ${computerScore}`);
        } else if (humanChoice=="scissor" && computerChoice=="paper") {
           console.log(sbp);
           humanScore++;
           console.log(`Your score: ${humanScore}`);
            console.log(`Computers score: ${computerScore}`);
        } else if (humanChoice=="scissor" && computerChoice=="rock") {
            console.log(slr);
            computerScore++;
            console.log(`Your score: ${humanScore}`);
            console.log(`Computers score: ${computerScore}`);
        }  else if (humanChoice=="paper" && computerChoice=="rock") {
            console.log(pbr);
            humanScore++;
            console.log(`Your score: ${humanScore}`);
            console.log(`Computers score: ${computerScore}`);
        } else {
            console.log(plr);
            computerScore++;
            console.log(`Your score: ${humanScore}`);
            console.log(`Computers score: ${computerScore}`);
        }
    }

    const humanSelection=getHumanChoice(userChoice).toLowerCase();
    const computerSelection=getComputerChoice(Math.random());
    console.log(`Computer choose: ${computerSelection}`);
    playRound(humanSelection,computerSelection);
}





for (round=1;round<=5;round++) {
    playGame(round);
}
    
if (humanScore>computerScore) {
    console.log("Congratulations!! You win the game");
} else if (humanScore<computerScore)  {
    console.log("Game Over!!! You lose");
} else {console.log("No one wins. Play another game");}
