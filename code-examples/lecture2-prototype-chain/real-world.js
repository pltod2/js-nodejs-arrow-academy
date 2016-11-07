var debug = require('debug')('object-relationships');
var test = require('tape');
var tapSpec = require('tap-spec');

Object.prototype.stamp = 'Stamp: Object.prototype';

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);


test('### Real World Example - ES3 (Using Custom Constructor Functions) ###', function(t) {

  //Step 1. We have just created an Instance Object via Object literal with Model Object = Object.prototype 
  var address = {
    country: "US",
    town: "Chicago"
  }

  //Step 2. I would like to create objects that have country / town / zip code properties
  //So here is sample FactoryObject:
  function ExtendedAddress(zipCode) {
    this.zipCode = zipCode;
  }
  
  //This is the model for objects created with new ExtendedAddress
  // ExtendedAddress.prototype = address; //UNCOMMENT TO INHERIT COUNTRY
  var myAddress = new ExtendedAddress(555);
  
  t.equal(myAddress.constructor, ExtendedAddress, "Factory Object of Objects created with Custom constructor functions are the concrete function");
  t.ok(ExtendedAddress.prototype instanceof Object, "Newly created object used as Model for instance creation");
  t.equal(ExtendedAddress.prototype, myAddress.__proto__, "Handles from Factory and Instance to the model");

  //myAddress somehow sees propertis from the root Object.prototype
  t.equal(myAddress.stamp, "Stamp: Object.prototype", "Instance Object created");

  //myAddress has only zipCode - does not inherit address object
  t.equal(myAddress.zipCode, 555, "Instance Object created");
  t.notOk(myAddress.country, "myAddress does not have country property");

  
  ExtendedAddress.prototype = address;
  t.notEqual(myAddress.__proto__, ExtendedAddress.prototype, "Changing the Constructor pointer to the prototype does not change the Instance pointer to the prototype");
  
  debug("ExtendedAddress.prototype: ");
  debug(ExtendedAddress.prototype);
  debug("------------------------------");
  debug("myAddress.__proto__: ");
  debug(myAddress.__proto__)

  t.end();

});

test('### Real World Example - ES3 (Using Custom Constructor Functions) ###', function(t) {

    var obj = createLike({name: "Plamen"});
    t.equal(obj.name, "Plamen", "name property is succesfully inhereted");    
    t.notOk(obj.hasOwnProperty("name"), "name is inhereted");
    
    obj.veryOwnProp = "test";
    t.ok(obj.hasOwnProperty("veryOwnProp"), "veryOwnProp is owned");

    // SHIM for Object.create before it appears in ES5 
    // Object.create works like that under the hood
    // A.K.A. Prototypal inheritance
    function createLike(o) {
        //Define Factory Object
        function F() {}  
            
        //Set the Model Object
        F.prototype = o; 
            
        //Create Data Holder based on the Model
        return new F();
    };
    
    t.end();

});

test('### Real World Example - ES5 (Using Object.create) ###', function(t) {

  //Step 1. We have just created an Instance Object via Object literal with Model Object = Object.prototype 
  var address = {country: "US", town: "Chicago"}
  var extendedAddress = {zipCode: "US"}
  
  var myAddress = Object.create(address);
  var myExtendedAddress = Object.create(Object.assign(address, extendedAddress));

  t.notOk(myExtendedAddress.hasOwnProperty("zipCode"), "zipCode is inhereted");
  t.notOk(myExtendedAddress.hasOwnProperty("country"), "country is inhereted");
  t.notOk(myExtendedAddress.hasOwnProperty("town"), "town is inhereted");

  t.end();

});