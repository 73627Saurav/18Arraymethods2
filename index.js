let num = [1, 2, 3, 4, 5, 6, 7, 8, 9] 
console.log(num) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(num.length) // 9
delete num[0]
console.log(num) // [ <1 empty item>, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(num.length) // 9

let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]

let newArray = num.concat(num_more, num_even_more)
console.log(newArray) 
/* 
[
  <1 empty item>, 2,   3,
  4,              5,   6,
  7,              8,   9,
  11,             12,  13,
  14,             15,  16,
  17,             18,  19,
  211,            212, 213,
  214,            415, 416,
  417,            418, 419
] */
console.log(num, num_more)
/* 
[ <1 empty item>, 2, 3, 4, 5, 6, 7, 8, 9 ] [ 11, 12, 13, 14, 15, 16, 17, 18, 19 ] */

// sort method
let num1 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
num1.sort() // Sorts the elements of an array alphbetically
console.log(num1)
/* 
[
   14, 22, 229, 3, 5,
  551,  6,   7, 8
] */

let compare = (a, b)=>{
  return b - a
}

let num2 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
num2.sort(compare)
console.log(num2)
/* 
[
  551, 229, 22, 14, 8,
    7,   6,  5,  3
] */
num2.reverse() // Reverses the order of the elements in an array.
console.log(num2)
/* 
[
   3,  5,   6,   7, 8,
  14, 22, 229, 551
] */

// Splice and Slice
let num3 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
let spliceArray = num3.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
// splice(start, deleteCount, item1, item2, ..., itemN): Adds and/or removes elements from an array
console.log(num3)
/* 
[
   551,   22, 1021, 1022,
  1023, 1024, 1025,    7,
     8,  229
] */
console.log(spliceArray) // [ 3, 14, 5, 6 ]

// splice method will modify source array

let num4 = [569, 45, 6, 16, 96, 56, 48, 46, 464]
let sliceArray = num4.slice(3, 7)
// slice(start, end): Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
console.log(num4)
/* 
[
  569, 45,  6,  16, 96,
   56, 48, 46, 464
] */
console.log(sliceArray)
// [ 16, 96, 56, 48 ]
console.log(num4)
/* 
[
  569, 45,  6,  16, 96,
   56, 48, 46, 464
] */

// slice method will not modify source array