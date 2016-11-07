var debug = require('debug')('object-relationships');
var test = require('tape');
var tapSpec = require('tap-spec');

Object.prototype.stamp = 'Stamp: Object.prototype';

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);


test('### this ###', function(t) {

    var obj = {
        prop: {
            fullname: 'kobe',
            getFullname: function() {
                return this.fullname;
            }
        }
    };

    var obj1 = {
        fullname: "michael",
        fref: obj.prop.getFullname
    }

    t.equal('kobe', obj.prop.getFullname(), "this is obj.prop");
    t.equal('michael', obj1.fref(), "this is obj1");

    t.end();
});

test('### bind / call / apply ###', function(t) {

    var obj = {
        name: "MJ"
    };

    function getName(a1, a2) {
        debug(a1);
        debug(a2);
        return this.name;
    }

    var getNameBind = getName.bind(obj);
    t.equal("MJ", getNameBind("a1", "a2"), "bind return new function which ensures that 'this' point to the bound object");
    t.equal("MJ", getName.call(obj, "a1", "a2"), "call ensures that 'this' point to the provided object");
    t.equal("MJ", getName.apply(obj, ["a1", "a2"]), "apply ensures that 'this' point to the provided object");

    t.end();
});

