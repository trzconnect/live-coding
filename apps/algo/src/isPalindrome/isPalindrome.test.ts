import { isPalindrome } from "./isPalindrome";

describe("Exercise 2 : Palindrome", () => {
  it("should test if word is palindrome", () => {
    expect(isPalindrome("racecar")).toEqual(true);
    expect(isPalindrome("faker")).toEqual(false);
  });
});
