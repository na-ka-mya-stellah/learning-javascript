
// example 1
const object ={
    name:'kellen',
    age: 62,
    gender :'female',
    isMarried :false,
    attackingPower : 145,
    scream :function(){
        console.log('wohooo');
    }
}
console.log(object.age);
console.log (object.attackingPower)
console.log(object.isMarried)
console.log(object.gender)
console.log(object.name)
object.scream();

// how first do hash tables work

// (1) INSERTION (O(1))
console.log (object.spell = 'abcdefghijkl')
console.log(object.energy='watts')
console.log(object)

// (2)LOOK UPS
// Direct lookup by key (fast, O(1))
console.log('Name:', object.name);
console.log('Energy:', object.energy);
console.log('Spell:', object.spell);

// Lookup using bracket notation (useful for dynamic keys)
const key = 'attackingPower';
console.log(`${key}:`, object[key]);

// You can also check if a key exists
console.log('Has "age"?', 'age' in object);
console.log('Has "defense"?', 'defense' in object);

// (3)ACCESS (O(1))
// Access means retrieving the value of an existing key directly.

console.log('--- ACCESS ---');

// Accessing existing properties directly
console.log('Access name:', object.name);
console.log('Access age:', object.age);
console.log('Access attackingPower:', object.attackingPower);

// Access using a variable (bracket notation)
const accessKey = 'energy';
console.log(`Access ${accessKey}:`, object[accessKey]);

// example 2
const member = {

    firstName : 'prince',

    secondName : 'david',

    college : 'harvard university',

    course : 'computer science',
    
    year : 2024,

    excelled : true

}

console.log (member . firstName)

console.log (member . secondName)

console.log (member . college)

console.log (member . course)

console.log (member . year)

console.log (member . excelled)

console.log ( member . grade = 'senior')

console.log (member . country = 'canada')

console.log  (member);


console.log ('has college?', 'college' in member);

console.log ('has grade?', ' grade' in member);

console.log ('has excelled?', ' excelled' in member);


// IMPLEMENTING A HASH TABLE

// you create a class hashTable a blue print for creating objects
class HashTable {

    // The constructor method runs automatically when a new object is created
    constructor(size){
        this.data = new array (size);
    }

    // we defined a method called "hash" a private function for creating hash values

    _hash(key){


        // we initialized a variable "hash" with zero
     let hash = 0;

    //  loop through each character of string "key"
     for (let i =0; i<key.length; i++) {

         // Add the character’s Unicode value (from charCodeAt) times its index "i"
            // Then take the remainder when divided by this.data.length (to keep the hash within bounds)
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
     }


     // Return the final hash value (a number representing an index)
     return hash;

    }
}

// Create a new instance (object) of HashTable with a size of 50
const myHashTable = new HashTable(50);

// Call the "set" method to store a key-value pair ('grapes', 10000)
myHashTable.set ('grapes',10000)

// Call the "get" method to retrieve the value for the key 'grapes'
myHashTable.get ('grapes')
