# Js-Internals Package

Welcome to the Custom JavaScript Functions package! This npm package provides custom implementations of built-in JavaScript functions, allowing users to understand how these functions work internally. This is especially useful for learning purposes and for those who want to see how common JavaScript functions can be replicated.

## Features

- **Custom Implementations**: Each function in this package is a custom implementation that mimics the behavior of the native JavaScript functions.
- **Educational**: The primary goal of this package is to provide an educational resource for developers to understand the inner workings of JavaScript functions.
- **Polyfill-style Functions**: These implementations can serve as polyfills, helping developers use similar functionality in environments where certain features may not be available.

## Available Functions

### Array Methods

| Function                                   | Status         |
|--------------------------------------------|----------------|
| `$Map(array, callback)`                    | Implemented    |
| `$Filter(array, callback)`                 | Implemented    |
| `$Reduce(array, callback, initialValue)`   | Implemented    |
| `$ForEach(array, callback)`                | Todo           |
| `$Some(array, callback)`                   | Todo           |
| `$Every(array, callback)`                  | Todo           |
| `$Find(array, callback)`                   | Todo           |
| `$IndexOf(array, element)`                 | Todo           |
| `$Includes(array, element)`                | Todo           |
| `$Sort(array, compareFunction)`            | Todo           |
| `$Reverse(array)`                          | Todo           |
| `$Splice(array, start, deleteCount, ...items)` | Todo           |
| `$Slice(array, start, end)`                | Todo           |
| `$Concat(array, ...arrays)`                | Todo           |
| `$Join(array, separator)`                   | Todo           Todo

### String Methods

| Function                                     | Status         |
|----------------------------------------------|----------------|
| `$CharAt(string, index)`                     | Todo    |
| `$IndexOf(string, searchValue, fromIndex)`  | Todo    |
| `$Includes(string, searchString, fromIndex)`| Todo    |
| `$Slice(string, start, end)`                 | Todo    |
| `$Substring(string, start, end)`             | Todo    |
| `$Trim(string)`                              | Todo    |
| `$ToLowerCase(string)`                       | Todo    |
| `$ToUpperCase(string)`                       | Todo    |
| `$Split(string, separator, limit)`           | Todo    |
| `$Replace(string, searchValue, newValue)`    | Todo    |

### Object Methods

| Function                                   | Status         |
|--------------------------------------------|----------------|
| `$Keys(object)`                            | Todo    |
| `$Values(object)`                          | Todo    |
| `$Entries(object)`                         | Todo    |
| `$Assign(target, ...sources)`              | Todo    |
| `$Freeze(object)`                          | Todo    |
| `$Seal(object)`                            | Todo    |
| `$GetOwnPropertyDescriptor(object, property)` | Todo |
| `$Create(prototype, properties)`            | Todo    |
| `$HasOwnProperty(object, property)`        | Todo    |

### Function Methods

| Function                                   | Status         |
|--------------------------------------------|----------------|
| `$Call(func, thisArg, ...args)`           | Todo    |
| `$Apply(func, thisArg, args)`              | Todo    |
| `$Bind(func, thisArg, ...args)`           | Todo    |

### Math Methods

| Function                                   | Status         |
|--------------------------------------------|----------------|
| `$Max(...numbers)`                         | Todo    |
| `$Min(...numbers)`                         | Todo    |
| `$Floor(number)`                           | Todo    |
| `$Ceil(number)`                            | Todo    |
| `$Round(number)`                           | Todo    |
| `$Random()`                                | Todo    |
| `$Abs(number)`                             | Todo    |

### Other Global Functions

| Function                                   | Status         |
|--------------------------------------------|----------------|
| `$ParseInt(string, radix)`                 | Todo    |
| `$ParseFloat(string)`                      | Todo    |
| `$IsNaN(value)`                           | Todo    |
| `$IsFinite(value)`                         | Todo    |
| `$Stringify(value)`                        | Todo    |
| `$Parse(jsonString)`                       | Todo    |

