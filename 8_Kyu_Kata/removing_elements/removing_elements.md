# 8 kyu - Removing Elements

##### **ID**: [5769b3802ae6f8e4890009d2](https://www.codewars.com/kata/5769b3802ae6f8e4890009d2) | **Slug**: [removing-elements](https://www.codewars.com/kata/5769b3802ae6f8e4890009d2) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2016-06-21 ***by*** [MorgzC41](https://www.codewars.com/users/MorgzC41) | **Approved**: 2016-06-27 ***by*** [GiacomoSorbi](https://www.codewars.com/users/GiacomoSorbi)

##### **Languages Available**: python, javascript, ruby, csharp, scala, php, c, rust

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2021-12-04

---

## Kata Description


Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.



### Example:



```if-not:c

`["Keep", "Remove", "Keep", "Remove", "Keep", ...]` --> `["Keep", "Keep", "Keep", ...]`

```



```if:c

~~~c

size_t length = 5;

remove_every_other(&length, {1, 2, 3, 4, 5});

// -->  {1, 3, 5}

~~~

```



None of the arrays will be empty, so you don't have to worry about that!

---


🏷 `LISTS | ARRAYS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5769b3802ae6f8e4890009d2)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
