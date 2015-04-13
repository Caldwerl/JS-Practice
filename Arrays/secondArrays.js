/*
  Store a set of words in an array and display
  the contents both forward and backward.
*/

function forward (sentence) {

  console.log("Begin printing array forwards...");

  for (var i = 0; i < sentence.length; i++) {

    console.log(sentence[i]);
  }

  console.log("Forward printing completed.")
}

function backward (sentence) {

  console.log("Begin printing array backwards...");

  for (var i = sentence.length; i >= 0; i--) {

    console.log(sentence[i]);
  }

  console.log("Backward printing completed.")
}

var sentence = ["Dio", "please", "save", "me", "from", "this", "Hello", "World!"];

forward(sentence);
backward(sentence);
