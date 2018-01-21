// load dependencies
var inquirer = require("inquirer");

// load card decks
var spanish = require('./spanishCards');
var french = require('./frenchCards');
var italian = require('./italianCards');
var hawaiian = require('./hawaiianCards');

var deckList = ["French", "Hawaiian", "Italian", "Spanish"];

// initialize the round
var deck = "";
var round = 1;
var correct = 0;
var incorrect = 0;

// this function starts the game
var start = function() {
	console.log("Welcome to the flashcard practice app.");
	console.log("===========================================");
	chooseDeck();
};

// this function lets the user select the card deck for this round
var chooseDeck = function() {
	inquirer.prompt([
		{
			name: "choice",
			type: "list",
			choices: deckList,
			message: "Which deck would you like to practice?"
		}
		]).then(function(answer) {
	    	console.log("You are using the " + answer.choice + " deck. Good luck!");
	    	console.log("================================================");

			// this switch sets the deck
			switch (answer.choice) {
				case "French":
					deck = french;
					break;
				case "Hawaiian":
					deck = hawaiian;
					break;
				case "Italian":
					deck = italian;
					break;	     		;
				case "Spanish":
					deck = spanish;
			}

		// call the card constructor function for the selected deck
		getCard(deck);

	});
};


// this is the card constructor
var getCard = function(deck) {
	console.log("Ready? Here's card #" + round);

	var front = deck[round].front;
	var back = deck[round].back;

	inquirer.prompt([
    	{
	        name: "input",
	        type: "text",
	        message: "What is the translation of " + front + "?"
    	}
	]).then(function(answer) {

    	var userGuess = answer.input;
		console.log("You typed: " + userGuess);

	    	if (userGuess === back) {
				correct ++;
	    		console.log("That is correct! Great job!");
	    		console.log("Your new score is >>> Correct: " + correct + ", Incorrect: " + incorrect);
	    		console.log("=============================================");

				if (correct < 10) {
					round ++;
					getCard(deck);
				} else if (correct >= 10) {
					console.log("Great job! Be sure to keep practing!");
					return;
				}

			} else {
				incorrect ++;				
				console.log("Sorry, that is incorrect. The correct answer is " + back);
				console.log("Your new score is >>> Correct: " + correct + ", Incorrect: " + incorrect);
	    		console.log("=============================================");

				if (incorrect < 3) {
					round ++;
					getCard(deck);
				} else if (incorrect >= 3) {
					console.log("Perhaps you should study a bit more and try again later.");
					return;
				}

			}
	});
};




// var flipSide = function() {
// 	var side1 = "";
// 	var side2 = "";
// 	var r = Math.floor((Math.random() * 2));
// 	console.log("The flipSide function was called and the random number is " + r);
// 		if (r == 0) {
// 			side1 = "front";
// 			side2 = "back";
// 		} else {
// 			side1 = "back";
// 			side2 = "front";
// 		}
// 		return side1, side2;
// };

start();

