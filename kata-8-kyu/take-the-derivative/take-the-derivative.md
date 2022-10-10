# 8 kyu - Take the Derivative

##### **ID**: [5963c18ecb97be020b0000a2](https://www.codewars.com/kata/5963c18ecb97be020b0000a2) | **Slug**: [take-the-derivative](https://www.codewars.com/kata/5963c18ecb97be020b0000a2) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2017-07-11 ***by*** [K-Calderon-ASC](https://www.codewars.com/users/K-Calderon-ASC) | **Approved**: 2017-08-01 ***by*** [smile67](https://www.codewars.com/users/smile67)

##### **Languages Available**: javascript, csharp, python, ruby, elixir, c, haskell, rust, go, d

##### **My Completed Languages**: python ***as at*** 2022-10-08 | **Originally completed**: 2022-04-26

---

## Kata Description


This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.



Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). `"^1"` should not be truncated when exponent = 2.





For example:

``` javascript

derive(7, 8)

```

``` haskell

derive 7 8

```

In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output `"56x^7"`, the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.



``` javascript

derive(7, 8) --> this should output "56x^7" 

derive(5, 9) --> this should output "45x^8" 

```

``` haskell

derive 7 8 == "56x^7"

derive 5 9 == "45x^8"

```



**Notes:**

* The output of this function should be a string

* The exponent will never be 1, and neither number will ever be 0



---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5963c18ecb97be020b0000a2)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
