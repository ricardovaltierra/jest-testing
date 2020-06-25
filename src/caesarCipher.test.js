import caesarCipher from './caesarCipher';

test('Not returning same string', () => {
  expect(caesarCipher('mystring', 2)).not.toBe('mystring');
});

test('cipher a only text even if is mixed numbers and symbols',() => {
  expect(caesarCipher('l3ts c1ph3er',5)).toBe('q3yx h1um3jw')
});

test('cipher a text',() => {
  expect(caesarCipher('attack at dawn',5)).toBe('fyyfhp fy ifbs')
});

test('cipher a text but not numbers',() => {
  expect(caesarCipher('attack at dawn at 3',5)).toBe('fyyfhp fy ifbs fy 3')
});

test('cipher a text in uppercarse',() => {
  expect(caesarCipher('HELLO WORLD',5)).toBe('MJQQT BTWQI');
});

test('cipher a text MiXedCasE',() => {
  expect(caesarCipher('HelLo wOrlD',5)).toBe('MjqQt bTwqI');
});

test('return the same string if the shift is multiple of 26', () => {
  expect(caesarCipher("hello",26)).toBe('hello');
});

test('dont cipher numbers',() => {
  expect(caesarCipher(98)).toBe(98);
})

test('dont cipher arrays', () => {
  expect(caesarCipher([1,2,3])).toStrictEqual([1,2,3]);
})
