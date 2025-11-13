const members=["sharif","kuky","jonathan"]
console.log(members)

// ARRAY METHODS
// (1) THE PUSH METHOD
// for adding an element onto the existing array


// example 1
const fruits = ['apple','grapes','kiwi','mango']

fruits.push('banana')

console.log(fruits)

// (2)THE  POP METHOD
// for removing the last item from the array

// example 2
const fruits2 = ['apple','grapes','kiwi','mango']

fruits2.pop('mango');

fruits2.pop('kiwi');

console.log(fruits2)

// (3)THE UNSHIFT METHOD
// for adding an item at the beginning of an array

// example1

const fruits3 = ['apple','grapes','kiwi','mango']

fruits3.pop('mango');

fruits3.pop('kiwi');

fruits3.unshift('pormegranate')

console.log(fruits3)

// (4)THE SPLICE METHOD
// for adding an item in the middle of the array

// example 1
const fruits4 = ['apple','grapes','kiwi','mango']

fruits4.pop('mango');

fruits4.pop('kiwi');

fruits4.unshift('pormegranate')

fruits4.splice(1,'grapes','banana')

console.log(fruits4)

// example 2
let games = ['volleyball','basketball','netball','rugby']

games.push ('tennis');

games.pop();

games.unshift('golf')

games.splice (1,'volleyball','skate boarding')

console.log(games)

// example 3


 // DIFFERENT TYPES OF ARRAYS
// (1)STATIC ARRAYS
 // These are fixed in size

//(2)DYNAMIC ARRAYS
// These allow us to copy and rebuild an array at a new location with more memmory

 // Exercising dynamic arrays step by step

// example 1

 // you declare a variable vegetables and you assign it an array
     var vegetables = ['lettuce','broccoli','spinach','cabbage'] 

    //  you use the array method push to add an item at the end of the array.
    // underneath the hood the indexes are going to be automatically  shifted due to dynamic arrays impact so that cucumber fits in the array with its own index
     vegetables.push('cucumber')
     console.log(vegetables)
     
     

    //  MERGEING ARRAYS
   function mergeSortedArrays(arr1, arr2) {
  // Create a new array to hold the merged, sorted result
  const merged = [];

  // Pointers to track current positions in arr1 and arr2
  let i = 0; // index for arr1
  let j = 0; // index for arr2

  // Compare elements from both arrays while both have items left
  while (i < arr1.length && j < arr2.length) {
    // If current element in arr1 is smaller or equal, take it
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]); // add arr1's element to result
      i++; // move to the next element in arr1
    } else {
      // Otherwise, take the current element from arr2
      merged.push(arr2[j]); // add arr2's element to result
      j++; // move to the next element in arr2
    }
  }

  // If any elements remain in arr1, append them all
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  // If any elements remain in arr2, append them all
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  // Return the fully merged and sorted array
  return merged;
}

// Example usage: merges two sorted arrays into one sorted array
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));


// example 3
const array1 =[1,2,3] 
const array2 = [4,5,6]
const array3 = [7,8,9]

const merged = [...array1,...array2,...array3]
console.log(merged)


// example 4

const fruitsArray1 = ['apple','orange','mango']
const fruitsArray2 = ['banana','kiwi','grapes']

const sortedFruits = [...fruitsArray1,...fruitsArray2]
console.log(sortedFruits)

// example 5
const gamesPlayed = ['volleyball','basketball','cricket']
const gamesDisliked = ['rugby','snow boarding']

const allGames = gamesPlayed.concat(gamesDisliked)
console.log(allGames)

// example 6

function animals (domesticAnimals,wildAnimals){
    const allAnimalsAllTogether = [] 
    let x= 0;
    let y = 0;

    while (x < domesticAnimals.length){
        allAnimalsAllTogether.push(domesticAnimals[x])
        x++
    }
    while (y < wildAnimals.length){
        allAnimalsAllTogether.push(wildAnimals[y])
        y++
    }
    return allAnimalsAllTogether;
}
console.log(animals(['cow','goat','horse',],['lion','tiger','leopard']))


// example 7
function diet (vegetables,fresh){
    const balancedDiet = []
    let n = 0;
    let t = 0;

    while(n < vegetables.length){
        balancedDiet.push(vegetables[n])
        n++
    }

    while (t < fresh.length){
        balancedDiet.push(fresh[t])
        t++
    }
    return balancedDiet;
}
console.log(diet(['spinach','broccoli','cabbage'],['beef','chicken','mutton']))


// example 8
function subjects(science,arts){
    allSubjects = []
    let a = 0;
    let b = 0;

    while(a<science.length){
        allSubjects.push(science[a])
        a++
    }

    while(b<arts.length){
        allSubjects.push(arts[b])
        b++
    }
    return allSubjects;
}
console.log(subjects(['biolgy','chemistry','physics'],['geography','history','english']))
