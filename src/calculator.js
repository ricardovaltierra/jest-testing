const Calculator = (() => {
  const add = (num1, num2) => {
    if (num1 === undefined || num2 === undefined) {
      throw new Error('Please give both values');
    } else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error('Please add just numbers');
    } else {
      return num1 + num2;
    }
  };
  const substract = (num1, num2) => {
    if (num1 === undefined || num2 === undefined) {
      throw new Error('Please give both values');
    } else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error('Please add just numbers');
    } else {
      return num1 - num2;
    }
  };
  const multiply = (num1, num2) => {
    if (num1 === undefined || num2 === undefined) {
      throw new Error('Please give both values');
    } else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error('Please add just numbers');
    } else {
      return num1 * num2;
    }
  };
  const divide = (num1, num2) => {
    if (num1 === undefined || num2 === undefined) {
      throw new Error('Please give both values');
    } else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error('Please add just numbers');
    } else if (num2 === 0) {
      throw new Error('Zero divition not possible');
    } else {
      return num1 / num2;
    }
  };

  return {
    add,
    substract,
    multiply,
    divide,
  };
})();

export default Calculator;