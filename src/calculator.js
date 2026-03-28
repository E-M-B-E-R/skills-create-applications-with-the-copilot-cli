/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add        - Addition: returns the sum of two numbers
 *   subtract   - Subtraction: returns the difference of two numbers
 *   multiply   - Multiplication: returns the product of two numbers
 *   divide     - Division: returns the quotient of two numbers (division by zero is not allowed)
 *   modulo     - Modulo: returns the remainder of a divided by b (division by zero is not allowed)
 *   power      - Exponentiation: returns base raised to the exponent
 *   squareRoot - Square Root: returns the square root of n (negative numbers are not allowed)
 *
 * Usage:
 *   node calculator.js add 5 3
 *   node calculator.js subtract 10 4
 *   node calculator.js multiply 6 7
 *   node calculator.js divide 20 4
 *   node calculator.js modulo 10 3
 *   node calculator.js power 2 8
 *   node calculator.js squareRoot 144
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a divided by b
// Throws an error if b is zero to prevent division by zero
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

// Modulo: returns the remainder of a divided by b
// Throws an error if b is zero to prevent division by zero
function modulo(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a % b;
}

// Exponentiation: returns base raised to the power of exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square Root: returns the square root of n
// Throws an error if n is negative
function squareRoot(n) {
  if (n < 0) throw new Error('Square root of negative number is not allowed');
  return Math.sqrt(n);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

if (require.main === module) {
// Parse CLI arguments
const [, , operation, rawA, rawB] = process.argv;
const a = parseFloat(rawA);
const b = parseFloat(rawB);

const twoArgOps = ['add', 'subtract', 'multiply', 'divide', 'modulo', 'power'];
const oneArgOps = ['squareRoot'];
const allOps = [...twoArgOps, ...oneArgOps].join('|');

if (!operation) {
  console.error(`Usage: node calculator.js <${allOps}> <num1> [num2]`);
  process.exit(1);
}

if (twoArgOps.includes(operation) && (isNaN(a) || isNaN(b))) {
  console.error(`Usage: node calculator.js ${operation} <num1> <num2>`);
  process.exit(1);
}

if (oneArgOps.includes(operation) && isNaN(a)) {
  console.error(`Usage: node calculator.js ${operation} <num>`);
  process.exit(1);
}

let result;
switch (operation) {
  case 'add':
    result = add(a, b);
    break;
  case 'subtract':
    result = subtract(a, b);
    break;
  case 'multiply':
    result = multiply(a, b);
    break;
  case 'divide':
    try {
      result = divide(a, b);
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
    break;
  case 'modulo':
    try {
      result = modulo(a, b);
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
    break;
  case 'power':
    result = power(a, b);
    break;
  case 'squareRoot':
    try {
      result = squareRoot(a);
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
    break;
  default:
    console.error(`Unknown operation "${operation}". Supported: ${allOps}`);
    process.exit(1);
}

console.log(result);
}
