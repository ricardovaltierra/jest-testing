export default function reverseString(str) {
  if (typeof str !== 'string') {
    return str;
  }
  let str1 = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    str1 += str[i];
  }
  return str1;
}