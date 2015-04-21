/*
  Create a circly linked list and use it to remove every nth node
  until 2 remain, display the 2 positions that will not be eliminated
*/

function Node (element) {

  this.element = element;
  this.next = null;
}

function LinkedList () {

  this.head = new Node("head");
  this.head.next = this.head;
  this.currNode = this.head;
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.remove = remove;
  this.findPrevious = findPrevious;
  this.show = show;
  this.countElement = countElement;
  this.countNodes = countNodes;
  this.advance = advance;
}

function find (element) {

  this.currNode = this.head;

  while (this.currNode.next.element != "head" && this.currNode.element != element) {

    this.currNode = this.currNode.next;
  }

  return this.currNode;
}

function insert (element) {

  this.currNode = this.head;

  while (this.currNode.next.element != "head") {

    this.currNode = this.currNode.next;
  }

  this.currNode.next = new Node(element);
  this.currNode.next.next = this.head;
}

function display () {

  this.currNode = this.head;

  while (this.currNode.next.element != "head") {

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

  while (this.currNode.next.element != "head" && this.currNode.next.element != element) {

    this.currNode = this.currNode.next;
  }

  return this.currNode;
}

function show () {

  print(this.currNode.element);
}

function countElement (element) {

  var count = 0;
  this.currNode = this.head;

  while (this.currNode.next.element != "head") {

    if (this.currNode.element == element) {

      count++;
    }

    this.currNode = this.currNode.next;
  }

  return count;
}

function countNodes () {

  var count = 0;
  var counter = this.head;

  while (counter.next.element != "head") {

    count++;

    counter = counter.next;
  }

  return count;
}

function advance (n) {

  var i = 0;

  while (i < n) {

    if (this.currNode.next.element == "head") {

      this.currNode = this.currNode.next.next;

    } else {

      this.currNode = this.currNode.next;
    }

    i++;
  }
}



var list = new LinkedList();

for (var i = 1; i < 41; i++) {

  list.insert(i);
}

list.display();

var target;

print("Counting nodes...");
print(list.countNodes());

while (list.countNodes() > 2) {

  print("Advancing by 3...");
  list.advance(3);

  target = list.currNode;
  list.currNode = list.currNode.next;

  print("Removing node " + target.element + "...");
  list.remove(target.element);
}

print("The following positions will not be eliminated:")
list.display();
