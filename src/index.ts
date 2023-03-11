let id: number = 5   //setting type of variable to number


console.log(`ID is: ${id}`)
// tsc --watch index -- to automatically compile on changes
//tsc --init -- to create typescript configuration file

//Basic Types
let index: number = 2032
let company: string = "mathias lawson"
let check: boolean = true
let x: any //--any is also a data type
let age: number //just initialization


age = 20

let ids: number[] = [1, 3, 4, 5]  //defining an array
//type rules are always strict
let arr: any[] = [1, true, 'mathias']

//Tuple
let person: [number, string, boolean] = [1, 'Mathias', true] ///provides types as defined in the exact spots
//Tuple Array
let members: [number, string][] 
members = [
    [1, 'Mathias'],
    [5, 'Lawson'],
    [9, 'Prince'],
]

//Union 
let serial: string | number = 22  //combine two types
serial = '22'

//Enum
enum Direction1 {
    Up = 1, 
    Down = 2, 
    Left, 
    Right, 
}  // when created they will be numeric values by default

//stringed enums
enum Direction2{
    up= 'up',
    down= 'Down'
}

console.log(Direction1.Up)

//Objects
type User = {
    id: number
    name: string
}

const user: User = {
    id: 1,
    name: 'Mathias'
}

//Type Assertion
let cid: any = 1
let customerID = <number>cid  //first way
let customerid = cid as number //second way


//Functions
function addNum(x: number, y:number):number{
    return x + y
}

console.log(addNum(1, 3))

function log(message: string | number): void{
  console.log(message)
}
log('This is a message from Mathias to the Eartch')


//Interfaces
interface UserInterface {
    id: number
    name: string
    age? : number  //? makes providing the age variable to be used optional 
    readonly serial ? : number //readonly allows it not to be overriden
}

const user1: UserInterface = {
    id: 1,
    name: 'Mathias'
}

//NB: you can't use primitives with interfaces, use interfaces with objects

//interfaces with functions

interface MathFunc {
   (x:number, y:number): number
}

const add: MathFunc = (x: number, y:number): number =>{
  return x + y
}
const sub: MathFunc = (x: number, y:number): number =>{
  return x - y
}

//Classes
class Person {
    id: number  //public by default
   // private id: number  //private
   // protected id: number  //protected
    name: string

    constructor(id: number, name: string){
          console.log('see the constructor')
          this.id = id  //assign function values to initialized ones
          this.name = name
    }

    //other methods 
    register(){
        return `${this.name} is registered`
    }
}

const mathias = new Person(1, 'Mathias')

//class extneds

class Employee extends Person{  //this is called the Sub class
    position: string

    constructor(id: number, name: string, position: string){
       super(id, name)
       this.position = position
    }
}

const emp = new Employee(4, "Lawson", 'Developer')


//Generics

function getArray<T>(items: T[]):T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['mathihas', 'prince'])


numArray.push(4)
