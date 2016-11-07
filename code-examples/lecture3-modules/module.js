var debug = require('debug')('iife');
var test = require('tape');

test('### Module Pattern ###', function(t) {
  
	var counter = (function() {
		var i = 0;

		return {
			get : function() {
				return i;
			},
			set : function(val) {
				i = val;
			},
			increment : function() {
				return ++i;
			}
		};
	})();

	// `counter` is an object with properties, which in this case happen to be
	// methods.

	t.equals(counter.get(), 0);
	counter.set(3);
	t.equals(counter.increment(), 4);
	t.equals(counter.increment(), 5);

	// undefined (`i` is not a property of the returned object)
	t.notOk(counter.i);
	// ReferenceError: i is not defined (it only exists inside the closure)
	t.throws(function() { i; }, "ReferenceError");

 
  t.end();
});