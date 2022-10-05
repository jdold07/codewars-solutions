# 8 kyu - N-th Power

##### **ID**: [57d814e4950d8489720008db](https://www.codewars.com/kata/57d814e4950d8489720008db) | **Slug**: [n-th-power](https://www.codewars.com/kata/57d814e4950d8489720008db) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2016-10-01 ***by*** [Milford](https://www.codewars.com/users/Milford) | **Approved**: 2016-10-01 ***by*** [suic](https://www.codewars.com/users/suic)

##### **Languages Available**: python, c, java, csharp, javascript, typescript, coffeescript, cpp, prolog, rust, ruby, crystal, factor

##### **My Completed Languages**: python ***as at*** 2022-10-05 | **Originally completed**: 2022-04-20

---

## Kata Description


This kata is from check py.checkio.org



You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.



Let's look at a few examples:



~~~if-not:factor

* array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;

* array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

~~~



~~~if:factor

* `{ 1 2 3 4 } :> array` and `2 :> n`, then the result is `3 2 ^ -> 9`;

* `{ 1 2 3 } :> array` and `3 :> n`, but N is outside of the array, so the result is `-1`.

~~~

---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/57d814e4950d8489720008db)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
