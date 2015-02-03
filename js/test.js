'use strict';

console.log(this);

var add = function(a, b) {
  console.log("this inside add: ", this);
  return a + b;
}

// method invocation pattern, invoking a method (function)
// which is a property of an object
var obj = {
  value : 0,
  increment : function(inc) {
    // here, this refers to the obj itself
    // so this.value == obj.value etc...
    console.log(this);
    this.value += typeof inc === 'number' ? inc : 1;
  }
};

// function invocation pattern
// when a function is invoked while it's not a property of an object
obj.double = function() {
  var that = this; // workaround
  var helper = function() {
    that.value = add(that.value, that.value);
  };
  helper();
}

obj.double();
document.writeln(obj.value);

// constructor invocation pattern
var Quo = function(value) {
  this.status = value;
};

Quo.prototype.getStatus = function() {
  return this.status;
};

var myQuo = new Quo('bewildered');
console.log(myQuo.getStatus());