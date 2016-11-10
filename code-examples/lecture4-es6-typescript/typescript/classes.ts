
/**********************************
 * 
 *    Classes
 * 
 **********************************/

class Greeter {

    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }
    
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

/**********************************
 * 
 *    Inheritance
 * 
 **********************************/


class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);


/**********************************
 * 
 *    Access modifiers - 
 *    public, protected, private
 * 
 **********************************/

class Tier {

    private name: string;

    public constructor(theName: string) { this.name = theName; }

    protected move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}


/**********************************
 * 
 *    Adding class members from the
 *    constructor
 * 
 **********************************/


class Dog {
    // private _name : string;
    constructor(private _name: string) { }

    public dogName(): string {
        return this._name;
    }

}

// let sparky : Dog = new Dog();
let sparky: Dog = new Dog("Sparky");
sparky.dogName();                           // returns Sparky




/**********************************
 * 
 *    Abstract Clases
 * 
 **********************************/

abstract class Department {

    constructor(public name: string) {
    }

    //
    //
    // Helper method accesible from derived classes
    printName(): void {
        console.log("Department name: " + this.name);
    }

    //
    //
    // Abstract method --> Must be implemented in derived classes
    abstract printMeeting(): void; 
}

class AccountingDepartment extends Department {

    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}
