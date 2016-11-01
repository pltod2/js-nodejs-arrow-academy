var debug = require('debug')('oop');
var test = require('tape');

//NOTE: Object.assign works well for composition as well

test('### Composition example ###', function(t) {

  var methodsPool = {
    foo: function() {
      return 'aggregated by: ' + this.name;
    }
  };

  var aggregator1 = {
    name: 'aggregator 1',
    delegate: methodsPool,
    foo: function() {
      return this.delegate.foo.call(this);
    }
  };

  var aggregator2 = {
    name: 'aggregator 2',
    delegate: methodsPool,
    foo: function() {
      return this.delegate.foo.call(this);
    }
  };

  debug('An object could compose methods from other objects')
  t.equal('aggregated by: aggregator 1', aggregator1.foo(), 'Proper context is taken in the aggregated methods');
  t.equal('aggregated by: aggregator 2', aggregator2.foo(), 'Proper context is taken in the aggregated methods');

  t.end();
});

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
