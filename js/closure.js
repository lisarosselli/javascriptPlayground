'use strict';

// ahh protected variables
// this nearly feels class-like
// this is not assigning a function to obj2
// but assigning the result of invoking a function
var obj2 = (function() {
	var value = 0;
	return {
		increment: function(inc) {
			value += typeof inc === 'number' ? inc : 1;
		},
		setValue: function(n) {
			value = n;
		},
		getValue: function() {
			return value;
		}
	};
}());

// Proper closure (psst, encapsulation)
// the access to the status property is not
// access to a 'copy' of it, it is access
// to the property itself. The returned function
// has access to the context in which it
// was created: closure.
var Quo2 = function(param) {
  var status = param;
  
  return {
    getStatus: function() {
      return status;
    },
    setStatus: function(value) {
      status = value;
      return status;
    },
    sayStatus: function() {
      alert(status);
    }
  };
};

// fade to white, with closure
/*
var fade = function (node) {
	var level = 1;
	var step = function() {
		var hex = level.toString(16);
		node.style.backgroundColor = '#FFFF' + hex + hex;
		if (level < 15) {
			level += 1;
			setTimeout(step, 100);
		}
	};
	setTimeout(step, 100);
};
fade(document.body);
*/