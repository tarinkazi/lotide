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

const head = function(arr){
  //console.log(arr[0]);
  return arr[0];
}

// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
//console.assert(str);
console.log(assertEqual(1, 1));

console.log(assertEqual(head([5,6,7]), 5));



//const name = 'Alice';
//.log(`Hello, ${name}!`); // logs