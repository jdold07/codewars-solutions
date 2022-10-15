# 7 kyu - 'x' marks the spot.

##### **ID**: [5777fe3f355edbf0a5000d11](https://www.codewars.com/kata/5777fe3f355edbf0a5000d11) | **Slug**: [x-marks-the-spot-1](https://www.codewars.com/kata/5777fe3f355edbf0a5000d11) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2016-07-02 ***by*** [user4386369](https://www.codewars.com/users/user4386369) | **Approved**: 2016-07-04 ***by*** [joh_pot](https://www.codewars.com/users/joh_pot)

##### **Languages Available**: javascript, c

##### **My Completed Languages**: javascript ***as at*** 2022-10-15 | **Originally completed**: 2022-10-14

---

## Kata Description


### Task:



Given a two dimensional array, return the co-ordinates of `x`.



```if:javascript

If `x` is not inside the array, or if `x` appears multiple times, return `[]`.

```



```if:c

If `x` is not inside the array, or if `x` appears multiple times return `{-1, -1}`.

```



The co-ordinates should be zero indexed in row-major order.  

You should assume you will always get an array as input. The array will only contain `'x'`s and `'o'`s.



### Examples



```

Input: []

```

```if:javascript

Return an empty array if input is an empty array => []

```

```if:c

Return {-1, -1} if input is an empty array => {-1, -1}

```



```

Input: [

  ['o', 'o'],

  ['o', 'o']

]

```

```if:javascript

Return an empty array if no x found => []

```

```if:c

Return {-1, -1} if no x found => {-1,-1}

```



```

Input: [

  ['x', 'o'],

  ['o', 'x']

]

```

```if:javascript

Return an empty array if more than one x found => []

```

```if:c

Return {-1, -1} if more than one x found => {-1, -1}

```



```

Input: [

  ['x', 'o'],

  ['o', 'o']

]

Return [0,0] when x at top left => [0, 0]



Input: [

  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],

  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],

  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],

  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],

  ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],

  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']

]

Return [4,6] for the example above => [4, 6]

```

---


🏷 `FUNDAMENTALS | ARRAYS | MATRIX`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5777fe3f355edbf0a5000d11)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.*

###### *The solutions in each language code file associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are most often verbatim of those provided by the Kata.  However, in some cases it has been necessary to modify the test cases in order to have them function with my test runners and in my local environment.  On occasion, I may have added additional test cases to those provided.  Also, though I can't recall an instance, there may potentially have been reason to remove test cases for functional reasons.  Some Kata's also require (*or have*) code preloaded for their operation.  This code is included if it was required to make the tests work.  It is clearly identified under a **PRELOAD CODE** header if included.*

###### Most of my solutions are not commented (*though this will hopefully change*) as solutions are rarely submitted with comments on [Codewars.com](https://www.codewars.com).*
