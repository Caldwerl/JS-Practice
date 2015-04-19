/*
  Create a menu system for the previous priority queue to choose from the following activities.
  1. Patient enters Emergency Room
  2. Patient is seen by doctor
  3. Display list of patients waiting to be seen
*/

function priorityQueue () {

  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

function front () {

  return this.dataStore[0];
}

function back () {

  return this.dataStore[this.dataStore.length - 1];
}

function enqueue (element) {

  this.dataStore.push(element);
}

function dequeue () {

  var priority = this.dataStore[0].code;
  var pos = 0;

  for (var i = 1; i < this.dataStore.length; i++) {

    if (this.dataStore[i].code > priority) {

      priority = this.dataStore[i].code;
      pos = i;
    }
  }

  return this.dataStore.splice(pos, 1);
}

function toString () {

  var retString = '';

  for (var i = 0; i < this.dataStore.length; i++) {

    retString += this.dataStore[i].name + " code: " + this.dataStore[i].code + "\n";
  }

  return retString;
}

function Patient (name, code) {

  this.name = name;
  this.code = code;
}

function empty () {

  if (this.dataStore.length == 0) {

    return true;
  }

  return false;
}

function printPatient (patient) {

  print("Patient being treated: " + patient[0].name);
}

function printMenu () {

  print("Select one of the following.");
  print("1. Patient enters Emergency Room");
  print("2. Patient is seen by doctor");
  print("3. Display list of patients waiting to be seen");
  print("4. Quit");
}

var emergency = new priorityQueue();

var p = [];

p.push(new Patient("Smith", 5));
p.push(new Patient("Jones", 4));
p.push(new Patient("Fehrenbach", 6));
p.push(new Patient("Brown", 1));
p.push(new Patient("Ingram", 1));

var choice = 0;
var runThrough = [1, 1, 3, 2, 1, 2, 1, 3, 4];

while (choice != 4) {

  printMenu();
  choice = runThrough.shift();

  switch (choice) {

    case 1:
      print("New patient has arrived...");
      emergency.enqueue(p.shift());
      break;

    case 2:
      print("The next patient is being seen by a doctor...");
      var seen = emergency.dequeue();
      printPatient(seen);
      break;

    case 3:
      print("Patients waiting to be seen: ");
      print(emergency.toString());
      break;

    case 4:
      print("Quitting...");
      break;

    default:
      print("Not a valid option.");
      break;
  }
}
