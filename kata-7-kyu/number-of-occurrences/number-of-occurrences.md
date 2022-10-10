# 7 kyu - Number Of Occurrences

##### **ID**: [52829c5fe08baf7edc00122b](https://www.codewars.com/kata/52829c5fe08baf7edc00122b) | **Slug**: [number-of-occurrences](https://www.codewars.com/kata/52829c5fe08baf7edc00122b) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2013-11-12 **_by_** [madmed88](https://www.codewars.com/users/madmed88) | **Approved**: 2013-12-02 **_by_** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript, coffeescript, haskell, python, csharp, cfml, prolog

##### **My Completed Languages**: javascript **_as at_** 2022-10-08 | **Originally completed**: 2022-09-23

---

## Kata Description

Write a function that returns the number of occurrences of an element in an array.

### Examples

```javascript
let arr = [0, 1, 2, 2, 3]

arr.numberOfOccurrences(0) === 1

arr.numberOfOccurrences(4) === 0

arr.numberOfOccurrences(2) === 2

arr.numberOfOccurrences("a") === 0
```

```haskell

let sample = [0, 1, 2, 2, 3]

numberOfOccurrences 0 sample `shouldBe` 1

numberOfOccurrences 4 sample `shouldBe` 0

numberOfOccurrences 2 sample `shouldBe` 2

```

```python

sample = [0, 1, 2, 2, 3]

number_of_occurrences(0, sample) == 1

number_of_occurrences(4, sample) == 0

number_of_occurrences(2, sample) == 2

number_of_occurrences(3, sample) == 1

```

```csharp

let sample = { 1, 0, 2, 2, 3 };

NumberOfOccurrences(0, sample) == 1;

NumberOfOccurrences(4, sample) == 0;

NumberOfOccurrences(2, sample) == 2;

NumberOfOccurrences(3, sample) == 1;

```

```cfml

let sample = [ 1, 0, 2, 2, 3 ]

numberOfOccurences(0, sample) == 1

numberOfOccurences(4, sample) == 0

numberOfOccurences(2, sample) == 2

numberOfOccurences(3, sample) == 1

```

```prolog

sample = [ 1, 0, 2, 2, 3 ].

number_of_occurrences(0, sample, 1).

number_of_occurrences(4, sample, 0).

number_of_occurrences(2, sample, 2).

number_of_occurrences(3, sample, 1).

```

---

🏷 `ARRAYS | FUNDAMENTALS`

[View this Kata on Codewars.com](https://www.codewars.com/kata/52829c5fe08baf7edc00122b)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### _This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API. The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file. Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution. My solutions are not always commented as the solutions are rarely submitted with comments._
