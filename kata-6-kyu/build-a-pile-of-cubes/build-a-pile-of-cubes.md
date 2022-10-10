# 6 kyu - Build a pile of Cubes

##### **ID**: [5592e3bd57b64d00f3000047](https://www.codewars.com/kata/5592e3bd57b64d00f3000047) | **Slug**: [build-a-pile-of-cubes](https://www.codewars.com/kata/5592e3bd57b64d00f3000047) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2015-06-30 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2015-10-14 ***by*** [NaMe613](https://www.codewars.com/users/NaMe613)

##### **Languages Available**: csharp, java, ruby, python, javascript, coffeescript, haskell, clojure, elixir, typescript, cpp, php, crystal, fsharp, c, swift, rust, go, r, shell, ocaml, fortran, julia, nasm, nim, scala, kotlin, groovy, dart, pascal, raku, perl, cobol, elm, d, erlang, prolog

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2021-11-20

---

## Kata Description


Your task is to construct a building which will be a pile of n cubes.

The cube at the bottom will have a volume of n^3, the cube above 

will have  volume of (n-1)^3 and so on until the top which will have a volume of 1^3.



You are given the total volume m of the building.

Being given m can you find the number n of cubes you will have to build?



The parameter of the function findNb `(find_nb, find-nb, findNb, ...)` will be an integer m

and you have to return the integer n such as

n^3 + (n-1)^3 + ... + 1^3 = m

if such a n exists or -1 if there is no such n.



#### Examples:



```if-not:nasm

findNb(1071225) --> 45



findNb(91716553919377) --> -1

```



~~~if:nasm

```

mov rdi, 1071225

call find_nb            ; rax <-- 45

    

mov rdi, 91716553919377

call find_nb            ; rax <-- -1

```



---


🏷 `MATHEMATICS | ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5592e3bd57b64d00f3000047)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
