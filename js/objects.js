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

function MyObject() {
  //var prop1 = 'property one'; // this will not exist on your object
  this.prop2 = 'property two'; 
  this.logMe = function() {
    console.log("MyObject logging "+this.prop2);
  };
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