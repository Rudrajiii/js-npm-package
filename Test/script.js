// File: Test/script.js
const { $set , set_internals , map_internals , filter_internals , reduce_internals} = require('../package/index');

// Create an instance of the class
const mySet = new $set();
console.log(set_internals())
mySet.add(1);
mySet.add(2);
console.log(mySet);

const numbers = [1,2,3]
const r = numbers.$filter( n => n > 2);
console.log(r);

const arrays = numbers.$map(num => [num, num * 2]);
console.log(typeof arrays , arrays); // Expected output: [[1, 2], [2, 4], [3, 6]]
const arrays2 = numbers.map(num => [num, num * 2]);
console.log(typeof arrays2 , arrays2); // Expected output: [[1, 2], [2, 4], [3, 6]]

console.log(map_internals());
console.log(filter_internals());
console.log(reduce_internals());
