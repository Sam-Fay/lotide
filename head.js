const assertEqual = require('./assertEqual');

// start //
const head = function(arr) {
  return arr[0];
}


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head(["a"]), "a"); 

module.exports = head;