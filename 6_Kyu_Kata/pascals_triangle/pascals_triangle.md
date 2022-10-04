# 6 kyu - Pascal's Triangle

##### **ID**: [5226eb40316b56c8d500030f](https://www.codewars.com/kata/5226eb40316b56c8d500030f) | **Slug**: [pascals-triangle](https://www.codewars.com/kata/5226eb40316b56c8d500030f) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2013-09-04 ***by*** [boatmeme](https://www.codewars.com/users/boatmeme) | **Approved**: *not available* ***by*** [*not available*](*https://www.codewars.com*)

##### **Languages Available**: javascript, ruby, coffeescript, csharp, haskell, php, python, crystal, java, rust, cpp, c, cobol

##### **My Completed Languages**: python ***as at*** 2022-10-04 | **Originally completed**: 2022-05-01

---

## Kata Description


In mathematics, Pascal's triangle is a triangular array of the binomial coefficients expressed with formula



```math

\lparen {n \atop k} \rparen = \frac {n!} {k!(n-k)!}

```



where `n` denotes a row of the triangle, and `k` is a position of a term in the row.



![Pascal's Triangle](http://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)



You can read [Wikipedia article on Pascal's Triangle](http://en.wikipedia.org/wiki/Pascal's_triangle) for more information.



### Task



Write a function that, given a depth `n`, returns `n` top rows of Pascal's Triangle flattened into a one-dimensional list/array. 



### Example:



```

n = 1: [1]

n = 2: [1,  1, 1]

n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]

```



```if-not:python,ruby

### Note



Beware of overflow. Requested terms of a triangle are guaranteed to fit into the returned type, but depending on seleced method of calculations, intermediate values can be larger.

```



---


🏷 `ARRAYS | MATHEMATICS | ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5226eb40316b56c8d500030f)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
