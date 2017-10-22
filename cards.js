var spanish = require('./spanishCards.js');
var french = require('./frenchCards.js');
var italian = require('./italianCards.js');
var hawaiian = require('./hawaiianCards.js');

console.log("Card Constructor is ready!");

// this is the card constructor
var buildCard = function(deck, side, i) {
	console.log("Here is card # " + i);
	this.front = deck[i].front;
	this.back = deck[i].back;
	if (side == "front") {
		console.log(this.front);
	} else if (side == "back") {
		console.log(this.back);
	}
};

buildCard(hawaiian, "back", 1);


module.exports = buildCard;
