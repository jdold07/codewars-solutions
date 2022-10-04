# BETA - "1 + 1 = 0 "

##### **ID**: [625c3c2af115ff0035969f41](https://www.codewars.com/kata/625c3c2af115ff0035969f41) | **Slug**: [1-plus-1-equals-0](https://www.codewars.com/kata/625c3c2af115ff0035969f41) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:grey">*BETA*</span>

##### **First Published**: 2022-04-17 ***by*** [obidah](https://www.codewars.com/users/obidah) | **Approved**: *not available* ***by*** [*not available*](*https://www.codewars.com*)

##### **Languages Available**: python

##### **My Completed Languages**: python ***as at*** 2022-10-04 | **Originally completed**: 2022-05-04

---

## Kata Description


# Task :



Your ```Task``` Is To Create a Function ```wrong_equation()``` To Determine If This Mathematical Equation Is Wrong  Or Not But With a New Way.



# Input :



```wrong_equation()``` Will Take 1 Argument ```-->```  (eq)



The ```Input``` Will Always Be Like This :

```

"{Num1} + {Num2} = {result}"

```



# Explanation :



```Note :  You Must Follow These Steps ```



```Example```

```

wrong_equation(eq)



eq = "1 + 1 = 0"



Step 1: "1 + √1 = 0" --> The Square Root Of Num2(1) = 1/-1



Step 2: "1 + √(-1)*(-1) = 0" --> Find Any 2 Negative Similar Correct Numbers That The multiplication Result Of Them = Num2(1) If Any



Step 3: "1 + √((-1²)) = 0" --> Sqaure The Number Because X * X = X²



Step 4: "1 + (-1) = 0" --> Delete The Square Root With (²)Power 



Step 5: 

"1 + (-1) = 0 *Correct*" --> Add *Correct* If Mathematical Equation Is Right (1 - 1 = 0) So Add Correct  



If 1 + 1 != 0 --> Don't Add Anything -> Ex. (1 + 1 = 8) The Answer Is Not 8 So Don't Add Correct

```



# Output



You Must Add Every Step In a List As a String.



So The Output Of Our Example ``` 1 + 1 = 0 ``` Should Return :

```

["1 + 1 = 0", "1 + √1 = 0", "1 + √(-1)*(-1) = 0", "1 + √((-1²)) = 0", "1 + (-1) = 0",  "1 + (-1) = 0 *Correct*"]

```



# Note



You Must Use ["√", "²"] In The Output



If The Input Type Is Not String Return The Same Input.



If The Input Was Empty Return "Empty!!".



If Type √Num2 is Float You Must Subtract The Whole Float Numebr (Without Rounding The Number)



Good Luck :)

---


🏷 `ALGORITHMS | FUNDAMENTALS | MATHEMATICS | STRINGS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/625c3c2af115ff0035969f41)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
