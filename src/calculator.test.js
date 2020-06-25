import {
  add,
  substract,
  multiply,
  divide,
} from './calculator';


test('add (2 + 2 = 4)', () => {
  expect(add(2, 2)).toEqual(4);
});

test('add range not equal zero', () => {
  for (let i = 1; i <= 10; i += 1) {
    for (let j = 1; j <= 10; j += 1) {
      expect(add(i, j)).not.toEqual(0);
    }
  }
});

test('add receives one value throws error', () => {
  expect(() => add(1)).toThrow('Please give both values');
});

test('add strings throws error', () => {
  expect(() => add('mystring', 'mystring')).toThrow('Please add just numbers');
});


test('substract 2 - 2 = 0', () => {
  expect(substract(2, 2)).toEqual(0);
});

test('substract adds when first value negative', () => {
  expect(substract(-10, 2)).toEqual(-12);
});

test('substract receives one value throws error', () => {
  expect(() => substract(2)).toThrow('Please give both values');
});

test('substract strings throws error', () => {
  expect(() => substract('mystring', 'mystring')).toThrow('Please add just numbers');
});


test('multiply 2 * 2 = 4', () => {
  expect(multiply(2, 2)).toEqual(4);
});

test('multiply + * - = -', () => {
  expect(multiply(2, -2)).toBeLessThan(0);
});

test('multiply - * - = +', () => {
  expect(multiply(-2, -2)).toBeGreaterThan(0);
});

test('multiply num * 0 = 0', () => {
  expect(multiply(5, 0)).toEqual(0);
});

test('multiply receives one value throws error', () => {
  expect(() => multiply(2)).toThrow('Please give both values');
});

test('multiply strings throws error', () => {
  expect(() => multiply('mystring', 'mystring')).toThrow('Please add just numbers');
});


test('divide 2 / 2 = 1', () => {
  expect(divide(2, 2)).toEqual(1);
});

test('divide + * - = -', () => {
  expect(divide(2, -2)).toBeLessThan(0);
});

test('divide - / - = +', () => {
  expect(divide(-2, -2)).toBeGreaterThan(0);
});

test('divide num / 0 = undefined', () => {
  expect(() => divide(5, 0)).toThrow('Zero divition not possible');
});

test('divide receives one value throws error', () => {
  expect(() => divide(2)).toThrow('Please give both values');
});

test('divide strings throws error', () => {
  expect(() => divide('mystring', 'mystring')).toThrow('Please add just numbers');
});