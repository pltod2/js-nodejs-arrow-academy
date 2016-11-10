'use strict';

var debug = require('debug')('EcmaScript-6');


/**********************************
 * 
 *      let & const Keywords
 *  
 **********************************/

debug(`
    ES6 introduces the new let keyword that allows us to declare local variables in the scope of a block, 
    such as a statement, an expression, or a(n inner) function.
`);
//call the function
f();

function f() {

    {
        //Block scoped
        let x = 10;
        var y = 10;
        debug(`>> Initial x,y: ${x}, ${y}`);
        {
            // okay, block scoped name
            const x = "sneaky";
            // error, const
            // x = "foo";
        }
        // error, already declared in block
        // let x = "inner";
    }

    //Outside the block
    // debug(`>> Modified x,y: ${x}, ${y}`);
    debug(`>> Modified x,y: ${y}`);
}


/**********************************
 * 
 *      Arrow Functions
 * 
 **********************************/


debug(`
    Arrow functions are influenced by lambda functions implemented in other languages.
`);
// 1. One parameter in ES6
let sum = (a, b) => a + b;
debug("Printing the result of an arrow function");
debug(">> " + sum(1, 2));
// --> ES5
// var sum = function (a, b) {
//     return a + b;
// };

// 2. Without parameters in ES6
let randomNum = () => {
    let rand = Math.floor((Math.random() * 1000) + 1);
    let diff = () => (parseInt((rand / 2)) === (rand / 2)) ? true : false;
    return (diff()) ? rand / 2 : rand / 3;
}

debug("Printing random number");
debug(">> " + randomNum());



/**********************************
 * 
 *      Classes
 * 
 **********************************/

class Polygon {


    /**
     * Class constructor - gets invoked when class is initialiazed
     * @see ES5 example
     */
    constructor(width, height) {
        this.setDimensions(width, height);
    }

    setDimensions(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        this.area = this.width * this.height;
        return this.area;
    }

}

// ES5
// var Polygon = function(width, height){ this.setDimensions(width, height)};
// Polygon.prototype.setDimensions = function(w,h){
//     this.width = w;
//     this.height = h;
// };
// Polygon.calculateArea = function () {
//     this.area = this.width * this.height;
//     return this.area;
// }

/**
 * Class inheritance
 */
class Square extends Polygon {

    setDimensions(width) {
        this.width = this.height = width;
    }

}

let figure = new Square(5);

debug(`
ES6 introduces JavaScript classes that are built upon the existing prototype-based inheritance. 
The new syntax makes it more straightforward to create objects, take leverage of inheritance, and reuse code. 
It will also make it easier for beginners arriving from other programming languages to understand how JavaScript works.
`);
debug("Printing random number");
debug(`>> Area of the figure is: ${figure.calculateArea()}`);


/**********************************
 * 
 *    Template Literals
 * 
 **********************************/


let customer = { title: 'Ms', firstname: 'Jane', surname: 'Doe', age: '34' };
let template = `Dear ${customer.title} ${customer.firstname} ${customer.surname}! 
Happy ${customer.age}th birthday!`;
debug(`
    ECMAScript 6 provides us with a new alternative for string concatenation. 
    Template literals allow us to easily create templates in which we can embed different values to any spot we want.
`);
debug(`>> ${template}`);


/**********************************
 * 
 *    spread Operator
 * 
 **********************************/


debug(`
The new spread operator is marked with 3 dots (…), and we can use it to sign the place of multiple expected items
`);

let _array = [1, 2, 3];
let array = [..._array, 4, 5, 6];


debug(`Array value: [${array}]`);

/**********************************
 * 
 *    for( ... of ... ){}
 * 
 **********************************/

debug(`
for( ... of ... ){};
`);

let myArray = [1, 2, 3, 4, 5];
let sums = 0;

for (let i of myArray) {
    sums += i;
}

debug(`Sum is equal to ${sums}`);


/**********************************
 * 
 *    Modules
 *    http://exploringjs.com/es6/ch_modules.html
 * 
 **********************************/

debug(`
JavaScript has had modules for a long time. 
However, they were implemented via libraries, not built into the language. 
ES6 is the first time that JavaScript has built-in modules.
`);

// function cube(a) {
//     return a * a * a;
//   }

//   function cubeRoot(a) {
//     return Math.cbrt(a);
//   }

//   export { cube, cubeRoot}

// // -- app.js

//   import { cube, cubeRoot } from 'functions';

//   console.log(cube(4)); -- 64
//   console.log(cubeRoot(125)); -- 5
debug(`>> see inline code examples`);

/**********************************
 * 
 *    Promises
 * 
 **********************************/

debug(`
    First class representation of a value that may be made asynchronously and be available in the future.
`);

function msgAfterTimeout(welcome, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`Hello ${welcome}!`), timeout)
    })
}

msgAfterTimeout("World", 100)
    .then((msg) =>
        debug(`>> 1. ${msg}`)
    )
    .then((msg) =>
        msgAfterTimeout("new World!", 200)
            .then((msg) =>
                debug(`>> 2. ${msg}`)
            )
    );
