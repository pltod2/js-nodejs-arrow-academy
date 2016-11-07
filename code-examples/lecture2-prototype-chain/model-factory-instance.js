var debug = require('debug')('object-relationships');
var test = require('tape');
var tapSpec = require('tap-spec');

Object.prototype.stamp = 'Stamp: Object.prototype';

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

// test('### The Root Model ###', function(t) {

//   var obj = new Array();

//   t.ok(Object.getPrototypeOf(obj) === Array.prototype, "Array.prototype is the default Model of objects created Array constructor function");
//   t.ok(Object.getPrototypeOf(Array.prototype) === Object.prototype, "The Model of Array.prototype is Object.prototype");
//   t.ok(Object.getPrototypeOf(Object.prototype) === null, "Object.prototype is the root Model");

//   t.deepEqual(Object.prototype.constructor, Object, "First model is created with built in Object constructor function");
//   t.deepEqual(Object.constructor, Function, "Object.constructor is created with Function Constructor");
  
//   t.end();

// });

// test('### Using Object Constructor Function (Factory) ###', function(t) {

//   var obj = new Object();
//   t.ok(obj, "Instance Object create with constructor function");
//   t.deepEqual(obj.constructor, Object, "Factory Object - constructor property points to Factory Object which is Object");
//   t.deepEqual(obj.__proto__, Object.prototype, "Model/Prototype Object - __proto__ points to the prototype this object is based on");
//   t.end();

// });

// test('### Using Object Literal ###', function(t) {

//   var obj = {};
//   t.ok(obj, "Instance Object create with Object Literal");
//   t.deepEqual(obj.constructor, Object, "Factory Object - constructor property points to Factory Object which is Object");
//   t.deepEqual(obj.__proto__, Object.prototype, "Model/Prototype Object - __proto__ points to the prototype this object is based on");
//   t.end();

// });

test('### Dynamic Updates ###', function(t) {

  var obj1 = {};
  var obj2 = {};
  Object.prototype.player = "MJ";

  t.equal("MJ", obj1.player, "Dynamic addition of player property");
  obj1.player = "DW";
  t.equal("MJ", obj2.player, "Affects all instances");
  Object.prototype.player = "MJU";
  t.equal("DW", obj1.player, "Dynamic addition of player property");
  t.equal("MJU", obj2.player, "Affects all instances");
  t.end();
});

// test('### Creation of Root Objects ###', function(t) {

//   var obj = Object.create(null);
//   t.ok(obj, "Instance Object create with Object.create");
//   t.equal(obj.constructor, undefined, "Factory Object - constructor property points to undefined");
//   t.notOk(obj.__proto__, "No model at all");  
//   Object.prototype.player1 = "LJ";
//   t.notOk(obj.player1, "There is no link between obj and Object.prototype");

//   t.end();
// });

// test('### Using Object.create ###', function(t) {

//   //We create object based on Object.prototype 
//   var model = {};

//   //And turn it into model
//   var obj = Object.create(model);
//   t.ok(obj, "Instance Object create with Object.create");
//   t.equal(obj.constructor, Object, "Factory Object - constructor property points to Factory Object which is create function");
//   t.equal(obj.__proto__, model, "We've just created root object - no model");  
//   Object.prototype.player2 = "DW";
//   t.equal("DW", Object.prototype.player2, "Level 1: Property in the root");
//   t.equal("DW", model.player2, "Level 2: There is link between Object.prototype and 'model' object created with literal");
//   t.equal("DW", obj.player2, "Level 3: There is link between 'model' and 'obj'");


//   t.end();

// });