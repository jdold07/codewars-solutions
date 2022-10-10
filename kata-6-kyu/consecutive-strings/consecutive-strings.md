# 6 kyu - Consecutive strings

##### **ID**: [56a5d994ac971f1ac500003e](https://www.codewars.com/kata/56a5d994ac971f1ac500003e) | **Slug**: [consecutive-strings](https://www.codewars.com/kata/56a5d994ac971f1ac500003e) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2016-01-25 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2016-03-10 ***by*** [myjinxin2015](https://www.codewars.com/users/myjinxin2015)

##### **Languages Available**: ruby, python, javascript, coffeescript, haskell, clojure, csharp, java, elixir, cpp, php, typescript, crystal, fsharp, c, ocaml, rust, swift, go, r, shell, kotlin, powershell, julia, scala, nim, reason, racket, dart, haxe, pascal, raku, lua, perl, elm, cobol, d, erlang, prolog

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2021-11-27

---

## Kata Description


You are given an array(list) `strarr` of strings and an integer `k`. Your task is to return the **first** longest string

consisting of k **consecutive** strings taken in the array.



#### Examples:

```

strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2



Concatenate the consecutive strings of strarr by 2, we get:



treefoling   (length 10)  concatenation of strarr[0] and strarr[1]

folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]

trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]

blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]

abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]



Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".

The first that came is "folingtrashy" so 

longest_consec(strarr, 2) should return "folingtrashy".



In the same way:

longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

```

n being the length of the string array, if `n = 0` or `k > n` or `k <= 0` return "" (return `Nothing` in Elm, "nothing" in Erlang).



#### Note

consecutive strings : follow one after another without an interruption

---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/56a5d994ac971f1ac500003e)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
