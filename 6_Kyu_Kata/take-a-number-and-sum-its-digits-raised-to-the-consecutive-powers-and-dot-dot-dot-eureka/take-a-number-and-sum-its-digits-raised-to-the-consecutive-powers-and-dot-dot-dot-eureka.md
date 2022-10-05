# 6 kyu - Take a Number And Sum  Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

##### **ID**: [5626b561280a42ecc50000d1](https://www.codewars.com/kata/5626b561280a42ecc50000d1) | **Slug**: [take-a-number-and-sum-its-digits-raised-to-the-consecutive-powers-and-dot-dot-dot-eureka](https://www.codewars.com/kata/5626b561280a42ecc50000d1) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2015-10-20 ***by*** [raulbc777](https://www.codewars.com/users/raulbc777) | **Approved**: 2016-03-11 ***by*** [myjinxin2015](https://www.codewars.com/users/myjinxin2015)

##### **Languages Available**: python, ruby, javascript, coffeescript, java, csharp, haskell, clojure, rust, go, d, julia, scala, c

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2021-11-14

---

## Kata Description


The number ```89``` is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. 

What's the use of saying "Eureka"? Because this sum gives the same number.



In effect: ```89 = 8^1 + 9^2``` 



The next number in having this property is ```135```.



See this property again: ```135 = 1^1 + 3^2 + 5^3```



We need a function to collect these numbers, that may receive two integers ```a```, ```b``` that defines the range ```[a, b]``` (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.



Let's see some cases (input -> output):

```

1, 10 -> [1, 2, 3, 4, 5, 6, 7, 8, 9]



1, 100 -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

```



If there are no numbers of this kind in the range [a, b] the function should output an empty list.

```

90, 100 --> []

```

Enjoy it!!





---


🏷 `FUNDAMENTALS | MATHEMATICS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5626b561280a42ecc50000d1)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
