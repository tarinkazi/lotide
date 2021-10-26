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


console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));

const tail = function(arr) {
  let arr2 = [];
  for (let i = 1; i < arr.length; i++) {
    arr2[i - 1] = arr[i];
  }
  return arr2;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result, ["Lighthouse", "Labs"])); //
tail(result);
assertEqual(result.length, 3);
