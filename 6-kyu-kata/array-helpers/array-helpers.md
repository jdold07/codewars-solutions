# 6 kyu - Array Helpers

##### **ID**: [525d50d2037b7acd6e000534](https://www.codewars.com/kata/525d50d2037b7acd6e000534) | **Slug**: [array-helpers](https://www.codewars.com/kata/525d50d2037b7acd6e000534) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2013-10-16 ***by*** [BattleRattle](https://www.codewars.com/users/BattleRattle) | **Approved**: *not available* ***by*** [*not available*](*https://www.codewars.com*)

##### **Languages Available**: javascript, ruby

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2022-09-04

---

## Kata Description


This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in `Array` class with the following methods: `square()`, `cube()`, `average()`, `sum()`, `even()` and `odd()`.



Explanation:



* `square()` must return a copy of the array, containing all values squared

* `cube()` must return a copy of the array, containing all values cubed

* `average()` must return the average of all array values; on an empty array must return `NaN` *(note: the empty array is **not** tested in Ruby!)*

* `sum()` must return the sum of all array values

* `even()` must return an array of all even numbers

* `odd()` must return an array of all odd numbers



Note: the original array **must not** be changed in any case!



## Example

```javascript

var numbers = [1, 2, 3, 4, 5];



numbers.square();  // must return [1, 4, 9, 16, 25]

numbers.cube();    // must return [1, 8, 27, 64, 125]

numbers.average(); // must return 3

numbers.sum();     // must return 15

numbers.even();    // must return [2, 4]

numbers.odd();     // must return [1, 3, 5]

```

```ruby

numbers = [1, 2, 3, 4, 5]



numbers.square()  # must return [1, 4, 9, 16, 25]

numbers.cube()    # must return [1, 8, 27, 64, 125]

numbers.average() # must return 3

numbers.sum()     # must return 15

numbers.even()    # must return [2, 4]

numbers.odd()     # must return [1, 3, 5]

```

---


🏷 `ARRAYS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/525d50d2037b7acd6e000534)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
