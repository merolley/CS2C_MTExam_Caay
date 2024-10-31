//reference
//https://youtu.be/cmIL1iRCM_I?si=bTy1zKd_yio9dandGuessMyNumber-WhileLoopsinJavascript

//declaring a variable that will hold the favNumber
let korek = false; //keep track wether the user won the game or not
let favNum = 5; //variable for the correct answer
//the loop for the game
while (!korek) {
    const userGuess = Number(prompt("Enter your guess number between 1-10: ")); //asking the user to enter their guess and converting it to number
 //checking the user's guess if its the same as the default number   
    if (userGuess === favNum) {
        korek = true; //setting it true to exit the loop
        console.log("Correct");
    } else if (userGuess > favNum) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}

