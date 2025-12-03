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


// TEMPLATE STRINGS

// example 1
const name = 'penuel'
const age = 23
const job = 'web developer'

const person = `
my name is ${name} and i am ${age} years old and iam a ${job}`

console.log(person)

// example 2

const jungleAnimal ={
    jungleName : 'mara',
    species : 'carnivores',
    habitant : 'bush',
    food : 'meat',

    getTheEntireAnimal(){
        return (`the jungle animal is ${this.jungleName} and it is a ${this.species} and it lives in the ${this.habitant} and it eats ${this.food}`)

    }
};
console.log(jungleAnimal.getTheEntireAnimal())

// DEFAULT PARAMETERS and ARGUMENTS
// Exampel 1

function greet (name = ' ', age = 20){
    return `hello ${name} and your age is ${age}`
}

console.log (greet('CATHY'))

// STRING PADDING
// exmaple 1

const recipe = {
    flavour : 'sweeet',
    price : 200,
    loction: 'macdonald'
}

console.log(recipe.flavour.padStart(10 , '!'))
console.log(recipe.flavour.padEnd(10 , '👌'))
