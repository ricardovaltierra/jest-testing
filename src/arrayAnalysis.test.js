import arrayAnalysis from './arrayAnalysis';

test('returns an object', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const object = {
        average: null,
        min: null,
        max: null,
        length: null
    };

    expect(object).toEqual(arrayAnalysis(array));
});

test('throws error when nothing is provided', () => {
    expect(() => arrayAnalysis()).toThrow('Please insert an array of numbers.');
});

test('throws error when no array is provided', () => {
    expect(() => arrayAnalysis(10)).toThrow('Please insert an array of numbers.');
});

test('throws error when no array with just numbers is provided', () => {
    const array = [1, 2, 3, 4, 5, a];
    expect(() => arrayAnalysis(array)).toThrow('Please insert an array of just numbers.');
});

test('returns average of array', () => {
    const array = [1, 2, 3, 4, 5, 6];
    expect(arrayAnalysis(array).average).toEqual(3);
});

test('returns min value of array', () => {
    const array = [1, 2, 3, 4, 5, 6];
    expect(arrayAnalysis(array).min).toEqual(1);
});

test('returns max value of array', () => {
    const array = [1, 2, 3, 4, 5, 6];
    expect(arrayAnalysis(array).max).toEqual(6);
});

test('returns array\'s length', () => {
    const array = [1, 2, 3, 4, 5, 6];
    expect(arrayAnalysis(array).length).toEqual(6);
});
