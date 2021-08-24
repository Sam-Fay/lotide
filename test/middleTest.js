const assertArraysEqual = require("../assertEqual");
const middle = require("../middle");
const eqArrays = require("../eqArrays");

assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5]), true);
middle([1, 2, 3, 4, 5]) === [3];
// middle([1, 2, 3, 4, 5, 6]) === [3, 4];
// middle([1, 2, 3]) === [2];
// middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]) === [8, 9];