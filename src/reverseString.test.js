import reverseString from './reverseString';

test('returns string reversed', () => {
    expect(reverseString('mystring')).toBe('gnirtsym');
});

test('return reverse string if is in upcase',() => {
  expect(reverseString('MYSTRING')).toBe('GNIRTSYM')
});

test('return reverse string if is in mixedCase',() => {
  expect(reverseString('MyStrInG')).toBe('GnIrtSyM')
});

test('don\'t reverse numbers',() => {
  expect(reverseString(98)).toBe(98);
});

test('don\'t reverse arrays', () => {
  expect(reverseString([1,2,3])).toStrictEqual([1,2,3]);
});

test('don\'t reverse floats',() => {
  expect(reverseString(98.1)).toBe(98.1);
});

test('reverse string with another characters', () => {
  expect(reverseString('#$%Mystring#')).toBe('#gnirtsyM%$#')
});

test('reverse string if the string contains numbers', () => {
  expect(reverseString('m1str3ing')).toBe('gni3rts1m')
});