# 6 kyu - Tortoise racing

##### **ID**: [55e2adece53b4cdcb900006c](https://www.codewars.com/kata/55e2adece53b4cdcb900006c) | **Slug**: [tortoise-racing](https://www.codewars.com/kata/55e2adece53b4cdcb900006c) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2015-08-30 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2015-11-06 ***by*** [joh_pot](https://www.codewars.com/users/joh_pot)

##### **Languages Available**: ruby, python, javascript, haskell, java, csharp, clojure, coffeescript, cpp, php, crystal, fsharp, c, typescript, rust, swift, go, r, nim, shell, ocaml, kotlin, groovy, fortran, elixir, julia, scala, powershell, reason, racket, pascal, lua, perl, elm, cobol, d, erlang, prolog

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2021-11-10

---

## Kata Description


Two tortoises named ***A*** and ***B*** must run a race. ***A*** starts with an average speed of ```720 feet per hour```.

Young ***B*** knows she runs faster than ***A***, and furthermore has not finished her cabbage.



When she starts, at last, she can see that ***A*** has a `70 feet lead` but ***B***'s speed is `850 feet per hour`.

How long will it take ***B*** to catch ***A***?



More generally:

given two speeds `v1` (***A***'s speed, integer > 0) and `v2` (***B***'s speed, integer > 0) and a lead `g` (integer > 0)

how long will it take ***B*** to catch ***A***? 



The result will be an array ```[hour, min, sec]``` which is the time needed in hours, minutes and seconds (round down to the nearest second)

or a string in some languages.



If `v1 >= v2` then return `nil`, `nothing`, `null`, `None` or `{-1, -1, -1}` for C++, C, Go, Nim, Pascal, COBOL, Erlang, `[-1, -1, -1]` for Perl,`[]` for Kotlin or "-1 -1 -1".



#### Examples:

(form of the result depends on the language)

```

race(720, 850, 70) => [0, 32, 18] or "0 32 18"

race(80, 91, 37)   => [3, 21, 49] or "3 21 49"

```



#### Note: 



- See other examples in "Your test cases".



- In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.



** Hints for people who don't know how to convert to hours, minutes, seconds:



- Tortoises don't care about fractions of seconds

- Think of calculation by hand using only integers (in your code use or simulate integer division)

- or Google: "convert decimal time to hours minutes seconds"



---


🏷 `FUNDAMENTALS | MATHEMATICS | ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/55e2adece53b4cdcb900006c)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
