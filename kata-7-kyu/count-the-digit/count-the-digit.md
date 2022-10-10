# 7 kyu - Count the Digit

##### **ID**: [566fc12495810954b1000030](https://www.codewars.com/kata/566fc12495810954b1000030) | **Slug**: [count-the-digit](https://www.codewars.com/kata/566fc12495810954b1000030) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2015-12-15 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2015-12-24 ***by*** [NaMe613](https://www.codewars.com/users/NaMe613)

##### **Languages Available**: ruby, python, javascript, coffeescript, haskell, java, csharp, clojure, elixir, cpp, php, crystal, fsharp, typescript, c, shell, ocaml, kotlin, fortran, swift, nasm, julia, r, powershell, go, nim, rust, reason, racket, scala, groovy, haxe, pascal, dart, perl, prolog, lua, elm, cobol, d, erlang

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2021-11-22

---

## Kata Description


Take an integer `n (n >= 0)` and a digit `d (0 <= d <= 9)` as an integer. 



Square all numbers `k (0 <= k <= n)` between 0 and n. 



Count the numbers of digits `d` used in the writing of all the `k**2`. 



Call `nb_dig` (or nbDig or ...) the function taking `n` and `d` as parameters and returning this count.



#### Examples:

```

n = 10, d = 1 

the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100

We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.



nb_dig(25, 1) returns 11 since

the k*k that contain the digit 1 are:

1, 16, 81, 100, 121, 144, 169, 196, 361, 441.

So there are 11 digits 1 for the squares of numbers between 0 and 25.

```

Note that `121` has twice the digit 1.

---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/566fc12495810954b1000030)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
