'use strict';

// Yields an object with all prototype attributes
var a = Object.create;

// Yields an object that is truly empty
var b = Object.create(null);


var keyObj = {};
var keyFunc = function() {};
var keyStr = "a string";


var m = new Map();
m.set(keyObj, "value assoc. with keyObj");
m.set(keyFunc, "value assoc. with keyFunc");
m.set(keyStr, "value assoc. with keyStr");

var dictionary = new Map();
dictionary.set("a", ["apple", "atlas"]);
dictionary.set("b", ["bike", "boom"]);
dictionary.set("c", ["color", "cry"]);

function blah2() {
  for (var key of m.keys()) {
    console.log(key);
  }
};
blah2();

function findWord(value) {
  var i = String(value.charAt(0));
  for (var key of dictionary.keys()) {
    console.log("iterating");
    if (i == key) {
      //dig further for your word
      console.log("found letter");
    }
  }
}

function testLoop() {
  var a = 0;
  while(a > 0) {
    console.log(a);
    a--;
  };
}

function testLoop2() {
  var a = 0;
  do {
    console.log(a);
    a--;
  } while(a > 0)
}

var bob = "anything"; // = some webservice
if (bob) {
  console.log("i have bob");
} else {
  console.log("no bob :(");
}

















