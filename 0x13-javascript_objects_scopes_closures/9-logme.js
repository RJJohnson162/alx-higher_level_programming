#!/usr/bin/env node

'use strict';

let counter = 0;

exports.logMe = function (item) {
  console.log(`${counter}: ${item}`);
  counter++;
};

logMe(1); // Output: "0: 1"
logMe(2); // Output: "1: 2"
logMe(3); // Output: "2: 3"
logMe(4); // Output: "3: 4"
