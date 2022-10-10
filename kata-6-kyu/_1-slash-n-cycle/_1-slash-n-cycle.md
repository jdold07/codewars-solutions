# 6 kyu - 1/n- Cycle

##### **ID**: [5a057ec846d843c81a0000ad](https://www.codewars.com/kata/5a057ec846d843c81a0000ad) | **Slug**: [_1-slash-n-cycle](https://www.codewars.com/kata/5a057ec846d843c81a0000ad) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2017-11-10 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2017-11-11 ***by*** [ZED.CWT](https://www.codewars.com/users/ZED.CWT)

##### **Languages Available**: shell, python, javascript, ruby, php, java, csharp, cpp, c, coffeescript, typescript, r, crystal, rust, go, nim, objc, clojure, swift, fsharp, ocaml, haskell, elixir, kotlin, fortran, julia, nasm, groovy, scala, powershell, reason, racket, vb, forth, prolog, haxe, commonlisp, dart, pascal, raku, perl, lua, elm, d, cobol, erlang

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2022-09-03

---

## Kata Description


Let be `n` an integer prime with `10` e.g. `7`. 



`1/7 = 0.142857 142857 142857 ...`.



We see that the decimal part has a cycle: `142857`. The length of this cycle is `6`. In the same way:



`1/11 = 0.09 09 09 ...`. Cycle length is `2`.



#### Task



Given an integer `n (n > 1)` the function `cycle(n)` returns the length of the cycle if there is one otherwise (n and 10 not coprimes) return `-1`. 



#### Examples:



```

cycle(5) = -1

cycle(13) = 6 -> 0.076923 076923 0769

cycle(21) = 6 -> 0.047619 047619 0476

cycle(27) = 3 -> 0.037 037 037 037 0370

cycle(33) = 2 -> 0.03 03 03 03 03 03 03 03

cycle(37) = 3 -> 0.027 027 027 027 027 0

cycle(94) = -1 



```



#### Notes

- 

```

cycle(22) = -1 since 1/22 ~ 0.0 45 45 45 45 ...

```

- Please ask before translating..





---


🏷 `FUNDAMENTALS | MATHEMATICS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5a057ec846d843c81a0000ad)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
