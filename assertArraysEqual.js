const assertArraysEqual = function(arr1, arr2) {
  let flag = 0;
  for(let i = 0;i < arr1.length ;i++){
    if ((arr1[i]) !== (arr2[i])){
      flag = 0;
        
    } else if (arr1[i] === arr2[i]) {
        flag = 1;
        
    }
  }
  if (flag === 1) {
    console.log(`✅Assertion Passed:, ${arr1}, ===  ${arr2}`);
  }
  else {
    console.log(`🛑🛑Assertion Failed:, ${arr1} ===  ${arr2}`);
  }
};


console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => true
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));// => false

console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));// => true
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // => false
