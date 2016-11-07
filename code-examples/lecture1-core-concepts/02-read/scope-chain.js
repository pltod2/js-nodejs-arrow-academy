var debug = require('debug')('scope-chain');
var test = require('tape');
var tapSpec = require('tap-spec');

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

debug("DEFINITION: Scope is the environment where a variable is associated with a value.");
debug("Resolving data in ECMAScript is based on static scoping principle");
debug("Static scoping implies that an identifier refers to a value defined in its nearest environment");
debug("We can infer the value of the identifier just by looking at the code - that is why it is called static");
 

test('### Data Resolution Rule 1: Data is visible in the environment where defined ###', function(t) {

  var identifier0 = 5;

  t.equal(identifier0, 5, 'pretty normal to be visible here');

  t.end();
});

test('### Data Resolution Rule 2: Higher environments see data declared in lower environments (the lowest is the global environment) ###', function(t) {

  var identifier0 = 0;

  function envrionment() {
    //This function creates new environment which see its outer environment data
    t.equal(identifier0, 0, 'identifier0 is free in this environment and takes its context from the parent environment');
  };

  envrionment();

  t.end();
});


test('### Data Resolution Rule 3: Lower envrionments do not see data declared in higher environments (the lowest is the global environment) ###', function(t) {

  function environment() {

    var identifier0 = 0;

    //look into the current context
    t.equal(identifier0, 0, 'identifier0 exist in this environment');
  };

  environment();

  //data from 'envrionment' is not exposed into the outer environment so identifer0 does not exists at all here

  function siblingEnv() {
    return identifier0;
  };
  t.throws(siblingEnv, ReferenceError, 'identifier0 is not exposed into sibling environment');

  t.end();
});

test('### Data Resolution Rule 4: Data from the closest environment is visible first ###', function(t) {
  //This is lower (outer) environment
  var identifier0 = 0;

  function environment1() {

    //This is higher envrionment
    var identifier0 = 1;

    function environment2() {
      //This is even higher in the stack environment 2
      //We see data as it is set in outer environment 1
      t.equal(identifier0, 1, 'Data from the closest environment is visible first');
    }

    environment2();
  };

  environment1();

  t.equal(identifier0, 0, 'Data from the closest environment is visible first');

  t.end();
});

test('### Data Resolution Rule 5: Static scoping which means that identifiers are resolved to the existing value at the time of function definition ###', function(t) {

    //This is context 1
    var identifier0 = 5;

    function env1() {
      t.equal(identifier0, 5, "identifier0 has its value from the parent environment");
    }

    function env2() {
      debug('NOTE: we set the identifier0 to 1 here and call the env1 but it still has value of 0 - that is static (lexical) scoping');
      var identifier0 = 1;
      env1();
    }

    env2();
    t.end();
});


