function Dictionary () {

  this.add = add;
  this.dataStore = {};
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
  this.count = count;
  this.clear = clear;
}

function add (key) {

  if (this.dataStore[key] > 0) {

    this.dataStore[key] += 1;

  } else {
    this.dataStore[key] = 1;
  }
}

function find (key) {

  return this.dataStore[key];
}

function remove (key) {

  if (this.dataStore[key] == 1) {
    delete this.dataStore[key];
  } else {
    this.dataStore[key] -= 1;
  }
}

function count () {

  var n = 0;

  for (var key in this.dataStore) {

    n++;
  }

  return n;
}

function clear () {

  for (var key in this.dataStore) {

    delete this.dataStore[key];
  }
}

function showAll () {

  var count = this.count();
  var keys = [];

  if (count == 0) {
    print("This dictionary is empty.");
  }

  for (var key in this.dataStore) {

    keys.push(key);
  }

  keys.sort();

  for (var i = 0; i < count; i++) {

    print(keys[i] + " -> " + this.dataStore[keys[i]]);
  }
}

function show (key) {

  print(key + " -> " + this.find(key));
}

var wordCount = new Dictionary();

wordCount.add("fly");
wordCount.add("by");
wordCount.add("night");
wordCount.showAll();

wordCount.add("fly");
wordCount.showAll();

wordCount.remove("fly");
wordCount.showAll();

wordCount.clear();
wordCount.showAll();
