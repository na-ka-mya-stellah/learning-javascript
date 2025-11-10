const animal = "elephant"
console.log(animal)

const animalsInTheJungle=`lions and ${animal} are the only animals in the jungle`
console.log(animalsInTheJungle)

// Reversing a string
// example 1

function reverseIt(str){

    return str.split('').reverse().join('')
}

console.log(reverseIt('hello everyone'))

// example 2

const reverseIt3 = str => str.split ('').reverse().join('')
console.log(reverseIt3('just cool'))


// example 3
const reverseIt4=(str)=>{
    return str.split('').reverse().join('')
}
console.log(reverseIt4('cool thing in life'))

// example 4

function doIt(str){
    return str.split('').reverse().join('')
}
console.log(doIt('hell noooo'))

// example 5
let reversedData= (str)=>{
    return str.split('').reverse().join('')
}
console.log(reversedData('wrong data'))