# 5 kyu - Caesar Cipher Sorting

##### **ID**: [5483b69b48cf540cfc000119](https://www.codewars.com/kata/5483b69b48cf540cfc000119) | **Slug**: [caesar-cipher-sorting](https://www.codewars.com/kata/5483b69b48cf540cfc000119) | **Category**: `GAMES` | **Rank**: <span style="color:yellow">5 kyu</span>

##### **First Published**: 2014-12-07 ***by*** [mpickering](https://www.codewars.com/users/mpickering) | **Approved**: 2016-01-05 ***by*** [Unnamed](https://www.codewars.com/users/Unnamed)

##### **Languages Available**: haskell, javascript

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2022-09-20

---

## Kata Description


Given a list of strings, the goal is to group all strings together which are the same under some [caesar shift](http://en.wikipedia.org/wiki/Caesar_cipher). 



For example if we apply `caesar 5 "haskell"` the result would be `"mfxpjqq"`. Similarly `caesar 17 "haskell" = "yrjbvcc"`. 



Then `caesarSort ["mfxpjqq","yrjbvcc"] = [["mfxpjqq","yrjbvcc"]]` as `caesar 21 "mfxpjqq" = "haskell"` and `caesar 9 "yrjbvcc" = "haskell"`. 



The input will be a list of lower case strings (letters from `a` to `z`). The order of the output does not matter. 



Some more examples

```haskell

caesarSort ["a","b"] == [["a","b"]]

caesarSort ["ab","ac"] == [["ab"],["ac"]]

caesarSort ["za","yz"] == [["za","yz"]]

caesarSort ["ab","zz","bc"] == [["ab","bc"],["zz"]]

```

```javascript

caesarSort(["a","b"]) === [["a","b"]]

caesarSort(["ab","ac"]) === [["ab"],["ac"]]

caesarSort(["za","yz"]) === [["za","yz"]]

caesarSort(["ab","zz","bc"]) === [["ab","bc"],["zz"]]

```

---


🏷 `PUZZLES | SORTING`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5483b69b48cf540cfc000119)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
