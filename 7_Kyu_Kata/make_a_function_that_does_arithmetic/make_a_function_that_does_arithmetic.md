# 7 kyu - Make a function that does arithmetic!

##### **ID**: [583f158ea20cfcbeb400000a](https://www.codewars.com/kata/583f158ea20cfcbeb400000a) | **Slug**: [make-a-function-that-does-arithmetic](https://www.codewars.com/kata/583f158ea20cfcbeb400000a) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2016-11-30 ***by*** [ZooeyMiller](https://www.codewars.com/users/ZooeyMiller) | **Approved**: 2016-11-30 ***by*** [JohanWiltink](https://www.codewars.com/users/JohanWiltink)

##### **Languages Available**: javascript, coffeescript, python, ruby, crystal, c, java, haskell, csharp, lua, go, factor, scala

##### **My Completed Languages**: python ***as at*** 2022-10-02 | **Originally completed**: 2022-04-22

---

## Kata Description


Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them. 





```a``` and ```b``` will both be positive integers, and ```a``` will always be the first number in the operation, and ```b``` always the second.



The four operators are "add", "subtract", "divide", "multiply". 



~~~if-not:haskell

A few **examples:(Input1, Input2, Input3 --> Output)**

```

5, 2, "add"      --> 7

5, 2, "subtract" --> 3

5, 2, "multiply" --> 10

5, 2, "divide"   --> 2.5

```

~~~



~~~if:haskell

In **Haskell**:



  1. The operation is defined as

```haskell

data Operation = Add | Divide | Multiply | Subtract deriving (Eq, Show, Enum, Bounded)

```

  2. The arithmetic function as 

```haskell

arithmetic :: Double -> Double -> Operation -> Double

arithmetic :: Fractional a => a -> a -> Operation -> a

```

~~~





Try to do it without using if statements!



---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/583f158ea20cfcbeb400000a)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
