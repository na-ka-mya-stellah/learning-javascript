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



