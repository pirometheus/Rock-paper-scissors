// let userEntry(prompt("Please enter a number!"))
let random=Math.random();
console.log(random);

function getComputeChoice(ranNum) {
    return ranNum=Math.random();
}

if (ranNum<0.33) {
    console.log("Rock");
} else if (0.33<=ranNum || ranNum<=0.66) {
    console.log("Paper");
} else {
    console.log("Scissor");
}

