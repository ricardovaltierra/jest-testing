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
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) expect(add(i + j).not.toEqual(0));
  }
});

test('add receives one value throws error', () => {
  excpect(add(2)).toThrow('Please give both values');
});

test('add strings throws error', () => {
  excpect(add('mystring', 'mystring')).toThrow('Please add just numbers');
});


test('substract 2 - 2 = 0', () => {
  expect(substract(2, 2).toEqual(0));
});

test('substract nevative result', () => {
  expect(substract(2, -10).toEqual(-8));
});

test('substract receives one value throws error', () => {
  excpect(substract(2)).toThrow('Please give both values');
});

test('substract strings throws error', () => {
  excpect(substract('mystring', 'mystring')).toThrow('Please add just numbers');
});


test('multiply 2 * 2 = 4', () => {
  expect(multiply(2, 2).toEqual(4));
});

test('multiply + * - = -', () => {
  expect(multiply(2, -2).toBeLessThan(0));
});

test('multiply - * - = +', () => {
  expect(multiply(-2, -2).toBeGreaterThan(0));
});

test('multiply num * 0 = 0', () => {
  expect(multiply(5, 0).toEqual(0));
});

test('multiply receives one value throws error', () => {
  excpect(multiply(2)).toThrow('Please give both values');
});

test('multiply strings throws error', () => {
  excpect(multiply('mystring', 'mystring')).toThrow('Please add just numbers');
});


test('divide 2 / 2 = 1', () => {
  expect(divide(2, 2).toEqual(1));
});

test('divide + * - = -', () => {
  expect(divide(2, -2).toBeLessThan(0));
});

test('divide - * - = +', () => {
  expect(divide(-2, 2).toBeGreaterThan(0));
});

test('divide num / 0 = undefined', () => {
  expect(divide(5, 0)).toBeUndefined();
});

test('divide receives one value throws error', () => {
  excpect(divide(2)).toThrow('Please give both values');
});

test('divide strings throws error', () => {
  excpect(divide('mystring', 'mystring')).toThrow('Please add just numbers');
});