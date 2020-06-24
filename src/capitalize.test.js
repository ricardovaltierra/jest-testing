import capitalize from './capitalize';

test('returns string capitalized', () => {
  expect(capitalize('mystring')).toBe('Mystring');
});
