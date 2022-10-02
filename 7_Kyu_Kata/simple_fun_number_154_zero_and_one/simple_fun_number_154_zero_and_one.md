# 7 kyu - Simple Fun #154: Zero And One

##### **ID**: [58ad09d6154165a1c80000d1](https://www.codewars.com/kata/58ad09d6154165a1c80000d1) | **Slug**: [simple-fun-number-154-zero-and-one](https://www.codewars.com/kata/58ad09d6154165a1c80000d1) | **Category**: `GAMES` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2017-02-22 ***by*** [myjinxin2015](https://www.codewars.com/users/myjinxin2015) | **Approved**: 2017-03-13 ***by*** [smile67](https://www.codewars.com/users/smile67)

##### **Languages Available**: javascript, csharp, ruby, haskell, c, nasm, julia, python, prolog

##### **My Completed Languages**: python ***as at*** 2022-10-02 | **Originally completed**: 2022-05-05

---

## Kata Description


You have a string that consists of zeroes and ones. Now choose any two *adjacent* positions in the string: if one of them is `0`, and the other one is `1`, remove these two digits from the string.



Return the length of the resulting (smallest) string that you can get after applying this operation multiple times?



**Note:** after each operation, the remaining digits are separated by spaces and thus *not* adjacent anymore - see the examples below.





## Examples



 For `"01010"` the result should be `1`:

 

```python

"01010"  -->  "  010"  -->  "    0"

```

 

 

 For `"110100"` the result should be `2`:



```python

"110100"  -->  "1  100"  -->  "1    0"

```





## Input/Output



 - `[input]` string `s`



  The initial string.



 - `[output]` an integer



  The minimum length of the string that may remain after applying the described operations as many times as possible.



---


🏷 `PUZZLES`


[View this Kata on Codewars.com](https://www.codewars.com/kata/58ad09d6154165a1c80000d1)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
