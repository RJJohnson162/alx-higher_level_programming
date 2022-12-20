#!/usr/bin/env node

'use strict';

exports.nbOccurences = function (list, searchElement) {
  return list.filter(element => element === searchElement).length;
};

const list = [1, 2, 3, 4, 5, 3, 3, 2, 1];

console.log(nbOccurences(list, 3)); // Output: 3
console.log(nbOccurences(list, 6)); // Output: 0
console.log(nbOccurences(list, 2)); // Output: 2
