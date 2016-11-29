'use strict';

/**********************************
 * 
 *    Exporting
 * 
 **********************************/
function generateRandom() {
    return Math.random();
}

function sum(a, b) {
    return a + b;
}
export { generateRandom, sum } // we define the two members we want to export with this module

/**
 * 
 * The export keyword on the last line exports the two functions. 
 * As you can see, the exported functions are listed in curly braces separated by a comma. 
 * You can also rename the values while exporting like this:
 * 
 */

export {generateRandom as random, sum as doSum}


/**********************************
 * 
 *    Exporting Classes
 * 
 **********************************/

/**
 * Default class export
 */

export default class Foo {}

/**
 * Exporting multiple classes
 */

export class NewFoo {};
export class Bar {};


/**********************************
 * 
 *    Importing
 * 
 **********************************/

/**
 * Importing a default class
 */

import Foo from 'lib/path/Foo'; // .js extension is not required

/**
 * Multiple Imports
 */

import { generateRandom, sum } from 'lib';

/**
 * Import them * (all)
 */
import * as lib from 'myLib';

lib.exportexClass // MODULE == namespace;

