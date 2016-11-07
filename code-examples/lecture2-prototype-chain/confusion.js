var debug = require('debug')('object-relationships');
var test = require('tape');
var tapSpec = require('tap-spec');

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

test('### We create objects based on other ###', function(t) {

    var obj = new Array();
    
    t.ok(Object.getPrototypeOf(obj) === Array.prototype, "Built-in factories ensures default models");
    t.ok(Array.prototype instanceof Object, "Models are objects");
    t.ok(typeof Array === "function", "Factories are actually functions - typeof");
    t.ok(Array instanceof Function, "Factories are actually functions - instanceof");
    Array.data = 5;
    t.equal(5, Array.data, "In the same time Factories are objects - we have added data");
    debug("Since Array is Object it must have Prototype/Model");
    t.ok(Object.getPrototypeOf(Array) === Function.prototype, "The model of Array function is Function.prototype");
    t.ok(Object.getPrototypeOf(Object) === Function.prototype, "The model of Object function is Function.prototype");
    
    Function.prototype.matrix = {neo: 'The Matrix Has You!'}
    t.ok(Array.matrix.neo === 'The Matrix Has You!');
    t.ok(Object.matrix.neo === 'The Matrix Has You!');
    Array.matrix.trinity = "trinity";
    t.ok(Object.matrix.trinity === "trinity");

    t.end();
});