# 7 kyu - Computer problem series #1: Fill the Hard Disk Drive

##### **ID**: [5d49c93d089c6e000ff8428c](https://www.codewars.com/kata/5d49c93d089c6e000ff8428c) | **Slug**: [computer-problem-series-number-1-fill-the-hard-disk-drive](https://www.codewars.com/kata/5d49c93d089c6e000ff8428c) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2019-08-08 ***by*** [albertogcmr](https://www.codewars.com/users/albertogcmr) | **Approved**: 2019-08-14 ***by*** [daniloxxv](https://www.codewars.com/users/daniloxxv)

##### **Languages Available**: python, dart, coffeescript, php, typescript, cpp, ruby, c, javascript, haskell, crystal, crystal, julia, elixir, clojure, csharp, lua, cobol

##### **My Completed Languages**: typescript, javascript ***as at*** 2022-10-18 | **Originally completed**: 2022-10-18

---

## Kata Description


Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue. 



### Input:



* Array of file sizes `(0 <= s <= 100)`

* Capacity of the HD `(0 <= c <= 500)`



### Output:



* Number of files that can be fully saved in the HD. 



### Examples:



```

save([4,4,4,3,3], 12) -> 3

# 4+4+4 <= 12, but 4+4+4+3 > 12

```



```

save([4,4,4,3,3], 11) -> 2

# 4+4 <= 11, but 4+4+4 > 11

```



Do not expect any negative or invalid inputs.

---


🏷 `LISTS | ARRAYS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5d49c93d089c6e000ff8428c)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.*

###### *The solutions in each language code file associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are most often verbatim of those provided by the Kata.  However, in some cases it has been necessary to modify the test cases in order to have them function with my test runners and in my local environment.  On occasion, I may have added additional test cases to those provided.  Also, though I can't recall an instance, there may potentially have been reason to remove test cases for functional reasons.  Some Kata's also require (*or have*) code preloaded for their operation.  This code is included if it was required to make the tests work.  It is clearly identified under a **PRELOAD CODE** header if included.*

###### Most of my solutions are not commented (*though this will hopefully change*) as solutions are rarely submitted with comments on [Codewars.com](https://www.codewars.com).*
