# 7 kyu - Complementary DNA

##### **ID**: [554e4a2f232cdd87d9000038](https://www.codewars.com/kata/554e4a2f232cdd87d9000038) | **Slug**: [complementary-dna](https://www.codewars.com/kata/554e4a2f232cdd87d9000038) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2015-05-09 ***by*** [JustyFY](https://www.codewars.com/users/JustyFY) | **Approved**: 2015-05-13 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: python, javascript, ruby, coffeescript, java, haskell, cpp, csharp, crystal, php, shell, rust, typescript, clojure, c, go, nasm, kotlin, julia, prolog, elixir, r, scala, cobol, d

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2021-11-16

---

## Kata Description


Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.



If you want to know more: http://en.wikipedia.org/wiki/DNA



In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 

Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).



More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)



Example: (**input --> output**)

~~~if-not:haskell

```

"ATTGC" --> "TAACG"

"GTAT" --> "CATA"

```

~~~

```if:haskell

dnaStrand []        `shouldBe` []

dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]

dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]

dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

```



---


🏷 `STRINGS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/554e4a2f232cdd87d9000038)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
