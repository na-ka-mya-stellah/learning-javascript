
// class 1
class Fight{
  constructor(weapon,name,shield){
    this.weapon = weapon;
    this.name = name;
    this.shield = shield;
  }
}
const fighter = new Fight('stones','dog','hammer')
console.log(fighter)


// class 2
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

// class 3
class Cars{
  constructor(name,model,color){
    this.name=name;
    this.nmodel=model;
    this.color=color;
  }
}
let car =new Cars('audi', 'toyota','black')
console.log(car.name);

// class 4
class houses{
  constructor(style,color,size){
    this.style= style;
    this.color= color;
    this.size= size
  }
}
// instantiation
var house = new houses('bunglow','orange',348)
console.log(house)

//class 5
class companies{
  constructor(name,dealings,ranking){
    this.name=name;
    this.dealings=dealings;
    this.ranking=ranking;
  }
}
let company1=new companies('sushi','cars',1)
console.log(company1)
let company2=new companies('toyota','lamborghins',6)
console.log(company2)