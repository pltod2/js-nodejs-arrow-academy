//Boolen, Numbers, String, Array, Tupple, Enum, Any, Void, Object

let isDone: boolean = false;

let decimal: number = 6;

let color: string = "blue";


let list: number[] = [1, 2, 3];

let someOtherList : Array<any>;
//define the contents of an array
let arrayContent : Array<ArrayContent>;

class ArrayContent{}


// Declare a tuple type
let x: [string, number];

//Declare an ENUM
enum Color {Red, Green, Blue};
let c: Color = Color.Green; // returns "Green"


//
//
//Function return types

function someFunction() : void{
    return;
}
