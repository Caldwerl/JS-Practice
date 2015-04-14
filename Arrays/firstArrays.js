/*
  Create a grades object that stores a set of student grades in an object.
  Provide a function for adding a grade and a function for displaying the
  student's grade average.
*/


function Grades () {

  this.gradesArray = [];
  this.add = add;
  this.average = average;
}

function add (grade) {

  this.gradesArray.push(grade);
}

function average () {

  var average = 0;
  var sum = 0;

  for (var i = 0; i < this.gradesArray.length; i++) {

    sum += this.gradesArray[i];
  }

  average = sum / this.gradesArray.length;

  console.log("This student's average grade is " + average.toFixed(2) + ".");
}

function randomGrade () {

  return Math.floor((Math.random() * 100) + 1);
}


var student1 = new Grades();
var student2 = new Grades();
var student3 = new Grades();

console.log("Generating 10 random grades for three students...");

for (var i = 0; i < 10; i++) {

  student1.add(randomGrade());
  student2.add(randomGrade());
  student3.add(randomGrade());
}

console.log("Calculating average for student1:");
student1.average();
console.log("Calculating average for student2:");
student2.average();
console.log("Calculating average for student3:");
student3.average();
