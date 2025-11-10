// the TRY CATCH BLOCK and the CATCH

// (1)TRY CATCH
// example 1
function count (){
    try {
        console.log('you can count')

        throw new Error('hmm you have made an oopsie')

    } catch(error){

        console.log('you cannot count at all🤣')

    } finally{

        console.log('all of wont achieve anything')

    }

}

count()



// example2
function usedButtons(){

    try{

        console.log('press the delete button')

    }catch(error){


        console.log ('which button did you press')

    }finally{
        console.log('why should you delete🤔')
    }

}

usedButtons()

// ASYNC ERROR HANDLING (the CATCH BLOCK)
// example 1 (for the case  of PROMISES)
let promise7 = new Promise((resolve,reject)=>{

  if (true)

    setTimeout(()=>{resolve('ohh my goodness you really did it');},2000)

  else{

    reject('noo your nothing but next time better')

  }

  throw new Error('oopsie it failed');

})

  promise7.then(result=>console.log(result))

 .catch(error=>console.log(error.message))
 
  .catch(error =>console.log(error.message))

//   example 2 

let promise8 = new Promise((resolve,reject)=>{

    if (true)

        setTimeout(()=>{resolve('hmmm you did it again');},3000)

    else{

        reject('boooooom')
    
    }
   throw new Error('oopsie again') 

})
.then(result=>console.log(result))

.catch(error=>console.log(error.name))
 
// for the case of ASYNC AWAIT
// In ASYNC AWAIT we use THE TRY CATCH BLOCK to handle errors

function humans(){
  return new Promise((resolve,reject)=>{
    resolve('the treasured creatures of God')
  })
}

function plants(){
  	return new Promise((resolve,reject)=>{
    resolve('they were created for medicinal reasons')
  })
}

function birds(){
  return new Promise((resolve,reject)=>{
    resolve('they are so special before men,God and every creature')
  })
}

async function creatures(){

    try{
        const humanscreature = await humans();

  console.log(humanscreature)

  const plantscreature = await plants();

  console.log(plantscreature)

  const birdscreature = await birds();

  console.log(birdscreature)

    }

    catch(error) {console.log(error.message)}

}
  
creatures()

