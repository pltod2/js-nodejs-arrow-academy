var debug = require('debug')('constructor-without-new');
var test = require('tape');
var tapSpec = require('tap-spec');

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

test('### Standard Functions ###', function(t) {

  function sum(a, b) {
    return a + b;
  }
  t.equal(sum(1, 1), 2, 'Role 1. Standard Function');
  t.end();
});

test('### Functions as Methods ###', function(t) {

  var obj = {
    sum: function(a, b) {
      return a + b;
    }
  }
  t.equal(obj.sum(1, 1), 2, 'Role 2. Method');
  t.end();
});

test('### Functions as Constructors ###', function(t) {

  function Person() {}
  var p1 = new Person();

  t.equal(typeof p1, 'object', 'We can create objects with constructor functions')
  t.end();
});

test('### Constructor Functions are Implicit ###', function(t) {
  function Person() {}
  var p1 = Person();

  t.equal(typeof p1, 'undefined', 'when missing "new" we are not getting object but undefined')
  t.end();
});

test('### Constructor Functions are Implicit - Implications ###', function(t) {

  function Person(name) {
    this.name = name
  }

  var p1 = Person("MJ");

  t.equal(typeof p1, 'undefined', 'when missing "new" we are not getting object but undefined');
  t.equal(global.name, "MJ", 'properties are exposed to global object');
  t.end();
});

test('### PATTERN: Constructor Functions call themselves with "new" if missed ###', function(t) {

  var p = Person('test');
  
  t.equal('test', p.name, 'although called without "new" it works');
  function Person(name) {
    if (!(this instanceof Person)) return new Person(name);
    debug("this is the best way to mitigate constructor function calling without new");
    debug("JS Engine create new object and bind it to 'this' identifier");
    debug("...so we check if it is instance of Person");      
    this.name = name;
  }
  t.end();
});

test('### Functions are Objects ###', function(t) {

  var p = Person('test');
  Person.myProp = 5;
  t.equal(5, Person.myProp, 'We can add properties to Function objects');
  t.equal(typeof Object.getPrototypeOf, 'function', ' Function objects can have properties that are functions as well (methods)');

  function Person(name) {
    this.name = name;
  }
  t.end();
});