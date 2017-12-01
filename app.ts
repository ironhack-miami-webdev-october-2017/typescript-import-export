// import { NAME1, NAME2, NAME3 } from "./path";

import {
  powerOf2,
  sum,
  subtract,
  multiply
} from "./math";
// import { sum } from "./math";

// import everything
import * as Blah from "./math";


// the "powerOf2()" function lives in "math.ts"
console.log( powerOf2(42) );

console.log( sum(42, 8) );

console.log( Blah.randomInteger(10) );
