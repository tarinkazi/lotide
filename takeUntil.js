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

const takeUntil = function(array1, callback){
  const result = [];
  for(let item of array1){
     // console.log(callback(item));
      //console.log(item);
    if(callback(item)){
      return result;
     } else {
      
       result.push(item);
     }
    
  }
  //return result;
  
}

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
