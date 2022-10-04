# 7 kyu - Speed Control

##### **ID**: [56484848ba95170a8000004d](https://www.codewars.com/kata/56484848ba95170a8000004d) | **Slug**: [speed-control](https://www.codewars.com/kata/56484848ba95170a8000004d) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2015-11-15 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2015-11-19 ***by*** [NaMe613](https://www.codewars.com/users/NaMe613)

##### **Languages Available**: ruby, python, javascript, haskell, csharp, java, coffeescript, clojure, cpp, php, elixir, crystal, fsharp, c, typescript, ocaml, shell, kotlin, julia, r, powershell, go, nim, rust, reason, racket, scala, dart, lua, perl, d, erlang, nasm

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2022-09-11

---

## Kata Description


In John's car the GPS records every `s` seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit).

For example, below is part of a record with `s = 15`:



    x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]

The sections are:



    0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25

  

We can calculate John's average hourly speed on every section and we get:



    [45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]

Given `s` and `x` the task is to return as an integer the `*floor*` of the maximum average speed per hour obtained on the sections of `x`. 

If x length is less than or equal to 1 return `0` since the car didn't move.



#### Example:

with the above data your function `gps(s, x)`should return `74`



#### Note

With floats it can happen that results depends on the operations order. To calculate hourly speed you can use: 



` (3600 * delta_distance) / s`.



---


🏷 `FUNDAMENTALS | MATHEMATICS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/56484848ba95170a8000004d)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
