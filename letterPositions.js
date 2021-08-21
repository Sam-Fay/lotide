const eqArrays = function (arrOne, arrTwo) {
    let ans = arrOne.length === arrTwo.length &&
      arrOne.every(function (element, index) {
        return element === arrTwo[index];
      })
    return ans;
  }
  
  const assertArrayEqual = function (arrOne, arrTwo) {
    if (eqArrays(arrOne, arrTwo) === true) {
      return `✅✅✅ Assertion Passed: ${arrOne} === ${arrTwo}`
    } else {
      return `🛑🛑🛑 Assertion Failes: ${arrOne} !== ${arrTwo}`
    }
  }
  
  
  
  const letterPositions = function (sentence) {
    const results = {};
    for (let i = 0; i < sentence.length; i++) {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i)
      } else {
        results[sentence[i]] = [i]
      }
      delete results[' ']
    }
    return results;
  };
  
  console.log(letterPositions('hello there')) 