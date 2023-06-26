import { isPalindrome } from "./isPalindrome";

describe("Exercise 2: Palindrome Check", () => {
  expect(isPalindrome("racecar")).toEqual(true);
  expect(isPalindrome("faker")).toEqual(false);
});
