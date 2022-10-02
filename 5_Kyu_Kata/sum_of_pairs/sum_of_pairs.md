# 5 kyu - Sum of pairs

##### **ID**: [54d81488b981293527000c8f](https://www.codewars.com/kata/54d81488b981293527000c8f) | **Slug**: [sum-of-pairs](https://www.codewars.com/kata/54d81488b981293527000c8f) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">5 kyu</span>

##### **First Published**: 2015-02-09 ***by*** [AlejandorLazaro](https://www.codewars.com/users/AlejandorLazaro) | **Approved**: 2015-03-19 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: python, javascript, ruby, elixir, rust, typescript

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2022-09-23

---

## Kata Description


----

Sum of Pairs

----



Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.



If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.



```python

sum_pairs([11, 3, 7, 5],         10)

#              ^--^      3 + 7 = 10

== [3, 7]



sum_pairs([4, 3, 2, 3, 4],         6)

#          ^-----^         4 + 2 = 6, indices: 0, 2 *

#             ^-----^      3 + 3 = 6, indices: 1, 3

#                ^-----^   2 + 4 = 6, indices: 2, 4

#  * the correct answer is the pair whose second value has the smallest index

== [4, 2]



sum_pairs([0, 0, -2, 3], 2)

#  there are no pairs of values that can be added to produce 2.

== None/nil/undefined (Based on the language)



sum_pairs([10, 5, 2, 3, 7, 5],         10)

#              ^-----------^   5 + 5 = 10, indices: 1, 5

#                    ^--^      3 + 7 = 10, indices: 3, 4 *

#  * the correct answer is the pair whose second value has the smallest index

== [3, 7]

```



Negative numbers and duplicate numbers can and will appear.



__NOTE:__ There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

---


🏷 `MEMOIZATION | FUNDAMENTALS | PERFORMANCE`


[View this Kata on Codewars.com](https://www.codewars.com/kata/54d81488b981293527000c8f)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
