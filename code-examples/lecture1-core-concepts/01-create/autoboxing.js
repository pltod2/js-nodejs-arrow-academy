var debug = require('debug')('everything-is-object');
var test = require('tape');
var tapSpec = require('tap-spec');

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

test('### Primitives are autoboxed - turned to reference types. ###', function(t) {

  debug("strings, numbers, and booleans have methods despite being primitive types");

  var name = 'NAME';
  t.deepEqual('name', name.toLowerCase(), 'string variable has toLowerCase method');
  t.deepEqual('N', name.charAt(0), 'string variable has charAt method');
  t.deepEqual('NA', name.substring(0, 2), 'string variable has substring method');

  var number = 10;
  t.deepEqual('a', number.toString(16), 'number variable has toString method');

  var flag = true;
  t.deepEqual('true', flag.toString(), 'boolean variable has toString method');

  t.end();

});
