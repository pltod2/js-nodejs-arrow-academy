# Note on TASK 7

* Previous 6 tasks are related to final project.

* This one tries to teach you the difference with working with functions and with classes 

You have to make the same task in two different ways.

I would like you in both cases to make 3 modules. Don't get confused by modules this is just a separate js file.
You can use module.exports = <YOUR THING TO EXPORT>  

# Task Description 

# Variant 1. Functions
 
* The first module must export simple object literal with several properties one for each of the JavaScript primitive types.

* The second module must export function that takes object as parameter and print (use console.log) all properties owned by this object.

* The third module must require the first two and must invoke the function from the second module providing the object from the first module.
 
# Variant 2. Classes
 
* The first module must export ES6 class that defines the same properties as those used in the object literal in Variant 1.

* The second module must export ES6 class with single property that holds similar function as the one specified in Variant 1 – the one that takes object as parameter and print all properties owned by this object.

* The third module must require both classes, make object instances out of them and use those instances to print the object properties in similar manner as it is in Variant 1.