// 1st Question javascrpt
console.log("1st question answer")
let age = 25;
let isAdult = age >= 18; // true if age is 18 or more, otherwise false
console.log("Answer 1 is:- ", isAdult); // Output: true
// 2nd Question javascript
console.log("----------------")
console.log("2nd question answer")
let x = 10;
let y = 5;
let addition = x + y;         // Addition
let multiplication = x * y;  // Multiplication
let modulus = x % y;         // Modulus
console.log("Answer 2 is add:- ",addition);       // Output: 15
console.log("Answer 2 is mulltiply:- ",multiplication); // Output: 50
console.log("Answer 2 is modulus:- ",modulus);        // Output: 0
//3rd question answer
console.log("---------------")
console.log("3rd question answer")
let n = 7; // Example number
let evenOrOdd = (n % 2 === 0) ? "Even" : "Odd";
console.log("Answer 3 is :-",evenOrOdd); // Output: Odd
//4th Question javvascript
console.log("---------------")
console.log("4th question answer")
let numbers = [];
for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}
console.log("Answer 4 is ;- ", numbers); // Output: [1, 2, 3, 4, 5]
//5th Question answer
console.log("---------------")
function square(number) {
    return number * number;
}
// Example usage:
console.log("Answer 5 is :- ", square(4)); // Output: 16

// Prompt the user to enter a number
let userInput = prompt("Enter a number:");

// Convert the input to a number (if needed)
userInput = Number(userInput);
console.log(userInput); // Output: 3 (if the user enters 3)
let evenorodd = (userInput % 2 ===0) ? "Even" : "Odd"
console.log(evenorodd)