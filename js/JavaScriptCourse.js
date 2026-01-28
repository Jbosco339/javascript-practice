console.log("you are welcome to javascript");
console.error("Please enter the correct details")
console.warn("Please enter the correct details")

// VARIABLES IN JAVASCRIPT
// use let and const to declear variables, let variables can change but const variables cannot change once declared
// DATATYPES IN JAVASCRIPT: strings, Numbers, Boolean, null, undefined and symbols.
const Name = 'Philomena';
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
console.log(fruits[0])
fruits[4] = 'banana'
fruits.push('star apple')
console.log(fruits)

// OBJECT LITERALS
const individual = {
    name: 'benjamin',
    age: 27,
    meal:'beans',
    address:{
        street: 'chibiake',
        LGA: 'Benue' ,
        houseNo: 20,
    }
}
console.log(individual.name, individual.meal)
console.log(individual.address.LGA)

// ARRAYS OF OBJECT
const todos = [
    {
        id: 1,
        task: 'make breakfast',
        done: false
    },
    {
        id: 2,
        task: 'doctor appointment',
        done: false
    },
    {
        id: 3,
        task: 'go for workout',
        done: false
    },
]
console.log(todos[1].task)

// TO CONVERT ARRAYS OBJECTS TO JSON FILES
const todoJSON = JSON.stringify(todos);
console.log(todoJSON)

// FOR LOOPS
for ( let i = 0; i <= 10; i++){
    console.log(i)
}
console.log('while loop begins here')
// WHILE LOOP
let i = 0;
while (i <= 5){
    console.log(`while loop: ${i}`);
    i++;
}
// CONDITIONALS
const examscore = 50;
if(examscore > 45){
    console.log('you got a pass mark');
}else{
    console.log('try again next year')
}

const a = 7;
const b = 10;
if(a > 5 || b > 10){
    console.log('a is more than five or b is greater than ten')
}

// SWITCH CASE
const c = 19;
const color = 'red' ;
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
        default:
            console.log('the color is not red or blue');
}

// FUNCTIONS
const add = (numb1, numb2) =>{
  return numb1 + numb2
    console.log('the sum is '+ add);
    // using back ticks   
}
console.log('the sum is '+ add(2,4));

// constructor function
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}
// instatiate the object
const person1 = new Person('john', 'doe', '21-5-1998');
const person2 = new Person('ben', 'grace', '4-3-1987');

console.log(person1.firstName)
console.log(person2.lastName)

// DOM
const submit = document.querySelector('.button');

submit.addEventListener('click', (e) =>{
    e.preventDefault();
    document.querySelector('#form').classList.add('new_bg');
});







 