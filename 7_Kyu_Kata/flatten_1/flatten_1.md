# 7 kyu - Flatten

##### **ID**: [5250a89b1625e5decd000413](https://www.codewars.com/kata/5250a89b1625e5decd000413) | **Slug**: [flatten-1](https://www.codewars.com/kata/5250a89b1625e5decd000413) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2013-10-06 ***by*** [xcthulhu](https://www.codewars.com/users/xcthulhu) | **Approved**: *not available* ***by*** [*not available*](*https://www.codewars.com*)

##### **Languages Available**: coffeescript, javascript, ruby, python

##### **My Completed Languages**: coffeescript ***as at*** 2022-10-04 | **Originally completed**: 2022-09-24

---

## Kata Description


Write a function that flattens an `Array` of `Array` objects into a flat `Array`.  Your function must only do one level of flattening.



```javascript

flatten([1,2,3]) // => [1,2,3]

flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]

flatten([[[1,2,3]]]) // => [[1,2,3]]

```



```coffeescript

flatten [1,2,3] # => [1,2,3]

flatten [[1,2,3],["a","b","c"],[1,2,3]]  # => [1,2,3,"a","b","c",1,2,3]

flatten [[[1,2,3]]] # => [[1,2,3]]

```



```ruby

flatten [1,2,3] # => [1,2,3]

flatten [[1,2,3],["a","b","c"],[1,2,3]]  # => [1,2,3,"a","b","c",1,2,3]

flatten [[[1,2,3]]] # => [[1,2,3]]

```



```python

flatten [1,2,3] # => [1,2,3]

flatten [[1,2,3],["a","b","c"],[1,2,3]]  # => [1,2,3,"a","b","c",1,2,3]

flatten [[[1,2,3]]] # => [[1,2,3]]

```

---


🏷 `FUNCTIONAL PROGRAMMING | ARRAYS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5250a89b1625e5decd000413)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
