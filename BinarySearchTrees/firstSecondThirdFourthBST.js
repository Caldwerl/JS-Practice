/*
  Create Binary Search Tree with functions to find min and max values,
  count nodes and edges, and pre, in, and post order traversal
*/

function Node (data, left, right) {

  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show () {

  return this.data;
}

function BST () {

  this.root = null;
  this.insert = insert;
  this.preOrder = preOrder;
  this.inOrder = inOrder;
  this.postOrder = postOrder;
  this.getMin = getMin;
  this.getMax = getMax;
  this.countNodes = countNodes;
  this.countEdges = countEdges;
}

function insert (data) {

  var n = new Node(data, null, null);

  if (this.root == null) {

    this.root = n;

  } else {

    var current = this.root;
    var parent;

    while (true) {

      parent = current;

      if (data < current.data) {

        current = current.left;

        if (current == null) {

          parent.left = n;
          break;
        }

      } else {

        current = current.right;

        if (current == null) {

          parent.right = n;
          break;
        }
      }
    }
  }
}

function preOrder (node) {

  if (node != null) {

    print(node.show());
    preOrder(node.left);
    preOrder(node.right);
  }
}

function inOrder (node) {

  if (node != null) {

    inOrder(node.left);
    print(node.show());
    inOrder(node.right);
  }
}

function postOrder (node) {

  if (node != null) {

    postOrder(node.left);
    postOrder(node.right);
    print(node.show());
  }
}

function getMin () {

  var current = this.root;

  while (current.left != null) {
    current = current.left;
  }

  return current.data;
}

function getMax () {

  var current = this.root;

  while (current.right != null) {
    current = current.right;
  }

  return current.data;
}

function countNodes (node) {

  return recursiveNodeCount(node);
}

function countEdges (node) {

  return recursiveNodeCount(node) - 1;
}

function recursiveNodeCount (node) {

  var count = 0;

  if (node != null) {

    count = 1 + recursiveNodeCount(node.left) + recursiveNodeCount(node.right);
  }

  return count;
}



var tree = new BST();

var newNum = 0;

for (var i = 0; i < 15; i++) {

  newNum = Math.floor((Math.random() * 100) + 1);

  tree.insert(newNum);
}

print("PreOrder Traversal");
tree.preOrder(tree.root);

print("InOrder Traversal");
tree.inOrder(tree.root);

print("PostOrder Traversal");
tree.postOrder(tree.root);

print("The min value is " + tree.getMin());
print("The max value is " + tree.getMax());

print("The node count is : " + tree.countNodes(tree.root));
print("The edge count is : " + tree.countEdges(tree.root));
