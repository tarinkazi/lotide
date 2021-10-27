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


const eqArrays = function(arr1, arr2) {
  let flag = 0;
  for(let i = 0;i < arr1.length ;i++){
    if ((arr1[i]) !== (arr2[i])){
      return false;
        
    } else if (arr1[i] === arr2[i]) {
        flag = 1;
        
    }
  }
  if (flag === 1) {
    return true;
  }
}
 
const middle = function(arr) {
  let middleArr = [];
  let sizeArray = arr.length;
  let index;
  let arr3 = [];
  if (sizeArray <= 2){
    return middleArr;
   // console.log(middleArr);

  } else if (sizeArray % 2 === 0){
      index = Math.floor(sizeArray / 2);
       arr3.push(arr[index - 1]);
       arr3.push(arr[index]);
      //console.log(arr[index - 1], arr[index])
      return arr3;

  } else {
      index = Math.floor(sizeArray / 2);
   // console.log(arr[index]) ;
    return arr[index];
  }
}

console.log(middle([1]));// => []
console.log(middle([1, 2]));// => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4]));// => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
//le.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1]));// => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));// => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
//console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true)); 