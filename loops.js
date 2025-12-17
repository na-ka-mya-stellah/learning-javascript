
// LOOPS
// (1) The FOR loop
// Example 1
var toDoList = [
    'clean house',
    'brush teeth',
    'learn javascript',
    'get time for resting'
]

for (var i = 0 ; i < toDoList.length ; i++){
    console.log(toDoList[i] + '!')
}


// Example 2
var questions = [
    "why you",
    "what is that",
    "why that",
    "when was that"
]

questions.pop();

for (var i = 0; i < questions.length; i++){
   console.log(questions[i]);
};



// The WHILE LOOP
// example 1
let myNumber = 0;
while(myNumber < 5){
    console.log(myNumber);
    myNumber++;
}

// example 2

var array = 5
while(array > 0){
    console.log(array);
    array--;
}

// example 3
let number = 10
while (number < 20){
     console.log(number);
     number++; 
}

// The DO WHILE loop
// example 1
var counts = 5

do{
    
    console.log  ( counts )
    counts ++
} 
while( counts < 10)

// example 2
var repositories = 10

do{
    repositories --
    console. log (repositories)
}
while(repositories > 0)

// The FOR OF loop
// this works with iterables like arrays and strings
// example 1

const myArray = [1,2,3,4,5]

for (let item of myArray){
    console.log(item)
}

// The FOR IN loop
// this checks for the keys or properties of an object and ENUMERATING
// example 1
const myObject = {
    username: 'john',
    age: 20,
    country: 'canada',
    email: 'john@gmail.com'
}

for (let item in myObject){
    console.log(item)
}