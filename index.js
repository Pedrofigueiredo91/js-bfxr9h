/*

JavaScript is a programming language with `first-class functions`  (functions are treated like any other variable)

- a function can be assigned as a value to a variable
- a function can be passed as an argument to other functions
- a function can be returned by another function 
*/

// function declaration
function calcSum(a, b) {
  const total = a + b;
  return total;
}

const result = calcSum(10, 20);
console.log(result);

// function expression
const calcMult = function (numberA, numberB) {
  console.log(numberA * numberB);
};

calcMult(5, 3);
