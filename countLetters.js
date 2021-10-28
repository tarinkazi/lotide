const  assertEqual = function(actual, expected) {
  if (actual === expected) {
    //let str = "✅Assertion Passed: " + actual + "===" + expected;
    let str = `✅Assertion Passed:, ${actual}, === , ${expected}`;
     
    return str;
  } else {
    let str = `🛑🛑Assertion Failed:, ${actual}, === , ${expected}`;
    return str;
  }


};

const countLetters = function(strings) {
  let count = 0;
  let str = strings.split(" ").join("");
  let str1 = "";
  //console.log(str);
  let obj = {};
  for(let val of str){
    
    if(obj[val]) {
      obj[val]++;
    } else {
      obj[val] = 1;
    }
    //console.log(val + ":" +count);
  }
  //console.log(obj);
  return obj;
}
countLetters('LHL');
console.log(countLetters("lighthouse in the house"));