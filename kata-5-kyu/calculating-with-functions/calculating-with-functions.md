# 5 kyu - Calculating with Functions

##### **ID**: [525f3eda17c7cd9f9e000b39](https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39) | **Slug**: [calculating-with-functions](https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">5 kyu</span>

##### **First Published**: 2013-10-17 ***by*** [BattleRattle](https://www.codewars.com/users/BattleRattle) | **Approved**: 2013-12-22 ***by*** [BattleRattle](https://www.codewars.com/users/BattleRattle)

##### **Languages Available**: javascript, ruby, python, haskell, factor

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2021-11-28

---

## Kata Description


This time we want to write calculations using functions and get the results. Let's have a look at some examples:



```javascript

seven(times(five())); // must return 35

four(plus(nine())); // must return 13

eight(minus(three())); // must return 5

six(dividedBy(two())); // must return 3

```

```haskell

seven $ times $ five   ->  35 :: Int

four $ plus $ nine     ->  13 :: Int

eight $ minus $ three  ->   5 :: Int

six $ dividedBy $ two  ->   3 :: Int

```

```ruby

seven(times(five)) # must return 35

four(plus(nine)) # must return 13

eight(minus(three)) # must return 5

six(divided_by(two)) # must return 3

```

```python

seven(times(five())) # must return 35

four(plus(nine())) # must return 13

eight(minus(three())) # must return 5

six(divided_by(two())) # must return 3

```

```factor

seven multiplied-by five   ! must evaluate to 35

four plus nine             ! must evaluate to 13

eight minus three          ! must evaluate to 5

six divided-by two         ! must evaluate to 3

```



Requirements:

~~~if:ruby,python

* There must be a function for each number from 0 ("zero") to 9 ("nine")

* There must be a function for each of the following mathematical operations: plus, minus, times, divided_by

* Each calculation consist of exactly one operation and two numbers

* The most outer function represents the left operand, the most inner function represents the right operand

* Division should be **integer division**. For example, this should return `2`, not `2.666666...`:

~~~

~~~if:factor

* There must be a word for each number from 0 ("zero") to 9 ("nine")

* There must be a word for each of the following mathematical operations: plus, minus, multiplied-by, divided-by

* Each calculation consist of exactly one operation and two numbers

* The leftmost word represents the left operand, the rightmost word represents the right operand

* Division should be **integer division**. For example, this should return `2`, not `2.666666...`:

~~~

~~~if-not:ruby,python,factor

* There must be a function for each number from 0 ("zero") to 9 ("nine")

* There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy

* Each calculation consist of exactly one operation and two numbers

* The most outer function represents the left operand, the most inner function represents the right operand

* Division should be **integer division**. For example, this should return `2`, not `2.666666...`:

~~~



```javascript

eight(dividedBy(three()));

```

```haskell

eight $ dividedBy $ three

```

```ruby

eight(divided_by(three))

```

```python

eight(divided_by(three()))

```

```factor

eight divided-by three

```

---


🏷 `FUNCTIONAL PROGRAMMING`


[View this Kata on Codewars.com](https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
