// Functions will not be activated unless called

// function greet() {
//     console.log("Hello, welcome to JavaScript");
// }

// greet(); // Calling the function

// function greetUser(name) {
//     console.log(`Hello, ${name}`);
// }

// greetUser("Alice");
// greetUser("Bob");


// Functions with multiple inputs

// function addNumbers(num1, num2, num3) {
//     console.log(`Sum: ${num1 + num2 + num3}`);
// }

// addNumbers(1,2,3);


// Nameless Function

// const greet = function(name) {
//     return `Hello, ${name}`;
// }

// console.log(greet("Alice"));


// Arrow Functions

// const square = (num) => num ** 2;

// console.log(square(5)); // output is the square of the input


// const multiply = (a,b) => {
//     return a * b;
// }

// console.log(multiply(3,4)); // output is 12


// Function scopre and hoisting

let globalVar = "I am global";

function testScope() {
    let localVar = "I exist only inside of this function";
    console.log(globalVar); // Works
    console.log(localVar); // Works
}

testScope();
console.log(globalVar); // Works
console.log(localVar); // Does not work/errors


hello();

function hello() {
    console.log("Even though the function was called before the construciton of the function, it was still called properly (IE: Hoiseted)");
}
// Expression and Arrow functions are not hoisted, only declared functions can be hoised