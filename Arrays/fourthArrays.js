/*
  Create an object that stores individual letters in an array
  and has a function for displaying the letters as a single word.
*/

function Word () {

  this.letters = [];
  this.add = add;
  this.displayWord = displayWord;
}

function add (letter) {

  this.letters.push(letter);
}

function displayWord () {

  var word = '';

  for (var i = 0; i < this.letters.length; i++) {

    word += this.letters[i];
  }

  console.log(word);
}

var hello = new Word();

hello.add('H');
hello.add('e');
hello.add('l');
hello.add('l');
hello.add('o');

console.log("Displaying array...");
console.log(hello.letters);
console.log("Displaying word...");
hello.displayWord();
