# 7 kyu - Dictionary from two lists

##### **ID**: [5533c2a50c4fea6832000101](https://www.codewars.com/kata/5533c2a50c4fea6832000101) | **Slug**: [dictionary-from-two-lists](https://www.codewars.com/kata/5533c2a50c4fea6832000101) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2015-04-19 ***by*** [opportunity356](https://www.codewars.com/users/opportunity356) | **Approved**: 2015-04-28 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: python, javascript

##### **My Completed Languages**: javascript, python ***as at*** 2022-10-27 | **Originally completed**: 2022-10-27

---

## Kata Description


There are two lists, possibly of different lengths. The first one consists of keys, the second one consists of values. Write a function ```createDict(keys, values)``` that returns a dictionary created from keys and values. If there are not enough values, the rest of keys should have a ```None``` (**JS** `null`)value. If there not enough keys, just ignore the rest of values.



Example 1:

```python

keys = ['a', 'b', 'c', 'd']

values = [1, 2, 3]

createDict(keys, values) # returns {'a': 1, 'b': 2, 'c': 3, 'd': None}

```

```javascript

keys = ['a', 'b', 'c', 'd']

values = [1, 2, 3]

createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}

```



Example 2:

```python

keys = ['a', 'b', 'c']

values = [1, 2, 3, 4]

createDict(keys, values) # returns {'a': 1, 'b': 2, 'c': 3}

```

```javascript

keys = ['a', 'b', 'c']

values = [1, 2, 3, 4]

createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3}

```



---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5533c2a50c4fea6832000101)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.*

###### *The solutions in each language code file associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are most often verbatim of those provided by the Kata.  However, in some cases it has been necessary to modify the test cases in order to have them function with my test runners and in my local environment.  On occasion, I may have added additional test cases to those provided.  Also, though I can't recall an instance, there may potentially have been reason to remove test cases for functional reasons.  Some Kata's also require (*or have*) code preloaded for their operation.  This code is included if it was required to make the tests work.  It is clearly identified under a **PRELOAD CODE** header if included.*

###### Most of my solutions are not commented (*though this will hopefully change*) as solutions are rarely submitted with comments on [Codewars.com](https://www.codewars.com).*
