
var Letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;

var guessesLeft = 9;

var guessedLetters = [];



var computerGuess = Letters[Math.floor(Math.random() * Letters.length)];
console.log(computerGuess);

document.getElementById("guesses-left").innerHTML = guessesLeft;




var userGuess = document.addEventListener('keyup', function (event) {

    console.log(guessedLetters);


    document.getElementById("guesses-left").innerHTML = guessesLeft--;

    // guessedLetters.push(event);

    var userGuess = event.key;

    console.log(userGuess);


    if (computerGuess === userGuess) {
        alert('ok cool');
        wins++;
        document.querySelector("#wins").innerHTML = wins;
        reset();
    }

    else {
        alert('No');
        losses++;

        document.querySelector("#losses").innerHTML = losses;
    }

    guessedLetters.push(userGuess);

    document.getElementById("guessesSoFar").innerHTML = guessedLetters;

   
});



function reset() {
    guessesLeft = 9; 
    guessedLetters = [];  
   
    document.getElementById("guesses-left").innerHTML = guessesLeft;  //reset display on screen
    document.getElementById("guessesSoFar").innerHTML = guessedLetters;    //reset display on screen
    computerGuess = Letters[Math.floor(Math.random() * Letters.length)];

    console.log("computer guess: " + computerGuess);

}