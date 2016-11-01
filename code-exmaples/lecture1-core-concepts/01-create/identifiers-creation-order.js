var debug = require('debug')('identifiers-creation-order');
var test = require('tape');
var tapSpec = require('tap-spec');

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

test('### Function Declarations over Variable Declarations ###', function (t) {

  function foo() {
     // create bar = undefined
      
    // Here we already have bar associated to the function
    t.equal(undefined, bar, "Function declarations are hoisted to the top so identifiers are bound to them");

    var bar = 2;
    
    // bar is declared as variable but nothing happens here since we already have such identifier 
    // still there is no rebinding
    t.equal(2, bar, "var bar is kind of ignored since bar is already bound. bar is still bound to the function.");
    
    //function bar() {return 1;}
  
  }
  
  foo();

  t.end();
});

test('### Function Declarations over Function Parameters ###', function (t) {

  function foo(bar) {

    t.equal(1, bar(), "Function declarations are hoisted to the top so identifiers are bound to them");
    
    function bar() {return 1;}  
  }
  
  foo(2);

  t.end();
});


test('### Latest Formal Parameter override the one made earlier ###', function(t) {

	function bar(x, x) {
		t.equal(undefined, x, 'Flow: create FP and bind to the provided value, then repeat');
		return x;
	}
  bar(1);
  t.end();
});

test('### Latest Function Declarations override the one made earlier ###', function(t) {

	function foo() {

		t.equal(2, bar(), "Everything is created during Environment Creation - find identifier bind function to it and repeat for the next identifier");

		function bar() {
			return 1;
		}

		function bar() {
			return 2;
		}

	}

  t.end();
});

test('### Function Declarations vs. Function Expressions ###', function(t) {
  t.equal(true, fd(), "function created with Function Declaration exists and could be invoked");
  t.equal(undefined, fe, "function created with Function Expression does not exists because this is threated as Variable Declaration");  

  var fe = function() { return true };

  function fd() { return true }

  t.equal(true, fe(), "function is bound to fe identifier during Environment Execution");

  t.end();
});

test('### Function Declarations vs. Function Expression. Watch Out!  ###', function(t) {

  function fn () {
    
    //THIS IS FUNCTION EXPRESSION!!!
    (function x() { debug("x function is invoked") })();

    //When we try to access the function later on it is already not available
    x();
  }

  t.throws(fn, ReferenceError, "When we try to access the function later on it is already not available and JS throw reference error which means that x Identifier has never been created");

  t.end();
});