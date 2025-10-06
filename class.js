class Fight{
  constructor(weapon,name,shield){
    this.weapon = weapon;
    this.name = name;
    this.shield = shield;
  }
}
const fighter = new Fight('stones','dog','hammer')
console.log(fighter)

class Dogs{
  constructor(name,breed,sound){
    this.name = name;
    this.breed =  breed;
    this.sound = sound;
  }
}

let dog1 = new Dogs ('max','exotic','woof')
console.log(dog1.breed);

 let dog2 = new Dogs('tesla','local','bark') 
console. log(dog2);