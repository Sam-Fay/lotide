const assert = require('chai').assert;
const head   = require('../head');

describe("First test :)", () => {
    it("returns '5' for ['5']", () => {
        assert.strictEqual(head(['5']), '10'); 
      });
});

describe("Second test :)", () => {
    it("returns '10' for ['10']", () => {
        assert.strictEqual(head(['10']), '10'); 
      });
});





/*const assertEqual = require("../assertEqual");
const head = require("../head");


// testing code
assertEqual(head([5,6,7]), 9); // it should be false 
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello1"); // it should  be false
assertEqual(head([]), undefined); // it should be true
assertEqual(head(["a"]), "b"); // is should be fales 
*/
