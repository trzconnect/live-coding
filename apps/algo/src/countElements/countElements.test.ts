import { countElements } from "./countElements";

describe("Exercise 1: Letter Occurrences", () => {
  it("should test occurence letters", () => {
    expect(countElements(["abc", "bcd", "acd"])).toEqual({
      a: 2,
      b: 2,
      c: 3,
      d: 2,
    });
  });
});
