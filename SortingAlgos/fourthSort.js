/*
  Compare runtime of Quicksort vs Javascripts built in .sort() on 10,000 numbers
*/

function quickSort (arr) {

  if (arr.length == 0) {
    return [];
  }

  var left = [];
  var right = [];
  var pivot = arr[0];

  for (var i = 1; i < arr.length; i++) {

    if (arr[i] < pivot) {

      left.push(arr[i]);
    } else {

      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

function DataArray (numElements) {

  this.dataStore = [];
  this.pos = 0;
  this.numElements = numElements;
  this.insert = insert;
  this.toString = toString;
  this.clear = clear;
  this.setData = setData;
  this.setSData = setSData;
  this.swap = swap;
  this.quickSort = quickSort;

  for (var i = 0; i < numElements; i++) {

    this.dataStore[i] = i;
  }
}

function setData () {

  for (var i = 0;  i < this.numElements; i++) {

    this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
  }
}

function setSData () {
  for (var i = 0;  i < this.numElements; i++) {

    this.dataStore[i] = String.fromCharCode(Math.floor(Math.random() * (this.numElements + 1)))
                      + String.fromCharCode(Math.floor(Math.random() * (this.numElements + 1)))
                      + String.fromCharCode(Math.floor(Math.random() * (this.numElements + 1)))
                      + String.fromCharCode(Math.floor(Math.random() * (this.numElements + 1)))
                      + String.fromCharCode(Math.floor(Math.random() * (this.numElements + 1)));
  }
}

function clear () {

  for (var i = 0; i < this.dataStore.length; i++) {

    this.dataStore[i] = 0;
  }
}

function insert (element) {

  this.dataStore[this.pos++] = element;
}

function toString () {

  var retstr = "";

  for (var i = 0; i < this.dataStore.length; i++) {

    retstr += this.dataStore[i] + " ";

    if (i > 0 && i % 10 == 0) {
      retstr += "\n";
    }
  }

  return retstr;
}

function swap (arr, index1, index2) {

  var temp = arr[index1];

  arr[index1] = arr[index2];
  arr[index2] = temp;
}


var numElements = 10000;

var quickData = new DataArray(numElements);
quickData.setData();

var defaultData = new DataArray(numElements);
defaultData.setData();

print("Number of elements to be tested: " + numElements);

print("Beginning Quicksort test...");
var start = new Date().getTime();
quickData.quickSort(quickData.dataStore);
var stop = new Date().getTime();
var elapsed = stop - start;
print("Quicksort runtime was: " + elapsed + " milliseconds.");


print("Beginning Array.sort() test...");
var start = new Date().getTime();
defaultData.dataStore.sort();
var stop = new Date().getTime();
var elapsed = stop - start;
print("Array.sort() runtime was: " + elapsed + " milliseconds.");
