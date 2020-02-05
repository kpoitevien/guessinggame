// Declare our variables
const prompt = require('readline-sync')
const maxRange = 10
const maxGuesses = 3
let currentGuess = 0
// Generate random number
const randomNumber = Math.floor(Math.random() * maxRange + 1)
console.log('random number', randomNumber)

const userName = prompt.question("Hello, what's your name?\n")

let userGuess = prompt.question(
  `Hi ${userName}, I have chose a number between 1 and ${maxRange}, you have ${maxGuesses} tries to guess it.\n`
)
// handle guess function
const handleGuess = userGuess => {
  for (let guesses = 0; guesses < maxGuesses; guesses++) {
    if (userGuess == randomNumber) {
        console.log('You win!🏆')
    }  else if (guesses===  maxGuesses -1){
        console.log('You lose! 💀')
    }  else if(userGuess > randomNumber) {
        console.log('Think lower')
        currentGuess++
        console.log('Guesses left: ', maxGuesses - currentGuess)
        userGuess = prompt.question('Guess again...\n')
    }  else {
        console.log("Think higher.")
        currentGuess++
        console.log('Guesses left: ', maxGuesses - currentGuess)
        userGuess = prompt.question('Guess again...\n')
    }
  }
}

// Ask the user if they want to play again
const playAgain = () => {
    let playAgain = prompt.question('Do you want to play again? y || n\n')
    playAgain = playAgain.toLowerCase()
    if (playAgain === 'y') {
        // Reset our game variables 
        randomNumber = Math.floor(Math.random() * maxRange + 1)
        let newGuess = prompt.question('I have chosen a number between 1 and ${maxRange},you have ${maxGuesses} tries to guess it.\n')
        currentGuess = 0
        guesses = 0 
        handleGuess(newGuess)
    } else {
      console.log('Thanks for playing. \n Goodbye.') 
 }
    
}

//handleGuess(userGuess)
