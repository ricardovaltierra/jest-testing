import caesarCipher from './caesarCipher';

test('Not returning same string', () => {
  expect(caesarCipher('mystring')).not.toBe('mystring');
});