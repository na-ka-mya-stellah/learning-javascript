const promise = new promise((resolve,reject)=>{
  if(true){
     resolve("she did it");
  
  }
 else{
     reject("Error ! she didnt do it");   
 }
  
})

promise.then(result=>console.log(result));