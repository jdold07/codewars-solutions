# 7 kyu - Can you count loop's execution?

##### **ID**: [633bbba75882f6004f9dae4c](https://www.codewars.com/kata/633bbba75882f6004f9dae4c) | **Slug**: [can-you-count-loops-execution](https://www.codewars.com/kata/633bbba75882f6004f9dae4c) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2022-10-04 ***by*** [ejini战神](https://www.codewars.com/users/ejini%E6%88%98%E7%A5%9E) | **Approved**: 2022-10-04 ***by*** [dfhwze](https://www.codewars.com/users/dfhwze)

##### **Languages Available**: javascript, factor, python, csharp

##### **My Completed Languages**: javascript ***as at*** 2022-10-14 | **Originally completed**: 2022-10-14

---

## Kata Description


**Introduction**



As a programmer, one must be familiar with the usage of iterative statements in coding implementations! Depending on the chosen programming language, iterative statements can come in the form of `for`, `while`, `do-while` etc.



Below is an example of a `nested C-style for-loop`:



```c

for(int i = 0; i < A; i++){ 

  // some statements

  for(int j = 0; j < B; j++){

    // some statements

    for(int k = 0; k < C; k++){

      // some statements

    }

  }

}

```

Where `A`, `B` and `C` are natural numbers.



**Task**



Given an array of length `N`, where `N` denotes the number of iterative statements. Each item-pair in the array represents two elements, with the `1st value` (`V`) indicating the upper boundary for the iteration to take place (can be inclusive or exclusive depending on the `2nd value`) and the `2nd value` (Boolean data type -> `true` / `false` depending on your chosen language) indicating whether the upper boundary (`V`) is inclusive or not. 



You must write a function that outputs an array in which each element represents the `number of times each for-loop condition is evaluated`. Below is an example for better understanding:



**Example**



arr = `[[7, true], [5, false]]`



```c

for(int i = 0; i <= 7; i++){   // This statement is executed 9 times before termination -> 0, 1, 2, 3, 4, 5, 6, 7, 8 (since 8 > 7 is the breaking condition)

  for(int j = 0; j < 5; j++){  // In one cycle of outermost loop, this statement is executed 6 times before termination -> 0, 1, 2, 3, 4, 5 (since 5 >= 5 is the breaking condition)

    // some statements

  }

}

```



**Note**



* The array can be empty, with a range of `0 <= N <= 20`

* The starting counter of the `C-style for-loop` is always `0`

* The iteration expression or operation to be performed is always `incremental`

* The range of upper boundary is as follows: `1 <= V <= 20`

---


🏷 `ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/633bbba75882f6004f9dae4c)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.*

###### *The solutions in each language code file associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are most often verbatim of those provided by the Kata.  However, in some cases it has been necessary to modify the test cases in order to have them function with my test runners and in my local environment.  On occasion, I may have added additional test cases to those provided.  Also, though I can't recall an instance, there may potentially have been reason to remove test cases for functional reasons.  Some Kata's also require (*or have*) code preloaded for their operation.  This code is included if it was required to make the tests work.  It is clearly identified under a **PRELOAD CODE** header if included.*

###### Most of my solutions are not commented (*though this will hopefully change*) as solutions are rarely submitted with comments on [Codewars.com](https://www.codewars.com).*
