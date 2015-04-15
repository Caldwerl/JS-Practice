/*
  Make a Deque class that allows elements to be added and removed
  from both the front and the back. Use the Deque class to determine
  if a given word is a palindrome.
*/

function Deque () {

  this.dataStore = [];
  this.enqueueFront = enqueueFront;
  this.dequeueFront = dequeueFront;
  this.enqueueBack = enqueueBack;
  this.dequeueBack = dequeueBack;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

function enqueueFront (element) {

  this.dataStore.unshift(element);
}

function dequeueFront () {

  return this.dataStore.shift();
}

function enqueueBack (element) {

  this.dataStore.push(element);
}

function dequeueBack () {

  return this.dataStore.pop();
}

function front () {

  return this.dataStore[0];
}

function back () {

  return this.dataStore[this.dataStore.length - 1];
}

function toString () {

  var retString = '';

  for (var i = 0; i < this.dataStore.length; i++) {

    retString += this.dataStore[i] + "\n";
  }

  return retString;
}

function empty () {

  if (this.dataStore.length == 0) {

    return true;
  }

  return false;
}

function isPalindrome (word) {

  var deque = new Deque();

  for (var i = 0; i < word.length; i++) {

    deque.enqueueBack(word[i]);
  }

  while (!deque.empty() && deque.dataStore.length > 1) {

    if (deque.dequeueFront() !== deque.dequeueBack()) {

      return false;
    }
  }

  return true;
}

var word = "hannah";

print(word + " is a palindrome:  " + isPalindrome(word));

word = "hana";

print(word + " is a palindrome:  " + isPalindrome(word));

word = "hanah";

print(word + " is a palindrome:  " + isPalindrome(word));
