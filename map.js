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
        //console.log(arr2[])
    }
  }
  if (flag === 1) {
    return true;
  }
}


const words = ["ground", "control", "to", "major", "tom"];

// const results1 = words.map(word => word[0]);
// console.log(results1);




const map = function(array, callback) {
  const result = [];
  for(let item of array){
    result.push(callback(item));
  console.log("array before:", item);
  //console.log("callBack:", callback(item));
  //console.log("---");
  }
  return result;
}

//const results1 = map(words, word => word[0]);
//console.log(results1);


assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);

//assertArraysEqual(eqArrays(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]));