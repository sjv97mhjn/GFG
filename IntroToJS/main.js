// var num;


/*
Java Scripts : Interpreted Languages  : Frontend HTLM -> Chrome
   Chrome Broswer :  V8 Engine ( Pasrse JS -> Machine Level Code 0,1 )
   Firefox : JS Engine
   I.E

Server  :
 Node JS :  C++ [ V8 Engine ] :  Runtime Environment Build over V8 Engine ( ** functionalities ++ )
 Express :  Framework  : HTTPS Routeing

Wrong   git clone https://github.com/sjv97mhjn/GFG/tree/master/IntroToJS.git

Right   git clone  https://github.com/sjv97mhjn/GFG.git


 Git :  Version Control System
Example  1 :
   Project Changes 1 :   Commit hash Id ( Uniques ID ) : commit id : Git Snapshot -> commit id
   Project Changes 2 :   commitId2 -> snapshot
   Project Changes 3 :   commitId3 -> snapshot

   Project Changes 2 : commitId2 -> snapshot


Example  2 :


   P1 Project Changes 1 :
   P2 Project Changes 1 :
              Master
    Backend            Frontend
    commit 1            commit 3
    commit 2            commit 4
  Backend1   Backend2


   P1 Frontend  : Frontend
   P2 Backend   : Backend

  https://github.com/sjv97mhjn/GFG.git

 */

// console.log("Hi There starting learning JS")

// Error

// console.log X
// console.error("In main.js in xzy function this error occurred")



// console.error("Error Message")

// Logging Level

// console.error() // Network Failure
// console.debug()  // Downstream Calls
// console.info() // User Logged In

//   Single Line Comment

/*
  Block
  Of
  Comment
 */

// Variables
/*
  Data types : Primitive Data Type : 6 Different Types
   * Number
   * String
   * Boolean
   * Null
   * Undefined
   * Symbols

    Declare and Define
 */

//
// console.log(num) // undefined
// // Just In Time Compilation
// var num = 1 ; // Global Scope
//
// // for(;;) {
// //     let letNum = "Block Scope";
// // }
//
// console.log(letNum);
//
// //
// //
//
// let str = "My Name";
// let myBoolean  = true;
// let x = null;
// let y = undefined;
//
// // const str = "My constant string";
// console.log(typeof myBoolean)   // Boolean
//
//
// // Strings
// // Concatenation : Joining of two strings
// let str1 = "Sajeev";
// let str2 = "Mahajan";
//
// let fullName = "My name is" + str1 + " " + str2;  // My Name is Sajeev Mahajan
// console.log(fullName);
//
// let fullName2 = `My Name is ${str1}  ${str2}`; // ES6
// console.log(fullName2);
// console.log(str1.length); // 6
// console.log(str1.toLowerCase()); // sajeev
// console.log(str1.toUpperCase()); //  SAJEEV
//
// console.log(str1.substring(0,1));  ///  S
// console.log(fullName.split(" ")); //  ["Sajeev","]
//
// // Arrays
// let myArray = [1,2,3,4,5,"my name", true];
//
// console.log(myArray[5]);
//
// myArray.push("New Element");
// console.log(myArray);
// myArray.unshift("At the start of the array");
// myArray.pop();



let num = 1


if (num === "1") { // ==  ===
    console.log("Matched") // This
} else {
    console.log("Un Matched") // This
}


let name = "myName",
    age = "25",
    fullName = "Sajeev Mahajan";


// Objects
let obj = {
    name: "Sajeev",
    age : "25",
    dob : "7-8-1997",
    session : "GFGS- FSRNL 19"
}

console.log(obj.dob);
console.log(obj["dob"]);

obj.newKey = "new value"; // 2008
obj.age = 26;

console.log(obj) // new keys added

// iteration in object
for ( let key in obj){
    console.log(key);
    console.log(obj[key]);
}

let oldObj = {
    name: "Sajeev",
    age : "25",
    dob : "7-8-1997",
    session : "GFGS- FSRNL 19",
    anotherObj: {
        officeName : "Oracle"
    }
}

let num1 =10;
let num2 = num1;
num2 = 11;
console.log(num1) // 10


// 2004 --- 2008
let newObj = oldObj ; // Reference 2004 //

newObj.age = 10;

console.log(oldObj.age); // 10

let clonedObject  ; // Reference 2004 //

// Shallow Cloning
for ( let key in obj){
    console.log(key);
    console.log(obj[key]);
    clonedObject[key] = oldObj[key];
}

// Address, Value [2004, 10]
//   newObj  -> [ 2004 ]
//   oldObj  -> [ 2004 ]


// Deep  Cloning  Function
for ( let key in obj){
    console.log(key);
    console.log(obj[key]); // Check if Key itself is an object or not // Task 1
    clonedObject[key] = oldObj[key];
}

// Functions
//
// function myFunction(){
//
// }

let name = function(name = "Default Name",age = 0) {
        console.log(`My name is ${name} and age ${age}`);
};

let myFunc = (name,age) => {
    console.log(`My name is ${name} and age ${age}`);
};

let myFunc2 = name => console.log(`My name is ${name}`);

let myFunc3 = () => console.log(`My name is `);


name("Sajeev",10);

// ES6

myFunc("Sajeev",10);
myFunc2("Name");
myFunc3();



let oldObj2 = {
    name: "Sajeev",
    age : "25",
    dob : "7-8-1997",
    session : "GFGS- FSRNL 19",
    anotherObj: {
        officeName : "Oracle"
    },
    myName : name
}

// Constructor Functions  : Functions that creates objects
function Person(firstName,lastName,dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
}

Person.prototype.getMyBirthDate = function(){
    return new Date(this.dob); // GMT 05:30 7th August 1997
}


let person1 = new Person("Sajeev","Mahajan","7-8-1997"); // typeOf
let person2 = new Person("John","Doe","7-8-1997");
let person3 = new Person("Steve","Smith","7-8-1997");

person1.getMyBirthDate();
// Create Object

// console.log(object)

// Inheritence overall in JS  // _proto_

// Proto Type

// ES6 : Classes

class Animal {

}

class PersonClass extends Animal {

    constructor(firstName,lastName,dob) {
        super()
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
    }

    getMyBirthYear() {
        return new Date(this.dob).getFullYear();
    }
}

let person4 = new PersonClass("first","second","7-8-997")
console.log(person4.getMyBirthYear());

let organism = {
    breaths : true
}

let animal = {
  eats : true
}

let rabbit = {
    jumps: true
}
animal.__proto__ = organism;
rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

// Rabbit --> Animal --> SomethingElse

console.log(rabbit.breaths) // true
// Task 2