# 7 kyu - All Inclusive?

##### **ID**: [5700c9acc1555755be00027e](https://www.codewars.com/kata/5700c9acc1555755be00027e) | **Slug**: [all-inclusive](https://www.codewars.com/kata/5700c9acc1555755be00027e) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2016-04-03 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2016-04-04 ***by*** [NaMe613](https://www.codewars.com/users/NaMe613)

##### **Languages Available**: ruby, python, javascript, coffeescript, java, csharp, haskell, clojure, elixir, typescript, cpp, php, crystal, fsharp, c, ocaml, r, shell, kotlin, scala, julia, powershell, go, nim, rust, racket, vb, perl, d

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2022-09-09

---

## Kata Description


Input: 



- a string `strng`

- an array of strings `arr`



Output of function `contain_all_rots(strng, arr) (or containAllRots or contain-all-rots)`:



- a boolean `true` if all rotations of `strng` are included in `arr`

- `false` otherwise



#### Examples:

```

contain_all_rots(

  "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true



contain_all_rots(

  "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)

```



#### Note: 

Though not correct in a mathematical sense



- we will consider that there are no rotations of `strng == ""`

- and for any array `arr`: `contain_all_rots("", arr) --> true`



Ref: <https://en.wikipedia.org/wiki/String_(computer_science)#Rotations>



```if:shell

## Bash:

For bash the array is replaced by a string (see "RUN sample tests"). 

```

---


🏷 `FUNDAMENTALS | STRINGS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5700c9acc1555755be00027e)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
