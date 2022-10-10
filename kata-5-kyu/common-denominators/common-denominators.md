# 5 kyu - Common Denominators

##### **ID**: [54d7660d2daf68c619000d95](https://www.codewars.com/kata/54d7660d2daf68c619000d95) | **Slug**: [common-denominators](https://www.codewars.com/kata/54d7660d2daf68c619000d95) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">5 kyu</span>

##### **First Published**: 2015-02-08 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2015-04-11 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: java, ruby, csharp, python, clojure, haskell, javascript, coffeescript, cpp, php, crystal, c, typescript, rust, swift, r, shell, ocaml, elixir, fsharp, julia, scala, powershell, go, nim, purescript, racket, reason, kotlin, groovy, dart, lua, pascal, perl, elm, d, cobol, erlang, prolog

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2022-09-11

---

## Kata Description


Common denominators



You will have a list of rationals in the form 

 ```

{ {numer_1, denom_1} , ... {numer_n, denom_n} } 

or

[ [numer_1, denom_1] , ... [numer_n, denom_n] ] 

or

[ (numer_1, denom_1) , ... (numer_n, denom_n) ] 

 ```

 

 where all numbers are positive ints.

 You have to produce a result in the form:

```

(N_1, D) ... (N_n, D) 

or

[ [N_1, D] ... [N_n, D] ] 

or

[ (N_1', D) , ... (N_n, D) ] 

or

{{N_1, D} ... {N_n, D}} 

or

"(N_1, D) ... (N_n, D)"

```



depending on the language (See Example tests) in which D is as small as possible and 

 

```

N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.

```

#### Example: 

```

convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]

```

#### Note: 

Due to the fact that the first translations were written long ago - more than 6 years - these first translations have only irreducible fractions. 



Newer translations have some reducible fractions. To be on the safe side it is better to do a bit more work by simplifying fractions even if they don't have to be.



#### Note for Bash:

input is a string,  e.g `"2,4,2,6,2,8"`

output is then          `"6 12 4 12 3 12"`

---


🏷 `FUNDAMENTALS | ALGORITHMS | MATHEMATICS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/54d7660d2daf68c619000d95)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
