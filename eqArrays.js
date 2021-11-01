const assertEqual = require ('./assertEqual')


const eqArrays = function(arr1, arr2) {
  let flag = 0;
  for(let i = 0;i < arr1.length ;i++){
    if ((arr1[i]) !== (arr2[i])){
      return false;
        
    } else if (arr1[i] === arr2[i]) {
        flag = 1;
        //assertEqual(arr2[])
    }
  }
  if (flag === 1) {
    return true;
  }
}
module.exports = eqArrays;


