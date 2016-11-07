var debug = require('debug')('iife');
var test = require('tape');

test('### IIFE ###', function(t) {
  
  debug("We can not execute function declaration immediatelly since it is a statement not expression");
  debug("We can execute function expressions immediatelly without parens but read it is not obvious.");

  //function foo(){ /* code */ }(); // SyntaxError: Unexpected token )

	//Works but not user friendly :).
	var i = function() {
		return 10;
	}();
	t.equals(10, i);

	//So use parens as convention - this is self-invoked function expression
	var p = (function() {
		return 10;
	})();
	t.equals(10, p);

	//And finally the IIFE pattern
	//Immediatelly invoked FE is more correct and not that misleading like self-invoked FE
	var iife1, iife2; 
  (function() {
		iife1 = "iife1";
	}());

	// Crockford recommends this one
	(function() {
		iife2 = "iife2";
	})();

	// But this one works just as well
	t.equals(iife1, "iife1");
	t.equals(iife2, "iife2");
  
  t.end();
});