let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");

// turns string inputs into number inputs
num1 = parseFloat(num1);
num2 = parseFloat(num2);

const sum = num1 + num2;
const diff = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;

console.log(`Sum: ${sum}`);
console.log(`diff: ${diff}`);
console.log(`product: ${product}`);
console.log(`quotient: ${quotient}`);