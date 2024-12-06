// INITIALISE VARIABLES
let rockPaperScissorsArr = ["Rock", "Paper", "Scissors"];
let computerChoice = "";
let wins = 0;
let losses = 0;
let draw = 0;
let round = 1;

// DISPLAY WELCOME MESSAGE IN CONSOLE
console.log("Welcome to our game, please type either Rock, Paper or Scissors to begin!")


// DECLARE FUNCTION FOR GAME
function rockPaperScissorsGame() {
    
    // Prompt window for user input
    let userChoice = window.prompt("Please type either Rock, Paper or Scissors to begin!");
    //Display rounds 
    console.log(`Round: ${round}`)
    
    // Validate user input to only select from array
    while (rockPaperScissorsArr.includes(userChoice) === false) {
        userChoice = window.prompt("ERROR: Please select either Rock, Paper or Scissors (case sensitive)");
       }
    

    console.log("Your choice: " + userChoice)
    
    // Random index for computer choice
    let randomIndex = Math.floor(Math.random() * 3);
            computerChoice = rockPaperScissorsArr[randomIndex];
            console.log ("Computer chooses: " + computerChoice);
    
    
    // Check combinations to determine winner / loser
        if (computerChoice === "Rock" && userChoice === "Paper") {
            console.log("YOU'VE WON THIS ROUND");
            wins++;
            console.log(`Score is Wins: ${wins} Losses: ${losses} Draws: ${draw}`);
        } else if (computerChoice === "Rock" && userChoice === "Rock") {
            console.log("IT'S A DRAW!");
            draw++;
            console.log(`Score is Wins: ${wins} Losses: ${losses} Draws: ${draw}`);

        } else if (computerChoice === "Rock" && userChoice === "Scissors") {
            losses++;
            console.log("YOU'VE LOST THIS ROUND");
            console.log(`Score is Wins: ${wins} Losses: ${losses} Draws: ${draw}`);

        } else if (computerChoice === "Paper" && userChoice === "Paper") {
            console.log("IT'S A DRAW!");
            draw++;
            console.log(`Score is Wins: ${wins} Losses: ${losses} Draws: ${draw}`);

        } else if (computerChoice === "Paper" && userChoice === "Rock") {
            losses++;
            console.log("YOU'VE LOST THIS ROUND");
            console.log(`Score is Wins: ${wins} Losses: ${losses} Draws: ${draw}`);

        } else if (computerChoice === "Paper" && userChoice === "Scissors") {
            wins++;
            console.log("YOU'VE WON THIS ROUND");
            console.log(`Score is Wins: ${wins} Losses: ${losses} Draws: ${draw}`);

        } else if (computerChoice === "Scissors" && userChoice === "Paper") {
            losses++;
            console.log("YOU'VE LOST THIS ROUND");
            console.log(`Score is Wins: ${wins} Losses: ${losses} Draws: ${draw}`);

        } else if (computerChoice === "Scissors" && userChoice === "Rock") {
            wins++;
            console.log("YOU'VE WON THIS ROUND");
            console.log(`Score is Wins: ${wins} Losses: ${losses} Draws: ${draw}`);

        } else if (computerChoice === "Scissors" && userChoice === "Scissors") {
            console.log("IT'S A DRAW!");
            draw++;
            console.log(`Score is Wins: ${wins} Losses: ${losses} Draws: ${draw}`);
        } 
    }


    
// Run 3 rounds 
for (i=0;i<3;i++) {
        rockPaperScissorsGame();
        round++;
    }

// Log finals scores
console.log(`Final score: Wins: ${wins} Losses: ${losses} Draws: ${draw}`) 

// Declares final winner
if (wins > losses || wins > draw) {
    console.log("Congratulations! You won!")
} else if (wins === losses) {
    console.log("It's a draw!!")
} else {
    console.log("You lose!")
}

// Tells user how to play again
console.log("Refresh to play again!")