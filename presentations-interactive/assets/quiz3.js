module.exports = `function test() {
	
    bar(); // ?
	
    foo(); // ?    
	
    var foo = function () { 
		debug("foo");
	};
	
    function bar() { 
		debug("bar");
	}
}

test();`