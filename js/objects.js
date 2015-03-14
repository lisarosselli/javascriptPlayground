// this is one singular variable
// it is not a function and therefore you cannot
// instantiate it with new singleton();
var singleton = {
  prop1 : 'property one',
  prop2 : 'property two',
  logMe : function() {
    console.log('singleton logging something here');
  }
};

// notice the assignment, not key/value pairs
// notice the use of 'this', that is a must for constructor functions
function MyObject() {
  //var prop1 = 'property one'; // this will not exist on your object
  var _prop1 = "private?"; // var is how you set up private properties
  
  this.prop2 = 'property two'; 
  this.logMe = function() {
    console.log("MyObject logging "+this.prop2);
  };
  this.getProp1 = function() { // exposing a private property through a function
    return _prop1;
  }
};


// redefining a built-in JS function here
// but i don't think other devs on your team would expect
// you to take this route
String.prototype.trim = function() {
  console.log("psyche! this is the new trim function!");
}

// adding a prototype function to an existing object
String.prototype.logItMan = function() {
  var a = '';
  for (var i = 0; i < this.length; i++) {
    a += this[i];
  }
  console.log(a);
}
