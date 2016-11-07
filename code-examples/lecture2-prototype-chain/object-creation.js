var debug = require('debug')('object-creation-methods');
var test = require('tape');
var tapSpec = require('tap-spec');

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

test('### Case 1. Object Literal ###', function(t) {

  var obj = { 
    name: 'MJ', 
    calculateShootingPercentage: function() {
      return 75;
    }
  };
  
  t.ok(obj, 'The identifier point to the memory address where the object is stored.');
  
  t.equal(obj.name, 'MJ', 'JS creates identifier for each defined property');
  t.equal(obj.calculateShootingPercentage(), 75, 'properties could be functions');

  obj.sport = 'Basketball';

  t.equal(obj.sport, 'Basketball', 'New properties can be added later');

  t.end();
});

test('### Case 2. create function of Object. Available from ES5 ###', function(t) {

  var obj = Object.create(null);
  
  obj.name = 'MJ';
  obj.sport = 'Basketball';
  
  t.equal(obj.name, 'MJ', 'name property added');
  t.equal(obj.sport, 'Basketball', 'sport property added');

  t.end();
});

test('### Case 3. Constructor Functions ###', function(t) {

  var obj = new Object();
  t.equal(typeof obj, 'object', 'We have built-in constructor for Reference Types')
  t.equal(typeof Object, 'function', 'built-in constructors are functions')

  function Person() {};
  var p1 = new Person();

  t.equal(typeof p1, 'object', 'We can create objects with constructor functions')
  t.end();
});