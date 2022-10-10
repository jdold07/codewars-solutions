# 8 kyu - NBA full 48 minutes average

##### **ID**: [587c2d08bb65b5e8040004fd](https://www.codewars.com/kata/587c2d08bb65b5e8040004fd) | **Slug**: [nba-full-48-minutes-average](https://www.codewars.com/kata/587c2d08bb65b5e8040004fd) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2017-01-16 ***by*** [EricDalrymple91](https://www.codewars.com/users/EricDalrymple91) | **Approved**: 2017-01-20 ***by*** [suic](https://www.codewars.com/users/suic)

##### **Languages Available**: python, javascript, csharp, ruby

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2022-08-27

---

## Kata Description


An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.



Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.



Examples:

```javascript

pointsPer48(12, 20) // 28.8

pointsPer48(10, 10) // 48 

pointsPer48(5, 17) // 14.1 

pointsPer48(0, 0) // 0

```

```python

nba_extrap(12, 20) # 28.8

nba_extrap(10, 10) # 48

nba_extrap(5, 17) # 14.1

nba_extrap(0, 0) # 0

```

```csharp

Kata.NbaExtrap(12, 20) => 28.8

Kata.NbaExtrap(10, 10) => 48

Kata.NbaExtrap(5, 17)  => 14.1

Kata.NbaExtrap(0, 0)   => 0

```

```ruby

nba_extrap(12, 20) # 28.8

nba_extrap(10, 10) # 48

nba_extrap(5, 17) # 14.1

nba_extrap(0, 0) # 0

```



Notes:<br>

All inputs will be either be an integer or float.<br>

Follow your dreams!



---


🏷 `FUNDAMENTALS | MATHEMATICS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/587c2d08bb65b5e8040004fd)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
