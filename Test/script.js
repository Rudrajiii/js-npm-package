// File: Test/script.js
const    { 
            $set ,
            set_internals ,
            map_internals ,
            filter_internals , 
            reduce_internals , 
            call_internals,
            apply_internals,
            from_internals,
            isArray_internals
            
    } = require('../package/index');

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
const total = numbers.$reduce((acc, curr) => acc + curr, 0);


function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "Alice" };

// Using the custom __call method
greet.$call(person, "Hello", "!");

function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

greet.$apply(person, ['Hello', '!']);

const array = [1, 2, 3, 4];

const max = Math.max.$apply(null, array);
console.log(max);  // Output: 4


console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));

console.log('custom from :',Array.$from([1, 2, 3], (x) => x + x));

console.log(total);
const h = 'p';
console.log(Array.$isArray(h))
const yujin = '[]';
console.log(Array.$isArray(yujin));

console.log(map_internals());
console.log(filter_internals());
console.log(reduce_internals());
console.log(call_internals());
console.log(apply_internals());
console.log(from_internals());
console.log(isArray_internals());
