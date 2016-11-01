var debug = require('debug')('object-relationships');
var test = require('tape');
var tapSpec = require('tap-spec');

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

test('### Built-in constructor function new Object() =>  default Model === Object.prototype ###', function(t) {

  var obj = new Object();

  t.ok(Object.getPrototypeOf(obj) === Object.prototype, "Object.prototype is the default Model of objects created with new Object()");
  
  t.end();

});

test('### Objects with literal =>  default Model === Object.prototype ###', function(t) {

  var obj = {};
  
  t.ok(Object.getPrototypeOf(obj) === Object.prototype, "Object.prototype is the default Model of objects created with literal");
  
  t.end();
});

test('### Objects with Object.create => no default Model must be provided ###', function(t) {
  var obj = Object.create(null);
  
  t.ok(Object.getPrototypeOf(obj) === null, "Objects created with Object.create(null) has no model");
  t.throws(function() {Object.create()}, "Object.create does not allow creation with default Model");  
  
  t.end();
});

test('### Objects with Custom Constructor Functions ###', function(t) {

  function Person() {};
  var obj = new Person();

  t.ok(Object.getPrototypeOf(obj) === Person.prototype, "The Model of objects created with Custom Constructor Function is newly created object set to prototype property of the custom function");

  t.end();

});