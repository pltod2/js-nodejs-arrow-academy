module.exports = `var firstClosure;
var secondClosure;
 
function foo() {
  var x = 1;
 
  firstClosure = function () { return ++x; };  
  secondClosure = function () { return --x; };
 
  x = 2;
  console.log(firstClosure()); // ?
}
foo();
console.log(firstClosure()); // ?
console.log(secondClosure()); // ?`