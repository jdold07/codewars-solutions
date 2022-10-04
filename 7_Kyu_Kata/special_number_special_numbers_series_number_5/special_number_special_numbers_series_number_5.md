# 7 kyu - Special  Number (Special Numbers Series  #5)

##### **ID**: [5a55f04be6be383a50000187](https://www.codewars.com/kata/5a55f04be6be383a50000187) | **Slug**: [special-number-special-numbers-series-number-5](https://www.codewars.com/kata/5a55f04be6be383a50000187) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2018-01-10 ***by*** [MrZizoScream](https://www.codewars.com/users/MrZizoScream) | **Approved**: 2018-01-10 ***by*** [Voile](https://www.codewars.com/users/Voile)

##### **Languages Available**: cpp, objc, javascript, ruby, crystal, python, nasm, csharp, c, java, haskell, php, dart, julia, typescript, coffeescript, swift, prolog, clojure, rust, cobol

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2022-09-23

---

## Kata Description


# Definition 



A number is a **_Special Number_** *if it’s digits only consist 0, 1, 2, 3, 4 or 5*



**_Given_** a number *determine if it special number or not* .  







# Warm-up (Highly recommended)



# [Playing With Numbers Series](https://www.codewars.com/collections/playing-with-numbers)

___



# Notes 



* **_The number_** passed will be **_positive_** (N > 0) .



* All **single-digit numbers** within the interval **_[1:5]_** are considered as **_special number_**. 

___



# Input >> Output Examples



```

specialNumber(2) ==> return "Special!!"

```

## Explanation: 



It's **_a single-digit number_** within the interval **_[1:5]_** . 



```

specialNumber(9) ==> return "NOT!!"

```

## Explanation:



Although, it's a single-digit number but **_Outside the interval [1:5]_** .



```

specialNumber(23) ==> return "Special!!"

```

## Explanation: 



All **_the number's digits_** formed from the interval **_[0:5]_** digits .



```

specialNumber(39) ==> return "NOT!!"

```

## Explanation: 



Although, *there is a digit (3) Within the interval* **_But_** **_the second digit is not (Must be ALL The Number's Digits )_** .



```

specialNumber(59) ==> return "NOT!!"

```

## Explanation:  



Although, *there is a digit (5) Within the interval* **_But_** **_the second digit is not (Must be ALL The Number's Digits )_** .



```

specialNumber(513) ==> return "Special!!"

```

___

```

specialNumber(709) ==> return "NOT!!"

```

___



# [For More Enjoyable Katas](http://www.codewars.com/users/MrZizoScream/authored)          



### ALL translation are welcomed



## Enjoy Learning !!

# Zizou



---


🏷 `FUNDAMENTALS | MATHEMATICS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5a55f04be6be383a50000187)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
