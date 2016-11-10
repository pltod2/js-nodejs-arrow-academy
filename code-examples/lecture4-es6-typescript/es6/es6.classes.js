'use strict';

var debug = require('debug')('EcmaScript-6 classes');

/**********************************
 * 
 *    Definign a class (no hoisting)
 * 
 **********************************/

try {
    new Polygon(); // ReferenceError
} catch (error) {
    debug(error.toString());
}
//The class is defined DOWN HERE 
class Polygon { };

//
//
//Defining a class as a "class expression"

var RectangA = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
var RectangB = class RectangB {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

debug('RectangA name >> "' + RectangA.name + '"');
debug('RectangB name >> ' + RectangB.name);


//
//
//Defining and using Static methods
class DistancePoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.sqrt(dx * dx + dy * dy);
    }
}

const p1 = new DistancePoint(5, 5);
const p2 = new DistancePoint(10, 10);


debug('Using static methods in classes');

debug('Calculating the distance between points ' + DistancePoint.distance(p1, p2));


//
//
//Extending classes in ES6

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         debug(this.name + ' makes a noise.');
//     }
// }

var Animal = (function Animal(name) {
    this.name = name;
});
Animal.prototype.speak = function speak() {
    debug(this.name + ' makes a sound.');
}

class Dog extends Animal {

    constructor() {
        super('Stephen');
    }

    speak() {
        debug(this.name + ' barks.');
    }
}

debug('Extending classes in ES6');
var d = new Dog();
d.speak();


//
//
//Multi inheritance
let Mixin1 = (superclass) => class extends superclass {  
  foo() {
    console.log('foo from Mixin1');
    if (super.foo) super.foo();
  }
};

let Mixin2 = (superclass) => class extends superclass {  
  foo() {
    console.log('foo from Mixin2');
    if (super.foo) super.foo();
  }
};

class S {  
  foo() {
    console.log('foo from S');
  }
}

class C extends Mixin1(Mixin2(S)) {  
  foo() {
    console.log('foo from C');
    // going down the rabbit hole
    super.foo();
  }
}

new C().foo();  