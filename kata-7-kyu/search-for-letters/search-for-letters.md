# 7 kyu - Search for letters

##### **ID**: [52dbae61ca039685460001ae](https://www.codewars.com/kata/52dbae61ca039685460001ae) | **Slug**: [search-for-letters](https://www.codewars.com/kata/52dbae61ca039685460001ae) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2014-01-19 ***by*** [Roy Gardiner](https://www.codewars.com/users/Roy%20Gardiner) | **Approved**: 2014-02-17 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: ruby, javascript, csharp, python, haskell, c, rust, typescript

##### **My Completed Languages**: typescript ***as at*** 2024-05-28 | **Originally completed**: 2024-05-28

---

## Kata Description


Create a function which accepts one arbitrary string as an argument, and return a string of length 26.



The objective is to set each of the 26 characters of the output string to either `'1'` or `'0'` based on the fact whether the Nth letter of the alphabet is present in the input (independent of its case).



So if an `'a'` or an `'A'` appears anywhere in the input string (any number of times), set the first character of the output string to `'1'`, otherwise to `'0'`. if `'b'` or `'B'` appears in the string, set the second character to `'1'`, and so on for the rest of the alphabet.



For instance:



```

"a   **&  cZ"  =>  "10100000000000000000000001"

```

---


🏷 `STRINGS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/52dbae61ca039685460001ae)

![](https://www.codewars.com/users/jdold07/badges/large "tsdevau Codewars Badge")

---

###### *This Kata description was compiled by [**tsdevau**](https://tsdev.au) with data provided by the [Codewars.com](https://www.codewars.com) API.*

###### *The solutions in each language code file associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are most often verbatim of those provided by the Kata.  However, in some cases it has been necessary to modify the test cases in order to have them function with my test runners and in my local environment.  On occasion, I may have added additional test cases to those provided.  Also, though I can't recall an instance, there may potentially have been reason to remove test cases for functional reasons.  Some Kata's also require (*or have*) code preloaded for their operation.  This code is included if it was required to make the tests work.  It is clearly identified under a **PRELOAD CODE** header if included.*

###### Most of my solutions are not commented (*though this will hopefully change*) as solutions are rarely submitted with comments on [Codewars.com](https://www.codewars.com).*
