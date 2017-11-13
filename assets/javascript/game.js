// Create an array with the potential answers
var finalAnswers = ["bookkeeper", "bookkeeper"];
// Randomly choose an item in the array and assign it to a variable
var toBeGuessed = finalAnswers[Math.floor(Math.random() * finalAnswers.length)];
// Create a new string with the number of underscores in the variable called emptyGuess

// var emptyGuess = "";
// for (var i = 0; i < toBeGuessed.length; ++i) {
//     emptyGuess.push += "_";
// }
for(var guess = ""; guess.length < toBeGuessed.length; guess += "_"){}
console.log(guess)
// Create a variable called wins set to 0
var wins = 0;
// Create a variable called chances set to 10
var chances = 10;

console.log(toBeGuessed.length);
// Replace a given underscore with the correct letter when the user types in the correct letter
document.onkeyup = function (event) {		
	var letterGuess = event.key;
	// Adds the user guess to an array named guessArray
	var guessArray = []
	guessArray.push(letterGuess);
		if(toBeGuessed.includes(letterGuess) === false) {
			chances = chances - 1;
		}else if (toBeGuessed.includes(letterGuess)) {
			var replaceDash = toBeGuessed.indexOf(letterGuess);
			if(replaceDash === 0){
				guess = letterGuess + guess.substr(0, toBeGuessed.length - 1);
			}else if(replaceDash === toBeGuessed.length - 1){
				guess = guess.substr(0, replaceDash) + letterGuess;
			}else{
				guess = guess.substr(0, replaceDash) + letterGuess + guess.substr(replaceDash + 1, toBeGuessed.length - 1);
			}
			console.log(replaceDash);
			console.log(guess);
			console.log(guessArray);
		}
// Need to show the wins, replaceDash, guess, chances, and guessArray in HTML.
// Need to figure out how to check for the same letter multiple times.
// Need to figure out how to define a win.   
	

}



		
	 
	