## Installation

To install this package, use npm:

```bash
npm install js-internals

![github-header-image (2)](https://github.com/user-attachments/assets/5306de0f-8874-41cf-a71c-a72ea621a685)
<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript Badge">
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm Badge">
  <img src="https://img.shields.io/badge/version-1.0.0-green?style=for-the-badge" alt="Version Badge">
</p>

Welcome to the Custom JavaScript Functions package! This npm package provides custom implementations of built-in JavaScript functions, allowing users to understand how these functions work internally. This is especially useful for learning purposes and for those who want to see how common JavaScript functions can be replicated.

## Features 🚀

- **Custom Implementations**: Each function in this package is a custom implementation that mimics the behavior of the native JavaScript functions.
- **Educational**: The primary goal of this package is to provide an educational resource for developers to understand the inner workings of JavaScript functions.
- **Polyfill-style Functions**: These implementations can serve as polyfills, helping developers use similar functionality in environments where certain features may not be available.

## Project Tree 🌳

```base
📦 js-internals
│
├── 📂 src
│   ├── 📂 DataStructures
│   │   └── 📄 set.js
│   ├── 📂 internal-custom-functions
│   │   ├── 📂 Array_Object
│   │   │   ├── 📂 Instance_Methods
│   │   │   │   ├── 📄 _map.js
│   │   │   │   ├── 📄 _filter.js
│   │   │   │   └── 📄 _reduce.js
│   │   │   └── 📂 Static_Methods
│   │   │       ├── 📄 _call.js
│   │   │       ├── 📄 _apply.js
│   │   │       ├── 📄 _from.js
│   │   │       └── 📄 _isArray.js
│   └── 📄 index.js
│
├── 📂 tests
│   ├── 📄 test.js
│
├── 📄 package.json
```
## Progress ✨ ~
![image](https://github.com/user-attachments/assets/3a02bbdf-7990-40f7-8c1b-fabc8d90db19)

## Available Functions 🚀

### Array Methods

| Function                                   | Status         | Native Function               |
|--------------------------------------------|----------------|-------------------------------|
| `$Map(array, callback)`                    | Implemented    | `Array.prototype.map()`       |
| `$Filter(array, callback)`                 | Implemented    | `Array.prototype.filter()`    |
| `$Reduce(array, callback, initialValue)`   | Implemented    | `Array.prototype.reduce()`    |
| `$ForEach(array, callback)`                | Todo           | `Array.prototype.forEach()`   |
| `$Some(array, callback)`                   | Todo           | `Array.prototype.some()`      |
| `$Every(array, callback)`                  | Todo           | `Array.prototype.every()`     |
| `$Find(array, callback)`                   | Todo           | `Array.prototype.find()`      |
| `$IndexOf(array, element)`                 | Todo           | `Array.prototype.indexOf()`   |
| `$Includes(array, element)`                | Todo           | `Array.prototype.includes()`   |
| `$Sort(array, compareFunction)`            | Todo           | `Array.prototype.sort()`      |
| `$Reverse(array)`                          | Todo           | `Array.prototype.reverse()`   |
| `$Splice(array, start, deleteCount, ...items)` | Todo       | `Array.prototype.splice()`    |
| `$Slice(array, start, end)`                | Todo           | `Array.prototype.slice()`     |
| `$Concat(array, ...arrays)`                | Todo           | `Array.prototype.concat()`    |
| `$Join(array, separator)`                   | Todo          | `Array.prototype.join()`      |
| `$Array.isArray(array)`                    | Implemented    | `Array.isArray()`             |
| `$Array.of(value)`                         | Implemented    | `Array.of()`                  |
| `$Array.from(value)`                       | Implemented    | `Array.from()`                |

### String Methods

| Function                                     | Status         | Native Function                  |
|----------------------------------------------|----------------|----------------------------------|
| `$CharAt(string, index)`                     | Todo           | `String.prototype.charAt()`      |
| `$IndexOf(string, searchValue, fromIndex)`  | Todo           | `String.prototype.indexOf()`     |
| `$Includes(string, searchString, fromIndex)`| Todo           | `String.prototype.includes()`     |
| `$Slice(string, start, end)`                 | Todo           | `String.prototype.slice()`        |
| `$Substring(string, start, end)`             | Todo           | `String.prototype.substring()`    |
| `$Trim(string)`                              | Todo           | `String.prototype.trim()`         |
| `$ToLowerCase(string)`                       | Todo           | `String.prototype.toLowerCase()`  |
| `$ToUpperCase(string)`                       | Todo           | `String.prototype.toUpperCase()`  |
| `$Split(string, separator, limit)`           | Todo           | `String.prototype.split()`        |
| `$Replace(string, searchValue, newValue)`    | Todo           | `String.prototype.replace()`      |

### Object Methods

| Function                                   | Status         | Native Function                        |
|--------------------------------------------|----------------|----------------------------------------|
| `$Keys(object)`                            | Todo           | `Object.keys()`                        |
| `$Values(object)`                          | Todo           | `Object.values()`                      |
| `$Entries(object)`                         | Todo           | `Object.entries()`                     |
| `$Assign(target, ...sources)`              | Todo           | `Object.assign()`                      |
| `$Freeze(object)`                          | Todo           | `Object.freeze()`                      |
| `$Seal(object)`                            | Todo           | `Object.seal()`                        |
| `$GetOwnPropertyDescriptor(object, property)` | Todo        | `Object.getOwnPropertyDescriptor()`    |
| `$Create(prototype, properties)`            | Todo           | `Object.create()`                      |
| `$HasOwnProperty(object, property)`        | Todo           | `Object.prototype.hasOwnProperty()`    |

### Function Methods

| Function                                   | Status         | Native Function                     |
|--------------------------------------------|----------------|-------------------------------------|
| `$Call(func, thisArg, ...args)`           | Implemented    | `Function.prototype.call()`         |
| `$Apply(func, thisArg, args)`              | Implemented    | `Function.prototype.apply()`        |
| `$Bind(func, thisArg, ...args)`           | Todo           | `Function.prototype.bind()`         |

### Math Methods

| Function                                   | Status         | Native Function                   |
|--------------------------------------------|----------------|-----------------------------------|
| `$Max(...numbers)`                         | Todo           | `Math.max()`                      |
| `$Min(...numbers)`                         | Todo           | `Math.min()`                      |
| `$Floor(number)`                           | Todo           | `Math.floor()`                    |
| `$Ceil(number)`                            | Todo           | `Math.ceil()`                     |
| `$Round(number)`                           | Todo           | `Math.round()`                    |
| `$Random()`                                | Todo           | `Math.random()`                   |
| `$Abs(number)`                             | Todo           | `Math.abs()`                      |

### Other Global Functions

| Function                                   | Status         | Native Function                  |
|--------------------------------------------|----------------|----------------------------------|
| `$ParseInt(string, radix)`                 | Todo           | `parseInt()`                     |
| `$ParseFloat(string)`                      | Todo           | `parseFloat()`                   |
| `$IsNaN(value)`                           | Todo           | `isNaN()`                        |
| `$IsFinite(value)`                         | Todo           | `isFinite()`                     |
| `$Stringify(value)`                        | Todo           | `JSON.stringify()`               |
| `$Parse(jsonString)`                       | Todo           | `JSON.parse()`                   |

## Installation ⏬

To install this package, use npm:
```bash
npm install --save-dev js-internals
```
To Run The Tests:
`Make the test script executable:`
For (Linux):
```bash
chmod +x pkg_tester.sh
```
`Run the test script:`
```bash
./pkg_tester.sh
```
