console.log("you are welcome to javascript");
console.error("Please enter the correct details")
console.warn("Please enter the correct details")

// VARIABLES IN JAVASCRIPT
// use let and const to declear variables, let variables can change but const variables cannot change once declared
// DATATYPES IN JAVASCRIPT: strings, Numbers, Boolean, null, undefined and symbols.
const Name = 'John';
const age = 40;
const score = 9.6;
const iscool = true;
const x = null;
const y = undefined;
let z;
// USING CONSOL.LOG TO DISPLAY THE DATATYPE OF VARIABLES
console.log(typeof age)
console.log(typeof iscool)
console.log(typeof age)
// CONCATENATION
console.log('my name is '+ Name+ ' and i am '+ age)
// option two usin backticks
console.log(`my name is ${Name} and i am ${age}`)

/* ARRAYS:thesse are variables that holds multiple values */
const fruits = ['mango', 'orange', 'pineapple', 'grapes']; 
console.log(fruits)