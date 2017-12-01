"use strict";
// import { NAME1, NAME2, NAME3 } from "./path";
exports.__esModule = true;
var math_1 = require("./math");
// import { sum } from "./math";
// import everything
var Blah = require("./math");
// the "powerOf2()" function lives in "math.ts"
console.log(math_1.powerOf2(42));
console.log(math_1.sum(42, 8));
console.log(Blah.randomInteger(10));
