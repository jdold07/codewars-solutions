# 8 kyu - Thinkful - Number Drills: Blue and red marbles

##### **ID**: [5862f663b4e9d6f12b00003b](https://www.codewars.com/kata/5862f663b4e9d6f12b00003b) | **Slug**: [thinkful-number-drills-blue-and-red-marbles](https://www.codewars.com/kata/5862f663b4e9d6f12b00003b) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2016-12-27 ***by*** [Grae-Drake](https://www.codewars.com/users/Grae-Drake) | **Approved**: 2017-10-24 ***by*** [ZED.CWT](https://www.codewars.com/users/ZED.CWT)

##### **Languages Available**: python, rust, ruby, groovy, haskell, javascript, csharp, java, c

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2022-08-24

---

## Kata Description


You and a friend have decided to play a game to drill your statistical intuitions. The game works like this:



You have a bunch of red and blue marbles. To start the game you grab a handful of marbles of each color and put them into the bag, keeping track of how many of each color go in. You take turns reaching into the bag, guessing a color, and then pulling one marble out. You get a point if you guessed correctly. The trick is you only have three seconds to make your guess, so you have to think quickly.



You've decided to write a function, `guessBlue()` to help automatically calculate whether you should guess "blue" or "red". The function should take four arguments:



 * the number of blue marbles you put in the bag to start

 * the number of red marbles you put in the bag to start

 * the number of blue marbles pulled out so far (always lower than the starting number of blue marbles)

 * the number of red marbles pulled out so far (always lower than the starting number of red marbles)



`guessBlue()` should return the probability of drawing a blue marble, expressed as a float. For example, `guessBlue(5, 5, 2, 3)` should return `0.6`.

---


🏷 `PROBABILITY | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5862f663b4e9d6f12b00003b)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
