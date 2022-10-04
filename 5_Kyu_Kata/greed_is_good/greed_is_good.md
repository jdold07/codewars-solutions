# 5 kyu - Greed is Good

##### **ID**: [5270d0d18625160ada0000e4](https://www.codewars.com/kata/5270d0d18625160ada0000e4) | **Slug**: [greed-is-good](https://www.codewars.com/kata/5270d0d18625160ada0000e4) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:yellow">5 kyu</span>

##### **First Published**: 2013-10-30 ***by*** [JulianNicholls](https://www.codewars.com/users/JulianNicholls) | **Approved**: *not available* ***by*** [*not available*](*https://www.codewars.com*)

##### **Languages Available**: javascript, coffeescript, ruby, csharp, python, java, cpp, c, fsharp, clojure, cobol

##### **My Completed Languages**: python ***as at*** 2022-10-04 | **Originally completed**: 2022-05-02

---

## Kata Description


Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.



``` 

 Three 1's => 1000 points

 Three 6's =>  600 points

 Three 5's =>  500 points

 Three 4's =>  400 points

 Three 3's =>  300 points

 Three 2's =>  200 points

 One   1   =>  100 points

 One   5   =>   50 point

```



A single die can only be counted once in each roll. For example, a given "5" can only count as part of a 

triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.



Example scoring



```

 Throw       Score

 ---------   ------------------

 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)

 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)

 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

```



In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.



---


🏷 `ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5270d0d18625160ada0000e4)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
