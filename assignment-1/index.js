/*
    file:   person.js
    desc:   simple script that matches incoming arguments (--name) 
            with a simple database
    author: gauthier
    date:   03/11/16
*/

// import 'commander' (https://www.npmjs.com/package/commander)
var program = require('commander');

// database of books
var book1_title = "The Three-body Problem";
var book1_author = "Cixin Liu";
var book1_price = 12.99;
var book1_kind = "Paperback"

var book2_title = "The Little History of the Netherlands for Dummies";
var book2_author = "Jury Smith";
var book2_price = 9.99;
var book2_kind = "Paperback"

var book3_title = "A Brief History of Time";
var book3_author = "Stephen Hawking";
var book3_price = 13.99;
var book3_kind = "Paperback"

var book4_title = "To Kill a Mockingbird";
var book4_author = "Harper Lee";
var book4_price = 9.50;
var book4_kind = "Paperback"

var book5_title = "The Zombie Survival Guide";
var book5_author = "Max Brooks";
var book5_price = 15.99;
var book5_kind = "Trade Paperback"



// initialise program (aka commander) 
program
  .version('0.1')
  .option('-t, --title [string]', 'Title of the book to match', 'empty') // add option --name with default value "empty"
  .option('-a, --author [string]', 'Author of the book to match', 'empty')
  .option('-p, --price [string]', 'Price of the book to match', 'empty')
  .option('-k, --kind [string]', 'Kind of the book to match', 'empty')
  .parse(process.argv);

// check what the value of name is regardless of if it matches or not
console.log(program.title); // this line can be commented out

// match value of input's "name" argument
switch(program.title)
{
    case ('book1'):
        // input match book1
        console.log('The Three-body Problem');  // print title
        console.log('Cixin Liu');   // print author
        console.log('12.99');   // print language
        console.log('Paperback');    // print kind
        break;
    case ('book2'):
        // input match book2
        console.log('The Little History of the Netherlands for Dummies');
        console.log('Jury Smith');
        console.log('9.99');
        console.log('Paperback');
        break;
    case ('book3'):
        // input match book3
        console.log('A Brief History of Time');
        console.log('Stephen Hawking');
        console.log('13.99');
        console.log('Paperback');
        break;
        case ('book4'):
        // input match book4
        console.log('To Kill a Mockingbird');
        console.log('Harper Lee');
        console.log('9.50');
        console.log('Paperback');
        case ('book5'):
        // input match book5
        console.log('The Zombie Survival Guide');
        console.log('Max Brooks');
        console.log('15.99');
        console.log('Trade Paperback');
    default:
        // default message if no match
        console.log('...');
        break;
}