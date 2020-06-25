export default function caesarCipher(str, shift) {
  if (typeof str !== 'string') {
    return str;
  }
  let str1 = '';
  let i = 0;
  while (i < str.length) {
    if (str[i].match(/[A-Z]/)) {
      // A 65
      // Z 90
      let number = str.charCodeAt(i);
      if (number + shift > 90) {
        number = ((number + shift) % 90) + 64;
        str1 += String.fromCharCode(number);
      } else {
        str1 += String.fromCharCode(number + shift);
      }
    } else if (str[i].match(/[a-z]/)) {
      // a 97
      // z 122
      let number = str.charCodeAt(i);
      if (number + shift > 122) {
        number = ((number + shift) % 122) + 96;
        str1 += String.fromCharCode(number);
      } else {
        str1 += String.fromCharCode(number + shift);
      }
    } else {
      str1 += str[i];
    }
    i += 1;
  }
  return str1;
}