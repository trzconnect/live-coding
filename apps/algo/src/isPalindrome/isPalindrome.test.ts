import { isPalindrome } from './isPalindrome';

describe('Algo test palindrome', () => {
  it('Should return true if the string is a palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });
  it('Should return false if the string is a palindrome', () => {
    expect(isPalindrome('faker')).toBe(false);
  });
});
