# 6 kyu - Simple Encryption #1 - Alternating Split

##### **ID**: [57814d79a56c88e3e0000786](https://www.codewars.com/kata/57814d79a56c88e3e0000786) | **Slug**: [simple-encryption-number-1-alternating-split](https://www.codewars.com/kata/57814d79a56c88e3e0000786) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2016-07-09 ***by*** [user5036852](https://www.codewars.com/users/user5036852) | **Approved**: 2016-08-08 ***by*** [zebulan](https://www.codewars.com/users/zebulan)

##### **Languages Available**: csharp, cpp, javascript, python, ruby, php, java, coffeescript, haskell, fsharp, clojure

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2021-11-21

---

## Kata Description


Implement a pseudo-encryption algorithm which given a string `S` and an integer `N` concatenates all the odd-indexed characters of `S` with all the even-indexed characters of `S`, this process should be repeated `N` times.



Examples:



```

encrypt("012345", 1)  =>  "135024"

encrypt("012345", 2)  =>  "135024"  ->  "304152"

encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"



encrypt("01234", 1)  =>  "13024"

encrypt("01234", 2)  =>  "13024"  ->  "32104"

encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

```



Together with the encryption function, you should also implement a decryption function which reverses the process.



If the string `S` is an empty value or the integer `N` is not positive, return the first argument without changes.



___



This kata is part of the Simple Encryption Series:



* [Simple Encryption #1 - Alternating Split](https://www.codewars.com/kata/simple-encryption-number-1-alternating-split)

* [Simple Encryption #2 - Index-Difference](https://www.codewars.com/kata/simple-encryption-number-2-index-difference)

* [Simple Encryption #3 - Turn The Bits Around](https://www.codewars.com/kata/simple-encryption-number-3-turn-the-bits-around)

* [Simple Encryption #4 - Qwerty](https://www.codewars.com/kata/simple-encryption-number-4-qwerty)



Have fun coding it and please don't forget to vote and rank this kata! :-)

---


🏷 `CRYPTOGRAPHY | ALGORITHMS | STRINGS | ARRAYS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/57814d79a56c88e3e0000786)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
