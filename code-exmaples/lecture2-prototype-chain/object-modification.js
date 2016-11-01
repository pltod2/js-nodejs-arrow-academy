var debug = require('debug')('object-modification');
var test = require('tape');

test('### Preventing object modification - preventing extensions ###', function(t) {

  'use strict';

  var obj = {
    name: 'name'
  };

  t.ok(Object.isExtensible(obj), 'by default object is extensible');

  Object.preventExtensions(obj);

  t.notOk(Object.isExtensible(obj), 'this could be changed with preventExtensions');

  function fn() {
    debug("Will throw TypeError: Can't add property newprop, object is not extensible");
    debug("In non strict mode will fail silently");
    obj.newprop = 'value';
  }

  t.throws(fn, TypeError, 'modification is not allowed');

  t.end();

});

test('### Preventing object modification - sealing objects ###', function(t) {
  'use strict';

  debug('Sealing is even more restricted than extensible since the object properties become non configurable. They can be read/write only');

  var obj = {
    name: 'name'
  };

  t.notOk(Object.isSealed(obj), 'sealed is not by default');

  Object.seal(obj);
  t.ok(Object.isSealed(obj), 'object is sealed with seal method');
  t.notOk(Object.isExtensible(obj), 'after sealing the object is not extensible');

  function fn() {
    obj.newprop = 'value';
  }
  t.throws(fn, TypeError);

  function fn1() {
    delete obj.name;
  }
  t.throws(fn1, TypeError, "after sealing all properties become non-configurable");

  obj.name = 'new name';
  t.equal('new name', obj.name, 'But its properties are still writable');

  t.end();

});

test('### Preventing object modification - freezing objects ###', function(t) {
  'use strict';
  
  debug("A frozen object is non-extensible, all of its properties are non-configurable, and all data properties are non-writable.");

  var obj = {
    name: 'name'
  };

  t.notOk(Object.isFrozen(obj));

  Object.freeze(obj);
  t.notOk(Object.isExtensible(obj));
  t.ok(Object.isSealed(obj));
  t.ok(Object.isFrozen(obj));


  function fn() {
    obj.name = 'new name';
  }

  t.throws(fn, TypeError, 'after freez objects are effectively immutable');
  t.end();

});

