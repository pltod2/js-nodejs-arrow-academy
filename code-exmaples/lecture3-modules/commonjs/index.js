var test = require('tape');
var log = console.log;

var m0 = require('./modules/m0.js');
var m1 = require('./modules/m1.js');
var m2 = require('./modules/m2.js');
var m3 = require('./modules/m3.js');
var m4 = require('./modules/m4.js');
var M5 = require('./modules/m5.js');

// NOTE: m7 loads m6 and change its state
require('./modules/m7.js');

// NOTE: here we load m6 again
var m6 = require('./modules/m6.js');

function logSection(name) {
  log('########################################');
  log('');
  log(name);
  log('');
}

test('### Consuming modules ###', function(t) {
  
  
  logSection('Rule 1. Module has only private state by default but be careful with exposing global variables...');

  t.notOk(m0.name1, 'variable declarations are not visible outside as module properties');
  t.throws(function() {name1}, 'neither they are exposed as global variables');  
  t.notOk(m0.name2, 'declarations without var inside module are not visible via module reference');
  t.equal(name2, 'name2', 'but they are exposed globally');
  t.notOk(m0.name3, 'properties assigned to global object are not visible via module reference');
  t.equal(name3, 'name3', 'but they are exposed globally');


  logSection('Rule 2. Module can have public state only if...')
  
  t.equal(m1.name1, 'name1', 'set property to "module.exports"');
  t.equal(m1.name2, 'name2', 'set property to its alias "exports"');


  logSection('Rule 3. Module that has no public state...');

  t.equal(typeof m0, 'object', ' exports object');
  t.equal(Object.getOwnPropertyNames(m0).length, 0, 'and the exported object is empty by default');


  logSection('Rule 4. We can completely reassign the object referred by "module.exports"...');

  t.equal(m2.name1, 'name1', 'and we will have access to its properties');
  t.notOk(m2.name2, 'but we will loose everything assigned via its alias "exports"');
  t.notOk(m2.name3, 'and via "module.exports" itself because the object is basically completely replaced');  


  logSection('Rule 5. We can completely reassign the alias "exports"...');

  t.equal(m3.name1, 'name1', 'and we still have access to properties set via original reference "module.exports"');
  t.notOk(m3.name2, 'we do not see properties of the newly assigned object to the alias');
  t.notOk(m3.name3, 'moreover further assignment to "export" no longer reflect "module.exports" - it is not alias anymore');


  logSection('Rule 6. We could assign something that is not object to module.exports...');

  t.equal(m4, 'HELLO WORLD!', 'node module can expose any legal JavaScript object - boolean, number, date, JSON, string, function, array, and so on.');  
  var m5 = new M5("Module Five");
  t.equal(m5.name, "Module Five", 'node module can expose constructor functions for further instance creation');


  logSection('Rule 7. Exposing constructor functions could be useful considering that requiring modules exports singletons...');

  // NOTE: See how in the beginning of the file the loading order of m7 and m6 modules
  t.equal(m6.name, "name1", 'the loaded module is previously loaded by another which change its state');
  t.pass('...exactly the changed state is shown even after the module is required again');

  log('########################################');
  log('');
  t.end();

});

