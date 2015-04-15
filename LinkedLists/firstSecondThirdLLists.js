/*
  Create advance(n), back(n), show() functions for a linked list.
*/

function Node (element) {

  this.element = element;
  this.next = null;
  this.previous = null;
}

function LinkedList () {

  this.head = new Node("head");
  this.currNode = this.head;
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findLast = findLast;
  this.remove = remove;
  this.dispReverse = dispReverse;
  this.advance = advance;
  this.back = back;
  this.show = show;
}

function remove (item) {

  var currNode = this.find(item);

  if (!(currNode.next == null)) {

    currNode.previous.next = currNode.next;
    currNode.next.previous = currNode.previous;

    currNode.next = null;
    currNode.previous = null;
  }
}

function findLast () {

  var currNode = this.head;

  while (!(currNode.next == null)) {

    currNode = currNode.next;
  }

  return currNode;
}

function display () {

  var currNode = this.head;

  while (!(currNode == null)) {

    print(currNode.next.element);
    currNode = currNode.next;
  }
}

function find (item) {

  var currNode = this.head;

  while (currNode.element != item) {

    currNode = currNode.next;
  }

  return currNode;
}

function insert (newElement, item) {

  var newNode = new Node(newElement);
  var current = this.find(item);

  newNode.next = current.next;
  newNode.previous = current;
  current.next = newNode;
}

function dispReverse () {

  var currNode = this.head;
  currNode = this.findLast();

  while (!(currNode.previous == null)) {

    print(currNode.element);
    currNode = currNode.previous;
  }
}

function advance (n) {

  var i = 0;

  while (this.currNode.next != null && i < n) {

    this.currNode = this.currNode.next;
    i++;
  }
}

function back (n) {

  var i = 0;

  while (this.currNode.previous != this.head && this.currNode.previous != null && i < n) {

    this.currNode = this.currNode.previous;
    i++;
  }
}

function show () {

  print(this.currNode.element);
}

var linkList = new LinkedList();

linkList.insert(new Node("Aoo"));
linkList.insert(new Node("Boo"));
linkList.insert(new Node("Coo"));
linkList.insert(new Node("Doo"));
linkList.insert(new Node("Eoo"));
linkList.insert(new Node("Foo"));
linkList.insert(new Node("Goo"));
linkList.insert(new Node("Hoo"));
linkList.insert(new Node("Ioo"));
linkList.insert(new Node("Joo"));
linkList.insert(new Node("Koo"));

linkList.display();

linkList.show();

linkList.advance(2);

linkList.show();

linkList.back(1);

linkList.show();
