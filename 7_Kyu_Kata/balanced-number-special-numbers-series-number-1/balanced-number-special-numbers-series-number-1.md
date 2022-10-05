# 7 kyu - Balanced Number (Special Numbers Series #1 ) 

##### **ID**: [5a4e3782880385ba68000018](https://www.codewars.com/kata/5a4e3782880385ba68000018) | **Slug**: [balanced-number-special-numbers-series-number-1](https://www.codewars.com/kata/5a4e3782880385ba68000018) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2018-01-04 ***by*** [MrZizoScream](https://www.codewars.com/users/MrZizoScream) | **Approved**: 2018-01-05 ***by*** [donaldsebleung](https://www.codewars.com/users/donaldsebleung)

##### **Languages Available**: cpp, python, c, csharp, javascript, java, crystal, ruby, nasm, haskell, julia, dart, php, typescript, coffeescript, shell, swift, prolog, clojure, rust

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2022-08-26

---

## Kata Description


A **balanced number** is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.



If the number has an odd number of digits, then there is only one middle digit. (For example, `92645` has one middle digit, `6`.) Otherwise, there are two middle digits. (For example, the middle digits of `1301` are `3` and `0`.)



The middle digit(s) should **not** be considered when determining whether a number is balanced or not, e.g. `413023` is a balanced number because the left sum and right sum are both `5`.



### The task

Given a number, find if it is balanced, and return the string `"Balanced"` or `"Not Balanced"` accordingly. The passed number will always be positive.





### Examples

1.

```

7 ==> return "Balanced"

```

Explanation:

* middle digit(s): 7

* sum of all digits to the left of the middle digit(s) -> 0

* sum of all digits to the right of the middle digit(s) -> 0

* 0 and 0 are equal, so it's balanced.



2.

```

295591 ==> return "Not Balanced"

```

Explanation:

* middle digit(s): 55

* sum of all digits to the left of the middle digit(s) -> 11

* sum of all digits to the right of the middle digit(s) -> 10

* 11 and 10 are not equal, so it's not balanced.





3.

```

959 ==> return "Balanced"

```

Explanation:

* middle digit(s): 5

* sum of all digits to the left of the middle digit(s) -> 9

* sum of all digits to the right of the middle digit(s) -> 9

* 9 and 9 are equal, so it's balanced.



4.

```

27102983 ==> return "Not Balanced"

```

Explanation:

* middle digit(s): 02

* sum of all digits to the left of the middle digit(s) -> 10

* sum of all digits to the right of the middle digit(s) -> 20

* 10 and 20 are not equal, so it's not balanced.





___



[Playing with Numbers Series](https://www.codewars.com/collections/playing-with-numbers)



[Playing With Lists/Arrays Series](https://www.codewars.com/collections/playing-with-lists-slash-arrays)



---


🏷 `FUNDAMENTALS | MATHEMATICS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5a4e3782880385ba68000018)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
