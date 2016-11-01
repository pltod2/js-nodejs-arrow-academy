var debug = require('debug')('function-constructor');
var test = require('tape');
var tapSpec = require('tap-spec');

test.createStream()
    .pipe(tapSpec())
    .pipe(process.stdout);

debug("DEFINITION: A closure is a pair consisting of the function code and the environment in which the function is defined(created)")

test('### Closures - Functions as parameters ###', function (t) {

    var x = 10;

    (function (funArg) {

        var x = 20;
        t.equal(10, funArg(), 'funArg function is invoked here but it works with the environment where defined');

    })(funarg);

    function funarg() {
        debug('NOTE: x is also known as free variable because is not bound in environment created on funarg invocation');
        debug('NOTE: x is inhereted from the parent environment');
        return x;
    }

    t.end();
});

test('### Closures - Functions as return vaues ###', function (t) {

    function parent() {

        var x = 5;

        function child() {
            debug('NOTE: x is free variable');
            return x;
        }

        return child;
    }

    var f = parent();
    t.equal(5, parent()(), 'the return function preserve(closes) the environment where it is defined');

    t.end();
});