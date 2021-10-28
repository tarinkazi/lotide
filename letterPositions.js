const letterPositions = function(sentence) {
  const results = {};
  let str = sentence.split(" ").join("");
  // logic to update results here
  let i = 0;
  let arr = [];

  for(let value of sentence){
      //i++;
      if(value !== " "){
    if(results[value]){
      //i++;
      results[value].push(i);
      
    } else {
      results[value] = [i];
      //i++;
    }
    //i++;
  }
  i++;
}
  return results;
};

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

assertArraysEqual(letterPositions("hello").e, [1]);
//const letterPositions = function(string) {
  //let letterPos = {};

  //const str = string.toLowerCase();
  //for (let i = 0; i < string.length; i++) {
    //if (!str[i].match(/ /)) {
      //if (!letterPos[str[i]]) letterPos[str[i]] = [];
      //letterPos[str[i]].push(i);
    //}
  //}
  //return letterPos;
//};

//letterPositions('LHL');
console.log(letterPositions("lighthouse in the house"));


