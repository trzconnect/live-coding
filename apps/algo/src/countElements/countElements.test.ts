import { countElements } from './countElements';

describe('Algo test count occurence of each elements', () => {
  it('Should return true if the string is a palindrome', () => {
    const arr = [
      [1, 2],
      [1, 2, 3],
      [1, 2, 3, 4],
    ];
    const expected = { 1: 3, 2: 3, 3: 2, 4: 1 };
    expect(countElements(arr)).toEqual(expected);
  });
});
