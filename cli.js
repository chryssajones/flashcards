var inquirer = require("inquirer");
var fs = require('fs');
var buildCard = require('./cards.js');

console.log("Welcome to the flashcard practice app.");
var deckList = ["French", "Italian", "Hawaiian", "Spanish"];

var start = function() {
	inquirer.prompt([
      {
        name: "choice",
        type: "list",
        choices: deckList,
        message: "Which deck would you like to practice?"
      }
    ]).then(function(answer) {
    	console.log("You are using the " + answer.choice + " deck. Good luck!")
    	switch(answer.choice) {
   			case 0: "French";
	        	// call french deck
	        	break;
		    case 1: "Italian";
		        // call italian deck
		        break;
		    case 2: "Hawaiian";
		        // call hawaiian deck
		        break;
		    case 3: "Spanish";
		       // call spanish deck
		        break;		        		        
		}
	});
};

start();