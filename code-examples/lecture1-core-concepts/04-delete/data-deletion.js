var debug = require('debug')('data-deletion');
var test = require('tape');

var tapSpec = require('tap-spec');

test.createStream()
    .pipe(tapSpec())
    .pipe(process.stdout);

test('### Delete operator - variable ###', function(t) {  
  var b = 2;
  t.equal(2, b, "b is bound now");

  t.notOk(delete b, "JavaScript does not allow to use delete operator on identifier");
  t.equal(2, b, "b is stil there and has unchanged value");
  
  t.end();
});

test('### Delete operator - properties ###', function(t) {
  function fn() {
    debug("NOTE: The code does not create variable in this EC but property of the global object");
    a = 1;
    t.equal(1, a);
    
    debug("This property could be deleted");
    t.ok(delete a);
    
    return a;
  }
  
  t.throws(fn, ReferenceError, "Now it does not exist anymore");
  
  t.end();
});