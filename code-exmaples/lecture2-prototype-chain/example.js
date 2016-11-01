function Foo(y) {
  this.y = y;
}
Foo.prototype.x = 10;
 
Foo.prototype.calculate = function (z) {
  return this.x + this.y + z;
};
 
var b = new Foo(20);
var c = new Foo(30);