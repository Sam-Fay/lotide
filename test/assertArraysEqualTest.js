const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");


// testing code

const assertArraysEqual = function(firstArray, secondArray) {
    return eqArrays(firstArray, secondArray);
};

console.log(assertArraysEqual([1, 2, 5], [1, 2, 10]));
console.log(assertArraysEqual([1, 2, 7], [3, 2, 8])); 