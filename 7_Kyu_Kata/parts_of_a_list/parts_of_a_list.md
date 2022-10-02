# 7 kyu - Parts of a list

##### **ID**: [56f3a1e899b386da78000732](https://www.codewars.com/kata/56f3a1e899b386da78000732) | **Slug**: [parts-of-a-list](https://www.codewars.com/kata/56f3a1e899b386da78000732) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2016-03-24 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2016-03-26 ***by*** [NaMe613](https://www.codewars.com/users/NaMe613)

##### **Languages Available**: ruby, python, javascript, coffeescript, haskell, clojure, java, csharp, elixir, typescript, cpp, php, crystal, fsharp, c, ocaml, shell, kotlin, julia, powershell, go, nim, rust, reason, racket, scala, vb, dart, perl, d, erlang

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2022-09-10

---

## Kata Description


Write a function `partlist` that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.



- Each two non empty parts will be in a pair (or an array for languages without tuples or a `struct`in C - C: see Examples test Cases - ) 

- Each part will be in a string

- Elements of a pair must be in the same order as in the original array.



#### Examples of returns in different languages: 

```

a = ["az", "toto", "picaro", "zone", "kiwi"] -->

[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 

or

 a = {"az", "toto", "picaro", "zone", "kiwi"} -->

{{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, {"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}

or

a = ["az", "toto", "picaro", "zone", "kiwi"] -->

[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]

or 

a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->

[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]

or

a = ["az", "toto", "picaro", "zone", "kiwi"] -->

"(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)(az toto picaro, zone kiwi)(az toto picaro zone, kiwi)"

```

#### Note

You can see other examples for each language in "Your test cases"



---


🏷 `ARRAYS | LISTS | DATA STRUCTURES | ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/56f3a1e899b386da78000732)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
