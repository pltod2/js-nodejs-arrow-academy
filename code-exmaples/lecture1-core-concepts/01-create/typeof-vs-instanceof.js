var debug = require('debug')('typeof-instanceof');
var test = require('tape');
var tapSpec = require('tap-spec');

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

test('### typeof for Primitive Types is not working for null ###', function (t) {

    debug('typeof operator returns the corresponding type of the primitive');
    debug('null is created to denote empty object that is why typeof null is object');

    t.equal(typeof 5, 'number', 'typeof number is number');
    t.equal(typeof 'dog', 'string', 'typeof string is string');
    t.equal(typeof true, 'boolean', 'typeof boolean is boolean');
    t.equal(typeof undefined, 'undefined', 'typeof undefined is undefined');
    t.equal(typeof null, 'object', 'typeof null is object !!!');

    t.end();

});

test('### typeof for Reference Types works only for Object and Function ###', function (t) {

    var myArray = new Array();
    t.equal(typeof {}, 'object', '"typeof" of object works which is normal');
    t.equal(typeof myArray, 'object', 'for example typeof myArray return object');
    t.equal(typeof function () { }, 'functon', 'where function type is exception of this rule');

    t.end();

});

test('### Use instanceof instead of typeof to check the concrete Reference type ###', function (t) {

    var myArray = new Array();
    t.ok(myArray instanceof Array, '"instanceof" return the concrete Reference type');

    t.end();
});
