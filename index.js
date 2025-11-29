let name = "Ahmed" // string;
const pi = 3.14; // number;
let isAvailable = true; // boolean;
let und = undefined; // undefined;
let nll = null; // null;
let obj = {
    name: "Mohamed",
    age: 30,
    isMarried: false
    
} // object;

// let users = []; // array;
// console.log(users);

// function addUser(object) {
//     let result = [...users, object];
//     return result;
// }

// let newUser = addUser(obj);
// console.log(newUser);

// console.log(
//     addUser({
//         name: "Sara",
//         age: 25,
//         isMarried: true
//     })
// );

// console.log(users);

// let age = -2;
// if (age >= 18) {
//     console.log("You are an adult");
// } else if (age <= 0) {
//     console.log("Invalid age");
// } else {
//     console.log("You are a minor");
// }


// switch(name) {
//     case "Ahmed":
//         console.log("Hello Ahmed");
//         break;
//     case "Mohamed":
//         console.log("Hello Mohamed");
//         break;
//     default:
//         console.log("Hello Guest");
// }

let arr = [10, 20, 30, 40, 50];

for (let i = 0; i < arr.length; i++) {
    console.log("Iteration number " + arr[i]);
}
let i = 0;
while(i < arr.length) {
    console.log("Iteration number " + arr[i]);
    i++;
}
