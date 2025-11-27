// CLOSURES
// You can think of them as a function that has access to its own scope , the outer functions scope and the global scope.
// closures are created every time a function is created at function time
// The child scope always has access to the parent scope but the parent scope does not have access to the child scope
// OR A function ran. the function executed. its never going to execute again but its going to remember that there are references to those variables so the child scope always has access to the parent scope but the parent scope doesnot have access to the child scope

// example 1

// const first = ()=>{
//     const greet ='hi'
//     const second = ()=>{
//         alert(greet)
//     }
//     return second
// }

// const newFunc = first()
// newFunc()

// // example 2
// function outer(){
//     const sayHi = 'hey everyone'

//     function inner(){
//         console.log(sayHi)
//     }
//     return inner
// }
// const solvedFunction = outer()
// solvedFunction()


// CURRYING
// currying is the process of converting a function that takes multiple arguments into a sequence of functions that each take a single argument

// example 1

// WITH ARROW FUNCTIONS
// const multiply = (a,b) => a*b
// const curriedMultiply = (a) => (b) => a*b
// console.log(curriedMultiply(2)(2))

//  WITHOUT ARROW FUNCTIONS
const multiply = function(a,b){
    return a*b
}

const curriedMultiply = function(a){
    return function (b){
        return a*b
    }
    
}
console.log(curriedMultiply(2)(2))

// example 2 (without arrow functions )
// const addition1 = function(v,w){
//     if (w !== undefined){
//         return v + w
//     }else{
//         return function(w){
//             return v + w
//         }
//     }
// }
// console.log(addition1 (10,10))

// example 2 (with arrow functions)
const addition2 =(v,w) => (w !== undefined) ? (v+w) : (w => v + w)
const addition3 = addition2(10);
console.log (addition2(10,10));
console.log (addition2(20,10));
console.log (addition3(10))


