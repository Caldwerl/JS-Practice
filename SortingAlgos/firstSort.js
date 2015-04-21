/*
  Compare runtimes of 3 main sorting algorithms with strings and numbers
*/

function bubbleSort () {

  var numElements = this.dataStore.length;
  var temp;

  for (var outer = numElements; outer >= 2; outer--) {

    for (var inner = 0; inner <= outer - 1; inner++) {

      if (this.dataStore[inner] > this.dataStore[inner + 1]) {

        swap(this.dataStore, inner, inner + 1);
      }
    }
  }
}

function selectionSort () {

  var min, temp;

  for (var outer = 0; outer <= this.dataStore.length - 2; outer++) {

    min = outer;

    for (var inner = outer + 1; inner <= this.dataStore.length - 1; inner++) {

      if (this.dataStore[inner] < this.dataStore[min]) {

        min = inner;
      }
    }

    swap(this.dataStore, outer, min);
  }
}

function insertionSort () {

  var temp, inner;

  for (var outer = 1; outer <= this.dataStore.length - 1; outer++) {

    temp = this.dataStore[outer];
    inner = outer;

    while (inner > 0 && this.dataStore[inner - 1] >= temp) {

      this.dataStore[inner] = this.dataStore[inner - 1];

      inner--;
    }

    this.dataStore[inner] = temp;
  }
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
  this.bubbleSort = bubbleSort;
  this.insertionSort = insertionSort;
  this.selectionSort = selectionSort;

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




var numElements = 100;

print("Number of elements to be tested: " + numElements);

print("Beginning numeric bubble sort test...");
var bubbleData = new DataArray(numElements);
bubbleData.setData();

var start = new Date().getTime();
bubbleData.bubbleSort();
var stop = new Date().getTime();
var elapsed = stop - start;
print("Bubble runtime was: " + elapsed + " milliseconds.");



print("Beginning numeric selection sort test...");
var selectionData = new DataArray(numElements);
selectionData.setData();

start = new Date().getTime();
selectionData.selectionSort();
stop = new Date().getTime();
elapsed = stop - start;
print("Selection runtime was: " + elapsed + " milliseconds.");



print("Beginning numeric insertion sort test...");
var insertionData = new DataArray(numElements);
insertionData.setData();

start = new Date().getTime();
insertionData.insertionSort();
stop = new Date().getTime();
elapsed = stop - start;
print("Insertion runtime was: " + elapsed + " milliseconds.");






print("Beginning string bubble sort test...");
var bubbleSData = new DataArray(numElements);
bubbleSData.setSData();

start = new Date().getTime();
bubbleSData.bubbleSort();
stop = new Date().getTime();
elapsed = stop - start;
print("Bubble runtime was: " + elapsed + " milliseconds.");



print("Beginning string selection sort test...");
var selectionSData = new DataArray(numElements);
selectionSData.setSData();

start = new Date().getTime();
selectionSData.selectionSort();
stop = new Date().getTime();
elapsed = stop - start;
print("Selection runtime was: " + elapsed + " milliseconds.");



print("Beginning string insertion sort test...");
var insertionSData = new DataArray(numElements);
insertionSData.setSData();

start = new Date().getTime();
insertionSData.insertionSort();
stop = new Date().getTime();
elapsed = stop - start;
print("Insertion runtime was: " + elapsed + " milliseconds.");
