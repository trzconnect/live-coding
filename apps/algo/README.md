# Algorithm tests

## Exercise 1: Letter Occurrences

Write an algorithm that takes an array of strings as input and counts the occurrences of each letter in the strings. The algorithm should return a dictionary where the keys are the letters and the values are their occurrences.

**Example**:

```typescript
const strings = ["apple", "banana", "cherry"];
const result = countLetterOccurrences(strings);
```

**Output**

```json
{
  "a": 4,
  "b": 1,
  "c": 1,
  "e": 2,
  "l": 1,
  "n": 2,
  "p": 2,
  "r": 2,
  "y": 1
}
```

## Exercise 2: Palindrome Check

Write a method that takes a string as input and checks if it is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward. The algorithm should return true if the string is a palindrome, and false otherwise.

**Example**:

```typescript
Copy code
const string = "racecar";
const result = isPalindrome(string);
```

**Output**

```json
true
```

## Exercise 3: Unique Letter Pairs

Write an algorithm that takes a string as input and lists all possible pairs of unique letters from the string. A pair consists of two different letters in the string, and the order of the letters in the pair matters. The algorithm should return a list of unique letter pairs.

**Example**

```typescript
const string = "hello";
const result = listUniqueLetterPairs(string);
```

**Output**

```json
["he", "hl", "ho", "el", "eo", "lo"]
```

## Exercise 4: Flatten JSON Object

Write an algorithm that takes a JSON object with arbitrary depth as input and flattens it into a single-level object, with keys representing the path of each key in the original object.

The algorithm should handle objects and arrays within the JSON object and include their values in the flattened object as well. The keys in the flattened object should be constructed by concatenating the key names along the path with a dot (.) separator.

**Example**

```typescript
const jsonObject = {
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
};

const result = flattenJsonObject(jsonObject);
```

**Output**

```json
{
  "name": "John Doe",
  "age": 30,
  "address.city": "New York",
  "address.country": "USA",
  "address.postalCode": "12345",
  "hobbies.0": "reading",
  "hobbies.1": "coding",
  "hobbies.2": "gaming",
  "education.degree": "Bachelor's",
  "education.university": "ABC University",
  "education.graduationYear": 2020
}
```
