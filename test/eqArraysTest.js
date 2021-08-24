
const assertEqual = require("../assertEqual");
const  eqArrays = require("../eqArrays");

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

assertEqual(eqArrays([1, 2, 6], [1, 2, 7]), false);

  module.export = eqArrays;