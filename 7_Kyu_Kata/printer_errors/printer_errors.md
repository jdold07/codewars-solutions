# 7 kyu - Printer Errors

##### **ID**: [56541980fa08ab47a0000040](https://www.codewars.com/kata/56541980fa08ab47a0000040) | **Slug**: [printer-errors](https://www.codewars.com/kata/56541980fa08ab47a0000040) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2015-11-24 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2015-11-24 ***by*** [NaMe613](https://www.codewars.com/users/NaMe613)

##### **Languages Available**: ruby, python, javascript, coffeescript, csharp, java, haskell, clojure, elixir, typescript, cpp, php, crystal, fsharp, c, shell, ocaml, groovy, nasm, julia, go, r, kotlin, powershell, nim, reason, racket, rust, scala, dart, swift, haxe, raku, pascal, perl, elm, cobol, d, erlang

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2021-11-22

---

## Kata Description


In a factory a printer prints labels for boxes. For one kind of boxes

the printer has to use colors which, for the sake of simplicity,

are named with letters from `a to m`. 



The colors used by the printer are

recorded in a control string. For example a "good" control string would be

`aaabbbbhaijjjm` meaning that the printer used three times color a, four times

color b, one time color h then one time color a...



Sometimes there are problems: lack of colors, technical malfunction and a "bad" 

control string is produced e.g. `aaaxbbbbyyhwawiwjjjwwm` with letters not from `a to m`.



You have to write a function `printer_error` which given a string will return

the error rate of the printer as a **string** representing a rational whose numerator 

is the number of errors and the denominator the length of the control string.

Don't reduce this fraction to a simpler expression.



The string has a length greater or equal to one and contains only letters 

from `a`to `z`.



#### Examples:



```

s="aaabbbbhaijjjm"

printer_error(s) => "0/14"



s="aaaxbbbbyyhwawiwjjjwwm"

printer_error(s) => "8/22"



```

---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/56541980fa08ab47a0000040)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
