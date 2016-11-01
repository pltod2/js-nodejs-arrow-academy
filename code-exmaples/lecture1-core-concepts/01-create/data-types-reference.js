var debug = require('debug')('data-types');
var test = require('tape');
var tapSpec = require('tap-spec');

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

debug('DEFINITION: JS use Reference Types for complex data. In this case identifiers are associated with reference (memory address) where actual data is stored');

test('### Reference Type - Function ###', function(t) {

    function fn() { return 1 }
    t.ok(fn instanceof Function, 'Function declaration (function litteral) produces instances of function Reference Type');
    t.equal(typeof fn, "function",  'typeof operator detect that this is function Reference Type');
    t.equal(typeof Function, "function",  'Constructor Function for creating data of function Reference Type');
    var f = new Function();
    t.equal(typeof f, "function",  'Constructor Function creates data of function Reference Type');

    t.end();
});

test('### Reference Type - Object ###', function(t) {

    var myObj = new Object();
    var objLiteral = {
      name: 'value',
      getName: function () {
        return this.name;
      }
    };

    t.ok(myObj instanceof Object, 'Object constructor function produces instances of Object Reference Type');
    t.ok(objLiteral instanceof Object, 'Object literal produces instances of Object Reference Type');

    t.end();
});

test('### Reference Type - Array ###', function(t) {

    var myArray = new Array();
    var arrayLiteral = ['1', '2', '3'];
    t.ok(myArray instanceof Array, 'Array constructor function produces instances of Array Reference Type');
    t.ok(arrayLiteral instanceof Array, 'Array literal produces instances of Array Reference Type');

    t.end();
});