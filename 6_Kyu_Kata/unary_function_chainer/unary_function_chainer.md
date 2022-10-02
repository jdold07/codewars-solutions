# 6 kyu - Unary function chainer

##### **ID**: [54ca3e777120b56cb6000710](https://www.codewars.com/kata/54ca3e777120b56cb6000710) | **Slug**: [unary-function-chainer](https://www.codewars.com/kata/54ca3e777120b56cb6000710) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2015-01-29 ***by*** [tpatja](https://www.codewars.com/users/tpatja) | **Approved**: 2015-03-10 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: python, javascript

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2022-09-11

---

## Kata Description


Your task is to write a higher order function for chaining together

a list of unary functions. In other words, it should return a function

that does a left fold on the given functions.



```python

chained([a,b,c,d])(input)

```

Should yield the same result as

```python

d(c(b(a(input))))

```

---


🏷 `FUNCTIONAL PROGRAMMING | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/54ca3e777120b56cb6000710)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
