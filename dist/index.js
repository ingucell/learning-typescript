"use strict";
let id = 5; //setting type of variable to number
console.log(`ID is: ${id}`);
// tsc --watch index -- to automatically compile on changes
//tsc --init -- to create typescript configuration file
//Basic Types
let index = 2032;
let company = "mathias lawson";
let check = true;
let x; //--any is also a data type
let age; //just initialization
age = 20;
let ids = [1, 3, 4, 5]; //defining an array
//type rules are always strict
let arr = [1, true, 'mathias'];
//Tuple
let person = [1, 'Mathias', true]; ///provides types as defined in the exact spots
//Tuple Array
let members;
members = [
    [1, 'Mathias'],
    [5, 'Lawson'],
    [9, 'Prince'],
];
//Union 
let serial = 22; //combine two types
serial = '22';
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {})); // when created they will be numeric values by default
//stringed enums
var Direction2;
(function (Direction2) {
    Direction2["up"] = "up";
    Direction2["down"] = "Down";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Up);
const user = {
    id: 1,
    name: 'Mathias'
};
//Type Assertion
let cid = 1;
let customerID = cid; //first way
let customerid = cid; //second way
//Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 3));
function log(message) {
    console.log(message);
}
log('This is a message from Mathias to the Eartch');
const user1 = {
    id: 1,
    name: 'Mathias'
};
const add = (x, y) => {
    return x + y;
};
const sub = (x, y) => {
    return x - y;
};
//Classes
class Person {
    constructor(id, name) {
        console.log('see the constructor');
        this.id = id; //assign function values to initialized ones
        this.name = name;
    }
    //other methods 
    register() {
        return `${this.name} is registered`;
    }
}
const mathias = new Person(1, 'Mathias');
//class extneds
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(4, "Lawson", 'Developer');
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['mathihas', 'prince']);
numArray.push(4);
//npx create-react-app . --template typescript  //typescript command
