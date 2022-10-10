# 6 kyu - Playing with passphrases

##### **ID**: [559536379512a64472000053](https://www.codewars.com/kata/559536379512a64472000053) | **Slug**: [playing-with-passphrases](https://www.codewars.com/kata/559536379512a64472000053) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2015-07-02 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2015-07-10 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: ruby, python, csharp, java, javascript, haskell, coffeescript, clojure, typescript, cpp, php, crystal, c, swift, fsharp, shell, ocaml, julia, scala, r, nasm, powershell, go, nim, rust, racket, kotlin, pascal, perl, elm, d, prolog

##### **My Completed Languages**: python ***as at*** 2022-10-08 | **Originally completed**: 2022-05-01

---

## Kata Description


Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently

they can be guessed due to common cultural references.

You  can get your passphrases stronger by different means. One is the following:



choose a text in capital letters including or not digits and non alphabetic characters,

 

1. shift each letter by a given number but the transformed letter must be a letter (circular shift), 

2. replace each digit by its complement to 9, 

3. keep such as non alphabetic and non digit characters, 

4. downcase each letter in odd position, upcase each letter in even position (the first character is in position 0), 

5. reverse the whole result.



#### Example:



your text: "BORN IN 2015!", shift 1



1 + 2 + 3 -> "CPSO JO 7984!"



4 "CpSo jO 7984!"



5 "!4897 Oj oSpC"



With longer passphrases it's better to have a small and easy program.

Would you write it?



https://en.wikipedia.org/wiki/Passphrase

---


🏷 `STRINGS | ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/559536379512a64472000053)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
