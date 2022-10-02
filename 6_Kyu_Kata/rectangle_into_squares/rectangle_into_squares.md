# 6 kyu - Rectangle into Squares

##### **ID**: [55466989aeecab5aac00003e](https://www.codewars.com/kata/55466989aeecab5aac00003e) | **Slug**: [rectangle-into-squares](https://www.codewars.com/kata/55466989aeecab5aac00003e) | **Category**: `GAMES` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2015-05-03 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2015-05-08 ***by*** [GiacomoSorbi](https://www.codewars.com/users/GiacomoSorbi)

##### **Languages Available**: python, ruby, java, csharp, clojure, javascript, haskell, coffeescript, cpp, elixir, typescript, php, crystal, fsharp, c, rust, swift, r, shell, ocaml, fortran, julia, scala, powershell, go, nim, kotlin, racket, reason, pascal, factor, raku, perl, elm, d, cobol, erlang, prolog

##### **My Completed Languages**: python ***as at*** 2022-10-02 | **Originally completed**: 2022-04-27

---

## Kata Description


The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).



![alternative text](https://i.imgur.com/lk5vJ7sm.jpg)



Can you translate this drawing into an algorithm?



You will be given two dimensions 



1. a positive integer length

2. a positive integer width



You will return a collection or a string (depending on the language; Shell bash, PowerShell, Pascal and Fortran return a string) with the size of each of the  squares.

#### Examples in general form:

(depending on the language)

```

  sqInRect(5, 3) should return [3, 2, 1, 1]

  sqInRect(3, 5) should return [3, 2, 1, 1]

  

  You can see examples for your language in **"SAMPLE TESTS".**

```



#### Notes:

- `lng == wdth` as a starting case would be an entirely different problem and the drawing is planned to be interpreted with `lng != wdth`. (See kata, Square into Squares. Protect trees! http://www.codewars.com/kata/54eb33e5bc1a25440d000891 for this problem). 



  When the initial parameters are so that `lng` == `wdth`, the solution `[lng]` would be the most obvious but not in the spirit of this kata   so, in that case, return `None`/`nil`/`null`/`Nothing` **or**

  return `{}` with C++, `Array()` with Scala, `[]` with Perl, Raku.

 - In that case the returned structure of **C** will have its `sz` component equal to `0`. 

 - Return the string `"nil"` with Bash, PowerShell, Pascal and Fortran.









---


🏷 `FUNDAMENTALS | GEOMETRY | PUZZLES`


[View this Kata on Codewars.com](https://www.codewars.com/kata/55466989aeecab5aac00003e)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
