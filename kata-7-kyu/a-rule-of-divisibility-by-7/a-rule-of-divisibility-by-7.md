# 7 kyu - A Rule of Divisibility by 7

##### **ID**: [55e6f5e58f7817808e00002e](https://www.codewars.com/kata/55e6f5e58f7817808e00002e) | **Slug**: [a-rule-of-divisibility-by-7](https://www.codewars.com/kata/55e6f5e58f7817808e00002e) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2015-09-02 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2015-09-17 ***by*** [NaMe613](https://www.codewars.com/users/NaMe613)

##### **Languages Available**: ruby, python, javascript, haskell, java, csharp, clojure, coffeescript, typescript, elixir, cpp, php, crystal, fsharp, c, shell, ocaml, kotlin, nasm, julia, r, powershell, go, nim, rust, reason, racket, forth, factor, scala, prolog, fortran, haxe, dart, pascal, lua, perl, cobol, d, erlang

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2022-08-29

---

## Kata Description


A number m of the form 10x + y is divisible by 7 if and only if x − 2y is divisible by 7. In other words, subtract twice the last digit 

from the number formed by the remaining digits. Continue to do this until a number known to be divisible by 7 is obtained; 

you can stop when this number has *at most* 2 digits because you are supposed to know if a number of at most 2 digits is divisible by 7 or not.



The original number is divisible by 7 if and only if the last number obtained using this procedure is divisible by 7. 



#### Examples:



1 - `m = 371 -> 37 − (2×1) -> 37 − 2 = 35` ; thus, since 35 is divisible by 7, 371 is divisible by 7. 



The number of steps to get the result is `1`.



2 - `m = 1603 -> 160 - (2 x 3) -> 154 -> 15 - 8 = 7` and 7 is divisible by 7. 



3 - `m = 372 -> 37 − (2×2) -> 37 − 4 = 33` ; thus, since 33 is not divisible by 7, 372 is not divisible by 7. 



4 - `m = 477557101->47755708->4775554->477547->47740->4774->469->28` and 28 is divisible by 7, so is 477557101. 

The number of steps is 7.



#### Task:



Your task is to return to the function ```seven(m)``` (m integer >= 0) an array (or a pair, depending on the language) of numbers, 

the first being the *last* number `m` with at most 2 digits obtained by your function (this last `m` will be divisible or not by 7), the second one being the number of steps to get the result.



#### Forth Note:

Return on the stack `number-of-steps, last-number-m-with-at-most-2-digits `



#### Examples:



```

seven(371) should return [35, 1]

seven(1603) should return [7, 2]

seven(477557101) should return [28, 7]

```



---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/55e6f5e58f7817808e00002e)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
