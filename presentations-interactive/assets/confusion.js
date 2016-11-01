module.exports=`test('### Confusion ###', function(t) {

    var obj = new Array();
    t.ok(typeof Array === "function");
    t.ok(Array instanceof Function);
    
    t.ok(Object.getPrototypeOf(obj) === Array.prototype);
    t.ok(Array.prototype instanceof Object);
    
    Array.data = 5;
    t.equal(5, Array.data);

    t.ok(Object.getPrototypeOf(Array) === Function.prototype);
    t.ok(Object.getPrototypeOf(Object) === Function.prototype);

    Function.prototype.matrix = {neo: 'The Matrix Has You!'}
    t.ok(Array.matrix.neo === 'The Matrix Has You!');
    t.ok(Object.matrix.neo === 'The Matrix Has You!');
    Array.matrix.trinity = "trinity";
    t.ok(Object.matrix.trinity === "trinity");
    t.end();
});`