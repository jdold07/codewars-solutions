# 6 kyu - Array Deep Count

##### **ID**: [596f72bbe7cd7296d1000029](https://www.codewars.com/kata/596f72bbe7cd7296d1000029) | **Slug**: [array-deep-count](https://www.codewars.com/kata/596f72bbe7cd7296d1000029) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2017-07-24 ***by*** [hannahcmtucker](https://www.codewars.com/users/hannahcmtucker) | **Approved**: 2017-07-28 ***by*** [smile67](https://www.codewars.com/users/smile67)

##### **Languages Available**: javascript, ruby, csharp, php, python

##### **My Completed Languages**: javascript ***as at*** 2022-10-18 | **Originally completed**: 2022-10-18

---

## Kata Description


You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.





## Examples



```python

[]                   -->  0

[1, 2, 3]            -->  3

["x", "y", ["z"]]    -->  4

[1, 2, [3, 4, [5]]]  -->  7

```



The input will always be an array.



```if:php

In PHP you may *not* assume that the array passed in will be non-associative.



Please note that `count()`, `eval()` and `COUNT_RECURSIVE` are disallowed - you should be able to implement the logic for `deep_c()` yourself ;)

```



---


🏷 `ARRAYS | RECURSION | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/596f72bbe7cd7296d1000029)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.*

###### *The solutions in each language code file associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are most often verbatim of those provided by the Kata.  However, in some cases it has been necessary to modify the test cases in order to have them function with my test runners and in my local environment.  On occasion, I may have added additional test cases to those provided.  Also, though I can't recall an instance, there may potentially have been reason to remove test cases for functional reasons.  Some Kata's also require (*or have*) code preloaded for their operation.  This code is included if it was required to make the tests work.  It is clearly identified under a **PRELOAD CODE** header if included.*

###### Most of my solutions are not commented (*though this will hopefully change*) as solutions are rarely submitted with comments on [Codewars.com](https://www.codewars.com).*
