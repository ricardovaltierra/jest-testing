import { capitalize }  from './capitalize';

test('returns string capitalized', () => {
  expect(capitalize('mystring')).toBe('Mystring');
});

test('capitalized with symbols', () => {
  expect(capitalize('mystring&')).toBe('Mystring&');
});

test('capitalize a uppercase string', () => {
  expect(capitalize('MYSTRING')).toBe('Mystring');
});

test('capitalize a random capitalized string', () => {
  expect(capitalize('MyStRiNg')).toBe('Mystring');
});

test('capitalize a camelize string', () => {
  expect(capitalize('MyString')).toBe('Mystring');
});

test('dont capitalize numbers',() => {
  expect(capitalize(98)).toBe(98);
})

test('dont capitalize arrays', () => {
  expect(capitalize([1,2,3])).toStrictEqual([1,2,3]);
})

test('capitalize even if the first characters are not alphanumeric', () => {
  expect(capitalize("$%#mystring")).toBe('$%#Mystring');
})

test('capitalize a capitalized string', () => {
  expect(capitalize("Mystring")).toBe("Mystring");
})
