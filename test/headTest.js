const assertEqual = require("../assertEqual");
const head = require("../head");

// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual([5, 6, 7], 5);
assertEqual(["Hello", "Lighthouse", "Labs", "Hello"], "Hello");