var debug = require('debug')('mixin');
var test = require('tape');


test('### Mixin example - creating a custom mixin method ###', function(t) {

  Object.extend = function(destination, source) {
    for (var property in source) {
      if (source.hasOwnProperty(property)) {
        destination[property] = source[property];
      }
    }
    return destination;
  };
  
  var X = {a: 10};
  var Y = {b: 20};
  
  Object.extend(X, Y);
  t.equal(20, X.b, 'X has been extended with Y properties');
  
  t.end();
});  

