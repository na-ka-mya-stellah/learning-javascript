// DEBUGGING
// Looking into code to see why its not not running or executing as expected
                //HOW TO DEBUG
                // THE DEBUGGER keyword
// 1.Read the code
// 2. console .log to see where the code is failing
// 3.


// example 1
// (1) Reading the code

const flattened = [[0,1],[2,3],[4,5]] . reduce ((a,b)=>{

    return a.concat(b)
 },[]);
console.log(flattened)


// 2. the DEBUGGER keyword
// Example 1
const flattened2 = [[0,1],[2,3],[4,5]].reduce ((a,b) => {
    debugger
    return a.concat(b)
})



