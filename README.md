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
