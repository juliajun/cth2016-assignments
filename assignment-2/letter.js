
// letter.js

var chance = require('chance'). Chance ();
var wrap = require('word-wrap');


var chance = require('chance').Chance();

var wrap = require('word-wrap');

const first = ['FRIEND', 'LOVE', 'HONEY'];

const second = ['HELLO', 'WELCOME', 'JOIN US'];

const adjectives = ['COLD', 'WARM', 'LOVELY', 'DELICIOUS', 'YUMYUM', 'GOLDEN BROWN', 'SOFT', 'SWEET', 'FRAGRANT', 'TASTEFUL', 'BOILING', 'HUMMIN', 'LITTLE', 'SMALL', 'BIG', 'CAREFULL', 'NICE'];

const nouns = ['FOOD', 'INSPIRATION', 'CAKE', 'DISH', 'RECIPE', 'HAMBURGER', 'BOLOGNESE', 'APPEL PIE', 'HUNGER', 'STOMACH', 'SMELL', 'PASSION', 'SCOPE', 'MEAT', 'PASSION', 'POTATO',];

const adverbs = ['COLDLY', 'WARMLY', 'DELICIOUSLY', 'SOFTLY', 'BEAUTIFULLY', 'FRAGRANTLY', 'TASTEFULLY', 'CAREFULLY', 'GREATLY', 'NICELY', 'LOVINGLY', 'PASSIONATELY'];

const verbs = ['MAKE', 'COOK', 'COOK UP', 'PREPARE', 'MIX', 'DESIRES','COMBINE', 'FLAVOR', 'POUR OUT', 'LIKES', 'LONGS FOR', 'LOVES', 'FRY', 'BAKE', 'CUT', 'CHOP', 'WANT', 'WISHES'];


var program = require('commander');

program
.version('0.1')
.option('-w, --width [string]', 'Width', 'empty')
.option('-s, --sentences [string]', 'Sentences', 'empty')
.parse(process.argv);

console.log(program.width);
console.log(program.sentences);

var w = program.width;
var s = program.sentences;



function choice(array) {
	var index = chance.natural({'min': 0, 'max': array.length - 1});
	return array[index];
}

function maybe(array) {
	if (chance.bool()) {
		return choice(array);

	} else {
		return"";
	}	

	}

function short () {
	return choice (adjectives) [3] + ' ' + nouns [2] + '.';

}



function long () {
	return "MY " + maybe (adjectives) + ' ' + choice(nouns) + ' ' +
					maybe(adverbs) + ' ' + choice(verbs) + ' ' +
					'ITS ' + maybe(adjectives) + ' ' + choice(nouns) + '. ';
}


function mediumlong () {
	return "THAT " + maybe (adjectives) + ' ' + choice(nouns) + ' ' +
					maybe(adverbs) + ' ' + choice(verbs) + ' ' +
					'ITS ' + choice(nouns) + '. ';
}

function medium () {
	return "ITS " + choice(nouns) + ' ' +
					choice(verbs) + ' ' +
					'MY ' + maybe(adjectives) + ' ' + choice(nouns) + '. ';
}

function short () {
	return "THIS " + maybe (adjectives) + ' ' + 
					'IS ' + maybe(adjectives) + ' ' + choice(nouns) + '. ';
}

 console.log("\n\n\n\n");


;
	var c = choice(["long", "mediumlong", "medium", "short"]);


	if(c == "long") {

		text += long();

	} else if(c == "mediumlong") {

		text += mediumlong();

	} else if(c == "medium") {

		text += medium();

	} else if(c == "short") {

		text += short();


	}



var text = '';

for(var i = 0; i < 5; i++) {

	text += long();


}
console.log(wrap(text, {'width': 65}))


console.log("\n\n\n\n");












