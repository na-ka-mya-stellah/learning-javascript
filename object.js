const person = {
  name : "sharif",
  age : 94,
  gender : "male",
  isMarried : true
}
console.log(person)

// object spread operator
// EXAMPLE 1
const animals = { 

  tiger : 'king of the jungle' ,

  leopard : 'follows the tiger of course' ,

  lion : 'just weak as i am😁',

  bird : 40

}

const  { tiger , ... rest }  =  animals
console . log (tiger)
console . log (rest)

// different use cases of the spread operator
// (1) adding elements of an existing array to a new array

const   subjects  =  [ 'mathematics' , 'chemistry' , 'physics' ]
console . log ( subjects )

const allSubjects = ['biology','english','french',...subjects]
console . log ( allSubjects ) 

// (2)pass elements of an array as arguments to a function

function  addNumbers ( a , b , c ) {
  console . log ( 1  +  2  +  3 )
}
var  args  =  [ 1 , 2 , 3 ]
addNumbers(...args)

// EXAMPLE 2
function  programmingLanguages ( react , javascript , tailwind ){
  console . log ( react )
  console . log (javascript)
  console . log (tailwind) 
}

const langs  =  [ 'java' , 'python' , 'c#' , 'c++' ]
programmingLanguages ( ...langs ) 

// EXAMPLE 3
function  subtract( x , y ,z ){
  console . log ( 10 - 5 - 2)
}

const  subtractedNumbers = [ 10 , 5 , 2 ]
subtract ( ...subtractedNumbers )

// EXAMPLE 4 
function  fruits ( mango , orange , grapes ) { 
  console . log ( mango ) ,
  console . log ( orange ) ,
  console . log ( grapes )
}
 let  deliciousFruits  =   [ 'kiwi' , 'strawberries' , 'apples' ]
 fruits ( ... deliciousFruits )

//EXAMPLE 5
let buttons  =  function  computerButtons ( tab , shift , control ){
console . log( tab ),
console . log( shift ),
console . log (control)
}

let mostUsedButtons = ['capslock','pageUp', 'pageDown']
buttons(...mostUsedButtons) 

