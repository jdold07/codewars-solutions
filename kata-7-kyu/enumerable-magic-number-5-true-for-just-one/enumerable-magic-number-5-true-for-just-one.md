# 7 kyu - Enumerable Magic #5- True for Just One?

##### **ID**: [54599705cbae2aa60b0011a4](https://www.codewars.com/kata/54599705cbae2aa60b0011a4) | **Slug**: [enumerable-magic-number-5-true-for-just-one](https://www.codewars.com/kata/54599705cbae2aa60b0011a4) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2014-11-05 ***by*** [bellmyer](https://www.codewars.com/users/bellmyer) | **Approved**: 2015-01-04 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: ruby, javascript, csharp, c, nasm, python, haskell

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2022-09-22

---

## Kata Description


## Task



Create a function called `one` that accepts two params:



* a sequence 

* a function



and returns `true` only if the function in the params returns `true` for exactly one (`1`) item in the sequence. 



## Example



```

one([1, 3, 5, 6, 99, 1, 3], bigger_than_ten) -> true

one([1, 3, 5, 6, 99, 88, 3], bigger_than_ten) -> false

one([1, 3, 5, 6, 5, 1, 3], bigger_than_ten) -> false

```



If you need help, [here](http://www.rubycuts.com/enum-one) is a resource ( in Ruby ).

---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/54599705cbae2aa60b0011a4)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
