# 7 kyu - Sum of a sequence

##### **ID**: [586f6741c66d18c22800010a](https://www.codewars.com/kata/586f6741c66d18c22800010a) | **Slug**: [sum-of-a-sequence](https://www.codewars.com/kata/586f6741c66d18c22800010a) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2017-01-06 ***by*** [fyvfyv](https://www.codewars.com/users/fyvfyv) | **Approved**: 2017-01-10 ***by*** [donaldsebleung](https://www.codewars.com/users/donaldsebleung)

##### **Languages Available**: javascript, php, haskell, python, ruby, crystal, coffeescript, csharp, cpp, c, nasm, cobol, nim, factor, d, go, rust, scala

##### **My Completed Languages**: python ***as at*** 2022-10-02 | **Originally completed**: 2022-04-22

---

## Kata Description


Your task is to make function, which returns the sum of a sequence of integers.



The sequence is defined by 3 non-negative values: **begin**, **end**, **step (inclusive)**.



If **begin** value is greater than the **end**, function should returns **0**



**Examples**



~~~if-not:nasm

```

2,2,2 --> 2

2,6,2 --> 12 (2 + 4 + 6)

1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)

1,5,3  --> 5 (1 + 4)

```

~~~



```if:nasm

mov edi, 2

mov esi, 2

mov edx, 2

call sequence_sum    ; EAX <- 2



mov edi, 2

mov esi, 6

mov edx, 2

call sequence_sum    ; EAX <- 12 = 2 + 4 + 6



mov edi, 1

mov esi, 5

mov edx, 1

call sequence_sum    ; EAX <- 15 = 1 + 2 + 3 + 4 + 5



mov edi, 1

mov esi, 5

mov edx, 3

call sequence_sum    ; EAX <- 5 = 1 + 4

```



This is the first kata in the series:



1) Sum of a sequence (this kata)  

2) [Sum of a Sequence [Hard-Core Version]](https://www.codewars.com/kata/sum-of-a-sequence-hard-core-version/javascript)



---


🏷 `FUNDAMENTALS | ALGORITHMS | MATHEMATICS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/586f6741c66d18c22800010a)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
