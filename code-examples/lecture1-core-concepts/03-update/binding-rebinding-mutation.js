var debug = require('debug')('rebinding-vs-mutation');
var test = require('tape');
var tapSpec = require('tap-spec');

test.createStream()
    .pipe(tapSpec())
    .pipe(process.stdout);

debug("DEFINITION: A rebinding relates to an identifier. This operation unbinds the identifier (if it was previously bound) from an old object. Then binds it to another one (to another block of memory).");
debug("DEFINITION: The operation of mutation (in contrast with rebinding) already affects the content of the object.");

test('### Rebinding - Primitive Types ###', function(t) {

  debug('NOTE: Although we assign the value of one identifier to another we still have two separate identifiers that in some point in time could point to the same memory (share the same value). When we change the value of identifier - we create new value in memory and set the identfier to point to this piece of memory');

  var a = 1;
  var b = a;

  t.equal(1, a, 'a is bound');
  t.equal(1, b, 'b is bound to the value a identifier has');

  a = 2;

  t.equal(2, a, 'a value is changed');
  t.equal(1, b, 'but b remain the same');

  debug("DEFINITION: Call By Value -> New allocation of memory is made and the value of variable passed is copied");  

  t.end();
});

test('### Rebinding - Reference Types ###', function(t) {

  debug('The same behavior is valid for objects. Bind foo object.');
  var foo = {
    x: 10
  };

  t.equal(10, foo.x);

  debug('bind "bar" object to the *same* object as "foo" identifier is bound');
  var bar = foo;

  t.deepEqual(foo, bar, "foo and bar have the same properties");
  t.equal(10, bar.x, 'bar has x property with the same value as foo.x');

  debug('and now rebind "foo" to a new object');
  foo = { x: 20 };

  t.equal(20, foo.x, 'foo.x has changed');
 
  t.equal(10, bar.x, 'and "bar" still points to the old object');
  t.notStrictEqual(bar, foo, 'bar and foo are not the same objects anymore');

  debug("DEFINITION: Call By Reference -> both identifiers will hold the same reference so when we change one identifier we change all of them");
  debug("DEFINITION: Call By Sharing -> both identifiers has the same value (in this case they hold reference to object) but we have two copies of it so when we change the one we do not change the other");

  debug("NOTE: in sharing strategy the object is not deleted until we have at least one reference to it");
  debug("sharing vs. value => pass copy of reference vs. pass copy of data");
  debug("sharing vs. reference => pass copy of reference vs. pass the same reference");

  t.end();
});

test('### Mutation ###', function(t) {

  debug('bind an array to the "foo" identifier');
  var foo = [1, 2, 3];

  debug('here is how a *mutation* of the array object is done');
  foo.push(4);

  t.equal(4, foo[3], 'we have new array member after the mutation');

  debug('mutate existing members');
  foo[4] = 5;
  foo[0] = 0;

  t.equal(5, foo[4], 'member 4 has new value');
  t.equal(0, foo[0], 'member 0 has new value');

  t.end();
});

