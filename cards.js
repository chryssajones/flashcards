var inquirer = require("inquirer");
var spanish = require('./spanishCards.js');
var french = require('./frenchCards.js');
var italian = require('./italianCards.js');
var hawaiian = require('./hawaiianCards.js');
// var deckChoice = require('./cli.js');
var correct = 0;
var incorrect = 0;
var i = 1;

console.log("Card Constructor is ready!");

var deckChoice = spanish;

// this is the card constructor
var getCard = function(deck) {
	console.log("The getCard function was called")
	var c = Math.floor((Math.random() * deck.length));
	console.log("Ready? Here's card #" + i);
	buildCard(deck, c);
	// flipSide();
	// console.log("side1 = " + side1 ", side2 = " + side2);	
	query(this.front, this.back);
	i++;
};


var buildCard = function(deck, i) {
	console.log("The buildCard function was called on card #" + i);
	this.front = deck[i].front;
	this.back = deck[i].back;
	return this.front, this.back;
};


var userGuess = "";
var query = function(side1, side2){
	console.log("The query function was called");
	inquirer.prompt([
      {
        name: "input",
        type: "text",
        message: "What is the translation of " + side1
      }
    ]).then(function(answer) {
    	userGuess = answer.input;
    	if (userGuess == side2) {
			console.log("That is correct! Total correct:" + correct);
			correct ++;
			if (correct < 10) {
				getCard(deckChoice);
			} else if (correct >= 10) {
				console.log("Great job! Be sure to keep practing!")
				start();
			}

		} else {
			console.log("Sorry, that is incorrect. The correct answer is " + side2);
			incorrect ++;
			if (incorrect < 3) {
				getCard(deckChoice);
			} else if (incorrect >= 3) {
				console.log("Perhaps you should study a bit more and try again later.");
			}
		}
    });
};


var side1 = "";
var side2 = "";
var flipSide = function() {
	var r = Math.floor((Math.random() * 2));
	console.log("The flipSide function was called and the random number is " + r);
		if (r == 0) {
			side1 = "front";
			side2 = "back";
		} else {
			side1 = "back";
			side2 = "front";
		}
		return side1, side2;
};


getCard(deckChoice);

// module.exports = buildCard;
module.exports = getCard;
// module.exports = correct;
// module.exports = incorrect;
