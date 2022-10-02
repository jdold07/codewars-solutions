# 8 kyu - Closest elevator

##### **ID**: [5c374b346a5d0f77af500a5a](https://www.codewars.com/kata/5c374b346a5d0f77af500a5a) | **Slug**: [closest-elevator](https://www.codewars.com/kata/5c374b346a5d0f77af500a5a) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2019-01-16 ***by*** [wildhamster26](https://www.codewars.com/users/wildhamster26) | **Approved**: 2019-01-17 ***by*** [JohanWiltink](https://www.codewars.com/users/JohanWiltink)

##### **Languages Available**: javascript, python, c, kotlin, purescript, ruby, php, racket

##### **My Completed Languages**: python ***as at*** 2022-10-02 | **Originally completed**: 2022-04-26

---

## Kata Description


Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered `0` to `2`), write a function `elevator` accepting 3 arguments (in order):



- `left` - The current floor of the left elevator

- `right` - The current floor of the right elevator

- `call` -  The floor that called an elevator



It should return the name of the elevator closest to the called floor (`"left"`/`"right"`).



In the case where both elevators are equally distant from the called floor, choose the elevator to the right.



You can assume that the inputs will always be valid integers between 0-2.



Examples:



```javascript

elevator(0, 1, 0); // => "left"

elevator(0, 1, 1); // => "right"

elevator(0, 1, 2); // => "right"

elevator(0, 0, 0); // => "right"

elevator(0, 2, 1); // => "right"

```

```python

elevator(0, 1, 0) # => "left"

elevator(0, 1, 1) # => "right"

elevator(0, 1, 2) # => "right"

elevator(0, 0, 0) # => "right"

elevator(0, 2, 1) # => "right"

```

```kotlin

elevator(0, 1, 0) // => "left"

elevator(0, 1, 1) // => "right"

elevator(0, 1, 2) // => "right"

elevator(0, 0, 0) // => "right"

elevator(0, 2, 1) // => "right"

```

```purescript

elevator 0 1 0 -- => "left"

elevator 0 1 1 -- => "right"

elevator 0 1 2 -- => "right"

elevator 0 0 0 -- => "right"

elevator 0 2 1 -- => "right"

```

```racket

(elevator 0 1 0) ; "left"

(elevator 0 1 1) ; "right"

(elevator 0 1 2) ; "right"

(elevator 0 0 0) ; "right"

(elevator 0 2 1) ; "right"

```

---


🏷 `ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5c374b346a5d0f77af500a5a)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
