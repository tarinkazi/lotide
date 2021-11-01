const assertEqual = require ('./assertEqual')

const tail = function(arr) {
  let arr1 = [];
  for (let i = 1; i < arr.length; i++) {
    arr1.push(arr[i]);
  }
  //console.log(arr1);
  return arr1;
};

module.exports = tail;


