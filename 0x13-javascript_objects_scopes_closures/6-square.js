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
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }

  charPrint(c = 'X') {
    for (let i = 0; i < this.height; i++) {
      console.log(c.repeat(this.width));
    }
  }
}

const sq1 = new Square(5);
sq1.charPrint();
/* Output:
XXXXX
XXXXX
XXXXX
XXXXX
XXXXX
*/

const sq2 = new Square(5);
sq2.charPrint('O');
/* Output:
OOOO
*/
