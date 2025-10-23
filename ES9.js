// (1)THE FINALLY KEYWORD
// example 1

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
    throw new error('ooopsie')
  console.log('1', array[0]);
  console.log('2', array[1]);
  console.log('3', array[2]);
})
.catch(err => console.error('ooopsie:'))
.finally(()=>console.log('nothing happened'))



// (2) FOR AWAIT OF
// it allows looping through the async await calls if you have multiple of them
const urls2 = [ 
  'https://jsonplaceholder.typicode.com/posts/1', 
  'https://jsonplaceholder.typicode.com/comments/2',
  'https://jsonplaceholder.typicode.com/albums/3'
];
const getData2 = async function(){
    const arrayOfPromises = urls2.map(url => fetch(url));
    for await(let request of arrayOfPromises){
        const data = await request.json();
        console.log(data)
    }
}
getData2()