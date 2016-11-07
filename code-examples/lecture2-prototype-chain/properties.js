var debug = require('debug')('object-creation-methods');
var test = require('tape');
var tapSpec = require('tap-spec');

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

test('### Property Access - Dot and Bracket notation ###', function(t) {

  var objLiteral = { prop: 'a' };
  t.equal('a', objLiteral.prop);
  t.equal('a', objLiteral['prop']);
  t.end();

});

test('### Detecting object properties ###', function(t) {

  var obj = { prop: 0 };

  //BAD - prop is falsy
  if (obj.prop) {
    debug("THIS IS NEVER LOGGED!");
  }

  //GOOD - proper way of property detection
  if ('prop' in obj) {
    t.ok('prop' in obj);
  }

  t.end();

});

test('### Detecting own object properties ###', function(t) {

  var obj = {
    method: function() {}
  };

  //has such property but it is defined in 'obj' parent
  t.ok('toString' in obj);

  //must use special method to check if the property exists and if it is an own property
  t.ok(obj.hasOwnProperty('method'), 'own');
  t.notOk(obj.hasOwnProperty('toString'), 'inherited');

  t.end();

});

test('### Deleting properties with "delete" invokes internal operation [[Delete]] ###', function(t) {
  
  var obj = {
    method: function() {}
  };

  t.ok(obj.method);

  delete obj.method;
  t.notOk(obj.method);
  
  t.end();

});

test('### Data and accessor properties - could be useful to add validation, logging, etc. ###', function(t) {


  var obj = {

    //Data property
    _name: 'name',

    //Accessor property 'name'
    get name() {
      return this._name;
    },

    set name(value) {
      this._name = value;
    }
  };


  //Outside of the object we refer to 'name' accessor property to manipulate value inside '_name' data property
  t.equal('name', obj.name);

  obj.name = 'new name';

  t.equal('new name', obj.name);

  //Note that '_name' is not hidden and we still have direct access to it
  t.equal('new name', obj._name);

  t.end();

});

test('### Data and accessor properties - could be read and write only ###', function(t) {


  var obj1 = {

    //Data property
    _name: 'name',

    get name() {
      return this._name;
    }
  };

  var obj2 = {

    //Data property
    _name: 'name',

    set name(value) {
      this._name = value;
    }
  };

  t.equal('name', obj1.name);
  //Does not have effect will throw in strict mode - TypeError: Cannot set property name of #<Object> which has only a getter
  obj1.name = "new name";
  t.equal('name', obj1.name);


  //we do not have getter so getting the _name will return undefined
  t.notOk(obj2.name);
  obj2.name = "new name";

  //But the setter has set the value correctly
  t.equal('new name', obj2._name);

  t.end();

});