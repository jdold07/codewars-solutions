# 8 kyu - Enumerable Magic #1 - True for All?

##### **ID**: [54598d1fcbae2ae05200112c](https://www.codewars.com/kata/54598d1fcbae2ae05200112c) | **Slug**: [enumerable-magic-number-1-true-for-all](https://www.codewars.com/kata/54598d1fcbae2ae05200112c) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2014-11-05 ***by*** [bellmyer](https://www.codewars.com/users/bellmyer) | **Approved**: 2015-01-03 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: ruby, javascript, coffeescript, csharp, c, prolog, java, python

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2022-08-24

---

## Kata Description


## Task

Create a method **all** which takes two params: 

* a sequence 

* a function (function pointer in C)



and returns **true** if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.



## Example

```

all((1, 2, 3, 4, 5), greater_than_9) -> false

all((1, 2, 3, 4, 5), less_than_9)    -> True

```



## Help

Here's a (Ruby) resource if you get stuck:



http://www.rubycuts.com/enum-all



---


🏷 `ARRAYS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/54598d1fcbae2ae05200112c)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
