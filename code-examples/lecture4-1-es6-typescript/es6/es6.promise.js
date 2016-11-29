'use strict';

var debug = require('debug')('EcmaScript-6 Promise');

/**********************************
 * 
 *    PROMISE
 * 
 **********************************/


let _resolver = (resolve, reject) => {
    let data = {
        name: 'John Doe',
        age: '?'
    };
    setTimeout(() => resolve(data), 2000); // will resolve in 2000 ms
};

let _rejectOr = (resolve, reject) => {
    setTimeout(() => reject('Error string'), 2050); // will reject in 2000 ms    
};

let promise = new Promise(_resolver);
let errPromise = new Promise(_rejectOr);
let throwsPromise = new Promise((resolve, reject) => {
    throw new Error("rejected!");
});
//promise.then(callback, errorString)
promise
    .then((res) => {
        debug(`User's name is ${res.name}`);
    });

errPromise.then(
    (res) => { debug(`I doubt this is going to be called?!`) },
    (rej) => { debug(rej) }
);

throwsPromise
    .then((val) => { throw new Error("step 2 failed!") })
    .catch((err) => debug("Error thrown: ", err.message));