var debug = require('debug')('classical-inheritance');
var test = require('tape');


test('### Classical inheritance before ES6 achieved with Function.call() and Object.create() ###', function(t) {

  function Product(name) {
    t.equal(name, 'pasta', 'Parent constructor is invoked with call')
    this.name = name;
  }
  
  Product.prototype.test = function () {
    debug('invoking test');
  }

  function Food(name) {
    Product.call(this, name);
    this.category = "food"
  }

  //Food Factory will create Objects based on Product - beware about intermediate object
  Food.prototype = Object.create(Product.prototype);
  
  t.equal(Food.prototype.__proto__, Product.prototype, 'this is the link used for prototype chain resolution')  
  t.equal(Food.prototype.constructor, Product, 'constructor is still Product object so we must change it to Food')
  
  Food.prototype.constructor = Food;
  var f = new Food('pasta');
  t.ok(f instanceof Food, 'the created object is instance of Food')  
  t.ok(f instanceof Product, 'as well as it is instance of its parent class Product')
  t.equal(f.category, 'food', 'properties of the child are set correctly')
  
  t.end();
});

test('### Prototypal inheritance - more intuitive to work with instances ###', function(t) {
  
  function createLike(o) {
    function F() {}
    F.prototype = o;
    return new F();
  }

  var Product = {
    name: 'default'
  }  
  
  var Food = createLike(Product);

  //extend something with setting new properties
  Food.category = "food";
  t.deepEqual(Object.getPrototypeOf(Food), Product, 'model become the prototype for child')
  t.equal(Food.constructor, Object, 'the constructor of model in this case built-in Object is constructor of the instance');
  t.equal('default', Food.name, 'name property has been inherited from the prototype')
  t.equal('food', Food.category, 'category property is owned')
  
  t.end();
});

test('### NOTE: food for thought ###', function(t) {
  
  var Product = {
    name: 'defaultName'
  }

  var Food = {
    category: 'defaultCategory'
  }

  function initFoodMicroservice(name, category) {
    this.name = name;
    this.category = category;
    return this;
  }

  var myInstance = initFoodMicroservice.call(Object.assign(Product, Food), 'apple', 'food');
  t.equal(myInstance.name, 'apple', "name is set");
  t.equal(myInstance.category, 'food', "category is set");
  
  t.end();
});

test('### prototypal inheritance before Object.create ###', function(t) {
  
  function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
  }
  
  var model = {
    name: 'test'
  }
  
  var child = object(model);
  
  t.deepEqual(Object.getPrototypeOf(child), model, 'model become the prototype for child')
  t.equal(child.constructor, Object, 'the constructor of model in this case built-in Object is constructor of the instance');
  t.equal('test', child.name, 'name property has been inherited from the prototype')
  
  t.end();
});
