const eqArrays = function(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) {
      return false;
    }
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
    return true;
  };
  
  const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
      console.log(`✅ Assertion Passed: [${actual}] ===  [${expected}]`);
    } else {
      console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
    }
  };
  
  const takeUntil = function(array, callback) {
    let result = [];
    for (let item of array) {
      if (callback(item)) {
        break;
      }
      result.push(item);
    }
    return result;
  }
  
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const results1 = takeUntil(data1, x => x < 0);
  console.log(results1);
  
  
  console.log('---');
  
  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  const results2 = takeUntil(data2, x => x === ',');
  console.log(results2);
  