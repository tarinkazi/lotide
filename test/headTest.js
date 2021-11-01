const head = require('../head');
const assertEqual = require('../assertEqual')

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual("Lighthouse Labs", "Light Bootcamp"));
console.log(assertEqual("Lighthouse Labs", "Lighthouse Bootcamp"));

console.log(assertEqual(1, 1));

console.log(assertEqual(head([5,6,7]), 5));

