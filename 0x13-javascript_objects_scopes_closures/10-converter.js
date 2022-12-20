#!/usr/bin/env node

'use strict';

exports.converter = function (base) {
  return function (number) {
    let converted = '';
    while (number > 0) {
      let remainder = number % base;
      converted = remainder + converted;
      number = Math.floor(number / base);
    }
    return converted;
  };
};

const base2Converter = converter(2);
console.log(base2Converter(10)); // Output: "1010"

const base16Converter = converter(16);
console.log(base16Converter(255)); // Output: "FF"

const base8Converter = converter(8);
console.log(base8Converter(100)); // Output: "144"
