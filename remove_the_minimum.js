// PSEUDOCODE
// .filter() will return a new copy of the array, but using it with Math.min() would remove all copies of the smallest number, where I only want to remove a single smallest value.

// .slice() will return a copy of the array.

// could use .indexof() with .slice()

// search through the array, find the first instance of the smallest number, use the index of that number, filter out everything that doesn't match that index.




// CODE
// REFACTORED CODE
function removeSmallest(numbers) {
  var arr = numbers;
  var ind = arr.indexOf(Math.min(...numbers));
  var ret = arr.filter((num, i) => i != ind);
  return ret; 
}


// ORIGINAL / FIRST PASS WORKING
// function removeSmallest(numbers) {
//   var arr = numbers;
//   var ind = arr.indexOf(Math.min(...numbers));
//   console.log("index is " + ind);  // correctly found 0, 3, 2

//   var ret = arr.filter(function (num, i, array){
//     console.log("num is " + num);
//     console.log("i is " + i);
//     console.log("ind is " + ind);
//     return i != ind;
//   });
//   console.log(ret); // [ 2, 3, 4, 5]
//   return ret; 
// }


// DRIVER CODE
removeSmallest([1,2,3,4,5])   // [2,3,4,5]
removeSmallest([5,3,2,1,4])   // [5,3,2,4]
removeSmallest([2,2,1,2,1])   // [2,2,2,1]
