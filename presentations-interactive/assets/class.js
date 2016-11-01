module.exports = `class Address {
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

var extAddr = new ExtendedAddress('Chicago', 'US', '555');`