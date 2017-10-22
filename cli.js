// Please launch this app from cards.js instead.  The CLI file doesn't work.


// var inquirer = require("inquirer");
// var getCard = require('./cards.js');
// var correct = require('./cards.js');
// var incorrect = require('./cards.js');

// var deckList = ["French", "Italian", "Hawaiian", "Spanish"];
// var deckChoice = "";

// var start = function() {
// 	console.log("Welcome to the flashcard practice app.");
// 	chooseDeck();
// };

// var chooseDeck = function() {
// 	inquirer.prompt([
//       {
//         name: "choice",
//         type: "list",
//         choices: deckList,
//         message: "Which deck would you like to practice?"
//       }
//     ]).then(function(answer) {
//     	console.log("You are using the " + answer.choice + " deck. Good luck!")
//     	var string = answer.choice;
//     	deckChoice = string.toLowerCase();
//     	console.log(deckChoice);
//     	getCard(deckChoice);
// 		});
// };
    	

// start();
// module.exports = deckChoice;