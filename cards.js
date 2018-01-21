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
	console.log("\n \n Welcome to the flashcard practice app.");
	console.log("===========================================\n");
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

	// this flips the side of the card
	var side1;
	var side2;
	var r = Math.floor((Math.random() * 2));
		if (r == 0) {
			side1 = deck[round].front;
			side2 = deck[round].back
		} else {
			side1 = deck[round].back
			side2 = deck[round].front;
		}

	console.log("\n Ready? Here's card #" + round);

	inquirer.prompt([
    	{
	        name: "input",
	        type: "text",
	        message: "What is the translation of " + side1 + "?"
    	}
	]).then(function(answer) {

    	var userGuess = answer.input;
		console.log("You typed: " + userGuess);

	    	if (userGuess === side2) {
				correct ++;
	    		console.log("That is correct! Great job!");
	    		console.log("\n Your new score is >>> Correct: " + correct + ", Incorrect: " + incorrect);
	    		console.log("=============================================");

				if (correct < 10) {
					round ++;
					getCard(deck);
				} else if (correct >= 10) {
					console.log("\n Great job! Be sure to keep practing!");
					return;
				}

			} else {
				incorrect ++;				
				console.log("Sorry, that is incorrect. The correct answer is " + side2);
				console.log("\n Your new score is >>> Correct: " + correct + ", Incorrect: " + incorrect);
	    		console.log("=============================================");

				if (incorrect < 3) {
					round ++;
					getCard(deck);
				} else if (incorrect >= 3) {
					console.log("\n Perhaps you should study a bit more and try again later.");
					return;
				}

			}
	});
};


start();

