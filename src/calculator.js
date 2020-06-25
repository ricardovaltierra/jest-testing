export function add(num1, num2) {
  if (num1 == undefined || num2 == undefined){
    throw new Error('Please give both values');
  } else if(typeof num1 != 'number' || typeof num2 != 'number'){
    throw new Error('Please add just numbers');
  }
  return num1 + num2;
}

export function substract(num1, num2) {
  return num1 - num2;
}

export function multiply(num1, num2) {
  return num1 * num2;
}

export function divide(num1, num2) {
  return num1 / num2;
}