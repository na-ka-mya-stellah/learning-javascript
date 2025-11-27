

// THE MODULE PATTERN
// (1)USING THE IIFE(Immediately Invoked Function)


// EXAMPLE 1

// define a variable called fightmodule
// This variable will hold whatever the IIFE returns
var fightModule=(function(){

    // These are private variables inside the module
    // These variables cannot be accessed outside this function
var harry = 'potter'

var daniel = 'why'

// Define a private function called fight
// it takes two parameters character1 and character2

function fight (character1 , character2){

    // generate a random attack value for each character
    // "math.random" creates a random number between 0 and 1
    // multiplying by character1.length gives value based on name length
    // math.floor() rounds down to a whole number
    var attack1 = Math.floor(Math.random()*character1 . length);

    var attack2 = Math.floor(Math.random()*character2 . length);

// compare attack1 and attack2
// The one with the higher attack value wins
// Use a ternary operator(condition ? valueIfTrue:valueIfFalse)

    return attack1 > attack2

    // if attack1 is greater character1 wins
     ? `${character1} wins`

    //  otherwise character2 wins
     :`${character2}wins`;
     
}
// return an object that exposes only the parts of the module that we want to be public
// here we make the "fight" function publicly available
// everything else (harry,daniel) inside the function
return{
    fight:fight
};
// The parantheses '()' at the end immediately invoke the function 
// This function runs right away and assigns its return value to "fightModule"

})()

// This line calls the public "fight" function from our module
// we pass two arguments ("cathy","cate")
console.log(fightModule.fight('cathy','cate'));

// EXAMPLE 2

const myModule = (function(){
    let privateVar = 'some value'

    function beExposed(){
        console.log(privateVar)
    }

    return{
        beExposed:beExposed
    }

})()

myModule.beExposed();

// EXAMPLE 3
const timer = (function(){
    var count = 10;

    function decrement(){
        count --;

        console.log(count)

        if (count < 10 ) {

            clearInterval(timer)

            console.log('just finished counting down')

        }

    }

    setInterval(decrement,2000)

    return{

        decrement : decrement

    }

    }
)()

timer.decrement()

// EXAMPLE 4

const data = (function(){
    let privateData = "some data";

    let publicData = "you have the chance to get there and see whats happening"

    function getData(data1 , data2){
        console.log (publicData);
        console.log(privateData);
        console.log (data1);
        console.log(data2)

    }
    return {
        getData:getData
    }

    }
)()
data.getData('why not', 'yes you can')

// EXAMPLE 5
var pickingTheBiggerNumber = (function(){
    var number1 = 4;
    var number2 = 10;

    function whichNumberIsBigger(param1,param2){
        if(param1 > param2){
            console.log(param1)
        }else{
            console.log(param2)
        }

    }
    return{
        whichNumberIsBigger 
    }
})()

console.log(pickingTheBiggerNumber.whichNumberIsBigger(30,60));


// (2)THE ES6 MODULES