const middle = function(array) {
    evenArrayMiddleIndex1 = [];
    let evenArrayMiddleIndex2 = [];
    let newArray = [];
    if (array.length % 2 === 0) {
      evenArrayMiddleIndex1 = array.length / 2
      evenArrayMiddleIndex2 = (array.length / 2) - 1;
      newArray.push(array[evenArrayMiddleIndex1])
      newArray.push(array[evenArrayMiddleIndex2])
      
      return 'The middle elements of this array are: ' + newArray;
    }
    else {
      let oddArrayMiddleIndex = [];
      oddArrayMiddleIndex = (array.length + 1) / 2;
      newArray.push(array[oddArrayMiddleIndex])
      return 'The middle element of this array is: ' + oddArrayMiddleIndex;
    }
  };
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14]))

module.exports = middle