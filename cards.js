var spanish = require('./spanishCards.js');
var french = require('./frenchCards.js');
var italian = require('./italianCards.js');
var hawaiian = require('./hawaiianCards.js');

console.log("Ready!");

// this is the card constructor
function buildCard(deck, side, i) {
	console.log("Here is card # " + i);
	this.front = deck[i].front;
	this.back = deck[i].back;
	if (side == "front") {
		console.log(this.front);
	} else if (side == "back") {
		console.log(this.back);
	}
};

buildCard(italian, "back", 0);