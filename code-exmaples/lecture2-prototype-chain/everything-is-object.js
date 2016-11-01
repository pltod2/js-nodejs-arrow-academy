var debug = require('debug')('everything-is-object');
var test = require('tape');
var tapSpec = require('tap-spec');

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

test('### Primitives are objects with methods - Autoboxed ###', function(t) {

  var name = 'NAME';
  t.deepEqual('name', name.toLowerCase(), 'string variable has toLowerCase method');
  t.end();

});

test('### Functions are objects - we can add them properties ###', function(t) {

  function test() {};
  test.prop = 'myTestProp';
  t.equal('myTestProp', test.prop, "we can assign properties to functions");

  t.end();

});
