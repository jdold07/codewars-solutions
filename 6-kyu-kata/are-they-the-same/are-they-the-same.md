# 6 kyu - Are they the "same"?

##### **ID**: [550498447451fbbd7600041c](https://www.codewars.com/kata/550498447451fbbd7600041c) | **Slug**: [are-they-the-same](https://www.codewars.com/kata/550498447451fbbd7600041c) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2015-03-14 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2015-05-08 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: ruby, csharp, python, java, clojure, haskell, javascript, coffeescript, elixir, typescript, cpp, php, crystal, fsharp, c, rust, swift, r, scala, shell, ocaml, julia, kotlin, powershell, go, nim, purescript, nasm, racket, groovy, prolog, cfml, fortran, haxe, dart, pascal, lua, perl, d, elm, cobol, erlang

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2021-11-16

---

## Kata Description


Given two arrays `a` and `b` write a function `comp(a, b)` (or`compSame(a, b)`) that checks whether the two arrays have the "same" elements, with the same *multiplicities* (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in `b` are the elements in `a` squared, regardless of the order.



#### Examples

##### Valid arrays

```

a = [121, 144, 19, 161, 19, 144, 19, 11]  

b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

```

`comp(a, b)` returns true because in `b` 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write `b`'s elements in terms of squares:

```

a = [121, 144, 19, 161, 19, 144, 19, 11] 

b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

```

##### Invalid arrays

If, for example, we change the first number to something else, `comp` is not returning true anymore:

```

a = [121, 144, 19, 161, 19, 144, 19, 11]  

b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]

```

`comp(a,b)` returns false because in `b` 132 is not the square of any number of `a`.

```

a = [121, 144, 19, 161, 19, 144, 19, 11]  

b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]

```

`comp(a,b)` returns false because in `b` 36100 is not the square of any number of `a`.



#### Remarks

- `a` or `b` might be `[] or {}` (all languages except R, Shell).

- `a` or `b` might be `nil` or `null` or `None` or `nothing` (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift). 



If `a` or `b` are `nil` (or `null` or `None`, depending on the language), the problem doesn't make sense so return false.



#### Note for C

The two arrays have the same size `(> 0)` given as parameter in function `comp`.



---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/550498447451fbbd7600041c)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
