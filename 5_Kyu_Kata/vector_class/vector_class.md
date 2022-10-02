# 5 kyu - Vector class

##### **ID**: [526dad7f8c0eb5c4640000a4](https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4) | **Slug**: [vector-class](https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:yellow">5 kyu</span>

##### **First Published**: 2013-10-28 ***by*** [eugene-bulkin](https://www.codewars.com/users/eugene-bulkin) | **Approved**: 2013-12-06 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript, coffeescript, python, typescript

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2022-09-16

---

## Kata Description


Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:



```coffeescript

a = new Vector([1, 2, 3])

b = new Vector([3, 4, 5])

c = new Vector([5, 6, 7, 8])



a.add(b)      # should return a new Vector([4, 6, 8])

a.subtract(b) # should return a new Vector([-2, -2, -2])

a.dot(b)      # should return 1*3 + 2*4 + 3*5 = 26

a.norm()      # should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)

a.add(c)      # throws an error

```

```javascript

var a = new Vector([1, 2, 3]);

var b = new Vector([3, 4, 5]);

var c = new Vector([5, 6, 7, 8]);



a.add(b);      // should return a new Vector([4, 6, 8])

a.subtract(b); // should return a new Vector([-2, -2, -2])

a.dot(b);      // should return 1*3 + 2*4 + 3*5 = 26

a.norm();      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)

a.add(c);      // throws an error

```

```python

a = Vector([1, 2, 3])

b = Vector([3, 4, 5])

c = Vector([5, 6, 7, 8])



a.add(b)      # should return a new Vector([4, 6, 8])

a.subtract(b) # should return a new Vector([-2, -2, -2])

a.dot(b)      # should return 1*3 + 2*4 + 3*5 = 26

a.norm()      # should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)

a.add(c)      # raises an exception

```



If you try to add, subtract, or dot two vectors with different lengths, ***you must throw an error***!



Also provide:



- a `toString` method, so that using the vectors from above, `a.toString() === '(1,2,3)'` (in Python, this is a `__str__` method, so that `str(a) == '(1,2,3)'`)

- an `equals` method, to check that two vectors that have the same components are equal



**Note:** the test cases will utilize the user-provided `equals` method.

---


🏷 `OBJECT-ORIENTED PROGRAMMING | ALGORITHMS | LINEAR ALGEBRA`


[View this Kata on Codewars.com](https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
