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


const without = function(source, itemsToRemove) {
  
  let afterRemove = [];
 
  console.log(afterRemove);
  for(let i = 0;i < source.length ;i++){
    for(let j = 0;j < itemsToRemove.length;j++){
      if ((source[i]) !== (itemsToRemove[j])){
        afterRemove.push(source[i]);
          
      } 
    }
  }
  
  console.log(afterRemove);
};
//const without = function (arr1, arr2){


//};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

 
//console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
//console.log(eqArrays([1, 2, 3], [3, 2, 1]));// => false

//console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));// => true
//console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

//console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => true
//console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));// => false

//console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));// => true
//console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // => false
