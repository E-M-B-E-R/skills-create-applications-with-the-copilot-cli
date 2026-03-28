const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('add', () => {
  test('adds two positive numbers', () => expect(add(2, 3)).toBe(5));
  test('adds a positive and negative number', () => expect(add(5, -3)).toBe(2));
  test('adds two negative numbers', () => expect(add(-4, -6)).toBe(-10));
  test('adds with zero', () => expect(add(7, 0)).toBe(7));
});

describe('subtract', () => {
  test('subtracts two positive numbers', () => expect(subtract(10, 4)).toBe(6));
  test('subtracts resulting in a negative', () => expect(subtract(3, 8)).toBe(-5));
  test('subtracts two negative numbers', () => expect(subtract(-5, -3)).toBe(-2));
  test('subtracts zero', () => expect(subtract(9, 0)).toBe(9));
});

describe('multiply', () => {
  test('multiplies two positive numbers', () => expect(multiply(6, 7)).toBe(42));
  test('multiplies by zero', () => expect(multiply(5, 0)).toBe(0));
  test('multiplies two negative numbers', () => expect(multiply(-3, -4)).toBe(12));
  test('multiplies a positive and negative number', () => expect(multiply(3, -5)).toBe(-15));
});

describe('divide', () => {
  test('divides two positive numbers', () => expect(divide(20, 4)).toBe(5));
  test('divides resulting in a decimal', () => expect(divide(7, 2)).toBe(3.5));
  test('divides a negative by a positive', () => expect(divide(-12, 3)).toBe(-4));
  test('throws on division by zero', () => {
    expect(() => divide(5, 0)).toThrow('Division by zero');
  });
});

describe('modulo', () => {
  test('5 % 2 equals 1', () => expect(modulo(5, 2)).toBe(1));
  test('10 % 3 equals 1', () => expect(modulo(10, 3)).toBe(1));
  test('returns 0 when evenly divisible', () => expect(modulo(9, 3)).toBe(0));
  test('works with negative dividend', () => expect(modulo(-7, 3)).toBe(-1));
  test('throws on modulo by zero', () => {
    expect(() => modulo(5, 0)).toThrow('Division by zero');
  });
});

describe('power', () => {
  test('2 ^ 3 equals 8', () => expect(power(2, 3)).toBe(8));
  test('squares a number', () => expect(power(5, 2)).toBe(25));
  test('any number to the power of 0 equals 1', () => expect(power(99, 0)).toBe(1));
  test('any number to the power of 1 equals itself', () => expect(power(7, 1)).toBe(7));
  test('fractional exponent (square root via power)', () => expect(power(9, 0.5)).toBe(3));
  test('negative base with even exponent', () => expect(power(-3, 2)).toBe(9));
});

describe('squareRoot', () => {
  test('square root of 16 equals 4', () => expect(squareRoot(16)).toBe(4));
  test('square root of 144 equals 12', () => expect(squareRoot(144)).toBe(12));
  test('square root of 0 equals 0', () => expect(squareRoot(0)).toBe(0));
  test('square root of a non-perfect square', () => expect(squareRoot(2)).toBeCloseTo(1.4142, 4));
  test('throws on square root of a negative number', () => {
    expect(() => squareRoot(-1)).toThrow('Square root of negative number is not allowed');
  });
  test('throws on any negative input', () => {
    expect(() => squareRoot(-9)).toThrow('Square root of negative number is not allowed');
  });
});
