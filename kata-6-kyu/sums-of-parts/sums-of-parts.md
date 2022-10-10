# 6 kyu - Sums of Parts

##### **ID**: [5ce399e0047a45001c853c2b](https://www.codewars.com/kata/5ce399e0047a45001c853c2b) | **Slug**: [sums-of-parts](https://www.codewars.com/kata/5ce399e0047a45001c853c2b) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2019-05-21 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2019-06-11 ***by*** [GiacomoSorbi](https://www.codewars.com/users/GiacomoSorbi)

##### **Languages Available**: racket, python, cpp, crystal, java, javascript, scala, haskell, r, clojure, ruby, csharp, php, powershell, rust, typescript, shell, ocaml, reason, c, elixir, fsharp, vb, kotlin, groovy, prolog, fortran, dart, commonlisp, julia, nim, pascal, raku, perl, lua, elm, cobol, d, erlang, go, nasm

##### **My Completed Languages**: python ***as at*** 2022-10-08 | **Originally completed**: 2022-04-29

---

## Kata Description


Let us consider this example (array written in general format):



`ls = [0, 1, 3, 6, 10]`



Its following parts:

```

ls = [0, 1, 3, 6, 10]

ls = [1, 3, 6, 10]

ls = [3, 6, 10]

ls = [6, 10]

ls = [10]

ls = []

```

The corresponding sums are (put together in a list):

`[20, 20, 19, 16, 10, 0]`



The function `parts_sums` (or its variants in other languages) will take as parameter a list `ls`

and return a list of the sums of its parts as defined above.



#### Other Examples:

```

ls = [1, 2, 3, 4, 5, 6] 

parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]



ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]

parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]

```

#### Notes

- Take a look at performance: some lists have thousands of elements.

- Please ask before translating.



---


🏷 `FUNDAMENTALS | PERFORMANCE | ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5ce399e0047a45001c853c2b)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
