// function ranNum() {
//     return Math.random();
// }
// console.log(ranNum());
var ranNum=Math.random();

console.log(ranNum);

if (ranNum < 0.33) {
    console.log("Rock");
} else if (ranNum>= 0.33 && ranNum<=0.66) {
    console.log("Paper");
} else {
    console.log("Scissor");
}

