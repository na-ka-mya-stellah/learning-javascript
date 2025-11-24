const person = {
  name : "sharif",
  age : 94,
  gender : "male",
  isMarried : true,
  brothers:['abdul','sharifah','faizal'],
  hobby:function(){
    return 'playing football';
  }
  
}

console.log(person.hobby())



// EXAMPLE 1 (the rest operator)
const animals = { 

  tiger : 'king of the jungle' ,

  leopard : 'follows the tiger of course' ,

  lion : 'just weak as i am😁',

  bird : 40

}


const  { tiger ,...rest}= animals

console . log (tiger)

console . log (rest)

// OBJECT SPREAD OPERATOR

// different use cases of the spread operator
// (1) adding elements of an existing array to a new array

// EXAMPLE 1
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
function  programmingLanguages ( ){
console.log(arguments)
}

const langs  =  [ 'java' , 'python' , 'c#' , 'c++' ]

programmingLanguages ( ...langs,'javascript','ruby','swift' ) 



// EXAMPLE 3
function  fruits (  ) { 
    console.log(arguments)
}
 let  deliciousFruits  =   [ 'kiwi' , 'strawberries' , 'apples' ]

 fruits ( ... deliciousFruits,'grapes','mangoes');


//EXAMPLE 4
let buttons  =  function  computerButtons ( ...items){
console.log (items)
}

let mostUsedButtons = ['capslock','pageUp', 'pageDown']

buttons(...mostUsedButtons, 'esc','enter')
 

