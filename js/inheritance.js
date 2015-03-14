/*
 * Inheritance via the prototype chain.
 */

function Person(f, l) {
  this.fname = f; // anything preceeded by this. creates public properties
  this.lname = l;
  this.species = 'homo sapien';
}

Person.prototype.getFullName = function() {
  return this.fname + ' ' + this.lname;
}

function Student(f, l) {
  this.fname = f;
  this.lname = l;
  this.year = 'Freshman';
}

Student.prototype = new Person(); // this is the important part!

var a = new Student('Jane', 'Smith');
var b = new Student('Thomas', 'Jackson');

console.log(a.getFullName());
console.log(b.getFullName());
console.log(a.getFullName() + ' is a ' + a.species);
console.log(b.getFullName() + ' ia a ' + a.species);
console.log(a.getFullName() + ' is a ' + a.year);
console.log(b.getFullName() + ' is a ' + a.year);


