# 7 kyu - Broken sequence

##### **ID**: [5512e5662b34d88e44000060](https://www.codewars.com/kata/5512e5662b34d88e44000060) | **Slug**: [broken-sequence](https://www.codewars.com/kata/5512e5662b34d88e44000060) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2015-03-25 ***by*** [suuuzi](https://www.codewars.com/users/suuuzi) | **Approved**: 2016-11-06 ***by*** [PG1](https://www.codewars.com/users/PG1)

##### **Languages Available**: java, python, javascript, ruby

##### **My Completed Languages**: javascript ***as at*** 2022-10-18 | **Originally completed**: 2022-10-18

---

## Kata Description


You receive some random elements as a space-delimited string. Check if the elements are part of an ascending sequence of integers starting with 1, with an increment of 1 (e.g. 1, 2, 3, 4).



Return:



* `0` if the elements can form such a sequence, and no number is missing ("not broken", e.g. `"1 2 4 3"`)

* `1` if there are any non-numeric elements in the input ("invalid", e.g. `"1 2 a"`)

* `n` if the elements are part of such a sequence, but some numbers are missing, and `n` is the lowest of them ("broken", e.g. `"1 2 4"` or `"1 5"`)





## Examples

```

"1 2 3 4"  ==>  return 0, because the sequence is complete



"1 2 4 3"  ==>  return 0, because the sequence is complete (order doesn't matter)



"2 1 3 a"  ==>  return 1, because it contains a non numerical character



"1 3 2 5"  ==>  return 4, because 4 is missing from the sequence



"1 5"      ==>  return 2, because the sequence is missing 2, 3, 4 and 2 is the lowest



```

---


🏷 `STRINGS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5512e5662b34d88e44000060)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.*

###### *The solutions in each language code file associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are most often verbatim of those provided by the Kata.  However, in some cases it has been necessary to modify the test cases in order to have them function with my test runners and in my local environment.  On occasion, I may have added additional test cases to those provided.  Also, though I can't recall an instance, there may potentially have been reason to remove test cases for functional reasons.  Some Kata's also require (*or have*) code preloaded for their operation.  This code is included if it was required to make the tests work.  It is clearly identified under a **PRELOAD CODE** header if included.*

###### Most of my solutions are not commented (*though this will hopefully change*) as solutions are rarely submitted with comments on [Codewars.com](https://www.codewars.com).*
