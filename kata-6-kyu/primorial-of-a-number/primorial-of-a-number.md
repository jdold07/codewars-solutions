# 6 kyu - Primorial Of  a Number 

##### **ID**: [5a99a03e4a6b34bb3c000124](https://www.codewars.com/kata/5a99a03e4a6b34bb3c000124) | **Slug**: [primorial-of-a-number](https://www.codewars.com/kata/5a99a03e4a6b34bb3c000124) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2018-03-02 ***by*** [MrZizoScream](https://www.codewars.com/users/MrZizoScream) | **Approved**: 2018-05-16 ***by*** [GiacomoSorbi](https://www.codewars.com/users/GiacomoSorbi)

##### **Languages Available**: cpp, python, ruby, crystal, javascript, haskell, c, java, nasm, coffeescript, dart, julia, elixir, php, reason, typescript, factor, racket, r, shell, swift, prolog, rust, clojure, cobol

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2022-09-10

---

## Kata Description


# Definition (Primorial Of a Number)



*Is similar to factorial of a number*, **_In primorial_**, not all the natural numbers get multiplied, **_only prime numbers are multiplied to calculate the primorial of a number_**. It's denoted with **_P_**<sub>**_#_**</sub> and it is the product of the first n prime numbers.

___ 



# Task



**_Given_** *a number N* , **_calculate its primorial_**. ![!alt](https://i.imgur.com/mdX8dJP.png)  ![!alt](https://i.imgur.com/mdX8dJP.png)  

___



# Notes



* **_Only positive_** numbers *will be passed (N > 0)* .

___



# Input >> Output Examples:



``` cpp

1- numPrimorial (3) ==> return (30)

```

```prolog

1 - num_primorial(3, 30).

```

```rust

1 - num_primorial(3) // 30

```

```clojure

1 - (num-primorial 3) ;; 30

```



## **_Explanation_**:



**_Since_** *the passed number is (3)* ,**_Then_** **_the primorial_** *should obtained by multiplying*  ```2 * 3 * 5 = 30 .```



### Mathematically written as , **_P_**<sub>3</sub>**_#_** = 30 .

___ 



```cpp

2- numPrimorial (5) ==> return (2310)

```

```prolog

2 - num_primorial(5, 2310).

```

```rust

2 - num_primorial(5) // 2310

```

```clojure

2 - (num-primorial 5) ;; 2310

```



## **_Explanation_**:





**_Since_** *the passed number is (5)* ,**_Then_** **_the primorial_** *should obtained by multiplying*  ``` 2 * 3 * 5 * 7 * 11 = 2310 .```



### Mathematically written as , **_P_**<sub>5</sub>**_#_** = 2310 .

___



```cpp

3- numPrimorial (6) ==> return (30030)

```

```prolog

3 - num_primorial(6, 30030).

```

```rust

3 - num_primorial(6) // 30030

```

```clojure

3 - (num-primorial 6) ;; 30030

```



## **_Explanation_**: 



**_Since_** *the passed number is (6)* ,**_Then_** **_the primorial_** *should obtained by multiplying*  ``` 2 * 3 * 5 * 7 * 11 * 13 = 30030 .```



### Mathematically written as , **_P_**<sub>6</sub>**_#_** = 30030 .

___

___

___



# [Playing with Numbers Series](https://www.codewars.com/collections/playing-with-numbers)



# [Playing With Lists/Arrays Series](https://www.codewars.com/collections/playing-with-lists-slash-arrays)



# [For More Enjoyable Katas](http://www.codewars.com/users/MrZizoScream/authored)

___



## ALL translations are welcomed



## Enjoy Learning !!

# Zizou



---


🏷 `FUNDAMENTALS | ARRAYS | NUMBER THEORY`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5a99a03e4a6b34bb3c000124)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
