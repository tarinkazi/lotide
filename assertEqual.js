const  assertEqual = function(actual, expected) {
  if (actual === expected) {
    //let str = "✅Assertion Passed: " + actual + "===" + expected;
    let str = `✅✅Assertion Passed: ${actual} ===  ${expected}`;
     
    //return str;
    console.log(str);
  } else {
    let str = `🛑🛑Assertion Failed: ${actual} ===  ${expected}`;
    //return str;
    console.log(str)
  }


};

// TEST CODE
// console.log(assertEqual("Lighthouse Labs", "Bootcamp"));

// console.log(assertEqual(1, 1));
// console.log(assertEqual(1, 2));
module.exports = assertEqual;