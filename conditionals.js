
// CONDITIONALS
// (1)if
// (2)else
// (3)else if
// The TERNARY operator
// The SWITCH 

// (1) The IF statement
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

// (2)The TERNARY operator
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

    
// const user = {
//     age : 20,
//     nationality: 'american',
//     religion : 'christian',
//     maritalStatus : 'single',
//     gender : 'male'
// }

// const userInput = {
//     age : Number(prompt('enter your age')),
//     nationality: prompt('enter your nationality'),
//     religion : prompt('enter your religion'),
//     maritalStatus : prompt('enter your marital status'),
//     gender : prompt ('enter your gender')
// };

// (userInput.age === user.age &&
//      userInput.nationality === user.nationality &&
//       userInput.religion ===user.religion &&
//        userInput.maritalStatus === user.maritalStatus
//     )
//     ?

//     console.log ('access granted') : console.log ('access denied')

    // (3)The SWITCH
    // Example 1

    // you create a function moveCommand that takes the direction parameter
    function moveCommand(direction){

        // you create a variable whatHappens and dont assign it anyhting for now since it will be assigned a value after the direction of the player is chosen
        var whatHappens;

        // The switch statement checks the value of direction

        switch(direction){

            // if the direction is forward, run code under this case
            case 'forward'
            :
            // you set a variable what happens to this message
                whatHappens = 'you encounter a monster';
                break;

                // stop checking other cases we found the match. stop here and exit the switch and return whatHappens for this case

                case 'back':
                    whatHappens = 'you arrived home';
                    break;


                    case 'right':
                        whatHappens = 'you found a river';
                        break;


                        case 'left':
                            whatHappens = 'you run into a troll';
                            break;


                            default:
                                whatHappens = 'please enter a valid direction';
                            

        }
        return whatHappens;
    }
    console.log(moveCommand('forward'));
    console.log(moveCommand('back'));
    console.log(moveCommand('right'));
    console.log(moveCommand('left'));
    console.log(moveCommand('damn'));

    // Example 2
    const continents = [
        'africa',
        'asia',
        'europe',
        'north america'
    ]
   function theContinents(continents){
    var result;
    switch(continents){

        case 'africa':
            result = 'beautiful nature';
            break;

        case 'asia':
            result= 'too much racism';
            break;

        case 'europe':
            result = 'hooo the worst part of racism';
            break;

        case 'north america':
            result = 'that one i dont know';
            break;

            default: 
             result = 'we are not sure of your location please'

    }

    return result;
   }
   console.log (theContinents('africa'));
   console.log (theContinents('asia'));
   console.log (theContinents('europe'));
   console.log (theContinents('north america'));