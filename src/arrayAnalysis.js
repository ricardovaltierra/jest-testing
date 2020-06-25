export default function arrayAnalysis(arr) {

  if (arr === undefined || arr === null) {
    throw new Error('Please insert an array of numbers.Please give both values');
  } else if (typeof arr != 'array') {
    throw new Error('Please insert an array of numbers.');
  } 
  // else if (typeof arr 'array') {
  //   throw new Error('Please insert an array of numbers.');
  // }

  const object = {
    average: null,
    min: null,
    max: null,
    length: null
  };

  object.average = () => {
    return (arr.reduce((acc, curr) => { acc + curr })) / arr.length;
  }

  return object;
}