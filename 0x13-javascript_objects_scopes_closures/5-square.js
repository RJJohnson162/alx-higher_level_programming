#!/usr/bin/env node

'use strict';

class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
      this.width = 0;
      this.height = 0;
    } else {
      this.width = w;
      this.height = h;
    }
  }

  print() {
    for (let i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}

const sq1 = new Square(5);
sq1.print();
/* Output:
XXXXX
XXXXX
XXXXX
XXXXX
XXXXX
*/

const sq2 = new Square(0);
sq2.print(); // Output: (nothing)

const sq3 = new Square(-5);
sq3.print(); // Output
