
const { add, subtract, multiply, divide } = require("./calculator");
const sum = require("./sum");

const result = sum(1, 3);
console.log("sum result: ", result);

const addFunc = add(3, 1);
console.log("add result: ", addFunc);

const subtractFunc = subtract(3, 1);
console.log("subtract result: ", subtractFunc);

const multiplyFunc = multiply(3, 1);
console.log("multiply result: ", multiplyFunc);

const divideFunc = divide(3, 2);
console.log("divide result: ", divideFunc);