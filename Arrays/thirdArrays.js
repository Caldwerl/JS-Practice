/*
  Create an object to store a month's worth of data using a
  two-dimensional array. Create functions to display the monthly
  average, a specific week's average, and all the weeks' averages.
*/

function MonthlyTemps () {

  this.tempData = [];
  this.averageMonth = averageMonth;
  this.averageWeek = averageWeek;
  this.averageAllWeeks = averageAllWeeks;
  this.add = add;
}

function add (day, temp) {

  this.tempData[day] = [];
  this.tempData[day].push(temp);
}

function averageMonth () {

  var total = 0;
  var average = 0;

  for (var days = 0; days < this.tempData.length; days++) {

    total += this.tempData[days][0];
  }

  average = total / this.tempData.length;

  console.log("The average temperature for the month was " + average.toFixed(3));
}

function averageWeek (week) {

  var total = 0;
  var average = 0;

  for (var days = ((week - 1) * 7); days < week * 7; days++) {

    total += this.tempData[days][0];
  }

  average = total / 7;

  console.log("The average temperature for week " + week + " was " + average.toFixed(3));
}

function averageAllWeeks () {

  this.averageWeek(1);
  this.averageWeek(2);
  this.averageWeek(3);
  this.averageWeek(4);
}


var february = new MonthlyTemps();

console.log("Generating random temperature data for February...")

for (var i = 0; i < 28; i++) {

  february.add(i, Math.random() * 50);
}

console.log("Temperature generation complete.")

console.log("Calculating average temperature for week 2...")
february.averageWeek(2);
console.log("Calculating average temperature for week 4...")
february.averageWeek(4);
console.log("Calculating average temperature for week 1...")
february.averageWeek(1);
console.log("Calculating average temperature for week 3...")
february.averageWeek(3);

console.log("Calculating average temperature for all weeks...")
february.averageAllWeeks();

console.log("Calculating average temperature for whole month...")
february.averageMonth();
