# 7 kyu - Maximum Multiple

##### **ID**: [5aba780a6a176b029800041c](https://www.codewars.com/kata/5aba780a6a176b029800041c) | **Slug**: [maximum-multiple](https://www.codewars.com/kata/5aba780a6a176b029800041c) | **Category**: `BUG_FIXES` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2018-03-27 ***by*** [MrZizoScream](https://www.codewars.com/users/MrZizoScream) | **Approved**: 2018-04-23 ***by*** [donaldsebleung](https://www.codewars.com/users/donaldsebleung)

##### **Languages Available**: cpp, ruby, javascript, crystal, python, nasm, fortran, csharp, java, lua, c, haskell, rust, php, dart, julia, typescript, coffeescript, elixir, reason, factor, r, racket, elm, clojure, forth, erlang, go, fsharp, prolog, groovy, solidity, kotlin, nim, objc, ocaml, powershell, purescript, scala, shell, sql, swift, vb, cfml, commonlisp, haxe, pascal, perl, raku, cobol, d

##### **My Completed Languages**: python ***as at*** 2022-10-02 | **Originally completed**: 2022-04-22

---

## Kata Description


# Task



**_Given_** a **_Divisor and a Bound_** , *Find the largest integer N* , Such That , 



# Conditions :



* **_N_**  is *divisible by divisor*



* **_N_**  is *less than or equal to bound* 



* **_N_**  is *greater than 0*.

___



# Notes 



* The **_parameters (divisor, bound)_** passed to the function are *only positive values* .

* *It's guaranteed that* a **divisor is Found** .

___

# Input >> Output Examples 



```

maxMultiple (2,7) ==> return (6)

```

## Explanation: 



**_(6)_** is divisible by **_(2)_** , **_(6)_** is less than or equal to bound **_(7)_** , and **_(6)_** is > 0 .

___

```

maxMultiple (10,50)  ==> return (50)

```

## Explanation:



**_(50)_** *is divisible by* **_(10)_** , **_(50)_** is less than or equal to bound **_(50)_** , and **_(50)_** is > 0 .*

___

```

maxMultiple (37,200) ==> return (185)

```

## Explanation:



**_(185)_** is divisible by **_(37)_** , **_(185)_** is less than or equal to bound **_(200)_** , and **_(185)_** is > 0 .

___

___



## [Playing with Numbers Series](https://www.codewars.com/collections/playing-with-numbers)



# [Playing With Lists/Arrays Series](https://www.codewars.com/collections/playing-with-lists-slash-arrays)



# [Bizarre Sorting-katas](https://www.codewars.com/collections/bizarre-sorting-katas)



# [For More Enjoyable Katas](http://www.codewars.com/users/MrZizoScream/authored)

___



## ALL translations are welcomed



## Enjoy Learning !!

# Zizou



~~~if:java

Java's default return statement can be any `int`, a divisor **will** be found.

~~~



~~~if:nasm

## NASM-specific notes



The function declaration is `int max_multiple(int divisor, int bound)` where the first argument is the divisor and the second one is the bound.

~~~

---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5aba780a6a176b029800041c)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
