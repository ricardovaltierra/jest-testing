import { 
  addition,
  substract,
  multiply,
  divide
} from './calculator';

test('addition (2 + 2 = 4)', () => {
  expect(addition(2,2)).toEqual(4);
});

test('addition range not equal zero', () => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++)
      expect(addition(i + j).not.toEqual(0));
   }
});

test('addition receives one value throws error', () => {
  excpect(addition(2)).toThrow('Please give both values');
});

test('addition strings throws error', () => {
  excpect(addition('mystring','mystring')).toThrow('Please add just numbers');
});

test('substract 2 - 2 = 0', () => {
  expect(substract(2, 2).toEqual(0));
});

test('nevative result', () => {
  expect(substract(2, -10).toEqual(-8));
});

test('substract receives one value throws error', () => {
  excpect(substract(2)).toThrow('Please give both values');
});

test('substract strings throws error', () => {
  excpect(substract('mystring','mystring')).toThrow('Please add just numbers');
});

test('multiply 2 * 2 = 4', () => {
  expect(multiply(2, 2).toEqual(4));
});

test('multiply + * - = -', () => {
  expect(multiply(2,-2).toBeLessThan(0));
});

test('multiply - * - = +', () => {
  expect(multiply(-2,-2).toBeGreaterThan(0));
});

test('multiply num * 0 = 0', () => {
  expect(multiply(5,0).toEqual(0));
});

test('multiply receives one value throws error', () => {
  excpect(multiply(2)).toThrow('Please give both values');
});

test('multiply strings throws error', () => {
  excpect(multiply('mystring','mystring')).toThrow('Please add just numbers');
});

test('divide 2 / 2 = 1', () => {
  expect(didive(2, 2).toEqual(1));
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
  excpect(divide('mystring','mystring')).toThrow('Please add just numbers');
});