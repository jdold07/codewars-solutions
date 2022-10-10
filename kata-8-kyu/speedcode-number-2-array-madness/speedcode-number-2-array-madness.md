# 8 kyu - SpeedCode #2 - Array Madness

##### **ID**: [56ff6a70e1a63ccdfa0001b1](https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1) | **Slug**: [speedcode-number-2-array-madness](https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1) | **Category**: `GAMES` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2016-04-02 ***by*** [donaldsebleung](https://www.codewars.com/users/donaldsebleung) | **Approved**: 2016-05-21 ***by*** [smile67](https://www.codewars.com/users/smile67)

##### **Languages Available**: javascript, csharp, python, factor, c

##### **My Completed Languages**: python ***as at*** 2022-10-08 | **Originally completed**: 2022-04-26

---

## Kata Description


# SpeedCode #2 - Array Madness



## Objective



Given two **integer arrays** ```a, b```, both of ```length >= 1```, create a program that returns ```true``` if the **sum of the squares** of each element in ```a``` is **strictly greater than** the **sum of the cubes** of each element in ```b```.



E.g.

```c

array_madness(3, {4, 5, 6}, 3, {1, 2, 3}) == true;

// because 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

```

```javascript

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

```

```csharp

Kata.ArrayMadness(new int[] {4, 5, 6}, new int[] {1, 2, 3}) => true // because 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

```

```python

array_madness([4, 5, 6], [1, 2, 3]) => True #because 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

```

```factor

{ 4 5 6 } { 1 2 3 } array-madness ! returns t since 4 2 ^ 5 2 ^ + 6 2 ^ + is greater than 1 3 ^ 2 3 ^ + 3 3 ^ +

```

Get your timer out.  Are you ready?  Ready, get set, GO!!!

---


🏷 `ARRAYS | PUZZLES`


[View this Kata on Codewars.com](https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
