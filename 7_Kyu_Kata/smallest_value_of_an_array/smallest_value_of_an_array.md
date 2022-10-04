# 7 kyu - Smallest value of an array

##### **ID**: [544a54fd18b8e06d240005c0](https://www.codewars.com/kata/544a54fd18b8e06d240005c0) | **Slug**: [smallest-value-of-an-array](https://www.codewars.com/kata/544a54fd18b8e06d240005c0) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2014-10-24 ***by*** [sanctusraphael](https://www.codewars.com/users/sanctusraphael) | **Approved**: 2014-11-05 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript, java, csharp, coffeescript, python, ruby, c

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2022-09-09

---

## Kata Description


Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.



Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.



```javascript

min([1,2,3,4,5], 'value') // => 1

min([1,2,3,4,5], 'index') // => 0

```



```java

Arrays.findSmallest(new int[]{1,2,3,4,5}, 'value') // => 1

Arrays.findSmallest(new int[]{1,2,3,4,5}, 'index') // => 0

```



```C#

Kata.FindSmallest(new int[]{ 1, 2 , 3, 4, 5}, "value") // => 1

Kata.FindSmallest(new int[]{ 1, 2 , 3, 4, 5}, "index") // => 0

```

---


🏷 `ARRAYS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/544a54fd18b8e06d240005c0)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
