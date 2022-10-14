# 6 kyu - Simple decrypt algo

##### **ID**: [58693136b98de0e4910001ab](https://www.codewars.com/kata/58693136b98de0e4910001ab) | **Slug**: [simple-decrypt-algo](https://www.codewars.com/kata/58693136b98de0e4910001ab) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2017-01-01 ***by*** [mkelty](https://www.codewars.com/users/mkelty) | **Approved**: 2017-01-05 ***by*** [damjan](https://www.codewars.com/users/damjan)

##### **Languages Available**: python, haskell, c, ruby, javascript

##### **My Completed Languages**: javascript ***as at*** 2022-10-14 | **Originally completed**: 2022-10-13

---

## Kata Description


You'll be given a string of random characters (numbers, letters, and symbols). To decode this string into the key we're searching for: 





(1) count the number occurences of each ascii lowercase letter, and



(2) return an ordered string, 26 places long, corresponding to the number of occurences for each corresponding letter in the alphabet.



For example:

```python

'$aaaa#bbb*cc^fff!z' gives '43200300000000000000000001'

   ^    ^   ^  ^  ^         ^^^  ^                   ^

  [4]  [3] [2][3][1]        abc  f                   z

  

'z$aaa#ccc%eee1234567890' gives '30303000000000000000000001'

 ^  ^   ^   ^                    ^ ^ ^                    ^

[1][3] [3] [3]                   a c e                    z

```

Remember, the string returned should always be 26 characters long, and only count lowercase letters. 



Note: You can assume that each lowercase letter will appears a maximum of 9 times in the input string.

---


🏷 `STRINGS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/58693136b98de0e4910001ab)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.*

###### *The solutions in each language code file associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are most often verbatim of those provided by the Kata.  However, in some cases it has been necessary to modify the test cases in order to have them function with my test runners and in my local environment.  On occasion, I may have added additional test cases to those provided.  Also, though I can't recall an instance, there may potentially have been reason to remove test cases for functional reasons.  Some Kata's also require (*or have*) code preloaded for their operation.  This code is included if it was required to make the tests work.  It is clearly identified under a **PRELOAD CODE** header if included.*

###### Most of my solutions are not commented (*though this will hopefully change*) as solutions are rarely submitted with comments on [Codewars.com](https://www.codewars.com).*
