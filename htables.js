
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

// (3)ACCESS
// Access means retrieving the value of an existing key directly.

console.log('--- ACCESS ---');

// Accessing existing properties directly
console.log('Access name:', object.name);
console.log('Access age:', object.age);
console.log('Access attackingPower:', object.attackingPower);

// Access using a variable (bracket notation)
const accessKey = 'energy';
console.log(`Access ${accessKey}:`, object[accessKey]);


