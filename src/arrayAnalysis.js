export default function arrayAnalysis(arr) {
    const isNumber = (elem) => {
            if (typeof elem != 'number'){
                return false
            }
            return true;
    }
    if (arr === undefined) {
        throw new Error('Please insert an array of numbers.');
    } else if (arr.constructor != Array){
        throw new Error('Please insert an array of numbers.');
    } else if (!arr.every(isNumber)){
        throw new Error('Please insert an array of just numbers.')
    }

  const object = {
    average: null,
    min: null,
    max: null,
    length: null
  };

  let min = arr[0];
  let max = arr[0];
  let acc = 0;
  for(let i = 0; i < arr.length; i++){
    if (arr[i] < min){
        min = arr[i]
    }
    if(arr[i] > max) {
        max = arr[i];
    }
    acc += arr[i];
  }

  object.min = min;
  object.max = max;
  object.length = arr.length;
  object.average = acc / object.length; 

  return object;
}