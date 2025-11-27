// The LET and CONST
// These are new ways of declaring variables in ES5 and 6

// example 1

// showing how const and let work or behave in terms of scope
const givenName = 'jim'
let age = 23
let job = 'developer'

if(true){
    let age = 27
    let job = 'designer'
    let givenName = 'jaden'

    // these will be modified since they are in the same block scope with the let and const variables
    console.log(age)
    console.log(givenName)
    console.log(job)
}

// these will not be modified since they are outside of the block scope and let and const only work in blosck scope
// console.log(givenName)
// console.log(job)
// console.log(age)

// DESTRUCTURING
// This is a new way of extracting data from an array or object 

const user = {
    usedName : 'john doe',
    school: 'university of canada',
    gender: 'male',
    location: 'canada'
    
};

// destructuring the user object with the const 

// const {usedName , school , gender , location} = user;
// console.log(usedName)
// console.log(age)
// console.log(gender)
// console.log(location)

// destructuring the user object with the let

let {usedName , school , gender , location } = user;
console.log(usedName)
console.log(school)
console.log(gender)
console.log(location)

// example 2
// destructuring an array

const numbers = [1,2,3,4,5,6,7,8,9,10]

const [first,second,third,...rest] = numbers

console.log(first)
console.log(second)
console.log(third)
console.log(rest)