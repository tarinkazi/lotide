const tail = require('../tail');
const assertEqual = require('../assertEqual');

const result = tail(["Hello", "Lighthouse", "Labs"]);
//console.log(result);
assertEqual(result, ['Lighthouse', 'Labs']);
const words = ["Yo Yo", "Lighthouse", "Labs","la la"];
const res1 = tail(words);
assertEqual(res1.length, 3);