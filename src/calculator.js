/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add      - Addition: returns the sum of two numbers
 *   subtract - Subtraction: returns the difference of two numbers
 *   multiply - Multiplication: returns the product of two numbers
 *   divide   - Division: returns the quotient of two numbers (division by zero is not allowed)
 *
 * Usage:
 *   node calculator.js add 5 3
 *   node calculator.js subtract 10 4
 *   node calculator.js multiply 6 7
 *   node calculator.js divide 20 4
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

// Parse CLI arguments
const [, , operation, rawA, rawB] = process.argv;
const a = parseFloat(rawA);
const b = parseFloat(rawB);

if (!operation || isNaN(a) || isNaN(b)) {
  console.error('Usage: node calculator.js <add|subtract|multiply|divide> <num1> <num2>');
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
  default:
    console.error(`Unknown operation "${operation}". Supported: add, subtract, multiply, divide`);
    process.exit(1);
}

console.log(result);
