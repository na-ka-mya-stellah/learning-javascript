// 1. PURE FUNCTIONS
// these are functions that do not depend on external state and do not modify the external state(they have no side effects)

// Example 1
function add(a,b){
    return a+b;
}
console.log(add(2,3))

// Example 2
function subtract (x,y){
    return x-y;
}
console.log(subtract(5,3))

// example 3
function multiply (v,w){
    return v*w;
}
console.log(multiply(2,3))

// Functions that are not PURE FUNCTIONS
// they modify the external or outer state

// example 1
let counter = 0;
function increment(){
    counter++;
}
increment();
increment();
increment();
console.log (counter);

// example 2
let name = 'john'
function changeName(newName){
    name = newName;

}
changeName('jane')
console.log(name)

// example 3
const person = {
    name : 'phillip',
    age : 20
}

function updateProperties(newName,newAge){
    this.name = newName
    this.age = newAge
}
updateProperties.call(person,'santos',24)
console.log(person)


//(2) INDEMPOTENCE
//  a function is idempotent if it produces the same result when called multiple times with the same input

// example 1
function square(x){
    return x*x;
}
console.log(square(5))
console.log(square(5))
console.log(square(5))

// example 2
function divide(x,y){
    return x/y;
}
console.log(divide(10,2))
console.log(divide(10,2))
console.log(divide(10,2))
console.log(divide(10,2))

// (3)IMPERATIVE AND DECLARATIVE

// a. imperative code
// this is the code that tells the machine what to do and how to do it
// example 1
const numbers = [1,2,3,4,5]

function doubleNumbers(numbers){
    const doubled = []
    for (let i = 0; i < numbers.length; i++){
        doubled.push(numbers[i]*2)
    }
    return doubled;
}
console.log(doubleNumbers(numbers))

// b. declarative code
// this code tells the machine what to do and what should happen but not how to do it
// example 1

const numbers2 = [1,2,3,4,5]
const doubledNumbers = numbers2.map(num => num * 2)
console.log(doubledNumbers)

// (4) IMMUTABILITY
// This means that an object cannot be modified after it is created (not changing the data but instead making copies of data and always returning a new copy of state everytime)
// example 1
const person2 = {
givenName : 'jerome',
age : 20
}
function originalName(person2){
    return {...person2}
}
console.log(originalName(person2))

function updateName(person2){
    const rename = originalName(person2);
    rename.givenName = 'jordan'
    rename.age = 19
    return rename;
}
console.log(updateName(person2))

// example 2
const user = {
    userName : 'carson',
    password : '2025',
    email : 'carson@gmail.com'
}
function firstUser(user){
    return {...user}
}
console.log(firstUser(user))

function secondUser (user){
    const otherdata = firstUser(user)
    otherdata.userName = 'gerald'
    otherdata.password = '1000',
    otherdata.email = 'gerald@gmail.com'
    return otherdata;
}
console.log(secondUser(user))

// (5) HIGHER ORDER FUNCTIONS
// This is a function that does one of the two things
// a. takes one or more functions as arguments.
// b. returns a function as its result.(often called a callback)

// // example 1  (with arrow functions)
const hof = () => () => 5
console.log(hof()())

// without arrow functions
const hof2 = function(){
    return function(){
        return 5
    }
}

console.log(hof2()())
 






