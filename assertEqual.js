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

// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
//console.assert(str);
console.log(assertEqual(1, 1));


//const name = 'Alice';
//.log(`Hello, ${name}!`); // logs