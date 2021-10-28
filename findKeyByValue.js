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

const findKeyByValue = function(obj, valToFind) {
  for(let objKey in obj) {
    if(obj[objKey] === valToFind){
      return objKey;
    }
  }
}
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
