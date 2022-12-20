#!/usr/bin/env node

'use strict';

exports.esrever = function (list) {
  const reversed = [];
  for (let i = list.length - 1; i >= 0; i--) {
    reversed.push(list[i]);
  }
  return reversed;
};

const list = [1, 2, 3, 4, 5];

console.log(esrever(list)); // Output: [5, 4, 3, 2, 1]
