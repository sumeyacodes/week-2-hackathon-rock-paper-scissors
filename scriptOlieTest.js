console.log("olie's test")

let rockPaperScissorsArr = ["Rock", "Paper", "Scissors",];
let userChoice = window.prompt("Welcome to our game, please type either Rock, Paper or Scissors to begin!");

while (rockPaperScissorsArr.includes(userChoice) === false) {
    console.log("Invalid Input");
    userChoice = window.prompt("Please select either Rock, Paper or Scissors (case sensitive)",);
   }

console.log(userChoice)

