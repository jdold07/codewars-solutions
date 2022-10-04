# 6 kyu - Simple Fun #217: Sort By Guide

##### **ID**: [590148d79097384be600001e](https://www.codewars.com/kata/590148d79097384be600001e) | **Slug**: [simple-fun-number-217-sort-by-guide](https://www.codewars.com/kata/590148d79097384be600001e) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2017-04-27 ***by*** [myjinxin2015](https://www.codewars.com/users/myjinxin2015) | **Approved**: 2017-06-29 ***by*** [Voile](https://www.codewars.com/users/Voile)

##### **Languages Available**: javascript, python, c

##### **My Completed Languages**: python ***as at*** 2022-10-04 | **Originally completed**: 2022-05-04

---

## Kata Description


# Task



 You're given an array of positive integers `arr`, and an array `guide` of the same length. Sort array `arr` using array `guide` by the following rules:

```

if guide[i] = -1, arr[i] shouldn't be sorted;

if guide[i] ≠ -1, arr[i] should be sorted, 

     and among all elements that should be sorted, 

     arr[i] should be the guide[i]th one (1-based).

```



## Input/Output





 - `[input]` integer array `arr`



  Array of positive integers.



  `1 ≤ a.length ≤ 100`



  `1 ≤ A[i] ≤ 10^4`



 

 - `[input]` integer array `guide`



  It is guaranteed that `guide.length = a.length`.





 - `[output]` an integer array



  Array sorted as described above.



### Example



 For

 

 `arr     = [56, 78, 3, 45, 4, 66, 2,  2, 4]`

 

 `guide = [3,  1, -1, -1, 2, -1, 4, -1, 5]`

 

 the output should be `[78,4,3,45,56,66,2,2,4]`



 Here's how `arr` was sorted:

```

Elements 3, 45, 66 and 2 don't need to be sorted, 

so we can put them in the resulting array right away:

[?, ?, 3, 45, ?, 66, ?, 2, ?].

Now we need to sort the remaining elements. 

According to the guide, 

they should be sorted in the following order:

[78, 4, 56, 2, 4]

Thus, the final answer is:

[78, 4, 3, 45, 56, 66, 2, 2, 4].

```

---


🏷 `ALGORITHMS | ARRAYS | SORTING`


[View this Kata on Codewars.com](https://www.codewars.com/kata/590148d79097384be600001e)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
