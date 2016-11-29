/// <reference path="../typings/requirejs/require.d.ts" />
var debug = require('debug')('Typescript Interfaces');

interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
    debug(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);


//OOP style

//
//
//Interfacing a user
interface User{
    username : string;
    setUserName(name : string) : void;
    getUserName() : string;
}

//
//
//A class that follows the guidelines from its interface
class Alfred implements User{

    public username : string;
    // public username : Object;
    // public username : String;

    public setUserName(name : string){
        this.username = name;
    }

    public getUserName() : string{
        return this.username;
        // return 12;
    }

}