const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === false) {
    return console.log(`🛑 🛑 🛑 Assertion Failed: ${[arr1]} !== ${[arr2]}`);
  }
  return console.log(`✅ ✅ ✅ Assertion Passed: ${[arr1]} === ${[arr2]}`);
};

module.exports = assertArraysEqual;

//assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true