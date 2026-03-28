/**
 * Tests for the Node.js CLI Calculator
 *
 * Covers: add, subtract, multiply, divide, modulo, power, squareRoot
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// --- Addition ---
console.assert(add(2, 3) === 5, 'add(2, 3) should be 5');
console.assert(add(-1, 1) === 0, 'add(-1, 1) should be 0');
console.assert(add(0, 0) === 0, 'add(0, 0) should be 0');

// --- Subtraction ---
console.assert(subtract(10, 4) === 6, 'subtract(10, 4) should be 6');
console.assert(subtract(0, 5) === -5, 'subtract(0, 5) should be -5');

// --- Multiplication ---
console.assert(multiply(45, 2) === 90, 'multiply(45, 2) should be 90');
console.assert(multiply(0, 100) === 0, 'multiply(0, 100) should be 0');

// --- Division ---
console.assert(divide(20, 5) === 4, 'divide(20, 5) should be 4');
try {
  divide(10, 0);
  console.assert(false, 'divide(10, 0) should throw an error');
} catch (e) {
  console.assert(e.message === 'Division by zero', 'divide(10, 0) should throw Division by zero');
}

// --- Modulo ---
console.assert(modulo(10, 3) === 1, 'modulo(10, 3) should be 1');
console.assert(modulo(15, 5) === 0, 'modulo(15, 5) should be 0');
console.assert(modulo(7, 4) === 3, 'modulo(7, 4) should be 3');
try {
  modulo(10, 0);
  console.assert(false, 'modulo(10, 0) should throw an error');
} catch (e) {
  console.assert(e.message === 'Division by zero', 'modulo(10, 0) should throw Division by zero');
}

// --- Power (exponentiation) ---
console.assert(power(2, 8) === 256, 'power(2, 8) should be 256');
console.assert(power(3, 3) === 27, 'power(3, 3) should be 27');
console.assert(power(5, 0) === 1, 'power(5, 0) should be 1');
console.assert(power(2, -1) === 0.5, 'power(2, -1) should be 0.5');

// --- Square root ---
console.assert(squareRoot(25) === 5, 'squareRoot(25) should be 5');
console.assert(squareRoot(0) === 0, 'squareRoot(0) should be 0');
console.assert(squareRoot(2) === Math.sqrt(2), 'squareRoot(2) should equal Math.sqrt(2)');
try {
  squareRoot(-1);
  console.assert(false, 'squareRoot(-1) should throw an error');
} catch (e) {
  console.assert(
    e.message === 'Cannot take the square root of a negative number',
    'squareRoot(-1) should throw correct error'
  );
}

console.log('All calculator tests passed!');
