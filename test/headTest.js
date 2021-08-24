const assertEqual = require("../assertEqual");
const head = require("../head");


// testing code
assertEqual(head([5,6,7]), 9); // it should be false 
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello1"); // it should  be false
assertEqual(head([]), undefined); // it should be true
assertEqual(head(["a"]), "b"); // is should be fales 

