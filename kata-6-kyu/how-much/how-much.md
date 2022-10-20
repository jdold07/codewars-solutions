# 6 kyu - How Much?

##### **ID**: [55b4d87a3766d9873a0000d4](https://www.codewars.com/kata/55b4d87a3766d9873a0000d4) | **Slug**: [how-much](https://www.codewars.com/kata/55b4d87a3766d9873a0000d4) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2015-07-26 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2015-09-06 ***by*** [GiacomoSorbi](https://www.codewars.com/users/GiacomoSorbi)

##### **Languages Available**: ruby, python, javascript, haskell, java, csharp, clojure, coffeescript, typescript, cpp, elixir, php, crystal, fsharp, c, rust, swift, go, r, shell, ocaml, kotlin, fortran, julia, scala, powershell, nim, reason, racket, prolog, pascal, factor, lua, dart, perl, elm, d, erlang

##### **My Completed Languages**: typescript, javascript ***as at*** 2022-10-20 | **Originally completed**: 2022-10-20

---

## Kata Description


I always thought that my old friend John was rather richer than he looked, but I never knew exactly how much money he actually had. One day (as I was plying him with questions) he said:



* "Imagine I have between `m` and `n` Zloty..." (or did he say Quetzal? I can't remember!)

* "If I were to buy **9** cars costing `c` each, I'd only have 1 Zloty (or was it Meticals?) left."

* "And if I were to buy **7** boats at `b` each, I'd only have 2 Ringglets (or was it Zloty?) left."



Could you tell me in each possible case:



1. how much money `f` he could possibly have ?

2. the cost `c` of a car?

3. the cost `b` of a boat?



So, I will have a better idea about his fortune. Note that if `m-n` is big enough, you might have a lot of possible answers. 



Each answer should be given as `["M: f", "B: b", "C: c"]` and all the answers as `[ ["M: f", "B: b", "C: c"], ... ]`. "M" stands for money, "B" for boats, "C" for cars.



**Note:** `m, n, f, b, c` are positive integers, where `0 <= m <= n` or `m >= n >= 0`. `m` and `n` are inclusive.





#### Examples:

```

howmuch(1, 100)      => [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"]]

howmuch(1000, 1100)  => [["M: 1045", "B: 149", "C: 116"]]

howmuch(10000, 9950) => [["M: 9991", "B: 1427", "C: 1110"]]

howmuch(0, 200)      => [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"], ["M: 163", "B: 23", "C: 18"]]

```



Explanation of the results for `howmuch(1, 100)`:



* In the first answer his possible fortune is **37**:

 * so he can buy 7 boats each worth 5: `37 - 7 * 5 = 2`

 * or he can buy 9 cars worth 4 each: `37 - 9 * 4 = 1`

* The second possible answer is **100**:

 * he can buy 7 boats each worth 14: `100 - 7 * 14 = 2`

 * or he can buy 9 cars worth 11: `100 - 9 * 11 = 1`



#### Note

See "Sample Tests" to know the format of the return.



---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/55b4d87a3766d9873a0000d4)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.*

###### *The solutions in each language code file associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are most often verbatim of those provided by the Kata.  However, in some cases it has been necessary to modify the test cases in order to have them function with my test runners and in my local environment.  On occasion, I may have added additional test cases to those provided.  Also, though I can't recall an instance, there may potentially have been reason to remove test cases for functional reasons.  Some Kata's also require (*or have*) code preloaded for their operation.  This code is included if it was required to make the tests work.  It is clearly identified under a **PRELOAD CODE** header if included.*

###### Most of my solutions are not commented (*though this will hopefully change*) as solutions are rarely submitted with comments on [Codewars.com](https://www.codewars.com).*
