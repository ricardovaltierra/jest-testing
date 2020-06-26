export default function calculator(operator, num1, num2) {
  if (num1 === undefined || num2 === undefined) {
    throw new Error('Please give both values');
  } else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('Please add just numbers');
  } else {
    let result = null;

    switch (operator) {
      case 'add':
        result = num1 + num2;
        break;
      case 'substract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 === 0) {
          throw new Error('Zero divition not possible');
        }
        result = num1 / num2;
        break;
      default:
        break;
    }

    return result;
  }
}