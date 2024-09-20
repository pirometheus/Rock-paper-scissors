function getComputerChoice(ranNum) {
    if (ranNum < 0.33) {
        console.log("Rock");
    } else if (ranNum>= 0.33 && ranNum<=0.66) {
        console.log("Paper");
    } else {
        console.log("Scissor");
    }
}

console.log(getComputerChoice(Math.random()));


