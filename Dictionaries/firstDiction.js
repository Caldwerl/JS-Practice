function Dictionary () {

  this.add = add;
  this.dataStore = [];
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
  this.show = show;
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

  for (var i = 0; i < count; i++) {

    print(keys[i] + " -> " + this.dataStore[keys[i]]);
  }
}

function show (key) {

  print(key + " -> " + this.find(key));
}






var inputString = "Stannis 111\nGeralt 254\nMance 909\nDredd 823";

var parsedStrings = [];
var tempString = "";

var phoneDict = new Dictionary();

parsedStrings = inputString.split("\n");

while (parsedStrings.length > 0) {

  tempString = parsedStrings.splice(0, 1).toString().split(" ");

  phoneDict.add(tempString[0], tempString[1]);
}

print("Showing all records...");
phoneDict.showAll();

print("Searching for Dredd...");
phoneDict.show("Dredd");

print("Removing Dredd...");
phoneDict.remove("Dredd");

print("Adding Baygan...");
phoneDict.add("Baygan", 555);

print("Showing all records...");
phoneDict.showAll();

print("Clearing records...");
phoneDict.clear();

print("Showing all records...");
phoneDict.showAll();
