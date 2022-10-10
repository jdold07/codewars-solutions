# 7 kyu - Currying functions: multiply all elements in an array

##### **ID**: [586909e4c66d18dd1800009b](https://www.codewars.com/kata/586909e4c66d18dd1800009b) | **Slug**: [currying-functions-multiply-all-elements-in-an-array](https://www.codewars.com/kata/586909e4c66d18dd1800009b) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2017-01-01 ***by*** [limeyb7](https://www.codewars.com/users/limeyb7) | **Approved**: 2017-01-10 ***by*** [joh_pot](https://www.codewars.com/users/joh_pot)

##### **Languages Available**: javascript, php, csharp, elixir, python, scala, java

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2022-08-27

---

## Kata Description


To complete this Kata you need to make a function `multiplyAll`/`multiply_all` which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array. 



The returned array should consist of each of the elements from the first array multiplied by the integer.



Example:



```javascript

multiplyAll([1, 2, 3])(2) = [2, 4, 6];

```

```php

multiply_all([1, 2, 3])(2); // => [2, 4, 6]

```

```python

multiply_all([1, 2, 3])(2); // => [2, 4, 6]

```

```scala

CurryingFunctions.multiplyAll(Array(1, 2, 3))(2); // => Array(2, 4, 6)

```



You must not mutate the original array.



Here's a [nice Youtube video about currying](https://www.youtube.com/watch?v=iZLP4qOwY8I), which might help you if this is new to you.

---


🏷 `FUNCTIONAL PROGRAMMING | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/586909e4c66d18dd1800009b)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
