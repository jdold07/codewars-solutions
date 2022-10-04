# 6 kyu - Bouncing Balls

##### **ID**: [5544c7a5cb454edb3c000047](https://www.codewars.com/kata/5544c7a5cb454edb3c000047) | **Slug**: [bouncing-balls](https://www.codewars.com/kata/5544c7a5cb454edb3c000047) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2015-05-02 ***by*** [g964](https://www.codewars.com/users/g964) | **Approved**: 2015-05-06 ***by*** [Abbe](https://www.codewars.com/users/Abbe)

##### **Languages Available**: ruby, python, clojure, java, csharp, javascript, haskell, coffeescript, typescript, cpp, elixir, php, crystal, fsharp, c, rust, swift, go, r, shell, ocaml, kotlin, fortran, julia, scala, powershell, nim, racket, reason, prolog, pascal, factor, raku, perl, elm, d, erlang

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2021-11-07

---

## Kata Description


A child is playing with a ball on the nth floor of a tall building.

The height of this floor, *h*, is known. 



He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

 

His mother looks out of a window 1.5 meters from the ground.



How many times will the mother see the ball pass in front of her window (including when it's falling _and_ bouncing?



#### Three conditions must be met for a valid experiment:



*  Float parameter "h" in meters must be greater than 0

*  Float parameter "bounce" must be greater than 0 and less than 1

*  Float parameter "window" must be less than h.



**If all three conditions above are fulfilled, return a positive integer, otherwise return -1.**



#### Note:

The ball can only be seen if the height of the rebounding ball is strictly *greater* than the window parameter.



#### Examples:

```

- h = 3, bounce = 0.66, window = 1.5, result is 3



- h = 3, bounce = 1, window = 1.5, result is -1 



(Condition 2) not fulfilled).

```

---


🏷 `PUZZLES | ALGORITHMS | MATHEMATICS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5544c7a5cb454edb3c000047)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
