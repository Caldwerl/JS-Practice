function Dictionary () {

  this.add = add;
  this.dataStore = [];
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
  this.count = count;
  this.clear = clear;
}

function add (key, value) {

  this.dataStore[key] = value;
}

function find (key) {

  return this.dataStore[key];
}

function remove (key) {

  delete this.dataStore[key];
}

function count () {

  var n = 0;

  for each (var key in this.dataStore) {

    n++;
  }

  return n;
}

function clear () {

  for each (var key in this.dataStore) {

    delete this.dataStore[key];
  }
}

function showAll () {

  for each (var key in this.dataStore) {

    print(key + " -> " + this.dataStore[key]);
  }
}

function show (key) {

  print(key + " -> " + this.find(key));
}
