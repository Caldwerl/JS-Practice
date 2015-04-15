/*
  Modify a movie kiosk to put checked out movies into a rented list.
  Display this list after every rental.
  Do the reverse for returning a movie.
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
  this.moveTo = moveTo;
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

function moveTo (position) {

  this.pos = position;
}

function getElement () {

  return this.dataStore[this.pos];
}

function displayList (list) {

  for (list.front(); list.currPos() < list.length()-1; list.next()) {

    if (list.getElement() instanceof Customer) {

      print(list.getElement()["name"] + ", " + list.getElement()["movie"]);

    } else {

      print(list.getElement());
    }
  }
}

function checkOut (name, movie, filmList, customerList, rentedList) {

  if (movieList.contains(movie)) {

    var c = new Customer(name, movie);
    customerList.append(c);
    rentedList.append(filmList.remove(movie));

  } else if (rentedList.contains(movie)) {

    print(movie + " is already rented.");

  } else {

    print(movie + " is not available.");
  }
}

function returnFilm (name, filmList, customerList, rentedList) {

  var movie = '';

  for (customerList.front(); customerList.currPos < customerList.length()-1; customerList.next()) {

    if (name == customerList.getElement().name) {

      movie = customerList.getElement()["movie"];

      customerList.listSize--;
      customerList.dataStore.splice(customerList.currPos(), 1);
    }
  }

  filmList.append(rentedList.remove(movie));
}

function Customer (name, movie) {

  this.name = name;
  this.movie = movie;
}

var movieList = new List();
var rentedList = new List();
var customerList = new List();

movieList.append("Dredd");
movieList.append("Amadeus");
movieList.append("Lord of the Rings");
movieList.append("Pacific Rim");
movieList.append("Blade Runner");
movieList.append("Ghostbusters");
movieList.append("Outland");
movieList.append("Big Trouble in Little China");

print(movieList.length());

displayList(movieList);

checkOut("Brian", "Dredd", movieList, customerList, rentedList);
checkOut("David", "Dredd", movieList, customerList, rentedList);
checkOut("Brian", "Nukie", movieList, customerList, rentedList);

displayList(customerList);

returnFilm("Brian", movieList, customerList, rentedList);

movieList.append("Nukie");

displayList(movieList);

print(movieList.remove("Nukie"));
