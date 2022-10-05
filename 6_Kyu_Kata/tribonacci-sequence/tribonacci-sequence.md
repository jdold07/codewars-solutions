# 6 kyu - Tribonacci Sequence

##### **ID**: [556deca17c58da83c00002db](https://www.codewars.com/kata/556deca17c58da83c00002db) | **Slug**: [tribonacci-sequence](https://www.codewars.com/kata/556deca17c58da83c00002db) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2015-06-02 ***by*** [GiacomoSorbi](https://www.codewars.com/users/GiacomoSorbi) | **Approved**: 2015-06-05 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: python, javascript, ruby, haskell, java, coffeescript, csharp, elixir, fsharp, ocaml, crystal, php, swift, cpp, scala, kotlin, c, rust, reason, elm, clojure, go, typescript, dart, factor, groovy, julia, r, racket, cobol

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2021-11-15

---

## Kata Description


Well met with Fibonacci bigger brother, AKA Tribonacci.



As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(



So, if we are to start our Tribonacci sequence with `[1, 1, 1]` as a starting input (AKA *signature*), we have this sequence:



```

[1, 1 ,1, 3, 5, 9, 17, 31, ...]

```



But what if we started with `[0, 0, 1]` as a signature? As starting with `[0, 1]` instead of `[1, 1]` basically *shifts* the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:



```

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]

```



Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a **signature** array/list, returns **the first n elements - signature included** of the so seeded sequence.



Signature will always contain 3 numbers; n will always be a non-negative number; if `n == 0`, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)



If you enjoyed this kata more advanced and generalized version of it can be found in the <a href="http://www.codewars.com/kata/fibonacci-tribonacci-and-friends"  target="_blank" title="Xbonacci sequence">Xbonacci kata</a>



*[Personal thanks to Professor <a href="https://www.coursera.org/instructor/jimfowler" target="_blank" title="Jim Fowler">Jim Fowler</a> on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]*

---


🏷 `NUMBER THEORY | ARRAYS | LISTS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/556deca17c58da83c00002db)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
