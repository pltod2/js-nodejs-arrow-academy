var debug = require('debug')('homework');
var test = require('tape');
var tapSpec = require('tap-spec');

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

test('### Case 1 - String property ###', function(t) {

    Object.prototype.stamp = "Object.prototype";

    var obj1 = {}; var obj2 = {};

    debug(obj1.stamp === obj2.stamp);
    debug(obj1.hasOwnProperty('stamp'));

    obj1.stamp = "Object.prototype Update";

    debug(obj1.stamp === obj2.stamp);

    // NOW WE HAVE OWN PROPERTY
    debug(obj1.hasOwnProperty('stamp'));
    
    debug(obj1.stamp);
    debug(obj2.stamp);
    
    debug("### end 1 ###")
    t.end();
});

test('### Case 2 - Object property (REBIND) ###', function(t) {

    Object.prototype.stamp = {
        label: "Object.prototype"
    };

    var obj1 = {}; var obj2 = {};

    debug(obj1.stamp === obj2.stamp);

    debug(obj1.hasOwnProperty('stamp'));

    // REBIND
    obj1.stamp = {};

    debug(obj1.stamp === obj2.stamp);

    // NOW WE HAVE OWN PROPERTY
    debug(obj1.hasOwnProperty('stamp'));
    debug("### end 2 ###")
    t.end();
});


test('### Case 3 - Object property (MUTATION) ###', function(t) {

    Object.prototype.stamp = {
        label: "Object.prototype"
    };

    var obj1 = {}; var obj2 = {};

    debug(obj1.stamp === obj2.stamp);

    debug(obj1.hasOwnProperty('stamp'));

    obj1.stamp.date = "now";

    debug(obj1.stamp === obj2.stamp);

    // WE STILL DO NOT HAVE OWN PROPERTY
    debug(obj1.hasOwnProperty('stamp'));

    debug(obj2.stamp.date);
    debug("### end 3 ###")
    t.end();
});
