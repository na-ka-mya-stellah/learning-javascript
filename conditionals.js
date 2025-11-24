
// CONDITIONALS
// if
// else
// else if


// example 1

var nameGiven = 'emmy'
if(nameGiven==='emmy'){
    console.log ('hi emmy')
}else{
    console.log('hmmm who is this')
};

// example 2
var job = 'programmer';
if(job !== 'programmer'){
    console.log('your a genius')
}else if(job === 'programmer'){
    console.log('boom still there to do it')
}

// example 3

var fruit = 'kiwi';
if (fruit !=='kiwi'){
    console.log('it is delicious')
}else{
    console.log('ahhhhhhh  naah')
}

// example 4
const number = 14;
if (number === 10){
    console.log('your right always')
}else if(number!==10){
    console.log('your wrong always')
}

// The TERNARY operator
// condition ? expression1 : expression2;

// It says 🤔 if condition is true log expression1 and if it is false log expression2

// example 1
function isUserValid(bool){
    return bool;
}

var answer = isUserValid(true)? "you should enter username" : "access denied";
console.log(answer);

// example 2
const number2 = 14;

number === 10
  ? console.log("your right")
  : console.log("your wrong");

//   example 3
const firstFruit = 'kiwi'
firstFruit === 'kiwi' ? console.log('its delicious') : console.log('ahh naah never')

// example 4
const maturePersonAge = 18 
 maturePersonAge <= 18 ? console.log ('mature enough to vote') : console.log ('too young to vote')

//  example 5
let numberOfFamilyMembers = 5;
numberOfFamilyMembers > 5 ? console.log ("your few") : console.log('your fewer')

// example 5
let familyMembers = [
    'emmy',
    'kenny',
    'demmy',
    'penny',
]
familyMembers.length <= 4 ? console.log ('ohh yea') : console.log ('for sure')

// example 6
const person = {
    age : 18,
    givenName : 'emmy',
    education : 'dropout',
    background : 'poor and miserable',
    password : 2424
}
person.givenName !== 'emmy' ? console.log ('who a you ?') : console.log ('your not noticed')
person.age === 18 ? console.log ('your legit and old 👍') : console.log ('your still a babe')
person.password !==2424 ? console.log ('enter correct password') : console.log ('confirm your identity')

// example 7

    
const user = {
    age : 20,
    nationality: 'american',
    religion : 'christian',
    maritalStatus : 'single',
    gender : 'male'
}

const userInput = {
    age : Number(prompt('enter your age')),
    nationality: prompt('enter your nationality'),
    religion : prompt('enter your religion'),
    maritalStatus : prompt('enter your marital status'),
    gender : prompt ('enter your gender')
};

(userInput.age === user.age &&
     userInput.nationality === user.nationality &&
      userInput.religion ===user.religion &&
       userInput.maritalStatus === user.maritalStatus
    )
    ?

    console.log ('access granted') : console.log ('access denied')