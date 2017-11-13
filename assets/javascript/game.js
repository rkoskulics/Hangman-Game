// Create an array with the potential answers
var finalAnswers = ["bookkeeper", "bookkeeper"];
// Randomly choose an item in the array and assign it to a variable
var toBeGuessed = finalAnswers[Math.floor(Math.random() * finalAnswers.length)];
// Create a new string with the number of underscores in the variable called emptyGuess
var emptyGuess = '';
for (var i = 0; i < toBeGuessed.length; ++i) {
    emptyGuess += '_';
}
// Create a variable called wins set to 0
var wins = 0;
// Create a variable called chances set to 10
var chances = 10;
// Create a variable for each of the correct guesses including the dashes
var newGuess = "";
console.log(toBeGuessed.length);
// Replace a given underscore with the correct letter when the user types in the correct letter
document.onkeyup = function (event) {		
	var letterGuess = event.key;
	if(toBeGuessed.includes(letterGuess) === false) {
		chances = chances - 1;
	}else if (toBeGuessed.includes(letterGuess)) {
		var replaceDash = toBeGuessed.indexOf(letterGuess);
		if(replaceDash === 0){
			newGuess = letterGuess + emptyGuess.substr(0, toBeGuessed.length - 1);
		}else if(replaceDash === toBeGuessed.length - 1){
			newGuess = emptyGuess.substr(0, replaceDash) + letterGuess;
		}else{
			newGuess = emptyGuess.substr(0, replaceDash) + letterGuess + emptyGuess.substr(replaceDash, toBeGuessed.length - 1);
		}
		console.log(replaceDash);
		console.log(newGuess);
	}
	
// 	var newGuess = [];
// 	for(var i=0; i<toBeGuessed.length; i++) {
//     if (toBeGuessed[i] === letterGuess) {
//     	newGuess.push(i);
//     }
// }
// }

	// if (toBeGuessed.includes(letterGuess)) {
	// 	var rightGuess = toBeGuessed.indexOf(letterGuess);
	// 	console.log(rightGuess);
	// 		if ((rightGuess = 0) && (rightGuess < toBeGuessed.length())){
	// 			var replaceDash = toBeGuessed.indexOf(letterGuess);
	// 			console.log(letterGuess, replaceDash);
	// 			var newGuess = emptyGuess.substr(replaceDash - 1) + letterGuess;
	// 			console.log(newGuess);
	// 		}
}

		
	 
	

