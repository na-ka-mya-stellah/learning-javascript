
// the async word is used to declare a function

// the await keyword(pause the function until i have something for you🤔)

// the await keyword can be used infront of any function that returns a promise

// asynchronous functions can be written synchronously




// ASYNC FUNCTIONS WITH A WEB API

//  EXAMPLE 1
 async function fetchTodos(){

  const response =await fetch('https://jsonplaceholder.typicode.com/todos/1')

   const data = await response.json();

   console.log (data);
 }

  fetchTodos()

  // EXAMPLE 2
async function fetchUsers(){
  
  const response = await fetch ('https://jsonplaceholder.typicode.com/users') 

  const data = await response . json()

  console.log (data)

}

fetchUsers()

// EXAMPLE 3
async function fetchPosts (){

  const response = ('https://jsonplaceholder.typicode.com/posts');

  const data = await response . json

    console . log (data)
  
}

fetchPosts()

// EXAMPLE 4
async function fetchComments(){

  const response = await fetch ('https://jsonplaceholder.typicode.com/posts/1/comments')

  const data = await response.json()

  console.log(data)

}
fetchComments()

// EXAMPLE 5

async function fetchPhotos(){

  const response = await fetch ('https://jsonplaceholder.typicode.com/photos')

  const data = await response.json

  console.log(data)
}

fetchPhotos()

// EXAMPLE 6
const urls=[
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/photos',
  'https://jsonplaceholder.typicode.com/comments',
]




// ASYNC FUNCTIONS WITHOUT A WEB API

// 1 function declarations
function walkDog(){
  return new Promise(resolve=>{
    setTimeout(()=>{resolve('you walked the dog🐕');},2000);
  });
}

  function cleanHouse(){
    return new Promise(resolve=>{
      setTimeout(()=>{resolve('you really cleaned the house🏘️');},3000)})
  }

  function cleanKitchen(){
    return new Promise(resolve =>{
      setTimeout(()=>{resolve('its super claen and i desire to cook now👩‍🍳');},4000)
    })
  }
 
  // 2 making use of async await
async function doChores(){

  const walkDogResult = await walkDog();
  console . log(walkDogResult)

  const cleanHouseResult = await cleanHouse();
  console . log(cleanHouseResult)

  const cleanKitchenResult = await cleanKitchen();
  console . log(cleanKitchenResult)
}

doChores()

// EXAMPLE 2

function playVolleyball(){
return new Promise (resolve=>{
  setTimeout(()=>{resolve('The best game ever🏐');},1000)
})
}

function playFootball(){
  return new Promise (resolve => {
    setTimeout(()=>{resolve('legs are always broken😁');},2000)
  })
}

function playbasketBall(){
  return new Promise(resolve=>{
    setTimeout(()=>{resolve('The one i desire to play😋');},3000)
  })
}

async function playGames(){
  const play1 = await playVolleyball();
  console.log(play1)

  const play2 = await playFootball();
  console.log(play2)

  const play3 = await playbasketBall();
  console.log(play3)

}

playGames()
