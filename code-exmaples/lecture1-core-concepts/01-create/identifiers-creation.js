var debug = require('debug')('identifiers-creation');
var test = require('tape');
var tapSpec = require('tap-spec');

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

test('### Identifer with Variable Declaration ###', function(t) {
  var v = 5;
  t.ok(v, 'Identifier is created on variable declaration');
  t.equal(v, 5, 'Identifier is bound to the associated initial value of 5');
  t.end();
});

test('### Identifer With Function Declaration###', function(t) {

    // Function Declaration also known as Literal form
    function f1() {
        //body
    }
    t.ok(f1, 'Identifier is created with the same name as the function name and it is used for accessing this function.');
    t.end();
});

test('### Identifer With Function Formal Parameter ###', function(t) {

    function f1(x, y) {
        t.equal(x, 5, 'Identifier is created for each function formal parameter with value passed on function invocation');
        t.equal(y, undefined, 'If parameter is not passed we have value of undefined which means the identifier exists but not bound otherwise we would get RefernceError');
    }
    f1(5);
    t.end();
});