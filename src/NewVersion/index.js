//export {}; // it serves as a signal to TypeScript that the file should be treated as a module, even if it doesn't have any exports. This is often used in situations where you have a file that contains only type declarations or utility functions and 
console.log("may name is mathias");
var num = 5; //you have to declare data type after using variables;
//:any -- for any data type.
//tsc index.ts - to compile file
var age2 = 20;
var myName = "mathias";
console.log(age2 + 45);
console.log(myName);
//tsc index.ts --watch - to watch for changes and compile automatically
//data types
//string
//number
//boolean
//null
//undefined
//object
//array
//undefined
var statement = true;
var names = ["Mathias", "Prince", "Lawson"];
var usersObj = {
    name: "Mathias",
    age: 20
};
console.log(statement, names);
//function annotations
var a = "20";
function userID(x, y) {
    return x + y;
}
console.log(userID(20, 10));
