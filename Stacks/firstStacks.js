/*
  Create a function to convert infix to postfix with a stack.
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

function convertInToPost (equation) {

  var postfixEquation = "";
  var currentChar;
  var stack = new Stack();

  for (var i = 0; i < equation.length; i++) {

    currentChar = equation.charAt(i);

    switch (currentChar) {

      case '*':
      case '/':
        while (stack.peek() == '*' ||
               stack.peek() == '/') {

          postfixEquation += stack.pop();
        }
        stack.push(currentChar);
        break;

      case '+':
      case '-':
        while (stack.peek() == '*' ||
               stack.peek() == '/' ||
               stack.peek() == '+' ||
               stack.peek() == '-') {

          postfixEquation += stack.pop();
        }
        stack.push(currentChar);
        break;

      case '(':
        stack.push(currentChar);
        break;

      case ')':
        while (stack.peek() != '(' && stack.length() > 0) {
          postfixEquation += stack.pop();
        }
        //Pops the ( off the stack
        stack.pop();
        break;

      default:
        postfixEquation += currentChar;
        break;
    }
  }

  while (stack.length() > 0) {
    postfixEquation += stack.pop();
  }

  return postfixEquation;
}

function evalPostfix (equation) {

  var stack = new Stack();
  var currentChar;
  var answer, op1, op2 = 0;

  for (var i = 0; i < equation.length; i++) {

    currentChar = equation.charAt(i);

    switch (currentChar) {

      case '*':
        op2 = stack.pop();
        op1 = stack.pop();
        stack.push(op1 * op2);
        break;

      case '/':
        op2 = stack.pop();
        op1 = stack.pop();
        stack.push(op1 / op2);
        break;

      case '+':
        op2 = stack.pop();
        op1 = stack.pop();
        stack.push(op1 + op2);
        break;

      case '-':
        op2 = stack.pop();
        op1 = stack.pop();
        stack.push(op1 - op2);
        break;

      default:
        stack.push(parseInt(currentChar));
        break;
    }
  }

  answer = stack.pop();

  return answer;

}

var infixEquation = "1+(2*8)+4";

var postfixEquation;

postfixEquation = convertInToPost(infixEquation);

print(infixEquation);
print(postfixEquation);
print(evalPostfix(postfixEquation));
