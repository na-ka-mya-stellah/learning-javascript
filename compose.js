
// COMPOSE IN JAVASCRIPT WITHOUT ANY LIBRARY
// example 1
const compose=(a,b)=>(data)=>a(b(data))

const multiplyBy3 =num =>num*3 

const makePositive = num => Math.abs(num)

const multiplyBy3AndMakePostive = compose(multiplyBy3,makePositive)

  console.log (multiplyBy3AndMakePostive(-50))

  // example 2
  const compose2 = (a,b) => (data) => b(a(data))
  
  const addTo10 = num => num + 10

  const multiplyBy2 = num => num * 2

  const addTo10AndMultiplyBy2 = compose2(addTo10,multiplyBy2)

  console.log(addTo10AndMultiplyBy2(10))

  // example 3
  const compose3 =(x,y) =>(data) => x(y(data))

  const subtract5 = num => num - 5

  const multiplyBy1 = num => num * 1

  const subtract5AndMultipyBy1 = compose3(subtract5,multiplyBy1)

  console.log(subtract5AndMultipyBy1(10))

  // example 4
  const compose4 = (m,n) => (data) => m(n(data))

  const divideBy2 = num => num / 2

  const add1 = num => num + 2

  const divideBy2AndAdd1 = compose4(divideBy2 ,add1)

console.log (divideBy2AndAdd1(24))

// example 5
const compose5 = (u,v) => (data) => v(u(data))

const multiplyBy5 = num => num*5

const divideBy5 = num => num / 5

const multiplyBy5AndDivideBy5 = compose5(multiplyBy5, divideBy5)

console.log(multiplyBy5AndDivideBy5(10))

// example 6
const compose6 = (m,n) =>(data) => m(n(data))

const add6 = num => num + 6

const subtract6 = num => num - 6

const add6AndSubtract6 = compose6(add6,subtract6)

console.log(add6AndSubtract6(30))


// example 7
const compose7 = (s,t) => (data) =>t(s(data))

const add2 = num => num + 2

const makeModulus = num => num % 100

const add2AndMakeModulus = compose7(add2 , makeModulus)

console.log(add2AndMakeModulus(38))


// PIPE IN JAVASCRIPT
//  example 1

const PIPE =  (w,k) => (data) => k(w(data))

const add3 = num => num + 3

const subtract3 = num => num - 3

const add3AndSubtract3 = PIPE(add3,subtract3)

console.log(add3AndSubtract3(3))