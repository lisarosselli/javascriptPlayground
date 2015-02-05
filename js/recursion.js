'use strict';

// typical recursive factorial function
// js is not picky about not initially invoking
// the factorial method with only 1 of 2 params
// no tail recursion optimization
var factorial = function factorial(i, a) {
	a = a || 1;
	if (i < 2) {
		return a;
	}
	return factorial(i - 1, a * i);
}

console.log(factorial(4));