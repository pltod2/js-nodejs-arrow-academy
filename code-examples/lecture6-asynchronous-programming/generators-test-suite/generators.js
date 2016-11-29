var test = require('tape');
var log = console.log;
var tapSpec = require('tap-spec');

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

test('### Generators ###', function(t) {
  var currentGen;
  var currentVal;

  logSection("Generator function that does not yield");

  function *genNoYield() {
    return 1;
  }


  currentGen = genNoYield();

  t.equal('object', typeof currentGen, 'Calling a generator function does not execute its body immediately, an iterator object for the function is returned instead.');
  t.equal('function', typeof currentGen.next, 'Iterator object has next function that triggers generator invocation until yield statement is reached.')

  currentVal = currentGen.next();
  t.equal('object', typeof currentVal, 'the result of generator invocation is object');  
  t.equal(currentVal.value, 1, 'value property holds the outcome of execution');
  t.ok('boolean', typeof currentVal.done, 'done property denotes does generator have more executions to be made');
  t.ok(currentVal.done, 'Generator functions with no yield exit after the first invocation');

  logSection("Generator function that yield on return");
  function *genYieldOnReturn() {
    return yield 1;
  }
  
  currentGen = genYieldOnReturn();

  currentVal = currentGen.next();
  
  t.equal(currentVal.value, 1, 'Value property holds the outcome of execution');
  t.notOk(currentVal.done, 'Generator functions with yield inside its body do not exit after the first invocation');
  
  currentVal = currentGen.next();
  t.equal(currentVal.value, undefined, 'generator value depends on what we pass');
  t.ok(currentVal.done, 'execution completes as expected - on the second next() call');
  t.throws(currentGen.next, 'generator has exited so calling next() again throws an error');
  
  

  logSection("Generator that yield in the middle");
  function *genYieldInTheMiddle() {
		var resumed = yield 1;
		t.notOk(resumed, 'we resume without passing anything to next so we do not care about the resume state');
		return 2;
  }
  currentGen = genYieldInTheMiddle();
  currentVal = currentGen.next();
  t.equal(currentVal.value, 1, 'after the first invocation we get the produced value');
  t.notOk(currentVal.done, 'after the first invocation we have more invocations remained but have to resume');
  
  currentVal = currentGen.next();
  t.equal(currentVal.value, 2, 'the outcome of second invocation is as espected');
  t.ok(currentVal.done, 'execution completes as expected - on the second next() call since we have one yield');
  
  logSection("Generator that yield in the middle and recieve data from the caller");
  function *genYieldInTheMiddleAndGetsData() {
		var res = yield 1;
		t.equal(res, 2, 'data has been passed from the caller');
		return res + 1;
  }
  currentGen = genYieldInTheMiddleAndGetsData();
  currentVal = currentGen.next();
  t.equal(currentVal.value, 1, 'the result of generator invocation is object with "value" property');
  t.notOk(currentVal.done, 'the result of generator invocation is object with "done" property which is false if generator function has NOT exited yet');
  
  currentVal = currentGen.next(2);
  t.equal(currentVal.value, 3, 'when resuming invocation the generator takes into account what has been past to next');
  t.ok(currentVal.done, 'execution completes as expected - on the second next() call since we have one yield');

  logSection("Generator is like iterator and preserves the state of local variables across invocations");
  function *naturalNumbers(){
    var n = 1;
    while (true){
      yield n++;
    }
  }
  currentGen = naturalNumbers();
  currentVal = currentGen.next();
  t.equal(currentVal.value, 1, 'the value is one...');
  currentVal = currentGen.next();
  t.equal(currentVal.value, 2, '...and increases on the next invocation');
  
  logSection("Generator can handle exceptions thrown by the caller");
  function *handler() {
    try {
      var val = yield null;
    }
    catch(e) {
        t.equal(e.toString(), 'Error: Thrown by the caller!', 'Error has been caught!')
      }
  }
  currentGen = handler();
  currentVal = currentGen.next();
  currentGen.throw(new Error('Thrown by the caller!'));

  t.end();

});


function logSection(name) {
  log('########################################');
  log('');
  log(name);
  log('');
}