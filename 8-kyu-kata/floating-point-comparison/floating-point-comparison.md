# 8 kyu - Floating point comparison

##### **ID**: [5f9f43328a6bff002fa29eb8](https://www.codewars.com/kata/5f9f43328a6bff002fa29eb8) | **Slug**: [floating-point-comparison](https://www.codewars.com/kata/5f9f43328a6bff002fa29eb8) | **Category**: `BUG_FIXES` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2020-11-01 ***by*** [mauro-1](https://www.codewars.com/users/mauro-1) | **Approved**: 2020-12-06 ***by*** [user9644768](https://www.codewars.com/users/user9644768)

##### **Languages Available**: python, cpp

##### **My Completed Languages**: python ***as at*** 2022-10-05 | **Originally completed**: 2022-04-20

---

## Kata Description


## Introduction



`float`s have limited precision and are unable to exactly represent some values. Rounding errors accumulate with repeated computation, and numbers expected to be equal often differ slightly.



As a result, it is common advice to not use an exact equality comparison (`==`) with floats.



```python

>>> a, b, c = 1e-9, 1e-9, 3.33e7

>>> (a + b) + c == a + (b + c)

False



>>> 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 == 1.0

False

```

```cpp

a, b, c = 1e-9, 1e-9, 3.33e7;

(a + b) + c == a + (b + c);

--> false



0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 == 1.0;

--> false

```



The solution is to check if a computed value is close to an expected value, without requiring them to be exactly equal. It seems very easy, but many katas test float results the wrong way.





## Task



You have:

- a float value that comes from a computation and may have accumulated errors up to ±0.001

- a reference value



```if:python

- a function `approx_equals` that compare the two values taking into account loss of precision; the function should return `True` if and only if the two values are close to each other, the maximum allowed difference is `0.001`

```

```if:cpp

- a function `approx_equals` that compare the two values taking into account loss of precision; the function should return `true` if and only if the two values are close to each other, the maximum allowed difference is `0.001`

```



The function is bugged and sometimes returns wrong results.



Your task is to correct the bug.





## Note



This kata uses fixed tolerance for simplicity reasons, but usually relative tolerance is better. Fixed tolerance is useful for comparisons near zero or when the magnitude of the values is known.



---


🏷 `FUNDAMENTALS | MATHEMATICS | DEBUGGING`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5f9f43328a6bff002fa29eb8)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
