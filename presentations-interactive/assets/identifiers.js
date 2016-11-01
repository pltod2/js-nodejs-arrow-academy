module.exports = `var debug = require('debug')('Identifiers');
var test = require('tape');
var tapSpec = require('tap-spec');

test.createStream().pipe(tapSpec()).pipe(process.stdout);

debug("DEFINITION: A name binding is the association of an identifier with value");

test('### Language Defined Identifiers ###', function(t) {
  t.ok(Object, '"Object" built-in identifier is used to access built-in constructor function');
  t.ok(Array, '"Array" built-in identifier is used to access built-in constructor function');
  t.ok(this, "'this' built-in identifier holds the current context");
  t.ok(arguments, "'arguments' built-in identifier holds the values of the function parameters");

  t.end();

});`


