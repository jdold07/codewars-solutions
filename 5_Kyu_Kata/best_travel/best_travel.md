# 5 kyu - Best travel

##### **ID**: [55e7280b40e1c4a06d0000aa](https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa) | **Slug**: [best-travel](https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">5 kyu</span>

##### **First Published**: 2015-09-02 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2015-11-06 ***by*** [joh_pot](https://www.codewars.com/users/joh_pot)

##### **Languages Available**: ruby, python, haskell, java, csharp, clojure, javascript, coffeescript, cpp, php, c, rust, swift, crystal, typescript, go, fsharp, r, shell, ocaml, kotlin, elixir, scala, julia, powershell, nim, reason, racket, fortran, dart, pascal, perl, elm, d, erlang, prolog

##### **My Completed Languages**: python, javascript ***as at*** 2022-10-04 | **Originally completed**: 2022-05-10

---

## Kata Description


John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns.

`ls = [50, 55, 57, 58, 60]`.

John is tired of driving and he says to Mary that he doesn't want to drive more than `t = 174 miles` and he

will visit only `3` towns.



Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please Mary and John?



#### Example: 



With list `ls` and 3 towns to visit they can make a choice between: 

`[50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60]`.



The sums of distances are then:

`162, 163, 165, 165, 167, 168, 170, 172, 173, 175`.



The biggest possible sum taking a limit of `174` into account is then `173` and the distances of the `3` 

corresponding towns is `[55, 58, 60]`.



The function `chooseBestSum` (or `choose_best_sum` or ... depending on the language) will take as parameters `t` (maximum sum of distances, integer >= 0), `k` (number of towns to visit, k >= 1) 

and `ls` (list of distances, all distances are positive or zero integers and this list has at least one element).

The function returns the "best" sum ie the biggest possible sum of `k` distances less than or equal to the given limit `t`, if that sum exists,

or otherwise nil, null, None, Nothing, depending on the language. In that case with C, C++, D, Dart, Fortran, F#, Go, Julia, Kotlin, Nim, OCaml, Pascal, Perl, PowerShell, Reason, Rust, Scala, Shell, Swift return `-1`.



#### Examples: 



`ts = [50, 55, 56, 57, 58]`

`choose_best_sum(163, 3, ts) -> 163`



`xs = [50]`

`choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, D, Rust, Swift, Go, ...)`



`ys = [91, 74, 73, 85, 73, 81, 87]`

`choose_best_sum(230, 3, ys) -> 228`



#### Notes: 

- try not to modify the input list of distances `ls`

- in some languages this "list" is in fact a *string* (see the Sample Tests). 



---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
