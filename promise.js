
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
  


