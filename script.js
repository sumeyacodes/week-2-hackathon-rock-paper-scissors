// INITIALISE VARIABLES //




// DECLARE FUNCTION WITH PARAMETER - userinPut 

let rockPaperScissorsArr = ["Rock", "Paper", "Scissors"];
let computerChoice = "";
let wins = 0;
let losses = 0;
let draw = 0;
let round = 1;

console.log("Welcome to our game, please type either Rock, Paper or Scissors to begin!")

function rockPaperScissorsGame() {
    // Get random index for computer to select a choice from the array
    

        
    // WINDOW PROMPT TO GET USER INPUT  //
        
    
   
    
    let userChoice = window.prompt("Welcome to our game, please type either Rock, Paper or Scissors to begin!");
    console.log(`Round: ${round}`)
    
    // test for validity of user input
    
    while (rockPaperScissorsArr.includes(userChoice) === false) {
        userChoice = window.prompt("Invalid Input - Please select either Rock, Paper or Scissors (case sensitive)",);
       }
    
    console.log(userChoice)
    
    // get randon index
    let randomIndex = Math.floor(Math.random() * 3);
            computerChoice = rockPaperScissorsArr[randomIndex];
            console.log ("Computer chooses: " + computerChoice);
    
    
    // Check combinations to determine if the user wins, loses, or draws based on user and computer choices
        if (computerChoice === "Rock" && userChoice === "Paper") {
            wins++;
            console.log("USER WINS");
            console.log(`Score is Wins: ${wins} Losses: ${losses} Draws: ${draw}`);
            // return userChoice;
        } else if (computerChoice === "Rock" && userChoice === "Rock") {
            console.log("DRAW");
            draw++;
            console.log(`Score is Wins: ${wins} Losses: ${losses} Draws: ${draw}`);

        } else if (computerChoice === "Rock" && userChoice === "Scissors") {
            losses++;
            console.log("USER LOSES");
            console.log(`Score is Wins: ${wins} Losses: ${losses} Draws: ${draw}`);

        } else if (computerChoice === "Paper" && userChoice === "Paper") {
            console.log("DRAW");
            draw++;
            console.log(`Score is Wins: ${wins} Losses: ${losses} Draws: ${draw}`);

        } else if (computerChoice === "Paper" && userChoice === "Rock") {
            losses++;
            console.log("USER LOSES");
            console.log(`Score is Wins: ${wins} Losses: ${losses} Draws: ${draw}`);

        } else if (computerChoice === "Paper" && userChoice === "Scissors") {
            wins++;
            console.log("USER WINS");
            console.log(`Score is Wins: ${wins} Losses: ${losses} Draws: ${draw}`);

        } else if (computerChoice === "Scissors" && userChoice === "Paper") {
            losses++;
            console.log("USER LOSES");
            console.log(`Score is Wins: ${wins} Losses: ${losses} Draws: ${draw}`);

        } else if (computerChoice === "Scissors" && userChoice === "Rock") {
            wins++;
            console.log("USER WINS");
            console.log(`Score is Wins: ${wins} Losses: ${losses} Draws: ${draw}`);

        } else if (computerChoice === "Scissors" && userChoice === "Scissors") {
            console.log("DRAW");
            draw++;
            console.log(`Score is Wins: ${wins} Losses: ${losses} Draws: ${draw}`);
        } 
        
    }


    
// For loop to run the game 3 times
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
    console.log("It's a draw!")
} else {
    console.log("You lose!")
}

// Tells user how to play again
console.log("Refresh to play again!")