test('### Real World Example - ES6 (Using Class) ###', function(t) {

    // ES6
    class Address {
        constructor(town, country) {
            this.town = town;
            this.country = country;
        }

        getTown() {
            return this.town;
        }

        getCountry() {
            return this.country;
        }
    }
    
    class ExtendedAddress extends Address {
        constructor(town, country, zipCode) {
            super(town, country)
            this.zipCode = zipCode;
        }
        
        getZipCode() {
            return this.zipCode;
        }
    }
    
    var ea = new ExtendedAddress('Chicago', 'US', '555');
    debug(ea);  
    debug(typeof Address);
    debug(ExtendedAddress.prototype);
    
    t.end();

});
