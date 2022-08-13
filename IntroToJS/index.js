// Callbacks


/*
let multiply = function(n) {
    console.log("Hey There");
    return n*n;
}
let sum = function(n) {
    console.log("In Sum function");
    return n+n;
}

let calculate = function(f1,n){
    return f1(n); // f1
}

calculate(multiply,5); // 25
calculate(sum,5); // 10




let fetchAFile = function (callback) {
    // Fetch a file from server
     fetch(file.js);
    // It needs to show success Message after completion of task
    callback();
}

fetchAFile(ImCallback);
*/

// ASYNCHRONOUS , NON BLOCKING, Single Threaded




console.log("Program Started")

let name;


// Web Api Async function // Callback Hell
// setTimeout(function() {
//     name = "My Name"
//     console.log("Executing the callback 1");
//     console.log("Name : ")
//     console.log(name); // Output : Undefined , printed before 10 seconds
//      setTimeout(function(){
//                     console.log("Callback 2 ")
//                         setTimeout(function (){
//                                     console.log("Callback 3")
//                          },1000);
//      },1000);
// }, 10000); // Function in your javaScript

// Callback Hell
 fetchApi(fetchsomething, function(resultOfetchApi1){
       db.get(resultOfetchApi1, function(resultOfGetDBCall){
              db.post(resultOfGetDBCall, function(resultOfPostcall){
                  // Inner Most Callback
                   resultOfetchApi1
                   resultOfGetDBCall
                   resultOfPostcall
                  console.log("Hey User was signed in");
              })
       })
 })

/*
   1.  Fetch Data  : Name Id // Async Call
       2.  Parse Data // Callback 1
           3.  DB Call  :  Exact Person // Callback 2
               4.  Authentication  : Athentcation  // .....
                   5.  Store Data  : Person
                       6. Return Data

  Can be executed if main stack is empty
 */

// Fetch
// Ajax Call
// Make any function :: Async Call

// console.log("Set timeout is complete");
//
// console.log("Lets print this after loop");
//


// Promises :

// let myPromises = new Promise(function(resolve, reject){ // Producer
//     try {
//         User user = db.find(userId); // it throws not found error
//         resolve(user);
//     } catch (err){
//         reject("No user found");
//     }
//
//     console.log("Starting a promise here")
//     reject("I got rejected") // Success State
// });
//
// myPromises.then(function(result){ // Consuming
//                 console.log(result);
//                 // Itself can have DB call
//                // db.findAllBooks(user.memberId)
//                 // throw err
//                // result db.findAllBooks(user.memberId);  // Whatever is returned from then itself is promise
//                     // New Promise(function(resolve, reject){
//                     //     resolve( db.findAllBooks(user.memberId))
//                     // })
//             }) // Is promise is resolved   // Consumer
//             .then((resolve)=> {
//                 return 12;
//             })
//             .then()
//             .catch(function (err) {
//                      console.log(err);
//                }) // If promise is rejected
//            .finally(function() {
//                // clean
//            }) // Always

let myPromises = new Promise(function(resolve, reject){ // Producer
        setTimeout(()=>{
            reject(10);
        },10000); // 10 seconds
});

myPromises.then(function(result){ // Consuming
    console.log(result);
    return result + result; // Wrapped in Promise with Resolve(result + result);
    }).then((result)=> {
    console.log(result);
    return result + result;;
    })
    .then(()=>{
        throw new Error(); // Wrapped in Promise with Reject(Error());
    }).then((result)=> {
    console.log("Im ignored");
    return result + result;;
    })
    .catch(function (err) {
        // Here
        console.log(err);
        throw new Error()
    }) // If promise is rejected
    .then()
    .then()
    .catch()
    .then()
    .catch((err)=>{
        throw new Error();
    })
    .finally(function() {
        console.log("Prints Finally")
        // clean
    }) // Always


window.addEventListener("unhandledrejection", function (err){

})


// Making code synchronous Callbacks and Promises
// Async Await :
// async - await : Next Classes

// async function : Return a Promise
async function f(){
    return 1;  // Promise with Resolve(1)
    // return Promise.resolve(1)
}

f()
    .then()
    .catch()
    .finally();


// Await
// let result  = await promises;

//Block 1
async function myFunc() {

    try {
        let myPromise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(10), 10000); // Task
        })

        let myPromise2 = new Promise((resolve, reject) => {
            setTimeout(() => resolve(10), 10000); // Task
        })

        // Await can only be used in async function
        let result = await myPromise; // Suspend further execution until promise is settled
        let result2 = await myPromise2;
        //

        let user
        [] = await db.findAll({}); // return array of users  Will Suspend further execution until promise is settled
        // Returning a promise that settle with resolve(array of users)

        let userThree = await db.find({userId: user[2].id}); // Suspend further execution until promise is settled
        // Throws Error
        let result = await db.update({userId: userThree.id}, {name: "SHRIRAMU"});

        console.log(result);
    } catch (err) {

    }
}

// Block 2
let myPromise = new Promise((resolve,reject) => {
    setTimeout(()=>resolve(10),10000);
})

myPromise.then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
})

export let myVar = 3;
export function hello() {
    console.log("Hey There!");
}


export default class User { // just add "default"
    constructor(name) {
        this.name = name;
    }
}