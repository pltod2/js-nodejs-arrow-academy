module.exports = `var x = 10;
 
function foo() { 
    var x = 20;
    var y = 30;

    var foo = function () {
        console.log(x); 
        console.log(y);
    };
    
    var bar = new Function('console.log(x); console.log(y);');
 
    foo(); // ?
    bar(); // ?
 
}`