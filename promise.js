
// promise 1
const promise=new Promise((resolve,reject)=>{
 if(true){
   resolve('success🎉')
 }else('error!')
 })
 promise.then(result=>console.log(result))


//  promise 2
 const promise2=new Promise((resolve,reject)=>{
  if(true){
    resolve('she did it 👌')
  }else{
    reject('sorry you did not do it🙇')
  }
 })
 promise2.then(result=>console.log(result))


//  A PROMISE THAT USES A WEB API
// example 1
const promise3=new Promise((resolve,reject)=>{
  if (true){
    setTimeout(()=>{resolve('your really a genius🤔');}, 7000)
  } else{
    reject('sorry i dont really know who your😁')
  }
})
promise3.then(result=>console.log(result))

// example 2
const promise4=new Promise((resolve,reject)=>{
  if (true){
    setTimeout(()=>{resolve('hahahaha😁thats really cool👍');},3000)
  }else{
    reject('sorry!no comment for you😁')
  }
})
promise4.then(result=>console.log(result))

// example 3
const promise6 = new Promise((resolve,reject)=>{
  if (true)
    setTimeout(()=>{resolve('your a genius🤔');},9000)
  else{
    reject('oops nooooo')
  }
})
promise6.then(result=>console.log(result))

// example 4
let promise7 = new Promise((resolve,reject)=>{
  if (true)
    setTimeout(()=>{resolve('ohh my goodness you really did it');},2000)
  else{
    reject('noo your nothing but next time better')
  }
})
  promise7.then(result=>console.log(result))



// CHAINING IN PROMISES

// example 1
const promise5 =new Promise((resolve,reject)=>{
  if (true){
    resolve('stuff worked')
  }else{
    reject('stuff broke')
  }
})
promise5
.then(result=>result + '!')
.then(result2=>{
  throw Error('oops')
  console.log(result2)
})
.catch(()=>console.log('oops'))


// example 2

let promise9 = new Promise((resolve,reject)=>{
  if (true)
    setTimeout(()=>{resolve ('your just great at that')},9000)
})
promise9 
.then(result =>result + '!')
.then (result2=>{
  console.log(result2 )
  return (result2 + '!')
})
.then(result3=>result3 + '!')
.then (result3=>{
  console.log(result3)
  return(result3 + '!')
})
.then (result4 =>result4 +'?')
.then (result4=>{
  console.log(result4)
  return (result4 + '?')
})


.then (result5 =>result5 + '##')
.then (result5 =>{
  console.log(result5)
})

// example3

const promise8 = new Promise((resolve,reject)=>{
  if (true){
    resolve('fantastic 👍')
  }else{
    reject('whattttttttttttt🤔')
  }
})
 promise.then(result =>console.log(result))
 

 const promise10 = new Promise((resolve,reject)=>{
  if (true){
    resolve('very cool')
  }else{
    reject('ahhh nothing')
  }
 })
 promise.then(result=>console.log(result))

// console logging multiple promises with the promise.all method. 

const urls = [ 
  'https://jsonplaceholder.typicode.com/posts/1', 
  'https://jsonplaceholder.typicode.com/comments/2',
  'https://jsonplaceholder.typicode.com/albums/3'
];

Promise.all(
  urls.map(url => {
    return fetch(url).then(res => res.json());
  })
)
.then(array => {
  console.log('1', array[0]);
  console.log('2', array[1]);
  console.log('3', array[2]);
})
.catch(err => console.error('Error fetching data:', err))