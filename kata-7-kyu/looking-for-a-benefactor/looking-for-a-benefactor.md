# 7 kyu - Looking for a benefactor

##### **ID**: [569b5cec755dd3534d00000f](https://www.codewars.com/kata/569b5cec755dd3534d00000f) | **Slug**: [looking-for-a-benefactor](https://www.codewars.com/kata/569b5cec755dd3534d00000f) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2016-01-17 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2016-01-18 ***by*** [GiacomoSorbi](https://www.codewars.com/users/GiacomoSorbi)

##### **Languages Available**: ruby, python, javascript, coffeescript, java, csharp, clojure, haskell, elixir, typescript, cpp, php, crystal, fsharp, c, ocaml, rust, r, nim, shell, kotlin, fortran, julia, powershell, go, reason, racket, scala, prolog, lua, pascal, perl, elm, d, erlang

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2022-09-22

---

## Kata Description


The accounts of the "Fat to Fit Club (FFC)" association are supervised by John as a volunteered accountant.

The association is funded through financial donations from generous benefactors. John has a list of

the first `n` donations: `[14, 30, 5, 7, 9, 11, 15]`

He wants to know how much the next benefactor should give to the association so that the 

average of the first `n + 1` donations should reach an average of `30`.

After doing the math he found `149`. He thinks that he could have made a mistake.



if `dons = [14, 30, 5, 7, 9, 11, 15]` then `new_avg(dons, 30) --> 149`



Could you help him?



## Task

The function `new_avg(arr, navg)` should return the expected donation

(rounded up to the next integer) that will permit to reach the average `navg`. 



Should the last donation be a non positive number `(<= 0)` John wants us: 



- to return:

  - Nothing in Haskell, Elm

  - None in F#, Ocaml, Rust, Scala

  - `-1` in C, D, Fortran,  Nim, PowerShell, Go, Pascal, Prolog, Lua, Perl, Erlang



- or to throw an error (some **examples** for such a case):



  - IllegalArgumentException() in Clojure, Java

  - ArgumentException() in C#

  - echo `ERROR` in Shell

  - argument-error in Racket

  - std::invalid_argument in C++

  - ValueError in Python



So, he will clearly see that his expectations are not great enough. 

*In "Sample Tests" you can see what to return.*





### Notes: 



- all donations and `navg` are numbers (integers or floats), `arr` can be empty.

- See examples below and "Sample Tests" to see which return is to be done.



```

new_avg([14, 30, 5, 7, 9, 11, 15], 92) should return 645

new_avg([14, 30, 5, 7, 9, 11, 15], 2) 

should raise an error (ValueError or invalid_argument or argument-error or DomainError or ... ) 

or return `-1` or ERROR or Nothing or None depending on the language.

```







---


🏷 `FUNDAMENTALS | ARRAYS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/569b5cec755dd3534d00000f)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
