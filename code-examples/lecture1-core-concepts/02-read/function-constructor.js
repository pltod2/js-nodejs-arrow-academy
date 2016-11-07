var debug = require('debug')('function-constructor');
var test = require('tape');
var tapSpec = require('tap-spec');

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

debug('DEFINITION: Lexical Scope - preserve the environment of the function where the function is defined');

test('###  - Functions created with Function constructor (new Function) does not store lexical scope ###', function(t) {
  var x = 20;

  var f = function() {
    return x;
  };
  
  var bar = new Function('return x');

  t.equal(f(), 20, "the scope of functions created with literal or expression is lexical");
  t.throws(bar, ReferenceError, "the scope of functions created with new is global scope - they does not store lexical scope");

  t.end();
});
