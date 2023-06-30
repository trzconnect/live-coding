import { pairElements } from "./pairElements";

describe("Exercise 3: Unique Letter Pairs", () => {
  it("should test pairs", () => {
    expect(pairElements("hello")).toEqual(["he", "hl", "ho", "el", "eo", "lo"]);
  });
});
