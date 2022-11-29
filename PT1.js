/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

let myNumber = 1; //This is an Integer, which is a whole number.
let myFloatNumber = 3.14; // This a float. Not to be confused by integer because it includes a fraction which is expressed in decimals.
let myString = "Batı"; // This is a string. It's a combination of characters between quotation marks. JS will read them as B+a+t+ı.
let myBoolean = true; //This a boolean. It is used for assigning a true or false property.
let myUndefined //Since I haven't assigned any value to the variable, it is currently undefined.
let myNull = null; //Null means declared variable's value has been emptied by the user.
let myBigInt =  666n; //BigInt used for storing numbers higher than +(2^53-1) or lover than -(2^53-1). Rarely used.
let mySymbol = Symbol('bati');  //Symbols are used to add unique property keys and will return the same value. Rarely used.

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

let myVariable = 5; // Variable is used to store data values.

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let mySum = 12 + 20;

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12;

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe";

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

let myExtraction = 12 - x;

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john";
let name2 = "John";
console.log("If name1 (john) and name2 (John) are the same?", name1===name2);
console.log("If name1 (john) and name2 (John) are the same?", name1===(name2.toLowerCase()));

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

let x1 = 5;

if (x1 === 1) {
x1 = "one";
} if (x1 ===2) {
    x1 = "two"
} if (x1===3) {
    x1 ="three"
} if (x1===4) {
    x1 = "four"
} if (x1===5) {
    x1 = "five"
} if (x1===6) {
    x1 = "six"
} if (x1===7) {
    x1 = "seven"
} if (x1===8) {
    x1 = "eight"
} if (x1===9) {
    x1 = "nine"
} 

console.log(x1);

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

function studentDiscount(isStudent) {
    return (isStudent ? '2.5 TRY' : '10 TRY')
}

console.log(studentDiscount(true));
console.log(studentDiscount(false));
console.log(studentDiscount(null));