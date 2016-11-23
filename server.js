/*
  file:   server.js
  desc:   this is a script that create a simple conversation between friends, familiy members 
          or co workers, talking about what they did this weekend and their plans for the next. 
  author: julia och johanna
  date:   21/11/16
*/

// import express ()
var express = require('express');		// npm install --save express
var app = express();

// import node.js http
var server = require('http').Server(app);

// import socket.io
var io = require('socket.io')(server);	// npm install --save socket.io

// import chance (http://chancejs.com)
var chance = require('chance').Chance(); // npm install --save chance

/* ---------------------
  Answers & Responses
------------------------*/

// the two patterns which the script looks for when
// receiving message from the client

const pattern_1 = ['What are u doing this friday?', 'What is your plans for the weekend?'];
const pattern_2 = ['How was your weekend', 'Did you have a good time this weekend?', 'Did you enjoy this weekend'];
const pattern_3 = ['What happens now?', 'Are you okay?', 'I wish you good luck'];
var ponctuation = ['!', '.', '...'];

/**
* Iterates through and array of clauses or words and 
* search them inside a given sentence (msg). Returns
* true if the search is successful and false otherwise. 
* @param {Array of strings} array_of_patterns
* @param {String} msg
* @return {boolean} 
*/
function matches(msg, array_of_patterns) {

  var msg_lower = msg.toLowerCase();

  for(var i = 0; i < array_of_patterns.length; i++) {

    var pattern_lower = array_of_patterns[i].toLowerCase();

    if(msg_lower.search(pattern_lower) > -1) {

      return true;

    }
  }
  return false;
}

/**
* Picks a random element from an array
* @param {Array} array
* @return {Object} choice
*/
function choice(array) {

  var index = chance.natural({'min': 0, 'max': array.length - 1});  // **** NOTE: 'max': array.length - 1

  return array[index];
}

/**
* Randomly picks or not a random element from an array
* @param {Array} array
* @return {Object} choice 
* @return {String} empty string
*/
function maybe(array) {

  if( chance.bool() ) {

    return choice(array);

  } else {

    return '';

  }
}

/**
* Constructs a single randomly generate answer
* @return {String} 
*/
function patter_1_answer() {
  return choice(['Hmmm', 'Ehh']) + ' ' + 'I am ' + choice(['seeing', 'meeting']) + ' ' 
    + choice(['someone', 'a date', 'my mother', 'a friend', 'it is none of your business']) + ' '
    + choice(ponctuation);
}

/**
* Constructs a randomly generate answer out of three random possibilities 
* @return {String} 
*/
function patter_2_answer() {

  switch(choice([1, 2, 3]))
  {
    case 1:
      return choice(['Yes', 'No', 'Kind of', 'It was ok']) + " because I" 
        + maybe([' won at a lottery', ' have fever', ' crashed my bike', ' fell in love']) + ' ' 
        + choice(ponctuation);
    case 2:
      return choice(['Not really', 'I can not say', 'I have no memory for this weekend ']) + ' because you ' + 
        + choice(['can not keep secret', 'do not care', 'hate me']) 
        + choice(ponctuation);
    case 3:
      return choice(['Why you care', 'Ask your mother', 'Really good']) + choice(ponctuation) + choice(ponctuation) + choice(ponctuation);
  }
}

function patter_3_answer() {
  return choice(['Okidoki', 'I get it', 'Sounds good', 'Feel free to call', 'Sorry bro', 'Thank you', 'See ya']) + ' '
    + choice(ponctuation);
}

/**
* Constructs a single randomly generate answer
* @return {String} 
*/
function default_answer() {

  return choice(['Try something else.', 'Go ahead and try another sentences.', 'I don not understand.', 
                  'Error', 'WHAT THE ****???']);
}

/**
* Matches a message to the above two patterns (pattern_1, pattern_2)
* and calls their respective answers (functions patter_1_answer and patter_2_answer )
* @return {String} 
*/

function answer(msg) {

  if(matches(msg, pattern_1)) { 

    return patter_1_answer();

  } else if(matches(msg, pattern_2)) {

    return patter_2_answer();

  } else if(matches(msg, pattern_3)) {

    return patter_3_answer();

  } else {

    return default_answer();

  }

}


/* ----------------------------------
	Server and Socket Configuration
--------------------------------------*/

// tell express to server our index.html file
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// configure socket.io
// (1) when there is a connection 
io.on('connection', function(socket) {

  console.log('got a connection');
  //io.emit('message from robot', 'Hi! my name is Reihtuag!'); // greetings

  // (2) configure the connected socket to receive custom messages ('message from human')
  // and call the function answer to produce a response
  socket.on('message from human', function(msg) {

    console.log('got a human message: ' + msg);

    var response = answer(msg);  	                  /// <--- call of the function answer defined above 

  	io.emit('message from robot', response);

  });

  socket.on('disconnet', function() {

  	console.log('got a disconnection');
  	
  });

});

/* -------------------
	Start the server
----------------------*/

// listen to connection on port 8088 --> http://localhost:8088
server.listen(8088, function () {
	console.log('listening on port: ' + 8088);
});

