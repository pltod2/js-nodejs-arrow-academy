var debug = require('debug')('data-types');
var test = require('tape');
var tapSpec = require('tap-spec');

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

test('### Primitive Types ###', function(t) {

  debug('There are 5 primitive data types which are not explicitely specified by the programmer (dynamic language)');

	var n = 5, 
			s = 'dog', 
			b = true, 
			o = null, 
			u;

	t.equal(5, n, 'number');
	t.equal('dog', s, 'string');  
	t.equal(true, b, 'boolean');  
	t.equal(undefined, u, 'undefined');
	t.equal(null, o, 'null');
    
  t.end();
  
});

test('### Primitive Types - Coercion ###', function(t) {

  debug('DEFINITION: Coercion -> automatic type conversion when doing operations with different types of the operands');
  debug('In arithmetic operations with primitives JS converts (coerce) the arguments to numbers with internal function toNumber');
        
	t.equal('5' - 5, 0, 'string converted to number in subtraction');
	t.equal('5' * 5, 25, 'string converted to number in multiplication');
	t.equal('5' / 5, 1, 'string converted to number in division');
	t.equal(5 + true, 6, 'boolean converted to number in addition');
	t.equal(5 + false, 5, 'boolean converted to number in subtraction');

  debug('Coercions of null and undefined are error prone:')
	t.equal(5 + null, 5, 'null is coerced to 0');
	t.equal(isNaN(5 + undefined), true, 'undefined is coerced to NaN');
  

  debug('Exception is addition operation where strings are involved. Non string operands are converted to string');
  
  t.equal('5' + 5, '55', 'number is converted to string in addition with strings');
	t.equal('5' + null, '5null', 'or null is coerced to string');
	t.equal('5' + undefined, '5undefined', 'undefined is coerced to string in case of concatenation with another string');

	debug("Expressions are evaluated from left to right and this reflect the final result when coercion involved.");  
	t.equal(5 + '5' + 5, '555', '5 + "5" + 5 = "555"');
	t.equal(5 + 5 + '5', '105', '5 + 5 + "5" = "105"');
  
  t.end();
  
});

test('### Primitive Types - Falsy Values ###', function(t) {

  debug('Exactly 7 values are evaluated to false');

  t.notOk(false, 'false');
  t.notOk(0, '0');
  t.notOk(-0, '-0');
  t.notOk('', 'empty string');
  t.notOk(undefined, 'undefined');
  t.notOk(null, 'null');
  t.notOk(NaN, 'NaN');

  t.end();
  
});

test('### Primitive Types - Compared by Value ###', function(t) {

	var s1 = "dog";
	var s2 = "dog";

  t.equal(s1, s2, 'JS primitives are compared by their values so two different variables could be equal if they contain the same value.');

  t.end();
  
});

test('### Primitive Types - Comparison and Coercion ###', function(t) {
    
  debug('JS is using toBoolean to evaluate the expression in conditionals');
  
	debug('ES Equal Algorithm is applied for == operator. It uses coercion using the internal toNumber function');
	t.ok(null == undefined, 'null is equal to undefined');
	t.ok(undefined == null, 'and undefined is equal to null');
  	
	debug('Case: Number x == String y => x == toNumber(y)');
	t.ok(1 == '1', 'so 1 is equal to "1" because toNumber("1") => 1');
	t.notOk(1 == 'test', '1 is not equal to "test" because toNumber("test") => NaN');
	
	debug('Case: Boolean x == Any Type y => toNumber(x) == y');
	t.ok(true == 1, 'true is equal 1 because toNumber(true) => 1');
	t.notOk(false == 1, 'false is not equal 1 because toNumber(false) => 0');

  debug('ES Strict Equal Algorithm is applied for === operator. It does not use coercion');
	debug('Case: Number x === String y => never true because they are of different types');		
	t.notOk(1 === '1');
	t.ok(undefined === undefined, 'undefined is strict equal undefined');
	t.ok(null === null, 'null is strict equal null');
	t.notOk(undefined === null, 'undefined is not strict equal null');

  t.end();
  
});

test('### Primitive Types - Comparison and If Statement ###', function(t) {
    
  debug('In if(Expression) {Statement}, JS coerces Expression with toBoolean.');  
	var s = "", n = 0;
	
	debug('!variable is not good for checking for null or undefined...');  
	
	if (!s) {
		debug('...using !variable is not ok because empty string is falsy');  
	} 
	
	if (!n){
  	debug('...using !variable is not ok because 0 is falsy');  
	}    
      
  t.end();
  
});  