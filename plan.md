== OVERALL PLAN ==

1. GAME LOGIC: Describe Rock / Paper / Scissors Game

    - Two players compete to defeat the other by simultaneously drawing either Rock, Paper or Scissors. The winner is determined by the below:

        a. Rock breaks Scissors
        b. Paper covers Rock
        c. Scissors Cuts Paper

    2. Matching equals a draw - go again (score and number of turns remains the same)

    3. Often the game is played as best of three games.

    Normally it's drawn on three, but we might ignore this for now


2. IMPLEMENTATION PLAN:

    - The game must be entirely within the console
    - Use input on each turn
    - We will need to ensure the option is either Rock, Paper, or Scissors, or else throw an error message
    - We need to keep a score - Win / Loss / Draw
    - We need to make sure that the order of who wins is included in our logic (if Statement)
    - Stress test the game and try our best to break it with the console
    - Declare a winner after two or three turns

    Stretch Goal: Add a countdown on each turn


    Resourcing Plan: 

    - Thursday Morning
        Develop the Plan
        Write the Flowchart

    - Thursday Afternoon
        Pseudocode. possibly in subsections initially?
        Attempt to get a working, basic version of the game
        Optional - Look at our stretch 

    - Thursday Evening
        TBC (Hopefully very little)
        Individually look at implementing a stretch goal?


    - Friday Morning
        Pair programming to compile the code
        Debugging session
        Prepare slides / presentation
        Run through the presentation


    - Friday Afternoon
        Presentation


---------------------------

3. PSEUDOCODE I (Breaking things down)

    Running in browser - set up HTML and Script File

    1. Initialisation / Intro screen
        // Initialise an array ["Rock", "Paper", "Scissors",]
        // Declare an empty variable to store the user input userInput
        // Declare an empty variable to store the computers input computerInput

        // log an introductory message to the console. console.log("Welcome to our game, please type either Rock, Paper or Scissors to begin!");

    2. Prompt for user input appears in the console
    

    3. User types selection
        // user inputs is received. This must be either "Rock" "Paper" or "Scissors"
        // If userInput in array = false, the input wasn't valid, we should log a message to the console and request the user input again.
        // If userInput in array = true, the user input is valid: 
        // Store the input in the variable


    4. Computer responds with input of random selection
        // Computer randomises an index 0,1,2
        // Declare a variable randomIndex
        // Accesses the array using randomIndex
        // returns a choice of Rock, Paper or Scissors
        // log the computers choice to the console


    5. We compare the user choice to computer choice 
        // objectWins = {[rock, scissors], [paper, rock,], [,]}
        //  [userInput, computerInput]

        //We generate three arrays, one with Winning scenarios,
        //One with draw scenarios
        //One with losing scenarios(?)

        //We take the user and computer inputs to form another array with the same format [userInput, computerInput] and store this in a variable combinedInput = [userInput, computerInput]

        // We check the three Scenario arrays to see if this input array is in there. using if in logic and return an output which is the result

        if combinedInput in winScenarios, return 'User Wins'
        else if combinedInput in drawScenarios, return 'It's a draw'
        else return  'Computer Wins'

        //We can use this test to declare a Win, Loss or Draw



    6. Declare outcomes
        //Log 'Hit 'refresh' to try again

 ---------------------------

    7. PSEUDOCODE II (Structuring code)


        // Initialise variables 
            // Declare array for input options: rockPaperScissorsArr = ["Rock", "Paper", "Scissors",]
            // Declare an empty variable to store the user input userInput
            // Declare an empty variable to store the computers input computerInput
            // variable score = 0

        // Window prompt to get user input    
            // request a user input to the console:
                prompt()
                userInput = window.prompt("Welcome to our game, please type either Rock, Paper or Scissors to begin!");


        if(rockPaperScissorsArr.includes(userChoice)){
            console.log("You have chosen: " + userChoice)

        } else {
            // console.log("Error: Please choose ei")
            
        }


    // testing if we have a valid input that is in the array
        if rockPaperScissorsArr includes the user choice
        return a console log with "You have chosen: " + userChoice & the rest of the code runs


        while array includes userInput === false 
            log error to console
        else 
            break


        Functions for Later:


        // Function to: get computer input(userinPut)
            //Get random index for computer to select a choice from the array
                // math.random method   let X = nMin + Math.floor(Math.random() * ((nMax + 1) - nMin))
                // Computer randomises an index 0,1,2
                // Declare a variable randomIndex
                // Accesses the array rockPaperScissorsArr using randomIndex
                // returns a choice of Rock, Paper or Scissors
                // store this in variable computerInput
            

            // Find a way to compare the two inputs to the winning / drawing combinations

                if statement ( computerInput ===  "Rock" && userInput === "Paper ) {

                    score++
                    log to console - "USER WINS"
                    log to console "Score is { score }
                }
                else if ( computerInput === "Rock" && userInput === "Rock" ) {

                    log to console "DRAW"
                    log to console "Score is { score }

                }
                else if ( computerInput ===  "Rock" && userInput === "Scissors"   ) {

                    score--
                    log to console "USER LOSES"
                    log to console "Score is { score }


                } else if ( computerInput ===  "Paper" && userInput === Paper  ) {
                    
                    
                    log to console "DRAW"
                    log to console "Score is { score }


                } else if ( computerInput ===  "Paper" && userInput ===  Rock   ) {

                    score--
                    log to console "USER LOSES"
                    log to console "Score is { score }

                } else if ( computerInput ===  "Paper" && userInput === Scissors  ) {

                    score++
                    log to console - "USER WINS"
                
                }  else if ( computerInput ===  Scissors && userInput === Paper  ) {
                    
                    score--
                    log to console "USER LOSES"

                } else if (  computerInput ===  Scissors && userInput === Rock  ) {

                    score++
                    log to console - "USER WINS"

                } else if (  computerInput ===  Scissors && userInput === Scissors  ) {

                    log to console "DRAW"

                }

            // Return score ??



                
            // log the computers choice to the console      




