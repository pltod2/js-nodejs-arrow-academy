var debug = require('debug')('oop');
var test = require('tape');

test('### Immitation of encapsulation in JS ###', function(t) {

  function Product() {
    var _name;

    this.setName = function(name) {
      _name = name;
    };

    this.getName = function() {
      return _name;
    }
  }

  debug('Encapuslating properties into function and having getters and setters causes memory issues directly proportional to quantity of the created objects');
  debug('Thats why often defining methods on the prototype reusing them across instances is better alternative');
  
  var car = new Product();
  car.setName('BMW');
  t.equal('BMW', car.getName(), 'name has been set');
  t.equal(undefined, car._name, 'the property is encapsulated and not accessible directly');

  t.end();
  
});  
