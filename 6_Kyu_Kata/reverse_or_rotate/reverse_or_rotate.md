# 6 kyu - Reverse or rotate?

##### **ID**: [56b5afb4ed1f6d5fb0000991](https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991) | **Slug**: [reverse-or-rotate](https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2016-02-06 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2016-02-25 ***by*** [NaMe613](https://www.codewars.com/users/NaMe613)

##### **Languages Available**: ruby, python, javascript, coffeescript, haskell, clojure, csharp, java, elixir, cpp, php, typescript, crystal, fsharp, c, rust, swift, r, shell, ocaml, kotlin, scala, julia, powershell, go, nim, racket, reason, vb, lua, pascal, perl, elm, d, cobol

##### **My Completed Languages**: python ***as at*** 2022-10-04 | **Originally completed**: 2022-04-28

---

## Kata Description


The input is a string `str` of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size `sz` (ignore the last chunk if its size is less than `sz`).



If a chunk represents an integer such as the **sum of the cubes of its digits is divisible by 2**, reverse that chunk; 

otherwise rotate it to the left by one position.

Put together these modified chunks and return the result as a string.



If 

- `sz` is `<= 0` or if `str` is `empty` return ""

- `sz` is greater `(>)` than the length of `str` it is impossible to take a chunk of size `sz` hence return "".



#### Examples:



```

revrot("123456987654", 6) --> "234561876549"

revrot("123456987653", 6) --> "234561356789"

revrot("66443875", 4) --> "44668753"

revrot("66443875", 8) --> "64438756"

revrot("664438769", 8) --> "67834466"

revrot("123456779", 8) --> "23456771"

revrot("", 8) --> ""

revrot("123456779", 0) --> "" 

revrot("563000655734469485", 4) --> "0365065073456944"

```

```

Example of a string rotated to the left by one position:

s = "123456" gives "234561".

```

---


🏷 `ALGORITHMS | STRINGS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
