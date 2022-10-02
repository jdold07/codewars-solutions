# 8 kyu - noobCode 02: TRICKY QUESTIONS ( primitives and operator precedence)

##### **ID**: [572269697297444c570008b9](https://www.codewars.com/kata/572269697297444c570008b9) | **Slug**: [noobcode-02-tricky-questions-primitives-and-operator-precedence](https://www.codewars.com/kata/572269697297444c570008b9) | **Category**: `GAMES` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2016-04-28 ***by*** [ozymandias1](https://www.codewars.com/users/ozymandias1) | **Approved**: 2016-06-17 ***by*** [donaldsebleung](https://www.codewars.com/users/donaldsebleung)

##### **Languages Available**: javascript

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2022-08-28

---

## Kata Description


`1 < 2 < 3 === true` right? but could



`3 < 2 < 1 === true` too??



Here's your puzzle: Write a function `greaterThanLessThan` that takes three arguments, a, b, and c, and returns a boolean (true or false), such that:



```

greaterThanLessThan(1, 2 3) === true

```



and



```

greaterThanLessThan(3, 2 1) === true

```



But also



```

graterThanLessThan(-3, -2, -1) == false

```



with more examples on the expected behavior in the test cases.



## Hints



1. Arguments do not necessarily have to be in strict ascending or descending order, as indicated by the example test cases.



  Check out the included test cases - not all arguments are going to return true! It's up to you to figure out which ones do and which ones don't. 



2. This challenge is a LOT easier than it might seem at first. Don't focus too much on building functions - just pay attention to precedence.



Best of luck!



```

Need some pointers? Brush up on your operator precedence here and you'll figure it out:

https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Operator_Precedence



Don't forget your primitives either:

https://developer.mozilla.org/en-US/docs/Glossary/Primitive

```



---


🏷 `PUZZLES`


[View this Kata on Codewars.com](https://www.codewars.com/kata/572269697297444c570008b9)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
