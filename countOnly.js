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

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  //var count = 0;
  const obj = {};

  for(let item of allItems){
    if(itemsToCount[item] === true) {
      if(obj[item]) {
        obj[item]++;
      } else {
        obj[item] = 1;
      }
    }
  }
  
  //for(let list of allItems){
  //   for(var itemsToCounts in itemsToCount){
  //     var num = itemsToCount[itemsToCounts];
  //     //console.log("name" +itemsToCounts+ "  ttrue :"+ num);
  //     if(num !== "true") {
  //       //console.log(num);
  //       for(let list of allItems){
  //         if (list === itemsToCounts){
  //           //console.log(count++);
  //           //count++;
  //           obj.push(` ${itemsToCounts} ":" ${count++}`);

  //         }
          
  //       }
  //       //obj.push(` ${itemsToCounts} ":" ${count}`);
  //       count = 0;

  //     }
      
      
  //   //}

  // }
  return obj;
  
}





const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
//console.log(result1);

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));