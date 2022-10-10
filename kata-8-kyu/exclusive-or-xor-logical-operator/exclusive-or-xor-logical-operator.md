# 8 kyu - Exclusive "or" (xor) Logical Operator

##### **ID**: [56fa3c5ce4d45d2a52001b3c](https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c) | **Slug**: [exclusive-or-xor-logical-operator](https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2016-03-29 ***by*** [donaldsebleung](https://www.codewars.com/users/donaldsebleung) | **Approved**: 2016-03-30 ***by*** [raulbc777](https://www.codewars.com/users/raulbc777)

##### **Languages Available**: javascript, ruby, haskell, python, java, coffeescript, typescript, clojure, csharp, cpp, c, nasm, go, cfml

##### **My Completed Languages**: python, javascript ***as at*** 2022-10-08 | **Originally completed**: 2022-04-26

---

## Kata Description


# Exclusive "or" (xor) Logical Operator



## Overview



In some scripting languages like PHP, there exists a logical operator (e.g. ```&&```, ```||```, ```and```, ```or```, etc.) called the "Exclusive Or" (hence the name of this Kata).  The exclusive or evaluates two booleans.  It then returns true if **exactly one of the two expressions are true**, false otherwise.  For example:





```php

false xor false == false // since both are false

true xor false == true // exactly one of the two expressions are true

false xor true == true // exactly one of the two expressions are true

true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.

```



## Task



Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function ```xor(a, b)``` where a and b are the two expressions to be evaluated.  Your ```xor``` function should have the behaviour described above, returning true if **exactly one of the two expressions evaluate to true**, false otherwise.



---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
