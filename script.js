// INITIALISE VARIABLES //

    let rockPaperScissorsArr = ["Rock", "Paper", "Scissors"]
    let computerChoice = ""
    let score = 0
    
// WINDOW PROMPT TO GET USER INPUT  //
    
    let userChoice = window.prompt("Welcome to our game, please type either Rock, Paper or Scissors to begin!");
    

// DECLARE FUNCTION WITH PARAMETER - userinPut //

    // Get random index for computer to select a choice from the array
        let randomIndex = Math.floor(Math.random() * 3);
        computerChoice = rockPaperScissorsArr[randomIndex];
        console.log (computerChoice);

    // Check combinations to determine if the user wins, loses, or draws based on user and computer choices
        if (computerInput === "Rock" && userInput === "Paper") {
            score++;
            console.log("USER WINS");
            console.log(`Score is ${score}`);
        } else if (computerInput === "Rock" && userInput === "Rock") {
            console.log("DRAW");
            console.log(`Score is ${score}`);
        } else if (computerInput === "Rock" && userInput === "Scissors") {
            score--;
            console.log("USER LOSES");
            console.log(`Score is ${score}`);
        } else if (computerInput === "Paper" && userInput === "Paper") {
            console.log("DRAW");
            console.log(`Score is ${score}`);
        } else if (computerInput === "Paper" && userInput === "Rock") {
            score--;
            console.log("USER LOSES");
            console.log(`Score is ${score}`);
        } else if (computerInput === "Paper" && userInput === "Scissors") {
            score++;
            console.log("USER WINS");
            console.log(`Score is ${score}`);
        } else if (computerInput === "Scissors" && userInput === "Paper") {
            score--;
            console.log("USER LOSES");
            console.log(`Score is ${score}`);
        } else if (computerInput === "Scissors" && userInput === "Rock") {
            score++;
            console.log("USER WINS");
            console.log(`Score is ${score}`);
        } else if (computerInput === "Scissors" && userInput === "Scissors") {
            console.log("DRAW");
            console.log(`Score is ${score}`);
        }


