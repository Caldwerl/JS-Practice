/*
  Write a function that inserts an element into a list only if the element
  to be inserted is smaller than any of the elements currently in the list.
*/

function List () {

  this.dataStore = [];
  this.pos = 0;
  this.listSize = 0;
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.prepend = prepend;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains;
  this.insertSmallest = insertSmallest;
}

function append (element) {

  this.dataStore.push(element);
  this.listSize++;
}

function prepend (element) {

  this.dataStore.unshift(element);
  this.listSize++;
}

function find (element) {

  for (var i = 0; i < this.dataStore.length; i++) {

    if (this.dataStore[i] == element) {

      return i;
    }
  }

  return -1;
}

function remove (element) {

  var foundAt = this.find(element);

  if (foundAt > -1) {

    this.dataStore.splice(foundAt, 1);
    this.listSize--;
    return true;
  }

  return false;
}

function length () {

  return this.listSize;
}

function toString () {

  return this.dataStore;
}

function insert (element, after) {

  var insertPos = this.find(after);

  if (insertPos > -1) {

    this.dataStore.splice(insertPos + 1, 0, element);
    this.listSize++;
    return true;
  }

  return false;
}

function clear () {

  delete this.dataStore;
  this.dataStore = [];
  this.listSize = 0;
  this.pos = 0;
}

function contains (element) {

  for (var i = 0; i < this.dataStore.length; i++) {

    if (this.dataStore[i] == element) {

      return true;
    }
  }

  return false;
}

function front () {

  this.pos = 0;
}

function end () {

  this.pos = this.listSize - 1;
}

function prev () {

  if (this.pos > 0) {

    this.pos--;
  }
}

function next () {

  if (this.pos < this.listSize - 1) {

    this.pos++;
  }
}

function currPos () {

  return this.pos;
}

function moveTo (position) {

  this.pos = position;
}

function getElement () {

  return this.dataStore[this.pos];
}

function insertSmallest (element) {

  this.front();
  var currSmallest = this.getElement();

  for (this.currPos(); this.currPos() < this.length(); this.next()) {

    if (currSmallest < this.getElement()) {

      currSmallest = this.getElement();
    }
  }

  if (element > currSmallest) {

    this.append(element);
    return true;
  }

  return false;
}
