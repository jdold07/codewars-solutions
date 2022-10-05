# 8 kyu - Compare within margin

##### **ID**: [56453a12fcee9a6c4700009c](https://www.codewars.com/kata/56453a12fcee9a6c4700009c) | **Slug**: [compare-within-margin](https://www.codewars.com/kata/56453a12fcee9a6c4700009c) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2016-08-24 ***by*** [ITSOES](https://www.codewars.com/users/ITSOES) | **Approved**: 2016-08-25 ***by*** [smile67](https://www.codewars.com/users/smile67)

##### **Languages Available**: python, javascript, ruby, csharp, c, java, julia, rust, go

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2022-08-25

---

## Kata Description


Create a function `close_compare` that accepts 3 parameters: `a`, `b`, and an optional `margin`. The function should return whether `a` is lower than, close to, or higher than `b`. 



`a` is considered "close to" `b` if `margin` is greater than or equal to the distance between `a` and `b`.



Please note the following:



- When `a` is close to `b`, return `0`.



Otherwise...



- When `a` is less than `b`, return `-1`.



- When `a` is greater than `b`, return `1`.



If `margin` is not given, treat it as zero.



Assume: `margin >= 0`



Tip: Some languages have a way to make parameters optional.



------



### Example 1

If `a = 3`, `b = 5`, and `margin = 3`, then `close_compare(a, b, margin)` should return `0`.



This is because `a` and `b` are no more than 3 numbers apart.



### Example 2



If `a = 3`, `b = 5`, and `margin = 0`, then `close_compare(a, b, margin)` should return `-1`. 



This is because the distance between `a` and `b` is greater than 0, and `a` is less than `b`.

---


🏷 `FUNDAMENTALS | LOGIC`


[View this Kata on Codewars.com](https://www.codewars.com/kata/56453a12fcee9a6c4700009c)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
