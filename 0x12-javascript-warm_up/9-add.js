#!/usr/bin/node
'use strict';
let a = process.argv[2];
let b = process.argv[3];
function add (a, b) {
  if (isNaN(a) || isNaN(b)) {
    return (NaN);
  } else {
    return (parseInt(a) + parseInt(b));
  }
}
console.log(add(a, b));
