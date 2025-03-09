// console.log(arguments);
// console.log(require("module").wrapper);

// 1: module.exports shorthan
const C = require("./test-module-1");
const calc1 = new C();
console.log(calc1.add(2, 6));

// 2: exports shorthan
const calc2 = require("./test-module-2");
console.log(calc2.add(4, 5));
console.log(calc2.multiply(4, 5));
// Using ES6 destructuring
const { add, multiply } = require("./test-module-2");
console.log(add(4, 5));
console.log(multiply(4, 5));

// 3: Caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
