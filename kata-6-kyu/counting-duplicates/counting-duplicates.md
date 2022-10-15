# 6 kyu - Counting Duplicates

##### **ID**: [54bf1c2cd5b56cc47f0007a1](https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1) | **Slug**: [counting-duplicates](https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2015-01-21 ***by*** [kgashok](https://www.codewars.com/users/kgashok) | **Approved**: 2015-02-02 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: python, javascript, ruby, haskell, csharp, elixir, shell, cpp, java, clojure, r, go, c, kotlin, scala, php, coffeescript, purescript, typescript, julia, fsharp, swift, dart, rust, nasm, crystal, racket, groovy, cobol, d

##### **My Completed Languages**: javascript, typescript ***as at*** 2022-10-15 | **Originally completed**: 2021-11-14

---

## Kata Description


### Count the number of Duplicates



Write a function that will return the count of **distinct case-insensitive** alphabetic characters and numeric digits that occur more than 

once in the input string. 

The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.





### Example

"abcde" -> 0             `# no characters repeats more than once`  

"aabbcde" -> 2           `# 'a' and 'b'`  

"aabBcde" -> 2           ``# 'a' occurs twice and 'b' twice (`b` and `B`)``  

"indivisibility" -> 1    `# 'i' occurs six times`  

"Indivisibilities" -> 2  `# 'i' occurs seven times and 's' occurs twice`  

"aA11" -> 2              `# 'a' and '1'`  

"ABBA" -> 2              `# 'A' and 'B' each occur twice`



---


🏷 `STRINGS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.*

###### *The solutions in each language code file associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are most often verbatim of those provided by the Kata.  However, in some cases it has been necessary to modify the test cases in order to have them function with my test runners and in my local environment.  On occasion, I may have added additional test cases to those provided.  Also, though I can't recall an instance, there may potentially have been reason to remove test cases for functional reasons.  Some Kata's also require (*or have*) code preloaded for their operation.  This code is included if it was required to make the tests work.  It is clearly identified under a **PRELOAD CODE** header if included.*

###### Most of my solutions are not commented (*though this will hopefully change*) as solutions are rarely submitted with comments on [Codewars.com](https://www.codewars.com).*
