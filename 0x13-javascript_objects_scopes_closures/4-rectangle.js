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

  rotate() {
    [this.width, this.height] = [this.height, this.width];
  }

  double() {
    this.width *= 2;
    this.height *= 2;
  }
}

const rect1 = new Rectangle(10, 5);
rect1.print();
/* Output:
XXXXXXXXXX
XXXXXXXXXX
XXXXXXXXXX
XXXXXXXXXX
XXXXXXXXXX
*/

rect1.rotate();
rect1.print();
/* Output:
XXXXX
XXXXX
XXXXX
XXXXX
XXXXX
XXXXX
XXXXX
XXXXX
XXXXX
XXXXX
*/

rect1.double();
rect1.print();
/* Output:
XXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXX
*/

const rect2 = new Rectangle(0, 5);
rect2.print(); // Output: (nothing)

const rect3 = new Rectangle(10, -5);
rect3.print(); // Output: (nothing)

const rect4 = new Rectangle(10.5, 5);
rect4.print(); // Output: (nothing)