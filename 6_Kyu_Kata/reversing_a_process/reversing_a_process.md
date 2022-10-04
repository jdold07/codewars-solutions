# 6 kyu - Reversing a Process

##### **ID**: [5dad6e5264e25a001918a1fc](https://www.codewars.com/kata/5dad6e5264e25a001918a1fc) | **Slug**: [reversing-a-process](https://www.codewars.com/kata/5dad6e5264e25a001918a1fc) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2019-10-21 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2019-10-21 ***by*** [Blind4Basics](https://www.codewars.com/users/Blind4Basics)

##### **Languages Available**: python, javascript, java, cpp, scala, kotlin, groovy, csharp, shell, rust, haskell, ruby, haxe, dart, pascal, lua, perl, raku, elm, d, erlang, prolog

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2022-09-04

---

## Kata Description


Suppose we know the process by which a string `s` was encoded to a string `r` (see explanation below). The aim of the kata is to decode this string `r` to get back the original string `s`.





#### Explanation of the encoding process:



- input: a string `s` composed of lowercase letters from "a" to "z", and a positive integer `num`

- we know there is a correspondence between `abcde...uvwxyz`and `0, 1, 2 ..., 23, 24, 25` : `0 <-> a, 1 <-> b ...`

- if `c` is a character of `s` whose corresponding number is `x`, apply to `x` the function `f: x-> f(x) = num * x % 26`, then find `ch` the corresponding character of `f(x)`

- Accumulate all these `ch` in a string `r`

- concatenate `num` and `r` and return the result



For example:



```

encode("mer", 6015)  -->  "6015ekx"



m --> 12,   12 * 6015 % 26 = 4,    4  --> e

e --> 4,     4 * 6015 % 26 = 10,   10 --> k

r --> 17,   17 * 6015 % 26 = 23,   23 --> x



So we get "ekx", hence the output is "6015ekx"

```





#### Task



A string `s` was encoded to string `r` by the above process. complete the function to get back `s` *whenever it is possible*.



Indeed it can happen that the decoding is impossible for strings composed of whatever letters from "a" to "z" when positive integer num has not been correctly chosen. In that case return `"Impossible to decode"`.





#### Examples



```

decode "6015ekx" -> "mer"

decode "5057aan" -> "Impossible to decode"

```



---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5dad6e5264e25a001918a1fc)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
