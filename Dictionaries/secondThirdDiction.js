function Dictionary () {

  this.add = add;
  this.dataStore = [];
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

  delete this.dataStore[key];
}

function count () {

  var n = 0;

  for (var key in Object.keys(this.dataStore)) {

    n++;
  }

  return n;
}

function clear () {

  for (var key in Object.keys(this.dataStore)) {

    delete this.dataStore[key];
  }
}

function showAll () {

  for (var key in Object.keys(this.dataStore).sort()) {

    print(key + " -> " + this.dataStore[key]);
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
