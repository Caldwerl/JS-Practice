/*
  Create a singly linked list with a show, advance, and count function
*/

function Node (element) {

  this.element = element;
  this.next = null;
}

function LinkedList () {

  this.head = new Node("head");
  this.currNode = this.head;
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.remove = remove;
  this.findPrevious = findPrevious;
  this.show = show;
  this.count = count;
  this.advance = advance;
}

function find (element) {

  this.currNode = this.head;

  while (this.currNode.next != null && this.currNode.element != element) {

    this.currNode = this.currNode.next;
  }

  return this.currNode;
}

function insert (element) {

  this.currNode = this.head;

  while (this.currNode.next != null) {

    this.currNode = this.currNode.next;
  }

  this.currNode.next = new Node(element);
}

function display () {

  this.currNode = this.head;

  while (this.currNode.next != null) {

    print(this.currNode.next.element);

    this.currNode = this.currNode.next;
  }
}

function remove (element) {

  var prevNode = this.findPrevious(element);

  prevNode.next = prevNode.next.next;

}

function findPrevious (element) {

  this.currNode = this.head;

  while (this.currNode.next != null && this.currNode.next.element != element) {

    this.currNode = this.currNode.next;
  }

  return this.currNode;
}

function show () {

  print(this.currNode.element);
}

function count (element) {

  var count = 0;
  this.currNode = this.head;

  while (this.currNode.next != null) {

    if (this.currNode.element == element) {

      count++;
    }

    this.currNode = this.currNode.next;
  }

  return count;
}

function advance (n) {

  var i = 0;

  while (this.currNode.next != null && i < n) {

    this.currNode = this.currNode.next;
    i++;
  }
}


var list = new LinkedList();

list.insert("H");
list.insert("E");
list.insert("L");
list.insert("L");
list.insert("O");
list.insert(" ");
list.insert("W");
list.insert("O");
list.insert("R");
list.insert("L");
list.insert("D");

list.display();

print("Counting 'O'...");
print(list.count("O"));

print("Finding 'L'...");
list.find("L");
list.show();

print("Finding 'R'...");
list.find("R");
list.show();

print("Advancing 2...");
list.advance(2);
list.show();

print("Removing 'O'...");
list.remove("O");

list.display();

print("Counting 'O'...");
print(list.count("O"));

print("Counting 'L'...");
print(list.count("L"));
