// Create an array with the potential answers
var finalAnswers = ["bookkeeper", "bookkeepers" ];
// Randomly choose an item in the array and assign it to a variable
var toBeGuessed = finalAnswers[Math.floor(Math.random() * finalAnswers.length)];
// Create a new string with the number of underscores in the variable called emptyGuess

var answerArray = [];
for (var i = 0; i < toBeGuessed.length; ++i) {
    answerArray[i] = "_";
}
// Create a variable called wins set to 0
var wins = 0;
// Create a variable called chances set to 10
var chances = 10;
// Create a variable counting how many letters are left unguessed
var remainingLetters = toBeGuessed.length;
var guessArray = [];
// Game itself
document.onkeyup = function(event) {
	var letterGuess = event.key;
	guessArray.push(letterGuess);
	document.getElementById("letter-guess").innerHTML = "Here is your current Guess: " + letterGuess;
	document.getElementById("chances").innerHTML = "Here's how many chances you have left: " + chances;
	if(toBeGuessed.includes(letterGuess) === false) {
		chances = chances - 1;
	}else if (toBeGuessed.includes(letterGuess) === true) {
		for(j = 0; j < toBeGuessed.length; j++){
			if (toBeGuessed[j] === letterGuess) {
				answerArray[j] = letterGuess;
				remainingLetters = remainingLetters - 1;
				;
				if(remainingLetters === 0) {
					document.getElementById("outcome").innerHTML = "You Win! Reload to try Again!";
					wins = wins + 1; 
					document.getElementById("outcome").innerHTML = "Wins: " + wins;

				}else if(chances <= 0) {
					document.getElementById("outcome").innerHTML = "You Lose: Reload to try Again!";

				}
			}
		}
	
	

	document.getElementById("answer-array").innerHTML = "Here are the Correct Letters you guessed: " + answerArray;
	// console.log(answerArray);
	// document.getElementById("letter-guess").innerHTML = "Here is your current Guess: " + letterGuess;
	// console.log(letterGuess);
	document.getElementById("guess-array").innerHTML = "Here are all your guesses: " + guessArray;
	// console.log(guessArray);
	// document.getElementById("chances").innerHTML = "Here's how many chances you have left: " + chances;
	// console.log(chances);
	// console.log(remainingLetters);
};
};


		
	
