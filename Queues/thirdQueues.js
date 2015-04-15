/*
  Create a priority queue for an emergency room where the
  higher the code the higher the priority.
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

var emergency = new priorityQueue();

var p = new Patient("Smith", 5);

emergency.enqueue(p);

p = new Patient("Jones", 4);

emergency.enqueue(p);

p = new Patient("Fehrenbach", 6);

emergency.enqueue(p);

p = new Patient("Brown", 1);

emergency.enqueue(p);

p = new Patient("Ingram", 1);

emergency.enqueue(p);

print(emergency.toString());

var seen = emergency.dequeue();

printPatient(seen);

print("Patients waiting to be seen: ");

print(emergency.toString());

var seen = emergency.dequeue();

printPatient(seen);

print("Patients waiting to be seen: ");

print(emergency.toString());

var seen = emergency.dequeue();

printPatient(seen);

print("Patients waiting to be seen: ");

print(emergency.toString());
