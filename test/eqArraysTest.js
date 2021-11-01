const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]));// => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true);// => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false); // => false
assertEqual(assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true)); 
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)


//const name = 'Alice';
//.log(`Hello, ${name}!`); // logs
