# 7 kyu - Basic Calculator

##### **ID**: [5296455e4fe0cdf2e000059f](https://www.codewars.com/kata/5296455e4fe0cdf2e000059f) | **Slug**: [basic-calculator](https://www.codewars.com/kata/5296455e4fe0cdf2e000059f) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2013-11-27 ***by*** [TheDoctor](https://www.codewars.com/users/TheDoctor) | **Approved**: 2013-12-02 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript, java, csharp, python

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2022-09-03

---

## Kata Description


Write a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null (throw an `ArgumentException` in C#).



```javascript

calculate(2,"+", 4); //Should return 6

calculate(6,"-", 1.5); //Should return 4.5

calculate(-4,"*", 8); //Should return -32

calculate(49,"/", -7); //Should return -7

calculate(8,"m", 2); //Should return null

calculate(4,"/",0) //should return null

```



Keep in mind, you cannot divide by zero. If an attempt to divide by zero is made, return null (throw an `ArgumentException` in C#)/(None in Python).

---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5296455e4fe0cdf2e000059f)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
