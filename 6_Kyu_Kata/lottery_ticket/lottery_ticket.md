# 6 kyu - Lottery Ticket

##### **ID**: [57f625992f4d53c24200070e](https://www.codewars.com/kata/57f625992f4d53c24200070e) | **Slug**: [lottery-ticket](https://www.codewars.com/kata/57f625992f4d53c24200070e) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2016-10-24 ***by*** [PG1](https://www.codewars.com/users/PG1) | **Approved**: 2016-12-20 ***by*** [gabbek](https://www.codewars.com/users/gabbek)

##### **Languages Available**: javascript, php, ruby, python, cpp, c, haskell, kotlin, julia, elixir, rust

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2022-09-13

---

## Kata Description


Time to win the lottery!



Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot. 



Example ticket:



```javascript

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]

```

```cpp

{ { "ABC", 65 }, { "HGR", 74 }, { "BYHT", 74 } }

```

```c

{ { "ABC", 65 }, { "HGR", 74 }, { "BYHT", 74 } }

```

```julia

[ [ "ABC", 65 ], [ "HGR", 74 ], [ "BYHT", 74 ] ]

```

```rust

[ ( "ABC", 65 ), ( "HGR", 74 ), ( "BYHT", 74 ) ]

```



To do this, you must first count the 'mini-wins' on your ticket.  Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.



Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.



All inputs will be in the correct format. Strings on tickets are not always the same length.







---


🏷 `FUNDAMENTALS | STRINGS | ARRAYS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/57f625992f4d53c24200070e)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
