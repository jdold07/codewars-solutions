# 7 kyu - Cats and shelves

##### **ID**: [62c93765cef6f10030dfa92b](https://www.codewars.com/kata/62c93765cef6f10030dfa92b) | **Slug**: [cats-and-shelves](https://www.codewars.com/kata/62c93765cef6f10030dfa92b) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2022-07-10 ***by*** [RealSup](https://www.codewars.com/users/RealSup) | **Approved**: 2022-09-23 ***by*** [anter69](https://www.codewars.com/users/anter69)

##### **Languages Available**: csharp, javascript, python, ruby, java, go, php

##### **My Completed Languages**: javascript ***as at*** 2022-10-15 | **Originally completed**: 2022-10-14

---

## Kata Description


## Description

An infinite number of shelves are arranged one above the other in a staggered fashion.<br>

The cat can jump up to 3 shelves at the same time: from shelf 1 to shelf 2 or 4 (the cat cannot climb on the shelf directly above its head), according to the illustration:



```

                 ┌────────┐

                 │-6------│

                 └────────┘

┌────────┐       

│------5-│        

└────────┘  ┌─────► OK!

            │    ┌────────┐

            │    │-4------│

            │    └────────┘

┌────────┐  │

│------3-│  │     

BANG!────┘  ├─────► OK! 

  ▲  |\_/|  │    ┌────────┐

  │ ("^-^)  │    │-2------│

  │ )   (   │    └────────┘

┌─┴─┴───┴┬──┘

│------1-│

└────────┘

```



## Input

Start and finish shelf numbers (always positive integers, finish no smaller than start)





## Task

Find the minimum number of jumps to go from start to finish





## Example

Start ```1```, finish ```5```, then answer is ```2``` ```(1 => 4 => 5 or 1 => 2 => 5)```



## Inspirers



![inspirers](https://i.ibb.co/BymvZtL/Inspirers.jpg)



---


🏷 `ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/62c93765cef6f10030dfa92b)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.*

###### *The solutions in each language code file associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are most often verbatim of those provided by the Kata.  However, in some cases it has been necessary to modify the test cases in order to have them function with my test runners and in my local environment.  On occasion, I may have added additional test cases to those provided.  Also, though I can't recall an instance, there may potentially have been reason to remove test cases for functional reasons.  Some Kata's also require (*or have*) code preloaded for their operation.  This code is included if it was required to make the tests work.  It is clearly identified under a **PRELOAD CODE** header if included.*

###### Most of my solutions are not commented (*though this will hopefully change*) as solutions are rarely submitted with comments on [Codewars.com](https://www.codewars.com).*
