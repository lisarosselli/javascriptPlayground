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

// fade to white, with closure
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