//   +===================================================+
//   |                 WRITE YOUR CODE HERE              |
//   | Description:                                      |
//   | - This function finds the maximum and minimum     |
//   |   values in an array (`myArray`).                 |
//   |                                                   |
//   | Output:                                           |
//   | - The function returns an array with two elements.|
//   |   The first is the maximum and the second is the  |
//   |   minimum value in the array.                     |
//   |                                                   |
//   | Tips:                                             |
//   | - It uses a for-of loop to go through each number.|
//   | - `maximum` and `minimum` store the highest and   |
//   |   lowest values found.                            |
//   +===================================================+

function findMaxMin(array){
    let minimum = array[0];
    let maximum = array[0];

    for (let num of array){
        if (num > maximum){
            maximum = num;
        }
        else if (num < minimum){
            minimum = num;
        }
    }return [maximum, minimum];

}


// ------------------------------------
//  Test array with positive numbers
// ------------------------------------
let arrPos = [1, 2, 3, 4, 5];
console.log("Test array with positive numbers:");
console.log("Array:", arrPos);  // Should print: [1, 2, 3, 4, 5]
let resultPos = findMaxMin(arrPos);
console.log("Max and Min:", resultPos);  // Should print: [5, 1]
console.log("---------------");

// ------------------------------------
//  Test array with negative numbers
// ------------------------------------
let arrNeg = [-1, -2, -3, -4];
console.log("Test array with negative numbers:");
console.log("Array:", arrNeg);  // Should print: [-1, -2, -3, -4]
let resultNeg = findMaxMin(arrNeg);
console.log("Max and Min:", resultNeg);  // Should print: [-1, -4]
console.log("---------------");

// ------------------------------------
//  Test array with both positive and negative numbers
// ------------------------------------
let arrMixed = [-1, 0, 1];
console.log("Test array with both positive and negative numbers:");
console.log("Array:", arrMixed);  // Should print: [-1, 0, 1]
let resultMixed = findMaxMin(arrMixed);
console.log("Max and Min:", resultMixed);  // Should print: [1, -1]
console.log("---------------");

// ------------------------------------
//  Test array with all same numbers
// ------------------------------------
let arrSame = [2, 2, 2, 2];
console.log("Test array with all same numbers:");
console.log("Array:", arrSame);  // Should print: [2, 2, 2, 2]
let resultSame = findMaxMin(arrSame);
console.log("Max and Min:", resultSame);  // Should print: [2, 2]
console.log("---------------");

// ------------------------------------
//  Test array with one number
// ------------------------------------
let arrOne = [7];
console.log("Test array with one number:");
console.log("Array:", arrOne);  // Should print: [7]
let resultOne = findMaxMin(arrOne);
console.log("Max and Min:", resultOne);  // Should print: [7, 7]
console.log("---------------");

// ------------------------------------
//  Test array with decimals
// ------------------------------------
let arrDec = [1.5, 2.5, 0.5];
console.log("Test array with decimals:");
console.log("Array:", arrDec);  // Should print: [1.5, 2.5, 0.5]
let resultDec = findMaxMin(arrDec);
console.log("Max and Min:", resultDec);  // Should print: [2.5, 0.5]
console.log("---------------");

// ------------------------------------
//  Test array with zeros
// ------------------------------------
let arrZero = [0, 0, 0];
console.log("Test array with zeros:");
console.log("Array:", arrZero);  // Should print: [0, 0, 0]
let resultZero = findMaxMin(arrZero);
console.log("Max and Min:", resultZero);  // Should print: [0, 0]
console.log("---------------");


