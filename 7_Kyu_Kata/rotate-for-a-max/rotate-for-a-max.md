# 7 kyu - Rotate for a Max

##### **ID**: [56a4872cbb65f3a610000026](https://www.codewars.com/kata/56a4872cbb65f3a610000026) | **Slug**: [rotate-for-a-max](https://www.codewars.com/kata/56a4872cbb65f3a610000026) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2016-01-24 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2016-01-28 ***by*** [NaMe613](https://www.codewars.com/users/NaMe613)

##### **Languages Available**: ruby, python, javascript, coffeescript, haskell, clojure, csharp, java, elixir, cpp, php, typescript, crystal, fsharp, c, shell, ocaml, kotlin, julia, r, powershell, go, nim, racket, reason, scala, perl, prolog, rust, lua, factor

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2022-08-25

---

## Kata Description


Let us begin with an example:



Take a number: `56789`. Rotate left, you get `67895`. 



Keep the first digit in place and rotate left the other digits: `68957`. 



Keep the first two digits in place and rotate the other ones: `68579`. 



Keep the first three digits and rotate left the rest:

`68597`. 

Now it is over since keeping the first four it remains only one digit which

rotated is itself.



You have the following sequence of numbers:



`56789 -> 67895 -> 68957 -> 68579 -> 68597`



and you must return the greatest: `68957`.



#### Task



~~~if-not:factor

Write `function max_rot(n)` which given a positive integer `n` returns the maximum number you got doing rotations similar to the above example.



So `max_rot` (or `maxRot` or ... depending on the language) is such as:



- `max_rot(56789) should return 68957`



- `max_rot(38458215) should return 85821534`

~~~



~~~if:factor

Write a word `max-rot ( n -- max )` which given a positive integer `n` returns the maximum number you got doing rotations similar to the above example.



Here are a few example inputs:



- `56789 max-rot` should return `68957`



- `38458215 max-rot` should return `85821534`

~~~

---


🏷 `ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/56a4872cbb65f3a610000026)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
