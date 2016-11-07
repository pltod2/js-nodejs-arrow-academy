var debug = require('debug')('Identifiers');
var test = require('tape');
var tapSpec = require('tap-spec');

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

debug("DEFINITION: Binding is the association of an identifier with value");

test('### Identifier States ###', function(t) {

  //State 1 - 'x' identifier DOES NOT EXISTS -> ReferenceError
  function fn() { x };

  t.throws(fn, ReferenceError, 'State 1. Identifier Does Not Exists At All - ReferenceError');

  //State 2 - 'y' identifier exists but value is not bound yet - undefined
  var y;

  t.ok(y === undefined, 'State 2. Identifier Exists But Nothing is Assigned to It - undefined');

  //State 3 - 'z' identifier exists and value is bound to it
  var z = 1;

  t.equal(1, z, "State 3. Identifier Exists And Value is Assigned to It");

  t.end();
});