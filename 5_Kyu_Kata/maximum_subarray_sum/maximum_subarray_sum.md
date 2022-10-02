# 5 kyu - Maximum  subarray sum

##### **ID**: [54521e9ec8e60bc4de000d6c](https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c) | **Slug**: [maximum-subarray-sum](https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">5 kyu</span>

##### **First Published**: 2014-10-30 ***by*** [knotman90](https://www.codewars.com/users/knotman90) | **Approved**: 2014-12-08 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: haskell, javascript, python, clojure, java, ruby, go, csharp, c, cpp, kotlin, rust

##### **My Completed Languages**: python ***as at*** 2022-10-02 | **Originally completed**: 2022-05-02

---

## Kata Description


The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:



```haskell

maxSequence [-2, 1, -3, 4, -1, 2, 1, -5, 4]

-- should be 6: [4, -1, 2, 1]

```

```javascript

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])

// should be 6: [4, -1, 2, 1]

```

```python

max_sequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])

# should be 6: [4, -1, 2, 1]

```

```clojure

(max-sequence [-2, 1, -3, 4, -1, 2, 1, -5, 4])

;; should be 6: [4, -1, 2, 1]

```

```java

Max.sequence(new int[]{-2, 1, -3, 4, -1, 2, 1, -5, 4});

// should be 6: {4, -1, 2, 1}

```

```kotlin

maxSequence(listOf(-2, 1, -3, 4, -1, 2, 1, -5, 4));

// should be 6: listOf(4, -1, 2, 1)

```

```c

maxSequence({-2, 1, -3, 4, -1, 2, 1, -5, 4}, 9)

// should return 6, from sub-array: {4, -1, 2, 1}

```

```cpp

maxSequence({-2, 1, -3, 4, -1, 2, 1, -5, 4});

//should be 6: {4, -1, 2, 1}

```

```rust

max_sequence(&[-2, 1, -3, 4, -1, 2, 1, -5, 4]);

//should be 6: [4, -1, 2, 1]

```



Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.



Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.



---


🏷 `ALGORITHMS | LISTS | DYNAMIC PROGRAMMING | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
