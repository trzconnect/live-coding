import { flattenObject } from "./flattenObject";

describe("Exercise 4: Flatten JSON Object", () => {
  expect(
    flattenObject({
      name: "John Doe",
      age: 30,
      address: {
        city: "New York",
        country: "USA",
        postalCode: "12345",
      },
      hobbies: ["reading", "coding", "gaming"],
      education: {
        degree: "Bachelor's",
        university: "ABC University",
        graduationYear: 2020,
      },
    })
  ).toEqual({
    name: "John Doe",
    age: 30,
    "address.city": "New York",
    "address.country": "USA",
    "address.postalCode": "12345",
    "hobbies.0": "reading",
    "hobbies.1": "coding",
    "hobbies.2": "gaming",
    "education.degree": "Bachelor's",
    "education.university": "ABC University",
    "education.graduationYear": 2020,
  });
});
