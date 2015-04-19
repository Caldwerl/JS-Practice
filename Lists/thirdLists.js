/*
  Create a Person class with name and gender. Create a function to display Person's by gender.
*/

function List () {

  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];

  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.getElement = getElement;
  this.contains = contains;
}

function append (element) {

  this.dataStore[this.listSize++] = element;
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

    this.listSize--;
    return this.dataStore.splice(foundAt, 1);
  }

  return null;
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
  this.pos = 0;
  this.listSize = 0;
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

function getElement () {

  return this.dataStore[this.pos];
}

function displayList (list) {

  list.front();

  while (list.currPos() < list.length() - 1) {

    if (list.getElement() instanceof Person) {

      print(list.getElement().name + ", " + list.getElement().gender);

    } else {
      print(list.getElement());
    }

    list.next();
  }
}

function displayListGender (list, gender) {

  list.front();

  while (list.currPos() < list.length() - 1) {

    if (list.getElement() instanceof Person) {

      if (list.getElement().gender == gender) {

        print(list.getElement().name + ", " + list.getElement().gender);
      }
    } else {
      print(list.getElement());
    }

    list.next();
  }
}

function Person (name, gender) {

  this.name = name;
  this.gender = gender;
}

var people = new List();

people.append(new Person("Brian", "male"));
people.append(new Person("Jihyun", "female"));
people.append(new Person("Adam", "male"));
people.append(new Person("Charlotte", "female"));
people.append(new Person("Brendan", "male"));
people.append(new Person("Alysha", "female"));
people.append(new Person("Cooper", "male"));

displayList(people);
print();
displayListGender(people, "male");
print();
displayListGender(people, "female");
