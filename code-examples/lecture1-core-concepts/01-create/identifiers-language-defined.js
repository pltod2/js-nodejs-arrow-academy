var debug = require('debug')('Identifiers');
var test = require('tape');
var tapSpec = require('tap-spec');

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

debug("DEFINITION: Language Defined Identifiers are those that JS Engine understand without being declared by the programmer");

test('### Language Defined Identifiers ###', function(t) {
  t.ok(Object, '"Object" built-in identifier is used to access built-in constructor function');
  t.ok(Array, '"Array" built-in identifier is used to access built-in constructor function');
  t.ok(this, "'this' built-in identifier holds the current context");
  t.ok(arguments, "'arguments' built-in identifier holds the values of the function parameters");

  t.end();
});

test('### Hijack Identifiers ###', function(t) {

    function standardObjectBehaviour() {
        var obj = new Object();
        t.notOk(obj.prop, "Object built-in constructor function creates empty object");
    }

    function hijackedObjectBehaviour() {
        var Object = function () {
        	this.prop = 5;
        };
        var obj = new Object();
        t.equal(5, obj.prop, "Object does not point to built-in constructor function anymore");
    }

    standardObjectBehaviour();
    hijackedObjectBehaviour();

    var obj = new Object();
    t.notOk(obj.prop, "Hijacking is valid only in the context it is made. Too bad if it is made in the global context!");

    t.end();
});