import Calculator from './calculator';

test('add (2 + 2 = 4)', () => {
  expect(Calculator.add(2, 2)).toEqual(4);
});

test('add range not equal zero', () => {
  for (let i = 1; i <= 10; i += 1) {
    for (let j = 1; j <= 10; j += 1) {
      expect(Calculator.add(i, j)).not.toEqual(0);
    }
  }
});

test('add receives one value throws error', () => {
  expect(() => Calculator.add(1)).toThrow('Please give both values');
});

test('add strings throws error', () => {
  expect(() => Calculator.add('mystring', 'mystring')).toThrow('Please add just numbers');
});


test('substract 2 - 2 = 0', () => {
  expect(Calculator.substract(2, 2)).toEqual(0);
});

test('substract adds when first value negative', () => {
  expect(Calculator.substract(-10, 2)).toEqual(-12);
});

test('substract receives one value throws error', () => {
  expect(() => Calculator.substract(2)).toThrow('Please give both values');
});

test('substract strings throws error', () => {
  expect(() => Calculator.substract('mystring', 'mystring')).toThrow('Please add just numbers');
});


test('multiply 2 * 2 = 4', () => {
  expect(Calculator.multiply(2, 2)).toEqual(4);
});

test('multiply + * - = -', () => {
  expect(Calculator.multiply(2, -2)).toBeLessThan(0);
});

test('multiply - * - = +', () => {
  expect(Calculator.multiply(-2, -2)).toBeGreaterThan(0);
});

test('multiply num * 0 = 0', () => {
  expect(Calculator.multiply(5, 0)).toEqual(0);
});

test('multiply receives one value throws error', () => {
  expect(() => Calculator.multiply(2)).toThrow('Please give both values');
});

test('multiply strings throws error', () => {
  expect(() => Calculator.multiply('mystring', 'mystring')).toThrow('Please add just numbers');
});


test('divide 2 / 2 = 1', () => {
  expect(Calculator.divide(2, 2)).toEqual(1);
});

test('divide + * - = -', () => {
  expect(Calculator.divide(2, -2)).toBeLessThan(0);
});

test('divide - / - = +', () => {
  expect(Calculator.divide(-2, -2)).toBeGreaterThan(0);
});

test('divide num / 0 = undefined', () => {
  expect(() => Calculator.divide(5, 0)).toThrow('Zero divition not possible');
});

test('divide receives one value throws error', () => {
  expect(() => Calculator.divide(2)).toThrow('Please give both values');
});

test('divide strings throws error', () => {
  expect(() => Calculator.divide('mystring', 'mystring')).toThrow('Please add just numbers');
});