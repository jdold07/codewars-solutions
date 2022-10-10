# 8 kyu - Expressions Matter 

##### **ID**: [5ae62fcf252e66d44d00008e](https://www.codewars.com/kata/5ae62fcf252e66d44d00008e) | **Slug**: [expressions-matter](https://www.codewars.com/kata/5ae62fcf252e66d44d00008e) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2018-04-29 ***by*** [MrZizoScream](https://www.codewars.com/users/MrZizoScream) | **Approved**: 2022-06-19 ***by*** [ejini战神](https://www.codewars.com/users/ejini%E6%88%98%E7%A5%9E)

##### **Languages Available**: cpp, c, crystal, ruby, javascript, python, csharp, haskell, php, dart, typescript, julia, coffeescript, racket, reason, java, elixir, rust, factor, kotlin, clojure, elm, go, sql, r, shell, forth, fortran, purescript, powershell, objc, nim, lua, groovy, fsharp, erlang, scala, vb, swift, prolog, cfml, nasm, solidity, ocaml, haxe, cobol, commonlisp

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2021-12-06

---

## Kata Description


## Task

* **_Given_** *three integers* `a` ,`b` ,`c`, **_return_** *the **_largest number_** obtained after inserting the following operators and brackets*: `+`, `*`, `()`

* In other words , **_try every combination of a,b,c with [*+()] , and return the Maximum Obtained_** <span style="color:red">(Read the notes for more detail about it)</span>



## Example



**_With the numbers are 1, 2 and 3_** , *here are some ways of placing signs and brackets*:



* `1 * (2 + 3) = 5`

* `1 * 2 * 3 = 6`

* `1 + 2 * 3 = 7`

* `(1 + 2) * 3 = 9`



So **_the maximum value_** that you can obtain is  **_9_**.





## Notes 



* **_The numbers_** *are always* **_positive_**. 

* **_The numbers_** *are in the range* **_(1  ≤  a, b, c  ≤  10)_**.

* *You can use the same operation* **_more than once_**.

* **It's not necessary** *to place all the signs and brackets*.

* **_Repetition_** *in numbers may occur* .

* You **_cannot swap the operands_**. For instance, in the given example **_you cannot get expression_** `(1 + 3) * 2 = 8`.



___

# Input >> Output Examples:



```

expressionsMatter(1,2,3)  ==>  return 9

```

## **_Explanation_**:

*After placing signs and brackets, the **_Maximum value_** obtained from the expression* `(1+2) * 3 = 9`.

___



```

expressionsMatter(1,1,1)  ==>  return 3

```

## **_Explanation_**:

*After placing signs, the **_Maximum value_** obtained from the expression is* `1 + 1 + 1 = 3`.

___



```

expressionsMatter(9,1,1)  ==>  return 18

```

## **_Explanation_**:

*After placing signs and brackets, the **_Maximum value_** obtained from the expression is* `9 * (1+1) = 18`.

___# Task

* **_Given_** *three integers* `a` ,`b` ,`c`, **_return_** *the **_largest number_** obtained after inserting the following operators and brackets*: `+`, `*`, `()`

* In other words , **_try every combination of a,b,c with [*+()] , and return the Maximum Obtained_**



## Example



**_With the numbers are 1, 2 and 3_** , *here are some ways of placing signs and brackets*:



* `1 * (2 + 3) = 5`

* `1 * 2 * 3 = 6`

* `1 + 2 * 3 = 7`

* `(1 + 2) * 3 = 9`



So **_the maximum value_** that you can obtain is  **_9_**.





## Notes 



* **_The numbers_** *are always* **_positive_**. 

* **_The numbers_** *are in the range* **_(1  ≤  a, b, c  ≤  10)_**.

* *You can use the same operation* **_more than once_**.

* **It's not necessary** *to place all the signs and brackets*.

* **_Repetition_** *in numbers may occur* .

* You **_cannot swap the operands_**. For instance, in the given example **_you cannot get expression_** `(1 + 3) * 2 = 8`.



___

# Input >> Output Examples:



```

expressionsMatter(1,2,3)  ==>  return 9

```

## **_Explanation_**:

*After placing signs and brackets, the **_Maximum value_** obtained from the expression* `(1+2) * 3 = 9`.

___



```

expressionsMatter(1,1,1)  ==>  return 3

```

___

___



# [Playing with Numbers Series](https://www.codewars.com/collections/playing-with-numbers)



# [Playing With Lists/Arrays Series](https://www.codewars.com/collections/playing-with-lists-slash-arrays)



# [Bizarre Sorting-katas](https://www.codewars.com/collections/bizarre-sorting-katas)



# [For More Enjoyable Katas](http://www.codewars.com/users/MrZizoScream/authored)

___



## ALL translations are welcomed



## Enjoy Learning !!

# Zizou



---


🏷 `ALGORITHMS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5ae62fcf252e66d44d00008e)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
