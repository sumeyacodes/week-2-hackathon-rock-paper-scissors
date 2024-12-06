// INITIALISE VARIABLES //

    let rockPaperScissorsArr = ["Rock", "Paper", "Scissors"];
    let computerChoice = "";
    let wins = 0;
    let losses = 0;
    let draw = 0;
    
// WINDOW PROMPT TO GET USER INPUT  //
    

console.log("Welcome to our game, please type either Rock, Paper or Scissors to begin!")

let userChoice = window.prompt("Welcome to our game, please type either Rock, Paper or Scissors to begin!");

// test for validity of user input

while (rockPaperScissorsArr.includes(userChoice) === false) {
    userChoice = window.prompt("Invalid Input - Please select either Rock, Paper or Scissors (case sensitive)",);
   }

console.log(userChoice)

// get randon index
let randomIndex = Math.floor(Math.random() * 3);
        computerChoice = rockPaperScissorsArr[randomIndex];
        console.log ("Computer chooses: " + computerChoice);


    

// DECLARE FUNCTION WITH PARAMETER - userinPut //
function rockPaperScissorsGame(userChoice, computerChoice) {
    // Get random index for computer to select a choice from the array
        

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


    rockPaperScissorsGame(userChoice, computerChoice)