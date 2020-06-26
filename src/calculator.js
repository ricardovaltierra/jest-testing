export function calculator(operator, num1, num2) {
  if (num1 === undefined || num2 === undefined) {
    throw new Error('Please give both values');
  } else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('Please add just numbers');
  } else {

    switch(operator) {
      case 'add':
        return num1 + num2;
        break;
      case 'substract':
        return num1 - num2;
        break;
      case 'multiply':
        return num1 * num2;
        break;
      case 'divide':
        if (num2 === 0) {
          throw new Error('Zero divition not possible');
        }
        return num1 / num2;
        break;
      default:
        break;
    }
  }
}