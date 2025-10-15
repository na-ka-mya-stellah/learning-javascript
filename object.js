const person = {
  name : "sharif",
  age : 94,
  gender : "male",
  isMarried : true
}
console.log(person)

// object spread operator
const animals = { 

  tiger : 'king of the jungle' ,

  leopard : 'follows the tiger of course' ,

  lion : 'just weak as i am😁',

  bird : 40

}

const  { tiger , ... rest }  =  animals
console . log (tiger)
console . log (rest)

