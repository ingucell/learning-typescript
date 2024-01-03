//export {}; // it serves as a signal to TypeScript that the file should be treated as a module, even if it doesn't have any exports. This is often used in situations where you have a file that contains only type declarations or utility functions and 

console.log("may name is mathias")

let num: number = 5 ;  //you have to declare data type after using variables;
//:any -- for any data type.

//tsc index.ts - to compile file

let age2:number = 20;
let myName:string = "mathias";
console.log(age2 + 45)
console.log(myName)

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

let statement:boolean = true;
const names:string[] = ["Mathias", "Prince", "Lawson"];

const usersObj: {name:string, age:number} = {
    name: "Mathias",
    age: 20
}


console.log(statement, names)


//function annotations
let a: number | string = "20";

function userID(x:number, y:number):number{
    return x+y;
}

console.log(userID(20, 10))