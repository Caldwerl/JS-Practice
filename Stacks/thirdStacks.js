/*
  Create a function to filter out select elements of a stack while retaining the order.
*/

function Stack () {

  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

function push (element) {

  this.dataStore[this.top] = element;
  this.top++;
}

function peek () {

  return this.dataStore[this.top - 1];
}

function pop () {

  return this.dataStore[--this.top];
}

function clear () {

  this.top = 0;
}

function length () {

  return this.top;
}

function filterOutSelect (stack, select) {

  var tempStack = new Stack();
  var numFiltered = 0;

  while(stack.length() > 0) {

    if (stack.peek() == select) {

      stack.pop();
      numFiltered++;

    } else {

      tempStack.push(stack.pop());
    }
  }

  while (tempStack.length() > 0) {

    stack.push(tempStack.pop());
  }

  print("Filtered " + numFiltered + " instances of " + select);
}

var pezDisp = new Stack();

pezDisp.push("red");
pezDisp.push("red");
pezDisp.push("white");
pezDisp.push("yellow");
pezDisp.push("red");
pezDisp.push("white");
pezDisp.push("yellow");
pezDisp.push("red");
pezDisp.push("white");
pezDisp.push("yellow");
pezDisp.push("red");
pezDisp.push("red");


filterOutSelect(pezDisp, "yellow");

while (pezDisp.length() > 0) {

  print(pezDisp.pop());
}
