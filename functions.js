// HOW TO CREATE A FUNCTION?????


// (1)function declaration


// function 1
function add(a,b){
  return(a+b)
}
console.log(add(4,4))

// function 2
function sing(song){
console.log(song)
}
sing('talala')

// example 3
function multiply (x,y){
    return(x*y)
}
console.log(multiply(3,2))

// example 4
// function add(m,n){
//     if (m < 20 || n < 20){
//         return('hell naah')
//     }else{
//         return(m+n)
//     }
// }
// console.log(add(10,18))



// (2) function expression

// example 1
var sayHey = function(){
    console.log('hey')
}
sayHey()

// example 2
var addition = function count(v,w){
    if (v <= 10 || w <= 10 ){
        return('yes our geniuses🤣')
    }else{
        return(v+w)
    }
}
console.log(addition(10,15))

// ARROW FUNCTIONS
// arrow functions only work with function expressions not function declarations

// Example 1
const addNumbers =(a, b=10) =>  (a + b)
console.log (addNumbers(10))


// example 2  (without arrow function)
const names1 = function (name1,name2){
    return (`${name1} and ${name2} are related`)
    
}

console.log(names1('john','james'))


// example 2 (with arrow function)
const names2 =(name1,name2) => (`${name1} and ${name2} are related`);
console.log(names2('john','james'))

