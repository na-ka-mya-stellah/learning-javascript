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
 

// The REFERENCE Type
// example 1
const object1= {value : 10}
const object2 = object1
const object3 = {value : 16}

console.log(object1 === object2)
console.log(object1===object3)
console.log (object2 === object3)

// The CONTEXT
// Example 1

const object4 = {
    a : function (){
        console.log(this)
    }
}
object4.a()

// The INSTANTIATION
// example 1

class Player{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    introduce(){
        console.log(`my name is ${this.name} and i am ${this.age} years old`)
    }
}

class wizard extends Player{
    constructor (name,age){
        super (name,age)
    }
    play(){
        console.log (`i am a ${this.name} and i am a ${this.age} years old wizard`)
    }
}

const Player1 = new Player ('john',25)
const wizard1 = new wizard ('nightmare',180)

Player1.introduce()
wizard1.play()


// The OBJECT.VALUES() AND OBJECT.ENTRIES() AND OBJECT.KEYS()
// Example 1

const obj = {
    username  : 'sammy',
    password : 'damn',
    age : 20,
    email : 'sammy@gmail.com'
}

Object.values(obj).forEach(function(value){
    console.log (value)
})

Object.entries(obj).forEach (function(entry){
    console.log (entry)
})

Object.keys(obj).forEach(function(key){
    console.log(key)
})