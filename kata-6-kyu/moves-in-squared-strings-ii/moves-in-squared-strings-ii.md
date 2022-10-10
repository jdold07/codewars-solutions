# 6 kyu - Moves in squared strings (II)

##### **ID**: [56dbe7f113c2f63570000b86](https://www.codewars.com/kata/56dbe7f113c2f63570000b86) | **Slug**: [moves-in-squared-strings-ii](https://www.codewars.com/kata/56dbe7f113c2f63570000b86) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2016-03-06 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2016-03-14 ***by*** [NaMe613](https://www.codewars.com/users/NaMe613)

##### **Languages Available**: ruby, python, javascript, coffeescript, java, csharp, haskell, clojure, cpp, php, typescript, fsharp, c, crystal, rust, swift, r, shell, objc, ocaml, scala, julia, go, nim, racket, kotlin, prolog, dart, pascal, lua, perl, elm, d, erlang

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2022-09-23

---

## Kata Description


You are given a string of `n` lines, each substring being `n` characters long: For example:



`s = "abcd\nefgh\nijkl\nmnop"`



We will study some transformations of this square of strings.



- Clock rotation 180 degrees: rot

```

rot(s) => "ponm\nlkji\nhgfe\ndcba"

```

- selfie_and_rot(s) (or selfieAndRot or selfie-and-rot)

It is initial string + string obtained by clock rotation 180 degrees with dots interspersed in order (hopefully) to better show the rotation when printed.

```

s = "abcd\nefgh\nijkl\nmnop" --> 

"abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"

```

or printed:



```

|rotation        |selfie_and_rot

|abcd --> ponm   |abcd --> abcd....

|efgh     lkji   |efgh     efgh....

|ijkl     hgfe   |ijkl     ijkl....   

|mnop     dcba   |mnop     mnop....

                           ....ponm

                           ....lkji

                           ....hgfe

                           ....dcba

```

Notice that the *number of dots* is the *common length* of "abcd", "efgh", "ijkl", "mnop".



#### Task:

- Write these two functions `rot`and `selfie_and_rot`



and



- high-order function `oper(fct, s)` where



 - fct is the function of one variable f to apply to the string `s`

(fct will be one of `rot, selfie_and_rot`)



#### Examples:

```

s = "abcd\nefgh\nijkl\nmnop"

oper(rot, s) => "ponm\nlkji\nhgfe\ndcba"

oper(selfie_and_rot, s) => "abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"

```

#### Notes:

- The form of the parameter `fct` in oper

changes according to the language. You can see each form according to the language in "Your test cases".

- It could be easier to take these katas from number (I) to number (IV)



Forthcoming katas will study other tranformations.



####  Bash Note:

The input strings are separated by `,` instead of `\n`. The ouput strings should be separated by `\r` instead of `\n`. See "Sample Tests".

---


🏷 `ALGORITHMS | STRINGS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/56dbe7f113c2f63570000b86)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
