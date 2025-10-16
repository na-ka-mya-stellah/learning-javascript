
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

//   // EXAMPLE 2
async function fetchUsers(){
  
  const response = await fetch ('https://jsonplaceholder.typicode.com/users') 

  const data = await response . json()

  console.log (data)

}

fetchUsers()

// // EXAMPLE 3
async function fetchPosts (){

  const response = ('https://jsonplaceholder.typicode.com/posts');

  const data = await response . json

    console . log (data)
  
}

fetchPosts()

// // EXAMPLE 4
async function fetchComments(){

  const response = await fetch ('https://jsonplaceholder.typicode.com/posts/1/comments')

  const data = await response.json()

  console.log(data)

}
fetchComments()

// // EXAMPLE 5

async function fetchPhotos(){

  const response = await fetch ('https://jsonplaceholder.typicode.com/photos')

  const data = await response.json

  console.log(data)
}

fetchPhotos()


// // ASYNC FUNCTIONS WITHOUT A WEB API

// // 1 function declarations
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
 
//   // 2 making use of async await
async function doChores(){

  const walkDogResult = await walkDog();
  console . log(walkDogResult)

  const cleanHouseResult = await cleanHouse();
  console . log(cleanHouseResult)

  const cleanKitchenResult = await cleanKitchen();
  console . log(cleanKitchenResult)
}

doChores()

// // EXAMPLE 2

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

// EXAMPLE 3
function mathematics(){
  return new Promise((resolve,reject)=>
    {resolve('this subject is only for geniuses')
  })
}

function chemistry(){
  return new Promise((resolve,reject)=>{
    resolve('maybe you can try out this subject')
  })
}

function Physics(){
  return new Promise((resolve,reject)=>{
  resolve('nothing much just confusion and space science they have never visited')})
}


async function chooseSubjectsYouCanDo(){
  const mathematicsSubject = await mathematics();
  console.log(mathematicsSubject)

  const chemistrySubject = await chemistry();
  console.log(chemistrySubject)

  const physicsSubject = await Physics();
  console.log(physicsSubject)
}

chooseSubjectsYouCanDo()


// EXAMPLE 4
function babies(){
  return new Promise((resolve,reject)=>{
    resolve('the best stage when theres is no sinning')
  })
}

function adoloscents(){
  return new Promise((resolve,reject)=>{
    resolve('ooops i dont want to get there because of temptations and disturbances😁')
  })
}

function elderly(){
  return new Promise((resolve,reject)=>{
    resolve('hmmm where you need help like never before')
  })
}

async function differentAges(){
  const babiesAge = await babies();
  console.log(babiesAge)

  const adoloscentsAge = await adoloscents();
  console.log(adoloscentsAge)

  const elderlyAge = await elderly();
  console . log(elderlyAge)
}

differentAges()


// EXAMPLE 5)
function arsenal(){
  return new Promise((resolve,reject)=>{
    resolve('THE GUNNERS for real')
  })
}

function manchestercity(){
  return new Promise((resolve,reject)=>{
    resolve('maybe they will try next time for a win')
  })
}

function liverpool(){
  return new Promise((resolve,reject)=>{
    resolve('now you we are so sorry coz your not even allowed to try again')
  })
}

async function premierLeagueTeams(){
  const arsenalTeam = await arsenal()
  console.log(arsenalTeam)

  const manchestercityTeam = await manchestercity()
  console.log(manchestercityTeam)

  const liverpoolTeam = await liverpool()
  console.log(liverpoolTeam)
}

premierLeagueTeams()

// EXAMPLE 6

function bagishu(){
  return new Promise((resolve,reject)=>{
    resolve('The toughest tribe ever where necessary😒')
  })
}

function ankole(){
  return new Promise((resolve,reject)=>{
    resolve('😁😁😁nothing much just cattle keeping')
  })
}

function ganda(){
  return new Promise ((resolve,reject)=>{
    if (true){
      setTimeout(()=>{
        resolve('hell noooo they betray themselves')},2000);
    }else{
      reject('nothing you can do anyway')
    }
  });
}

async function tribes(){
  const bagishuTribe = await bagishu();
  console.log(bagishuTribe)

  const ankoleTribe = await ankole();
  console.log(ankoleTribe)

  const gandaTribe = await ganda();
  console.log(gandaTribe)
}

tribes()