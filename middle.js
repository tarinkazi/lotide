//const eqArrays = require('./eqArrays');
//const assertArraysEqual = require('../assertArraysEqual');

 
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
//console.log(middle([1]));
module.exports = middle;
