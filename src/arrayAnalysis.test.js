import arrayAnalysis from './arrayAnalysis';

test('result must be an object', () => {
    const array = [1, 2, 3, 4, 5, 6];
    expect(typeof arrayAnalysis(array)).toBe('object');
});

test('returns a complete object', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const object = {
        average: 3.5,
        min: 1,
        max: 6,
        length: 6
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
    expect(arrayAnalysis(array).average).toBeCloseTo(3.5);
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
