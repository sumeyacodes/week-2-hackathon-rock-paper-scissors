// INITIALISE VARIABLES //

    let rockPaperScissorsArr = ["Rock", "Paper", "Scissors"];
    let computerChoice = "";
    let wins = 0;
    let losses = 0;
    let draw = 0;
    
// WINDOW PROMPT TO GET USER INPUT  //
    
    let userChoice = window.prompt("Welcome to our game, please type either Rock, Paper or Scissors to begin!");

    if(rockPaperScissorsArr.includes(userChoice)){
        console.log("You have chosen: " + userChoice)

    } else {
        // console.log("Error: Please choose ei")
        
    }


    

// DECLARE FUNCTION WITH PARAMETER - userinPut //

    // Get random index for computer to select a choice from the array
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
            console.log(`Score is Wins: ${wins} Losses: ${losses} Draws: ${draw}`);

        } else if (computerChoice === "Rock" && userChoice === "Scissors") {
            score--;
            console.log("USER LOSES");
            console.log(`Score is Wins: ${wins} Losses: ${losses} Draws: ${draw}`);

        } else if (computerChoice === "Paper" && userChoice === "Paper") {
            console.log("DRAW");
            console.log(`Score is Wins: ${wins} Losses: ${losses} Draws: ${draw}`);

        } else if (computerChoice === "Paper" && userChoice === "Rock") {
            score--;
            console.log("USER LOSES");
            console.log(`Score is Wins: ${wins} Losses: ${losses} Draws: ${draw}`);

        } else if (computerChoice === "Paper" && userChoice === "Scissors") {
            wins++;
            console.log("USER WINS");
            console.log(`Score is Wins: ${wins} Losses: ${losses} Draws: ${draw}`);

        } else if (computerChoice === "Scissors" && userChoice === "Paper") {
            score--;
            console.log("USER LOSES");
            console.log(`Score is Wins: ${wins} Losses: ${losses} Draws: ${draw}`);

        } else if (computerChoice === "Scissors" && userChoice === "Rock") {
            wins++;
            console.log("USER WINS");
            console.log(`Score is Wins: ${wins} Losses: ${losses} Draws: ${draw}`);

        } else if (computerChoice === "Scissors" && userChoice === "Scissors") {
            console.log("DRAW");
            console.log(`Score is Wins: ${wins} Losses: ${losses} Draws: ${draw}`);
        }

