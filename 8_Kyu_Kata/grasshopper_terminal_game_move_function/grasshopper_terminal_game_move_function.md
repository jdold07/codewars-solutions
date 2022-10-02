# 8 kyu - Grasshopper - Terminal game move function

##### **ID**: [563a631f7cbbc236cf0000c2](https://www.codewars.com/kata/563a631f7cbbc236cf0000c2) | **Slug**: [grasshopper-terminal-game-move-function](https://www.codewars.com/kata/563a631f7cbbc236cf0000c2) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2015-11-07 ***by*** [danleavitt0](https://www.codewars.com/users/danleavitt0) | **Approved**: 2017-10-16 ***by*** [Voile](https://www.codewars.com/users/Voile)

##### **Languages Available**: javascript, ruby, coffeescript, csharp, python, rust, cpp, racket, haskell, sql, shell, java, elm, typescript, reason, r, php, julia, elixir, crystal, dart, factor, nasm, c, bf, clojure, lua, forth, go, fsharp, cfml, erlang, fortran, groovy, kotlin, nim, objc, powershell, prolog, purescript, scala, solidity, vb, swift, cobol

##### **My Completed Languages**: python ***as at*** 2022-10-02 | **Originally completed**: 2022-04-20

---

## Kata Description


## Terminal game move function



In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice **two times**.



~~~if-not:sql

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

~~~

~~~if:sql

In SQL, you will be given a table `moves` with columns `position` and `roll`. Return a table which uses the current position of the hero and the roll (1-6) and returns the new position in a column `res`.

~~~





### Example:

```python

move(3, 6) should equal 15

```



```if:bf

### BF:



Since this is an 8kyu kata, you are provided a modified runBF function, numericRunBF, that automatically parses input and output for your ease.



See the sample test cases to see what I mean: You can simply input two numbers and get a number as output (unless you're doing something wrong), so it should be convenient for you to modify the tests as you wish.



Oh, and you won't have to worry about overflow, the correct answer will never be higher than 255. :)

```



---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/563a631f7cbbc236cf0000c2)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
