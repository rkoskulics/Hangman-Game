// Create an array with the potential answers
var finalAnswers = ["bookkeepers", "bookkeeper"];
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
// Game itself
document.onkeyup = function(event) {
	var letterGuess = event.key;
	var guessArray = [];
	guessArray.push(letterGuess);
	if(toBeGuessed.includes(letterGuess) === false) {
		chances = chances - 1;
	}else if (toBeGuessed.includes(letterGuess) === true) {
		for(j = 0; j < toBeGuessed.length; j++){
			if (toBeGuessed[j] === letterGuess) {
				answerArray[j] = letterGuess;
				remainingLetters = remainingLetters - 1;
				;
			}
		}
	}
	$(document).ready(function(){
		$("#answer-array").text("The word " + answerArray);
		$("#letter-guess").text("Your guess " + letterGuess);
		$("#guess-array").text("Your old guesses " + guessArray);
		$("#chances").text("Chances you have left " + chances);
	});


	console.log(answerArray)
	console.log(letterGuess);
	console.log(guessArray);
	console.log(chances);
	console.log(remainingLetters)
}