# 7 kyu - Basic Sequence Practice

##### **ID**: [5436f26c4e3d6c40e5000282](https://www.codewars.com/kata/5436f26c4e3d6c40e5000282) | **Slug**: [basic-sequence-practice](https://www.codewars.com/kata/5436f26c4e3d6c40e5000282) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2014-10-09 ***by*** [kgashok](https://www.codewars.com/users/kgashok) | **Approved**: 2014-11-12 ***by*** [xcthulhu](https://www.codewars.com/users/xcthulhu)

##### **Languages Available**: python, java, haskell, javascript, ruby, csharp, rust, nim, c, clojure, fsharp, coffeescript, crystal

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2022-09-07

---

## Kata Description


A [sequence or a series](http://world.mathigon.org/Sequences), in mathematics, is a string of objects, like numbers, that follow a particular pattern. The individual elements in a sequence are called terms. A simple example is `3, 6, 9, 12, 15, 18, 21, ...`, where the pattern is: _"add 3 to the previous term"_.



In this kata, we will be using a more complicated sequence:   `0, 1, 3, 6, 10, 15, 21, 28, ...`

This sequence is generated with the pattern: _"the nth term is the sum of numbers from 0 to n, inclusive"_.



```

[ 0,  1,    3,      6,   ...]

  0  0+1  0+1+2  0+1+2+3

```



## Your Task



Complete the function that takes an integer `n` and returns a list/array of length `abs(n) + 1` of the arithmetic series explained above. When`n < 0` return the sequence with negative terms.



## Examples 



```

 5  -->  [0,  1,  3,  6,  10,  15]

-5  -->  [0, -1, -3, -6, -10, -15]

 7  -->  [0,  1,  3,  6,  10,  15,  21,  28]

```



---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5436f26c4e3d6c40e5000282)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
