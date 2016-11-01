// THE TASK:

// 1) Try to guess what debug statements will print in each case 
// 2) Run the test suite to see the actual results
// 3) Send me an explanation in 2 sentences for each case at ptodorov@axway.com. Why the things works like that? 

var debug = require('debug')('homework');
var test = require('tape');
var tapSpec = require('tap-spec');

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

test('### Case 1 ###', function(t) {

    Object.prototype.stamp = "Object.prototype";
    
    var obj1 = {}; var obj2 = {};
    
    debug(obj1.stamp === obj2.stamp);  
    debug(obj1.hasOwnProperty('stamp'));

    //CHANGE LIKE:
    obj1.stamp = "Object.prototype Update";    
    
    debug(obj1.stamp === obj2.stamp);
    debug(obj1.hasOwnProperty('stamp'));
    debug(obj1.stamp);
    debug(obj2.stamp);
    debug("### end 1 ###")
    t.end();
});

test('### Case 2 ###', function(t) {

    Object.prototype.stamp = {
        label: "Object.prototype"
    };
    
    var obj1 = {}; var obj2 = {};
    
    debug(obj1.stamp === obj2.stamp);  
    debug(obj1.hasOwnProperty('stamp'));

    //CHANGE LIKE:
    obj1.stamp = {};

    debug(obj1.stamp === obj2.stamp);
    debug(obj1.hasOwnProperty('stamp'));
    debug("### end 2 ###")
    t.end();
});


test('### Case 3 ###', function(t) {

    Object.prototype.stamp = {
        label: "Object.prototype"
    };
    
    var obj1 = {}; var obj2 = {};
    
    debug(obj1.stamp === obj2.stamp);  
    debug(obj1.hasOwnProperty('stamp'));

    //CHANGE LIKE:
    obj1.stamp.date = "now";

    debug(obj1.stamp === obj2.stamp);
    debug(obj1.hasOwnProperty('stamp'));
    debug(obj2.stamp.date);
    debug("### end 3 ###")
    t.end();
});